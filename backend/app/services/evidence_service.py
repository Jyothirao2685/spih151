import re
from typing import List, Dict, Any

class EvidenceEngine:
    """
    A lightweight, GRADE-inspired evidence assessment engine.
    This calculates evidence quality using deterministic rules before LLM generation.
    """
    
    # Simple keyword heuristics for study types
    STUDY_TYPES = {
        "meta-analysis": r"\b(meta-analysis|meta analysis)\b",
        "systematic_review": r"\b(systematic review)\b",
        "randomized_trial": r"\b(randomized controlled trial|rct|randomised)\b",
        "observational": r"\b(cohort|case-control|observational|retrospective|cross-sectional)\b",
        "in_vitro": r"\b(in vitro|cell line|cultured)\b",
        "animal": r"\b(mice|murine|rat|animal model|in vivo)\b",
        "case_report": r"\b(case report|case study)\b"
    }

    def assess_evidence(self, pubmed_data: List[Dict[str, Any]], chembl_data: List[Dict[str, Any]]) -> Dict[str, Any]:
        if not pubmed_data and not chembl_data:
            return {
                "evidence_level": "INSUFFICIENT",
                "assessment": {
                    "study_types": [],
                    "consistency": "unknown",
                    "directness": "unknown",
                    "limitations": ["No evidence was retrieved to answer the query."]
                }
            }
            
        if not pubmed_data and chembl_data:
            # If we only have chemical data, it's direct but not clinical evidence
            return {
                "evidence_level": "HIGH",
                "assessment": {
                    "study_types": ["database_lookup"],
                    "consistency": "consistent",
                    "directness": "direct",
                    "limitations": ["Chemical properties only; lacks clinical context."]
                }
            }

        found_types = set()
        for item in pubmed_data:
            text = (item.get("title", "") + " " + item.get("abstract", "")).lower()
            for stype, pattern in self.STUDY_TYPES.items():
                if re.search(pattern, text):
                    found_types.add(stype)

        # GRADE-inspired basic hierarchy calculation
        evidence_level = "VERY LOW"
        limitations = []
        directness = "direct"
        consistency = "unknown"
        
        if "animal" in found_types or "in_vitro" in found_types:
            directness = "indirect"

        # Baseline starting point per GRADE
        if "meta-analysis" in found_types or "systematic_review" in found_types:
            evidence_level = "HIGH"
        elif "randomized_trial" in found_types:
            evidence_level = "HIGH"
        elif "observational" in found_types:
            evidence_level = "LOW"
            limitations.append("Evidence relies on observational studies, which carry higher risk of bias.")
        elif "case_report" in found_types:
            evidence_level = "VERY LOW"
            limitations.append("Evidence relies on isolated case reports.")
        else:
            evidence_level = "LOW"
            found_types.add("unspecified")
            limitations.append("Study designs were unspecified in abstracts.")

        # GRADE Downgrades (Imprecision / Inconsistency / Indirectness)
        if len(pubmed_data) == 1:
            consistency = "not_applicable"
            if evidence_level == "HIGH":
                evidence_level = "MODERATE"
                limitations.append("Downgraded due to imprecision (only a single study retrieved).")
        elif len(pubmed_data) > 1:
            consistency = "requires_review"

        if directness == "indirect" and evidence_level in ["HIGH", "MODERATE"]:
            evidence_level = "LOW"
            limitations.append("Downgraded for indirectness (relies heavily on animal or in-vitro models).")

        return {
            "evidence_level": evidence_level,
            "assessment": {
                "study_types": list(found_types),
                "consistency": consistency,
                "directness": directness,
                "limitations": limitations
            }
        }

evidence_engine = EvidenceEngine()
