"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    image: "/image/Ellipse10.png",
    quote: "This app has transformed how I manage my inventory. No more lost stock or forgotten sales. My profits have increased by 30% since I started using it.",
    name: "Adebayo Johnson",
    role: "Lagos Electronics",
    color: "bg-sapphire"
  },
  {
    id: 2,
    image: "/image/Ellipse9.png",
    quote: "Before this platform, bookkeeping was stressful and inaccurate. Now I can track every transaction in one place and make smarter business decisions.",
    name: "Nandi Mokoena",
    role: "Johannesburg Fashion Hub",
    color: "bg-amber-flame"
  },
  {
    id: 3,
    image: "/image/Ellipse11.png",
    quote: "I used to run out of best-selling products without notice. The alerts and stock insights help me restock on time, and my customers trust me more.",
    name: "Kwame Mensah",
    role: "Accra Home Essentials",
    color: "bg-cool-horizon"
  },
  {
    id: 4,
    image: "/image/Ellipse10.png",
    quote: "Sales reports used to take me hours every weekend. Now I generate them in minutes and spend more time serving customers.",
    name: "Amina Yusuf",
    role: "Kano Beauty Supplies",
    color: "bg-amber-flame"
  },
  {
    id: 5,
    image: "/image/Ellipse9.png",
    quote: "The dashboard gives me a clear picture of what is selling and what is not. I finally have control over my stock flow.",
    name: "Peter Okafor",
    role: "Abuja Mobile Accessories",
    color: "bg-white"
  },
  {
    id: 6,
    image: "/image/Ellipse11.png",
    quote: "I can now manage multiple shop branches from one place. It has reduced errors and helped my team stay aligned every day.",
    name: "Thandiwe Dlamini",
    role: "Durban Fresh Mart",
    color: "bg-platinum"
  },
];

const Review = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

      const cards = gsap.utils.toArray<HTMLElement>('.review-card');
      
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotation: i % 2 === 0 ? -5 : 5 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
      <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-16 relative">
        {/* Playful background element */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-sapphire rounded-full blur-2xl opacity-40 z-0"></div>
        <h2 className="relative z-10 font-display text-5xl font-black text-carbon-black sm:text-6xl uppercase tracking-tighter">
          Loved by business owners across Africa
        </h2>
        <p className="relative z-10 mt-6 text-2xl font-medium text-carbon-black opacity-80">
          Join thousands of entrepreneurs growing their business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`review-card flex flex-col justify-between rounded-[32px] brutalist-border brutalist-shadow p-8 ${review.color} transition-all duration-300 hover:-translate-y-2`}
          >
            <div>
              <div className="text-5xl font-display text-carbon-black opacity-30 mb-4 h-8 leading-none">
                &quot;
              </div>
              <p className="text-carbon-black font-medium text-lg leading-relaxed mb-8">
                {review.quote}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t-2 border-carbon-black/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full brutalist-border object-cover bg-white"
              />
              <div>
                <h3 className="font-display font-bold text-xl text-carbon-black">
                  {review.name}
                </h3>
                <p className="text-carbon-black opacity-70 font-medium text-sm">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
