import { useNavigate } from "react-router-dom";
import { Mail, Lock, ShieldCheck, Users } from "lucide-react";
import Logo from "../components/Logo";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col overflow-hidden bg-white shadow-soft md:flex-row">
        <div className="relative hidden w-1/2 md:block">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
            alt="Modern villa"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-2xl font-semibold">Find your next home in Famagusta</p>
            <p className="mt-2 text-sm text-white/80">Trusted rentals and verified roommates</p>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col justify-center px-8 py-12 md:w-1/2 fade-in">
          <Logo />
          <div className="mt-10">
            <h1 className="text-2xl font-semibold text-slate-800">Sign in</h1>
            <p className="mt-2 text-sm text-slate-500">
              Use your email to access the student housing and roommate platform.
            </p>
          </div>

          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/dashboard");
            }}
          >
            <label className="block text-sm font-medium text-slate-600">
              Email Address
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <Mail size={16} className="text-slate-400" />
                <input
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-600">
              Password
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <Lock size={16} className="text-slate-400" />
                <input
                  className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
            </label>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <button type="button" className="hover:text-brand-600 hover:underline">
                Forgot Password?
              </button>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="hover:text-brand-600 hover:underline"
              >
                New to us? Create account
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 lift-hover"
            >
              Login
            </button>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              Or
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 lift-hover"
              >
                <ShieldCheck size={16} className="text-brand-500" />
                Continue with Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 lift-hover"
              >
                <Users size={16} className="text-brand-500" />
                Continue with Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
