import { ApproachSection } from "@/components/sections/governance/ApproachSection";
import { CommitmentsSection } from "@/components/sections/governance/CommitmentsSection";
import { ContactSection } from "@/components/sections/governance/ContactSection";
import { HeroSection } from "@/components/sections/governance/HeroSection";
import { LocalContextSection } from "@/components/sections/governance/LocalContextSection";
import { RoadmapSection } from "@/components/sections/governance/RoadmapSection";

export default function GovernancePage() {
  return (
    <>
      <HeroSection />
      <CommitmentsSection />
      <ApproachSection />
      <LocalContextSection />
      <RoadmapSection />
      <ContactSection />
    </>
  );
}
