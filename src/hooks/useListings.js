import { useMemo, useState } from "react";
import listingsData from "../data/dummy_data.json";

const defaultFilters = {
  search: "",
  type: "All",
  priceRange: "Any",
  rooms: "Any",
};

const priceLimits = {
  Any: Infinity,
  "£150": 150,
  "£250": 250,
  "£350": 350,
  "£500": 500,
};

export const useListings = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedId, setSelectedId] = useState(null);

  const filteredListings = useMemo(() => {
    // The filtering pipeline below is intentionally explicit so it is easy to explain.
    // We check each filter one by one and only keep the listings that satisfy all rules.
    return listingsData.filter((listing) => {
      const searchValue = filters.search.trim().toLowerCase();
      const matchesSearch =
        !searchValue ||
        listing.title.toLowerCase().includes(searchValue) ||
        listing.location.toLowerCase().includes(searchValue);

      const matchesType = filters.type === "All" || listing.type === filters.type;

      const maxPrice = priceLimits[filters.priceRange] ?? Infinity;
      const matchesPrice = listing.priceValue <= maxPrice;

      const matchesRooms = filters.rooms === "Any" || listing.rooms === filters.rooms;

      return matchesSearch && matchesType && matchesPrice && matchesRooms;
    });
  }, [filters]);

  const selectedListing = useMemo(
    () => listingsData.find((listing) => listing.id === selectedId) || null,
    [selectedId]
  );

  return {
    filters,
    setFilters,
    filteredListings,
    selectedListing,
    setSelectedId,
  };
};

