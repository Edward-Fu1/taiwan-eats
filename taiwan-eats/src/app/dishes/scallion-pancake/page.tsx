import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Scallion Pancakes (蔥抓餅): The Ultimate Taiwan Breakfast Guide",
  description: "Taiwan's best street breakfast — everything you need to know about scallion pancakes, from the best stalls to the perfect order (egg, always).",
  alternates: { canonical: "/dishes/scallion-pancake" },
};

export default function ScallionPancakePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Dish Guides", href: "/dishes" },
          { name: "Scallion Pancake", href: "/dishes/scallion-pancake" },
        ]}
      />
      <ArticleSchema
        headline="Scallion Pancakes (蔥抓餅): The Ultimate Taiwan Breakfast Guide"
        description="Taiwan's best street breakfast — everything you need to know about scallion pancakes, from the best stalls to the perfect order (egg, always)."
        url="/dishes/scallion-pancake"
        datePublished="2026-05-29"
        image="https://picsum.photos/seed/breakfast-street/1200/630"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://picsum.photos/seed/breakfast-street/1200/600" alt="Scallion pancake" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1 rounded-lg">Street Food</span>
            <span className="text-xs text-gray-400">4 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Scallion pancakes: the ultimate breakfast guide
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Taiwan&apos;s best NT$50 breakfast. Crispy, flaky, fragrant — and dangerously easy to eat two of.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">What is it?</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              The Taiwanese scallion pancake (蔥抓餅, cōng zhuā bǐng) is a flaky, layered flatbread made from wheat flour dough,
              rolled with scallion oil, then pan-fried until crispy. The &quot;claw&quot; (抓) in the name refers to how the vendor
              tears and fluffs the pancake after cooking to separate the layers — it&apos;s technique, not topping.
            </p>
            <p>
              Unlike the thick Chinese green onion pancake (葱油饼), the Taiwanese version is thinner, crispier, and almost
              croissant-like in its laminated texture. The best ones have charred spots on the outside and steam escaping
              from the layers inside.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">How to customize your order</h2>
          <div className="space-y-3">
            {[
              { option: "加蛋 (jiā dàn)", label: "Add egg", note: "NT$10 extra. Always do this. The egg cooks into the pancake layers." },
              { option: "加起司 (jiā qǐsī)", label: "Add cheese", note: "Processed cheese slice melted inside. Better than it sounds." },
              { option: "加培根 (jiā péigen)", label: "Add bacon", note: "Thin-sliced pork. A reasonable upgrade." },
              { option: "辣 / 不辣", label: "Spicy / not spicy", note: "The chili sauce is house-made at good spots. Ask for it on the side first time." },
            ].map((item) => (
              <div key={item.option} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium text-gray-900">{item.option}</span>
                  <span className="text-sm text-gray-500">— {item.label}</span>
                </div>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">Where to find the best ones</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            The best scallion pancakes are sold from street carts at breakfast time (7–10am). Look for a long queue —
            that&apos;s your only reliable indicator. Avoid the sit-down restaurant versions; they&apos;re never as good as
            the cart version eaten standing on the sidewalk.
          </p>
          <div className="bg-green-50 rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-2">Where to look</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Near MRT exits at 7–9am</li>
              <li>• Outside traditional markets (傳統市場)</li>
              <li>• University campus areas — students are reliable quality filters</li>
              <li>• Any cart with a visible queue of office workers</li>
            </ul>
          </div>
        </section>

        <section className="mb-10 border-l-4 border-green-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-green-500 mb-2">Pro tip</p>
          <p className="text-gray-700 leading-relaxed">
            Eat it immediately. Scallion pancakes are exceptional for about 4 minutes after leaving the griddle and
            mediocre for all the minutes after that. Never take one back to your hotel room.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Keep exploring</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes" className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🍜 All Dish Guides</Link>
            <Link href="/night-markets/shilin" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 Shilin Night Market</Link>
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
