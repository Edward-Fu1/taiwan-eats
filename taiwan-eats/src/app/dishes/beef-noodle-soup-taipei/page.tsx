import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import OrnamentDivider from "@/components/OrnamentDivider";
import ReadingProgress from "@/components/ReadingProgress";
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
    verdict: "The best in the city. Clear broth, hand-cut noodles, beef that falls apart with a chopstick. Unassuming fluorescent-lit space, open until 5am. This is the benchmark against which all others should be measured.",
    order: "Half-tendon, half-beef (半筋半肉). Add a side of braised cucumber (滷小黃瓜) and a cold century egg.",
    crowd: "Locals and in-the-know food journalists. Occasional celebrity chef sighting.",
    note: "No sign in English. Look for the long queue on Anhe Road at night.",
  },
  {
    rank: 2,
    name: "Yong Kang Beef Noodle",
    chinese: "永康牛肉麵",
    neighborhood: "Da'an",
    price: "NT$280",
    verdict: "Rich, complex red-braised broth with a slight sweetness from rock sugar and a depth that takes hours of simmering to achieve. The most photogenic bowl on this list. Has been here since 1963.",
    order: "Spicy beef noodle (辣牛肉麵). Their chili oil is house-made and excellent. Get it medium.",
    crowd: "Everyone — tourists, expats, and regulars who've been coming for 20 years.",
    note: "On Jinshan South Road. Expect a 20–30 min queue at lunch.",
  },
  {
    rank: 3,
    name: "Liao's Beef Noodle",
    chinese: "廖家牛肉麵",
    neighborhood: "Songshan",
    price: "NT$180",
    verdict: "Humbler presentation than the top two, but the clear broth depth is extraordinary. Under-the-radar and proud of it. The tendon here has the best texture on this list — soft through the center, with a firm exterior edge.",
    order: "Clear broth (清燉) — it's where they shine. Don't bother with the red braise here.",
    crowd: "Neighborhood regulars. You'll likely be the only non-local in the room.",
    note: "Closes by 2pm. Get there before 11:30am for the best broth.",
  },
  {
    rank: 4,
    name: "Laoma Beef Noodle",
    chinese: "老媽牛肉麵",
    neighborhood: "Zhongzheng",
    price: "NT$200",
    verdict: "The spiciest bowl on this list by a wide margin. Sichuan-influenced with a numbing heat that builds over the course of the meal. Not authentic Taiwanese style, but outstanding in its own right.",
    order: "Spicy red-braised with extra chili (特辣紅燒). Cold sesame noodles (涼麵) as a side.",
    crowd: "Spice-seekers and younger locals. Lively atmosphere.",
    note: "Near Zhongzheng Memorial Hall MRT. Good for late night — open until 1am.",
  },
  {
    rank: 5,
    name: "Fang Jia Beef Noodle",
    chinese: "方家牛肉麵",
    neighborhood: "Zhongshan",
    price: "NT$195",
    verdict: "Best value on this list. The broth is a half-and-half blend of clear and red-braised styles — unusual, and it works. Noodles are machine-cut but better quality than most. A reliable weekday lunch.",
    order: "The house mixed-style (招牌牛肉麵). Ask for wide noodles (寬麵).",
    crowd: "Office workers and regulars. Fast service, high turnover.",
    note: "Cash only. Seating is tight — be prepared to share a table.",
  },
  {
    rank: 6,
    name: "Guoxin Beef Noodle",
    chinese: "國心牛肉麵",
    neighborhood: "Xinyi",
    price: "NT$250",
    verdict: "The most upscale setting on this list — clean, modern, no plastic stools. The broth is refined and slightly lighter than the traditional red-braised style. A good choice if you want to impress someone who might normally skip noodle shops.",
    order: "Premium beef shank noodle (頂級牛腱麵). The shank is sliced thin and fanned — aesthetics matter here.",
    crowd: "Xinyi office workers, couples on semi-casual dates.",
    note: "Accepts credit cards. Reserve a table for dinner on weekends.",
  },
];

