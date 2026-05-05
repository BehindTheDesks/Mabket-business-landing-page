"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    question: "How do I start using the app?",
    answer: "Getting started is simple. Just create an account, add your products, and begin tracking your business activities right away. The setup process is quick and designed to be easy for any business owner.",
  },
  {
    question: "Do I need the internet to use the app?",
    answer: "Yes, an internet connection is required to sync your data and access certain features. However, the app is designed to use minimal data so you can manage your business easily without heavy internet usage.",
  },
  {
    question: "Can I manage both online and in-store sales?",
    answer: "Yes. The app allows you to record and manage sales whether they come from your physical shop, social media, or other channels, helping you keep all your business records in one place.",
  },
  {
    question: "Is my business data secure?",
    answer: "Yes. Your business data is stored securely and protected to ensure your records, customer information, and transactions remain private and safe.",
  },
  {
    question: "Will I get support if I need help?",
    answer: "Absolutely. Our support team is available to help you with onboarding, troubleshooting, and any questions you may have while using the app.",
  },
];

const FAQItem = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <article className={`rounded-3xl brutalist-border transition-colors duration-300 ${isOpen ? 'bg-[var(--color-amber-flame)]' : 'bg-white hover:bg-[var(--color-platinum)]'}`}>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-6 sm:p-8 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-display text-2xl font-bold text-[var(--color-carbon-black)] sm:text-3xl tracking-tight">
          {item.question}
        </h3>
        <div
          className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full brutalist-border bg-white transition-transform duration-500 ${
            isOpen ? "rotate-[135deg]" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-carbon-black)"
            strokeWidth="3"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>

      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <div className="p-6 sm:p-8 pt-0 border-t-2 border-[var(--color-carbon-black)]/10">
          <p className="text-xl font-medium leading-relaxed text-[var(--color-carbon-black)] opacity-80">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const items = gsap.utils.toArray<HTMLElement>('.faq-item-wrap');
      gsap.fromTo(
        items,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
      <div ref={headerRef} className="mx-auto text-center mb-16">
        <h2 className="font-display text-5xl font-black text-[var(--color-carbon-black)] sm:text-6xl uppercase tracking-tighter">
          Questions?
        </h2>
        <p className="mt-4 text-2xl font-medium text-[var(--color-carbon-black)] opacity-80">
          Everything you need to know.
        </p>
      </div>

      <div className="faq-list space-y-6">
        {faqItems.map((item, index) => (
          <div key={item.question} className="faq-item-wrap brutalist-shadow rounded-3xl bg-[var(--color-carbon-black)]">
            <FAQItem
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          </div>
        ))}
      </div>
{/* 
      <div className="mx-auto mt-20 text-center">
        <div className="inline-block relative">
           <div className="absolute -top-4 -right-8 w-16 h-16 bg-[var(--color-cool-horizon)] rounded-full -z-10 blur-xl"></div>
           <button
             type="button"
             className="rounded-full bg-[var(--color-carbon-black)] px-12 py-5 font-display text-2xl font-bold text-[var(--color-amber-flame)] brutalist-shadow transition-transform hover:-translate-y-1 active:translate-y-1"
           >
             Contact Support
           </button>
        </div>
      </div> */}
    </section>
  );
};

export default FAQ;
