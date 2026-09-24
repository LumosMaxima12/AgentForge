
def test_create_learning_plan(client):
    response = client.post(
        "/api/v1/learning/plans",
        json={
            "topic": "FastAPI",
            "available_minutes": 60,
            "level": "beginner",
        }
    )

    assert response.status_code == 200
    data = response.json()
    assert data["topic"] == "FastAPI"
    assert data["study_minutes"] == 48
    assert data["review_minutes"] == 12
