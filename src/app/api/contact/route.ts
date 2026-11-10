import { NextResponse } from "next/server";
import { Resend } from "resend";

import { CONSENT_VERSION, consentText, isValidPhone } from "@/components/contact-consent";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const MAX_NAME_LENGTH = 120;
const MAX_COMPANY_LENGTH = 160;
const MAX_PHONE_LENGTH = 32;
const MAX_SERVICE_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2000;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

function badRequest(message: string) {
  return NextResponse.json({ success: false, message }, { status: 400 });
}

const SUCCESS_MESSAGE = "Message sent. Our team will contact you shortly.";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      company?: string;
      phone?: string;
      service?: string;
      message?: string;
      acceptedTerms?: boolean;
      smsAccountConsent?: boolean;
      smsCareConsent?: boolean;
      website?: string;
      source?: string;
    };

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const acceptedTerms = body?.acceptedTerms === true;
    const smsAccountConsent = body?.smsAccountConsent === true;
    const smsCareConsent = body?.smsCareConsent === true;
    const honeypot = String(body?.website ?? "").trim();
    const source = String(body?.source ?? "website-contact").trim();

    // Bots fill the hidden "website" field; pretend success and drop the submission.
    if (honeypot) {
      return NextResponse.json({ success: true, message: SUCCESS_MESSAGE });
    }

    if (!name || !email || !message) {
      return badRequest("Name, email, and project details are required.");
    }

    if (!isValidEmail(email)) {
      return badRequest("Please provide a valid email address.");
    }

    if (!acceptedTerms) {
      return badRequest("Please agree to the Terms and Conditions and Privacy Policy.");
    }

    if (phone && (phone.length > MAX_PHONE_LENGTH || !isValidPhone(phone))) {
      return badRequest("Please provide a valid phone number.");
    }

    if ((smsAccountConsent || smsCareConsent) && !phone) {
      return badRequest("A phone number is required to opt in to SMS messages.");
    }

    if (name.length > MAX_NAME_LENGTH) {
      return badRequest("Name is too long.");
    }

    if (company.length > MAX_COMPANY_LENGTH) {
      return badRequest("Company name is too long.");
    }

    if (service.length > MAX_SERVICE_LENGTH) {
      return badRequest("Service is too long.");
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return badRequest("Project details are too long.");
    }

    if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured. Please set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(RESEND_API_KEY);
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const submittedAt = new Date().toISOString();
    const yesNo = (value: boolean) => (value ? "Yes" : "No");

    const fields: Array<[string, string]> = [
      ["Name", name],
      ["Email", email],
      ["Company", company || "-"],
      ["Phone", phone || "-"],
      ["Service", service || "Not specified"],
    ];

    // Consent record: keep this with the lead so opt-ins can be proven later.
    const consentRecord: Array<[string, string]> = [
      ["Submitted at (UTC)", submittedAt],
      ["Consent wording version", CONSENT_VERSION],
      ["Accepted Terms & Privacy Policy", yesNo(acceptedTerms)],
      ["SMS – account notifications", yesNo(smsAccountConsent)],
      ["SMS – customer care", yesNo(smsCareConsent)],
      ["SMS number", smsAccountConsent || smsCareConsent ? phone : "-"],
      ["Source", source],
      ["IP", ipAddress],
      ["User Agent", userAgent],
    ];

    const agreedSmsText = [
      smsAccountConsent ? `Account notifications: "${consentText.smsAccount}"` : null,
      smsCareConsent ? `Customer care: "${consentText.smsCare}"` : null,
    ].filter((line): line is string => line !== null);

    const subject = `[A&T Nexus Contact] ${name}`;
    const text = [
      ...fields.map(([label, value]) => `${label}: ${value}`),
      `Project details: ${message}`,
      "",
      "--- Consent record ---",
      ...consentRecord.map(([label, value]) => `${label}: ${value}`),
      ...(agreedSmsText.length ? ["", "SMS consent text agreed to:", ...agreedSmsText] : []),
    ].join("\n");

    const row = ([label, value]: [string, string]) =>
      `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;

    const html = `
      <h2>New Contact Form Submission</h2>
      ${fields.map(row).join("")}
      <p><strong>Project details:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      <hr />
      <h3>Consent record</h3>
      ${consentRecord.map(row).join("")}
      ${
        agreedSmsText.length
          ? `<p><strong>SMS consent text agreed to:</strong></p><ul>${agreedSmsText
              .map((line) => `<li>${escapeHtml(line)}</li>`)
              .join("")}</ul>`
          : ""
      }
    `;

    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, message: SUCCESS_MESSAGE });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to send your message right now. Please try again." },
      { status: 500 },
    );
  }
}
