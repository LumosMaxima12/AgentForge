from pydantic import BaseModel, Field
from typing import Literal

LearningLevel = Literal["beginner", "intermediate", "advanced"]

class LearningPlanPreviewRequest(BaseModel):
    topic: str
    available_minutes: int = Field(ge=15, le=240)
    level: LearningLevel

class LearningPlanPreviewResponse(BaseModel):
    topic: str
    available_minutes: int
    level: LearningLevel
    study_minutes: int
    review_minutes: int

class LearningPlanRespones(BaseModel):
    id: int
    topic: str
    available_minutes: int
    level: LearningLevel
    study_minutes: int
    review_minutes: int
