import asyncio
from app.services.retrieval_service import retrieval_service
from app.prompts.biomedical import build_rag_prompt

async def main():
    data = await retrieval_service.retrieve_context("What is the molecular formula and weight of Aspirin?")
    print("CHEMBL DATA:", data["chembl"])
    prompt = build_rag_prompt("query", data["pubmed"], data["chembl"])
    print("\n\nPROMPT:\n", prompt)

asyncio.run(main())
