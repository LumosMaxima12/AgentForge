import { Braces, CheckSquare2, Clock3 } from "lucide-react";
import type { UpcomingTask } from "../../../types/today";

export function UpcomingTasks({ tasks }: { tasks: UpcomingTask[] }) {
  return (
    <section className="upcoming-section">
      <div className="section-kicker">UP NEXT</div>
      <div className="upcoming-grid">
        {tasks.map((task) => {
          const Icon = task.kind === "review" ? CheckSquare2 : Braces;
          return (
            <button className="upcoming-card" type="button" key={task.id}>
              <div className="upcoming-number">{String(task.order).padStart(2, "0")}</div>
              <div className="upcoming-copy">
                <strong>{task.title}</strong>
                <span>{task.description}</span>
                <small><Clock3 size={14} /> {task.estimated_minutes} min</small>
              </div>
              <div className={`upcoming-icon ${task.kind}`}><Icon size={22} /></div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
