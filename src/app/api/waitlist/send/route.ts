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

    // Must be a verified domain in Resend, ideally a person (e.g., rose@mabket.com)
    const fromEmail = process.env.RESEND_FROM_EMAIL; 

    if (!fromEmail) {
      console.error('Missing RESEND_FROM_EMAIL environment variable');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const encodedEmail = encodeURIComponent(email);
    // Page shown to the user when they click Unsubscribe in the email
    const unsubscribeUrl = `https://mabket.app/unsubscribe?email=${encodedEmail}`;

    const data = await resend.emails.send({
      from: `Rose at mabket <${fromEmail}>`,
      to: email,
      subject: `hey, it's Rose from mabket`,
      replyTo: fromEmail,
      react: WaitlistWelcome({ firstName: businessName, unsubscribeUrl }),
      text: `Hey ${businessName},\n\nThanks for joining the mabket waitlist.\n\nNot everyone gets early access — you're part of a small group we're onboarding before we launch to the public. This means your feedback will directly shape what we build.\n\nExpect a few rough edges. We're building this in the open alongside vendors like you, not behind closed doors.\n\nIf you have any questions or find anything broken, just hit reply and let me know. I'm listening.\n\nBest,\nRose\n\nP.S. I only want to send updates you actually care about. If you'd rather not hear from me again, no worries at all — you can unsubscribe here: ${unsubscribeUrl}`,
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