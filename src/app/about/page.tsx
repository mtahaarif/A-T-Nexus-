"use client";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  AboutSection,
  LeadershipSection,
  MissionSection,
  ValuesSection,
  WhySection,
} from "@/components/SiteSections";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

export default function AboutPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <AboutSection />
        <MissionSection />
        <WhySection />
        <ValuesSection />
        {/* <LeadershipSection /> */}
      </main>
      <SiteFooter />
    </>
  );
}
