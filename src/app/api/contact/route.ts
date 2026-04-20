import { NextResponse } from "next/server";
import fs from "fs/promises";

type ContactPayload = {
  name?: string;
  email: string;
  service?: string;
  message: string;
};

async function sendViaSendGrid(payload: ContactPayload) {
  const key = process.env.SENDGRID_API_KEY;
  const from = process.env.EMAIL_FROM || "no-reply@atnexus.io";
  if (!key) throw new Error("SENDGRID_API_KEY not configured");

  const resp = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: "info@atnexus.io" }],
          subject: `Website message: ${payload.name || "Contact"}`,
        },
      ],
      from: { email: from, name: "A&T Nexus Website" },
      reply_to: { email: payload.email },
      content: [
        { type: "text/plain", value: `${payload.message}\n\nFrom: ${payload.name} <${payload.email}>` },
        { type: "text/html", value: `<p>${payload.message.replace(/\n/g, "<br>")}</p><p>From: ${payload.name} &lt;${payload.email}&gt;</p>` },
      ],
    }),
  });

  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`SendGrid error: ${resp.status} ${txt}`);
  }
}

async function sendViaMailgun(payload: ContactPayload) {
  const key = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  if (!key || !domain) throw new Error("Mailgun not configured");

  const url = `https://api.mailgun.net/v3/${domain}/messages`;
  const params = new URLSearchParams();
  params.append("from", `A&T Nexus Website <postmaster@${domain}>`);
  params.append("to", "info@atnexus.io");
  params.append("subject", `Website message: ${payload.name || "Contact"}`);
  params.append("text", `${payload.message}\n\nFrom: ${payload.name} <${payload.email}>`);

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from("api:" + key).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`Mailgun error: ${resp.status} ${txt}`);
  }
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    if (!data || !data.email || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Try SendGrid, then Mailgun, then fallback to file queue
    try {
      if (process.env.SENDGRID_API_KEY) {
        await sendViaSendGrid(data);
        return NextResponse.json({ message: "Message sent via SendGrid" });
      }

      if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
        await sendViaMailgun(data);
        return NextResponse.json({ message: "Message sent via Mailgun" });
      }
    } catch (err: any) {
      // Log and continue to fallback
      console.error("Email provider send error:", err?.message || err);
    }

    // Fallback: persist to data/contacts.log
    await fs.mkdir("data", { recursive: true });
    await fs.appendFile(
      "data/contacts.log",
      JSON.stringify({ ...data, receivedAt: new Date().toISOString() }) + "\n"
    );

    return NextResponse.json({ message: "Message queued (no mail provider configured)" });
  } catch (err: any) {
    console.error("/api/contact error", err);
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}
