"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroItems = [
	{
		icon: "/image/Vector2.png",
		title: "Manage Orders Faster",
		description: "Easily add, organize, and track your products in one place. Monitor stock levels in real time and avoid running out of inventory or overselling.",
		image: "/image/marketDashboard.png",
		alt: "Manage Orders Faster",
		color: "bg-sapphire"
	},
	{
		icon: "/image/Frame2.png",
		title: "Order Management",
		description: "Manage incoming orders smoothly from a single dashboard. Track order status, confirm purchases, and keep your business operations organized.",
		image: "/image/orderDashboard.png",
		alt: "Order Management",
		color: "bg-cool-horizon"
	},
	{
		icon: "/image/Vector3.png",
		title: "Cash & Profit Insights",
		description: "Understand how your business is performing with simple financial insights. Track revenue, monitor profits, and make smarter decisions using clear sales data.",
		image: "/image/mockup.png",
		alt: "Cash & Profit Insights",
		color: "bg-amber-flame"
	},
	{
		icon: "/image/Vector4.png",
		title: "Customer Management",
		description: "Keep a record of your customers and their purchase history. Build better relationships and understand buying patterns to serve them more effectively.",
		image: "/image/chat.png",
		alt: "Customer Management",
		color: "bg-amber-flame"
	},
	{
		icon: "/image/Vector5.png",
		title: "Alerts & Notifications",
		description: "Stay updated on important activities in your business. Receive alerts for new orders, low stock levels, and key updates so you never miss what matters.",
		image: "/image/alert&notification.png",
		alt: "Alerts & Notifications",
		color: "bg-white"
	},
];

const Hero = () => {
	const containerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const rows = gsap.utils.toArray<HTMLElement>('.feature-row');
			
			rows.forEach((row, i) => {
				const textCol = row.querySelector('.text-col');
				const imgCol = row.querySelector('.img-col');

				gsap.fromTo(
					textCol,
					{ x: i % 2 === 0 ? -100 : 100, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: row,
							start: "top 80%",
						}
					}
				);

				gsap.fromTo(
					imgCol,
					{ x: i % 2 === 0 ? 100 : -100, opacity: 0, rotation: i % 2 === 0 ? 5 : -5 },
					{
						x: 0,
						opacity: 1,
						rotation: 0,
						duration: 1.2,
						ease: "back.out(1.2)",
						scrollTrigger: {
							trigger: row,
							start: "top 80%",
						}
					}
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={containerRef} className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
			<div className="space-y-24 md:space-y-32">
				{heroItems.map((item, index) => (
					<div
						key={item.title}
						className={`feature-row flex flex-col-reverse items-center justify-between gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
					>
						<div className="text-col flex w-full flex-col items-start gap-6 md:w-1/2">
							<div className="rounded-2xl brutalist-border p-4 bg-white shadow-[4px_4px_0px_rgba(26,26,26,1)]">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={item.icon} alt={`${item.title} icon`} className="h-8 w-8 object-contain" />
							</div>

							<div className="space-y-4">
								<h2 className="font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl text-carbon-black uppercase">
									{item.title}
								</h2>
								<p className="max-w-lg text-lg leading-relaxed text-carbon-black font-medium opacity-90 md:text-xl">
									{item.description}
								</p>
							</div>
						</div>

						<div className={`img-col group relative w-full md:w-1/2 rounded-[40px] ${item.color} p-6 brutalist-border brutalist-shadow h-80 sm:h-96 md:h-[450px]`}>
							<div className="w-full h-full rounded-[24px] overflow-hidden border-2 border-carbon-black bg-white">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={item.image}
									alt={item.alt}
									className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							{/* Playful accent sticker */}
							<div className="absolute -bottom-6 -left-6 z-20 bg-carbon-black px-4 py-2 rounded-xl text-amber-flame font-display font-bold rotate-[-5deg] border-2 border-white shadow-lg">
								<p className="text-sm tracking-wider uppercase">MABKET</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Hero;