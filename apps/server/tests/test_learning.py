from fastapi.testclient import TestClient

from app.main import app
client = TestClient(app)

def test_preview_learning_plan_success() -> None:
    response = client.post(
        "/api/v1/learning/plan-preview",
        json = {
            "topic": "Python Type Hints",
            "available_minutes": 45,
            "level": "beginner"
        },
    )
    assert response.status_code == 200

    data = response.json()

    assert data["study_minutes"] == 36
    assert data["topic"] == "Python Type Hints"
    assert data["review_minutes"] == 9

def test_preview_learning_plan_invalid_minutes() -> None:
    response = client.post(
        "/api/v1/learning/plan-preview",
        json={
            "topic": "Python Type Hints",
            "available_minutes": 5,
            "level": "beginner"
        },
    )

    assert response.status_code == 422


def test_preview_learning_plan_invalid_level() -> None:
    response = client.post(
        "/api/v1/learning/plan-preview",
        json={
            "topic": "Python Type Hints",
            "available_minutes": 5,
            "level": "master"
        },
    )

    assert response.status_code == 422
