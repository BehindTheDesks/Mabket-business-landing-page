import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WaitlistWelcome from '../../../../emails/WaitlistWelcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, businessName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const data = await resend.emails.send({
      from: `MABKET Waitlist <${fromEmail}>`,
      to: email,
      subject: "You're on the list! 🎉",
      react: WaitlistWelcome({ businessName }),
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending waitlist email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
