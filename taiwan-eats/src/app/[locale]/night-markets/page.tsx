import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const markets = [
  { tag: "Taipei", title: "Shilin Night Market: the complete guide", readTime: "10 min read", location: "Taipei", emoji: "🌙", href: "/night-markets/shilin", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1535898331935-2d274aff0fbc?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Taipei", title: "Raohe Night Market: smaller, better, less crowded", readTime: "7 min read", location: "Taipei", emoji: "🏮", href: "/night-markets/raohe", bgColor: "bg-coral-50", image: "https://images.unsplash.com/photo-1616658589225-aa7e64e59c13?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Comparison", title: "Shilin vs Raohe: which market is actually better?", readTime: "4 min read", location: "Taipei", emoji: "⚖️", href: "/night-markets/shilin-vs-raohe", bgColor: "bg-purple-50", image: "https://images.unsplash.com/photo-1640698706443-80c6485f277d?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Tainan", title: "Huayuan Night Market: Tainan's best kept secret", readTime: "6 min read", location: "Tainan", emoji: "🌟", href: "/night-markets/huayuan", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1672172506036-637c69759a9e?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Kaohsiung", title: "Liuhe Night Market: seafood heaven in Kaohsiung", readTime: "8 min read", location: "Kaohsiung", emoji: "🦐", href: "/night-markets/liuhe", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1545504573-edac76c6a487?w=800&h=400&auto=format&fit=crop&q=80" },
];

export const metadata = {
  title: "Taiwan Night Market Guide — Shilin, Raohe, Huayuan & Liuhe",
  description:
    "Complete guides to Taiwan's best night markets — Shilin, Raohe, Huayuan, and Liuhe. What to eat, when to go, how to navigate, and what to skip.",
  alternates: { canonical: "/night-markets" },
};

export default function NightMarketsPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: "Night Markets", href: "/night-markets" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Header */}
        <h1 className="font-serif text-4xl font-bold mb-4">Night market guides</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          Night markets (夜市, yèshì) are the beating heart of Taiwanese food culture — outdoor bazaars that open around sunset and run until midnight or later, selling everything from stinky tofu to fresh-squeezed sugarcane juice. Here&apos;s how to navigate every major one.
        </p>

        {/* What is a night market */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-10">
          <h2 className="font-serif text-xl font-bold text-blue-900 mb-3">What to know before you go</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">The culture</h3>
              <p className="text-blue-800 leading-relaxed text-sm">
                Night markets aren&apos;t just tourist attractions — they&apos;re where Taiwanese families eat dinner, teenagers hang out, and office workers grab supper. The food is cheap (most items NT$50–150), portions are small by design so you can try multiple things, and the atmosphere is genuinely chaotic in the best way. Go hungry. Go with cash.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Practical tips</h3>
              <ul className="text-blue-800 text-sm space-y-1.5 leading-relaxed">
                <li><span className="font-medium">Cash only</span> — most vendors don&apos;t accept cards</li>
                <li><span className="font-medium">Go at 8–10pm</span> — peak atmosphere; 6pm is too quiet</li>
                <li><span className="font-medium">Order one item per stall</span> — don&apos;t load up; keep moving</li>
                <li><span className="font-medium">Avoid weekends</span> if you hate crowds</li>
                <li><span className="font-medium">Follow the queues</span> — a line means the food is worth it</li>
                <li><span className="font-medium">Wear comfortable shoes</span> — you&apos;ll walk 2–3km easily</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Markets grid */}
        <h2 className="font-serif text-2xl font-bold mb-4">All night market guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {markets.map((m) => <ArticleCard key={m.href} {...m} large />)}
        </div>

        {/* Taipei vs South Taiwan */}
        <div className="border-t border-gray-200 pt-8 mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">Taipei vs southern Taiwan markets</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-base">Taipei markets</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Shilin and Raohe are the two giants. Shilin is Taiwan&apos;s most famous and most visited — massive, touristy in places, but genuinely excellent food if you know which stalls to target. Raohe is calmer, more local-feeling, and easier to navigate in an evening. If you have time for only one Taipei market, Raohe gives most people a better experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Taipei markets tend to have stronger Japanese and modernised influences — you&apos;ll find more fusion snacks, trendy desserts, and Instagram-friendly presentation. Prices are slightly higher than in the south.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-base">Southern Taiwan markets</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Tainan&apos;s Huayuan Market and Kaohsiung&apos;s Liuhe Market reflect a different food culture — older recipes, more emphasis on seafood, stronger Hokkien flavour traditions. Tainan is considered the most historically significant food city in Taiwan; even the snacks carry centuries of history.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Liuhe in Kaohsiung is famous for its seafood — whole grilled fish, fresh oysters, sea cucumber soup — at prices that feel impossibly cheap by any global standard. If seafood is your priority, Liuhe over Shilin, every time.
              </p>
            </div>
          </div>
        </div>

        {/* Foods not to miss */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-4">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Foods worth seeking at any market</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Stinky tofu 臭豆腐</p>
              <p className="text-gray-600 leading-relaxed">Fermented, deep-fried, and served with pickled cabbage and chilli. The smell is confronting; the taste is addictive. Don&apos;t let the odour stop you.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Scallion pancake 蔥油餅</p>
              <p className="text-gray-600 leading-relaxed">Flaky, layered, often topped with egg. One of Taiwan&apos;s great breakfast and midnight snack crossovers. Order it with egg (加蛋, jiā dàn).</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Oyster vermicelli 蚵仔麵線</p>
              <p className="text-gray-600 leading-relaxed">Thin wheat noodles in a thick, slightly gelatinous broth with fresh oysters and pork intestine. A Taiwanese comfort food staple that costs around NT$60.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Bubble milk tea 珍珠奶茶</p>
              <p className="text-gray-600 leading-relaxed">Night market tea shops let you customise sweetness and ice to a degree most tourists don&apos;t know to ask for. Always order &quot;少糖少冰&quot; (less sugar, less ice) at minimum.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Grilled corn 烤玉米</p>
              <p className="text-gray-600 leading-relaxed">Brushed with soy sauce, sesame oil, and butter, then chargrilled. It sounds simple. It tastes better than it has any right to. A universal night market presence.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Pineapple cake 鳳梨酥</p>
              <p className="text-gray-600 leading-relaxed">Buttery shortbread filled with pineapple jam (sometimes mixed with winter melon). The definitive Taiwanese souvenir pastry — buy them fresh at a bakery stall, not pre-packaged.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
