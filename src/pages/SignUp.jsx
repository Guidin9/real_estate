import { useNavigate } from "react-router-dom";
import { Mail, User, Phone, Home, MapPin } from "lucide-react";
import Logo from "../components/Logo";
import { saveProfile } from "../utils/profileStorage";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-soft md:flex-row">
        <div className="relative flex w-full flex-1 flex-col justify-center px-8 py-12 md:w-1/2">
          <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-brand-100 blur-2xl" />
          <div className="absolute -right-24 bottom-10 h-52 w-52 rounded-full bg-brand-200/60 blur-3xl" />
          <div className="relative z-10">
            <Logo />
          </div>
          <div className="relative z-10 mt-10">
            <h1 className="text-2xl font-semibold text-slate-800">Create your profile</h1>
            <p className="mt-2 text-sm text-slate-500">
              Set up a simple profile so you can match with listings and roommates.
            </p>
          </div>

          <form
            className="relative z-10 mt-8 space-y-4 fade-in"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              // The profile is stored in localStorage to keep this demo fully client-side.
              saveProfile({
                fullName: formData.get("fullName"),
                email: formData.get("email"),
                role: formData.get("role"),
                phone: formData.get("phone"),
                lookingFor: formData.get("lookingFor"),
                preferredArea: formData.get("preferredArea"),
                budget: formData.get("budget"),
                moveIn: formData.get("moveIn"),
              });
              navigate("/dashboard");
            }}
          >
            <label className="block text-sm font-medium text-slate-600">
              Full Name
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <User size={16} className="text-slate-400" />
                <input
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  name="fullName"
                  placeholder="Mert Demir"
                  required
                />
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Email Address
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <Mail size={16} className="text-slate-400" />
                <input
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  name="email"
                  placeholder="mert@example.com"
                  type="email"
                  required
                />
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Role
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <User size={16} className="text-slate-400" />
                <select
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  name="role"
                  required
                >
                  <option value="Student">Student</option>
                  <option value="Landlord">Landlord</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Phone Number
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <Phone size={16} className="text-slate-400" />
                <input
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  name="phone"
                  placeholder="+90 392 000 0000"
                  required
                />
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Looking For
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <Home size={16} className="text-slate-400" />
                <select
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  name="lookingFor"
                  required
                >
                  <option value="Rental">Rental</option>
                  <option value="Roommate">Roommate</option>
                </select>
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Preferred Area
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <MapPin size={16} className="text-slate-400" />
                <input
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  name="preferredArea"
                  placeholder="Salamis Road, Famagusta"
                  required
                />
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Monthly Budget
              <select
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                name="budget"
                required
              >
                <option value="£150 - £250">£150 - £250</option>
                <option value="£250 - £350">£250 - £350</option>
                <option value="£350 - £500">£350 - £500</option>
                <option value="£500+">£500+</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Preferred Move-in Month
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
                name="moveIn"
                type="month"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 lift-hover"
            >
              Create Profile
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full text-sm text-slate-500 hover:text-brand-600 hover:underline"
            >
              Already have an account? Sign in
            </button>
          </form>
        </div>

        <div className="relative hidden w-1/2 bg-gradient-to-br from-brand-100 via-white to-brand-50 px-10 py-12 md:block">
          <div className="absolute -top-10 right-10 h-28 w-28 rounded-2xl bg-white/70 shadow-soft float-soft" />
          <div className="absolute bottom-14 left-8 h-16 w-16 rounded-full bg-brand-200/60" />
          <div className="relative rounded-3xl bg-white/85 p-6 shadow-soft">
            <img
              className="h-44 w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
              alt="Modern home"
            />
            <p className="mt-5 text-sm font-semibold text-slate-700">What you will unlock</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Verified listings with instant contact.</li>
              <li>Tailored matches by area and budget.</li>
              <li>Saved search preferences for Famagusta.</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-600">Trusted</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Student-friendly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

