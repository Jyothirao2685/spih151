from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    # API Keys
    gemini_api_key: str = ""
    
    # Supabase
    supabase_url: str = ""
    supabase_service_role_key: str = ""
    
    # External APIs
    ncbi_email: str = ""
    ncbi_api_key: str = ""
    chembl_base_url: str = "https://www.ebi.ac.uk/chembl/api/data"
    
    # Security
    allowed_origins: str = "http://localhost:3000"
    
    # Rate Limiting
    rate_limit_requests: int = 20
    rate_limit_window_seconds: int = 3600
    
    class Config:
        env_file = ".env"
        env_file_encoding = 'utf-8'

settings = Settings()
