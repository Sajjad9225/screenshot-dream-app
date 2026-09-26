import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ActionLink } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";
import { services } from "@/data/services";

const title = `خدمات — ${site.name}`;
const description =
  "طراحی سایت، فروشگاه اینترنتی، اپلیکیشن، رابط کاربری، راهکارهای هوش مصنوعی، اتوماسیون، سئو و مشاوره محصول دیجیتال.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="px-4">
      <section className="mx-auto max-w-6xl py-16 lg:py-24">
        <Reveal>
          <h1 className="text-4xl text-foreground sm:text-5xl">خدمات</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{description}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon];
            return (
              <Reveal key={service.id} delay={i * 0.04}>
                <article className="surface flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
                      {Icon ? <Icon className="size-5 text-accent" /> : null}
                    </span>
                    <span className="text-sm font-bold text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 text-lg text-foreground">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  {service.cta ? (
                    <ActionLink to="/contact" variant="clay" size="sm" className="mt-6 self-start">
                      {service.cta}
                    </ActionLink>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
