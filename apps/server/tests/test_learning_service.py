from app.services.learning_service import LearningService
from app.schemas.learning import LearningPlanPreviewRequest
from app.schemas.learning import LearningPlanResponse
from app.models.learning_plan import LearningPlan
from unittest.mock import Mock

def test_preview_plan():
    repository = Mock()

    service = LearningService(
        repository
    )

    request = LearningPlanPreviewRequest(
        topic="FastAPI",
        available_minutes=60,
        level="beginner",
    )

    result = service.preview_plan(request)
    assert result.study_minutes == 48
    assert result.review_minutes == 12
    assert result.topic == "FastAPI"

def test_create_plan():
    repository = Mock()
    saved_plan = LearningPlan(
        id=1,
        topic="FastAPI",
        available_minutes=60,
        level="beginner",
        study_minutes=48,
        review_minutes=12,
    )

    repository.create.return_value = saved_plan

    service = LearningService(
        repository
    )
    request = LearningPlanPreviewRequest(
        topic="FastAPI",
        available_minutes=60,
        level="beginner",
    )

    result = service.create_plan(request)
    assert result.study_minutes == 48
    assert result.review_minutes == 12
    repository.create.assert_called_once()
