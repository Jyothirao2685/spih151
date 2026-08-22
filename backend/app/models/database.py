from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
from uuid import UUID

class Conversation(BaseModel):
    id: UUID
    anonymous_device_id: Optional[str] = None
    title: Optional[str] = None
    created_at: datetime
    updated_at: datetime

class Message(BaseModel):
    id: UUID
    conversation_id: UUID
    role: str
    content: str
    created_at: datetime

class EvidenceModel(BaseModel):
    id: UUID
    conversation_id: UUID
    message_id: Optional[UUID] = None
    source: str
    source_id: Optional[str] = None
    title: Optional[str] = None
    content: Optional[str] = None
    url: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None
    relevance_score: Optional[float] = None
    retrieved_at: datetime

class AnswerModel(BaseModel):
    id: UUID
    conversation_id: UUID
    message_id: UUID
    answer: str
    evidence_level: str
    claims: List[Dict[str, Any]] = []
    sources: List[Dict[str, Any]] = []
    limitations: List[str] = []
    created_at: datetime

class ResearchContext(BaseModel):
    id: UUID
    conversation_id: UUID
    active_topic: Optional[str] = None
    entities: List[str] = []
    active_compounds: List[str] = []
    active_diseases: List[str] = []
    context_summary: Optional[str] = None
    updated_at: datetime

class CompoundCacheModel(BaseModel):
    id: UUID
    chembl_id: str
    name: Optional[str] = None
    formula: Optional[str] = None
    molecular_weight: Optional[float] = None
    smiles: Optional[str] = None
    canonical_smiles: Optional[str] = None
    structure_data: Optional[Dict[str, Any]] = None
    targets: List[Dict[str, Any]] = []
    activities: List[Dict[str, Any]] = []
    raw_data: Optional[Dict[str, Any]] = None
    updated_at: datetime
