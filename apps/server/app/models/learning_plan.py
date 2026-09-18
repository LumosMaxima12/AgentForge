from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base

class LearningPlan(Base):
    __tablename__ = 'learning_plans'
    id: Mapped[int] = mapped_column(primary_key=True)
    topic: Mapped[str] = mapped_column()
    available_minutes: Mapped[int] = mapped_column()
    level: Mapped[str] = mapped_column()
    study_minutes: Mapped[int] = mapped_column()
    review_minutes: Mapped[int] = mapped_column()
