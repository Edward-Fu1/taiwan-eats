import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Lu Rou Fan (滷肉飯): Taiwan's Most Comforting Bowl",
  description: "Braised pork rice — Taiwan's ultimate comfort food. The history, the best spots across the island, and why every version tastes different.",
  alternates: { canonical: "/dishes/lu-rou-fan" },
};

export default function LuRouFanPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Dish Guides", href: "/dishes" },
          { name: "Lu Rou Fan", href: "/dishes/lu-rou-fan" },
        ]}
      />
      <ArticleSchema
        headline="Lu Rou Fan (滷肉飯): Taiwan's Most Comforting Bowl"
        description="Braised pork rice — Taiwan's ultimate comfort food. The history, the best spots across the island, and why every version tastes different."
        url="/dishes/lu-rou-fan"
        datePublished="2026-05-29"
        image="https://picsum.photos/seed/braised-pork/1200/630"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://picsum.photos/seed/braised-pork/1200/600" alt="Lu rou fan" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-coral-600 bg-coral-50 px-3 py-1 rounded-lg">Rice</span>
            <span className="text-xs text-gray-400">6 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Lu Rou Fan: Taiwan&apos;s most comforting bowl
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Braised pork belly over white rice. Five-spice fragrant, soy-dark, impossibly tender. The dish every Taiwanese person has an opinion about.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">What makes it special</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Lu rou fan (滷肉飯) is braised fatty pork — usually belly or shoulder, finely diced or sometimes
              ground — slow-cooked in soy sauce, rice wine, five-spice, and sugar until the fat melts into the
              braising liquid and everything becomes one deeply savory, slightly sweet sauce. Ladled over hot
              white rice, with a soft-boiled braised egg on the side.
            </p>
            <p>
              The dish varies enormously by region. Northern Taiwan (Taipei) uses finely chopped pork with a
              lighter, brothier sauce. Southern Taiwan (Tainan) tends toward fattier cuts, sweeter seasoning, and
              a thicker, stickier glaze. Both are correct. Both will make you eat a second bowl.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">The anatomy of a great bowl</h2>
          <div className="space-y-3">
            {[
              { part: "The pork", detail: "Should have a ratio of at least 40% fat to 60% lean. Lean-only versions taste hollow. The fat is the point." },
              { part: "The braising liquid", detail: "Deep amber-brown, fragrant with five-spice and soy. Should be thick enough to coat the rice but not gluey." },
              { part: "The rice", detail: "Short-grain white rice, freshly cooked. Never day-old. The sauce should soak into the top layers while the bottom stays fluffy." },
              { part: "The egg (滷蛋)", detail: "Soft-boiled and braised in the same liquid as the pork. The yolk should be jammy, not fully set. Non-negotiable." },
              { part: "The pickled radish (菜脯)", detail: "The counterpoint. Salty, sour, crunchy. Cuts through the richness of the pork. Always include it." },
            ].map((item) => (
              <div key={item.part} className="border-b border-gray-50 pb-3">
                <span className="font-medium text-gray-900">{item.part} </span>
                <span className="text-sm text-gray-500">— {item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">Where to eat it</h2>
          <div className="space-y-4">
            {[
              { name: "Jin Feng Lu Rou Fan", chinese: "金峰滷肉飯", location: "Zhongzheng, Taipei", note: "The Taipei institution. Been open since 1965. NT$35 per bowl. Queue at lunch, don't let the wait put you off." },
              { name: "Tian Ji Lu Rou Fan", chinese: "天記滷肉飯", location: "Tainan", note: "The Tainan-style benchmark. Sweeter, fattier, and served with a wider selection of braised sides." },
              { name: "Nong He Lu Rou Fan", chinese: "濃禾滷肉飯", location: "Zhongshan, Taipei", note: "A newer spot doing a more refined version with high-quality pork belly. NT$80 but worth the premium." },
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

        <section className="mb-10 border-l-4 border-coral-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-2">Order this too</p>
          <p className="text-gray-700 leading-relaxed">
            Side dishes at lu rou fan shops are half the experience. Look for braised tofu (滷豆腐), braised intestine (滷大腸),
            and bitter melon (苦瓜). Order one or two to balance the richness of the pork.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Keep exploring</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🍜 All Dish Guides</Link>
            <Link href="/cities/tainan" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Tainan Guide</Link>
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
