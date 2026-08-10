import { Hand } from "lucide-react";
import { useI18n } from "../../../i18n/I18nProvider";

type Props = {
  greeting: { name: string; message: string; subtitle: string };
};

export function TodayHeader({ greeting }: Props) {
  const { t } = useI18n();

  return (
    <header className="today-header">
      <h1>
        {greeting.message}, {greeting.name}
        <Hand className="greeting-icon" size={21} />
      </h1>
      <p>{t("today.subtitle", undefined, greeting.subtitle)}</p>
    </header>
  );
}
