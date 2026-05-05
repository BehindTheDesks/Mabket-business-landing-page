"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Contact Form Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-platinum)] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans text-[var(--color-carbon-black)]">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[var(--color-cool-horizon)] blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-[var(--color-amber-flame)] blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        {/* Back Link */}
        <Link 
          href="/" 
          className="mb-8 font-bold hover:underline decoration-[var(--color-sapphire)] decoration-4 underline-offset-4 transition-all self-center"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-8 md:mb-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-[var(--color-carbon-black)] mb-4 leading-none">
            Get in <span className="text-[var(--color-sapphire)]">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium opacity-80 max-w-sm mx-auto">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Form / Success State */}
        {!submitted ? (
          <form 
            onSubmit={handleSubmit}
            className="w-full bg-white p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] border-2 sm:border-4 border-[var(--color-carbon-black)] shadow-[6px_6px_0px_rgba(26,26,26,1)] sm:shadow-[12px_12px_0px_rgba(26,26,26,1)] animate-in fade-in zoom-in-95 duration-1000 delay-300"
          >
            <div className="space-y-4 sm:space-y-6">
              {error && (
                <div className="bg-red-100 text-red-600 p-4 rounded-xl font-bold border-2 border-red-600">
                  {error}
                </div>
              )}
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-display font-bold text-lg sm:text-xl mb-1 sm:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[var(--color-platinum)] border-2 sm:border-4 border-[var(--color-carbon-black)] rounded-lg sm:rounded-xl font-bold text-base sm:text-lg focus:outline-none focus:ring-4 ring-[var(--color-sapphire)]/30 transition-all placeholder:opacity-50"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-display font-bold text-lg sm:text-xl mb-1 sm:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="hello@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[var(--color-platinum)] border-2 sm:border-4 border-[var(--color-carbon-black)] rounded-lg sm:rounded-xl font-bold text-base sm:text-lg focus:outline-none focus:ring-4 ring-[var(--color-sapphire)]/30 transition-all placeholder:opacity-50"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block font-display font-bold text-lg sm:text-xl mb-1 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us everything..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[var(--color-platinum)] border-2 sm:border-4 border-[var(--color-carbon-black)] rounded-lg sm:rounded-xl font-bold text-base sm:text-lg focus:outline-none focus:ring-4 ring-[var(--color-sapphire)]/30 transition-all placeholder:opacity-50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5 bg-[var(--color-amber-flame)] text-[var(--color-carbon-black)] font-display font-black text-xl sm:text-2xl uppercase rounded-xl sm:rounded-2xl border-2 sm:border-4 border-[var(--color-carbon-black)] shadow-[4px_4px_0px_rgba(26,26,26,1)] sm:shadow-[8px_8px_0px_rgba(26,26,26,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(26,26,26,1)] active:translate-y-1 active:shadow-none transition-all cursor-pointer disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_rgba(26,26,26,1)] sm:disabled:hover:shadow-[8px_8px_0px_rgba(26,26,26,1)]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />}
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full bg-[var(--color-cool-horizon)] p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2rem] border-2 sm:border-4 border-[var(--color-carbon-black)] shadow-[8px_8px_0px_rgba(26,26,26,1)] sm:shadow-[12px_12px_0px_rgba(26,26,26,1)] text-center animate-[bounce_0.5s_ease-out]">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mb-4 leading-tight">Message Sent! 🚀</h2>
            <p className="text-lg sm:text-xl font-bold mb-8 opacity-90">
              Thanks for reaching out, {formData.name.split(' ')[0]}! We&apos;ll get back to you faster than a SME scales.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-[var(--color-carbon-black)] font-bold rounded-lg sm:rounded-xl border-2 border-[var(--color-carbon-black)] hover:bg-[var(--color-platinum)] transition-colors"
            >
              Send another?
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
