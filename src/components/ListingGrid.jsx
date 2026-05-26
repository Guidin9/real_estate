import ListingCard from "./ListingCard";

const ListingGrid = ({ listings, onSelect }) => {
  if (listings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-500">
        No listings match your filters. Try widening the price or room options.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ListingGrid;

