"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

import { company } from "@/components/company-info";
import { consentText, isValidPhone } from "@/components/contact-consent";

type ContactSectionProps = {
  /** Use an <h1> for the heading when this section is the main content of the page. */
  asPageHeading?: boolean;
};

export default function ContactSection({ asPageHeading = false }: ContactSectionProps) {
  const [contactStatus, setContactStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "12243956843").replace(
    /\D/g,
    "",
  );
  const Heading = asPageHeading ? "h1" : "h2";

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      acceptedTerms: formData.get("acceptedTerms") === "on",
      smsAccountConsent: formData.get("smsAccountConsent") === "on",
      smsCareConsent: formData.get("smsCareConsent") === "on",
      website: String(formData.get("website") ?? "").trim(),
      source: "contact-page",
    };

    if (payload.phone && !isValidPhone(payload.phone)) {
      setContactStatus({ type: "error", message: "Please enter a valid phone number." });
      return;
    }

    if ((payload.smsAccountConsent || payload.smsCareConsent) && !payload.phone) {
      setContactStatus({
        type: "error",
        message: "Please add your phone number so we can send the SMS messages you opted in to.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to send your message right now.");
      }

      setContactStatus({
        type: "success",
        message: result.message || "Message sent successfully.",
      });
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please try again.";
      setContactStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildWhatsAppMessage = (formData: FormData) => {
    const field = (key: string) => String(formData.get(key) ?? "").trim();

    return [
      "New contact form submission:",
      `Name: ${field("name") || "-"}`,
      `Email: ${field("email") || "-"}`,
      `Company: ${field("company") || "-"}`,
      `Phone: ${field("phone") || "-"}`,
      `Service: ${field("service") || "Not specified"}`,
      `Message: ${field("message") || "-"}`,
    ].join("\n");
  };

  const handleWhatsAppSend = () => {
    if (!formRef.current || !whatsappNumber) return;
    const formData = new FormData(formRef.current);
    const text = buildWhatsAppMessage(formData);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-pad contact-shell">
      <div className="container contact-panel reveal reveal-up">
        <div className="contact-grid contact-grid-top">
          <div className="contact-info">
            <p className="contact-eyebrow">Contact us</p>
            <Heading className="contact-title">Let&apos;s build something amazing together.</Heading>
            <p className="contact-lead">
              Tell us where you want to go and we&apos;ll show you how to get there. Every great
              project starts with a conversation.
            </p>

            <article className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img
                  src="/theme/Frame-48.png"
                  alt=""
                  width={30}
                  height={30}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <div>
                <h4>Email Address</h4>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </article>

            <article className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img
                  src="/theme/Group-1948755046.png"
                  alt=""
                  width={30}
                  height={30}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <div>
                <h4>Location</h4>
                <p>
                  {company.legalName}
                  {company.addressLines.map((line) => (
                    <span key={line}>
                      <br />
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </article>

            <article className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img
                  src="/theme/Frame-48-1.png"
                  alt=""
                  width={30}
                  height={30}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <div>
                <h4>Phone Number</h4>
                <a href={company.phoneHref}>Call: {company.phoneDisplay}</a>
              </div>
            </article>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleContactSubmit}>
            <label className="contact-honeypot" aria-hidden="true">
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="contact-form-row">
              <label>
                <span>
                  Name <span className="contact-required" aria-hidden="true">*</span>
                </span>
                <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
              </label>

              <label>
                <span>
                  Email <span className="contact-required" aria-hidden="true">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <div className="contact-form-row">
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>
            </div>

            <label>
              Service
              <input type="text" name="service" placeholder="What can we help with?" />
            </label>

            <label>
              <span>
                Project details <span className="contact-required" aria-hidden="true">*</span>
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project, goals, and timeline"
                required
              />
            </label>

            <div className="contact-consents">
              <label className="contact-check">
                <input type="checkbox" name="acceptedTerms" required />
                <span>
                  I agree to the <Link href="/terms">Terms and Conditions</Link> and{" "}
                  <Link href="/privacy">Privacy Policy</Link>.{" "}
                  <span className="contact-required" aria-hidden="true">*</span>
                </span>
              </label>

              <label className="contact-check">
                <input type="checkbox" name="smsAccountConsent" />
                <span>
                  {consentText.smsAccount} See our <Link href="/sms-terms">SMS Terms</Link>.
                </span>
              </label>

              <label className="contact-check">
                <input type="checkbox" name="smsCareConsent" />
                <span>
                  {consentText.smsCare} See our <Link href="/sms-terms">SMS Terms</Link>.
                </span>
              </label>

              <p className="contact-consent-note">
                SMS consent is optional and is not a condition of purchase.
              </p>
            </div>

            <div className="contact-actions">
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
              <button
                type="button"
                className="btn btn-secondary-outline submit-btn"
                onClick={handleWhatsAppSend}
              >
                Send via WhatsApp
              </button>
            </div>

            {contactStatus ? (
              <p
                className={`form-status ${contactStatus.type === "error" ? "is-error" : ""}`}
                role="status"
                aria-live="polite"
              >
                {contactStatus.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
