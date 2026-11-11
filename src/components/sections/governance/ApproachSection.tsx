import { Section } from "@/components/layout/Section";
import { AxisCard } from "@/components/ui/AxisCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { approach } from "@/content/governance";

/**
 * Figma frame 4559:8204 "منهج العمل".
 * Two rows of two cards: 24 px between columns, 32 px (section gap) between rows,
 * cards top-aligned with their own heights.
 */
export function ApproachSection() {
  return (
    <Section id="approach" labelledBy="approach-title" tone="neutral">
      <SectionHeader intro={approach.intro} headingId="approach-title" />

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8">
        {approach.axes.map((card) => (
          <AxisCard key={card.ordinal} card={card} />
        ))}
      </div>
    </Section>
  );
}
