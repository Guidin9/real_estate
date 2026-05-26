import { X, MapPin, BedDouble, PoundSterling, MessageSquareText, PhoneCall, MessageCircle } from "lucide-react";

const ListingModal = ({ listing, onClose }) => {
  if (!listing) return null;

  // The links below sanitize the phone number for tel and WhatsApp formats.
  const whatsappNumber = listing.phone.replace(/\D/g, "");
  const phoneLink = `tel:${listing.phone.replace(/\s+/g, "")}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Listing Details</p>
            <h2 className="text-lg font-semibold text-slate-800">{listing.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
          >
            <X size={16} />
          </button>
        </div>

        <div className="grid gap-6 px-6 py-5 md:grid-cols-[1.2fr_1fr]">
          <img
            className="h-56 w-full rounded-xl object-cover"
            src={listing.image}
            alt={listing.title}
          />

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin size={16} className="text-brand-500" />
              {listing.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <BedDouble size={16} className="text-brand-500" />
              {listing.rooms}
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <PoundSterling size={16} className="text-brand-500" />
              {listing.priceLabel}
            </div>
            <p className="text-sm text-slate-500">{listing.description}</p>

            <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Contact</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">{listing.contactName}</p>
              <p className="text-xs text-slate-500">{listing.phone}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={phoneLink}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
              >
                <PhoneCall size={16} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                <MessageCircle size={16} className="text-green-500" />
                WhatsApp
              </a>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              <MessageSquareText size={16} />
              Request a Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingModal;

