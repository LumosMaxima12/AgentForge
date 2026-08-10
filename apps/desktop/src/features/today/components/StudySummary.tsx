import { BookOpen, CircleCheck, Code2 } from "lucide-react";
import type { CSSProperties } from "react";
import { useI18n } from "../../../i18n/I18nProvider";

type Summary = {
  total_minutes: number;
  coding_minutes: number;
  reading_minutes: number;
  review_minutes: number;
};

const rows = [
  { key: "coding_minutes", labelKey: "study.coding", Icon: Code2, className: "coding" },
  { key: "reading_minutes", labelKey: "study.reading", Icon: BookOpen, className: "reading" },
  { key: "review_minutes", labelKey: "study.review", Icon: CircleCheck, className: "review" },
] as const;

export function StudySummary({ summary }: { summary: Summary }) {
  const { t } = useI18n();
  const hours = Math.floor(summary.total_minutes / 60);
  const minutes = summary.total_minutes % 60;
  const total = Math.max(summary.total_minutes, 1);

  return (
    <section className="study-section">
      <div className="study-section-head">
        <div className="section-kicker">{t("study.today")}</div>
        <button type="button" className="ghost-select">{t("study.daily")}⌄</button>
      </div>
      <div className="study-card">
        <div
          className="study-ring"
          style={{ "--ring-progress": "72%" } as CSSProperties}
        >
          <div>
            <strong>{t("study.duration", { hours, minutes })}</strong>
            <span>{t("study.studied")}</span>
          </div>
        </div>
        <div className="study-breakdown">
          {rows.map(({ key, labelKey, Icon, className }) => {
            const value = summary[key];
            const percent = Math.round((value / total) * 100);
            return (
              <div className="study-row" key={key}>
                <div className={`study-row-icon ${className}`}><Icon size={18} /></div>
                <span className="study-label">{t(labelKey)}</span>
                <div className="study-track">
                  <span className={className} style={{ width: `${Math.max(24, percent)}%` }} />
                </div>
                <strong>{t("today.minute", { count: value })}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
