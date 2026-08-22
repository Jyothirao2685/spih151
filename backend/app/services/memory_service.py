import uuid
from typing import Optional, List, Dict, Any
from app.core.database import get_supabase

class MemoryService:
    def get_conversation_history(self, conversation_id: str) -> List[Dict[str, Any]]:
        """Retrieve previous messages for context."""
        try:
            print(f"[DEBUG] Fetching memory for conversation: {conversation_id}")
            supabase = get_supabase()
            # Log the masked key to ensure it's loaded correctly
            key = supabase.supabase_key
            masked_key = f"{key[:10]}...{key[-5:]}" if key else "None"
            print(f"[DEBUG] Using Supabase URL: {supabase.supabase_url}")
            print(f"[DEBUG] Using Supabase Key: {masked_key}")
            
            response = supabase.table("messages").select("*").eq("conversation_id", conversation_id).order("created_at").limit(10).execute()
            print(f"[DEBUG] Successfully fetched {len(response.data)} messages.")
            return response.data
        except Exception as e:
            print(f"[ERROR] Failed to fetch memory: {e}")
            if hasattr(e, 'response'):
                print(f"[ERROR] Response text: {e.response.text}")
            return []

    def save_chat_interaction(self, conversation_id: str, device_id: str, user_query: str, answer_data: dict, evidence_list: list):
        """Save the user query, LLM response, and evidence to Supabase."""
        try:
            supabase = get_supabase()
            
            # Ensure conversation exists
            conv_resp = supabase.table("conversations").select("id").eq("id", conversation_id).execute()
            if not conv_resp.data:
                supabase.table("conversations").insert({
                    "id": conversation_id,
                    "anonymous_device_id": device_id,
                    "title": user_query[:50]
                }).execute()

            # Save user message
            user_msg_id = str(uuid.uuid4())
            supabase.table("messages").insert({
                "id": user_msg_id,
                "conversation_id": conversation_id,
                "role": "user",
                "content": user_query
            }).execute()

            # Save assistant message
            ast_msg_id = str(uuid.uuid4())
            supabase.table("messages").insert({
                "id": ast_msg_id,
                "conversation_id": conversation_id,
                "role": "assistant",
                "content": answer_data.get("summary", "")
            }).execute()

            # Save evidence
            for ev in evidence_list:
                supabase.table("evidence").insert({
                    "id": str(uuid.uuid4()),
                    "conversation_id": conversation_id,
                    "message_id": ast_msg_id,
                    "source": ev.source,
                    "source_id": ev.source_id,
                    "title": ev.title,
                    "url": ev.url
                }).execute()
                
            # Save answer block
            supabase.table("answers").insert({
                "id": str(uuid.uuid4()),
                "conversation_id": conversation_id,
                "message_id": ast_msg_id,
                "answer": answer_data.get("summary", ""),
                "evidence_level": answer_data.get("evidence_level", "insufficient"),
                "claims": answer_data.get("claims", []),
                "sources": answer_data.get("sources", []),
                "limitations": answer_data.get("limitations", [])
            }).execute()
            
            print(f"[DEBUG] Successfully saved interaction to Supabase.")
            
        except Exception as e:
            print(f"[ERROR] Failed to save interaction to Supabase: {e}")
            if hasattr(e, 'response'):
                print(f"[ERROR] Response text: {e.response.text}")
            # We don't want to crash the request if saving telemetry fails
            pass

memory_service = MemoryService()
