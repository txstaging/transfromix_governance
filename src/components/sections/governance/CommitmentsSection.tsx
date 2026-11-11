import { Section } from "@/components/layout/Section";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { commitments } from "@/content/governance";
import { cn } from "@/lib/cn";

/** Figma frame 4559:8193 "وجهات الثقة". */
export function CommitmentsSection() {
  const lastIndex = commitments.cards.length - 1;
  return (
    <Section id="commitments" labelledBy="commitments-title" tone="white">
      <SectionHeader intro={commitments.intro} headingId="commitments-title" />

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {commitments.cards.map((card, index) => (
          <CapabilityCard
            key={card.ordinal}
            card={card}
            className={cn(index === lastIndex && "md:col-span-2 lg:col-span-1")}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 overflow-hidden rounded-card bg-surface-neutral p-8">
        <h3 className="w-full type-h3 text-primary">{commitments.panel.title}</h3>
        <p className="w-full type-body text-muted">{commitments.panel.body}</p>
      </div>
    </Section>
  );
}
