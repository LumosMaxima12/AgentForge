from fastapi import APIRouter

from app.api.v1.health import router as health_router
from app.api.v1.today import router as today_router

api_router = APIRouter()
api_router.include_router(health_router, tags=["system"])
api_router.include_router(today_router, prefix="/today", tags=["today"])
