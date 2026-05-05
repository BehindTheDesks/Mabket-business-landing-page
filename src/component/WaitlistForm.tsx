"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { supabase } from "../utils/supabase";
import confetti from "canvas-confetti";

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    industry: "",
    otherIndustry: "",
  });
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for back
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const currentStepEl = contentRef.current.children[step - 1];
      
      // Animate current step in
      gsap.fromTo(
        currentStepEl,
        { x: 50 * direction, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }
      );
    }
  }, [step, direction]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 1 && !formData.email) return;
    if (step === 2 && !formData.businessName) return;
    
    setDirection(1);
    if (contentRef.current) {
      const currentStepEl = contentRef.current.children[step - 1];
      // Animate current step out
      gsap.to(currentStepEl, {
        x: -50,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setStep((s) => s + 1);
        }
      });
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      if (contentRef.current) {
        const currentStepEl = contentRef.current.children[step - 1];
        gsap.to(currentStepEl, {
          x: 50,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setStep((s) => s - 1);
          }
        });
      } else {
        setStep((s) => s - 1);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.industry) return;
    if (formData.industry === "Others" && !formData.otherIndustry) return;

    setIsSubmitting(true);
    setError(null);

    const finalIndustry = formData.industry === "Others" ? formData.otherIndustry : formData.industry;

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: formData.email, 
            business_name: formData.businessName, 
            industry: finalIndustry 
          }
        ]);

      if (supabaseError) {
        // Supabase unique constraint error code is usually '23505'
        if (supabaseError.code === '23505') {
            setError("This email is already on the waitlist!");
        } else {
            console.error("Supabase insert error:", supabaseError);
            setError("Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }

      // Trigger Resend Email
      try {
        await fetch('/api/waitlist/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            businessName: formData.businessName,
          }),
        });
      } catch (emailErr) {
        console.error("Failed to send welcome email:", emailErr);
        // We don't block the user from seeing success if the email fails,
        // since they are successfully recorded in the database.
      }

      if (contentRef.current) {
        const currentStepEl = contentRef.current.children[step - 1];
        gsap.to(currentStepEl, {
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setStep(4);
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#FF6B35', '#004E89', '#86BBD8', '#1A1A1A', '#F5F7FA'],
            });
          }
        });
      } else {
        setStep(4);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF6B35', '#004E89', '#86BBD8', '#1A1A1A', '#F5F7FA'],
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-2xl brutalist-border px-4 py-3 text-lg font-medium text-carbon-black outline-none focus:ring-4 focus:ring-cool-horizon transition-all";

  return (
    <div className="relative mx-auto w-full max-w-md rounded-[2rem] brutalist-card bg-white p-6 sm:p-8 z-20 mb-20 text-left overflow-hidden min-h-[300px] sm:min-h-[260px] flex flex-col justify-center">
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gray-100 border-b-2 border-[var(--color-carbon-black)]">
        <div 
          className="h-full bg-[var(--color-sapphire)] transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div ref={contentRef} className="relative w-full h-full">
        
        {/* STEP 1: EMAIL */}
        {step === 1 && (
          <div className="absolute inset-0 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold mb-4 text-carbon-black">
              Drop your email 💌
            </h3>
            <form onSubmit={handleNext} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@awesome.com"
                required
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <button
                type="submit"
                className="rounded-2xl bg-[var(--color-amber-flame)] px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 w-full sm:w-auto"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: BUSINESS NAME */}
        {step === 2 && (
          <div className="absolute inset-0 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold mb-4 text-carbon-black">
              What&apos;s your business called? 🏪
            </h3>
            <form onSubmit={handleNext} className="flex flex-col gap-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="rounded-2xl bg-gray-100 px-4 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1"
                >
                  ←
                </button>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  required
                  className={inputClass}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="rounded-2xl bg-[var(--color-cool-horizon)] px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 w-full"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: INDUSTRY */}
        {step === 3 && (
          <div className="absolute inset-0 flex flex-col justify-center">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-carbon-black">
              What&apos;s your industry? 🎯
            </h3>
            {error && (
              <p className="text-red-500 font-bold mb-2 text-sm">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex gap-2 w-full">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-2xl bg-gray-100 px-4 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1"
                  >
                    ←
                  </button>
                  <select
                    required
                    className={inputClass}
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    <option value="" disabled>Select an industry...</option>
                    <option value="Fashion">Fashion & Apparel</option>
                    <option value="Cosmetics">Cosmetics & Beauty</option>
                    <option value="Medical">Medical & Health</option>
                    <option value="Food">Food & Beverage</option>
                    <option value="Others">Others (Specify)</option>
                  </select>
                </div>
                
                {formData.industry !== "Others" && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-2xl bg-[var(--color-sapphire)] text-white px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 w-full sm:w-auto"
                  >
                    {isSubmitting ? "..." : "Done!"}
                  </button>
                )}
              </div>

              {formData.industry === "Others" && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Specify your industry"
                    required
                    className={`${inputClass} py-3`}
                    value={formData.otherIndustry}
                    onChange={(e) => setFormData({ ...formData, otherIndustry: e.target.value })}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-2xl bg-[var(--color-sapphire)] text-white px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 w-full sm:w-auto"
                  >
                    {isSubmitting ? "..." : "Done!"}
                  </button>
                </div>
              )}
            </form>
          </div>
        )}

        {/* STEP 4: SUCCESS */}
        {step === 4 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[var(--color-amber-flame)] brutalist-border rounded-full flex items-center justify-center mb-4 text-3xl animate-[bounce_2s_infinite]">
              🎉
            </div>
            <h3 className="font-display text-2xl font-bold text-carbon-black">
              You&apos;re on the list!
            </h3>
            <p className="font-medium text-carbon-black opacity-80">
              We&apos;ll notify {formData.email} soon!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