const faq = [
  {
    q: "What's the difference between red-braised and clear broth beef noodle soup?",
    a: "Red-braised (紅燒) uses soy sauce, bean paste, spices, and often a touch of sugar, creating a dark, rich, complex broth. Clear broth (清燉) is a pure beef bone and slow-cooked broth with minimal seasoning — it showcases the meat's natural flavour and is considerably harder to do well. Both are great; the choice depends on what you're in the mood for.",
  },
  {
    q: "How much should I expect to pay for a bowl?",
    a: "NT$150–NT$280 for a standard bowl at a sit-down shop. The baseline is usually NT$180–220. Paying more than NT$300 at a non-hotel restaurant is unusual unless it's a premium spot or includes extras.",
  },
  {
    q: "What's the best part of the beef to order?",
    a: "Half-tendon, half-beef (半筋半肉) is the default recommendation — you get the collagen-rich chew of the tendon alongside the tender braised beef. Pure beef shank (牛腱) is great if you want something more uniform. Avoid pure tendon only unless you specifically love the texture.",
  },
  {
    q: "Is beef noodle soup a breakfast food?",
    a: "A few shops open early and serve it for breakfast, but it's primarily a lunch and dinner dish. Most of the best spots open at 10:30–11am and close once the broth runs out — which at the best places can be as early as 2pm.",
  },
  {
    q: "Can I get vegetarian beef noodle soup?",
    a: "A few dedicated vegetarian shops serve mock-beef (素牛肉麵) using gluten or soy protein. The broth is mushroom and vegetable-based and surprisingly complex. Look for shops with 素食 signs.",
  },
];

