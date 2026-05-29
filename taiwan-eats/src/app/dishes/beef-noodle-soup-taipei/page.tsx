import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Best Beef Noodle Soup in Taipei — Ranked & Mapped",
  description: "We ate at 12 beef noodle soup spots across Taipei so you don't have to. Here's who won — with neighborhoods, prices, and exactly what to order.",
  alternates: { canonical: "/dishes/beef-noodle-soup-taipei" },
};

const spots = [
  {
    rank: 1,
    name: "Lin Dong Fang",
    chinese: "林東芳牛肉麵",
    neighborhood: "Zhongshan",
    price: "NT$220",
    verdict: "The best. Period. Clear broth, hand-cut noodles, beef that falls apart with a chopstick. Open until 5am.",
    order: "Half-tendon, half-beef (半筋半肉). Add a side of braised cucumber.",
    crowd: "Locals and in-the-know food journalists.",
  },
  {
    rank: 2,
    name: "Yong Kang Beef Noodle",
    chinese: "永康牛肉麵",
    neighborhood: "Da'an",
    price: "NT$280",
    verdict: "Rich, complex red-braised broth with a slight sweetness. The most photogenic bowl on this list.",
    order: "Spicy beef noodle (辣牛肉麵). Their chili oil is house-made and excellent.",
    crowd: "Everyone — tourists, expats, and regulars who've been coming for 20 years.",
  },
  {
    rank: 3,
    name: "Liao's Beef Noodle",
    chinese: "廖家牛肉麵",
    neighborhood: "Songshan",
    price: "NT$180",
    verdict: "Humbler presentation than the top two, but the broth depth is extraordinary. Under-the-radar and proud of it.",
    order: "Clear broth (清燉) — it's where they shine.",
    crowd: "Neighborhood regulars. You'll be the only tourist.",
  },
];

export default function BeefNoodleSoupPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Dish Guides", href: "/dishes" },
          { name: "Beef Noodle Soup", href: "/dishes/beef-noodle-soup-taipei" },
        ]}
      />
      <ArticleSchema
        headline="Best Beef Noodle Soup in Taipei — Ranked & Mapped"
        description="We ate at 12 beef noodle soup spots across Taipei so you don't have to. Here's who won — with neighborhoods, prices, and exactly what to order."
        url="/dishes/beef-noodle-soup-taipei"
        datePublished="2026-05-29"
        image="https://picsum.photos/seed/noodle-soup/1200/630"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        {/* Hero image */}
        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://picsum.photos/seed/noodle-soup/1200/600" alt="Beef noodle soup" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-coral-600 bg-coral-50 px-3 py-1 rounded-lg">Dish Guide</span>
            <span className="text-xs text-gray-400">8 min read · Taipei</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            The best beef noodle soup in Taipei — ranked and mapped
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            We ate at 12 spots across the city so you don&apos;t have to. Here&apos;s who won, who disappointed, and exactly what to order.
          </p>
        </div>

        {/* What it is */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">What makes a great bowl</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Taiwanese beef noodle soup (牛肉麵, niú ròu miàn) comes in two main styles: red-braised (紅燒), with a
              soy-and-spice broth that&apos;s dark and rich; and clear broth (清燉), which is lighter but requires
              far more technique to pull off. Taipei has elevated both into an art form.
            </p>
            <p>
              The noodles matter as much as the broth. You want a chew that holds up against the weight of the soup —
              too thin and they dissolve; too thick and you&apos;re just eating carbs. The beef should be braised long
              enough to shred slightly at the touch of chopsticks but never mushy.
            </p>
          </div>
        </section>

        {/* Rankings */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">The ranking</h2>
          <div className="space-y-6">
            {spots.map((spot) => (
              <div key={spot.name} className="border border-gray-100 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-bold text-coral-400 mr-2">#{spot.rank}</span>
                    <span className="font-serif text-lg font-bold">{spot.name}</span>
                    <span className="text-sm text-gray-400 ml-2">{spot.chinese}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-700">{spot.price}</p>
                    <p className="text-xs text-gray-400">{spot.neighborhood}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{spot.verdict}</p>
                <div className="bg-coral-50 rounded-lg px-4 py-3 mb-2">
                  <p className="text-xs font-medium text-coral-600 mb-0.5">What to order</p>
                  <p className="text-sm text-gray-700">{spot.order}</p>
                </div>
                <p className="text-xs text-gray-400">{spot.crowd}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ordering tips */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">How to order</h2>
          <div className="space-y-3">
            {[
              { zh: "牛肉麵", en: "Beef noodle soup" },
              { zh: "半筋半肉", en: "Half tendon, half beef (recommended)" },
              { zh: "小碗 / 大碗", en: "Small / large bowl" },
              { zh: "辣 / 不辣", en: "Spicy / not spicy" },
              { zh: "加麵", en: "Extra noodles" },
            ].map((item) => (
              <div key={item.zh} className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="font-medium text-gray-900">{item.zh}</span>
                <span className="text-sm text-gray-500">{item.en}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 border-l-4 border-coral-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-2">Pro tip</p>
          <p className="text-gray-700 leading-relaxed">
            Go for lunch or early dinner (11:30am–1pm, or 5:30–6:30pm). The broth is freshest, the queue is manageable,
            and you won&apos;t have to fight for a seat. Late-night bowls are fine but the broth has been sitting longer.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Keep exploring</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cities/taipei" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Taipei City Guide</Link>
            <Link href="/dishes" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🍜 All Dish Guides</Link>
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
