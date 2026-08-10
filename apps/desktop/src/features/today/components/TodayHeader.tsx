import { Hand } from "lucide-react";
import { useI18n } from "../../../i18n/I18nProvider";

type Props = {
  greeting: { name: string; message: string; subtitle: string };
};

export function TodayHeader({ greeting }: Props) {
  const { language, t } = useI18n();
  const hour = new Date().getHours();
  const period = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  const message = t(`today.greeting.${period}`, undefined, greeting.message);
  const greetingLine = language === "zh-CN"
    ? `${message}，${greeting.name}`
    : `${message}, ${greeting.name}`;

  return (
    <header className="today-header">
      <h1>
        {greetingLine}
        <Hand className="greeting-icon" size={21} />
      </h1>
      <p>{t("today.subtitle", undefined, greeting.subtitle)}</p>
    </header>
  );
}
