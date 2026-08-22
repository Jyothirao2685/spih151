from fastapi import APIRouter, Header, HTTPException
from typing import Optional
import uuid

from app.models.requests import ChatRequest
from app.models.responses import ChatResponse, AnswerData, EvidenceResponse
from app.services.retrieval_service import retrieval_service
from app.services.gemini_service import gemini_service
from app.services.safety_service import safety_service
from app.services.rate_limit_service import rate_limit_service
from app.prompts.biomedical import SYSTEM_PROMPT, build_rag_prompt

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest, x_device_id: Optional[str] = Header(None)):
    query = request.message
    
    # 0. Rate Limit
    rate_limit_service.check_rate_limit(device_id=x_device_id)
    
    # 1. Safety Check
    is_safe, safety_msg = safety_service.check_query(query)
    if not is_safe:
        return ChatResponse(
            message_id=str(uuid.uuid4()),
            conversation_id=request.conversation_id,
            answer=AnswerData(
                summary=safety_msg,
                claims=[],
                evidence_level="insufficient",
                limitations=["Safety policy violation: Medical advice requested."]
            ),
            evidence=[],
            sources=[],
            research_only=True
        )

    # 2. Retrieve Evidence
    context_data = await retrieval_service.retrieve_context(query)
    pubmed_data = context_data.get("pubmed", [])
    chembl_data = context_data.get("chembl", [])
    
    # Track valid source IDs for hallucination checking
    valid_source_ids = set()
    for item in pubmed_data:
        valid_source_ids.add(item["source_id"])
    for item in chembl_data:
        valid_source_ids.add(item["chembl_id"])

    # Load recent conversation history
    from app.services.memory_service import memory_service
    history = memory_service.get_conversation_history(request.conversation_id)

    # Calculate GRADE-inspired evidence assessment
    from app.services.evidence_service import evidence_engine
    assessment = evidence_engine.assess_evidence(pubmed_data, chembl_data)

    # 3. Build RAG Prompt
    rag_prompt = build_rag_prompt(query, pubmed_data, chembl_data, assessment, history)
    
    # 4. Generate Answer via Gemini
    try:
        raw_json = await gemini_service.generate_json(
            prompt=rag_prompt,
            system_instruction=SYSTEM_PROMPT
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to generate answer from LLM")
        
    # 5. Output Validation
    validated_json = safety_service.validate_answer(raw_json, valid_source_ids)
    
    # 6. Format Evidence Response
    evidence_list = []
    for item in pubmed_data:
        evidence_list.append(
            EvidenceResponse(
                id=str(uuid.uuid4()),
                source="pubmed",
                source_id=item["source_id"],
                title=item["title"],
                url=item["url"]
            )
        )
    for item in chembl_data:
        evidence_list.append(
            EvidenceResponse(
                id=str(uuid.uuid4()),
                source="chembl",
                source_id=item["chembl_id"],
                title=item["name"],
                url=item["url"]
            )
        )

    # 7. Save to Database
    # We run this synchronously here for MVP simplicity, or we could dispatch it as a background task.
    # In a real app we would use BackgroundTasks.
    from app.services.memory_service import memory_service
    memory_service.save_chat_interaction(
        conversation_id=request.conversation_id,
        device_id=x_device_id or "anonymous",
        user_query=query,
        answer_data=validated_json,
        evidence_list=evidence_list
    )

    return ChatResponse(
        message_id=str(uuid.uuid4()),
        conversation_id=request.conversation_id,
        answer=AnswerData(**validated_json),
        evidence=evidence_list,
        sources=validated_json.get("sources", []),
        research_only=True
    )
