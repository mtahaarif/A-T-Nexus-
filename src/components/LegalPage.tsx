"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { company, legalLinks } from "@/components/company-info";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
};

export default function LegalPage({ eyebrow = "Legal", title, intro, children }: LegalPageProps) {
  useRevealOnScroll();
  const pathname = usePathname();

  return (
    <>
      <SiteHeader />
      <main className="legal-shell section-pad">
        <div className="container legal-layout">
          <header className="legal-hero">
            <p className="legal-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="legal-updated">Last updated: {company.legalLastUpdated}</p>
            <div className="legal-intro">{intro}</div>
          </header>

          <nav className="legal-tabs" aria-label="Legal pages">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "is-active" : undefined}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <article className="legal-body">{children}</article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalContactBlock({ purpose }: { purpose: string }) {
  return (
    <address className="legal-contact">
      <strong>{company.legalName}</strong>
      {company.addressLines.map((line) => (
        <span key={line}>{line}</span>
      ))}
      <span>
        {purpose}: <a href={`mailto:${company.email}`}>{company.email}</a>
      </span>
      <span>
        Phone: <a href={company.phoneHref}>{company.phoneDisplay}</a>
      </span>
      <span>
        Contact form: <Link href="/contact">{company.website}/contact</Link>
      </span>
    </address>
  );
}
