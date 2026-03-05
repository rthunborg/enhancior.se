import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  namn: string;
  foretag: string;
  epost: string;
  telefon?: string;
  tjanst?: string;
  meddelande: string;
  honeypot?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ ok: true }); // Silent success for bots
    }

    // Validate required fields
    if (!body.namn?.trim() || !body.foretag?.trim() || !body.epost?.trim() || !body.meddelande?.trim()) {
      return NextResponse.json(
        { error: "Alla obligatoriska fält måste fyllas i." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(body.epost)) {
      return NextResponse.json(
        { error: "Ogiltig e-postadress." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlBody = `
      <h2>Ny kontaktförfrågan via enhancior.se</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Namn</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.namn)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Företag</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.foretag)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">E-post</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(body.epost)}">${escapeHtml(body.epost)}</a></td></tr>
        ${body.telefon ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.telefon)}</td></tr>` : ""}
        ${body.tjanst ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Tjänst</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.tjanst)}</td></tr>` : ""}
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Meddelande</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(body.meddelande)}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@enhancior.se",
      to: "rasmus.thunborg@enhancior.se",
      replyTo: body.epost,
      subject: `Kontaktförfrågan: ${body.namn} (${body.foretag})`,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ett internt fel uppstod." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
