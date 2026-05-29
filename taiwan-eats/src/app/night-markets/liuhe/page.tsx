import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Liuhe Night Market Kaohsiung — Seafood Heaven",
  description: "Kaohsiung's most famous night market and the best place in Taiwan to eat fresh seafood outdoors. What to order, what to avoid, and when to go.",
  alternates: { canonical: "/night-markets/liuhe" },
};

export default function LiuhePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Night Markets", href: "/night-markets" },
          { name: "Liuhe Night Market", href: "/night-markets/liuhe" },
        ]}
      />
      <ArticleSchema
        headline="Liuhe Night Market Kaohsiung — Seafood Heaven"
        description="Kaohsiung's most famous night market and the best place in Taiwan to eat fresh seafood outdoors. What to order, what to avoid, and when to go."
        url="/night-markets/liuhe"
        datePublished="2026-05-29"
        image="https://picsum.photos/seed/liuhe-seafood/1200/630"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://picsum.photos/seed/liuhe-seafood/1200/600" alt="Liuhe Night Market" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1 rounded-lg">Night Market · Kaohsiung</span>
            <span className="text-xs text-gray-400">8 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Liuhe Night Market: seafood heaven in Kaohsiung
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Kaohsiung is a port city and Liuhe is its night market. The seafood here is as fresh as it gets — pulled from the ocean that morning and on your plate by evening.
          </p>
        </div>

        <section className="bg-green-50 rounded-2xl p-6 mb-10 grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-1">Getting there</p>
            <p className="text-sm text-green-900">MRT Orange Line → Formosa Boulevard Station (美麗島). Exit 11, 5-min walk.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-1">Hours</p>
            <p className="text-sm text-green-900">6pm–1am daily. Busiest 8–11pm.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-1">Budget</p>
            <p className="text-sm text-green-900">NT$400–800 for a full seafood feast — cheap by any standard.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">The seafood experience</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The defining Liuhe experience is the live seafood tanks that line the main strip. You walk up, point at
            what you want — crab, lobster, shrimp, clams, squid — tell them how you want it cooked (grilled, steamed,
            garlic butter, salt and pepper), and it&apos;s prepared in minutes. Price per 100g is displayed on the tank.
          </p>
          <div className="bg-green-50 rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-2">How to order from the tank</p>
            <ol className="text-sm text-gray-700 space-y-1">
              <li>1. Point at what you want and confirm the price per 100g</li>
              <li>2. Tell them the cooking style: 烤 (grilled), 蒸 (steamed), 炒 (stir-fried)</li>
              <li>3. They&apos;ll weigh it and tell you the total before cooking</li>
              <li>4. Sit at the tables nearby — they&apos;ll bring it out when ready</li>
            </ol>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">Beyond the seafood tanks</h2>
          <div className="space-y-3">
            {[
              { emoji: "🦑", name: "Squid thick soup", chinese: "花枝羹", desc: "Liuhe's most iconic non-tank dish. Thick, starchy broth with squid and glass noodles. NT$60." },
              { emoji: "🍢", name: "Grilled skewers", chinese: "烤串", desc: "Pork, mushroom, quail eggs, and corn — charcoal grilled at the stall. NT$20–40 each." },
              { emoji: "🥭", name: "Mango shaved ice", chinese: "芒果冰", desc: "Kaohsiung mangoes are Taiwan's best. In season (May–August), this is the finest version of Taiwan's most famous dessert." },
              { emoji: "🍜", name: "Shrimp paste noodles", chinese: "蝦醬麵", desc: "A Kaohsiung specialty rarely found in Taipei. Intensely umami, slightly fishy, perfect with chili." },
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

        <section className="mb-10 border-l-4 border-green-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            Negotiate. Prices at seafood tanks are not fixed for tourists. A polite ask — &quot;有沒有便宜一點？&quot; (any discount?) —
            is not rude, it&apos;s expected. You probably won&apos;t get much off, but they&apos;ll often throw in something extra.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cities/kaohsiung" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Kaohsiung Guide</Link>
            <Link href="/night-markets" className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 All Night Markets</Link>
          </div>
        </section>

        <div className="mb-10"><NewsletterSignup /></div>
      </div>
      <Footer />
    </main>
  );
}
