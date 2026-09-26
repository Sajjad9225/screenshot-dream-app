import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        clay: "clay-panel shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        outline: "border border-border bg-card text-foreground hover:bg-secondary",
        ghost: "text-foreground hover:bg-secondary",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-7",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type Variants = VariantProps<typeof actionVariants>;

export function ActionLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function ActionAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function ActionButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(actionVariants({ variant, size }), className)} {...props} />;
}
