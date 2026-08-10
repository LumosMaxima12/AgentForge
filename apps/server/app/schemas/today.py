from datetime import date
from typing import Literal

from pydantic import BaseModel


class Greeting(BaseModel):
    name: str
    message: str
    subtitle: str


class TodayTask(BaseModel):
    id: int
    order: int
    title: str
    description: str
    category: str
    topic: str
    estimated_minutes: int


class UpcomingTask(BaseModel):
    id: int
    order: int
    title: str
    description: str
    estimated_minutes: int
    kind: Literal["build", "review"]


class StudySummary(BaseModel):
    total_minutes: int
    coding_minutes: int
    reading_minutes: int
    review_minutes: int


class Streak(BaseModel):
    days: int


class MasteryItem(BaseModel):
    name: str
    progress: int


class TodayResponse(BaseModel):
    date: date
    greeting: Greeting
    next_task: TodayTask
    upcoming_tasks: list[UpcomingTask]
    study_summary: StudySummary
    streak: Streak
    mastery: list[MasteryItem]
