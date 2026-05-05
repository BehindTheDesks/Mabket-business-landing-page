"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { supabase } from "../utils/supabase";
import confetti from "canvas-confetti";

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const TOTAL_STEPS = 4;

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    industry: "",
    otherIndustry: "",
    state: "",
    businessType: "" as "" | "online" | "physical" | "both",
    socialMediaLink: "",
  });
  const [stateSearch, setStateSearch] = useState("");
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const stateInputRef = useRef<HTMLInputElement>(null);

  const filteredStates = NIGERIAN_STATES.filter((s) =>
    s.toLowerCase().includes(stateSearch.toLowerCase())
  );

  useEffect(() => {
    if (contentRef.current) {
      const currentStepEl = contentRef.current.children[step - 1];
      gsap.fromTo(
        currentStepEl,
        { x: 50 * direction, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }
      );
    }
  }, [step, direction]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Close state dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (stateInputRef.current && !stateInputRef.current.closest(".state-dropdown-wrapper")?.contains(e.target as Node)) {
        setStateDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const animateOut = (direction: number, callback: () => void) => {
    if (contentRef.current) {
      const currentStepEl = contentRef.current.children[step - 1];
      gsap.to(currentStepEl, {
        x: direction * -50,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: callback,
      });
    } else {
      callback();
    }
  };

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 1 && !formData.email) return;
    if (step === 2 && !formData.businessName) return;
    if (step === 3 && (!formData.state || !formData.businessType)) return;

    setDirection(1);
    animateOut(1, () => setStep((s) => s + 1));
  };

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      animateOut(-1, () => setStep((s) => s - 1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.industry) return;
    if (formData.industry === "Others" && !formData.otherIndustry) return;

    setIsSubmitting(true);
    setError(null);

    const finalIndustry =
      formData.industry === "Others" ? formData.otherIndustry : formData.industry;

    try {
      const { error: supabaseError } = await supabase.from("waitlist").insert([
        {
          email: formData.email,
          business_name: formData.businessName,
          industry: finalIndustry,
          state: formData.state,
          business_type: formData.businessType,
          social_media_link: formData.socialMediaLink || null,
        },
      ]);

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          setError("This email is already on the waitlist!");
        } else {
          console.error("Supabase insert error:", supabaseError);
          setError("Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }

      // Trigger welcome email (non-blocking)
      try {
        await fetch("/api/waitlist/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            businessName: formData.businessName,
          }),
        });
      } catch (emailErr) {
        console.error("Failed to send welcome email:", emailErr);
      }

      if (contentRef.current) {
        const currentStepEl = contentRef.current.children[step - 1];
        gsap.to(currentStepEl, {
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setStep(5);
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ["#FF6B35", "#004E89", "#86BBD8", "#1A1A1A", "#F5F7FA"],
            });
          },
        });
      } else {
        setStep(5);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF6B35", "#004E89", "#86BBD8", "#1A1A1A", "#F5F7FA"],
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl brutalist-border px-4 py-3 text-lg font-medium text-carbon-black outline-none focus:ring-4 focus:ring-cool-horizon transition-all bg-white";

  const backBtn = (
    <button
      type="button"
      onClick={handleBack}
      className="rounded-2xl bg-gray-100 px-4 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 shrink-0"
    >
      ←
    </button>
  );

  return (
    <div className="relative mx-auto w-[calc(100%-12px)] sm:w-full max-w-md rounded-[2rem] brutalist-card bg-white p-6 sm:p-8 z-20 mb-20 text-left overflow-visible min-h-[320px] flex flex-col justify-center">
      {/* Progress Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] rounded-b-[1rem] h-3 bg-gray-100 border-x-2 border-b-2 border-carbon-black overflow-hidden">
        <div
          className="h-full bg-sapphire transition-all duration-500 ease-out"
          style={{ width: `${(Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <div ref={contentRef} className="relative w-full">

        {/* STEP 1: EMAIL */}
        {step === 1 && (
          <div className="flex flex-col justify-center pt-4">
            <p className="text-xs font-bold text-carbon-black/50 uppercase tracking-widest mb-1">Step 1 of {TOTAL_STEPS}</p>
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
                className="rounded-2xl bg-amber-flame px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 w-full sm:w-auto"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: BUSINESS NAME */}
        {step === 2 && (
          <div className="flex flex-col justify-center pt-4">
            <p className="text-xs font-bold text-carbon-black/50 uppercase tracking-widest mb-1">Step 2 of {TOTAL_STEPS}</p>
            <h3 className="font-display text-2xl font-bold mb-4 text-carbon-black">
              What&apos;s your business called? 🏪
            </h3>
            <form onSubmit={handleNext} className="flex flex-col gap-3">
              <div className="flex gap-2">
                {backBtn}
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
                className="rounded-2xl bg-cool-horizon px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 w-full"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: STATE + BUSINESS TYPE */}
        {step === 3 && (
          <div className="flex flex-col justify-center pt-4">
            <p className="text-xs font-bold text-carbon-black/50 uppercase tracking-widest mb-1">Step 3 of {TOTAL_STEPS}</p>
            <h3 className="font-display text-xl font-bold mb-4 text-carbon-black">
              Tell us about your business 📍
            </h3>
            <form onSubmit={handleNext} className="flex flex-col gap-3">
              {/* Searchable State Dropdown */}
              <div className="relative state-dropdown-wrapper">
                <div
                  className={`${inputClass} cursor-pointer flex items-center justify-between`}
                  onClick={() => {
                    setStateDropdownOpen((o) => !o);
                    setTimeout(() => stateInputRef.current?.focus(), 50);
                  }}
                >
                  <span className={formData.state ? "text-carbon-black" : "text-carbon-black/40"}>
                    {formData.state || "State / Location..."}
                  </span>
                  <span className="text-carbon-black/50 text-sm">▾</span>
                </div>

                {stateDropdownOpen && (
                  <div className="absolute z-50 left-0 right-0 top-full mt-1 bg-white brutalist-border rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-2 border-b-2 border-carbon-black/10">
                      <input
                        ref={stateInputRef}
                        type="text"
                        placeholder="Search state..."
                        className="w-full px-3 py-2 rounded-xl border-2 border-carbon-black/20 text-base outline-none focus:border-sapphire"
                        value={stateSearch}
                        onChange={(e) => setStateSearch(e.target.value)}
                      />
                    </div>
                    <ul className="max-h-44 overflow-y-auto">
                      {filteredStates.length > 0 ? (
                        filteredStates.map((s) => (
                          <li
                            key={s}
                            className={`px-4 py-2 cursor-pointer text-base font-medium hover:bg-sapphire hover:text-white transition-colors ${formData.state === s ? "bg-sapphire text-white" : ""}`}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              setFormData({ ...formData, state: s });
                              setStateSearch("");
                              setStateDropdownOpen(false);
                            }}
                          >
                            {s}
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-carbon-black/50 text-sm">No results</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Business Type */}
              <div className="grid grid-cols-3 gap-2">
                {(["online", "physical", "both"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, businessType: type })}
                    className={`py-2 rounded-xl font-display font-bold text-sm capitalize brutalist-border transition-all ${
                      formData.businessType === type
                        ? "bg-sapphire text-white"
                        : "bg-gray-50 text-carbon-black hover:-translate-y-0.5"
                    }`}
                  >
                    {type === "physical" ? "Physical" : type === "online" ? "Online" : "Both"}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 mt-1">
                {backBtn}
                <button
                  type="submit"
                  disabled={!formData.state || !formData.businessType}
                  className="flex-1 rounded-2xl bg-amber-flame px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 4: INDUSTRY + SOCIAL LINK */}
        {step === 4 && (
          <div className="flex flex-col justify-center pt-4">
            <p className="text-xs font-bold text-carbon-black/50 uppercase tracking-widest mb-1">Step 4 of {TOTAL_STEPS}</p>
            <h3 className="font-display text-xl font-bold mb-4 text-carbon-black">
              Almost there! 🎯
            </h3>
            {error && <p className="text-red-500 font-bold mb-2 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Industry */}
              <div className="flex gap-2">
                {backBtn}
                <select
                  required
                  className={inputClass}
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="" disabled>Industry...</option>
                  <option value="Fashion">Fashion & Apparel</option>
                  <option value="Cosmetics">Cosmetics & Beauty</option>
                  <option value="Medical">Medical & Health</option>
                  <option value="Food">Food & Beverage</option>
                  <option value="Electronics">Electronics & Tech</option>
                  <option value="Groceries">Groceries & Supermarket</option>
                  <option value="Others">Others (Specify)</option>
                </select>
              </div>

              {formData.industry === "Others" && (
                <input
                  type="text"
                  placeholder="Your industry..."
                  required
                  className={inputClass}
                  value={formData.otherIndustry}
                  onChange={(e) => setFormData({ ...formData, otherIndustry: e.target.value })}
                />
              )}

              {/* Social Media */}
              <input
                type="text"
                placeholder="IG or TikTok Username (optional)"
                className={inputClass}
                value={formData.socialMediaLink}
                onChange={(e) => setFormData({ ...formData, socialMediaLink: e.target.value })}
              />

              <button
                type="submit"
                disabled={isSubmitting || !formData.industry || (formData.industry === "Others" && !formData.otherIndustry)}
                className="rounded-2xl bg-sapphire text-white px-8 py-3 font-display font-bold text-lg brutalist-border transition-transform hover:-translate-y-1 active:translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 w-full"
              >
                {isSubmitting ? "Securing your spot..." : "I'm in! 🚀"}
              </button>
            </form>
          </div>
        )}

        {/* STEP 5: SUCCESS */}
        {step === 5 && (
          <div className="flex flex-col items-center justify-center text-center py-4">
            <div className="w-16 h-16 bg-amber-flame brutalist-border rounded-full flex items-center justify-center mb-4 text-3xl animate-[bounce_2s_infinite]">
              🎉
            </div>
            <h3 className="font-display text-2xl font-bold text-carbon-black">
              You&apos;re on the list!
            </h3>
            <p className="font-medium text-carbon-black opacity-80 mt-1">
              We&apos;ll notify {formData.email} soon!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
