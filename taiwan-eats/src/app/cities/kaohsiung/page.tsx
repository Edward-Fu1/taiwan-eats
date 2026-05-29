import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Kaohsiung Food Guide — Seafood & Harbour Eats",
  description: "Taiwan's second city and its best seafood. A guide to eating in Kaohsiung — from Liuhe Night Market to the harbour restaurants most visitors miss.",
  alternates: { canonical: "/cities/kaohsiung" },
};

const highlights = [
  { emoji: "🦐", name: "Shrimp Paste Noodles", chinese: "蝦醬麵", desc: "Kaohsiung's most iconic noodle dish. The shrimp paste broth is intensely savory and completely addictive." },
  { emoji: "🐟", name: "Fresh Seafood Grills", chinese: "海鮮燒烤", desc: "Walk up to the tank, point at what you want, and it's grilled within minutes. Liuhe Night Market is ground zero." },
  { emoji: "🍢", name: "Stinky Tofu", chinese: "臭豆腐", desc: "Kaohsiung does a deep-fried version that's crispy outside, custardy inside. The smell is a feature, not a bug." },
  { emoji: "🥘", name: "Sand Pot Congee", chinese: "砂鍋粥", desc: "A Hakka-influenced specialty — thick, rich congee cooked in a clay pot with your choice of seafood or pork." },
  { emoji: "🧆", name: "Taro Balls", chinese: "芋圓", desc: "Chewy, purple, and satisfying. Served hot or cold with red bean, grass jelly, or shaved ice." },
  { emoji: "🦑", name: "Squid Thick Soup", chinese: "花枝羹", desc: "A southern Taiwan staple — thick, starchy broth with squid chunks and glass noodles. Best at Liuhe market." },
];

export default function KaohsiungPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "City Guides", href: "/cities" },
          { name: "Kaohsiung", href: "/cities/kaohsiung" },
        ]}
      />
      <ArticleSchema
        headline="Kaohsiung Food Guide — Seafood & Harbour Eats"
        description="Taiwan's second city and its best seafood. A guide to eating in Kaohsiung — from Liuhe Night Market to the harbour restaurants most visitors miss."
        url="/cities/kaohsiung"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1729347402512-0ef428731e36?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        <section className="mb-14">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image src="https://images.unsplash.com/photo-1729347402512-0ef428731e36?w=1200&h=600&auto=format&fit=crop&q=80" alt="Kaohsiung" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-lg mb-4">
            City Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-3">
            Kaohsiung <span className="font-normal text-gray-400">高雄</span>
          </h1>
          <p className="text-gray-500 text-lg font-light max-w-2xl">
            Taiwan&apos;s port city is a seafood lover&apos;s paradise. Fresher catches, lower prices, and a raw harbor-side energy you won&apos;t find up north.
          </p>
        </section>

        <section className="bg-amber-50 rounded-2xl p-6 mb-14 grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-1">Best for</p>
            <p className="text-sm text-amber-900 font-medium">Fresh seafood, night market grills, harbor dining</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-1">Budget</p>
            <p className="text-sm text-amber-900 font-medium">NT$100–400 for seafood; cheaper than Taipei for equivalent quality</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-1">Don't miss</p>
            <p className="text-sm text-amber-900 font-medium">Liuhe Night Market, Cijin Island, Zuoying seafood street</p>
          </div>
        </section>

        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">What to eat</p>
          <h2 className="font-serif text-2xl font-bold mb-6">Kaohsiung&apos;s essential dishes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {highlights.map((dish) => (
              <div key={dish.name} className="border border-gray-100 rounded-xl p-5">
                <div className="text-3xl mb-3">{dish.emoji}</div>
                <h3 className="font-medium text-gray-900 mb-0.5">{dish.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{dish.chinese}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 border-l-4 border-amber-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            Take the ferry to Cijin Island (旗津) for the best seafood lunch in Kaohsiung. The crossing costs
            NT$40 and takes 10 minutes. Once there, walk the main drag — every other storefront is a seafood
            restaurant and prices are aggressively reasonable. Go before 1pm to avoid weekend crowds.
          </p>
        </section>

        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/liuhe" className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🦐 Liuhe Night Market</Link>
            <Link href="/experiences" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🧑‍🍳 Food Experiences</Link>
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
