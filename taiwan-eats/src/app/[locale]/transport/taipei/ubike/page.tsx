export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "YouBike 2.0 Taipei — How to Rent, Ride & Return",
  description:
    "Complete guide to YouBike 2.0 in Taipei: EasyCard setup, pricing tiers, how to unlock and return a bike, the dock-and-reset trick, and the best cycling routes.",
  alternates: { canonical: "/transport/taipei/ubike" },
};

const steps = [
  {
    number: 1,
    title: "Get your EasyCard topped up",
    chinese: "準備悠遊卡",
    description:
      "YouBike 2.0 works best with an EasyCard (悠遊卡). If you rode the Airport MRT, you already have one. Make sure it has at least NT$100 on it — enough for several rides. You can top up at any MRT station, 7-Eleven, FamilyMart, or Hi-Life. Alternatively, you can pay via the official YouBike app linked to a credit card, but the EasyCard is far faster at the dock.",
    tip: "The YouBike app (free on iOS and Android) shows real-time bike availability at every station and is the easiest way to find bikes near you. Download it before heading out.",
    tipLabel: "Get the YouBike app",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Person using a smartphone with a transit card",
  },
  {
    number: 2,
    title: "Find a station near you",
    chinese: "找站點",
    description:
      "There are over 1,400 YouBike 2.0 stations across Taipei — roughly one at every MRT exit and every 300 metres in central districts. Open the YouBike app and look for green markers; the number on each marker shows available bikes. Stations are also visible on Google Maps and Apple Maps (search 'YouBike'). In popular areas like Da'an, Xinyi, and Zhongzheng, you'll almost never walk more than two minutes to a bike.",
    tip: "Busiest times are weekday rush hours (8–9 am and 6–7 pm). If your nearest station is empty, the app highlights the closest one with bikes — usually just a block away.",
    tipLabel: "Busy times to know",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Row of public bicycles at a docking station on a city street",
  },
  {
    number: 3,
    title: "Unlock your bike",
    chinese: "取車",
    description:
      "Walk up to any available bike in the rack. Tap your EasyCard on the card reader on the handlebar panel — you'll hear a beep and the dock releases. The whole process takes under three seconds. To unlock via app instead: tap a bike icon in the app and press 'Unlock'. You'll receive an SMS confirming your rental start time and EasyCard deduction.",
    tip: "Do a 10-second safety check before riding: squeeze both brake levers (they should grip firmly before touching the bars), push down on the seat to confirm it's locked in, and give the tires a quick press — they should feel firm, not spongy.",
    tipLabel: "Quick safety check",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Close-up of a bicycle handlebar and lock panel",
  },
  {
    number: 4,
    title: "Ride — and use the dock-and-reset trick",
    chinese: "騎車 — 善用重新租借",
    description:
      "YouBike 2.0 charges NT$5 for the first 30 minutes — cheaper than a single MRT fare. After that, prices step up every half hour (see pricing table above). For longer journeys, use the dock-and-reset trick: pull into any station mid-ride, lock the bike until you hear the click, wait a few seconds, then re-rent a fresh bike. Your 30-minute clock resets and you pay NT$5 again. Completely legitimate — this is how commuters use it daily.",
    tip: "The riverside cycling paths (河濱自行車道) along the Danshui River and Xindian River are completely car-free and run for kilometres. Start near Guting MRT and you're on the riverside path within 10 minutes.",
    tipLabel: "Best car-free route",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Cyclist on a dedicated riverside cycling path in a city",
  },
  {
    number: 5,
    title: "Return to any station",
    chinese: "還車",
    description:
      "Ride to any YouBike station and slide the front wheel into an empty dock until you hear a firm click and the dock light turns red. That confirms a successful return. Your EasyCard is charged automatically and you'll receive an SMS with ride duration and cost within seconds. You're done — no app tap needed at return.",
    tip: "If your destination station is full, the YouBike app will show the nearest station with empty slots and give you a 10-minute grace period to get there without being charged extra. Just tap 'Full Station' in the app before the dock.",
    tipLabel: "Station full? No panic",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Bicycles securely docked at a bike share station",
  },
];

const pricingTiers = [
  { duration: "0 – 30 min",          extra: "NT$5",  total: "NT$5"  },
  { duration: "31 – 60 min",         extra: "NT$5",  total: "NT$10" },
  { duration: "61 – 90 min",         extra: "NT$10", total: "NT$20" },
  { duration: "91 – 120 min",        extra: "NT$10", total: "NT$30" },
  { duration: "Each 30 min after 2 hrs", extra: "NT$20", total: "—" },
];

