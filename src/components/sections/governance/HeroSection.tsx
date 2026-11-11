import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { hero } from "@/content/governance";

/** Figma frame 4559:8184 "بداية الثقة". */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-navy-900 [--tx-focus-color:var(--tx-color-surface)]"
    >
      <Image
        src="/images/hero-trust.jpg"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-hero-overlay-compact lg:bg-hero-overlay"
      />

      <div className="relative mx-auto max-w-frame px-6 py-14 md:px-10 md:py-20 lg:min-h-[596px] lg:px-0 lg:pt-[67px] lg:pb-[74px]">
        <div className="flex max-w-[736px] flex-col items-start gap-6 lg:ms-[74px]">
          <p className="w-full type-label text-surface">
            <span lang="en" dir="ltr">
              {hero.eyebrow}
            </span>
          </p>
          <h1
            id="hero-title"
            className="w-full type-h1-mobile text-surface md:type-h1-tablet lg:type-h1"
          >
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="w-full type-h3 text-surface">
            {hero.subtitleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="w-full type-body text-inverse">{hero.description}</p>
          <ButtonLink href={hero.cta.href} className="w-full md:w-auto">
            {hero.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
