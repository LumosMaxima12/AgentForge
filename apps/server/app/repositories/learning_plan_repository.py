from sqlalchemy.orm import Session
from app.models.learning_plan import LearningPlan

class LearningPlanRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    def create(self, plan: LearningPlan) -> LearningPlan:
        self.db.add(plan)
        self.db.commit()
        self.db.refresh(plan)
        return plan

from fastapi import Depends
from app.core.database import get_db

def get_learning_plan_repository(db: Session = Depends(get_db)) -> LearningPlanRepository:
    return LearningPlanRepository(db)
