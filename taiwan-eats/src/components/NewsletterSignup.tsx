"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="font-serif text-xl font-bold mb-1">Get the weekly Taiwan food brief</h3>
        <p className="text-sm text-gray-500">New restaurants, seasonal dishes, and tips — every Thursday.</p>
      </div>

      {status === "success" ? (
        <p className="text-sm font-medium text-coral-600">You&apos;re in! 🎉 Check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm w-52 focus:outline-none focus:border-coral-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-coral-400 hover:bg-coral-600 disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-xs text-red-500">{errorMsg}</p>
          )}
        </form>
      )}
    </div>
  );
}
