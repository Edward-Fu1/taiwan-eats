import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Taipei Food Guide — Where to Eat in Taiwan's Capital",
  description: "Where to eat in Taipei — from beef noodle soup to xiao long bao to the best night markets. A deep-dive guide written by people who live here.",
  alternates: { canonical: "/cities/taipei" },
};

const highlights = [
  { emoji: "🍜", name: "Beef Noodle Soup", chinese: "牛肉麵", desc: "Taipei's signature dish. Rich braised broth, hand-pulled noodles, melt-off-the-bone beef." },
  { emoji: "🥟", name: "Xiao Long Bao", chinese: "小籠包", desc: "Soup dumplings done right. Go beyond Din Tai Fung and explore the neighborhood specialists." },
  { emoji: "🧋", name: "Bubble Tea", chinese: "珍珠奶茶", desc: "Born in Taipei. Order it at the source — sweetness level 50%, ice level 30%." },
  { emoji: "🥞", name: "Scallion Pancake", chinese: "蔥抓餅", desc: "The best breakfast for NT$50. Crispy, flaky, egg optional but recommended." },
  { emoji: "🍱", name: "Lu Rou Fan", chinese: "滷肉飯", desc: "Braised pork rice — Taipei's ultimate comfort food, available around the clock." },
  { emoji: "🦪", name: "Oyster Vermicelli", chinese: "蚵仔麵線", desc: "Sticky, savory, and polarizing. A Taipei night market essential." },
];

const neighborhoods = [
  { name: "Da'an", chinese: "大安", desc: "Upscale cafes, Japanese-influenced restaurants, and the best ramen outside Japan." },
  { name: "Zhongshan", chinese: "中山", desc: "Sleek bars, creative Taiwanese cuisine, and dense with rooftop dining options." },
  { name: "Wanhua", chinese: "萬華", desc: "Old Taipei. Cheap, authentic, and the spiritual home of the pork belly rice bowl." },
  { name: "Xinyi", chinese: "信義", desc: "High-end malls, rooftop restaurants, and the highest concentration of Michelin spots." },
];

