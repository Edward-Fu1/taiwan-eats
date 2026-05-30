export const runtime = 'edge';

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taipei Transportation Guide — Getting Around Taipei",
  description:
    "Complete transportation guides for Taipei — airport transfers, MRT, buses, taxis, and day trips. Everything you need to get around the city.",
  alternates: { canonical: "/transport/taipei" },
};

const cities = [
  { slug: "taipei", label: "Taipei", labelZh: "台北", active: true },
  // Future: { slug: "tainan", label: "Tainan", labelZh: "台南", active: false },
];

const guides = [
  {
    href: "/transport/taipei/airport-to-taipei",
    title: "Taoyuan Airport → Taipei Main Station",
    titleZh: "桃園機場到台北車站",
    description:
      "Airport MRT step-by-step: ticket prices, Express vs Commuter, and what to do when you arrive at Taipei Main.",
    badge: "Airport Transfer",
    badgeColor: "bg-mist-50 text-mist-600",
    time: "35 min",
    cost: "NT$160",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M12 22V12" /><path d="M3.27 6.96 12 12.01l8.73-5.05" />
      </svg>
    ),
  },
  {
    href: "/transport/taipei/ubike",
    title: "YouBike 2.0 — Taipei's City Bike",
    titleZh: "台北公共自行車",
    description:
      "How to rent, ride, and return a YouBike anywhere in Taipei — EasyCard setup, pricing tiers, the dock-and-reset trick, and the best riverside cycling routes.",
    badge: "Cycling",
    badgeColor: "bg-jade-50 text-jade-600",
    time: "24/7",
    cost: "From NT$5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5"/>
        <circle cx="18.5" cy="17.5" r="3.5"/>
        <path d="M15 6a1 1 0 0 0 0-2h-3l-3 9H5"/>
        <path d="m9 13 2.5-7.5"/>
      </svg>
    ),
  },
];

export default function TaipeiTransportPage() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-6">
        <Navbar />

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-medium tracking-widest uppercase text-mist-600 mb-3">Transportation</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight mb-3">
            Getting Around Taiwan
          </h1>
          <p className="text-ink-secondary leading-relaxed">
            Step-by-step transport guides for every city — airport transfers, MRT maps, intercity trains, and more.
          </p>
        </div>

        {/* City tabs */}
        <div className="flex gap-2 mb-10 border-b border-parchment-border pb-0">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/transport/${city.slug}`}
              className={`relative px-4 py-2.5 text-sm font-medium transition-colors rounded-t-lg -mb-px ${
                city.active
                  ? "text-ink border-b-2 border-terracotta-500"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {city.label}
              <span className="ml-1.5 text-ink-muted font-normal text-xs">{city.labelZh}</span>
            </Link>
          ))}
          {/* Coming soon hint */}
          <span className="px-4 py-2.5 text-sm text-ink-muted/50 cursor-default select-none">
            Tainan <span className="text-xs">(soon)</span>
          </span>
        </div>

        {/* Taipei transport guides */}
        <div className="space-y-4 mb-16">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-start gap-5 bg-white border border-parchment-border rounded-2xl p-5 hover:border-terracotta-500/40 hover:shadow-sm transition-all"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-parchment-warm flex items-center justify-center text-ink-secondary group-hover:text-terracotta-500 transition-colors">
                {guide.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${guide.badgeColor}`}>
                    {guide.badge}
                  </span>
                </div>
                <h2 className="font-serif text-lg font-bold text-ink leading-snug mb-0.5 group-hover:text-terracotta-600 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-xs text-ink-muted mb-2">{guide.titleZh}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{guide.description}</p>

                {/* Quick stats */}
                <div className="flex gap-4 mt-3 text-xs text-ink-muted">
                  <span className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="8" cy="8" r="6"/><polyline points="8 5 8 8 10 10"/></svg>
                    {guide.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="8" cy="8" r="6"/><line x1="8" y1="5" x2="8" y2="8"/><line x1="8" y1="10.5" x2="8" y2="11"/></svg>
                    {guide.cost}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <svg className="flex-shrink-0 mt-1 text-ink-muted group-hover:text-terracotta-500 transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="8" x2="13" y2="8"/><polyline points="9 4 13 8 9 12"/>
              </svg>
            </Link>
          ))}

          {/* Coming soon placeholder */}
          <div className="flex items-start gap-5 bg-parchment-warm/50 border border-dashed border-parchment-border rounded-2xl p-5 opacity-60">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-parchment-border/40 flex items-center justify-center text-ink-muted">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/>
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-ink-muted leading-snug mb-1">Getting Around by MRT</h2>
              <p className="text-sm text-ink-muted/70">Taipei Metro line guide, fares, and the EasyCard — coming soon.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
