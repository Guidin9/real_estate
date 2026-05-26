import { Mail, MapPin, PhoneCall } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-10 rounded-3xl bg-white px-6 py-8 shadow-soft">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-slate-500">
            Cyprus Estate connects students with trusted rentals and roommate matches in Famagusta.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700">Contact Us</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-500" />
              Salamis Road, Famagusta, TRNC
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall size={16} className="text-brand-500" />
              +90 392 555 0101
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-brand-500" />
              support@cyprusestate.demo
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700">Suggestions</p>
          <p className="mt-4 text-sm text-slate-500">
            Have ideas for improvements? We would love your feedback.
          </p>
          <button
            type="button"
            className="mt-4 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 lift-hover"
          >
            Send a Suggestion
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 text-xs text-slate-400">
        <span>© 2026 Cyprus Estate. All rights reserved.</span>
        <div className="flex gap-4">
          <button type="button" className="hover:text-brand-600 hover:underline">Privacy</button>
          <button type="button" className="hover:text-brand-600 hover:underline">Terms</button>
          <button type="button" className="hover:text-brand-600 hover:underline">Help Center</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

