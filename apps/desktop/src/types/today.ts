export type TodayTask = {
  id: number;
  order: number;
  title: string;
  description: string;
  category: string;
  topic: string;
  estimated_minutes: number;
};

export type UpcomingTask = {
  id: number;
  order: number;
  title: string;
  description: string;
  estimated_minutes: number;
  kind: "build" | "review";
};

export type MasteryItem = {
  name: string;
  progress: number;
};

export type TodayResponse = {
  date: string;
  greeting: { name: string; message: string; subtitle: string };
  next_task: TodayTask;
  upcoming_tasks: UpcomingTask[];
  study_summary: {
    total_minutes: number;
    coding_minutes: number;
    reading_minutes: number;
    review_minutes: number;
  };
  streak: { days: number };
  mastery: MasteryItem[];
};
