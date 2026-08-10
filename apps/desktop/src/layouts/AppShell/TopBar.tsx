import { Bell, Languages, Moon, Search, Settings, Sun } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "../../i18n/I18nProvider";
import { useTheme } from "../../theme/ThemeProvider";

const pageTitleKeys: Record<string, string> = {
  "/today": "topbar.today",
  "/roadmap": "page.roadmap",
  "/learn": "page.learn",
  "/lab": "page.lab",
  "/knowledge": "page.knowledge",
  "/progress": "page.progress",
  "/settings": "page.settings",
};

export function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const titleKey = pageTitleKeys[location.pathname] ?? "topbar.today";
  const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

  return (
    <header className="topbar">
      <div className="topbar-page-title">{t(titleKey)}</div>
      <button className="command-search" type="button">
        <Search size={16} />
        <span>{t("topbar.search")}</span>
        <kbd>{isMac ? "⌘ K" : "Ctrl K"}</kbd>
      </button>
      <div className="topbar-actions">
        <button
          className="icon-button"
          type="button"
          aria-label={theme === "dark" ? t("topbar.switchLight") : t("topbar.switchDark")}
          title={theme === "dark" ? t("topbar.switchLight") : t("topbar.switchDark")}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="icon-button language-toggle"
          type="button"
          aria-label={language === "zh-CN" ? t("topbar.switchEnglish") : t("topbar.switchChinese")}
          title={language === "zh-CN" ? t("topbar.switchEnglish") : t("topbar.switchChinese")}
          onClick={toggleLanguage}
        >
          <Languages size={17} />
          <span>{language === "zh-CN" ? "中" : "EN"}</span>
        </button>
        <button className="icon-button" type="button" aria-label={t("topbar.notifications")}><Bell size={19} /></button>
        <button
          className="icon-button"
          type="button"
          aria-label={t("topbar.settings")}
          onClick={() => navigate("/settings")}
        >
          <Settings size={19} />
        </button>
        <button className="top-avatar" type="button">E</button>
      </div>
    </header>
  );
}
