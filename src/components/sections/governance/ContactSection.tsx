import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact } from "@/content/governance";

/** Figma frame 4559:8258 "تواصل الثقة". */
export function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-title" tone="navy">
      <SectionHeader intro={contact.intro} headingId="contact-title" tone="dark" />

      <div className="flex items-start justify-start gap-4">
        <ButtonLink href={contact.cta.href} className="w-full md:w-auto">
          {contact.cta.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
