import { Check, Languages, Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";
import { useI18n, type Language } from "../../i18n/I18nProvider";
import { useTheme, type ThemeMode } from "../../theme/ThemeProvider";

export function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();

  return (
    <main className="settings-page">
      <header className="settings-header">
        <p className="eyebrow">AGENTFORGE</p>
        <h1>{t("settings.title")}</h1>
        <p>{t("settings.subtitle")}</p>
      </header>

      <div className="settings-stack">
        <SettingsSection
          title={t("settings.appearance")}
          description={t("settings.appearanceDescription")}
        >
          <div className="settings-choice-grid">
            <ThemeChoice
              value="dark"
              current={theme}
              icon={<Moon size={21} />}
              label={t("settings.dark")}
              currentLabel={t("settings.current")}
              onSelect={setTheme}
            />
            <ThemeChoice
              value="light"
              current={theme}
              icon={<Sun size={21} />}
              label={t("settings.light")}
              currentLabel={t("settings.current")}
              onSelect={setTheme}
            />
          </div>
        </SettingsSection>

        <SettingsSection
          title={t("settings.language")}
          description={t("settings.languageDescription")}
        >
          <div className="settings-choice-grid">
            <LanguageChoice
              value="zh-CN"
              current={language}
              label={t("settings.chinese")}
              meta="简体中文"
              currentLabel={t("settings.current")}
              onSelect={setLanguage}
            />
            <LanguageChoice
              value="en-US"
              current={language}
              label={t("settings.english")}
              meta="English"
              currentLabel={t("settings.current")}
              onSelect={setLanguage}
            />
          </div>
        </SettingsSection>

        <SettingsSection title={t("settings.about")} description={t("settings.aboutDescription")}>
          <div className="settings-about-row">
            <div className="settings-about-mark">AF</div>
            <div>
              <strong>AgentForge</strong>
              <span>{t("settings.version", { version: "0.1.0" })}</span>
            </div>
          </div>
        </SettingsSection>
      </div>
    </main>
  );
}

function SettingsSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="settings-section">
      <div className="settings-section-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="settings-section-content">{children}</div>
    </section>
  );
}

function ThemeChoice({
  value,
  current,
  icon,
  label,
  currentLabel,
  onSelect,
}: {
  value: ThemeMode;
  current: ThemeMode;
  icon: ReactNode;
  label: string;
  currentLabel: string;
  onSelect: (value: ThemeMode) => void;
}) {
  const selected = value === current;
  return (
    <button
      type="button"
      className={`settings-choice${selected ? " selected" : ""}`}
      onClick={() => onSelect(value)}
      aria-pressed={selected}
    >
      <span className="settings-choice-icon">{icon}</span>
      <span className="settings-choice-copy">
        <strong>{label}</strong>
        {selected && <small>{currentLabel}</small>}
      </span>
      {selected && <Check className="settings-choice-check" size={18} />}
    </button>
  );
}

function LanguageChoice({
  value,
  current,
  label,
  meta,
  currentLabel,
  onSelect,
}: {
  value: Language;
  current: Language;
  label: string;
  meta: string;
  currentLabel: string;
  onSelect: (value: Language) => void;
}) {
  const selected = value === current;
  return (
    <button
      type="button"
      className={`settings-choice${selected ? " selected" : ""}`}
      onClick={() => onSelect(value)}
      aria-pressed={selected}
    >
      <span className="settings-choice-icon"><Languages size={21} /></span>
      <span className="settings-choice-copy">
        <strong>{label}</strong>
        <small>{selected ? currentLabel : meta}</small>
      </span>
      {selected && <Check className="settings-choice-check" size={18} />}
    </button>
  );
}
