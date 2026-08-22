from fastapi import HTTPException
from app.core.config import settings
from app.core.database import get_supabase
from datetime import datetime, timedelta, timezone

class RateLimitService:
    def check_rate_limit(self, device_id: str = None, ip: str = None):
        if not device_id:
            return
            
        try:
            supabase = get_supabase()
            
            # Time window for rate limiting
            window = timedelta(seconds=settings.rate_limit_window_seconds)
            time_threshold = (datetime.now(timezone.utc) - window).isoformat()

            # Query conversations for this device
            conv_resp = supabase.table("conversations").select("id").eq("anonymous_device_id", device_id).execute()
            conv_ids = [c["id"] for c in conv_resp.data] if conv_resp.data else []

            if not conv_ids:
                return

            # Count messages sent by this user in the window across all their conversations
            msg_resp = supabase.table("messages").select("id", count="exact")\
                .in_("conversation_id", conv_ids)\
                .eq("role", "user")\
                .gte("created_at", time_threshold)\
                .execute()

            count = msg_resp.count if msg_resp.count is not None else 0

            if count >= settings.rate_limit_requests:
                raise HTTPException(status_code=429, detail={
                    "error": "rate_limit_exceeded",
                    "message": "Usage limit reached. Please try again later."
                })
        except HTTPException:
            raise
        except Exception as e:
            # Failsafe: if DB is down, log error but allow request to prevent hard outage
            print(f"Rate limiter DB check failed: {e}")

rate_limit_service = RateLimitService()