export default function BeefNoodleSoupPage() {
  return (
    <main className="bg-parchment">
      <ReadingProgress />
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

      <Navbar />

      {/* ── Article header ───────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 font-sans text-[0.75rem] text-ink-muted">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-parchment-border">›</li>
            <li><Link href="/dishes" className="hover:text-ink transition-colors">Dish Guides</Link></li>
            <li aria-hidden="true" className="text-parchment-border">›</li>
            <li className="text-ink-secondary truncate">Beef Noodle Soup</li>
          </ol>
        </nav>

        {/* Category chip */}
        <div className="cat-chip text-terracotta-600 mb-4">
          <span className="cat-dot bg-terracotta-500" aria-hidden="true" />
          Noodles
        </div>

        {/* Headline */}
        <h1 className="font-display font-semibold text-ink leading-[1.1] tracking-[-0.02em] text-[2.25rem] md:text-[3rem] mb-5 max-w-2xl">
          The best beef noodle soup in Taipei — ranked and mapped
        </h1>

        {/* Deck */}
        <p className="font-serif italic text-[1.125rem] text-ink-secondary leading-relaxed mb-5 max-w-xl">
          We ate at 12 spots across the city so you don&apos;t have to. Here&apos;s who won, who disappointed, and exactly what to order at each one.
        </p>

        {/* Byline */}
        <div className="flex items-center gap-2 font-sans text-[0.8125rem] text-ink-muted">
          <span>By Mei-Lin Chen</span>
          <span aria-hidden="true">·</span>
          <time dateTime="2026-05-29">Updated May 2026</time>
          <span aria-hidden="true">·</span>
          <span>12 min read</span>
        </div>
      </div>

      {/* ── Feature image ──────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 mb-14">
        <div className="relative w-full aspect-[16/9] rounded-[10px] overflow-hidden shadow-[0_4px_24px_rgba(26,23,20,0.10)]">
          <Image
            src="https://picsum.photos/seed/noodle-soup/1200/600"
            alt="A bowl of Taiwanese beef noodle soup — the clear broth style at Lin Dong Fang"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
        <p className="font-sans text-[0.75rem] text-ink-muted text-center mt-3 italic">
          Clear broth beef noodle soup at Lin Dong Fang — the #1 ranked spot
        </p>
      </div>

      {/* ── Article body — max-w-prose for reading comfort ─────────── */}
      <div className="max-w-prose mx-auto px-6">

        {/* Section: National dish history */}
        <div className="article-body">
          <p>
            Taiwanese beef noodle soup (牛肉麵, niú ròu miàn) is not just a dish — it&apos;s a civic institution. Taipei has held an annual beef noodle soup festival since 2005. Restaurants compete on the dish. Locals have strong opinions about who does it best and will defend those opinions at length.
          </p>
          <p>
            The dish arrived in Taiwan with the Nationalist government in the late 1940s, brought over by Mainlanders who adapted Sichuan-style red-braised beef to what was available on the island. Over the following decades it mutated into something distinctly Taiwanese: a dish that rewards patience, good sourcing, and a willingness to let a broth simmer for eight or more hours without shortcuts.
          </p>
          <p>
            There are now thousands of beef noodle soup shops across Taipei alone. Most are competent. Fewer than a dozen are worth going out of your way for. This guide covers the ones that are.
          </p>
        </div>

        <OrnamentDivider className="my-10" />

        {/* Section: Two styles */}
        <h2 className="article-h2">Red-braised vs clear broth: what to know before you order</h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-terracotta-50 border border-terracotta-100 rounded-[10px] p-5">
            <p className="font-sans font-semibold text-ink mb-2 text-[0.9375rem]">Red-braised 紅燒</p>
            <p className="font-sans text-[0.875rem] text-ink-secondary leading-relaxed">
              The more common style. Dark soy sauce, bean paste (豆瓣醬), spices, and often a touch of rock sugar. Rich, complex, and forgiving of minor technique errors. When a shop does this well, the broth will have a glossy sheen and a depth that lingers on the palate.
            </p>
          </div>
          <div className="bg-jade-50 border border-jade-100 rounded-[10px] p-5">
            <p className="font-sans font-semibold text-ink mb-2 text-[0.9375rem]">Clear broth 清燉</p>
            <p className="font-sans text-[0.875rem] text-ink-secondary leading-relaxed">
              The harder style to execute. A pure bone-and-beef broth with minimal seasoning — the quality of the meat and the length of the simmer have nowhere to hide. When done right, it&apos;s the more elegant bowl. When done poorly, it&apos;s just thin soup.
            </p>
          </div>
        </div>

        <blockquote className="article-pullquote">
          First visit? Order red-braised. Once you&apos;ve had a few good bowls, come back and try the clear broth at Lin Dong Fang — it will reframe the dish entirely.
        </blockquote>

        {/* Section: Noodle types */}
        <h2 className="article-h2">The noodle question</h2>

        <div className="article-body">
          <p>
            Most shops offer a choice of noodle width. This matters more than most guides acknowledge. The broth-to-noodle ratio changes significantly depending on what you pick, and different broths pair better with different textures.
          </p>
        </div>

        <div className="my-6 divide-y divide-parchment-border border-t border-b border-parchment-border">
          {[
            { name: "細麵 thin noodles",       desc: "Best with clear broth. They absorb liquid quickly and deliver more broth in each bite." },
            { name: "寬麵 wide noodles",        desc: "Best with red-braised. The surface area holds the thick broth and the chew stands up to the intensity." },
            { name: "刀削麵 hand-shaved",       desc: "Irregular, rustic, and excellent when available. Unevenly thick — some bites are almost pasta-like." },
            { name: "陽春麵 plain flour",       desc: "The default at most shops. Solid, neutral, works with everything." },
          ].map((n) => (
            <div key={n.name} className="flex gap-4 py-3">
              <span className="font-sans font-medium text-ink text-[0.875rem] w-44 shrink-0">{n.name}</span>
              <span className="font-sans text-[0.875rem] text-ink-secondary">{n.desc}</span>
            </div>
          ))}
        </div>

        {/* Section: Rankings */}
        <OrnamentDivider className="my-10" />
        <h2 className="article-h2" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
          The ranking
        </h2>
        <p className="font-sans text-[0.875rem] text-ink-muted mb-7">12 shops tested. These 6 are worth your time.</p>

        <div className="space-y-5">
          {spots.map((spot) => (
            <div
              key={spot.name}
              className="border border-parchment-border rounded-[10px] p-6 bg-white"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-sans text-[0.6875rem] font-bold text-terracotta-500 mr-2.5 uppercase tracking-wide">
                    #{spot.rank}
                  </span>
                  <span className="font-display font-semibold text-ink text-[1.0625rem]">{spot.name}</span>
                  <span className="font-sans text-[0.8125rem] text-ink-muted ml-2">{spot.chinese}</span>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <p className="font-sans text-[0.875rem] font-medium text-ink">{spot.price}</p>
                  <p className="font-sans text-[0.75rem] text-ink-muted">{spot.neighborhood}</p>
                </div>
              </div>
              <p className="font-sans text-[0.875rem] text-ink-secondary leading-relaxed mb-4">{spot.verdict}</p>
              <div className="bg-terracotta-50 border border-terracotta-100 rounded-md px-4 py-3 mb-3">
                <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-wide text-terracotta-600 mb-1">What to order</p>
                <p className="font-sans text-[0.875rem] text-ink">{spot.order}</p>
              </div>
              <div className="flex gap-4">
                <p className="font-sans text-[0.75rem] text-ink-muted flex-1">{spot.crowd}</p>
                {spot.note && (
                  <p className="font-sans text-[0.75rem] text-gold-600 italic flex-1">{spot.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section: What to order alongside */}
        <h2 className="article-h2">What to order alongside</h2>
        <div className="article-body">
          <p>
            A bowl of beef noodle soup is a complete meal on its own, but the best shops also serve a rotation of braised cold dishes (滷味) that are worth ordering. These are typically displayed in a glass case near the entrance — point at what you want.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 my-6">
          {[
            { name: "滷小黃瓜", en: "Braised cucumber",   desc: "Crunchy, cold, lightly soy-pickled. The ideal counterpoint to a rich broth." },
            { name: "皮蛋豆腐", en: "Century egg tofu",   desc: "Cold silken tofu with century egg and a soy-sesame dressing. The best version of this dish anywhere." },
            { name: "牛腱切片", en: "Sliced beef shank",  desc: "Cold-braised, sliced thin. Order this if the broth version runs out." },
            { name: "海帶",     en: "Braised seaweed",    desc: "Silky, slightly sweet, and good for cutting through the fat of the broth." },
          ].map((item) => (
            <div key={item.name} className="bg-parchment-warm rounded-[10px] p-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display font-semibold text-ink text-[1rem]">{item.name}</span>
                <span className="font-sans text-[0.75rem] text-ink-muted">{item.en}</span>
              </div>
              <p className="font-sans text-[0.8125rem] text-ink-secondary">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section: How to order */}
        <h2 className="article-h2">How to order</h2>
        <p className="font-sans text-[0.875rem] text-ink-muted mb-5">Most beef noodle shops have no English menus. These phrases will get you through.</p>

        <div className="divide-y divide-parchment-border border-t border-b border-parchment-border mb-6">
          {[
            { zh: "牛肉麵",      en: "Beef noodle soup — what you're here for" },
            { zh: "紅燒 / 清燉",  en: "Red-braised / clear broth — specify the style" },
            { zh: "半筋半肉",     en: "Half tendon, half beef — the recommended default" },
            { zh: "小碗 / 大碗",  en: "Small / large bowl" },
            { zh: "辣 / 不辣 / 微辣", en: "Spicy / not spicy / slightly spicy" },
            { zh: "加麵",        en: "Extra noodles (small upcharge)" },
            { zh: "細麵 / 寬麵",  en: "Thin / wide noodles" },
          ].map((item) => (
            <div key={item.zh} className="flex justify-between items-center py-3">
              <span className="font-display font-semibold text-ink text-[1.0625rem]">{item.zh}</span>
              <span className="font-sans text-[0.8125rem] text-ink-secondary text-right ml-4 max-w-[60%]">{item.en}</span>
            </div>
          ))}
        </div>

        {/* Section: Mistakes */}
        <h2 className="article-h2">Common mistakes to avoid</h2>

        <div className="space-y-5 mb-8">
          {[
            {
              title: "Going at peak lunch hour without a plan",
              desc: "The best shops have queues of 20–40 minutes from noon to 1pm. Go at 11:30am sharp (you'll beat the rush) or wait until 2pm.",
            },
            {
              title: "Ordering only beef, skipping the tendon",
              desc: "The tendon is what separates a great beef noodle shop from a good one. It requires careful braising to get right. If a shop's tendon is good, their broth will be too.",
            },
            {
              title: "Eating the broth like a soup",
              desc: "The proper technique is to eat noodles and meat first, adjusting the ratio as you go. The broth should be sipped throughout — not saved for last and drained like water.",
            },
            {
              title: "Ignoring the condiment tray",
              desc: "Most shops have chili oil, vinegar, and pickled mustard greens (酸菜). The pickled greens in particular can transform the bowl — they cut through the fat and add an acidic contrast the dish needs.",
            },
          ].map((m) => (
            <div key={m.title} className="flex gap-4">
              <span className="text-lantern-500 mt-0.5 font-sans text-[1rem] font-bold shrink-0" aria-hidden="true">✕</span>
              <div>
                <p className="font-sans font-semibold text-ink text-[0.9375rem] mb-1">{m.title}</p>
                <p className="font-sans text-[0.875rem] text-ink-secondary leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip */}
        <div className="article-tip mb-10">
          <p className="article-tip-label">Pro tip</p>
          <p className="font-sans text-[0.9375rem] text-ink-secondary leading-relaxed">
            Go for lunch or early dinner (11:30am–1pm, or 5:30–6:30pm). The broth is freshest at these times, the queue is manageable, and you won&apos;t have to fight for a seat. Late-night bowls at the 24-hour spots are fine but the broth has been simmering for 12+ hours — good in its own way, but different.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="article-h2">Frequently asked questions</h2>
        <div className="space-y-6 mb-12">
          {faq.map((item) => (
            <div key={item.q}>
              <p className="font-sans font-semibold text-ink text-[0.9375rem] mb-2">{item.q}</p>
              <p className="font-sans text-[0.875rem] text-ink-secondary leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Keep exploring */}
        <OrnamentDivider className="mb-8" />
        <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-4">
          Keep exploring
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { href: "/cities/taipei",         label: "Taipei City Guide",    color: "bg-mist-50 text-mist-700 border-mist-100" },
            { href: "/dishes/xiao-long-bao",  label: "Xiao Long Bao Guide",  color: "bg-terracotta-50 text-terracotta-700 border-terracotta-100" },
            { href: "/dishes/lu-rou-fan",     label: "Lu Rou Fan Guide",     color: "bg-gold-50 text-gold-700 border-gold-100" },
            { href: "/dishes",                label: "All Dish Guides",      color: "bg-parchment-warm text-ink-secondary border-parchment-border" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-[0.8125rem] font-medium px-4 py-2 rounded-md border transition-opacity hover:opacity-75 ${l.color}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mb-16">
          <NewsletterSignup />
        </div>
      </div>

      <Footer />
    </main>
  );
}
