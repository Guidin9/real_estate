import AgentLayout from "../../components/AgentLayout";

const AgentProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Salamis Road 2+1 Apartment",
      location: "Famagusta",
      status: "Active",
      price: "£300 / month",
    },
    {
      id: 2,
      title: "Beachside Studio",
      location: "Palm Beach",
      status: "Rented",
      price: "£250 / month",
    },
    {
      id: 3,
      title: "Modern 3+1 Flat",
      location: "City Center",
      status: "Pending",
      price: "£500 / month",
    },
  ];

  const statusStyle = (status) => {
    if (status === "Active") {
      return "bg-emerald-50 text-emerald-700";
    }
    if (status === "Rented") {
      return "bg-slate-100 text-slate-600";
    }
    return "bg-amber-50 text-amber-700";
  };

  return (
    <AgentLayout
      title="My Properties"
      subtitle="Manage your active listings and track their performance."
    >
      <section className="rounded-3xl bg-white shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">Current Portfolio</h2>
          <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Add New Listing
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-3">Property</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {properties.map((property) => (
                <tr key={property.id} className="bg-white">
                  <td className="px-6 py-4 font-medium text-slate-700">{property.title}</td>
                  <td className="px-6 py-4 text-slate-500">{property.location}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(property.status)}`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{property.price}</td>
                  <td className="px-6 py-4">
                    <button className="rounded-lg border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:bg-slate-50">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AgentLayout>
  );
};

export default AgentProperties;

