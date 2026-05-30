import { useNavigate } from "react-router-dom";
import { Mail, Home, Calendar, Phone, MapPin, UserCheck } from "lucide-react";
import Logo from "../components/Logo";
import { loadProfile } from "../utils/profileStorage";

const Profile = () => {
  const navigate = useNavigate();
  const profile = loadProfile();

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white px-8 py-10 shadow-soft">
          <Logo />
          <h1 className="mt-6 text-2xl font-semibold text-slate-800">No profile found</h1>
          <p className="mt-2 text-sm text-slate-500">
            Create a profile to access personalized listings and roommate matches.
          </p>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="mt-6 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              {profile.role} Profile
            </p>
            <h1 className="text-2xl font-semibold text-slate-800">{profile.fullName}</h1>
          </div>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="grid gap-6 px-8 py-6 md:grid-cols-2">
          {profile.role === "Agent" && (
            <div className="rounded-2xl border border-brand-100 bg-brand-50/50 px-5 py-4 md:col-span-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-700">Agent Panel Access</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Manage listings, review inquiries, and track performance in your panel.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate("/agent-panel")}
                  className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
                >
                  Open Panel
                </button>
              </div>
            </div>
          )}

          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <UserCheck size={16} className="text-brand-500" />
              Role
            </div>
            <p className="mt-2 text-sm text-slate-600">{profile.role}</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Mail size={16} className="text-brand-500" />
              Email
            </div>
            <p className="mt-2 text-sm text-slate-600">{profile.email}</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Phone size={16} className="text-brand-500" />
              Phone
            </div>
            <p className="mt-2 text-sm text-slate-600">{profile.phone}</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Home size={16} className="text-brand-500" />
              Looking For
            </div>
            <p className="mt-2 text-sm text-slate-600">{profile.lookingFor}</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MapPin size={16} className="text-brand-500" />
              Preferred Area
            </div>
            <p className="mt-2 text-sm text-slate-600">{profile.preferredArea}</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Calendar size={16} className="text-brand-500" />
              Move-in Month
            </div>
            <p className="mt-2 text-sm text-slate-600">{profile.moveIn}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
