from openai import AsyncOpenAI
from app.core.config import settings

class LLMService:
    def __init__(self) -> None:
        self.client = AsyncOpenAI(
            api_key = settings.llm_api_key,
            base_url = settings.llm_base_url,
        )

    async def generate(self, message: str) -> str:
        response = await self.client.responses.create(
            model = settings.llm_model,
            input = message,
        )

        return response.output_text
