import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Html,
  Text,
  Link,
} from '@react-email/components';

interface WaitlistWelcomeProps {
  firstName?: string;
  unsubscribeUrl?: string;
}

export const WaitlistWelcome = ({
  firstName = 'there',
  unsubscribeUrl = 'https://mabket.app/unsubscribe',
}: WaitlistWelcomeProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={card}>
          <div style={titleContainer}>
            <Text style={titleText}>
              MABKET early access
            </Text>
          </div>
          
          <Text style={text}>
            Hey {firstName},
          </Text>
          
          <Text style={text}>
            Not everyone gets early access — you&apos;re part of a small group we&apos;re onboarding before we launch to the public. 
          </Text>
          
          <div style={highlightBlock}>
            <Text style={highlightText}>
              This means your feedback will directly shape what we build, how we build it, and what mabket becomes.
            </Text>
          </div>

          <Text style={text}>
            Expect a few rough edges. We&apos;re building this in the open alongside vendors like you, not behind closed doors in a boardroom.
          </Text>
          
          <Text style={text}>
            If you have questions, ideas, or find something that doesn&apos;t work, just hit reply and let me know. I&apos;m listening.
          </Text>

          <div style={signatureBlock}>
            <Text style={signatureName}>— Rose Eke</Text>
            <Text style={signatureTitle}>Founder, mabket</Text>
          </div>

          <div style={footerDivider} />

          <Text style={footerText}>
            P.S. I only want to send updates you actually care about. If you&apos;d rather not hear from me again, no worries at all — you can{' '}
            <Link href={unsubscribeUrl} style={footerLink}>
              unsubscribe here
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WaitlistWelcome;

// Styles

const main = {
  backgroundColor: '#F5F7FA', // Brand's platinum
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: '40px 16px',
};

const card = {
  backgroundColor: '#ffffff',
  border: '3px solid #1A1A1A',
  borderRadius: '24px',
  boxShadow: '6px 6px 0px 0px #1A1A1A',
  padding: '36px 32px',
  maxWidth: '520px',
  margin: '0 auto',
};

const titleContainer = {
  backgroundColor: '#FFB800', // Brand's Amber Flame yellow
  border: '2px solid #1A1A1A',
  borderRadius: '12px',
  padding: '12px 18px',
  margin: '0 0 24px 0',
  boxShadow: '3px 3px 0px 0px #1A1A1A',
};

const titleText = {
  color: '#1A1A1A',
  fontSize: '18px',
  fontWeight: '800',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: 0,
  textAlign: 'center' as const,
};

const text = {
  color: '#1A1A1A',
  fontSize: '15px',
  lineHeight: '23px',
  margin: '0 0 16px 0',
};

const highlightBlock = {
  backgroundColor: '#FFF9E6', // Soft yellow-cream tint
  border: '2px solid #1A1A1A',
  borderLeft: '6px solid #FFB800', // Thick solid yellow accent
  borderRadius: '12px',
  padding: '16px',
  margin: '24px 0',
  boxShadow: '3px 3px 0px 0px #1A1A1A',
};

const highlightText = {
  color: '#1A1A1A',
  fontSize: '15px',
  lineHeight: '23px',
  fontStyle: 'italic' as const,
  margin: 0,
};

const signatureBlock = {
  marginTop: '28px',
};

const signatureName = {
  color: '#1A1A1A',
  fontSize: '15px',
  fontWeight: '700',
  lineHeight: '20px',
  margin: '0',
};

const signatureTitle = {
  color: '#0052CC', // Brand sapphire blue
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '18px',
  margin: '0',
};

const footerDivider = {
  borderTop: '2px dashed #1A1A1A',
  margin: '32px 0 20px 0',
};

const footerText = {
  color: '#777777',
  fontSize: '12px',
  lineHeight: '18px',
  margin: 0,
};

const footerLink = {
  color: '#0052CC', // Brand sapphire for links
  fontWeight: '600',
  textDecoration: 'underline',
};