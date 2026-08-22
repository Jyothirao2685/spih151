import google.generativeai as genai
from app.core.config import settings
import json
import re

class GeminiService:
    def __init__(self):
        if settings.gemini_api_key:
            genai.configure(api_key=settings.gemini_api_key)
        
        # Use gemini-3.5-flash-lite
        self.model = genai.GenerativeModel(
            model_name="gemini-3.5-flash-lite",
            generation_config={"response_mime_type": "application/json"}
        )

    async def generate_json(self, prompt: str, system_instruction: str = None) -> dict:
        """Generate structured JSON from Gemini."""
        if not settings.gemini_api_key:
            raise ValueError("Gemini API key is not configured")
            
        try:
            # We can use system_instruction with the new gemini-3.5-flash-lite
            model = genai.GenerativeModel(
                model_name="gemini-3.5-flash-lite",
                generation_config={"response_mime_type": "application/json"},
                system_instruction=system_instruction
            )
            
            response = await model.generate_content_async(prompt)
            text = response.text
            
            # Clean up potential markdown blocks if response_mime_type somehow failed
            if text.startswith("```json"):
                text = text.replace("```json\n", "").replace("```", "")
                
            return json.loads(text)
        except json.JSONDecodeError as e:
            print(f"JSON Parse Error from Gemini: {e}")
            raise Exception("Failed to generate valid structured response")
        except Exception as e:
            print(f"Gemini API Error: {e}")
            raise

gemini_service = GeminiService()
