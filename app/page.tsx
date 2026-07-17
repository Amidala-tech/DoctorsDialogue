import type { Metadata } from "next";

import { BenefitsSection } from "@/sections/home/benefits";
import { FinalCta, SocialStrip } from "@/sections/home/cta";
import { FeaturedSection } from "@/sections/home/featured";
import { Hero } from "@/sections/home/hero";
import { LatestEpisodeSection } from "@/sections/home/latest-episode";
import { MissionSection } from "@/sections/home/mission";
import { PlatformSection } from "@/sections/home/platform";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestEpisodeSection />
      <PlatformSection />
      <MissionSection />
      <FeaturedSection />
      <BenefitsSection />
      <SocialStrip />
      <FinalCta />
    </>
  );
}
