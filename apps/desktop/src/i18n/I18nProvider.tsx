import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export type Language = "zh-CN" | "en-US";

type TranslateParams = Record<string, string | number>;

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, params?: TranslateParams, fallback?: string) => string;
};

const STORAGE_KEY = "agentforge.language";

const messages: Record<Language, Record<string, string>> = {
  "zh-CN": {
    "nav.today": "今日",
    "nav.learnSection": "学习",
    "nav.roadmap": "路线图",
    "nav.learn": "课程",
    "nav.lab": "实验室",
    "nav.knowledge": "知识库",
    "nav.progress": "学习进度",
    "nav.settings": "设置",
    "profile.track": "AI 工程师基础",
    "profile.level": "等级 {{level}} · {{current}} / {{target}} XP",

    "topbar.today": "今日",
    "topbar.search": "快速搜索或跳转...",
    "topbar.notifications": "通知",
    "topbar.settings": "设置",
    "topbar.switchLight": "切换到浅色主题",
    "topbar.switchDark": "切换到深色主题",
    "topbar.switchEnglish": "切换到英文",
    "topbar.switchChinese": "切换到中文",

    "today.greeting.morning": "早上好",
    "today.greeting.afternoon": "下午好",
    "today.greeting.evening": "晚上好",
    "today.subtitle": "保持节奏。每一个小进步，都会积累成真正的能力。",
    "today.nextTask": "下一个任务",
    "today.upNext": "接下来",
    "today.continueLearning": "继续学习",
    "today.minute": "{{count}} 分钟",

    "study.today": "今日学习",
    "study.daily": "今日",
    "study.studied": "已学习",
    "study.coding": "编码",
    "study.reading": "阅读",
    "study.review": "复习",
    "study.duration": "{{hours}} 小时 {{minutes}} 分钟",

    "right.streak": "连续学习",
    "right.days": "天",
    "right.keepItUp": "保持下去！",
    "right.mastery": "掌握度概览",
    "right.quickActions": "快捷操作",
    "right.askTutor": "询问 AI 导师",
    "right.reviewFlashcards": "复习知识卡片",
    "right.openLab": "打开实验室",
    "right.captureNote": "记录笔记",

    "calendar.previous": "上个月",
    "calendar.next": "下个月",
    "calendar.mon": "一",
    "calendar.tue": "二",
    "calendar.wed": "三",
    "calendar.thu": "四",
    "calendar.fri": "五",
    "calendar.sat": "六",
    "calendar.sun": "日",

    "task.101.title": "Python 类型标注",
    "task.101.description": "理解为什么类型标注对生产级 Python 应用十分重要。",
    "task.101.category": "基础能力",
    "task.101.topic": "Python",
    "task.102.title": "HTTP 与 REST",
    "task.102.description": "构建你的第一个 API",
    "task.103.title": "复习：Pydantic",
    "task.103.description": "完成 5 道复习题",

    "mastery.Python": "Python",
    "mastery.LLM Basics": "LLM 基础",
    "mastery.Agent Development": "Agent 开发",
    "mastery.System Design": "系统设计",

    "placeholder.description": "这个模块会在 Today 首页基础稳定后继续开发。",
    "page.roadmap": "路线图",
    "page.learn": "课程",
    "page.lab": "实验室",
    "page.knowledge": "知识库",
    "page.progress": "学习进度",
    "page.settings": "设置",
  },
  "en-US": {
    "nav.today": "Today",
    "nav.learnSection": "LEARN",
    "nav.roadmap": "Roadmap",
    "nav.learn": "Learn",
    "nav.lab": "Lab",
    "nav.knowledge": "Knowledge",
    "nav.progress": "Progress",
    "nav.settings": "Settings",
    "profile.track": "AI Engineer Foundation",
    "profile.level": "Level {{level}} · {{current}} / {{target}} XP",

    "topbar.today": "Today",
    "topbar.search": "Quick search or jump to...",
    "topbar.notifications": "Notifications",
    "topbar.settings": "Settings",
    "topbar.switchLight": "Switch to light theme",
    "topbar.switchDark": "Switch to dark theme",
    "topbar.switchEnglish": "Switch to English",
    "topbar.switchChinese": "Switch to Chinese",

    "today.greeting.morning": "Good morning",
    "today.greeting.afternoon": "Good afternoon",
    "today.greeting.evening": "Good evening",
    "today.subtitle": "Keep the momentum. Small steps compound into real capability.",
    "today.nextTask": "NEXT TASK",
    "today.upNext": "UP NEXT",
    "today.continueLearning": "Continue learning",
    "today.minute": "{{count}} min",

    "study.today": "TODAY",
    "study.daily": "Daily",
    "study.studied": "studied",
    "study.coding": "Coding",
    "study.reading": "Reading",
    "study.review": "Review",
    "study.duration": "{{hours}}h {{minutes}}m",

    "right.streak": "Streak",
    "right.days": "days",
    "right.keepItUp": "Keep it up!",
    "right.mastery": "Mastery Overview",
    "right.quickActions": "Quick Actions",
    "right.askTutor": "Ask AI Tutor",
    "right.reviewFlashcards": "Review Flashcards",
    "right.openLab": "Open Lab",
    "right.captureNote": "Capture Note",

    "calendar.previous": "Previous month",
    "calendar.next": "Next month",
    "calendar.mon": "M",
    "calendar.tue": "T",
    "calendar.wed": "W",
    "calendar.thu": "T",
    "calendar.fri": "F",
    "calendar.sat": "S",
    "calendar.sun": "S",

    "task.101.title": "Python Type Hints",
    "task.101.description": "Understand why type hints matter in production Python applications.",
    "task.101.category": "Foundation",
    "task.101.topic": "Python",
    "task.102.title": "HTTP & REST",
    "task.102.description": "Build your first API",
    "task.103.title": "Review: Pydantic",
    "task.103.description": "5 review questions",

    "mastery.Python": "Python",
    "mastery.LLM Basics": "LLM Basics",
    "mastery.Agent Development": "Agent Development",
    "mastery.System Design": "System Design",

    "placeholder.description": "This module is intentionally queued behind the Today foundation.",
    "page.roadmap": "Roadmap",
    "page.learn": "Learn",
    "page.lab": "Lab",
    "page.knowledge": "Knowledge",
    "page.progress": "Progress",
    "page.settings": "Settings",
  },
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "zh-CN";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "en-US" ? "en-US" : "zh-CN";
}

function interpolate(template: string, params?: TranslateParams) {
  if (!params) return template;
  return Object.entries(params).reduce(
    (value, [key, replacement]) => value.replaceAll(`{{${key}}}`, String(replacement)),
    template,
  );
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === "zh-CN" ? "en-US" : "zh-CN"));
  }, []);

  const t = useCallback(
    (key: string, params?: TranslateParams, fallback?: string) => {
      const template = messages[language][key] ?? fallback ?? key;
      return interpolate(template, params);
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, setLanguage, toggleLanguage, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
