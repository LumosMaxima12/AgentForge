import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppShell } from "../layouts/AppShell/AppShell";
import { TodayPage } from "../pages/Today/TodayPage";

function Placeholder({ title }: { title: string }) {
  return (
    <div className="placeholder-page">
      <p className="eyebrow">AGENTFORGE V0.1</p>
      <h1>{title}</h1>
      <p>This module is intentionally queued behind the Today foundation.</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/today" replace /> },
      { path: "today", element: <TodayPage /> },
      { path: "roadmap", element: <Placeholder title="Roadmap" /> },
      { path: "learn", element: <Placeholder title="Learn" /> },
      { path: "lab", element: <Placeholder title="Lab" /> },
      { path: "knowledge", element: <Placeholder title="Knowledge" /> },
      { path: "progress", element: <Placeholder title="Progress" /> },
      { path: "settings", element: <Placeholder title="Settings" /> },
    ],
  },
]);
