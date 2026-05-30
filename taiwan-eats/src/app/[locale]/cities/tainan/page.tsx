import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Tainan Food Guide — Taiwan's True Food Capital",
  description: "Tainan is where Taiwanese food was born. Our guide to the dishes, stalls, and restaurants that make it the most rewarding city to eat in on the island.",
  alternates: { canonical: "/cities/tainan" },
};

const highlights = [
  { emoji: "🍱", name: "Tainan-style Lu Rou Fan", chinese: "台南滷肉飯", desc: "Sweeter, more fragrant, and served in smaller bowls than up north. Order multiple rounds." },
  { emoji: "🦪", name: "Oyster Omelette", chinese: "蚵仔煎", desc: "Tainan's version uses more oysters and a thinner egg batter. The gold standard of the dish." },
  { emoji: "🍢", name: "Milkfish Congee", chinese: "虱目魚粥", desc: "A Tainan breakfast institution. Rich, comforting, and impossible to find this good elsewhere." },
  { emoji: "🥜", name: "Coffin Bread", chinese: "棺材板", desc: "Hollowed toast filled with creamy seafood or curry. Invented in Tainan, copied everywhere." },
  { emoji: "🍮", name: "Taiwanese Shaved Ice", chinese: "剉冰", desc: "Tainan's shaved ice is denser and more flavorful than the Taipei versions. Get red bean." },
  { emoji: "🫔", name: "Spring Roll", chinese: "潤餅", desc: "Thin rice paper packed with pork, vegetables, peanut powder, and sugar. A Tainan street classic." },
];

export default function TainanPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "City Guides", href: "/cities" },
          { name: "Tainan", href: "/cities/tainan" },
        ]}
      />
      <ArticleSchema
        headline="Tainan Food Guide — Taiwan's True Food Capital"
        description="Tainan is where Taiwanese food was born. Our guide to the dishes, stalls, and restaurants that make it the most rewarding city to eat in on the island."
        url="/cities/tainan"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1571555788467-71d9e3add426?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        <section className="mb-14">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image src="https://images.unsplash.com/photo-1571555788467-71d9e3add426?w=1200&h=600&auto=format&fit=crop&q=80" alt="Tainan" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-coral-600 bg-coral-50 px-3 py-1 rounded-lg mb-4">
            City Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-3">
            Tainan <span className="font-normal text-gray-400">台南</span>
          </h1>
          <p className="text-gray-500 text-lg font-light max-w-2xl">
            Taiwan&apos;s true food capital. Smaller, slower, and more obsessed with food than anywhere else on the island. If you eat in one city in Taiwan, make it Tainan.
          </p>
        </section>

        <section className="bg-coral-50 rounded-2xl p-6 mb-14 grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-1">Best for</p>
            <p className="text-sm text-coral-900 font-medium">Street food breakfasts, historic snacks, slow food culture</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-1">Budget</p>
            <p className="text-sm text-coral-900 font-medium">NT$60–200 per meal — the best food city for budget travelers</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-1">Don't miss</p>
            <p className="text-sm text-coral-900 font-medium">Huayuan Night Market, Shennong Street, Anping District</p>
          </div>
        </section>

        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">What to eat</p>
          <h2 className="font-serif text-2xl font-bold mb-6">Tainan&apos;s essential dishes</h2>
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

        <section className="mb-14 border-l-4 border-coral-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            Tainan breakfast culture starts at 6am and the best spots sell out by 9am. Set an alarm, head to
            the streets near Chihkan Tower (赤崁樓), and follow the queues. A NT$100 breakfast in Tainan will
            be the best meal of your trip.
          </p>
        </section>

        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/huayuan" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌟 Huayuan Night Market</Link>
            <Link href="/dishes/oyster-omelette" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🦪 Oyster Omelette Guide</Link>
            <Link href="/dishes/lu-rou-fan" className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🍱 Lu Rou Fan Guide</Link>
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
