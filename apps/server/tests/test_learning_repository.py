from app.models.learning_plan import LearningPlan
from app.repositories.learning_plan_repository import LearningPlanRepository

def test_create_learning_plan(db_session, learning_plan):
    repository = LearningPlanRepository(db_session)
    plan = learning_plan
    result = repository.create(plan)

    assert result is not None
    assert result.id == plan.id
    assert result.topic == "FastAPI"

def test_get_learning_plan(db_session, learning_plan):
    repository = LearningPlanRepository(db_session)
    plan = learning_plan
    repository.create(plan)
    result = repository.get_by_id(plan.id)

    assert result.id is not None
    assert result.topic == "FastAPI"

def test_list_learning_plans(db_session, learning_plan):
    repository = LearningPlanRepository(db_session)
    for i in range(2):
        plan = LearningPlan(
            topic="FastAPI",
            available_minutes=60,
            level="beginner",
            study_minutes=48,
            review_minutes=12,
        )
        repository.create(plan)
    result: list[LearningPlan] = repository.list_all()
    assert len(result) == 2
