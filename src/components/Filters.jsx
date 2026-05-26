import { SlidersHorizontal } from "lucide-react";

const Filters = ({ filters, onFiltersChange }) => {
  const updateFilter = (key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const roommateModeEnabled = filters.type === "Roommate";

  return (
    <section className="mt-6 rounded-2xl bg-white px-6 py-4 shadow-soft">
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-2 font-semibold text-slate-700">
          <SlidersHorizontal size={16} />
          Filters
        </div>

        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Property Type
          <select
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-brand-300 focus:outline-none"
            value={filters.type}
            onChange={(event) => updateFilter("type", event.target.value)}
          >
            <option>All</option>
            <option>Rental</option>
            <option>Roommate</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Price Range
          <select
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-brand-300 focus:outline-none"
            value={filters.priceRange}
            onChange={(event) => updateFilter("priceRange", event.target.value)}
          >
            <option>Any</option>
            <option>£150</option>
            <option>£250</option>
            <option>£350</option>
            <option>£500</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Bed & Baths
          <select
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-brand-300 focus:outline-none"
            value={filters.rooms}
            onChange={(event) => updateFilter("rooms", event.target.value)}
          >
            <option>Any</option>
            <option>Studio</option>
            <option>1+1</option>
            <option>2+1</option>
            <option>3+1</option>
            <option>Room</option>
          </select>
        </label>

        <div className="ml-auto flex items-center gap-3 text-sm">
          <span className="text-slate-500">Roommate Mode</span>
          <button
            type="button"
            onClick={() => updateFilter("type", roommateModeEnabled ? "All" : "Roommate")}
            className={`relative h-6 w-11 rounded-full transition ${
              roommateModeEnabled ? "bg-brand-500" : "bg-slate-200"
            }`}
          >
            <span
              className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${
                roommateModeEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;

