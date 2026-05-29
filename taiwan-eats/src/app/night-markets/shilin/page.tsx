import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Shilin Night Market: The Complete Guide (2026)",
  description: "Everything you need to know about Taipei's most famous night market — what to eat, what to skip, and how to navigate the crowd like a regular.",
  alternates: { canonical: "/night-markets/shilin" },
};

const mustEat = [
  { emoji: "🍗", name: "XXL Fried Chicken", chinese: "大雞排", desc: "The Shilin original. Whole chicken breast, bigger than your face, NT$70–90. Order from the original stall, not the copies." },
  { emoji: "🦪", name: "Oyster Omelette", chinese: "蚵仔煎", desc: "Multiple vendors compete. Look for the one with the longest queue of locals, not the one with the English menu." },
  { emoji: "🍢", name: "Stinky Tofu", chinese: "臭豆腐", desc: "Fried version here is excellent. Crispy outside, soft inside, served with sweet chili sauce and fermented cabbage." },
  { emoji: "🌽", name: "Grilled Corn", chinese: "烤玉米", desc: "Brushed with soy butter and grilled over charcoal. Simple, perfect, NT$50." },
  { emoji: "🧃", name: "Fresh Fruit Juice", chinese: "現打果汁", desc: "Any tropical fruit you can name, pressed to order. Get the passion fruit or guava." },
];

export default function ShilinPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Night Markets", href: "/night-markets" },
          { name: "Shilin Night Market", href: "/night-markets/shilin" },
        ]}
      />
      <ArticleSchema
        headline="Shilin Night Market: The Complete Guide (2026)"
        description="Everything you need to know about Taipei's most famous night market — what to eat, what to skip, and how to navigate the crowd like a regular."
        url="/night-markets/shilin"
        datePublished="2026-05-29"
        image="https://picsum.photos/seed/shilin-night/1200/630"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://picsum.photos/seed/shilin-market/1200/600" alt="Shilin Night Market" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">Night Market · Taipei</span>
            <span className="text-xs text-gray-400">10 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Shilin Night Market: the complete guide
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Taiwan&apos;s most visited night market. Enormous, overwhelming, and genuinely worth it — if you know where to go.
          </p>
        </div>

        <section className="bg-blue-50 rounded-2xl p-6 mb-10 grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Getting there</p>
            <p className="text-sm text-blue-900">MRT Red Line → Jiantan Station (劍潭). Exit 1, turn right.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Hours</p>
            <p className="text-sm text-blue-900">4pm–midnight most days. Busiest 7–10pm on weekends.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Budget</p>
            <p className="text-sm text-blue-900">NT$300–600 for a full meal of 5–6 snacks.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">What to eat</h2>
          <div className="space-y-4">
            {mustEat.map((item) => (
              <div key={item.name} className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">{item.emoji}</span>
                <div>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="text-xs text-gray-400">{item.chinese}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">The underground food court</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Shilin has two distinct areas: the street stalls around the main market building, and the underground food court (地下美食區) beneath it. The underground section is less known to tourists and significantly better for sit-down eating.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Head downstairs for: oyster vermicelli (蚵仔麵線), pork blood soup (豬血湯), and braised pork rice. These are the dishes that locals actually come to Shilin for — not the XXL chicken.
          </p>
        </section>

        <section className="mb-10 border-l-4 border-blue-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            Go on a Tuesday or Wednesday evening. The market is still fully operational but the tourist crowds drop by half. You&apos;ll actually be able to eat without maneuvering through selfie sticks.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/shilin-vs-raohe" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">⚔️ Shilin vs Raohe</Link>
            <Link href="/night-markets/raohe" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏮 Raohe Guide</Link>
            <Link href="/cities/taipei" className="bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Taipei Guide</Link>
          </div>
        </section>

        <div className="mb-10"><NewsletterSignup /></div>
      </div>
      <Footer />
    </main>
  );
}
