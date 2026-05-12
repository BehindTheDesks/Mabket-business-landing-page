import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Section,
  Hr,
  Img,
} from '@react-email/components';

interface WaitlistWelcomeProps {
  firstName?: string;
}

export const WaitlistWelcome = ({
  firstName = 'there',
}: WaitlistWelcomeProps) => {
  return (
    <Html>
      <Head />
      <Preview>You&apos;re in. Let&apos;s get to work.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>mabket.</Text>
          </Section>
          
          <Text style={text}>
            Hey {firstName},
          </Text>
          <Text style={text}>
            Welcome to mabket.
          </Text>
          <Text style={text}>
            Not everyone gets here first — you do. You&apos;re part of the group testing mabket before the rest of the world sees it, which means your feedback actually shapes what this becomes.
          </Text>
          <Text style={text}>
            Expect a few rough edges. That&apos;s the point. We&apos;re building this in the open, with vendors like you, not in a boardroom somewhere.
          </Text>
          <Text style={text}>
            Tell us what&apos;s broken. Tell us what&apos;s missing. We&apos;re listening.
          </Text>
          
          <Section style={signOff}>
            <Text style={text}>
              — Rose, mabket
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              You are receiving this email because you signed up for the mabket waitlist.
            </Text>
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
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '40px auto',
  padding: '32px 32px 24px',
  maxWidth: '560px',
  border: '1px solid #eaeaea',
  borderRadius: '8px',
};

const header = {
  marginBottom: '32px',
};

const logo = {
  fontSize: '24px',
  fontWeight: 'bold',
  letterSpacing: '-1px',
  color: '#111111',
  margin: '0',
};

const text = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px 0',
};

const signOff = {
  marginTop: '32px',
};

const hr = {
  borderColor: '#eaeaea',
  margin: '32px 0 24px 0',
  borderWidth: '1px',
};

const footer = {
  marginBottom: '0',
};

const footerText = {
  color: '#888888',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '0',
};

const footerImage = {
  width: '100%',
  maxWidth: '600px',
  display: 'block',
  marginTop: '24px',
  borderRadius: '8px',
};
