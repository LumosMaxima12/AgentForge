from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "AgentForge"
    environment: str = "development"
    llm_api_key: str | None = None
    llm_base_url: str | None = None
    llm_model: str | None = None
    cors_origins: list[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "tauri://localhost",
    ]

    model_config = SettingsConfigDict(env_prefix="AGENTFORGE_", env_file=".env")


settings = Settings()
