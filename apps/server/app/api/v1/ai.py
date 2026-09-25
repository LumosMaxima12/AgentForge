from fastapi import APIRouter, Depends
from app.schemas.ai import ChatRequest, ChatResponse
from app.services.llm_service import LLMService, get_llm_service

router = APIRouter()

@router.post(
    "/chat",
    response_model=ChatResponse
)
async def chat(request: ChatRequest, service: LLMService = Depends(get_llm_service)) -> ChatResponse:
    response = await service.generate(request.message)
    return ChatResponse(answer=response)
