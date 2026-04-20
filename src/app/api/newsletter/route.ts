import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });

    // Try Mailchimp if configured
    const mailchimpKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpList = process.env.MAILCHIMP_LIST_ID;
    if (mailchimpKey && mailchimpList) {
      try {
        const dc = mailchimpKey.split("-").pop();
        const url = `https://${dc}.api.mailchimp.com/3.0/lists/${mailchimpList}/members`;
        const resp = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from("anystring:" + mailchimpKey).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_address: email, status: "subscribed" }),
        });

        const json = await resp.json();
        if (resp.ok) return NextResponse.json({ message: "Subscribed via Mailchimp" });
        // Mailchimp may return 400 if already subscribed — still success
        if (json.title && json.title.toLowerCase().includes("member already")) {
          return NextResponse.json({ message: "Already subscribed" });
        }
      } catch (err: any) {
        console.error("Mailchimp error:", err?.message || err);
      }
    }

    // Fallback: persist to data/newsletter-subscribers.txt
    await fs.mkdir("data", { recursive: true });
    await fs.appendFile("data/newsletter-subscribers.txt", `${email}\n`);

    return NextResponse.json({ message: "Subscribed (queued)" });
  } catch (err: any) {
    console.error("/api/newsletter error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
