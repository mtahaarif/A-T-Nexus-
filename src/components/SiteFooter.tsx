"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SiteFooter() {
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterStatus(null);
    setIsSubscribing(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source: "footer-newsletter" }),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to subscribe right now.");
      }

      setNewsletterStatus({
        type: "success",
        message: result.message || "You are subscribed. Watch your inbox for updates.",
      });
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now. Please try again.";
      setNewsletterStatus({ type: "error", message });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container reveal reveal-up">
        <div className="cta-strip">
          <h2>Let&apos;s Build Your Digital Future</h2>
          <div className="cta-side">
            <p>
              We create smart, scalable solutions that help your business grow.
            </p>
            <Link href="/contact" className="footer-cta-btn">
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
              <img src="/theme/logo-no-text.png" alt="A&T Nexus" width={58} height={58} loading="lazy" decoding="async" />
              <span>A&amp;T Nexus</span>
            </Link>
            <p>
              We simplify digital adoption with smart, scalable solutions that
              help your business thrive in today&apos;s connected,
              technology-driven world.
            </p>

            <div className="socials" aria-label="Social links">
              <a href="https://www.linkedin.com/company/atnexus-io/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 512 512" role="img" aria-hidden="true">
                  <path d="M416 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zM135.68 416H68.69V202.26h67.29zm-33.64-213.84h-.46c-22.4 0-36.88-15.46-36.88-34.75 0-19.74 14.88-34.75 37.77-34.75s36.88 15.46 37.77 34.75c0 19.29-14.88 34.75-37.77 34.75zM416 416h-67V312c0-26.14-9.34-43.94-32.76-43.94-17.84 0-28.45 12-33.12 23.6-1.71 4.14-2.13 9.94-2.13 15.73V416h-67V202.26h67v29.39h.93c9.23-13.98 25.76-34.75 62.86-34.75 45.81 0 80.25 29.94 80.25 94.4z" />
                </svg>
              </a>
              <a href="mailto:info@atnexus.io" aria-label="Email">
                <svg viewBox="0 0 512 512" role="img" aria-hidden="true">
                  <path d="M464 64H48a48 48 0 00-48 48v320a48 48 0 0048 48h416a48 48 0 0048-48V112a48 48 0 00-48-48zm0 64l-192 120-192-120zm0 320H48V176l192 120 192-120z" />
                </svg>
              </a>
            </div>
          </section>

          <section className="footer-col"></section>

          
          <section className="footer-col ">  </section>

          <section className="footer-col ">
            <h3>Subscribe Our Newsletter</h3>
            <p>Subscribe for exclusive deals and updates!</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-pill">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address..."
                  required
                />
                <button type="submit" disabled={isSubscribing}>
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
            {newsletterStatus ? (
              <p
                className={`form-status ${newsletterStatus.type === "error" ? "is-error" : ""}`}
                role="status"
                aria-live="polite"
              >
                {newsletterStatus.message}
              </p>
            ) : null}
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
