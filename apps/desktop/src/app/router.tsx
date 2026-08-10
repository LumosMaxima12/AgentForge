import { createBrowserRouter, Navigate } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import { AppShell } from "../layouts/AppShell/AppShell";
import { SettingsPage } from "../pages/Settings/SettingsPage";
import { TodayPage } from "../pages/Today/TodayPage";

function Placeholder({ titleKey }: { titleKey: string }) {
  const { t } = useI18n();

  return (
    <div className="placeholder-page">
      <p className="eyebrow">AGENTFORGE V0.1</p>
      <h1>{t(titleKey)}</h1>
      <p>{t("placeholder.description")}</p>
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
      { path: "roadmap", element: <Placeholder titleKey="page.roadmap" /> },
      { path: "learn", element: <Placeholder titleKey="page.learn" /> },
      { path: "lab", element: <Placeholder titleKey="page.lab" /> },
      { path: "knowledge", element: <Placeholder titleKey="page.knowledge" /> },
      { path: "progress", element: <Placeholder titleKey="page.progress" /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
