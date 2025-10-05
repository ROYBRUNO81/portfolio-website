import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const firstname = (body.firstname || "").toString().trim();
    const lastname = (body.lastname || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const service = (body.service || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email address." }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json({ success: false, message: "Server misconfigured: CONTACT_TO_EMAIL not set." }, { status: 500 });
    }

    const subject = `New contact form submission from ${firstname} ${lastname}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji; line-height: 1.6;">
        <h2 style="margin: 0 0 12px;">New Contact Message</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${phone || "-"}</p>
        <p style="margin: 0 0 8px;"><strong>Service:</strong> ${service || "-"}</p>
        <p style="margin: 12px 0 0;"><strong>Message:</strong></p>
        <div style="white-space: pre-wrap;">${message}</div>
      </div>
    `;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("/api/contact error:", error);
    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
  }
}


