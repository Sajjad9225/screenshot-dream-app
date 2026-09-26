import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "start" }: Props) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-8 text-muted-foreground ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
