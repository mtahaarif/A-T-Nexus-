"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { helpLinks, navLinks } from "@/components/site-data";

export default function SiteFooter() {
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterStatus("You are subscribed. Watch your inbox for updates.");
    event.currentTarget.reset();
  };

  return (
    <footer className="site-footer">
      <div className="container footer-frame reveal reveal-up">
        <div className="cta-strip">
          <h2>Let&apos;s Build Your Digital Future</h2>
          <div className="cta-side">
            <p>
              We create smart, scalable solutions that help your business grow.
            </p>
            <Link href="/services#contact" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <span className="footer-watermark" aria-hidden="true">
            A&amp;T Nexus
          </span>

          <section className="footer-col brand-col">
            <Link href="/" className="footer-brand" aria-label="A&T Nexus home">
              <img src="/theme/logo-no-text.png" alt="A&T Nexus" />
              <span>A&amp;T Nexus</span>
            </Link>
            <p>
              We simplify digital adoption with smart, scalable solutions that
              help your business thrive in today&apos;s connected,
              technology-driven world.
            </p>

            <div className="socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 512 512" role="img" aria-hidden="true">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 512 512" role="img" aria-hidden="true">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a href="#" aria-label="Youtube">
                <svg viewBox="0 0 576 512" role="img" aria-hidden="true">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </section>

          <section className="footer-col">
            <h3>Quick Links</h3>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/services#contact">Contact Us</Link>
          </section>

          <section className="footer-col">
            <h3>Help</h3>
            {helpLinks.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </section>

          <section className="footer-col">
            <h3>Subscribe Our Newsletter</h3>
            <p>Subscribe for exclusive deals and updates!</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-pill">
                <input type="email" placeholder="Email Address..." required />
                <button type="submit">Subscribe</button>
              </div>
            </form>
            {newsletterStatus ? <p className="form-status">{newsletterStatus}</p> : null}
          </section>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} All Rights Reserved!</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms And Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
