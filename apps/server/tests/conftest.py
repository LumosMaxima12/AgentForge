from fastapi.testclient import TestClient
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.core.database import Base, get_db
from app.main import app
from app.models.learning_plan import LearningPlan
SQLALCHEMY_DATABASE_URI = 'sqlite://'

engine = create_engine(
    SQLALCHEMY_DATABASE_URI,
    connect_args={
        "check_same_thread": False,
    },
    poolclass=StaticPool,
)

TestingSessionLocal = sessionmaker(
    bind=engine,
)

@pytest.fixture
def db_session():
    Base.metadata.create_all(bind=engine)

    db = TestingSessionLocal()

    try:
        yield db
    finally:
        db.close()

        Base.metadata.drop_all(bind=engine)

@pytest.fixture
def learning_plan():
    return LearningPlan(
        topic="FastAPI",
        available_minutes=60,
        level="beginner",
        study_minutes=48,
        review_minutes=12,
    )

@pytest.fixture
def client(db_session):
    def override_get_db():
        yield db_session

    app.dependency_overrides[get_db] = override_get_db

    yield TestClient(app)
    app.dependency_overrides.clear()
