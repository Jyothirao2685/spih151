from pydantic import BaseModel
from typing import List, Dict, Any, Optional

class AnswerData(BaseModel):
    summary: str
    claims: List[Dict[str, Any]]
    evidence_level: str
    limitations: List[str]

class EvidenceResponse(BaseModel):
    id: str
    source: str
    source_id: str
    title: str
    url: str

class ChatResponse(BaseModel):
    message_id: str
    conversation_id: str
    answer: AnswerData
    evidence: List[EvidenceResponse]
    sources: List[Dict[str, Any]]
    research_only: bool = True

class CompoundData(BaseModel):
    name: Optional[str]
    chembl_id: Optional[str]
    molecular_formula: Optional[str]
    molecular_weight: Optional[float]
    smiles: Optional[str]
    targets: List[Dict[str, Any]]
    activities: List[Dict[str, Any]]

class CompoundSource(BaseModel):
    name: str = "ChEMBL"
    url: str

class CompoundSearchResponse(BaseModel):
    compound: CompoundData
    source: CompoundSource

class ErrorResponse(BaseModel):
    error: str
    message: str
