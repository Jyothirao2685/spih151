import asyncio
import httpx

async def main():
    queries = [
        "What is metformin?",
        "What is the molecular weight of aspirin?",
        "What research exists on metformin and colorectal cancer?",
        "What are known targets of EGFR?",
        "Does aspirin cure cancer?"
    ]
    async with httpx.AsyncClient() as client:
        for q in queries:
            print(f"\nQ: {q}")
            try:
                res = await client.post('http://localhost:8000/api/v1/chat', json={'conversation_id':'test-suite','message':q}, timeout=30.0)
                if res.status_code == 200:
                    data = res.json()
                    answer = data.get('answer', {})
                    print(f"Level: {answer.get('evidence_level')}")
                    print(f"A: {answer.get('summary')}")
                else:
                    print(f"Error: {res.status_code} {res.text}")
            except Exception as e:
                print(f"Failed: {e}")

asyncio.run(main())
