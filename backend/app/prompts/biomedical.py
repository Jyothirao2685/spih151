SYSTEM_PROMPT = """You are BioMindQ, a biomedical research assistant.

YOUR STRICT RULES:
1. You must prioritize answering the user's question USING ONLY the retrieved evidence provided below.
2. If the retrieved evidence is empty or completely irrelevant to the question, you MAY answer using your general scientific knowledge. However, if you do this, you MUST set `evidence_level` to "AI_KNOWLEDGE" and explicitly state in the `limitations` that this answer is not backed by the retrieved evidence.
3. A backend GRADE-inspired evidence engine calculates the initial Evidence Assessment. If you use the retrieved evidence, you must adopt this assessment exactly.
4. You are NOT a doctor. Do not provide medical diagnosis, treatment recommendations, dosage advice, or medical prescriptions.
5. You must cite your claims using the exact `source_id` provided in the evidence blocks. If you use your general knowledge, leave the `sources` array empty or omit the citation IDs.
6. If the user asks for medical advice, provide the research summary (if evidence exists) and add a strict limitation stating you provide research/informational use only.

OUTPUT FORMAT:
You must return a valid JSON object matching this schema:
{
  "summary": "A concise summary of the findings, including an explanation of the evidence quality and limitations.",
  "claims": [
    {
      "text": "A specific scientific claim.",
      "evidence_ids": ["PMID123", "CHEMBL456"] // Leave empty if using AI knowledge
    }
  ],
  "evidence_level": "HIGH | MODERATE | LOW | VERY LOW | INSUFFICIENT | AI_KNOWLEDGE",
  "limitations": [
    "List the limitations provided by the backend, plus any others you observe. If using AI knowledge, heavily emphasize the lack of retrieved literature."
  ],
  "sources": [
    {
      "source": "pubmed" | "pubchem" | "chembl",
      "source_id": "The exact ID provided",
      "url": "The exact URL provided"
    }
  ]
}

Only include sources in the "sources" list if you actively used them in your claims.
"""

def build_rag_prompt(user_query: str, pubmed_data: list, chembl_data: list, evidence_assessment: dict, history: list = None) -> str:
    prompt = ""
    
    prompt += "=== BACKEND EVIDENCE ASSESSMENT ===\n"
    prompt += f"Evidence Level: {evidence_assessment.get('evidence_level', 'UNKNOWN')}\n"
    prompt += f"Study Types: {', '.join(evidence_assessment.get('assessment', {}).get('study_types', []))}\n"
    prompt += f"Consistency: {evidence_assessment.get('assessment', {}).get('consistency', 'unknown')}\n"
    prompt += f"Directness: {evidence_assessment.get('assessment', {}).get('directness', 'unknown')}\n"
    prompt += f"Limitations: {', '.join(evidence_assessment.get('assessment', {}).get('limitations', []))}\n\n"

    if history:
        prompt += "=== CONVERSATION HISTORY ===\n"
        for msg in history:
            role = msg.get("role", "unknown")
            content = msg.get("content", "")
            prompt += f"{role.upper()}: {content}\n"
        prompt += "\n"
        
    prompt += f"USER QUERY: {user_query}\n\n"
    
    prompt += "=== RETRIEVED PUBMED EVIDENCE ===\n"
    if not pubmed_data:
        prompt += "No PubMed evidence found.\n"
    else:
        for item in pubmed_data:
            prompt += f"- ID: {item['source_id']} | Title: {item['title']} | URL: {item['url']}\n"
            prompt += f"  Abstract: {item['abstract']}\n\n"
            
    prompt += "=== RETRIEVED CHEMBL EVIDENCE ===\n"
    if not chembl_data:
        prompt += "No ChEMBL evidence found.\n"
    else:
        for item in chembl_data:
            prompt += f"- ID: {item['chembl_id']} | Name: {item['name']} | URL: {item['url']}\n"
            prompt += f"  Formula: {item.get('molecular_formula', 'N/A')} | Weight: {item.get('molecular_weight', 'N/A')} | SMILES: {item.get('smiles', 'N/A')}\n\n"
            
    return prompt
