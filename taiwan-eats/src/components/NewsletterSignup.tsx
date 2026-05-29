"use client";
import { useState } from "react";
import OrnamentDivider from "@/components/OrnamentDivider";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail]     = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section
      aria-label="Newsletter signup"
      className="bg-parchment-warm rounded-2xl px-8 py-10 text-center"
    >
      <OrnamentDivider className="mb-8" />

      <p className="font-display text-[1.75rem] font-semibold text-ink mb-2 leading-snug">
        New guides, every week.
      </p>
      <p className="text-[0.875rem] font-sans text-ink-secondary mb-7">
        Restaurants, dishes, and tips — every Thursday. No spam. Unsubscribe anytime.
      </p>

      {status === "success" ? (
        <p className="inline-flex items-center gap-2 text-[0.875rem] font-sans font-medium text-mist-600 bg-mist-50 px-5 py-3 rounded-lg">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 7 5 11 13 3" />
          </svg>
          You&apos;re in. Check your inbox.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 items-center justify-center max-w-sm mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="
              flex-1 min-w-0 w-full sm:w-auto
              border border-parchment-border bg-white rounded-md
              px-4 py-2.5 text-[0.875rem] font-sans text-ink
              placeholder:text-ink-muted
              focus:outline-none focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-400
              disabled:opacity-50
              transition-colors
            "
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              shrink-0 bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-60
              text-white text-[0.875rem] font-sans font-medium
              px-5 py-2.5 rounded-md
              transition-colors duration-150
              min-w-[100px]
            "
          >
            {status === "loading" ? "…" : "Subscribe →"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="mt-3 text-[0.8125rem] font-sans text-lantern-600"
        >
          {errorMsg}
        </p>
      )}

      <OrnamentDivider className="mt-8" />
    </section>
  );
}
