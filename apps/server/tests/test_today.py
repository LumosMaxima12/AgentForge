from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_today_contract() -> None:
    response = client.get("/api/v1/today")
    assert response.status_code == 200
    body = response.json()
    assert body["next_task"]["title"] == "Python Type Hints"
    assert len(body["upcoming_tasks"]) == 2
