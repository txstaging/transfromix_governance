import { SmartLink } from "@/components/ui/SmartLink";
import { cn } from "@/lib/cn";
import type { CapabilityCardContent } from "@/types/content";

type CapabilityCardProps = {
  card: CapabilityCardContent;
  className?: string;
};

/**
 * Figma component "Services / Capability card / AR" (icon hidden on this page).
 * Default: fill #fcfbfa, 1 px border #e5e7eb. Hover: fill #ffffff, border #1c4499.
 * The action link is stretched over the card, so the whole card is clickable;
 * keyboard focus shows the Hover styling plus a focus ring.
 */
export function CapabilityCard({ card, className }: CapabilityCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-h-[340px] flex-col items-start gap-4 rounded-panel border border-line bg-surface-card p-8",
        "hover:border-primary hover:bg-surface",
        "has-[a:focus-visible]:border-primary has-[a:focus-visible]:bg-surface has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-primary has-[a:focus-visible]:outline-solid",
        className,
      )}
    >
      {/*
        "Card top" is a space-between row whose first child (the icon) is hidden on this
        page, so Figma renders the ordinal alone at the row's far end (left in RTL).
      */}
      <p className="self-end type-ordinal text-primary" lang="en">
        {card.ordinal}
      </p>
      <h3 className="w-full type-card-title text-ink">{card.title}</h3>
      <p className="w-full type-body text-muted">{card.description}</p>
      <SmartLink
        href={card.action.href}
        className="w-full type-action text-primary after:absolute after:inset-0 after:rounded-panel focus-visible:outline-none"
      >
        {card.action.label} <span aria-hidden="true">←</span>
      </SmartLink>
    </article>
  );
}
