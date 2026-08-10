import { BookOpen, Code2, CircleCheck } from "lucide-react";
import type { CSSProperties } from "react";

type Summary = {
  total_minutes: number;
  coding_minutes: number;
  reading_minutes: number;
  review_minutes: number;
};

const rows = [
  { key: "coding_minutes", label: "Coding", Icon: Code2, className: "coding" },
  { key: "reading_minutes", label: "Reading", Icon: BookOpen, className: "reading" },
  { key: "review_minutes", label: "Review", Icon: CircleCheck, className: "review" },
] as const;

export function StudySummary({ summary }: { summary: Summary }) {
  const hours = Math.floor(summary.total_minutes / 60);
  const minutes = summary.total_minutes % 60;
  return (
    <section className="study-section">
      <div className="study-section-head">
        <div className="section-kicker">TODAY</div>
        <button type="button" className="ghost-select">Daily⌄</button>
      </div>
      <div className="study-card">
        <div
          className="study-ring"
          style={{ "--ring-progress": "72%" } as CSSProperties}
        >
          <div><strong>{hours}h {minutes}m</strong><span>studied</span></div>
        </div>
        <div className="study-breakdown">
          {rows.map(({ key, label, Icon, className }) => {
            const value = summary[key];
            const percent = Math.round((value / summary.total_minutes) * 100);
            return (
              <div className="study-row" key={key}>
                <div className={`study-row-icon ${className}`}><Icon size={18} /></div>
                <span className="study-label">{label}</span>
                <div className="study-track"><span className={className} style={{ width: `${Math.max(24, percent)}%` }} /></div>
                <strong>{value} min</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
