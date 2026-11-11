import { cn } from "@/lib/cn";
import type { SectionIntro } from "@/types/content";

type SectionHeaderProps = {
  intro: SectionIntro;
  headingId: string;
  tone?: "light" | "dark";
};

/**
 * Eyebrow + H2 + description. Rendered as siblings so the parent section's
 * 32 px auto-layout gap applies between them, exactly as in Figma.
 */
export function SectionHeader({ intro, headingId, tone = "light" }: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <>
      <p className={cn("type-label", dark ? "text-inverse" : "text-primary")}>
        <span lang="en" dir="ltr">
          {intro.eyebrow}
        </span>
      </p>
      <h2 id={headingId} className={cn("type-h2", dark ? "text-surface" : "text-ink")}>
        {intro.title}
      </h2>
      <p className={cn("type-body", dark ? "text-inverse" : "text-muted")}>{intro.description}</p>
    </>
  );
}
