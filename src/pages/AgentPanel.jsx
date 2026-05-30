import { CheckCircle2, Clock, Eye, MessageCircle } from "lucide-react";
import AgentLayout from "../components/AgentLayout";

const AgentPanel = () => {
  const stats = [
    {
      id: "active",
      label: "Active Listings",
      value: "12",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      id: "pending",
      label: "Pending Approval",
      value: "3",
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      id: "views",
      label: "Total Views",
      value: "1.2K",
      icon: Eye,
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      id: "messages",
      label: "Unread Messages",
      value: "5",
      icon: MessageCircle,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  const listings = [
    {
      id: 1,
      title: "Single Student Room",
      type: "Room",
      price: "£250 / month",
      status: "Active",
    },
    {
      id: 2,
      title: "Single Room",
      type: "Room",
      price: "£350 / month",
      status: "Rented",
    },
    {
      id: 3,
      title: "3+1 Modern Flat",
      type: "Apartment",
      price: "£1000 / month",
      status: "Active",
    },
    {
      id: 4,
      title: "Modern Villa",
      type: "Villa",
      price: "£250,000",
      status: "Pending",
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
    <AgentLayout title="Dashboard Overview" subtitle="Here is a quick overview of your portfolio.">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="rounded-2xl bg-white px-5 py-4 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-800">{item.value}</p>
                </div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.bg}`}>
                  <Icon size={18} className={item.color} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="rounded-3xl bg-white shadow-soft">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">Latest Listings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-3">Property</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {listings.map((listing) => (
                <tr key={listing.id} className="bg-white">
                  <td className="px-6 py-4 font-medium text-slate-700">{listing.title}</td>
                  <td className="px-6 py-4 text-slate-500">{listing.type}</td>
                  <td className="px-6 py-4 text-slate-500">{listing.price}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(listing.status)}`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="rounded-lg border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:bg-slate-50">
                      View
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

export default AgentPanel;
