# Start Here

## Recommended first machine

Pick either Windows or macOS as the machine that creates the first lockfile. After `pnpm install`, commit `pnpm-lock.yaml`. After `uv sync`, commit `uv.lock`. From then on both machines should use the same lockfiles.

## Windows

```powershell
git clone <your-github-repo>
cd agentforge

cd apps\desktop
pnpm install
pnpm dev
```

In another terminal:

```powershell
cd apps\server
uv sync
uv run fastapi dev app/main.py
```

For Tauri, install Rust and the Windows Tauri prerequisites, then:

```powershell
cd apps\desktop
pnpm tauri dev
```

## macOS

```bash
git clone <your-github-repo>
cd agentforge/apps/desktop
pnpm install
pnpm dev
```

In another terminal:

```bash
cd agentforge/apps/server
uv sync
uv run fastapi dev app/main.py
```

For Tauri, install Xcode command line tools and Rust, then:

```bash
cd agentforge/apps/desktop
pnpm tauri dev
```

## First development rule

Do not create a branch per device. Branches represent work, for example:

```text
feature/today-api
feature/roadmap-page
fix/sidebar-spacing
```

Always pull before switching machines and push before leaving a machine.
