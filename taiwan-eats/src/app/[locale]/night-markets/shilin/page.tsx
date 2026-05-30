import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata = {
  title: "Shilin Night Market: The Complete Guide (2026)",
  description: "Everything you need to know about Taipei's most famous night market — what to eat, what to skip, and how to navigate the crowd like a regular.",
  alternates: { canonical: "/night-markets/shilin" },
};

const mustEat = [
  {
    emoji: "🍗",
    name: "XXL Fried Chicken",
    chinese: "大雞排",
    price: "NT$70–90",
    desc: "A whole chicken breast, pounded thin, battered in a sweet potato starch crust, and deep-fried until the edges shatter. Bigger than your face. Originated at Shilin in the 1990s and spawned a thousand imitators across Asia. Order from the original stall on Danan Road — it has a photo of the founder and a queue that never fully disappears.",
    tip: "Ask for basil (九層塔) — they add it fresh to the oil in the last 30 seconds of frying.",
  },
  {
    emoji: "🦪",
    name: "Oyster Omelette",
    chinese: "蚵仔煎",
    price: "NT$50–70",
    desc: "Plump oysters (or occasionally clams) folded into a batter of sweet potato starch, egg, and greens, then fried until the starch turns sticky and gelatinous. Divisive texture — some people love it, some find it too gluey. Topped with a sweet-and-sour sauce. Multiple vendors compete at Shilin; look for the one with the longest queue of locals, not the one with the English menu.",
    tip: "The texture should be sticky, not crunchy. If it's crunchy, the vendor is overcooking it.",
  },
  {
    emoji: "🍢",
    name: "Fried Stinky Tofu",
    chinese: "臭豆腐",
    price: "NT$50–80",
    desc: "Fermented tofu, deep-fried until the outside is golden and crackling while the interior stays creamy and almost custard-like. The smell is genuine — it will reach you from 10 meters away. Don't let that stop you. Served with pickled cabbage (泡菜) and sweet chili sauce. The contrast between the crisp exterior and the soft, pungent interior is one of the great textures in street food.",
    tip: "The best stalls use tofu that's been fermenting for 3–5 days. Too fresh and it lacks depth; too long and it becomes overwhelming.",
  },
  {
    emoji: "🌽",
    name: "Grilled Corn",
    chinese: "烤玉米",
    price: "NT$50",
    desc: "Corn brushed with soy butter and grilled slowly over charcoal until the kernels char slightly and caramelize. Simple, perfect, and impossible to improve. One of the few Shilin items that requires no explanation and delivers every time. The corn here tends to be sweeter than Western varieties — Taiwan grows several cultivars specifically for fresh eating.",
    tip: "Get it with the soy butter glaze applied twice — ask them to brush it again (再刷一次).",
  },
  {
    emoji: "🧃",
    name: "Fresh Fruit Juice",
    chinese: "現打果汁",
    price: "NT$50–80",
    desc: "Every tropical fruit available in Taiwan, pressed or blended to order. The stalls in the main market area stock 30+ varieties year-round. The seasonal picks — passion fruit (百香果) in summer, custard apple (釋迦) in autumn, strawberry (草莓) in winter — are worth seeking out over the evergreen mango and guava.",
    tip: "Ask for no sugar (不加糖) — the fruit is already sweet enough, and some stalls add a lot.",
  },
  {
    emoji: "🧇",
    name: "Scallion Pancake with Egg",
    chinese: "蔥抓餅加蛋",
    price: "NT$40–60",
    desc: "Flaky, layered flatbread cooked on a griddle, cracked over with an egg that gets folded in as it cooks. The pancake is pulled (抓) as it grills to separate the layers — this is what creates the distinctive shaggy texture. One of Taiwan's great street breakfasts, though at Shilin it's served until late night. Add cheese (加起司) for NT$10 more.",
    tip: "The best version has visible layering — if it's a smooth, uniform disc, the vendor didn't pull it properly.",
  },
  {
    emoji: "🍡",
    name: "Tanghulu (Candied Fruit)",
    chinese: "糖葫蘆",
    price: "NT$40–60",
    desc: "Seasonal fruit — most commonly strawberry, grape, or cherry tomato — threaded on skewers and dipped in hot sugar syrup that hardens into a crackling glass shell. The contrast between the brittle sugar exterior and the cold, juicy fruit inside is the whole point. Originally a Northern Chinese street food, now ubiquitous at Taiwan's markets.",
    tip: "Best in winter when strawberries are in season (December–March). The strawberry version is dramatically better than the tomato version.",
  },
  {
    emoji: "🥟",
    name: "Pan-Fried Dumplings",
    chinese: "鍋貼",
    price: "NT$50–80 for 5",
    desc: "Pork and chive dumplings fried in a flat pan with a small amount of water added partway through cooking — this creates a crispy, lacquered bottom while steaming the top. The technique is different from pot stickers (though the English names are often conflated). At good stalls the underside is golden and almost caramel-sweet from the starch that crystallizes.",
    tip: "Order the pork and chive (豬肉韭菜) over the cabbage version — the strong flavour of chive is the right counterpoint to the fatty pork.",
  },
];

