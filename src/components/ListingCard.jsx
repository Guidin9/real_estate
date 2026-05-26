import { Heart } from "lucide-react";

const ListingCard = ({ listing, onSelect }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(listing.id)}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-soft lift-hover"
    >
      <div className="relative h-40 w-full">
        <img
          className="h-full w-full object-cover"
          src={listing.image}
          alt={listing.title}
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
          {listing.priceLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-500">
          <Heart size={14} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-800 group-hover:text-brand-600">
          {listing.title}
        </h3>
        <p className="text-xs text-slate-500">{listing.location}</p>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{listing.rooms}</span>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-600">
            {listing.type}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ListingCard;

