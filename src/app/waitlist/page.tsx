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
    <div className="min-h-screen bg-[var(--color-platinum)] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-[var(--color-carbon-black)]">
      {/* Playful background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--color-cool-horizon)] blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[var(--color-amber-flame)] blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--color-sapphire)] blur-[100px] opacity-20 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Back Link */}
        <Link 
          href="/" 
          className="mb-8 font-bold hover:underline decoration-[var(--color-amber-flame)] decoration-4 underline-offset-4 transition-all"
        >
          ← Back to home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-10 w-full">
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-[var(--color-carbon-black)] mb-4 leading-none">
            Join the <br className="hidden sm:block" />
            <span className="text-[var(--color-sapphire)]">Waitlist</span>
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
