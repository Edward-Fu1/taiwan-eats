import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Where to Eat Xiao Long Bao (小籠包) Outside of Din Tai Fung in Taipei",
  description: "The best soup dumplings in Taipei beyond the famous chain — smaller spots, shorter queues, and in some cases better dumplings.",
  alternates: { canonical: "/dishes/xiao-long-bao" },
};

export default function XiaoLongBaoPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Dish Guides", href: "/dishes" },
          { name: "Xiao Long Bao", href: "/dishes/xiao-long-bao" },
        ]}
      />
      <ArticleSchema
        headline="Where to Eat Xiao Long Bao (小籠包) Outside of Din Tai Fung in Taipei"
        description="The best soup dumplings in Taipei beyond the famous chain — smaller spots, shorter queues, and in some cases better dumplings."
        url="/dishes/xiao-long-bao"
        datePublished="2026-05-29"
        image="https://picsum.photos/seed/dumpling-steam/1200/630"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://picsum.photos/seed/dumpling-steam/1200/600" alt="Xiao long bao" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">Dumplings</span>
            <span className="text-xs text-gray-400">7 min read · Taipei</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Where to eat xiao long bao outside of Din Tai Fung
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Din Tai Fung is a perfectly good restaurant. It&apos;s also a 90-minute queue, airport-level pricing, and an experience designed for tourists. Here are the alternatives locals actually prefer.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">How to judge a soup dumpling</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Xiao long bao (小籠包, literally &quot;small basket buns&quot;) are steamed pork dumplings with a gelatinized pork
              stock inside that liquefies during steaming. When you bite into them, soup floods your mouth alongside
              the pork filling.
            </p>
            <p>
              A great XLB has: 18+ folds (the mark of a skilled folder), a skin thin enough to see through but strong
              enough not to break when lifted, and a soup-to-pork ratio that leans toward more soup. The broth should
              be clean, slightly sweet, and taste genuinely of pork bones — not MSG-forward.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">The alternatives worth your time</h2>
          <div className="space-y-5">
            {[
              {
                name: "Hang Zhou Xiao Long Tang Bao",
                chinese: "杭州小籠湯包",
                location: "Zhongzheng, Taipei",
                price: "NT$130 per steamer",
                notes: "The best kept secret in Taipei. Eight dumplings per steamer, consistently thin skin, intensely savory broth. Been here since 1978. Zero tourist vibe.",
                tip: "Order the crab roe version (蟹黃) if it's on the seasonal menu.",
              },
              {
                name: "Kao Chi",
                chinese: "高記",
                location: "Da'an, Taipei",
                price: "NT$200–350",
                notes: "An old Shanghainese restaurant that's been in the same family for decades. More expensive than the hole-in-the-wall spots but significantly better than Din Tai Fung at the same price point.",
                tip: "The braised lion's head meatball (紅燒獅子頭) is equally worth ordering.",
              },
              {
                name: "Fu Hang Dou Jiang",
                chinese: "阜杭豆漿",
                location: "Zhongzheng, Taipei",
                price: "NT$50–80",
                notes: "Not a dumpling specialist, but they make pan-fried bao (生煎包) — the XLB's crispier cousin. The queue is long, the wait is worth it.",
                tip: "Go before 9am on weekdays. The wait doubles on weekends.",
              },
            ].map((spot) => (
              <div key={spot.name} className="border border-gray-100 rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{spot.name}</h3>
                    <p className="text-xs text-gray-400">{spot.chinese} · {spot.location}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{spot.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{spot.notes}</p>
                <div className="bg-blue-50 rounded-lg px-4 py-2">
                  <p className="text-xs font-medium text-blue-500 mb-0.5">Tip</p>
                  <p className="text-sm text-gray-700">{spot.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">How to eat them</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>1. Place the dumpling on your spoon — never bite directly from the chopsticks.</p>
            <p>2. Poke a small hole in the skin to let steam escape. Wait 10 seconds.</p>
            <p>3. Add a small amount of black vinegar and ginger from the condiment tray.</p>
            <p>4. Eat the whole thing in one bite, or drink the soup first — there is no wrong answer.</p>
          </div>
        </section>

        <section className="mb-10 border-l-4 border-blue-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-2">The din tai fung verdict</p>
          <p className="text-gray-700 leading-relaxed">
            Din Tai Fung is technically excellent — the folds are precise, the skins are consistent, the soup is clean.
            If you&apos;re visiting only once and want a guaranteed experience, go. But if you have the time and curiosity
            to look beyond the queue, the alternatives above will feel like a discovery.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Keep exploring</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cities/taipei" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Taipei Guide</Link>
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
