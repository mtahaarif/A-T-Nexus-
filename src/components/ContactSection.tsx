"use client";

import { FormEvent, useRef, useState } from "react";

export default function ContactSection() {
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

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const source = "contact-page";

    try {
      const payload = {
        name,
        email,
        service,
        message,
        company,
        source,
      };

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
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    return [
      "New contact form submission:",
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Service: ${service || "Not specified"}`,
      `Message: ${message || "-"}`,
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
      <div className="container section-head reveal reveal-up">
        <h2>Get In Touch</h2>
      </div>

      <div className="container contact-panel reveal reveal-up">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Info</h3>

            <article className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img
                  src="theme\Frame-48.png"
                  alt=""
                  width={30}
                  height={30}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <div>
                <h4>Email Address</h4>
                <a href="mailto:info@atnexus.io">info@atnexus.io</a>
              </div>
            </article>

            <article className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img
                  src="theme/Group-1948755046.png"
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
                  A&amp;T NEXUS SOLUTIONS LLC
                  <br />
                  2501 Chatham Rd # 6227
                  <br />
                  Springfield, IL 62704
                </p>
              </div>
            </article>

            <article className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img
                  src="theme/Frame-48-1.png"
                  alt=""
                  width={30}
                  height={30}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <div>
                <h4>Phone Numbers</h4>
                <a href="tel:+12243956843">Call: +1 (224) 395-6843</a>
              </div>
            </article>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleContactSubmit}>
            <label className="contact-honeypot" aria-hidden="true">
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              Name
              <input type="text" name="name" placeholder="Name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="Email" required />
            </label>

            <label>
              Service
              <input type="text" name="service" placeholder="Service" />
            </label>

            <label>
              Message
              <textarea name="message" rows={4} placeholder="Message" required />
            </label>

            <div className="contact-actions">
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
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
