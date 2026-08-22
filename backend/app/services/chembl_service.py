import httpx
from typing import Optional, Dict, Any
from app.core.config import settings

class ChemblService:
    def __init__(self):
        self.base_url = settings.chembl_base_url
        
    async def search_compound(self, query: str) -> Optional[Dict[str, Any]]:
        """Search for a compound by name and return structured data."""
        async with httpx.AsyncClient() as client:
            try:
                # Search molecule by exact name (case-insensitive)
                response = await client.get(
                    f"{self.base_url}/molecule.json",
                    params={"pref_name__iexact": query},
                    timeout=10.0
                )
                response.raise_for_status()
                data = response.json()
                
                molecules = data.get("molecules", [])
                if not molecules:
                    return None
                    
                # Take the first best match
                mol = molecules[0]
                
                chembl_id = mol.get("molecule_chembl_id")
                props = mol.get("molecule_properties", {}) or {}
                struct = mol.get("molecule_structures", {}) or {}
                
                return {
                    "source": "chembl",
                    "chembl_id": chembl_id,
                    "name": mol.get("pref_name", query.capitalize()),
                    "synonyms": [s.get("molecule_synonym") for s in mol.get("molecule_synonyms", []) if s.get("molecule_synonym")],
                    "molecular_formula": props.get("full_mwt_freebase") or props.get("full_molformula"), # fallback
                    "molecular_weight": props.get("full_mwt"),
                    "smiles": struct.get("canonical_smiles"),
                    "targets": [], # For MVP, we can leave these empty or fetch if needed
                    "activities": [],
                    "url": f"https://www.ebi.ac.uk/chembl/compound_report_card/{chembl_id}/"
                }
            except Exception as e:
                print(f"ChEMBL search failed: {e}. Attempting PubChem fallback...")
                
                # PubChem Fallback
                try:
                    pubchem_url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{query}/property/MolecularFormula,MolecularWeight,CanonicalSMILES/JSON"
                    pb_res = await client.get(pubchem_url, timeout=10.0)
                    if pb_res.status_code == 200:
                        pb_data = pb_res.json()
                        props = pb_data.get("PropertyTable", {}).get("Properties", [])
                        if props:
                            p = props[0]
                            return {
                                "source": "pubchem",
                                "chembl_id": str(p.get("CID")),
                                "name": query.capitalize(),
                                "molecular_formula": p.get("MolecularFormula"),
                                "molecular_weight": str(p.get("MolecularWeight")),
                                "smiles": p.get("CanonicalSMILES"),
                                "targets": [],
                                "activities": [],
                                "url": f"https://pubchem.ncbi.nlm.nih.gov/compound/{p.get('CID')}"
                            }
                except Exception as pb_err:
                    print(f"PubChem fallback also failed: {pb_err}")
                    
                return None

chembl_service = ChemblService()
