import { Mail, MessageCircle, Phone, Plus, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/config/site";

export function QuickContact() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: site.contact.telegram, label: "تلگرام", Icon: MessageCircle },
    { href: `mailto:${site.contact.email}`, label: "ایمیل", Icon: Mail },
    { href: `tel:${site.contact.phone}`, label: "تماس", Icon: Phone },
  ];

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {open
        ? items.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Icon className="size-4 text-accent" />
              {label}
            </a>
          ))
        : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="تماس سریع"
        className="clay-panel flex size-14 items-center justify-center rounded-full shadow-lift transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <Plus className="size-6" />}
      </button>
    </div>
  );
}
