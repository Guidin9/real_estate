import logoImage from "../assets/logo1.png";

const Logo = ({ compact = false }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
        <img src={logoImage} alt="Cyprus Estate logo" className="h-full w-full object-cover" />
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
