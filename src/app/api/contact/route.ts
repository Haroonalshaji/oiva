import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";
import { buildContactEmailHtml, buildContactEmailText } from "@/lib/contact-email";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const topicLabels: Record<string, string> = {
  general: "General enquiry",
  orders: "Orders and shipping",
  press: "Press and collaborations",
  visit: "Studio visit",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 254);
    const topic = sanitize(body.topic, 32);
    const message = sanitize(body.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const topicLabel = topicLabels[topic] ?? topicLabels.general;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? `${siteConfig.name} Contact <onboarding@resend.dev>`;

    if (!resend) {
      console.error("[contact] RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
    }

    const emailContent = { name, email, topicLabel, message };

    const { error } = await resend.emails.send({
      from,
      to: [siteConfig.contactRecipients.to],
      cc: [...siteConfig.contactRecipients.cc],
      replyTo: email,
      subject: `New enquiry · ${topicLabel} — ${name}`,
      text: buildContactEmailText(emailContent),
      html: buildContactEmailHtml(emailContent),
    });

    if (error) {
      console.error("[contact]", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
