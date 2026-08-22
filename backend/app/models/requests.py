from pydantic import BaseModel
from typing import Optional

class ChatRequest(BaseModel):
    conversation_id: str
    message: str

class CompoundSearchRequest(BaseModel):
    query: str
