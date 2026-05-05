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
  Img,
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
            <Img
              src={`https://zddtrsz4qzisvmkh.public.blob.vercel-storage.com/mailheader.jpeg`}
              width="600"
              height="auto"
              alt="MABKET Welcome"
              style={headerImage}
            />
            {/* <Heading style={h1}>
              YOU&apos;RE ON <br /> THE LIST! 🚀
            </Heading> */}
          </Section>

          <Section style={bodySection}>
            <Text style={text}>
              Helloooooo, {businessName}!
            </Text>
            <Text style={text}>
              Thank you for signing up to be part of MABKET.
            </Text>
            <Text style={text}>
              You are among a selected group of vendors who will be testing our business management app before launch. This means you’re not just trying a new tool, you’re helping shape how vendors manage and grow their businesses in a more structured way.
            </Text>
            <Text style={text}>
              As you begin testing, you may come across a few bugs or things that don’t work perfectly and that’s completely okay. This is exactly why we’re doing this together.
            </Text>
            <Text style={text}>
              Your experience, feedback, and observations will directly help us improve and build a product that truly works for vendors like you.
            </Text>
            <Text style={text}>
              We’re excited to build this with you.
            </Text>
{/*             
            <Section style={buttonContainer}>
              <Link href="https://x.com/MabketNg" style={button}>
                Join the Community
              </Link>
            </Section> */}

            <Text style={footerText}>
              — Team MABKET
            </Text>
          </Section>

          <Section style={footerSection}>
            <Img
              src={`https://zddtrsz4qzisvmkh.public.blob.vercel-storage.com/mailfooter.jpeg`}
              width="600"
              height="auto"
              alt="MABKET Footer"
              style={footerImage}
            />
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
  textAlign: 'center' as const,
  lineHeight: '0',
};

const headerImage = {
  width: '100%',
  maxWidth: '600px',
  display: 'block',
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

const footerSection = {
  textAlign: 'center' as const,
  lineHeight: '0',
};

const footerImage = {
  width: '100%',
  maxWidth: '600px',
  display: 'block',
};
