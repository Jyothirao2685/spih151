import httpx
import xml.etree.ElementTree as ET
from typing import List, Dict, Any
from app.core.config import settings

class PubMedService:
    def __init__(self):
        self.base_url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
        
    async def search(self, query: str, max_results: int = 5) -> List[Dict[str, Any]]:
        """Search PubMed and fetch details for the top results."""
        params = {
            "db": "pubmed",
            "term": query,
            "retmode": "json",
            "retmax": max_results,
            "sort": "relevance",
        }
        
        if settings.ncbi_api_key:
            params["api_key"] = settings.ncbi_api_key
        if settings.ncbi_email:
            params["email"] = settings.ncbi_email
            
        async with httpx.AsyncClient() as client:
            try:
                response = await client.get(f"{self.base_url}/esearch.fcgi", params=params, timeout=10.0)
                response.raise_for_status()
                data = response.json()
                
                id_list = data.get("esearchresult", {}).get("idlist", [])
                if not id_list:
                    return []
                    
                return await self._fetch_details(client, id_list)
            except Exception as e:
                # Log error
                print(f"PubMed search failed: {e}")
                return []
                
    async def _fetch_details(self, client: httpx.AsyncClient, id_list: List[str]) -> List[Dict[str, Any]]:
        """Fetch details for a list of PubMed IDs."""
        ids_str = ",".join(id_list)
        params = {
            "db": "pubmed",
            "id": ids_str,
            "retmode": "xml"
        }
        
        if settings.ncbi_api_key:
            params["api_key"] = settings.ncbi_api_key
            
        try:
            response = await client.get(f"{self.base_url}/efetch.fcgi", params=params, timeout=15.0)
            response.raise_for_status()
            return self._parse_pubmed_xml(response.text)
        except Exception as e:
            print(f"PubMed fetch failed: {e}")
            return []

    def _parse_pubmed_xml(self, xml_text: str) -> List[Dict[str, Any]]:
        """Parse NCBI eFetch XML response into structured data."""
        results = []
        try:
            root = ET.fromstring(xml_text)
            for article in root.findall(".//PubmedArticle"):
                pmid_elem = article.find(".//PMID")
                if pmid_elem is None:
                    continue
                pmid = pmid_elem.text
                
                title_elem = article.find(".//ArticleTitle")
                title = title_elem.text if title_elem is not None else "No title available"
                
                abstract_elem = article.find(".//AbstractText")
                abstract = abstract_elem.text if abstract_elem is not None else "No abstract available"
                
                journal_elem = article.find(".//Title")
                journal = journal_elem.text if journal_elem is not None else "Unknown Journal"
                
                pub_date = "Unknown Date"
                pub_date_elem = article.find(".//PubDate")
                if pub_date_elem is not None:
                    year = pub_date_elem.find("Year")
                    if year is not None:
                        pub_date = year.text

                # Combine multiple abstract sections if they exist
                abstract_texts = article.findall(".//AbstractText")
                if len(abstract_texts) > 1:
                    abstract = " ".join([t.text for t in abstract_texts if t.text])

                results.append({
                    "source": "pubmed",
                    "source_id": pmid,
                    "title": title,
                    "abstract": abstract,
                    "journal": journal,
                    "publication_date": pub_date,
                    "url": f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/"
                })
        except Exception as e:
            print(f"XML parse error: {e}")
            
        return results

pubmed_service = PubMedService()
