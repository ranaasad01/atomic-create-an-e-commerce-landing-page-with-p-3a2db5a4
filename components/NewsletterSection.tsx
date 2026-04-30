"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Mail className="w-6 h-6 text-white" />
        </div>

        <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
          Get Exclusive Deals First
        </h2>
        <p className="text-slate-400 mb-8 text-base leading-relaxed">
          Join 50,000+ subscribers and be the first to know about new arrivals, flash sales, and members-only discounts. No spam, ever.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/30 rounded-2xl px-6 py-5">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">You&apos;re in!</div>
              <div className="text-green-400 text-sm">Check your inbox for a welcome discount.</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

        <p className="text-slate-500 text-xs mt-4">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
