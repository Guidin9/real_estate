import { Home, MapPin, PoundSterling, Image, BedDouble } from "lucide-react";
import AgentLayout from "../../components/AgentLayout";

const AgentNewListing = () => {
  return (
    <AgentLayout
      title="Add New Listing"
      subtitle="Capture the essentials so listings can be reviewed quickly."
    >
      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <form className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-600">
            Property Title
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <Home size={16} className="text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                placeholder="Modern 2+1 near EMU"
              />
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600">
            Location
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <MapPin size={16} className="text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                placeholder="Famagusta, Salamis Road"
              />
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600">
            Monthly Price
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <PoundSterling size={16} className="text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
                placeholder="£350"
              />
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600">
            Bedrooms
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
              <BedDouble size={16} className="text-slate-400" />
              <select className="w-full border-none bg-transparent text-sm text-slate-700 outline-none">
                <option>Studio</option>
                <option>1 Bedroom</option>
                <option>2 Bedrooms</option>
                <option>3 Bedrooms</option>
              </select>
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600 md:col-span-2">
            Photo Gallery (demo)
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-dashed border-slate-200 px-3 py-3 text-sm text-slate-500">
              <Image size={16} className="text-slate-400" />
              Drag and drop or click to upload
            </div>
          </label>

          <label className="text-sm font-medium text-slate-600 md:col-span-2">
            Description
            <textarea
              className="mt-2 h-28 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
              placeholder="Highlight key features, furnishing, and nearby amenities."
            />
          </label>

          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600"
            >
              Save Draft
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-5 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Submit for Approval
            </button>
          </div>
        </form>
      </section>
    </AgentLayout>
  );
};

export default AgentNewListing;

