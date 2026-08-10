"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    image: "/image/elite_wears_logo.png",
    quote: "MABKET simplified how we run Elitewears. We see our sales data in a more structured manner.",
    name: "Yemi",
    role: " CMO, Elitewears",
    color: "bg-platinum"
  },
  {
    id: 3,
    image: "/image/estorae_logo.png",
    quote: "Knowing that the app can allow me see how much I am making from my business is so cool.",
    name: "Bolaji ",
    role: " CEO, Estorae",
    color: "bg-cool-gray"
  },
  {
    id: 4,
    image: "/image/Ellipse10.png",
    quote: "MABKET made invoicing so much easier for Ziva Aesthetics. I create invoices for my clients right in the app, track orders and inventory, and see my profit. It has simplified how I run the business.",
    name: "Bolaji",
    role: "CEO, Ziva Aesthetics",
    color: "bg-amber-flame"
  },
  {
    id: 5,
    image: "/image/iyi_logo.png",
    quote: "MABKET made it so easy to stay connected with my customers. I send broadcast messages to update them all at once about new arrivals and promos. It's simplified how I run IYI Fashion.",
    name: "Busayo",
    role: "CEO, IYI",
    color: "bg-white"
  },
  {
    id: 6,
    image: "/image/ella_logo.png",
    quote: "Creating and sending invoices used to take up so much of my time. With MABKET, I create and send invoices to my customers right from the app, while also tracking my orders, inventory, and profit. All in one place.",
    name: "Precious",
    role: "CEO, Ellasbakeshop",
    color: "bg-amber-flame"
  },
  {
    id: 2,
    image: "/image/morry.png",
    quote: "I enjoy the storefront link integration. This has helped me to have a catalog to share with my customers.",
    name: "Anthonia",
    role: "CEO, Morry",
    color: "bg-amber-flame"
  }
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
