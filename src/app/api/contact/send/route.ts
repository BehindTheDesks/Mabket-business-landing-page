import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormSubmission from '../../../../emails/ContactFormSubmission';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL || fromEmail;

    const data = await resend.emails.send({
      from: `MABKET Contact <${fromEmail}>`,
      to: destinationEmail,
      subject: `New Contact Form Message from ${name}`,
      react: ContactFormSubmission({ name, email, message }),
      replyTo: email, // Allows you to hit "Reply" in your email client and go straight to the user
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
