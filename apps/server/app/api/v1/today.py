from fastapi import APIRouter, Depends

from app.schemas.today import TodayResponse
from app.services.today_service import TodayService, get_today_service

router = APIRouter()


@router.get("", response_model=TodayResponse)
def get_today(service: TodayService = Depends(get_today_service)) -> TodayResponse:
    return service.get_today()
