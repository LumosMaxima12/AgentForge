# AgentForge

> Forge yourself into an AI Engineer.

AgentForge is a personal AI-engineering learning workspace. The v0.1 foundation focuses on a calm desktop experience, a daily learning queue, mastery tracking, and a backend architecture that can later grow into RAG, agent workflows, MCP, interview training, and career planning.

## v0.1 stack

- Desktop: React + TypeScript + Vite + Tauri 2
- Styling: custom CSS design tokens (Tailwind can be introduced later without changing the component structure)
- Data fetching: TanStack Query
- Icons: Lucide React
- API: FastAPI + Pydantic
- Package management: pnpm + uv

## Repository layout

```text
agentforge/
├─ apps/
│  ├─ desktop/
│  └─ server/
├─ docs/
└─ .github/
```

## Run the desktop web preview

```bash
cd apps/desktop
pnpm install
pnpm dev
```

The Today screen tries `http://127.0.0.1:8000/api/v1/today`. If the API is not running, it falls back to local demo data so UI work is never blocked.

## Run the API

```bash
cd apps/server
uv sync
uv run fastapi dev app/main.py
```

Then open the desktop preview.

## Run with Tauri

Install the Tauri prerequisites for your OS, then:

```bash
cd apps/desktop
pnpm install
pnpm tauri dev
```

## First milestones

1. App shell + Today UI
2. Real Today API + SQLite persistence
3. Roadmap knowledge DAG
4. Learn + AI Tutor
5. Lab
6. Knowledge library

The current code intentionally avoids implementing LangGraph, MCP, RAG, auth, cloud sync, and local model serving before the product needs them.
