from fastapi import APIRouter, Depends

from app.schemas.learning import (
    LearningPlanPreviewRequest,
    LearningPlanPreviewResponse,
)

from app.services.learning_service import (
    LearningService,
    get_learning_service,
)

router = APIRouter()

@router.post(
    "/plan-preview",
    response_model = LearningPlanPreviewResponse,
)
def preview_learning_plan(request: LearningPlanPreviewRequest, service: LearningService = Depends(get_learning_service)) -> LearningPlanPreviewResponse:
    return service.preview_plan(request)


