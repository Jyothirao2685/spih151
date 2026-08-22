from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="BioMindQ API",
    description="Backend API for BioMindQ Biomedical Research Assistant",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://spih151-uhyf.vercel.app",
        "http://localhost:3000",
    ],
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