import famagustaMap from "../assets/map1.png";

const MapPanel = ({ listings, onSelect }) => {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <img
        className="h-full w-full object-cover"
        src={famagustaMap}
        alt="Northern Cyprus map"
      />
      <div className="absolute inset-0 bg-brand-50/60" />

      {listings.map((listing) => (
        <button
          key={listing.id}
          type="button"
          onClick={() => onSelect(listing.id)}
          className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center transition hover:-translate-y-[calc(100%+4px)]"
          style={{ left: `${listing.mapPosition.x}%`, top: `${listing.mapPosition.y}%` }}
        >
          <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-700 shadow">
            {listing.priceLabel}
          </span>
          <span className="mt-1 h-3 w-3 rounded-full border-2 border-white bg-brand-500 shadow" />
        </button>
      ))}
    </div>
  );
};

export default MapPanel;
