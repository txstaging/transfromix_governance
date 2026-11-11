import type { AxisCardContent } from "@/types/content";

/** Numbered compliance axis card (frames 4559:8209 / 8213 / 8218 / 8222). */
export function AxisCard({ card }: { card: AxisCardContent }) {
  return (
    <article className="flex flex-col items-start gap-4 overflow-hidden rounded-card bg-surface p-8">
      <p className="w-full type-label text-primary">{card.ordinal}</p>
      <h3 className="w-full type-h3 text-ink">{card.title}</h3>
      {/*
        +1 px of inline slack: Chrome measures "تحديد المتطلبات المحلية…" at 544.6 px against
        Figma's 544 px box, which wrapped a line Figma keeps on one. The extra pixel sits in
        the 32 px padding, so nothing is clipped.
      */}
      <p className="w-[calc(100%+1px)] type-body text-muted">{card.description}</p>
    </article>
  );
}
