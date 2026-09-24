from fastapi import APIRouter, Depends

from app.schemas.learning import (
    LearningPlanPreviewRequest,
    LearningPlanPreviewResponse,
    LearningPlanResponse,
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


@router.post(
    "/plans",
    response_model = LearningPlanResponse,
)
def create_learning_plan(
    request: LearningPlanPreviewRequest,
    service: LearningService = Depends(get_learning_service),
) -> LearningPlanResponse:
    return service.create_plan(request)

@router.get(
    "/plans",
    response_model = list[LearningPlanResponse],
)
def get_learning_plans(service: LearningService = Depends(get_learning_service)) -> list[LearningPlanResponse]:
    return service.list_plans()

@router.get(
    "/plans/{plan_id}",
    response_model=LearningPlanResponse
)
def get_learning_plan(plan_id: int, service: LearningService = Depends(get_learning_service)) -> LearningPlanResponse:
    return service.get_plan(plan_id)
