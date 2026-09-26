import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/config/site";
import { ActionLink } from "@/components/ui/action";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-border bg-card/85 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="clay-panel flex size-10 items-center justify-center rounded-full text-sm font-extrabold">
            س
          </span>
          <span className="text-sm font-extrabold text-foreground">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink to="/contact" size="sm" variant="clay" className="hidden sm:inline-flex">
            شروع همکاری
          </ActionLink>
          <button
            type="button"
            aria-label="منو"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl surface p-3 lg:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
