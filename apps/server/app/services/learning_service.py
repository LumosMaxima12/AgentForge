from app.schemas.learning import (
    LearningPlanPreviewRequest,
    LearningPlanPreviewResponse,
    LearningPlanResponse,
    LearningLevel
)
from app.models.learning_plan import LearningPlan
from fastapi import Depends, HTTPException
from typing import cast
from app.repositories.learning_plan_repository import (
    LearningPlanRepository,
    get_learning_plan_repository
)

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

    def create_plan(self, request: LearningPlanPreviewRequest) -> LearningPlanResponse:
        review_minutes = int(request.available_minutes * 0.2)
        study_minutes = request.available_minutes - review_minutes
        plan = LearningPlan(
            study_minutes=study_minutes,
            review_minutes=review_minutes,
            topic=request.topic,
            available_minutes=request.available_minutes,
            level=request.level,
        )
        saved_plan = self.repository.create(plan)

        return LearningPlanResponse(
            id= saved_plan.id,
            topic= saved_plan.topic,
            available_minutes= saved_plan.available_minutes,
            level= saved_plan.level,
            review_minutes= saved_plan.review_minutes,
            study_minutes= saved_plan.study_minutes,
        )

    def get_plan(
        self,
        plan_id: int,
    ) -> LearningPlanResponse:
        plan = self.repository.get_by_id(plan_id)

        if plan is None:
            raise HTTPException(status_code=404, detail="Learning Plan not found")

        return LearningPlanResponse(
            id= plan.id,
            topic= plan.topic,
            available_minutes= plan.available_minutes,
            level = cast(LearningLevel, plan.level),
            study_minutes= plan.study_minutes,
            review_minutes= plan.review_minutes,
        )

    def list_plans(self) -> list[LearningPlanResponse]:
        plans = self.repository.list_all()
        responses: list[LearningPlanResponse] = []

        for plan in plans:
            response = LearningPlanResponse(
                id=plan.id,
                topic=plan.topic,
                available_minutes=plan.available_minutes,
                level=cast(LearningLevel, plan.level),
                study_minutes=plan.study_minutes,
                review_minutes=plan.review_minutes,
            )
            responses.append(response)

        return responses

def get_learning_service(
    repository: LearningPlanRepository = Depends(get_learning_plan_repository)
) -> LearningService:

    return LearningService(repository)


