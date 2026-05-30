export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Oyster Omelette (蚵仔煎): What It Is & Where to Eat It in Taiwan",
  description: "Taiwan's most iconic night market dish explained — what goes in it, why it's polarising, and the best stalls in Taipei and Tainan.",
  alternates: { canonical: "/dishes/oyster-omelette" },
};

export default function OysterOmelettePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Dish Guides", href: "/dishes" },
          { name: "Oyster Omelette", href: "/dishes/oyster-omelette" },
        ]}
      />
      <ArticleSchema
        headline="Oyster Omelette (蚵仔煎): What It Is & Where to Eat It in Taiwan"
        description="Taiwan's most iconic night market dish explained — what goes in it, why it's polarising, and the best stalls in Taipei and Tainan."
        url="/dishes/oyster-omelette"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1761624780913-c523590ca6fa?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://images.unsplash.com/photo-1761624780913-c523590ca6fa?w=1200&h=600&auto=format&fit=crop&q=80" alt="Oyster omelette" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">Seafood</span>
            <span className="text-xs text-gray-400">5 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Oyster omelette: what it is and where to eat it
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Taiwan&apos;s most divisive night market dish. Some love it on first bite; others need three tries. Here&apos;s what you&apos;re actually eating, and how to find a good version.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">What is it?</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Oyster omelette (蚵仔煎, ô-á-chian in Taiwanese Hokkien) is a dish of small oysters cooked with egg and
              a starchy batter made from sweet potato starch and water. The starch creates a distinctly gelatinous,
              chewy texture that takes some getting used to. It&apos;s topped with a sweet-savory tomato-and-chili sauce
              and a handful of leafy greens, usually chrysanthemum or spinach.
            </p>
            <p>
              The texture is the point of controversy: the starchy batter doesn&apos;t become crispy like a western omelette —
              it stays soft, slightly sticky, and bouncy. Think of it more as an oyster pancake than an egg dish.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">What separates good from bad</h2>
          <div className="space-y-3">
            {[
              { label: "Oyster quality", good: "Small, briny, freshly shucked — from the coast, not frozen.", bad: "Large, pre-frozen, tasteless. A common shortcut at tourist-facing stalls." },
              { label: "Starch ratio", good: "Enough starch to bind without overwhelming. You should taste the oysters through the batter.", bad: "Too much starch — the dish becomes a gelatinous mass where the oysters disappear." },
              { label: "The sauce", good: "House-made, slightly sweet and tangy, with real tomato flavor.", bad: "Bottled ketchup-adjacent sauce. You can tell immediately." },
              { label: "The greens", good: "Added at the last moment, still slightly fresh with some crunch.", bad: "Overcooked and wilted, mixed into the batter too early." },
            ].map((item) => (
              <div key={item.label} className="border border-gray-100 rounded-xl p-5">
                <p className="font-medium text-gray-900 mb-2">{item.label}</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-green-600 font-medium mb-1">Good sign</p>
                    <p className="text-gray-600">{item.good}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-red-500 font-medium mb-1">Red flag</p>
                    <p className="text-gray-600">{item.bad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">Where to eat it</h2>
          <div className="space-y-4">
            {[
              { name: "Ah Chun Shandong Dumpling", chinese: "海安路蚵仔煎", location: "Tainan", note: "The best in Taiwan, by consensus. Tainan oysters are fresher, the portions are larger, and the sauce recipe has been unchanged for decades." },
              { name: "Ningxia Night Market stalls", chinese: "寧夏夜市", location: "Taipei", note: "The best Taipei option. Multiple vendors, genuine competition, fresh ingredients. NT$60–80 per plate." },
              { name: "Shilin Night Market", chinese: "士林夜市", location: "Taipei", note: "The tourist default. Not the best but accessible. Quality varies widely by stall — look for one with a visible queue of locals." },
            ].map((spot) => (
              <div key={spot.name} className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-1">
                  <div>
                    <span className="font-medium text-gray-900">{spot.name}</span>
                    <span className="text-xs text-gray-400 ml-2">{spot.chinese}</span>
                  </div>
                  <span className="text-xs text-gray-400">{spot.location}</span>
                </div>
                <p className="text-sm text-gray-500">{spot.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 border-l-4 border-amber-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-2">How to order</p>
          <p className="text-gray-700 leading-relaxed">
            Just point and say &quot;一份&quot; (yī fèn — one portion). It will come plated. Eat it immediately — the starch
            firms up as it cools and the texture becomes unpleasant. This is a hot-and-fresh dish only.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Keep exploring</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/shilin" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 Shilin Night Market</Link>
            <Link href="/cities/tainan" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Tainan Guide</Link>
            <Link href="/dishes" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🍜 All Dish Guides</Link>
          </div>
        </section>

        <div className="mb-10">
          <NewsletterSignup />
        </div>
      </div>
      <Footer />
    </main>
  );
}
