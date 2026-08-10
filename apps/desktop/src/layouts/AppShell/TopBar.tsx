import { Bell, Search, Settings } from "lucide-react";

export function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-page-title">Today</div>
      <button className="command-search" type="button">
        <Search size={16} />
        <span>Quick search or jump to...</span>
        <kbd>⌘ K</kbd>
      </button>
      <div className="topbar-actions">
        <button className="icon-button" aria-label="Notifications"><Bell size={19} /></button>
        <button className="icon-button" aria-label="Settings"><Settings size={19} /></button>
        <button className="top-avatar" type="button">E</button>
      </div>
    </header>
  );
}
