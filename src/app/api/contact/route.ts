import { NextResponse } from "next/server";

const CONTACT_EMAIL = "info@atnexus.io";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      service?: string;
      message?: string;
      source?: string;
    };

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const message = String(body?.message ?? "").trim();
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

    const payload = new URLSearchParams({
      name,
      email,
      service: service || "Not specified",
      message,
      _subject: `[A&T Nexus Contact] ${name}`,
      _captcha: "false",
      _template: "table",
      _replyto: email,
      _source: source,
    });

    const origin = request.headers.get("origin") ?? "https://www.atnexus.io";
    const referer = request.headers.get("referer") ?? "https://www.atnexus.io/contact";

    const forwardResponse = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Origin: origin,
        Referer: referer,
      },
      body: payload.toString(),
      cache: "no-store",
    });

    const forwardResult = (await forwardResponse.json().catch(() => null)) as
      | { success?: boolean; message?: string }
      | null;

    if (!forwardResponse.ok || forwardResult?.success === false) {
      return NextResponse.json(
        {
          success: false,
          message:
            forwardResult?.message ||
            "Unable to send your message right now. Please try again.",
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
