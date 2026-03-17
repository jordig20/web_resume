import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactIntent = "work" | "collaboration" | "hello";

const intentLabels: Record<ContactIntent, string> = {
  work: "Work opportunity",
  collaboration: "Collaboration",
  hello: "Say hi"
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const {
      intent,
      name,
      email,
      message,
      turnstileToken,
      website,
      submittedAt
    }: {
      intent?: ContactIntent;
      name?: string;
      email?: string;
      message?: string;
      turnstileToken?: string;
      website?: string;
      submittedAt?: number;
    } = await request.json();

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!intent || !(intent in intentLabels)) {
      return NextResponse.json({ error: "Invalid intent" }, { status: 400 });
    }

    const cleanName = name?.trim() ?? "";
    const cleanEmail = email?.trim() ?? "";
    const cleanMessage = message?.trim() ?? "";

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    if (!isEmail(cleanEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!cleanMessage || cleanMessage.length < 12) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    if (typeof submittedAt !== "number" || Date.now() - submittedAt < 2500) {
      return NextResponse.json({ error: "Submission too fast" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const gmailUser = process.env.GMAIL_SMTP_USER;
    const gmailAppPassword = process.env.GMAIL_SMTP_APP_PASSWORD;

    if (!to || !turnstileSecret || !gmailUser || !gmailAppPassword) {
      return NextResponse.json({ error: "Missing contact configuration" }, { status: 503 });
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: "Missing verification token" }, { status: 400 });
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const remoteIp = forwardedFor?.split(",")[0]?.trim();

    const verificationResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken,
        ...(remoteIp ? { remoteip: remoteIp } : {})
      })
    });

    if (!verificationResponse.ok) {
      return NextResponse.json({ error: "Verification request failed" }, { status: 502 });
    }

    const verificationResult = (await verificationResponse.json()) as {
      success?: boolean;
      action?: string;
    };

    if (!verificationResult.success || (verificationResult.action && verificationResult.action !== "contact")) {
      return NextResponse.json({ error: "Verification failed" }, { status: 400 });
    }

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br />");

    const senderName = from?.trim() || "Jordi Granada Rubio";
    const senderAddress = gmailUser.trim();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });

    await transporter.sendMail({
      from: `${senderName} <${senderAddress}>`,
      to,
      replyTo: cleanEmail,
      subject: `[Website] ${intentLabels[intent]} from ${cleanName}`,
      text: [
        `Intent: ${intentLabels[intent]}`,
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        cleanMessage
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#13202a">
          <p><strong>Intent:</strong> ${intentLabels[intent]}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
