import Filters from "../components/Filters";
import ListingGrid from "../components/ListingGrid";
import ListingModal from "../components/ListingModal";
import MapPanel from "../components/MapPanel";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { useListings } from "../hooks/useListings";

const Dashboard = () => {
  const {
    filters,
    setFilters,
    filteredListings,
    selectedListing,
    setSelectedId,
  } = useListings();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <TopBar
          searchValue={filters.search}
          onSearchChange={(value) => setFilters({ ...filters, search: value })}
        />

        <Filters filters={filters} onFiltersChange={setFilters} />

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white px-5 py-4 shadow-soft">
              <p className="text-xs uppercase tracking-wide text-slate-400">Listings</p>
              <h2 className="text-lg font-semibold text-slate-800">
                {filteredListings.length} Results in Famagusta
              </h2>
            </div>

            <ListingGrid listings={filteredListings} onSelect={setSelectedId} />
          </div>

          <div className="min-h-[520px]">
            <MapPanel listings={filteredListings} onSelect={setSelectedId} />
          </div>
        </div>
      </div>

      <ListingModal listing={selectedListing} onClose={() => setSelectedId(null)} />
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

