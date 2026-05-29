import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "How to Order Bubble Tea Like a Local in Taiwan",
  description: "A complete guide to ordering bubble tea in Taiwan — sweetness levels, ice levels, and the brands worth the queue. Everything you need to know before you order.",
  alternates: { canonical: "/dishes/bubble-tea-guide" },
};

const types = [
  { emoji: "🧋", name: "Classic Milk Tea", chinese: "珍珠奶茶", desc: "Black tea with creamer (not real milk at most shops) and tapioca pearls. The original. Still the best." },
  { emoji: "🍵", name: "Tieguanyin Milk Tea", chinese: "鐵觀音奶茶", desc: "Made with roasted oolong instead of black tea. Deeper, more complex, slightly nutty. The connoisseur's choice." },
  { emoji: "🥛", name: "Fresh Milk Tea", chinese: "鮮奶茶", desc: "Real fresh milk instead of creamer. Costs more, tastes better. Worth the upgrade at any serious shop." },
  { emoji: "🍋", name: "Lemon Green Tea", chinese: "檸檬綠茶", desc: "No milk. Refreshing, tart, and criminally underrated. The best hot-weather order." },
  { emoji: "🟤", name: "Brown Sugar Milk Tea", chinese: "黑糖鮮奶茶", desc: "Tiger-stripe caramel, fresh milk, tapioca pearls. Instagram-famous for a reason — but skip the tourist traps." },
  { emoji: "🍑", name: "Passion Fruit Green Tea", chinese: "百香果綠茶", desc: "A Taiwanese staple you won't find abroad. Bright, tropical, and naturally sweet. No milk needed." },
];

export default function BubbleTeaGuidePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Dish Guides", href: "/dishes" },
          { name: "Bubble Tea Guide", href: "/dishes/bubble-tea-guide" },
        ]}
      />
      <ArticleSchema
        headline="How to Order Bubble Tea Like a Local in Taiwan"
        description="A complete guide to ordering bubble tea in Taiwan — sweetness levels, ice levels, and the brands worth the queue. Everything you need to know before you order."
        url="/dishes/bubble-tea-guide"
        datePublished="2026-05-29"
        image="https://picsum.photos/seed/bubble-drink/1200/630"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://picsum.photos/seed/bubble-drink/1200/600" alt="Bubble tea" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">Drink Guide</span>
            <span className="text-xs text-gray-400">5 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Ordering bubble tea like a local
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Bubble tea was invented in Taiwan in the 1980s and it&apos;s been perfected here ever since. Here&apos;s how to navigate the menu without defaulting to whatever sounds familiar.
          </p>
        </div>

        {/* Sweetness/Ice guide */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">The sweetness & ice system</h2>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            Every Taiwanese bubble tea shop lets you customize sweetness and ice level. Most tourists order full-sweet, full-ice and wonder why it tastes like sugar syrup. Here&apos;s what locals actually order:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 rounded-xl p-5">
              <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-3">Sweetness levels</p>
              <div className="space-y-2 text-sm">
                {[
                  { level: "全糖 (100%)", label: "Full sweet — tourist default. Too much." },
                  { level: "少糖 (50%)", label: "Half sweet — the local standard." },
                  { level: "微糖 (25%)", label: "Light sweet — lets the tea shine." },
                  { level: "無糖 (0%)", label: "No sugar — for purists only." },
                ].map((s) => (
                  <div key={s.level}>
                    <span className="font-medium text-gray-800">{s.level}</span>
                    <span className="text-gray-500 block text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3">Ice levels</p>
              <div className="space-y-2 text-sm">
                {[
                  { level: "正常冰", label: "Normal ice — dilutes the tea." },
                  { level: "少冰 (50%)", label: "Less ice — recommended." },
                  { level: "微冰 (30%)", label: "Light ice — the sweet spot." },
                  { level: "去冰", label: "No ice — room temp, full flavor." },
                ].map((s) => (
                  <div key={s.level}>
                    <span className="font-medium text-gray-800">{s.level}</span>
                    <span className="text-gray-500 block text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-l-4 border-amber-400 pl-5">
            <p className="text-sm text-gray-700"><span className="font-medium">Local default:</span> 少糖 (50% sweet), 微冰 (30% ice). This is what regulars order without thinking about it.</p>
          </div>
        </section>

        {/* Types */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">What to actually order</h2>
          <div className="space-y-4">
            {types.map((t) => (
              <div key={t.name} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mt-0.5">{t.emoji}</span>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-medium text-gray-900">{t.name}</span>
                    <span className="text-xs text-gray-400">{t.chinese}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where to go */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">Where to go</h2>
          <div className="space-y-3">
            {[
              { name: "Chun Shui Tang", chinese: "春水堂", note: "Claims to have invented bubble tea in 1986. Classic recipe, slightly sweet. Good starting point." },
              { name: "Tiger Sugar", chinese: "老虎堂", note: "The brown sugar tiger stripe original. Long queues, worth it once." },
              { name: "Yifang Taiwan Fruit Tea", chinese: "一芳台灣水果茶", note: "Fresh fruit teas using Taiwanese fruit. Lighter and more seasonal than milk tea chains." },
              { name: "50 Lan", chinese: "50嵐", note: "The local chain everyone drinks. No frills, consistent, NT$50–80. Order the Assam milk tea." },
            ].map((shop) => (
              <div key={shop.name} className="py-3 border-b border-gray-50">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="font-medium text-gray-900">{shop.name}</span>
                  <span className="text-xs text-gray-400">{shop.chinese}</span>
                </div>
                <p className="text-sm text-gray-500">{shop.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Keep exploring</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🍜 All Dish Guides</Link>
            <Link href="/cities/taipei" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Taipei Guide</Link>
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
