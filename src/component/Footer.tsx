"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import WaitlistForm from "./WaitlistForm";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showCommunityBadge, setShowCommunityBadge] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="bg-[var(--color-carbon-black)] text-[var(--color-platinum)] overflow-hidden rounded-t-[40px] md:rounded-t-[60px] border-t-8 border-[var(--color-amber-flame)] mt-20 relative">
      {/* Playful background element */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-cool-horizon)] rounded-full blur-[80px] md:blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-12 md:py-20 relative z-10">
        {/* Newsletter Section */}
        <div className="flex flex-col gap-10 border-b-2 border-[var(--color-platinum)]/20 pb-12 md:pb-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 ref={titleRef} className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[var(--color-amber-flame)] leading-none">
              Secure Your Spot
            </h2>
            <p className="mt-4 md:mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl font-medium opacity-90 text-[var(--color-platinum)] mx-auto lg:mx-0">
              Early access is closing soon. Don&apos;t let your competitors get ahead. Drop your details to get on the waitlist now!
            </p>
          </div>

          <div className="w-full max-w-lg shrink-0 mx-auto lg:mx-0">
            <WaitlistForm />
          </div>
        </div>

        {/* Links Grid */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 md:pb-20">
          {/* Brand Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/image/logo.png" 
              alt="Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:rotate-6" 
            />
            <p className="mt-4 md:mt-6 max-w-xs text-base md:text-lg font-medium opacity-80">
              Smart business management platform designed for modern SMEs.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-display text-xl md:text-2xl font-bold text-[var(--color-sapphire)] mb-4 md:mb-6">Product</h4>
            <ul className="space-y-3 md:space-y-4 font-medium text-base md:text-lg opacity-80">
              <li><a href="#" className="hover:text-[var(--color-amber-flame)] hover:underline decoration-4 transition-all">Features</a></li>
              <li><Link href="/pricing" className="hover:text-[var(--color-amber-flame)] hover:underline decoration-4 transition-all">Pricing</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-display text-xl md:text-2xl font-bold text-[var(--color-sapphire)] mb-4 md:mb-6">Support</h4>
            <ul className="space-y-3 md:space-y-4 font-medium text-base md:text-lg opacity-80">
              <li><Link href="/contact" className="hover:text-[var(--color-cool-horizon)] hover:underline decoration-4 transition-all">Contact</Link></li>
              <li className="relative">
                <button 
                  onClick={() => {
                    setShowCommunityBadge(true);
                    setTimeout(() => setShowCommunityBadge(false), 3000);
                  }}
                  className="hover:text-[var(--color-cool-horizon)] hover:underline decoration-4 transition-all cursor-pointer"
                >
                  Community
                </button>
                {showCommunityBadge && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-30 bg-[var(--color-amber-flame)] text-[var(--color-carbon-black)] px-4 py-2 rounded-xl border-4 border-[var(--color-carbon-black)] font-display font-black uppercase text-xs sm:text-sm shadow-[4px_4px_0px_rgba(26,26,26,1)] rotate-[-10deg] animate-[bounce_0.5s_infinite] whitespace-nowrap">
                    Coming Soon! 🚀
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-display text-xl md:text-2xl font-bold text-[var(--color-sapphire)] mb-4 md:mb-6">Company</h4>
            <ul className="space-y-3 md:space-y-4 font-medium text-base md:text-lg opacity-80">
              {/* <li><a href="#" className="hover:text-[var(--color-sapphire)] hover:underline decoration-4 transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-sapphire)] hover:underline decoration-4 transition-all">Careers</a></li> */}
              <li><Link href="/privacy" className="hover:text-[var(--color-sapphire)] hover:underline decoration-4 transition-all">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-10 border-t-2 border-[var(--color-platinum)]/20 pt-10 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <p className="text-base md:text-lg font-medium opacity-80 order-2 sm:order-1">
            &copy; {new Date().getFullYear()} MABKET. All rights reserved. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <span className="font-display font-bold text-lg md:text-xl uppercase tracking-widest text-[var(--color-amber-flame)]">Follow Us</span>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--color-cool-horizon)] text-[var(--color-carbon-black)] border-2 border-[var(--color-platinum)] shadow-[4px_4px_0px_rgba(245,247,250,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(245,247,250,1)] active:translate-x-1 active:translate-y-1 active:shadow-none rotate-[-3deg] hover:rotate-0">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--color-amber-flame)] text-[var(--color-carbon-black)] border-2 border-[var(--color-platinum)] shadow-[4px_4px_0px_rgba(245,247,250,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(245,247,250,1)] active:translate-x-1 active:translate-y-1 active:shadow-none rotate-[2deg] hover:rotate-0">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--color-sapphire)] text-[var(--color-platinum)] border-2 border-[var(--color-platinum)] shadow-[4px_4px_0px_rgba(245,247,250,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(245,247,250,1)] active:translate-x-1 active:translate-y-1 active:shadow-none rotate-[-5deg] hover:rotate-0">
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;