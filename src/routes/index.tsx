import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Lightbulb, Rocket, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { ActionLink } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { articles } from "@/data/articles";
import { skills } from "@/data/timeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.role}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — ${site.role}` },
      { property: "og:description", content: site.description },
    ],
  }),
  component: Index,
});

const aiFlow = [
  {
    icon: Lightbulb,
    title: "ایده",
    text: "از یک مسئله‌ی واقعی در کسب‌وکار شروع می‌کنیم؛ کاری که هر روز وقت می‌گیرد.",
  },
  {
    icon: Sparkles,
    title: "هوش مصنوعی",
    text: "مدل را روی داده‌ها، محصولات و لحن خودتان تنظیم می‌کنیم تا خروجی عمومی نباشد.",
  },
  {
    icon: Rocket,
    title: "اجرا",
    text: "همان‌جایی که کار جریان دارد اجرا می‌شود: داخل سایت، پنل یا پیام‌رسان تیم.",
  },
];

function Index() {
  return (
    <div className="px-4">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            پذیرش پروژه‌های جدید
          </span>
          <h1 className="mt-6 text-4xl leading-[1.35] text-foreground sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink to="/contact" variant="clay" size="lg">
              گفتگو درباره پروژه
            </ActionLink>
            <ActionLink to="/portfolio" variant="outline" size="lg">
              دیدن نمونه‌کارها
            </ActionLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {skills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-secondary px-4 py-2 text-xs text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] warm-panel opacity-70 blur-2xl" />
            <img
              src={heroImage}
              alt="ترکیب موکاپ مرورگر و موبایل روی پس‌زمینه خاکی و ارگانیک"
              width={1200}
              height={1200}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </div>
        </Reveal>
      </section>

      {/* Services summary */}
      <section className="mx-auto max-w-6xl py-16">
        <SectionHeading
          eyebrow="خدمات"
          title="از ایده تا محصولی که کار می‌کند"
          description="طراحی، ساخت و بهبود محصولات دیجیتال؛ با تمرکز روی چیزی که برای کسب‌وکار شما نتیجه دارد."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <article className="surface h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="text-xs font-bold text-accent">
                  {String(i + 1).padStart(2, "۰")}
                </span>
                <h3 className="mt-3 text-lg text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
          >
            همه خدمات
            <ArrowLeft className="size-4" />
          </Link>
        </Reveal>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl py-16">
        <SectionHeading
          eyebrow="نمونه‌کارها"
          title="کارهای منتخب"
          description="چند نمونه از پروژه‌هایی که طراحی یا ساخته‌ام."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.id} delay={i * 0.07}>
              <article className="surface group h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="text-xs text-accent">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="mt-2 text-lg text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI section */}
      <section className="mx-auto max-w-6xl py-16">
        <Reveal>
          <div className="surface warm-panel overflow-hidden p-8 sm:p-12">
            <h2 className="text-3xl text-foreground sm:text-4xl">هوش مصنوعی برای زندگی واقعی</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              نه نمایش تکنولوژی؛ ابزارهایی که یک کار تکراری را از دوش شما برمی‌دارند.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {aiFlow.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
                      <Icon className="size-5 text-accent" />
                    </span>
                    <h3 className="text-base text-foreground">
                      {i + 1}. {title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-6xl py-16">
        <SectionHeading eyebrow="مقالات" title="تازه‌ترین نوشته‌ها" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.07}>
              <Link
                to="/articles/$slug"
                params={{ slug: article.slug }}
                className="surface group flex h-full flex-col overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-16/9 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-accent">
                    {article.category} · {article.readingTime}
                  </p>
                  <h3 className="mt-2 text-base text-foreground">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{article.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl py-16">
        <Reveal>
          <div className="clay-panel rounded-3xl p-10 text-center shadow-lift sm:p-16">
            <h2 className="text-3xl sm:text-4xl">پروژه‌ای در ذهن دارید؟</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 opacity-90">
              یک پیام بفرستید؛ درباره‌ی ایده حرف می‌زنیم و مسیر اجرای واقع‌بینانه‌اش را می‌چینیم.
            </p>
            <div className="mt-8 flex justify-center">
              <ActionLink to="/contact" variant="outline" size="lg">
                شروع گفتگو
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
