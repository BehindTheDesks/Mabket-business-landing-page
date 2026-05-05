"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaitlistForm from "./WaitlistForm";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Nav bar drops in
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
      );

      // Main text staggers in
      if (textRef.current) {
        const chars = textRef.current.children;
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0, rotateZ: 10 },
          {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "back.out(1.5)",
            delay: 0.4,
          }
        );
      }

      // Shuffle Animation
      const cards = gsap.utils.toArray<HTMLElement>('.word-card', wordsRef.current);
      let currentIndex = 0;

      // Initial card stack setup
      gsap.set(cards, {
        xPercent: -50,
        left: "50%",
        y: (i) => i * 15,
        skewX: -5,
        scale: (i) => 1 - (i * 0.05),
        zIndex: (i) => cards.length - i
      });

      const shuffleCards = () => {
        if (cards.length === 0) return;
        const topCard = cards[currentIndex];
        const nextIndex1 = (currentIndex + 1) % cards.length;
        const nextIndex2 = (currentIndex + 2) % cards.length;
        const middleCard = cards[nextIndex1];
        const bottomCard = cards[nextIndex2];

        const tl = gsap.timeline();
        
        // Top card flies up and fades out
        tl.to(topCard, {
          y: -80,
          xPercent: -30,
          opacity: 0,
          scale: 1.1,
          skewX: 10,
          duration: 0.4,
          ease: "power2.in"
        })
        .set(topCard, { zIndex: 0 })
        .to(topCard, {
          y: 30, // move to bottom
          xPercent: -50,
          opacity: 1,
          scale: 0.9,
          skewX: -5,
          duration: 0.4,
          ease: "power2.out"
        }, "-=0.1");

        // Middle card becomes top
        tl.to(middleCard, {
          y: 0,
          scale: 1,
          zIndex: 3,
          duration: 0.5,
          ease: "back.out(1.2)"
        }, 0);

        // Bottom card becomes middle
        tl.to(bottomCard, {
          y: 15,
          scale: 0.95,
          zIndex: 2,
          duration: 0.5,
          ease: "back.out(1.2)"
        }, 0);

        currentIndex = nextIndex1;
      };

      const intervalId = setInterval(shuffleCards, 2500);



      return () => {
        clearInterval(intervalId);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const shuffleWords = [
    { text: "Smarter.", bg: "bg-sapphire", color: "text-platinum" },
    { text: "Better.", bg: "bg-cool-horizon", color: "text-carbon-black" },
    { text: "Faster.", bg: "bg-amber-flame", color: "text-carbon-black" },
  ];

  return (
    <header ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-platinum pt-6">
      {/* Playful background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cool-horizon blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-60 right-20 w-48 h-48 rounded-full bg-amber-flame blur-3xl opacity-50 pointer-events-none" />

      {/* Navigation Bar */}
      <nav ref={navRef} className="relative z-50 mx-auto flex w-[92%] sm:w-[90%] max-w-6xl items-center justify-between rounded-full brutalist-card bg-white px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/image/logo.png" 
            alt="Logo" 
            className="h-8 sm:h-12 w-auto object-contain" 
          />
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tighter">MABKET</span>
        </div>
        <Link href="/waitlist">
          <button className="rounded-full bg-amber-flame px-4 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm font-display font-bold text-black transition-transform hover:scale-105 active:scale-95">
            Join Waitlist
          </button>
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center mx-auto w-full max-w-6xl px-6 pt-20 pb-20 text-center">
        <h1 
          ref={textRef} 
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tighter text-carbon-black mb-6 uppercase flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4"
        >
          <span className="inline-block">Manage</span>
          <span className="inline-block">Your</span>

          <span className="inline-block">Business</span>
          <span ref={wordsRef} className="relative inline-block w-[4.5em] sm:w-[5.5em] h-[1.2em] sm:h-[1.3em]">
            {shuffleWords.map((word) => (
              <span 
                key={word.text} 
                className={`word-card absolute top-0 left-1/2 px-3 py-1 sm:px-5 sm:py-2 rounded-full border-4 border-carbon-black ${word.bg} ${word.color} whitespace-nowrap`}
              >
                {word.text}
              </span>
            ))}
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-2xl font-medium text-carbon-black opacity-80 leading-relaxed mb-6 mt-3">
          Track inventory, receive orders, and get real-time insights all in one place.
        </p>

        {/* Playful Free Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-2xl sm:text-3xl font-black font-display tracking-tight">
          <span className="text-carbon-black opacity-60 line-through decoration-4 sm:decoration-[6px] decoration-amber-flame -rotate-3">
            For a fee
          </span>
          <span className="bg-cool-horizon text-carbon-black px-6 py-2 rounded-2xl brutalist-border rotate-3 shadow-[4px_4px_0px_rgba(26,26,26,1)] animate-[bounce_4s_infinite]">
            For FREE! 🚀
          </span>
        </div>

       {/* CTA Buttons */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-20 z-20 relative">
          <button className="flex items-center gap-3 rounded-full bg-[var(--color-sapphire)] px-8 py-4 font-display font-bold text-[var(--color-carbon-black)] brutalist-shadow border-2 border-[var(--color-carbon-black)] transition-transform hover:-translate-y-1 active:translate-y-1">
            <img src="/image/Vector.png" alt="" className="h-5 w-5" aria-hidden="true" />
            Get on iOS
          </button>
          <button className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-display font-bold text-[var(--color-carbon-black)] brutalist-shadow border-2 border-[var(--color-carbon-black)] transition-transform hover:-translate-y-1 active:translate-y-1">
            <img src="/image/Vector1.png" alt="" className="h-5 w-5" aria-hidden="true" />
            Get on Android
          </button>
        </div> */}

        {/* Waitlist Gamified Form */}
        <WaitlistForm />

        {/* Phone Screen Preview */}
       
      </div>
    </header>
  );
};

export default Header;
