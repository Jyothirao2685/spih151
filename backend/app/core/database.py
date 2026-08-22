from supabase import create_client, Client
from app.core.config import settings

def get_supabase() -> Client:
    """Initialize and return a Supabase client."""
    if not settings.supabase_url or not settings.supabase_service_role_key:
        # In a real scenario, this would block startup if not configured.
        # For now, we allow it to return None or we can raise an error.
        raise ValueError("Supabase URL and Service Role Key must be configured.")
        
    return create_client(
        settings.supabase_url, 
        settings.supabase_service_role_key
    )
