import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MABKET",
  description: "Learn how MABKET handles and protects your business data and personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[var(--color-platinum)] py-12 px-4 sm:px-6 relative overflow-hidden font-sans text-[var(--color-carbon-black)]">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--color-cool-horizon)] blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--color-amber-flame)] blur-3xl opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Back Link */}
        <Link 
          href="/" 
          className="mb-12 font-bold hover:underline decoration-[var(--color-sapphire)] decoration-4 underline-offset-4 transition-all self-start"
        >
          ← Back to home
        </Link>

        {/* Header */}
        <div className="text-left w-full mb-12 border-b-8 border-[var(--color-carbon-black)] pb-8">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-[var(--color-carbon-black)] mb-4 leading-none">
            Privacy <br className="hidden sm:block" /> <span className="text-[var(--color-amber-flame)]">Policy</span>
          </h1>
          <p className="text-xl font-bold opacity-80 mt-6">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="w-full bg-white p-8 sm:p-12 rounded-[2rem] border-4 border-[var(--color-carbon-black)] shadow-[8px_8px_0px_rgba(26,26,26,1)] sm:shadow-[16px_16px_0px_rgba(26,26,26,1)] space-y-8 text-lg font-medium leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="font-display text-3xl font-black uppercase text-[var(--color-sapphire)]">1. Introduction</h2>
            <p>
              Welcome to MABKET (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website and use our services, specifically our waitlist and contact forms.
            </p>
            <p>
              By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl font-black uppercase text-[var(--color-amber-flame)]">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, specifically through our website forms:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-bold">
              <li><strong>Waitlist Data:</strong> When you join our waitlist, we collect your Email Address, Business Name, and Industry.</li>
              <li><strong>Contact Data:</strong> When you use our contact form, we collect your Name, Email Address, and the contents of your Message.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl font-black uppercase text-[var(--color-cool-horizon)] text-[var(--color-carbon-black)]">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To send administrative information:</strong> We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
              <li><strong>To manage your waitlist status:</strong> We use your business details to curate our early access rollouts and notify you when the platform is ready for your specific industry.</li>
              <li><strong>To respond to user inquiries:</strong> We use the information provided in the contact form to respond to your questions and offer support.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl font-black uppercase text-[var(--color-sapphire)]">4. How We Share Your Information</h2>
            <p>
              <strong>We do not sell, rent, or trade your personal information to third parties.</strong> We only share information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Data Storage:</strong> We securely store your waitlist submissions using Supabase, a secure cloud database infrastructure provider.</li>
              <li><strong>Email Communications:</strong> We use Resend to deliver transactional emails and waitlist notifications reliably to your inbox.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl font-black uppercase text-[var(--color-amber-flame)]">5. Data Retention & Security</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl font-black uppercase text-[var(--color-cool-horizon)] text-[var(--color-carbon-black)]">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request via our Contact page.
            </p>
            <p>
              If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by clicking the &quot;unsubscribe&quot; link at the bottom of our emails.
            </p>
          </section>

          <section className="space-y-4 border-t-4 border-[var(--color-carbon-black)] pt-8 mt-8">
            <h2 className="font-display text-3xl font-black uppercase text-[var(--color-carbon-black)]">7. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us directly using our <Link href="/contact" className="font-bold underline decoration-4 decoration-[var(--color-sapphire)] hover:text-[var(--color-sapphire)] transition-colors">Contact Form</Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
