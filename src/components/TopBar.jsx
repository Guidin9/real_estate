import { Bell, Search, UserCircle2 } from "lucide-react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const TopBar = ({ searchValue, onSearchChange }) => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-6 py-4 shadow-soft">
      <Logo compact />
      <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 transition focus-within:border-brand-300 focus-within:bg-white">
        <Search size={16} />
        <input
          className="w-full border-none bg-transparent outline-none"
          placeholder="Search by city or neighborhood"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
      <div className="hidden items-center gap-6 text-xs text-slate-500 lg:flex">
        <div className="text-center">
          <p className="font-semibold text-slate-800">58</p>
          <p>Active Listings</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-slate-800">12</p>
          <p>Roommates</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-slate-800">4.8</p>
          <p>Avg. Rating</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-slate-500">
        <Bell size={18} />
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="rounded-full border border-slate-200 bg-white p-1.5 text-brand-500 hover:-translate-y-0.5 hover:bg-slate-50"
        >
          <UserCircle2 size={24} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
