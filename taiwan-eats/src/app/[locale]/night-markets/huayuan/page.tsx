import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Huayuan Night Market — Tainan's Best Kept Secret",
  description: "The night market Tainan locals actually go to. A guide to Huayuan — the food, the stalls, and why it beats every Taipei market on price-to-quality ratio.",
  alternates: { canonical: "/night-markets/huayuan" },
};

export default function HuayuanPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Night Markets", href: "/night-markets" },
          { name: "Huayuan Night Market", href: "/night-markets/huayuan" },
        ]}
      />
      <ArticleSchema
        headline="Huayuan Night Market — Tainan's Best Kept Secret"
        description="The night market Tainan locals actually go to. A guide to Huayuan — the food, the stalls, and why it beats every Taipei market on price-to-quality ratio."
        url="/night-markets/huayuan"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1698563874316-c53d7493c04c?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://images.unsplash.com/photo-1698563874316-c53d7493c04c?w=1200&h=600&auto=format&fit=crop&q=80" alt="Huayuan Night Market" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">Night Market · Tainan</span>
            <span className="text-xs text-gray-400">6 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Huayuan Night Market: Tainan&apos;s best kept secret
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Tourists go to Flower Night Market. Locals go to Huayuan. Here&apos;s what you&apos;ll find when you go where locals go.
          </p>
        </div>

        <section className="bg-amber-50 rounded-2xl p-6 mb-10 grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-1">Location</p>
            <p className="text-sm text-amber-900">Huayuan Road, West Central District, Tainan</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-1">Hours</p>
            <p className="text-sm text-amber-900">6pm–midnight, Wednesday–Monday. Closed Tuesdays.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-1">Best time</p>
            <p className="text-sm text-amber-900">Weekday evenings — steady crowd, no queues longer than 5 minutes.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">Why it&apos;s better than Flower Night Market</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-3">
            <p>
              Tainan&apos;s Flower Night Market (花園夜市) is large, famous, and runs only on Wednesday, Friday, and weekend
              nights. It&apos;s also perpetually crowded and increasingly oriented toward visitors. Huayuan operates
              more nights, feels less curated, and has a higher ratio of old-school Tainan-style food vendors.
            </p>
            <p>
              The best argument for Huayuan: the vendors here have been here for decades. Many are run by the
              same families who opened them. There&apos;s no Instagram strategy — just people who are very good at
              making specific things, selling them every night.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">What to eat</h2>
          <div className="space-y-4">
            {[
              { emoji: "🍢", name: "Milkfish ball soup", chinese: "虱目魚丸湯", desc: "A Tainan obsession. Milkfish is the city's signature protein — the balls here are fresh-ground daily. Clean, savory broth." },
              { emoji: "🍡", name: "Tainan-style rice cake", chinese: "碗粿", desc: "Steamed rice cake topped with ground pork, mushrooms, and a soft-boiled egg. NT$40. Eat with the provided fish sauce." },
              { emoji: "🥣", name: "Coffin toast", chinese: "棺材板", desc: "The original — Huayuan has one of the vendors who claims to have invented it. Thick-cut toast, hollowed out, filled with creamy seafood curry." },
              { emoji: "🧃", name: "Winter melon tea", chinese: "冬瓜茶", desc: "Brewed in house. Dark, slightly sweet, deeply refreshing. The Tainan summer drink." },
            ].map((item) => (
              <div key={item.name} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mt-0.5">{item.emoji}</span>
                <div>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="text-xs text-gray-400">{item.chinese}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 border-l-4 border-amber-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            Arrive hungry and bring cash — many vendors don&apos;t accept cards. Budget NT$300–400 for a full evening
            of eating. The market is compact enough to walk the whole thing before choosing where to eat.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cities/tainan" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Tainan Guide</Link>
            <Link href="/night-markets" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 All Night Markets</Link>
          </div>
        </section>

        <div className="mb-10"><NewsletterSignup /></div>
      </div>
      <Footer />
    </main>
  );
}
