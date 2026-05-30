import { Mail, Phone, ArrowUpRight } from "lucide-react";
import AgentLayout from "../../components/AgentLayout";

const AgentMessages = () => {
  const messages = [
    {
      id: 1,
      name: "Ece Kaya",
      listing: "Salamis Road 2+1 Apartment",
      summary: "Is the apartment still available for September?",
      channel: "Email",
    },
    {
      id: 2,
      name: "Omar Ali",
      listing: "Beachside Studio",
      summary: "Can I schedule a viewing this weekend?",
      channel: "Phone",
    },
    {
      id: 3,
      name: "Selin Arda",
      listing: "Modern 3+1 Flat",
      summary: "Is the rent negotiable for a 12-month lease?",
      channel: "Email",
    },
  ];

  return (
    <AgentLayout title="Messages & Inquiries" subtitle="Respond quickly to keep leads warm.">
      <section className="rounded-3xl bg-white shadow-soft">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">Recent Conversations</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {messages.map((message) => (
            <div key={message.id} className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-sm font-semibold text-slate-700">{message.name}</p>
                <p className="text-sm text-slate-500">{message.listing}</p>
                <p className="mt-1 text-sm text-slate-600">{message.summary}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                {message.channel === "Email" ? (
                  <Mail size={14} className="text-brand-500" />
                ) : (
                  <Phone size={14} className="text-brand-500" />
                )}
                {message.channel}
              </div>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 hover:bg-slate-50">
                View
                <ArrowUpRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </AgentLayout>
  );
};

export default AgentMessages;

