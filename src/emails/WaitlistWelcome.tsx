import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
} from '@react-email/components';

interface WaitlistWelcomeProps {
  businessName?: string;
}

export const WaitlistWelcome = ({
  businessName = 'Founder',
}: WaitlistWelcomeProps) => {
  return (
    <Html>
      <Head />
      <Preview>You&apos;re on the list! 🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={h1}>
              YOU&apos;RE ON <br /> THE LIST! 🚀
            </Heading>
          </Section>

          <Section style={bodySection}>
            <Text style={text}>
              Hey there, {businessName}!
            </Text>
            <Text style={text}>
              Thanks for joining the MABKET waitlist. We&apos;re building the smartest business management platform for modern SMEs, and we&apos;re thrilled to have you along for the ride.
            </Text>
            <Text style={text}>
              We&apos;ll be opening up early access soon, so keep an eye on your inbox. We promise not to spam you — only the good stuff!
            </Text>
            
            <Section style={buttonContainer}>
              <Link href="https://twitter.com" style={button}>
                Join the Community
              </Link>
            </Section>

            <Text style={footerText}>
              Stay awesome, <br />
              The MABKET Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WaitlistWelcome;

// Styles

const main = {
  backgroundColor: '#F5F7FA', // Platinum
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '40px auto',
  padding: '0',
  borderRadius: '24px',
  border: '4px solid #1A1A1A', // Carbon Black
  boxShadow: '8px 8px 0px rgba(26,26,26,1)',
  maxWidth: '600px',
  overflow: 'hidden',
};

const headerSection = {
  backgroundColor: '#FF6B35', // Amber Flame
  padding: '40px 20px',
  borderBottom: '4px solid #1A1A1A',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#1A1A1A',
  fontSize: '36px',
  fontWeight: '900',
  lineHeight: '1.2',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '-1px',
};

const bodySection = {
  padding: '40px',
};

const text = {
  color: '#1A1A1A',
  fontSize: '18px',
  lineHeight: '1.5',
  fontWeight: '500',
  margin: '0 0 20px 0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '32px',
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#004E89', // Sapphire
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  padding: '16px 32px',
  borderRadius: '16px',
  border: '4px solid #1A1A1A',
  boxShadow: '4px 4px 0px rgba(26,26,26,1)',
  display: 'inline-block',
  textTransform: 'uppercase' as const,
};

const footerText = {
  color: '#1A1A1A',
  fontSize: '16px',
  lineHeight: '1.5',
  fontWeight: 'bold',
  margin: '0',
  opacity: '0.8',
};
