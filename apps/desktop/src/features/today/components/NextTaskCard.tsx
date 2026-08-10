import { ArrowRight, Clock3, Code2 } from "lucide-react";
import type { TodayTask } from "../../../types/today";

export function NextTaskCard({ task }: { task: TodayTask }) {
  return (
    <section className="task-section">
      <div className="section-kicker">NEXT TASK</div>
      <article className="next-task-card">
        <div className="task-number">{String(task.order).padStart(2, "0")}</div>
        <div className="task-copy">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <div className="task-meta">
            <span className="pill">{task.category}</span>
            <span className="pill">{task.topic}</span>
            <span className="meta-time"><Clock3 size={16} /> {task.estimated_minutes} min</span>
          </div>
        </div>
        <div className="code-preview" aria-hidden="true">
          <div className="window-dots"><span /><span /><span /></div>
          <code><b>def</b> add(a: <em>int</em>, b: <em>int</em>) -&gt; <em>int</em>:</code>
          <code>&nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> a + b</code>
          <div className="code-badge"><Code2 size={25} /></div>
        </div>
        <button className="primary-button" type="button">
          Continue learning <ArrowRight size={18} />
        </button>
      </article>
    </section>
  );
}
