import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

const toneClasses = {
  white: "bg-surface",
  neutral: "bg-surface-neutral",
  navy: "bg-navy-850 [--tx-focus-color:var(--tx-color-surface)]",
} as const;

type SectionProps = {
  id: string;
  labelledBy: string;
  tone: keyof typeof toneClasses;
  children: ReactNode;
};

/**
 * Standard page section: padding 80 / 100 at desktop, 1240 px content,
 * vertical auto-layout with a 32 px gap (Spacing/32).
 */
export function Section({ id, labelledBy, tone, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(toneClasses[tone], "px-6 py-14 md:px-10 md:py-20 xl:px-gutter")}
    >
      <div className="mx-auto flex max-w-content flex-col items-stretch gap-8">{children}</div>
    </section>
  );
}
