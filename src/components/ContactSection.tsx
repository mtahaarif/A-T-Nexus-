"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [contactStatus, setContactStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      source: "services-contact-form",
    };

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
                <p>Chicago, Illinois</p>
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
                <a href="tel:+17089420102">Call: +1 (708) 942-0102</a> <br />
                <a href="whatsapp:+14693673215">Whatsapp: +1 (469) 367-3215</a>
              </div>
            </article>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
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

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

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
