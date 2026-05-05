import React from "react";
import Link from "next/link";
import ContactForm from "../../component/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MABKET",
  description: "Have questions? Reach out to the MABKET team for support, inquiries, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-platinum flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans text-carbon-black">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cool-horizon blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-amber-flame blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        {/* Back Link */}
        <Link 
          href="/" 
          className="mb-8 font-bold hover:underline decoration-sapphire decoration-4 underline-offset-4 transition-all self-center"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-8 md:mb-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-carbon-black mb-4 leading-none">
            Get in <span className="text-sapphire">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium opacity-80 max-w-sm mx-auto">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Client-side Form Component */}
        <ContactForm />
      </div>
    </div>
  );
}
