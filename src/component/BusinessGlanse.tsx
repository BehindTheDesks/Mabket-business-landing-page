"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlightCards = [
  {
    image: "/image/Group8.png",
    title: "No more handwritten stock books",
    description: "Everything digital always up to date, accessible anywhere",
    color: "bg-[var(--color-amber-flame)]"
  },
  {
    image: "/image/Group9.png",
    title: "Manage your customers better",
    description: "Send your customers birthday wishes, special discounts or announcements.",
    color: "bg-[var(--color-cool-horizon)]"
  },
  {
    image: "/image/Group10.png",
    title: "Know your real profit, not guesswork",
    description: "Accurate reports that show what you actually earned",
    color: "bg-[var(--color-sapphire)]"
  },
];

const metricCards = [
  {
    image: "/image/Vector6.png",
    label: "Today's Sales",
    value: "₦45,200",
    subtext: "+12%",
    subtextClass: "text-[#004D2C]",
    color: "bg-white"
  },
  {
    image: "/image/Vector7.png",
    label: "Cash Expected",
    value: "₦28,500",
    subtext: "From 8 customers",
    subtextClass: "text-[#004D2C] opacity-70",
    color: "bg-white"
  },
  {
    image: "/image/Group11.png",
    label: "Low Stock Items",
    value: "12 items",
    subtext: "Need restocking",
    subtextClass: "text-[var(--color-amber-flame)]",
    color: "bg-[var(--color-platinum)]"
  },
];

const BusinessGlanse = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        }
      );

      // Bento Cards Animation
      const cards = gsap.utils.toArray<HTMLElement>('.bento-card');
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
      <div ref={headerRef} className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="font-display text-5xl font-black text-[var(--color-carbon-black)] sm:text-6xl uppercase tracking-tight">
          Business at a glance
        </h1>
        <p className="mt-6 text-xl font-medium text-[var(--color-carbon-black)] opacity-80">
          Real-time insights that help you make smarter decisions every day, wrapped in a delightful experience.
        </p>
      </div>

      <div className="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        
        {/* Main Highlights - taking up the top row */}
        {highlightCards.map((card, index) => (
          <article
            key={card.title}
            className={`bento-card relative rounded-3xl brutalist-border brutalist-shadow p-8 flex flex-col justify-between ${card.color} ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="mb-8 w-16 h-16 rounded-2xl bg-white brutalist-border flex items-center justify-center p-3 rotate-[-5deg]">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-carbon-black)] leading-tight mb-3">
                {card.title}
              </h2>
              <p className="text-[var(--color-carbon-black)] font-medium opacity-90 text-lg">
                {card.description}
              </p>
            </div>
          </article>
        ))}

        {/* Metrics Box - taking up larger space */}
        <div className="bento-card md:col-span-2 lg:col-span-3 brutalist-border brutalist-shadow rounded-3xl bg-[var(--color-carbon-black)] p-8 sm:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h3 className="font-display text-3xl font-bold text-[var(--color-sapphire)] mb-4 md:mb-0">
              Live Metrics
            </h3>
            <span className="bg-[var(--color-amber-flame)] text-[var(--color-carbon-black)] px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider brutalist-border">
              Updated just now
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {metricCards.map((card, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 ${card.color} brutalist-border transform transition-transform hover:scale-105 hover:-rotate-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[var(--color-carbon-black)] p-2">
                     <img
                      src={card.image}
                      alt={card.label}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="font-display font-bold text-lg text-[var(--color-carbon-black)]">{card.label}</p>
                </div>
                
                <h3 className="text-4xl font-black font-display text-[var(--color-carbon-black)] tracking-tight">
                  {card.value}
                </h3>
                <p className={`mt-3 font-bold text-base ${card.subtextClass}`}>
                  {card.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessGlanse;
