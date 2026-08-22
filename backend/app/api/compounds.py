from fastapi import APIRouter, HTTPException
from app.models.requests import CompoundSearchRequest
from app.models.responses import CompoundSearchResponse, CompoundData, CompoundSource
from app.services.chembl_service import chembl_service

router = APIRouter()

@router.post("/compound/search", response_model=CompoundSearchResponse)
async def search_compound(request: CompoundSearchRequest):
    data = await chembl_service.search_compound(request.query)
    if not data:
        raise HTTPException(status_code=404, detail="Compound not found in ChEMBL")
        
    return CompoundSearchResponse(
        compound=CompoundData(
            name=data.get("name"),
            chembl_id=data.get("chembl_id"),
            molecular_formula=data.get("molecular_formula"),
            molecular_weight=data.get("molecular_weight"),
            smiles=data.get("smiles"),
            targets=[],
            activities=[]
        ),
        source=CompoundSource(
            name="ChEMBL",
            url=data.get("url")
        )
    )
