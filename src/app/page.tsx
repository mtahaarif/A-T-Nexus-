"use client";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  AffiliationsSection,
  HeroSection,
  HomeSplitSection,
} from "@/components/SiteSections";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

export default function HomePage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HomeSplitSection />
        {/* <AffiliationsSection /> */}
      </main>
      <SiteFooter />
    </>
  );
}