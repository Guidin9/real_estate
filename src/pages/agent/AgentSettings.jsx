import { User, Mail, Phone, MapPin, Shield } from "lucide-react";
import AgentLayout from "../../components/AgentLayout";
import { loadProfile } from "../../utils/profileStorage";

const AgentSettings = () => {
  const profile = loadProfile();

  return (
    <AgentLayout title="Account Settings" subtitle="Keep your agency details up to date.">
      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-600">
            Full Name
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <User size={16} className="text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                defaultValue={profile?.fullName || ""}
              />
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600">
            Email Address
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <Mail size={16} className="text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                defaultValue={profile?.email || ""}
              />
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600">
            Phone Number
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <Phone size={16} className="text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                defaultValue={profile?.phone || ""}
              />
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600">
            Office Location
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <MapPin size={16} className="text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                placeholder="Famagusta, City Center"
              />
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600 md:col-span-2">
            Security
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-500">
              <Shield size={16} className="text-slate-400" />
              Two-factor authentication is enabled for agent accounts.
            </div>
          </label>

          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-5 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </AgentLayout>
  );
};

export default AgentSettings;

