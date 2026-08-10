from fastapi import Depends

from app.repositories.today_repository import TodayRepository, get_today_repository
from app.schemas.today import TodayResponse


class TodayService:
    def __init__(self, repository: TodayRepository) -> None:
        self.repository = repository

    def get_today(self) -> TodayResponse:
        return self.repository.get_today()


def get_today_service(
    repository: TodayRepository = Depends(get_today_repository),
) -> TodayService:
    return TodayService(repository)
