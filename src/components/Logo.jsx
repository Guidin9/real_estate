import { Waves } from "lucide-react";

const Logo = ({ compact = false }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600">
        <Waves size={20} />
      </div>
      {!compact && (
        <div>
          <p className="text-sm font-semibold text-slate-800">Cyprus Estate</p>
          <p className="text-xs text-slate-500">Famagusta Listings</p>
        </div>
      )}
    </div>
  );
};

export default Logo;

