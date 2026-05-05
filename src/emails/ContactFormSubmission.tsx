import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from '@react-email/components';

interface ContactFormSubmissionProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormSubmission = ({
  name = 'Anonymous',
  email = 'no-email-provided@example.com',
  message = 'No message content.',
}: ContactFormSubmissionProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={h1}>
              NEW MESSAGE 📬
            </Heading>
          </Section>

          <Section style={bodySection}>
            <Text style={label}>From:</Text>
            <Text style={value}>{name} ({email})</Text>

            <Hr style={divider} />

            <Text style={label}>Message:</Text>
            <Text style={messageContent}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormSubmission;

// Styles

const main = {
  backgroundColor: '#F5F7FA', // Platinum
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  borderRadius: '24px',
  border: '4px solid #1A1A1A', // Carbon Black
  boxShadow: '8px 8px 0px rgba(26,26,26,1)',
  maxWidth: '600px',
  overflow: 'hidden',
};

const headerSection = {
  backgroundColor: '#86BBD8', // Cool Horizon
  padding: '30px 20px',
  borderBottom: '4px solid #1A1A1A',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#1A1A1A',
  fontSize: '28px',
  fontWeight: '900',
  lineHeight: '1.2',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '-1px',
};

const bodySection = {
  padding: '40px',
};

const label = {
  color: '#1A1A1A',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: '0 0 8px 0',
  opacity: '0.6',
};

const value = {
  color: '#1A1A1A',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 24px 0',
};

const messageContent = {
  color: '#1A1A1A',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  backgroundColor: '#F5F7FA',
  padding: '20px',
  borderRadius: '12px',
  border: '2px solid #1A1A1A',
  whiteSpace: 'pre-wrap' as const,
};

const divider = {
  borderColor: '#1A1A1A',
  borderWidth: '2px',
  opacity: '0.1',
  margin: '24px 0',
};