const popularRoutes = [
  {
    name: "Riverside Path — Guting to Bitan",
    nameZh: "古亭到碧潭",
    km: "~14 km",
    desc: "Fully car-free path following the Xindian River. Ends at the scenic Bitan suspension bridge.",
  },
  {
    name: "Danshui River Northbound",
    nameZh: "淡水河北向",
    km: "~12 km",
    desc: "Flat riverside path from Xinzhuang toward Guandu. Wide lanes, few stoplights.",
  },
  {
    name: "Da'an to Xinyi Loop",
    nameZh: "大安到信義",
    km: "~5 km",
    desc: "Urban city ride through Da'an Park, past Taipei 101, and through Xinyi nightlife district.",
  },
];

export default function UBikePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Transportation", href: "/transport" },
          { name: "Taipei",         href: "/transport/taipei" },
          { name: "YouBike 2.0",    href: "/transport/taipei/ubike" },
        ]}
      />
      <ArticleSchema
        headline="YouBike 2.0 Taipei — How to Rent, Ride & Return"
        description="Complete guide to YouBike 2.0 in Taipei: EasyCard setup, pricing tiers, how to unlock and return a bike, the dock-and-reset trick, and the best cycling routes."
        url="/transport/taipei/ubike"
        datePublished="2026-05-31"
        image="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1200&h=630&auto=format&fit=crop&q=80"
      />

      <div className="max-w-3xl mx-auto px-6">
        <Navbar />

        {/* Breadcrumb */}
        <nav className="text-xs text-ink-muted mb-6 flex items-center gap-1.5">
          <Link href="/transport" className="hover:text-terracotta-500 transition-colors">Transportation</Link>
          <span>/</span>
          <Link href="/transport/taipei" className="hover:text-terracotta-500 transition-colors">Taipei</Link>
          <span>/</span>
          <span className="text-ink-secondary">YouBike 2.0</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-jade-600 bg-jade-50 px-3 py-1 rounded-lg mb-4">
            Cycling
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-3">
            YouBike 2.0 — Taipei&apos;s City Bike
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed">
            Over 1,400 stations, NT$5 for the first 30 minutes, available around the clock. YouBike is the cheapest and most fun way to move around central Taipei.
          </p>
        </div>

        {/* Quick facts: pricing */}
        <div className="bg-parchment-warm border border-parchment-border rounded-2xl p-6 mb-12">
          <div className="flex items-start justify-between mb-4 gap-4">
            <h2 className="font-serif text-lg font-bold text-ink">Pricing — YouBike 2.0</h2>
            <span className="text-xs text-ink-muted bg-white border border-parchment-border rounded-lg px-2.5 py-1 whitespace-nowrap">
              EasyCard rate
            </span>
          </div>

          <div className="rounded-xl overflow-hidden border border-parchment-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-parchment-border">
                  <th className="text-left px-4 py-2.5 font-medium text-ink-secondary">Duration</th>
                  <th className="text-right px-4 py-2.5 font-medium text-ink-secondary">Added</th>
                  <th className="text-right px-4 py-2.5 font-medium text-ink-secondary">Running total</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, i) => (
                  <tr
                    key={tier.duration}
                    className={`border-b border-parchment-border last:border-0 ${
                      i === 0 ? "bg-jade-50/50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-2.5 text-ink">
                      {tier.duration}
                      {i === 0 && (
                        <span className="ml-2 text-[0.65rem] font-semibold uppercase tracking-wider text-jade-600 bg-jade-50 px-1.5 py-0.5 rounded-md">
                          Cheapest
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-right font-medium text-ink">{tier.extra}</td>
                    <td className="px-4 py-2.5 text-right text-ink-secondary">{tier.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-ink-muted mt-3 leading-relaxed">
            💡 <span className="font-medium">Dock-and-reset:</span> Return the bike mid-journey, wait a few seconds, then re-rent for a fresh NT$5 window. No penalty — this is how regulars use it.
          </p>
        </div>

        {/* Step-by-step */}
        <h2 className="font-serif text-2xl font-bold mb-8">How to use YouBike</h2>

        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.number}>
              {/* Step header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-jade-500 text-white
                               flex items-center justify-center font-sans font-bold text-lg leading-none mt-0.5">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-muted font-sans mt-0.5">{step.chinese}</p>
                </div>
              </div>

              {/* Photo */}
              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-5">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-ink-secondary leading-relaxed mb-4 font-sans text-[0.9375rem]">
                {step.description}
              </p>

              {/* Tip box */}
              <div className="bg-mist-50 border border-mist-500/20 rounded-xl px-4 py-3 flex gap-3">
                <span className="text-mist-600 text-lg leading-none mt-0.5" aria-hidden="true">💡</span>
                <div className="text-sm">
                  <span className="font-semibold text-mist-600">{step.tipLabel}: </span>
                  <span className="text-ink-secondary leading-relaxed">{step.tip}</span>
                </div>
              </div>

              {/* Divider between steps */}
              {step.number < steps.length && (
                <div className="flex items-center gap-3 mt-10">
                  <div className="flex-1 h-px bg-parchment-border" />
                  <span className="text-ink-muted text-xs font-sans">↓</span>
                  <div className="flex-1 h-px bg-parchment-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Popular routes */}
        <div className="mt-16 mb-12">
          <h2 className="font-serif text-2xl font-bold mb-2">Popular cycling routes</h2>
          <p className="text-ink-secondary text-sm mb-6">All accessible by YouBike from central Taipei.</p>

          <div className="space-y-3">
            {popularRoutes.map((route) => (
              <div
                key={route.name}
                className="bg-white border border-parchment-border rounded-xl p-4 flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center text-jade-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="17.5" r="3.5"/>
                    <circle cx="18.5" cy="17.5" r="3.5"/>
                    <path d="M15 6a1 1 0 0 0 0-2h-3l-3 9H5"/>
                    <path d="m9 13 2.5-7.5"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <h3 className="font-semibold text-ink text-sm">{route.name}</h3>
                    <span className="text-xs text-jade-600 font-medium">{route.km}</span>
                  </div>
                  <p className="text-xs text-ink-muted">{route.nameZh}</p>
                  <p className="text-sm text-ink-secondary mt-1 leading-relaxed">{route.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-jade-600 text-white rounded-2xl p-6 mb-12">
          <h2 className="font-serif text-xl font-bold mb-3">Before you ride, plan your stop.</h2>
          <p className="text-white/85 leading-relaxed text-sm mb-4">
            The riverside paths end near some of Taipei&apos;s best street food. Raohe Night Market is a 5-minute ride from Songshan MRT. Ningxia Night Market is 10 minutes from Zhongshan.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/night-markets/raohe"
              className="bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Raohe Night Market →
            </Link>
            <Link
              href="/cities/taipei"
              className="bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Full Taipei guide →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold mb-6">Common questions</h2>
          <div className="space-y-5 text-sm">
            {[
              {
                q: "Do I need to register before using YouBike?",
                a: "For EasyCard users, no pre-registration is required — just tap and go. For credit card payment via the YouBike app, you need to register an account and link a card. Registration takes about 2 minutes in the app.",
              },
              {
                q: "Is there a maximum rental time?",
                a: "YouBike 2.0 allows rentals up to 10 hours. After that, the bike is considered unreturned and a penalty fee applies. For practical sightseeing, the dock-and-reset approach keeps costs low on any length ride.",
              },
              {
                q: "Are helmets required by law?",
                a: "Helmets are not legally required for adults in Taipei on most roads, though they are required on highways (which you won't be on). YouBike does not provide helmets. Bring a compact foldable helmet if you plan to ride frequently.",
              },
              {
                q: "Can I take my YouBike on the MRT?",
                a: "No — bicycles are not allowed on Taipei Metro trains at any time. You must return the YouBike at a station near the MRT entrance and re-rent on the other side if needed.",
              },
              {
                q: "Can two people share a YouBike account at the same time?",
                a: "Each EasyCard can only have one active rental at a time. For two riders, use two separate EasyCards or have one person use the YouBike app with a credit card while the other uses an EasyCard.",
              },
              {
                q: "What if the bike has a mechanical problem mid-ride?",
                a: "Use the 'Report Issue' function in the YouBike app, or call the YouBike hotline (0800-221-998, 24/7). Return the bike at the nearest station — you won't be charged for the incomplete segment if you report it.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-parchment-border pb-5">
                <p className="font-semibold text-ink mb-1.5">{q}</p>
                <p className="text-ink-secondary leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
