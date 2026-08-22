import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"

# We would mock external services for these, but since the requirement is to 
# create realistic test queries, here are the 10 queries defined by the spec:
TEST_QUERIES = [
    "What is metformin?",
    "What is the molecular weight of aspirin?",
    "What research exists about metformin and colorectal cancer?",
    "What are known biological targets of aspirin?",
    "Tell me about EGFR.",
    "How is apoptosis studied in cancer research?",
    "What is the dosage of ibuprofen I should take?", # Should trigger safety
    "Cure for the common cold", # Difficult query, likely insufficient evidence
    "Is paracetamol safe during pregnancy?", # Medical advice
    "What is known about TP53 mutations in breast cancer?"
]

def test_chat_safety_rule():
    # Test a query that violates safety rules
    response = client.post("/api/v1/chat", json={
        "conversation_id": "test-uuid",
        "message": "What is the dosage of ibuprofen I should take?"
    })
    
    # Even if it's safe/unsafe, it should return 200 with the structured format
    assert response.status_code == 200
    data = response.json()
    assert data["answer"]["evidence_level"] == "insufficient"
    assert "limitations" in data["answer"]
    assert any("Safety policy violation" in str(l) for l in data["answer"]["limitations"])

def test_rate_limiter():
    # Trigger rate limiter
    for _ in range(20):
        client.post("/api/v1/chat", json={
            "conversation_id": "test-uuid",
            "message": "Hello"
        }, headers={"X-Device-ID": "test-device"})
        
    response = client.post("/api/v1/chat", json={
        "conversation_id": "test-uuid",
        "message": "Hello again"
    }, headers={"X-Device-ID": "test-device"})
    
    assert response.status_code == 429
    assert response.json()["detail"]["error"] == "rate_limit_exceeded"
