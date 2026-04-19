"use client";

import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ServicesSection } from "@/components/SiteSections";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

export default function ServicesPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
