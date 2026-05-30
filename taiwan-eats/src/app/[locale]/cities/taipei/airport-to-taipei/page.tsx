export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Taoyuan Airport to Taipei Main Station — Step-by-Step Guide",
  description:
    "The easiest way from Taoyuan International Airport to Taipei Main Station — Airport MRT directions, ticket prices, train times, and what to do when you arrive.",
  alternates: { canonical: "/cities/taipei/airport-to-taipei" },
};

const steps = [
  {
    number: 1,
    title: "Clear customs and collect your luggage",
    chinese: "通關取行李",
    description:
      "Once your flight lands at Terminal 1 or Terminal 2, follow the signs for Immigration (入境) and Baggage Claim (行李提領). After clearing customs, you'll exit into the public arrivals hall. Both terminals have the Airport MRT directly below — you don't need to go outside or take a shuttle bus.",
    tip: "Terminal 2 (T2) handles most international flights. The MRT station entrance is clearly signposted from the arrivals hall — look for the purple MRT logo.",
    tipLabel: "Which terminal?",
    image: "https://images.unsplash.com/photo-1761047321158-704dbd1b8612?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Airport arrivals area with passengers",
  },
  {
    number: 2,
    title: "Follow signs to the Airport MRT",
    chinese: "找機場捷運",
    description:
      "In the arrivals hall, look for signs reading 機場捷運 (Airport MRT) or the purple diamond-shaped MRT logo. The station entrance is a short walk from the customs exit — take the escalators or elevators down one or two levels. The platform is underground.",
    tip: "The signs are bilingual (English and Chinese). If you see 捷運 anywhere, you're heading the right way. Station codes: Terminal 1 = A12, Terminal 2 = A13.",
    tipLabel: "Sign to look for",
    image: "https://images.unsplash.com/photo-1621961909513-ae933b999322?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Airport MRT station exterior",
  },
  {
    number: 3,
    title: "Buy your ticket at the machines",
    chinese: "買票",
    description:
      "At the ticketing area, use the automated machines (they have English language options — tap the flag icon). Select Taipei Main Station (台北車站 / A1) as your destination. The fare is NT$160 for the Express train or NT$150 for the Commuter train. Machines accept cash (coins and NT$100/500/1000 bills) and most credit cards.",
    tip: "If you have an EasyCard (悠遊卡) from a previous visit, you can tap in directly and save a few dollars. EasyCards are also available for purchase at the ticket machines.",
    tipLabel: "Save with EasyCard",
    image: "https://images.unsplash.com/photo-1580360465223-c8504d08dce9?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Commuters at transit station ticket area",
  },
  {
    number: 4,
    title: "Choose Express or Commuter — and board",
    chinese: "搭直達車或普通車",
    description:
      "Two types of trains run on this line. The Express (直達車) goes directly to Taipei Main Station in about 35 minutes with no stops in between — this is what most visitors take. The Commuter (普通車) takes around 50 minutes and stops at intermediate stations. Express trains are purple and marked 直達車 on the platform displays. Trains depart roughly every 15–30 minutes.",
    tip: "The Express train requires you to sit in a reserved seat — your ticket has a seat assignment. The train is quiet, air-conditioned, and has luggage racks by the doors. Arrive 5 minutes before departure.",
    tipLabel: "Express seats are assigned",
    image: "https://images.unsplash.com/photo-1622037715943-5fb336a079e5?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Airport MRT Express train on the tracks",
  },
  {
    number: 5,
    title: "Ride 35 minutes to Taipei",
    chinese: "搭車前往台北",
    description:
      "Sit back. The Express train runs smoothly and the views shift from industrial airport surroundings to the dense Taipei cityscape as you approach the city. There is free WiFi on board (network: TPE-Free). Announcements are made in Mandarin, Hakka, Taiwanese, and English. Your stop is the final one: A1 Taipei Main Station.",
    tip: "The train passes through Taoyuan city and several suburban stations before entering Taipei. Keep an eye on the digital display above the doors — Taipei Main Station is station A1, the end of the line.",
    tipLabel: "Free WiFi on board",
    image: "https://images.unsplash.com/photo-1614244291075-860b24e0b5a3?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Passenger on the MRT train",
  },
  {
    number: 6,
    title: "Arrive at Taipei Main Station",
    chinese: "抵達台北車站",
    description:
      "You've arrived. Taipei Main Station (台北車站) is the transport hub of the city — from here you can connect to the Taipei Metro (red and green lines), Taiwan Railways (TRA), and the High Speed Rail (HSR/高鐵) to cities further south like Taichung, Tainan, and Kaohsiung. Most hotels in central Taipei are a short taxi or one MRT stop away.",
    tip: "The station is large and can feel overwhelming. For the Taipei Metro, follow signs for 捷運 (MRT). For taxis, exit via the main street-level exits — official taxi stands are marked. Avoid touts offering rides inside the station.",
    tipLabel: "Connecting onward",
    image: "https://images.unsplash.com/photo-1614091292491-2e9c552474f3?w=900&h=500&auto=format&fit=crop&q=80",
    imageAlt: "Train at Taipei Main Station",
  },
];

