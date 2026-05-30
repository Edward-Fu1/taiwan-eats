export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Shilin vs Raohe Night Market — Which Is Actually Better?",
  description: "The definitive Shilin vs Raohe comparison — crowd size, food quality, prices, and who each market is really for. Spoiler: it depends on the night.",
  alternates: { canonical: "/night-markets/shilin-vs-raohe" },
};

export default function ShilinVsRaohePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Night Markets", href: "/night-markets" },
          { name: "Shilin vs Raohe", href: "/night-markets/shilin-vs-raohe" },
        ]}
      />
      <ArticleSchema
        headline="Shilin vs Raohe Night Market — Which Is Actually Better?"
        description="The definitive Shilin vs Raohe comparison — crowd size, food quality, prices, and who each market is really for. Spoiler: it depends on the night."
        url="/night-markets/shilin-vs-raohe"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1513599974100-e724eabafef5?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://images.unsplash.com/photo-1513599974100-e724eabafef5?w=1200&h=600&auto=format&fit=crop&q=80" alt="Night market" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-coral-600 bg-coral-50 px-3 py-1 rounded-lg">Night Market</span>
            <span className="text-xs text-gray-400">6 min read · Taipei</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Shilin vs Raohe — which market is actually better?
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Every visitor to Taipei asks this question. The honest answer: they&apos;re better at different things. Here&apos;s how to decide.
          </p>
        </div>

        {/* Head-to-head */}
        <section className="mb-10">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h2 className="font-serif text-2xl font-bold text-blue-900 mb-1">Shilin 士林</h2>
              <p className="text-sm text-blue-700 mb-4">The biggest. The most famous.</p>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>✓ Enormous underground food court</li>
                <li>✓ Huge variety — 100+ stalls</li>
                <li>✓ Iconic large-format fried chicken</li>
                <li>✓ Easy MRT access (Jiantan station)</li>
                <li>✗ Very crowded — especially weekends</li>
                <li>✗ Some stalls have gone tourist-trap</li>
                <li>✗ Quality is inconsistent</li>
              </ul>
            </div>
            <div className="bg-coral-50 rounded-2xl p-6">
              <h2 className="font-serif text-2xl font-bold text-coral-900 mb-1">Raohe 饒河</h2>
              <p className="text-sm text-coral-700 mb-4">Smaller, older, more authentic.</p>
              <ul className="space-y-2 text-sm text-coral-900">
                <li>✓ Linear layout — easy to walk end-to-end</li>
                <li>✓ Higher average quality per stall</li>
                <li>✓ Famous pepper bun (胡椒餅)</li>
                <li>✓ Backed by Ciyou Temple — great atmosphere</li>
                <li>✗ Smaller selection overall</li>
                <li>✗ Still gets crowded Friday/Saturday</li>
                <li>✗ Less accessible by MRT (Songshan station)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">The verdict</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-5">
              <p className="font-medium text-gray-900 mb-1">Go to Shilin if...</p>
              <p className="text-sm text-gray-600">You want the full night market experience, have a group with varied tastes, or this is your only night market stop in Taiwan. The underground food court alone is worth the visit once.</p>
            </div>
            <div className="border-l-4 border-coral-400 pl-5">
              <p className="font-medium text-gray-900 mb-1">Go to Raohe if...</p>
              <p className="text-sm text-gray-600">You&apos;ve been to a night market before, want to eat well rather than everywhere, or you&apos;re going on a weeknight and want a more relaxed experience. Raohe rewards repeat visitors.</p>
            </div>
            <div className="border-l-4 border-green-400 pl-5">
              <p className="font-medium text-gray-900 mb-1">Actually, go to Ningxia if...</p>
              <p className="text-sm text-gray-600">You care most about food quality. Ningxia Night Market (寧夏夜市) is smaller than either and rarely mentioned in tourist guides — which is exactly why the vendors try harder.</p>
            </div>
          </div>
        </section>

        {/* What to eat */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">What to eat at each</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3">At Shilin</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>🍗 XXL fried chicken (大雞排) — the original</li>
                <li>🥚 Oyster omelette — multiple vendors compete</li>
                <li>🍢 Stinky tofu — deep fried, with pickled cabbage</li>
                <li>🧁 Strawberry mochi — seasonal, March–May</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-coral-400 mb-3">At Raohe</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>🥮 Fuzhou pepper bun (福州胡椒餅) — queue for it</li>
                <li>🦐 Shrimp roll (蝦捲) — better than Shilin's version</li>
                <li>🍡 Taiwanese sausage with sticky rice (大腸包小腸)</li>
                <li>🥤 Fresh sugarcane juice — pressed to order</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Read next</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/shilin" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 Full Shilin Guide</Link>
            <Link href="/night-markets/raohe" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏮 Full Raohe Guide</Link>
            <Link href="/cities/taipei" className="bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Taipei City Guide</Link>
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
