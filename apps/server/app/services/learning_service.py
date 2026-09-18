from app.schemas.learning import (
    LearningPlanPreviewRequest,
    LearningPlanPreviewResponse,
)
from app.repositories.learning_plan_repository import LearningPlanRepository

class LearningService:
    def __init__(
        self,
        repository: LearningPlanRepository
    ) -> None:
        self.repository = repository

    def preview_plan(self, request: LearningPlanPreviewRequest) -> LearningPlanPreviewResponse:
        review_minutes = int(request.available_minutes * 0.2)
        study_minutes = request.available_minutes - review_minutes
        response = LearningPlanPreviewResponse(
            study_minutes=study_minutes,
            review_minutes=review_minutes,
            topic=request.topic,
            available_minutes=request.available_minutes,
            level=request.level,
        )
        return response

    def create_plan(self, requset: LearningPlanPreviewRequest) -> LearningPlanPreviewResponse:
        review_minutes = int(requset.available_minutes * 0.2)
        study_minutes = requset.avaiable_minutes - review_minutes
        response = LearningPlanPreviewResponse()

def get_learning_service() -> LearningService:
    return LearningService()
