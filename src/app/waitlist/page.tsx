import React from "react";
import Link from "next/link";
import WaitlistForm from "../../component/WaitlistForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist | MABKET",
  description: "Secure your spot for early access to MABKET. Be the first to experience the smartest business management platform for SMEs.",
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-platinum flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-carbon-black">
      {/* Playful background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cool-horizon blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-amber-flame blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sapphire blur-[100px] opacity-20 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Back Link */}
        <Link 
          href="/" 
          className="mb-8 font-bold hover:underline decoration-amber-flame decoration-4 underline-offset-4 transition-all"
        >
          ← Back to home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-10 w-full">
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-carbon-black mb-4 leading-none">
            Join the <br className="hidden sm:block" />
            <span className="text-sapphire">Waitlist</span>
          </h1>
          <p className="text-xl font-medium opacity-80 max-w-sm mx-auto">
            Secure your spot and get early access before we launch.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
