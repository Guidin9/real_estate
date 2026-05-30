import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Home, PlusCircle, Mail, Settings } from "lucide-react";
import Logo from "./Logo";
import { loadProfile } from "../utils/profileStorage";

const navItems = [
  { to: "/agent-panel", label: "Dashboard Overview", icon: LayoutDashboard },
  { to: "/agent-panel/properties", label: "My Properties", icon: Home },
  { to: "/agent-panel/new", label: "Add New Listing", icon: PlusCircle },
  { to: "/agent-panel/messages", label: "Messages & Inquiries", icon: Mail },
  { to: "/agent-panel/settings", label: "Account Settings", icon: Settings },
];

const AgentLayout = ({ title, subtitle, children }) => {
  const navigate = useNavigate();
  const profile = loadProfile();

  // Guard: only allow access for profiles that selected the Agent role.
  if (!profile || profile.role !== "Agent") {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white px-8 py-10 shadow-soft">
          <Logo />
          <h1 className="mt-6 text-2xl font-semibold text-slate-800">Agent access only</h1>
          <p className="mt-2 text-sm text-slate-500">
            Create an agent profile to unlock the panel and manage listings.
          </p>
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="mt-6 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Go to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-3xl bg-white p-5 shadow-soft">
          <Logo />
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-500">Agent Panel</p>
          <nav className="mt-6 space-y-2 text-sm text-slate-600">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/agent-panel"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  <Icon size={16} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mt-6 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
          >
            Back to Dashboard
          </button>
        </aside>

        <main className="space-y-6">
          <header className="rounded-3xl bg-white px-6 py-5 shadow-soft">
            <p className="text-sm text-slate-500">Welcome back, {profile.fullName}.</p>
            <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
            {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
          </header>

          {children}
        </main>
      </div>
    </div>
  );
};

export default AgentLayout;