export default function AirportToTaipeiPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "City Guides", href: "/cities" },
          { name: "Taipei", href: "/cities/taipei" },
          { name: "Airport to Taipei Main", href: "/cities/taipei/airport-to-taipei" },
        ]}
      />
      <ArticleSchema
        headline="Taoyuan Airport to Taipei Main Station — Step-by-Step Guide"
        description="The easiest way from Taoyuan International Airport to Taipei Main Station — Airport MRT directions, ticket prices, train times, and what to do when you arrive."
        url="/cities/taipei/airport-to-taipei"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1622037715943-5fb336a079e5?w=1200&h=630&auto=format&fit=crop&q=80"
      />

      <div className="max-w-3xl mx-auto px-6">
        <Navbar />

        {/* Breadcrumb */}
        <nav className="text-xs text-ink-muted mb-6 flex items-center gap-1.5">
          <Link href="/cities" className="hover:text-terracotta-500 transition-colors">City Guides</Link>
          <span>/</span>
          <Link href="/cities/taipei" className="hover:text-terracotta-500 transition-colors">Taipei</Link>
          <span>/</span>
          <span className="text-ink-secondary">Airport Transfer</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-mist-600 bg-mist-50 px-3 py-1 rounded-lg mb-4">
            Travel Guide
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-3">
            Taoyuan Airport → Taipei Main Station
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed">
            The Airport MRT is the fastest, cheapest, and most straightforward way into the city. Here&apos;s every step, from customs to Taipei Main.
          </p>
        </div>

        {/* Quick facts comparison */}
        <div className="bg-parchment-warm border border-parchment-border rounded-2xl p-6 mb-12">
          <h2 className="font-serif text-lg font-bold text-ink mb-4">Your options at a glance</h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            {/* MRT — recommended */}
            <div className="bg-white rounded-xl p-4 border-2 border-terracotta-500 relative">
              <span className="absolute -top-2.5 left-3 bg-terracotta-500 text-white text-[0.6rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
                Recommended
              </span>
              <p className="font-semibold text-ink mb-2 mt-1">🚆 Airport MRT</p>
              <ul className="text-ink-secondary space-y-1 leading-relaxed">
                <li><span className="font-medium text-ink">Time:</span> ~35 min (Express)</li>
                <li><span className="font-medium text-ink">Cost:</span> NT$160</li>
                <li><span className="font-medium text-ink">Hours:</span> ~6am – midnight</li>
                <li><span className="font-medium text-ink">Runs:</span> Every 15–30 min</li>
              </ul>
            </div>

            {/* Bus */}
            <div className="bg-white rounded-xl p-4 border border-parchment-border">
              <p className="font-semibold text-ink mb-2">🚌 Bus 1819</p>
              <ul className="text-ink-secondary space-y-1 leading-relaxed">
                <li><span className="font-medium text-ink">Time:</span> 60–90 min</li>
                <li><span className="font-medium text-ink">Cost:</span> NT$125–145</li>
                <li><span className="font-medium text-ink">Hours:</span> 24 hours</li>
                <li><span className="font-medium text-ink">Runs:</span> Every 15–20 min</li>
              </ul>
            </div>

            {/* Taxi */}
            <div className="bg-white rounded-xl p-4 border border-parchment-border">
              <p className="font-semibold text-ink mb-2">🚕 Taxi / Uber</p>
              <ul className="text-ink-secondary space-y-1 leading-relaxed">
                <li><span className="font-medium text-ink">Time:</span> 40–60 min</li>
                <li><span className="font-medium text-ink">Cost:</span> NT$1,200–1,500</li>
                <li><span className="font-medium text-ink">Hours:</span> 24 hours</li>
                <li><span className="font-medium text-ink">Book:</span> Official stand or app</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-step */}
        <h2 className="font-serif text-2xl font-bold mb-8">Step-by-step: Airport MRT</h2>

        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.number}>
              {/* Step header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta-500 text-white
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

              {/* Divider between steps (not after last) */}
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

        {/* You've arrived */}
        <div className="mt-16 bg-terracotta-500 text-white rounded-2xl p-6">
          <h2 className="font-serif text-xl font-bold mb-3">You&apos;re in Taipei. Now eat something.</h2>
          <p className="text-white/85 leading-relaxed text-sm mb-4">
            Taipei Main Station is surrounded by food. The underground mall (台北地下街) has everything from beef noodle soup to scallion pancakes. You&apos;re 20 minutes from Shilin Night Market and 10 minutes from Raohe.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/dishes/beef-noodle-soup-taipei"
              className="bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Best beef noodle soup →
            </Link>
            <Link
              href="/night-markets/shilin"
              className="bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Shilin Night Market →
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
        <div className="mt-12 mb-16">
          <h2 className="font-serif text-2xl font-bold mb-6">Common questions</h2>
          <div className="space-y-5 text-sm">
            {[
              {
                q: "Does the Airport MRT run 24 hours?",
                a: "No — service runs roughly 6:00 AM to midnight from the airport, and slightly earlier to midnight from Taipei. If your flight arrives late at night, take a taxi or the 1819 bus (which runs 24 hours).",
              },
              {
                q: "Can I bring large luggage on the MRT?",
                a: "Yes. The Airport MRT has dedicated luggage racks at the ends of each carriage and near the doors. There is no luggage size restriction, and the trains are spacious enough for international-sized suitcases.",
              },
              {
                q: "Is there free WiFi at the airport and on the train?",
                a: "Yes to both. The airport has iTaiwan and Airport WiFi. On the train, connect to TPE-Free — no password required, though speed varies.",
              },
              {
                q: "What's the first food stop near Taipei Main?",
                a: "The basement food court at Shin Kong Mitsukoshi (新光三越, directly across the street) is excellent and open late. Or walk 10 minutes to Ningxia Night Market (寧夏夜市) for some of the best lu rou fan in the city.",
              },
              {
                q: "I'm arriving at Terminal 1 — is it different?",
                a: "The process is identical. Terminal 1 station is A12 (one stop before Terminal 2 at A13). Both connect to the same Airport MRT line heading to Taipei Main (A1).",
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