const underground = [
  { name: "Oyster Vermicelli", chinese: "蚵仔麵線", desc: "Thick wheat noodles in a thickened broth with plump oysters or intestines. A Taiwanese comfort food staple that locals specifically travel to Shilin's underground section to eat." },
  { name: "Pork Blood Soup", chinese: "豬血湯", desc: "Cubes of coagulated pork blood in a clear broth with ginger and green onion. Mild, iron-rich, and an acquired taste for most Western palates — but once acquired, hard to stop ordering." },
  { name: "Braised Pork Rice", chinese: "滷肉飯", desc: "Slow-braised minced pork belly over rice with a soy-and-five-spice sauce. The underground food court version is not the city's best, but it's reliable and the price is right at NT$40–60 for a bowl." },
  { name: "Taro Ball Shaved Ice", chinese: "芋圓剉冰", desc: "Chewy taro balls (and sometimes sweet potato balls) served over shaved ice with red beans and condensed milk. A perfect dessert after the heat and richness of the snacks above." },
];

const mistakes = [
  {
    title: "Going on a Friday or Saturday evening without a plan",
    desc: "Weekend evenings at Shilin are genuinely overwhelming — 50,000+ visitors on a good weekend. The queues at popular stalls stretch to 30 minutes. If you're visiting on a weekend, go early (6pm) or late (after 10pm). Tuesday and Wednesday evenings are the sweet spot: fully operational with roughly half the crowd.",
  },
  {
    title: "Only eating street level — skipping the underground food court",
    desc: "The underground Shilin Food Court (士林美食廣場) beneath the market building is where Taipei locals actually eat. Less Instagram-friendly, more authentic, and significantly less crowded. The oyster vermicelli and pork blood soup here are among the market's best dishes.",
  },
  {
    title: "Buying anything with a photogenic English sign near the entrance",
    desc: "Vendors near the MRT exit optimize for tourists. Prices are 30–50% higher, quality is lower, and the signage exists specifically to intercept visitors who haven't yet found their bearings. Walk three minutes deeper into the market before buying anything.",
  },
  {
    title: "Trying to eat everything in one visit",
    desc: "Shilin has hundreds of vendors. You cannot eat everything. Pick 5–6 items before you arrive, commit to them, and ignore the pressure to try everything that looks interesting as you pass it. You'll eat better and spend less.",
  },
  {
    title: "Ignoring the secondary market area",
    desc: "The main market building gets all the attention, but the stalls lining the streets around it — especially on Jihe Road and Danan Road — are often better and always cheaper. The best fried chicken is on Danan Road, not in the main building.",
  },
];

const faq = [
  {
    q: "What time does Shilin Night Market open and close?",
    a: "Most stalls open between 4pm and 6pm. The market reaches peak activity between 7pm and 10pm on weekdays, and 7pm and 11pm on weekends. Some stalls stay open until midnight or later on weekends. The underground food court has slightly more regular hours: typically 5pm–midnight. Monday sees lighter foot traffic and some stalls close.",
  },
  {
    q: "How do I get to Shilin Night Market?",
    a: "Take the Taipei MRT Red Line (Danshui-Xinyi Line) to Jiantan Station (劍潭, R15). Take Exit 1, turn right, and walk 2–3 minutes. The market is impossible to miss. Do not get off at Shilin Station — it's farther and requires a longer walk through a less interesting area.",
  },
  {
    q: "How much money should I bring?",
    a: "NT$300–600 for a thorough visit — enough for 5–8 items including a drink. Most vendors are cash only, and while some of the newer stalls accept card payments, assuming cash is safest. ATMs are available near the MRT station.",
  },
  {
    q: "Is Shilin Night Market safe?",
    a: "Yes — it's one of the most heavily visited tourist areas in Taiwan and crime is not a meaningful concern. Pickpocketing in crowded weekend crowds is theoretically possible but very rare. The main practical concern is the crowd density on weekend evenings, which can make navigation slow and claustrophobic.",
  },
  {
    q: "Is there anything vegetarian at Shilin?",
    a: "Yes, though you need to look for it. Grilled corn, fresh fruit juice, taro ball shaved ice, scallion pancake (without pork), tanghulu, and most of the fresh fruit are all vegetarian. Some stalls near the entrance specifically cater to vegetarian customers and will be marked with the Chinese character 素. The underground food court has a dedicated vegetarian section.",
  },
  {
    q: "How does Shilin compare to Raohe?",
    a: "Shilin is bigger, louder, more tourist-oriented, and has a greater variety of food. Raohe is smaller, easier to navigate, slightly better quality on average, and more popular with Taipei locals for a regular night out. For first-timers, Shilin is the right choice. For repeat visitors, Raohe often wins. See our full comparison: Shilin vs Raohe.",
  },
];

