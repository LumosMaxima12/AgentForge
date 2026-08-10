import type { TodayResponse } from "../../types/today";
import { apiGet } from "./client";

export const todayDemoData: TodayResponse = {
  date: new Date().toISOString().slice(0, 10),
  greeting: {
    name: "Eason",
    message: "Good evening",
    subtitle: "Keep the momentum. Small steps, big impact.",
  },
  next_task: {
    id: 101,
    order: 1,
    title: "Python Type Hints",
    description: "Understand why type hints matter in production Python applications.",
    category: "Foundation",
    topic: "Python",
    estimated_minutes: 25,
  },
  upcoming_tasks: [
    {
      id: 102,
      order: 2,
      title: "HTTP & REST",
      description: "Build your first API",
      estimated_minutes: 40,
      kind: "build",
    },
    {
      id: 103,
      order: 3,
      title: "Review: Pydantic",
      description: "5 review questions",
      estimated_minutes: 20,
      kind: "review",
    },
  ],
  study_summary: {
    total_minutes: 102,
    coding_minutes: 48,
    reading_minutes: 36,
    review_minutes: 18,
  },
  streak: { days: 37 },
  mastery: [
    { name: "Python", progress: 78 },
    { name: "LLM Basics", progress: 42 },
    { name: "Agent Development", progress: 18 },
    { name: "System Design", progress: 12 },
  ],
};

export async function getToday(): Promise<TodayResponse> {
  try {
    return await apiGet<TodayResponse>("/api/v1/today");
  } catch {
    return todayDemoData;
  }
}
