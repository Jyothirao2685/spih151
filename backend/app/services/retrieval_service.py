from typing import List, Dict, Any
from app.services.pubmed_service import pubmed_service
from app.services.chembl_service import chembl_service

import re

class RetrievalService:
    def extract_keywords(self, query: str) -> list:
        stop_words = {"what", "is", "the", "of", "and", "how", "does", "in", "for", "a", "an", "to", "are", "on", "about", "molecular", "formula", "weight", "tell", "me", "research", "exists", "known", "studied", "connection", "between"}
        words = re.findall(r'\b[A-Za-z0-9\-]+\b', query)
        return [w for w in words if w.lower() not in stop_words and len(w) > 2]

    async def retrieve_context(self, query: str) -> Dict[str, List[Dict[str, Any]]]:
        """Determine what sources to use and retrieve evidence."""
        keywords = self.extract_keywords(query)
        search_term = " ".join(keywords) if keywords else query
        
        # Search PubMed using the extracted keywords rather than the full natural language question
        pubmed_data = await pubmed_service.search(search_term, max_results=5)
        
        chembl_data = []
        # For ChEMBL, try searching the most likely compound name (usually a single word)
        for keyword in keywords:
            if len(keyword) > 3: # Avoid searching tiny acronyms unless necessary
                mol = await chembl_service.search_compound(keyword)
                if mol:
                    chembl_data.append(mol)
                    break # Stop after finding the primary compound
                
        return {
            "pubmed": pubmed_data,
            "chembl": chembl_data
        }

retrieval_service = RetrievalService()