export default function TaipeiPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "City Guides", href: "/cities" },
          { name: "Taipei", href: "/cities/taipei" },
        ]}
      />
      <ArticleSchema
        headline="Taipei Food Guide — Where to Eat in Taiwan's Capital"
        description="Where to eat in Taipei — from beef noodle soup to xiao long bao to the best night markets. A deep-dive guide written by people who live here."
        url="/cities/taipei"
        datePublished="2026-05-29"
        image="https://plus.unsplash.com/premium_photo-1661963920742-f5b23a6a1b44?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Hero */}
        <section className="mb-14">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image src="https://plus.unsplash.com/premium_photo-1661963920742-f5b23a6a1b44?w=1200&h=600&auto=format&fit=crop&q=80" alt="Taipei" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-lg mb-4">
            City Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-3">
            Taipei <span className="font-normal text-gray-400">台北</span>
          </h1>
          <p className="text-gray-500 text-lg font-light max-w-2xl">
            The capital of eating well. Taipei has more great food per square kilometer than almost anywhere on earth — and most of it costs less than a coffee back home.
          </p>
        </section>

        {/* Quick facts */}
        <section className="bg-blue-50 rounded-2xl p-6 mb-14 grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Best for</p>
            <p className="text-sm text-blue-900 font-medium">Night markets, dumplings, bubble tea, beef noodle soup</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Budget</p>
            <p className="text-sm text-blue-900 font-medium">NT$80–250 per meal at local spots; NT$800+ for sit-down dining</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Don't miss</p>
            <p className="text-sm text-blue-900 font-medium">Shilin Night Market, Ningxia Night Market, Tonghua Street</p>
          </div>
        </section>

        {/* Must-eat dishes */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">What to eat</p>
          <h2 className="font-serif text-2xl font-bold mb-6">Taipei's essential dishes</h2>
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

        {/* Neighborhoods */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Where to go</p>
          <h2 className="font-serif text-2xl font-bold mb-6">Neighborhoods by food scene</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-serif text-xl font-bold mb-1">
                  {n.name} <span className="font-normal text-gray-400">{n.chinese}</span>
                </h3>
                <p className="text-sm text-gray-500">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Taipei MRT */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Getting around</p>
          <h2 className="font-serif text-2xl font-bold mb-3">The Taipei MRT 捷運</h2>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Taipei&apos;s metro system is one of the cleanest, cheapest, and most reliable in the world. Five colour-coded lines cover virtually every neighbourhood and tourist spot in the city. Fares start at NT$20 and a single-day pass costs NT$180 — worth it if you&apos;re making more than 4 trips.
          </p>

          {/* Lines */}
          <div className="space-y-3 mb-8">
            {[
              {
                color: "bg-red-600",
                textColor: "text-red-600",
                borderColor: "border-red-100",
                bgColor: "bg-red-50",
                name: "Red Line",
                chinese: "淡水信義線",
                english: "Tamsui–Xinyi",
                stops: "Tamsui → Taipei Main → Da'an → Xiangshan (Taipei 101)",
                food: "Yongkang St (Da'an), Shilin Night Market (Shilin stop)",
              },
              {
                color: "bg-emerald-700",
                textColor: "text-emerald-700",
                borderColor: "border-emerald-100",
                bgColor: "bg-emerald-50",
                name: "Green Line",
                chinese: "松山新店線",
                english: "Songshan–Xindian",
                stops: "Songshan → Taipei Main → Zhongxiao Xinsheng → Xindian",
                food: "Raohe Night Market (Songshan), Gongguan student area (Gongguan)",
              },
              {
                color: "bg-blue-600",
                textColor: "text-blue-600",
                borderColor: "border-blue-100",
                bgColor: "bg-blue-50",
                name: "Blue Line",
                chinese: "板南線",
                english: "Bannan",
                stops: "Yongning → Taipei Main → Zhongxiao Fuxing → City Hall → Nangang",
                food: "Tonghua Night Market (Linan St nearby), Breeze Centre food hall (Zhongxiao)",
              },
              {
                color: "bg-orange-500",
                textColor: "text-orange-600",
                borderColor: "border-orange-100",
                bgColor: "bg-orange-50",
                name: "Orange Line",
                chinese: "中和新蘆線",
                english: "Zhonghe–Xinlu",
                stops: "Huannan Market → Zhongshan Junior High → Daqiaotou",
                food: "Daqiaotou 大橋頭 — the best lu rou fan neighbourhood in Taipei",
              },
              {
                color: "bg-yellow-700",
                textColor: "text-yellow-700",
                borderColor: "border-yellow-100",
                bgColor: "bg-yellow-50",
                name: "Brown Line",
                chinese: "文湖線",
                english: "Wenhu (elevated)",
                stops: "Taipei City Hall → Zhongshan Junior High → Muzha (Zoo)",
                food: "Fuxing SOGO food basement (Zhongxiao Fuxing), Huashan Market area",
              },
            ].map((line) => (
              <div
                key={line.name}
                className={`flex items-start gap-4 rounded-xl border ${line.borderColor} ${line.bgColor} px-4 py-4`}
              >
                {/* Colour pill */}
                <span
                  className={`flex-shrink-0 mt-0.5 w-3 h-3 rounded-full ${line.color} ring-2 ring-white shadow-sm`}
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                    <span className={`font-semibold text-sm ${line.textColor}`}>{line.name}</span>
                    <span className="text-xs text-gray-400">{line.chinese} · {line.english}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1 leading-relaxed">{line.stops}</p>
                  <p className="text-xs font-medium text-gray-700">
                    <span className="text-gray-400">Good for food: </span>{line.food}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key food stations */}
          <h3 className="font-serif text-lg font-bold mb-4">Key stations for eating</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {[
              { station: "Taipei Main Station", chinese: "台北車站", lines: ["Red", "Green", "Blue"], note: "Underground mall with dozens of cheap lunch spots. Best for a quick bowl before catching a train." },
              { station: "Dongmen", chinese: "東門站", lines: ["Red", "Green"], note: "Exit 5 leads straight to Yongkang Street — Taiwan's most famous beef noodle soup corridor." },
              { station: "Zhongshan", chinese: "中山站", lines: ["Red", "Green"], note: "10-minute walk to Ningxia Night Market (寧夏夜市), Taipei's most local night market." },
              { station: "Shilin", chinese: "士林站", lines: ["Red"], note: "10-minute walk to Shilin Night Market. Exit 1 is the closest to the food stalls underground." },
              { station: "Songshan", chinese: "松山站", lines: ["Green"], note: "5-minute walk to Raohe Night Market. One of the easiest night market commutes in the city." },
              { station: "Zhongxiao Fuxing", chinese: "忠孝復興站", lines: ["Blue", "Brown"], note: "SOGO department store food basement, dense café scene, Tonghua Night Market nearby." },
            ].map((s) => (
              <div key={s.station} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-semibold text-sm text-gray-900">{s.station}</span>
                  <span className="text-xs text-gray-400">{s.chinese}</span>
                </div>
                <div className="flex gap-1 mb-2">
                  {s.lines.map((l) => (
                    <span key={l} className={`text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full text-white ${
                      l === "Red" ? "bg-red-600" :
                      l === "Green" ? "bg-emerald-700" :
                      l === "Blue" ? "bg-blue-600" :
                      l === "Orange" ? "bg-orange-500" :
                      "bg-yellow-700"
                    }`}>{l}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>

          {/* Practical tips */}
          <div className="bg-tw-indigo-600 text-white rounded-2xl p-6 grid md:grid-cols-3 gap-5 text-sm">
            <div>
              <p className="font-semibold mb-1.5">💳 EasyCard (悠遊卡)</p>
              <p className="text-white/75 leading-relaxed text-xs">Buy at any MRT station for NT$100 deposit. Tap in and out. You get a small discount on every ride vs single-journey tokens. Also works at convenience stores and buses.</p>
            </div>
            <div>
              <p className="font-semibold mb-1.5">🕐 Operating hours</p>
              <p className="text-white/75 leading-relaxed text-xs">Most lines run 6:00 AM – midnight daily. Last train times vary by station and direction — check the digital countdown on the platform. Trains every 3–6 minutes during peak hours.</p>
            </div>
            <div>
              <p className="font-semibold mb-1.5">🚫 No eating on trains</p>
              <p className="text-white/75 leading-relaxed text-xs">Eating and drinking on the MRT is prohibited and fined up to NT$7,500. Buy your street food, find a bench outside the paid zone, then board. Nobody is exempt — locals follow this rule strictly.</p>
            </div>
          </div>
        </section>

        {/* Insider tip */}
        <section className="mb-14 border-l-4 border-coral-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            Skip the tourist-facing restaurants around Taipei 101. Walk 3 blocks in any direction and you&apos;ll find
            the same quality food at half the price. Local lunch spots (便當店) that open at 11am and close when
            they sell out are almost always your best bet.
          </p>
        </section>

        {/* Related */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/shilin" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 Shilin Night Market</Link>
            <Link href="/night-markets/raohe" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏮 Raohe Night Market</Link>
            <Link href="/dishes/beef-noodle-soup-taipei" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🍜 Best Beef Noodle Soup</Link>
            <Link href="/dishes/xiao-long-bao" className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🥟 Xiao Long Bao Guide</Link>
            <Link href="/cities/taipei/airport-to-taipei" className="bg-mist-50 text-mist-600 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🚆 Airport → Taipei Main</Link>
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
