import Image from "next/image";
import { Fragment } from "react";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { localContext } from "@/content/governance";

/** Figma frame 4559:8226 "المسؤولية في السياق المحلي". */
export function LocalContextSection() {
  const { image } = localContext;
  return (
    <Section id="context" labelledBy="context-title" tone="white">
      <SectionHeader intro={localContext.intro} headingId="context-title" />

      <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex flex-col gap-6 lg:min-w-0 lg:flex-1">
          <h3 className="w-full type-h3 text-ink">{localContext.heading}</h3>
          {localContext.groups.map((group) => (
            <Fragment key={group.label}>
              <h4 className="w-full type-label text-primary">{group.label}</h4>
              <p className="w-full type-body text-muted">{group.body}</p>
            </Fragment>
          ))}
        </div>

        <div className="relative aspect-[596/420] w-full overflow-hidden rounded-media lg:min-w-0 lg:flex-1">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1440px) 596px, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
