"use client";

import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

type CallToActionProps = {
  className?: string;
};

export default function CallToAction({ className }: CallToActionProps) {
  const sectionClassName = [jakarta.variable, "cta-immersive", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="cta-immersive-glow" aria-hidden="true" />

      <div className="container cta-immersive-inner">
        <h2 className="font-outfit cta-immersive-title">Stop Hiring. Start Scaling.</h2>
        <p className="font-jakarta cta-immersive-copy">
          Instead of hiring multiple full-time employees, you get an entire operations team that
          already understands home care systems, billing workflows, recruitment, and client
          acquisition&mdash;all under one roof.
        </p>

        <Link href="/services#contact" className="font-jakarta cta-immersive-button">
          Start With Dedicated Ops
        </Link>
      </div>
    </section>
  );
}