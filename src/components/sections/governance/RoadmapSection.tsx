import { Section } from "@/components/layout/Section";
import { RoadmapCard } from "@/components/ui/RoadmapCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { roadmap } from "@/content/governance";

/** Figma frame 4559:8238 "خريطة المستقبل". */
export function RoadmapSection() {
  return (
    <Section id="roadmap" labelledBy="roadmap-title" tone="neutral">
      <SectionHeader intro={roadmap.intro} headingId="roadmap-title" />

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
        {roadmap.topics.map((topic) => (
          <RoadmapCard key={topic.title} topic={topic} />
        ))}
      </div>

      <RoadmapCard topic={roadmap.featured} />
    </Section>
  );
}
