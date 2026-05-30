export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Taichung Food Guide — Cafés, Bubble Tea & Night Life",
  description: "Taichung pioneered café culture in Taiwan and is the birthplace of bubble tea. Our guide to eating and drinking in the island's most creative food city.",
  alternates: { canonical: "/cities/taichung" },
};

const highlights = [
  { emoji: "☕", name: "Third-Wave Coffee", chinese: "精品咖啡", desc: "Taichung is Taiwan's coffee capital. The city has more specialty cafes per capita than Tokyo." },
  { emoji: "🧁", name: "Sun Cakes", chinese: "太陽餅", desc: "Taichung's most famous souvenir. Flaky pastry filled with sweet malt sugar — buy directly from makers, not tourist shops." },
  { emoji: "🍢", name: "Wheel Cakes", chinese: "車輪餅", desc: "Crispy, fish-shaped waffles stuffed with red bean, custard, or taro. Best eaten immediately off the griddle." },
  { emoji: "🥩", name: "Black Tea Beef Noodles", chinese: "紅茶牛肉麵", desc: "A Taichung specialty — the broth is infused with black tea for a subtler, more complex flavor than Taipei's version." },
  { emoji: "🌮", name: "Rice Sausage in Sticky Rice", chinese: "大腸包小腸", desc: "A grilled pork sausage tucked inside a glutinous rice sausage. Street food at its most Taiwanese." },
  { emoji: "🧃", name: "Spring Onion Milk", chinese: "蔥牛奶", desc: "Sounds wrong, tastes right. A Taichung institution — creamy milk with green onion oil. Don't knock it till you try it." },
];

export default function TaichungPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "City Guides", href: "/cities" },
          { name: "Taichung", href: "/cities/taichung" },
        ]}
      />
      <ArticleSchema
        headline="Taichung Food Guide — Cafés, Bubble Tea & Night Life"
        description="Taichung pioneered café culture in Taiwan and is the birthplace of bubble tea. Our guide to eating and drinking in the island's most creative food city."
        url="/cities/taichung"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1596517447156-4408f27791ae?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        <section className="mb-14">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image src="https://images.unsplash.com/photo-1596517447156-4408f27791ae?w=1200&h=600&auto=format&fit=crop&q=80" alt="Taichung" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1 rounded-lg mb-4">
            City Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-3">
            Taichung <span className="font-normal text-gray-400">台中</span>
          </h1>
          <p className="text-gray-500 text-lg font-light max-w-2xl">
            Taiwan&apos;s second city has quietly become its coolest food destination. World-class cafes, creative dining, and a night market scene that punches above its weight.
          </p>
        </section>

        <section className="bg-green-50 rounded-2xl p-6 mb-14 grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-1">Best for</p>
            <p className="text-sm text-green-900 font-medium">Coffee culture, creative restaurants, night market snacks</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-1">Budget</p>
            <p className="text-sm text-green-900 font-medium">NT$100–300 per meal; cafes from NT$150 for a pour-over</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-1">Don't miss</p>
            <p className="text-sm text-green-900 font-medium">Fengjia Night Market, West District cafes, Miyahara Ice Cream</p>
          </div>
        </section>

        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">What to eat</p>
          <h2 className="font-serif text-2xl font-bold mb-6">Taichung&apos;s essential dishes</h2>
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

        <section className="mb-14 border-l-4 border-green-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            The West District (西區) is where the serious cafe-hopping happens. Dedicate a morning to walking
            Gongyuan Road and the surrounding lanes — you&apos;ll find roasters, all-day brunch spots, and some of
            the most photogenic interiors in Taiwan. Don&apos;t rush.
          </p>
        </section>

        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes/bubble-tea-guide" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🧋 Bubble Tea Guide</Link>
            <Link href="/experiences" className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🧑‍🍳 Food Experiences</Link>
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
