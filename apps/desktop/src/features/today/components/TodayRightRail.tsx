import type { ComponentType } from "react";
import {
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  Code2,
  Flame,
  MessageCircle,
  NotebookPen,
} from "lucide-react";
import { useI18n } from "../../../i18n/I18nProvider";
import type { MasteryItem } from "../../../types/today";

type Props = {
  date: string;
  streak: { days: number };
  mastery: MasteryItem[];
};

export function TodayRightRail({ date, streak, mastery }: Props) {
  const { t } = useI18n();

  return (
    <aside className="today-right-rail">
      <CalendarPanel isoDate={date} />
      <section className="right-card streak-card">
        <div className="streak-flame"><Flame size={28} /></div>
        <div>
          <span>{t("right.streak")}</span>
          <strong>{streak.days} <small>{t("right.days")}</small></strong>
          <p>{t("right.keepItUp")}</p>
        </div>
        <div className="streak-dots">{Array.from({ length: 9 }).map((_, i) => <i key={i} />)}</div>
      </section>
      <section className="right-card mastery-card">
        <h3>{t("right.mastery")}</h3>
        <div className="mastery-list">
          {mastery.map((item) => (
            <div className="mastery-row" key={item.name}>
              <div>
                <span>{t(`mastery.${item.name}`, undefined, item.name)}</span>
                <strong>{item.progress}%</strong>
              </div>
              <div className="mastery-track"><span style={{ width: `${item.progress}%` }} /></div>
            </div>
          ))}
        </div>
      </section>
      <section className="right-card quick-card">
        <h3>{t("right.quickActions")}</h3>
        <QuickAction icon={MessageCircle} label={t("right.askTutor")} />
        <QuickAction icon={BookOpenCheck} label={t("right.reviewFlashcards")} />
        <QuickAction icon={Code2} label={t("right.openLab")} />
        <QuickAction icon={NotebookPen} label={t("right.captureNote")} />
      </section>
    </aside>
  );
}

function QuickAction({ icon: Icon, label }: { icon: ComponentType<{ size?: number }>; label: string }) {
  return (
    <button className="quick-action" type="button">
      <span><Icon size={17} />{label}</span><ChevronRight size={16} />
    </button>
  );
}

function CalendarPanel({ isoDate }: { isoDate: string }) {
  const { language, t } = useI18n();
  const inputDate = new Date(`${isoDate}T12:00:00`);
  const today = Number.isNaN(inputDate.getTime()) ? new Date() : inputDate;
  const year = today.getFullYear();
  const month = today.getMonth();
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();
  const mondayFirstIndex = (first.getDay() + 6) % 7;
  const cells: { value: number; dim?: boolean; active?: boolean; practiced?: boolean }[] = [];

  for (let i = mondayFirstIndex - 1; i >= 0; i--) cells.push({ value: previousMonthDays - i, dim: true });
  for (let day = 1; day <= daysInMonth; day++) cells.push({
    value: day,
    active: day === today.getDate(),
    practiced: day < today.getDate() && day % 3 !== 0,
  });
  let next = 1;
  while (cells.length < 42) cells.push({ value: next++, dim: true });

  const locale = language === "zh-CN" ? "zh-CN" : "en-US";
  const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(today);
  const weekdays = ["calendar.mon", "calendar.tue", "calendar.wed", "calendar.thu", "calendar.fri", "calendar.sat", "calendar.sun"];

  return (
    <section className="right-card calendar-card">
      <div className="calendar-head">
        <h3>{monthLabel}</h3>
        <div>
          <button aria-label={t("calendar.previous")}><ChevronLeft size={16} /></button>
          <button aria-label={t("calendar.next")}><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="calendar-weekdays">
        {weekdays.map((key) => <span key={key}>{t(key)}</span>)}
      </div>
      <div className="calendar-grid">
        {cells.map((cell, i) => (
          <span
            className={`${cell.dim ? "dim " : ""}${cell.active ? "active " : ""}${cell.practiced ? "practiced" : ""}`}
            key={`${cell.value}-${i}`}
          >
            {cell.value}
          </span>
        ))}
      </div>
    </section>
  );
}
