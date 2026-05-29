import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Raohe Night Market: Smaller, Better, Less Crowded",
  description: "Why Taipei locals prefer Raohe over Shilin — a guide to the compact night market that punches above its weight on food quality.",
  alternates: { canonical: "/night-markets/raohe" },
};

export default function RaohePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Night Markets", href: "/night-markets" },
          { name: "Raohe Night Market", href: "/night-markets/raohe" },
        ]}
      />
      <ArticleSchema
        headline="Raohe Night Market: Smaller, Better, Less Crowded"
        description="Why Taipei locals prefer Raohe over Shilin — a guide to the compact night market that punches above its weight on food quality."
        url="/night-markets/raohe"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1613019435367-6adf98fb2e44?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://images.unsplash.com/photo-1613019435367-6adf98fb2e44?w=1200&h=600&auto=format&fit=crop&q=80" alt="Raohe Night Market" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-coral-600 bg-coral-50 px-3 py-1 rounded-lg">Night Market · Taipei</span>
            <span className="text-xs text-gray-400">7 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Raohe Night Market: smaller, better, less crowded
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Raohe doesn&apos;t get the same tourist traffic as Shilin — and that&apos;s exactly why the food is better.
          </p>
        </div>

        <section className="bg-coral-50 rounded-2xl p-6 mb-10 grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-1">Getting there</p>
            <p className="text-sm text-coral-900">MRT Green Line → Songshan Station (松山). Exit 5, 5-min walk.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-1">Hours</p>
            <p className="text-sm text-coral-900">5pm–midnight daily. Best on weeknights.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-1">Layout</p>
            <p className="text-sm text-coral-900">Single street, 600m end to end. Easy to walk twice in an hour.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">The one thing you must eat</h2>
          <div className="bg-amber-50 rounded-2xl p-6 mb-4">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🥮</span>
              <div>
                <h3 className="font-serif text-xl font-bold mb-1">Fuzhou Pepper Bun <span className="text-base font-normal text-gray-400">福州胡椒餅</span></h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  A baked bun stuffed with a generous amount of chopped pork and scallions, heavily seasoned with
                  white pepper. The buns are cooked stuck to the inside wall of a clay oven — the outside gets charred
                  and crackly while the inside stays incredibly juicy.
                </p>
                <p className="text-xs text-gray-500">Queue at the first stall on the right as you enter from the Songshan Temple end. NT$55 each. The queue moves fast — it&apos;s worth every minute.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">What else to order</h2>
          <div className="space-y-3">
            {[
              { emoji: "🦐", name: "Shrimp rolls", chinese: "蝦捲", desc: "Crispy shrimp rolls fried to order. Better quality protein than most Shilin versions." },
              { emoji: "🍡", name: "Sausage in sticky rice", chinese: "大腸包小腸", desc: "A pork sausage tucked inside a grilled glutinous rice cylinder. Serve with garlic, pickles, and chili." },
              { emoji: "🧃", name: "Sugarcane juice", chinese: "甘蔗汁", desc: "Pressed fresh in front of you. Ridiculously refreshing. The green stalks in the cart are not decorative." },
              { emoji: "🥜", name: "Peanut ice cream roll", chinese: "花生捲冰淇淋", desc: "Ice cream, peanut brittle shavings, and coriander (optional) wrapped in a paper-thin pastry. NT$60." },
            ].map((item) => (
              <div key={item.name} className="flex gap-3 items-start py-2 border-b border-gray-50">
                <span className="text-xl mt-0.5">{item.emoji}</span>
                <div>
                  <span className="font-medium text-gray-900 text-sm">{item.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{item.chinese}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 border-l-4 border-coral-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-2">Pro tip</p>
          <p className="text-gray-700 leading-relaxed">
            Start at the Ciyou Temple (慈祐宮) end and walk toward Bade Road. The temple is worth a 10-minute stop —
            the incense and lanterns at dusk are genuinely beautiful. Then eat your way back the way you came.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/shilin-vs-raohe" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">⚔️ Shilin vs Raohe</Link>
            <Link href="/night-markets/shilin" className="bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 Shilin Guide</Link>
          </div>
        </section>

        <div className="mb-10"><NewsletterSignup /></div>
      </div>
      <Footer />
    </main>
  );
}
