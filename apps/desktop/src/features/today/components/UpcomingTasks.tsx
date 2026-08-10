import { Braces, CheckSquare2, Clock3 } from "lucide-react";
import { useI18n } from "../../../i18n/I18nProvider";
import type { UpcomingTask } from "../../../types/today";

export function UpcomingTasks({ tasks }: { tasks: UpcomingTask[] }) {
  const { t } = useI18n();

  return (
    <section className="upcoming-section">
      <div className="section-kicker">{t("today.upNext")}</div>
      <div className="upcoming-grid">
        {tasks.map((task) => {
          const Icon = task.kind === "review" ? CheckSquare2 : Braces;
          const taskPrefix = `task.${task.id}`;

          return (
            <button className="upcoming-card" type="button" key={task.id}>
              <div className="upcoming-number">{String(task.order).padStart(2, "0")}</div>
              <div className="upcoming-copy">
                <strong>{t(`${taskPrefix}.title`, undefined, task.title)}</strong>
                <span>{t(`${taskPrefix}.description`, undefined, task.description)}</span>
                <small>
                  <Clock3 size={14} />
                  {t("today.minute", { count: task.estimated_minutes })}
                </small>
              </div>
              <div className={`upcoming-icon ${task.kind}`}><Icon size={22} /></div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
