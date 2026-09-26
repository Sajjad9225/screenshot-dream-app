import { Link } from "@tanstack/react-router";
import { navItems, site } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-extrabold text-foreground">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground">{site.role}</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} — تمام حقوق محفوظ است.</p>
        <p>{site.contact.location}</p>
      </div>
    </footer>
  );
}
