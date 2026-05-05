import React from "react";
import Link from "next/link";
import WaitlistForm from "../../component/WaitlistForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | MABKET - It's Free!",
  description: "Check out our pricing. Spoiler alert: It's free for now! Join the waitlist and get early access.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-platinum flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-carbon-black">
      {/* Playful background shapes */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-amber-flame blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-sapphire blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {/* Back Link */}
        <Link 
          href="/" 
          className="mb-12 font-bold hover:underline decoration-amber-flame decoration-4 underline-offset-4 transition-all"
        >
          ← Back to home
        </Link>

        {/* Joke Header */}
        <div className="text-center mb-16 w-full max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-carbon-black mb-10 leading-[0.95]">
            What are you <br className="hidden md:block" /> looking for? <br className="hidden md:block" />
            We told you it&apos;s <span className="bg-cool-horizon text-carbon-black px-6 py-2 rounded-[2rem] inline-block rotate-[-3deg] border-4 sm:border-[8px] border-carbon-black shadow-[8px_8px_0px_rgba(26,26,26,1)] animate-[pulse_1.5s_infinite] ml-2">FREE!</span> 😂
          </h1>
          <p className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-carbon-black max-w-2xl mx-auto leading-tight tracking-tight mt-4">
            You don&apos;t believe us? <br /> Then see for yourself:
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
