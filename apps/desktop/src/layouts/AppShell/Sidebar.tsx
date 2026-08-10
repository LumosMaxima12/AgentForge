import {
  BarChart3,
  BookOpen,
  ChevronDown,
  FlaskConical,
  Home,
  Layers3,
  Map,
  Settings,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../../i18n/I18nProvider";

export function Sidebar() {
  const { t } = useI18n();

  const learnItems = [
    { label: t("nav.roadmap"), to: "/roadmap", icon: Map },
    { label: t("nav.learn"), to: "/learn", icon: BookOpen },
    { label: t("nav.lab"), to: "/lab", icon: FlaskConical },
    { label: t("nav.knowledge"), to: "/knowledge", icon: Layers3 },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><Sparkles size={22} /></div>
        <div><strong>AgentForge</strong><span>v0.1.0</span></div>
      </div>
      <nav className="sidebar-nav" aria-label="Primary">
        <NavItem to="/today" label={t("nav.today")} icon={Home} />
        <div className="nav-section-label">{t("nav.learnSection")}</div>
        {learnItems.map((item) => <NavItem key={item.to} {...item} />)}
        <div className="nav-separator" />
        <NavItem to="/progress" label={t("nav.progress")} icon={BarChart3} />
        <NavItem to="/settings" label={t("nav.settings")} icon={Settings} />
      </nav>
      <div className="sidebar-profile">
        <div className="profile-row">
          <div className="avatar">E</div>
          <div className="profile-copy"><strong>Eason</strong><span>{t("profile.track")}</span></div>
          <ChevronDown size={16} />
        </div>
        <div className="profile-level">{t("profile.level", { level: 2, current: "1,240", target: "2,000" })}</div>
        <div className="thin-progress"><span style={{ width: "57%" }} /></div>
      </div>
    </aside>
  );
}

type NavItemProps = { to: string; label: string; icon: ComponentType<{ size?: number; strokeWidth?: number }> };

function NavItem({ to, label, icon: Icon }: NavItemProps) {
  return <NavLink to={to} className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}><Icon size={20} strokeWidth={1.8}/><span>{label}</span></NavLink>;
}
