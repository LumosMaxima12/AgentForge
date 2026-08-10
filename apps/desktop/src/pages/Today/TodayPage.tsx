import { useQuery } from "@tanstack/react-query";
import { getToday } from "../../lib/api/today";
import { TodayHeader } from "../../features/today/components/TodayHeader";
import { NextTaskCard } from "../../features/today/components/NextTaskCard";
import { UpcomingTasks } from "../../features/today/components/UpcomingTasks";
import { StudySummary } from "../../features/today/components/StudySummary";
import { TodayRightRail } from "../../features/today/components/TodayRightRail";

export function TodayPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["today"],
    queryFn: getToday,
  });

  if (isLoading || !data) {
    return <TodaySkeleton />;
  }

  return (
    <div className="today-layout">
      <section className="today-main">
        <TodayHeader greeting={data.greeting} />
        <NextTaskCard task={data.next_task} />
        <UpcomingTasks tasks={data.upcoming_tasks} />
        <StudySummary summary={data.study_summary} />
      </section>
      <TodayRightRail date={data.date} streak={data.streak} mastery={data.mastery} />
    </div>
  );
}

function TodaySkeleton() {
  return (
    <div className="today-layout">
      <div className="today-main">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-task" />
        <div className="skeleton skeleton-row" />
      </div>
    </div>
  );
}
