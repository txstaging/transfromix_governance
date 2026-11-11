import type { RoadmapTopic } from "@/types/content";

/** Future-roadmap topic card (frames 4559:8243 … 8255). Not a link: topics are unpublished. */
export function RoadmapCard({ topic }: { topic: RoadmapTopic }) {
  return (
    <article className="flex flex-col items-start gap-2 overflow-hidden rounded-card bg-surface p-6 type-label">
      <h3 className="w-full text-ink">{topic.title}</h3>
      <p className="w-full text-muted">{topic.status}</p>
    </article>
  );
}