export default function ShilinPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Night Markets", href: "/night-markets" },
          { name: "Shilin Night Market", href: "/night-markets/shilin" },
        ]}
      />
      <ArticleSchema
        headline="Shilin Night Market: The Complete Guide (2026)"
        description="Everything you need to know about Taipei's most famous night market — what to eat, what to skip, and how to navigate the crowd like a regular."
        url="/night-markets/shilin"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1698567045771-a22c872c26fa?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image src="https://images.unsplash.com/photo-1698567045771-a22c872c26fa?w=1200&h=600&auto=format&fit=crop&q=80" alt="Shilin Night Market Taipei" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">Night Market · Taipei</span>
            <span className="text-xs text-gray-400">15 min read</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Shilin Night Market: the complete guide
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Taiwan&apos;s most visited night market. Enormous, overwhelming, and genuinely worth it — if you know where to go and what to avoid.
          </p>
          <p className="text-xs text-gray-400 mt-3">By Mei-Lin Chen · Updated May 2026</p>
        </div>

        {/* Quick facts */}
        <section className="bg-blue-50 rounded-2xl p-6 mb-10 grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Getting there</p>
            <p className="text-sm text-blue-900">MRT Red Line → Jiantan Station (劍潭, R15). Exit 1, turn right. 3-min walk.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Hours</p>
            <p className="text-sm text-blue-900">4pm–midnight daily. Busiest 7–10pm weekends. Quietest Tuesday–Wednesday.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-1">Budget</p>
            <p className="text-sm text-blue-900">NT$300–600 for 5–8 items including a drink. Cash preferred.</p>
          </div>
        </section>

        {/* What Shilin is */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">What you need to know before you go</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Shilin Night Market (士林夜市) is not just Taipei&apos;s biggest night market — it&apos;s a rite of passage for anyone eating in Taiwan. Located in the Shilin District of northern Taipei, it draws an estimated 50,000 to 100,000 visitors on peak weekend evenings. The market has existed in some form since the late Qing dynasty, though it took its current shape in the 1950s and has been growing ever since.
            </p>
            <p>
              At its core, Shilin is two distinct zones stitched together: the outdoor street stalls that surround the main market building on Jihe Road and Danan Road, and the underground food court (地下美食區) beneath the building itself. Most first-time visitors see only the street level. This is a mistake.
            </p>
          </div>
        </section>

        {/* Two zones */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">The two zones: street level vs underground</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">🌙 Street level</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The iconic experience — hundreds of open-air stalls, neon signs, the smell of frying oil and grilled meat. This is where you&apos;ll find the XXL fried chicken, tanghulu, fresh fruit juice, and all the photogenic items. Louder, more chaotic, more fun. Best for snacking while you walk.
              </p>
              <p className="text-xs text-gray-400">Best for: snacking, atmosphere, first-time visitors</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">🏮 Underground food court</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The less-photographed section beneath the main building. Air-conditioned, with proper seating. This is where Taipei residents actually eat at Shilin — oyster vermicelli, pork blood soup, braised pork rice, shaved ice. Less chaos, better sitting-down meals, lower tourist density.
              </p>
              <p className="text-xs text-gray-400">Best for: eating a proper meal, avoiding crowds</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>The underground food court entrance</strong> is inside the main building on Jihe Road. Look for stairs leading down — there will be signage, but it&apos;s easy to miss. Once downstairs, seats are available even on busy weekends.
            </p>
          </div>
        </section>

        {/* What to eat */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-2">What to eat at Shilin</h2>
          <p className="text-gray-500 text-sm mb-6">The definitive list — what&apos;s worth the queue and what isn&apos;t.</p>
          <div className="space-y-5">
            {mustEat.map((item) => (
              <div key={item.name} className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-xs text-gray-400 ml-2">{item.chinese}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 shrink-0">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-blue-50 rounded-lg px-3 py-2">
                  <p className="text-xs font-medium text-blue-600 mb-0.5">Tip</p>
                  <p className="text-xs text-gray-700">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Underground picks */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-2">Underground food court picks</h2>
          <p className="text-gray-500 text-sm mb-5">The dishes locals actually come to Shilin for. Head downstairs and look for these.</p>
          <div className="space-y-3">
            {underground.map((item) => (
              <div key={item.name} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="text-xs text-gray-400">{item.chinese}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to skip */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">What to skip</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-3">
            <p>
              Not everything at Shilin is worth eating. Some items have become tourist traps — priced high, quality low, optimized for Instagram rather than taste.
            </p>
            <ul className="space-y-2 text-sm not-prose">
              {[
                { item: "Cheese potato spiral / tornado potato", reason: "NT$120–150 for what is essentially a fried potato. Not Taiwanese, not cheap, not particularly good." },
                { item: "Mango shaved ice near the entrance", reason: "Overpriced versions of a dish you can get better and cheaper deeper in the market or at any dedicated ice shop." },
                { item: "Bubble tea from the main market stalls", reason: "Generic quality. Go to a dedicated shop — 50 Lan, Tiger Sugar, or Chun Shui Tang — for a real bubble tea." },
                { item: "Anything with a photogenic English-language menu at the entrance", reason: "These stalls optimize for tourists who haven't entered the market yet. Walk three minutes deeper." },
              ].map((s) => (
                <li key={s.item} className="flex gap-3 py-2 border-b border-gray-100">
                  <span className="text-gray-400 shrink-0 mt-0.5">✕</span>
                  <div>
                    <p className="font-medium text-gray-900">{s.item}</p>
                    <p className="text-gray-500">{s.reason}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Best time to go */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">Best time to visit</h2>
          <div className="space-y-3">
            {[
              { time: "Tuesday / Wednesday, 7–9pm", rating: "⭐⭐⭐⭐⭐", desc: "The best experience. Fully operational market with roughly half the weekend crowd. Every stall open, queue times under 10 minutes." },
              { time: "Weekday evenings (Mon, Thu, Fri), 6–8pm", rating: "⭐⭐⭐⭐", desc: "Good. Less crowded than weekends, all major stalls operating. Friday picks up later in the evening." },
              { time: "Saturday / Sunday, before 6:30pm", rating: "⭐⭐⭐⭐", desc: "Arrive early on weekends and you'll beat the worst of the crowds. After 7pm it becomes significantly more congested." },
              { time: "Saturday / Sunday, 7–10pm", rating: "⭐⭐", desc: "The peak tourist experience — atmospheric, but queue times at popular stalls stretch to 30–40 minutes. Hard to move through the street stall areas." },
            ].map((t) => (
              <div key={t.time} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="shrink-0">
                  <p className="font-medium text-gray-900 text-sm">{t.time}</p>
                  <p className="text-xs mt-0.5">{t.rating}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insider tip */}
        <section className="mb-10 border-l-4 border-blue-400 pl-6">
          <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-2">Insider tip</p>
          <p className="text-gray-700 leading-relaxed">
            Go on a Tuesday or Wednesday evening. The market is still fully operational but tourist crowds drop by roughly half. You&apos;ll be able to eat at the best stalls without competing for space. Many Taipei locals won&apos;t visit Shilin on weekends for exactly this reason.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">Common tourist mistakes</h2>
          <div className="space-y-4">
            {mistakes.map((m) => (
              <div key={m.title} className="flex gap-4">
                <span className="text-coral-400 mt-0.5 text-lg font-bold shrink-0">✕</span>
                <div>
                  <p className="font-medium text-gray-900 mb-0.5">{m.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vegetarian */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">Vegetarian options</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Shilin is not a vegetarian-friendly destination by design, but there&apos;s more available than it first appears. The following are reliably vegetarian:
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            {["Fresh fruit juice (現打果汁)", "Grilled corn — request no butter (烤玉米)", "Taro ball shaved ice (芋圓剉冰)", "Tanghulu candied fruit (糖葫蘆)", "Scallion pancake without egg (蔥抓餅，不加蛋)", "Vegetarian stinky tofu (素臭豆腐) — look for 素 signs"].map((item) => (
              <div key={item} className="flex gap-2 items-center text-sm text-gray-600 bg-green-50 rounded-lg px-3 py-2">
                <span className="text-green-500">✓</span> {item}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">Frequently asked questions</h2>
          <div className="space-y-5">
            {faq.map((item) => (
              <div key={item.q}>
                <p className="font-medium text-gray-900 mb-1">{item.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Related guides</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/night-markets/shilin-vs-raohe" className="bg-coral-50 text-coral-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">⚔️ Shilin vs Raohe</Link>
            <Link href="/night-markets/raohe" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏮 Raohe Guide</Link>
            <Link href="/cities/taipei" className="bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🏙️ Taipei City Guide</Link>
            <Link href="/night-markets" className="bg-gray-50 text-gray-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">🌙 All Night Markets</Link>
          </div>
        </section>

        <div className="mb-10"><NewsletterSignup /></div>
      </div>
      <Footer />
    </main>
  );
}
