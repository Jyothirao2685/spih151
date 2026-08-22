from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

app = FastAPI(
    title="BioMindQ API",
    description="Backend API for BioMindQ Biomedical Research Assistant",
    version="1.0.0"
)

# CORS configuration
origins = [origin.strip() for origin in settings.allowed_origins.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.api.chat import router as chat_router
from app.api.compounds import router as compound_router

app.include_router(chat_router, prefix="/api/v1")
app.include_router(compound_router, prefix="/api/v1")

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}
