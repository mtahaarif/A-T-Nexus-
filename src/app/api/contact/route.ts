import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const MAX_NAME_LENGTH = 120;
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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      service?: string;
      message?: string;
      company?: string;
      source?: string;
    };

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const source = String(body?.source ?? "website-contact").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (company) {
      return NextResponse.json({
        success: true,
        message: "Message sent. Our team will contact you shortly.",
      });
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Name is too long." },
        { status: 400 },
      );
    }

    if (service.length > MAX_SERVICE_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Service is too long." },
        { status: 400 },
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Message is too long." },
        { status: 400 },
      );
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
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service || "Not specified");
    const safeMessage = escapeHtml(message);
    const safeSource = escapeHtml(source);
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const subject = `[A&T Nexus Contact] ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service || "Not specified"}`,
      `Message: ${message}`,
      `Source: ${source}`,
      `IP: ${ipAddress}`,
      `User Agent: ${userAgent}`,
    ].join("\n");

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Service:</strong> ${safeService}</p>
      <p><strong>Message:</strong><br />${safeMessage.replace(/\n/g, "<br />")}</p>
      <p><strong>Source:</strong> ${safeSource}</p>
      <p><strong>IP:</strong> ${escapeHtml(ipAddress)}</p>
      <p><strong>User Agent:</strong> ${escapeHtml(userAgent)}</p>
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

    return NextResponse.json({
      success: true,
      message: "Message sent. Our team will contact you shortly.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to send your message right now. Please try again." },
      { status: 500 },
    );
  }
}
