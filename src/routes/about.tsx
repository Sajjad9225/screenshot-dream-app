import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { ActionAnchor, ActionLink } from "@/components/ui/action";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";
import { skills, timeline } from "@/data/timeline";

const title = `درباره من — ${site.name}`;
const description =
  "مسیر کاری، مهارت‌ها و نگاه من به طراحی و ساخت محصولات دیجیتال؛ از اولین سایت‌ها تا ابزارهای مبتنی بر هوش مصنوعی.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="px-4">
      <section className="mx-auto max-w-4xl py-16 lg:py-24">
        <Reveal>
          <h1 className="text-4xl text-foreground sm:text-5xl">درباره من</h1>
          <div className="mt-8 space-y-5 text-base leading-9 text-muted-foreground">
            <p>
              من {site.name} هستم؛ طراح و توسعه‌دهنده‌ی محصولات دیجیتال. کارم را با ساخت سایت برای
              کسب‌وکارهای کوچک شروع کردم و خیلی زود فهمیدم مهم‌ترین بخش کار، ظاهر نیست — فهمیدن
              مسئله است.
            </p>
            <p>
              امروز روی پروژه‌هایی کار می‌کنم که سه چیز را کنار هم دارند: طراحی تمیز، پیاده‌سازی
              سریع و یک هدف مشخص کسب‌وکاری. از فروشگاه اینترنتی و اپلیکیشن گرفته تا ابزارهای مبتنی
              بر هوش مصنوعی که کارهای تکراری را حذف می‌کنند.
            </p>
            <p>
              اگر بخواهم روش کارم را در یک جمله بگویم: کمتر ساختن، درست‌تر ساختن. چیزی که کاربر
              استفاده نمی‌کند، ارزش نگهداری ندارد.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionAnchor href={site.resumeUrl} download variant="clay">
              <Download className="size-4" />
              دانلود رزومه
            </ActionAnchor>
            <ActionLink to="/contact" variant="outline">
              تماس با من
            </ActionLink>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl py-12">
        <SectionHeading eyebrow="مسیر من" title="قدم‌به‌قدم تا اینجا" />
        <div className="mt-10 border-r border-border pr-6">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.05}>
              <div className="relative pb-10">
                <span className="absolute -right-[31px] top-1.5 size-3 rounded-full bg-accent ring-4 ring-background" />
                <p className="text-sm font-bold text-accent">{item.year}</p>
                <h3 className="mt-2 text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-8 text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl py-12">
        <SectionHeading eyebrow="مهارت‌ها" title="ابزارها و تخصص‌ها" />
        <Reveal className="mt-8">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
