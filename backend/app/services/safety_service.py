from typing import Tuple

class SafetyService:
    MEDICAL_ADVICE_KEYWORDS = [
        "should i take", "dosage", "diagnose", "treatment for me", 
        "cure my", "prescribe", "my symptoms", "am i sick"
    ]
    
    def check_query(self, query: str) -> Tuple[bool, str]:
        """Check if the query violates safety rules."""
        query_lower = query.lower()
        for kw in self.MEDICAL_ADVICE_KEYWORDS:
            if kw in query_lower:
                return False, "This query appears to ask for medical advice. BioMindQ is a research assistant and cannot provide medical diagnosis, treatment recommendations, or dosage advice. Please consult a healthcare professional."
        return True, ""

    def validate_answer(self, answer_data: dict, retrieved_sources: set) -> dict:
        """Validate the LLM's answer before returning it."""
        # Ensure evidence level is valid (allow both upper and lowercase)
        level = answer_data.get("evidence_level", "").lower()
        if level not in ["high", "moderate", "low", "very low", "insufficient", "ai_knowledge"]:
            answer_data["evidence_level"] = "insufficient"
        else:
            answer_data["evidence_level"] = level.upper()
            
        # Filter out hallucinated sources
        valid_sources = []
        for src in answer_data.get("sources", []):
            if src.get("source_id") in retrieved_sources:
                valid_sources.append(src)
        
        answer_data["sources"] = valid_sources
        
        # Clean claims of invalid evidence IDs
        for claim in answer_data.get("claims", []):
            valid_ids = [eid for eid in claim.get("evidence_ids", []) if eid in retrieved_sources]
            claim["evidence_ids"] = valid_ids
            
        return answer_data

safety_service = SafetyService()
