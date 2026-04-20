"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [contactStatus, setContactStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      setSending(true);
      setContactStatus("Sending message...");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (res.ok) {
        setContactStatus(json.message || "Message sent. We'll be in touch.");
        form.reset();
      } else {
        setContactStatus(json.error || "Unable to send message.");
      }
    } catch (err) {
      console.error("Contact submit error", err);
      setContactStatus("Error sending message. Please try again later.");
    } finally {
      setSending(false);
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
                  src="https://atnexus.io/wp-content/uploads/2025/10/Frame-48.png"
                  alt=""
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
                  src="https://atnexus.io/wp-content/uploads/2025/10/Group-1948755046.png"
                  alt=""
                />
              </span>
              <div>
                <h4>Location</h4>
                <p>59-G, Street No. 7, Sector I-10/3, Islamabad</p>
              </div>
            </article>

            <article className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img
                  src="https://atnexus.io/wp-content/uploads/2025/10/Frame-48-1.png"
                  alt=""
                />
              </span>
              <div>
                <h4>Phone Numbers</h4>
                <a href="tel:+923361541141">+92 336 1541141</a>
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

            <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>

            {contactStatus ? <p className="form-status">{contactStatus}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
