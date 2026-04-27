"use client";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ContactSection from "@/components/ContactSection";

import { useRevealOnScroll } from "@/components/useRevealOnScroll";

export default function ContactPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
