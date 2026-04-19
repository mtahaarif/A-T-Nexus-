"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { primaryNavLinks, serviceMenuLinks } from "@/components/site-data";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const orderedLinks = useMemo(() => primaryNavLinks, []);
  const serviceLinks = useMemo(() => serviceMenuLinks, []);
  const serviceActive =
    pathname.startsWith("/services") || pathname.startsWith("/dedicated-remote-ops");

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <Link href="/" className="brand" aria-label="A&T Nexus home">
            <img src="/theme/logo-no-text.png" alt="A&T Nexus" />
            <span>A&amp;T Nexus</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main menu">
            {orderedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActivePath(pathname, item.href) ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}

            <div className={`nav-dropdown ${serviceActive ? "is-active" : ""}`}>
              <Link href="/services" className="nav-dropdown-trigger">
                Services
              </Link>
              <div className="nav-dropdown-menu" role="menu" aria-label="Services menu">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <Link href="/services#contact" className="btn btn-primary desktop-cta">
            Contact Us
          </Link>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <aside
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>

          <Link href="/" className="brand mobile-brand">
            <img src="/theme/logo-no-text.png" alt="A&T Nexus" />
            <span>A&amp;T Nexus</span>
          </Link>

          <nav className="mobile-nav" aria-label="Mobile menu">
            {orderedLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}

            <p className="mobile-nav-group-title">Services</p>
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-sub-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/services#contact"
            className="btn btn-primary mobile-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </aside>
      </div>
    </>
  );
}
