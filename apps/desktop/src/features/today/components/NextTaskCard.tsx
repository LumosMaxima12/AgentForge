import { ArrowRight, Clock3, Code2 } from "lucide-react";
import { useI18n } from "../../../i18n/I18nProvider";
import type { TodayTask } from "../../../types/today";

export function NextTaskCard({ task }: { task: TodayTask }) {
  const { t } = useI18n();
  const taskPrefix = `task.${task.id}`;

  return (
    <section className="task-section">
      <div className="section-kicker">{t("today.nextTask")}</div>
      <article className="next-task-card">
        <div className="task-number">{String(task.order).padStart(2, "0")}</div>
        <div className="task-copy">
          <h2>{t(`${taskPrefix}.title`, undefined, task.title)}</h2>
          <p>{t(`${taskPrefix}.description`, undefined, task.description)}</p>
          <div className="task-meta">
            <span className="pill">{t(`${taskPrefix}.category`, undefined, task.category)}</span>
            <span className="pill">{t(`${taskPrefix}.topic`, undefined, task.topic)}</span>
            <span className="meta-time">
              <Clock3 size={16} />
              {t("today.minute", { count: task.estimated_minutes })}
            </span>
          </div>
        </div>
        <div className="code-preview" aria-hidden="true">
          <div className="window-dots"><span /><span /><span /></div>
          <code><b>def</b> add(a: <em>int</em>, b: <em>int</em>) -&gt; <em>int</em>:</code>
          <code>&nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> a + b</code>
          <div className="code-badge"><Code2 size={25} /></div>
        </div>
        <button className="primary-button" type="button">
          {t("today.continueLearning")} <ArrowRight size={18} />
        </button>
      </article>
    </section>
  );
}
