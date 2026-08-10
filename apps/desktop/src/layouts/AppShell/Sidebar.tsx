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

const learnItems = [
  { label: "Roadmap", to: "/roadmap", icon: Map },
  { label: "Learn", to: "/learn", icon: BookOpen },
  { label: "Lab", to: "/lab", icon: FlaskConical },
  { label: "Knowledge", to: "/knowledge", icon: Layers3 },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><Sparkles size={22} /></div>
        <div>
          <strong>AgentForge</strong>
          <span>v0.1.0</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        <NavItem to="/today" label="Today" icon={Home} />

        <div className="nav-section-label">LEARN</div>
        {learnItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}

        <div className="nav-separator" />
        <NavItem to="/progress" label="Progress" icon={BarChart3} />
        <NavItem to="/settings" label="Settings" icon={Settings} />
      </nav>

      <div className="sidebar-profile">
        <div className="profile-row">
          <div className="avatar">E</div>
          <div className="profile-copy">
            <strong>Eason</strong>
            <span>AI Engineer Foundation</span>
          </div>
          <ChevronDown size={16} />
        </div>
        <div className="profile-level">Level 2 · 1,240 / 2,000 XP</div>
        <div className="thin-progress"><span style={{ width: "57%" }} /></div>
      </div>
    </aside>
  );
}

type NavItemProps = {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

function NavItem({ to, label, icon: Icon }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
    >
      <Icon size={20} strokeWidth={1.8} />
      <span>{label}</span>
    </NavLink>
  );
}
