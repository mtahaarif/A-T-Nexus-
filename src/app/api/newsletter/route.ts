import { NextResponse } from "next/server";

const CONTACT_EMAIL = "info@atnexus.io";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      source?: string;
    };

    const email = String(body?.email ?? "").trim();
    const source = String(body?.source ?? "website-newsletter").trim();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
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
      name: "Newsletter Subscription",
      email,
      service: "Newsletter",
      message: `New newsletter subscription request from ${email}`,
      _subject: `[A&T Nexus Newsletter] New Subscriber`,
      _captcha: "false",
      _template: "table",
      _replyto: email,
      _source: source,
    });

    const forwardResponse = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: payload.toString(),
      cache: "no-store",
    });

    if (!forwardResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to subscribe right now. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully. Thank you for joining our newsletter.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to subscribe right now. Please try again." },
      { status: 500 },
    );
  }
}
