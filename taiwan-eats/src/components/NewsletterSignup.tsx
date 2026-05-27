"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to Mailchimp / Resend
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="font-serif text-xl font-bold mb-1">Get the weekly Taiwan food brief</h3>
        <p className="text-sm text-gray-500">New restaurants, seasonal dishes, and tips — every Thursday.</p>
      </div>
      {submitted ? (
        <p className="text-sm font-medium text-coral-600">You&apos;re in! 🎉 Check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 flex-shrink-0">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm w-52 focus:outline-none focus:border-coral-400"
          />
          <button
            type="submit"
            className="bg-coral-400 hover:bg-coral-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
