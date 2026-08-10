from datetime import date

from app.schemas.today import (
    Greeting,
    MasteryItem,
    Streak,
    StudySummary,
    TodayResponse,
    TodayTask,
    UpcomingTask,
)


class TodayRepository:
    """V0.1 repository.

    This currently returns seed data so frontend and API contracts can evolve quickly.
    In the next sprint, this class becomes the aggregation layer over Task, StudySession,
    and Mastery repositories backed by SQLite.
    """

    def get_today(self) -> TodayResponse:
        return TodayResponse(
            date=date.today(),
            greeting=Greeting(
                name="Eason",
                message="Good evening",
                subtitle="Keep the momentum. Small steps, big impact.",
            ),
            next_task=TodayTask(
                id=101,
                order=1,
                title="Python Type Hints",
                description=(
                    "Understand why type hints matter in production Python applications."
                ),
                category="Foundation",
                topic="Python",
                estimated_minutes=25,
            ),
            upcoming_tasks=[
                UpcomingTask(
                    id=102,
                    order=2,
                    title="HTTP & REST",
                    description="Build your first API",
                    estimated_minutes=40,
                    kind="build",
                ),
                UpcomingTask(
                    id=103,
                    order=3,
                    title="Review: Pydantic",
                    description="5 review questions",
                    estimated_minutes=20,
                    kind="review",
                ),
            ],
            study_summary=StudySummary(
                total_minutes=102,
                coding_minutes=48,
                reading_minutes=36,
                review_minutes=18,
            ),
            streak=Streak(days=37),
            mastery=[
                MasteryItem(name="Python", progress=78),
                MasteryItem(name="LLM Basics", progress=42),
                MasteryItem(name="Agent Development", progress=18),
                MasteryItem(name="System Design", progress=12),
            ],
        )


def get_today_repository() -> TodayRepository:
    return TodayRepository()
