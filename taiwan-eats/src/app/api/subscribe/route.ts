import { NextResponse } from "next/server";

// To activate: set RESEND_API_KEY and RESEND_AUDIENCE_ID in your .env.local
// Get them at https://resend.com — free tier covers 3,000 emails/month
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // If env vars aren't set, log locally and return success (useful during dev)
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    console.log(`[newsletter] Would subscribe: ${email} (set RESEND_API_KEY + RESEND_AUDIENCE_ID to activate)`);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error("[newsletter] Resend error:", data);
    return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
