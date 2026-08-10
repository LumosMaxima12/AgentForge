import { Bell, Search, Settings, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "../../theme/ThemeProvider";
import { useI18n } from "../../i18n/I18nProvider";

export function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useI18n();

  return (
    <header className="topbar">
      <div className="topbar-page-title">{t("topbar.today")}</div>
      <button className="command-search" type="button">
        <Search size={16} />
        <span>{t("topbar.search")}</span>
        <kbd>⌘ K</kbd>
      </button>
      <div className="topbar-actions">
        <button
          className="icon-button"
          type="button"
          title={theme === "dark" ? t("topbar.switchLight") : t("topbar.switchDark")}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="icon-button"
          type="button"
          title={language === "zh-CN" ? t("topbar.switchEnglish") : t("topbar.switchChinese")}
          onClick={toggleLanguage}
        >
          <Languages size={18} />
        </button>
        <button className="icon-button" aria-label={t("topbar.notifications")}><Bell size={19} /></button>
        <button className="icon-button" aria-label={t("topbar.settings")}><Settings size={19} /></button>
        <button className="top-avatar" type="button">E</button>
      </div>
    </header>
  );
}
