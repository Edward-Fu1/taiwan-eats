import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const dishes = [
  { tag: "Noodles", title: "The best beef noodle soup in Taipei — ranked and mapped", readTime: "8 min read", location: "Taipei", emoji: "🍜", href: "/dishes/beef-noodle-soup-taipei", bgColor: "bg-coral-50", image: "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Drinks", title: "Ordering bubble tea like a local", readTime: "5 min read", emoji: "🧋", href: "/dishes/bubble-tea-guide", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1600340432752-a407bab94cc3?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Street Food", title: "Scallion pancakes: the ultimate breakfast guide", readTime: "4 min read", emoji: "🥞", href: "/dishes/scallion-pancake", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1755742185654-da9810c73431?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Rice", title: "Lu rou fan: Taiwan's most comforting bowl", readTime: "6 min read", emoji: "🍱", href: "/dishes/lu-rou-fan", bgColor: "bg-coral-50", image: "https://images.unsplash.com/premium_photo-1712849058524-7f5e94474fe6?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Dumplings", title: "Where to eat xiao long bao outside of Din Tai Fung", readTime: "7 min read", location: "Taipei", emoji: "🥟", href: "/dishes/xiao-long-bao", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1678026582164-24a5460c447a?w=800&h=400&auto=format&fit=crop&q=80" },
  { tag: "Seafood", title: "Oyster omelette: what it is and where to eat it", readTime: "5 min read", emoji: "🦪", href: "/dishes/oyster-omelette", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1761624780913-c523590ca6fa?w=800&h=400&auto=format&fit=crop&q=80" },
];

export const metadata = {
  title: "Taiwan Dish Guides — Beef Noodle, Bubble Tea & More",
  description:
    "Detailed guides to Taiwan's most iconic dishes — beef noodle soup, bubble tea, scallion pancakes, oyster omelette, lu rou fan, and xiao long bao. Find your next obsession.",
  alternates: { canonical: "/dishes" },
};

export default function DishesPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: "Dish Guides", href: "/dishes" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Header */}
        <h1 className="font-serif text-4xl font-bold mb-4">Dish guides</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          Taiwan has one of the world&apos;s great street food cultures — and understanding it dish by dish is the fastest way to eat better. These guides cover the history, the best places to try each dish, how to order in Chinese, and what separates the excellent from the average.
        </p>

        {/* Editorial intro */}
        <div className="bg-amber-50 rounded-2xl p-6 mb-10">
          <h2 className="font-serif text-xl font-bold text-amber-900 mb-3">What makes Taiwanese food different</h2>
          <p className="text-amber-800 leading-relaxed mb-3">
            Taiwanese cuisine sits at a crossroads. It draws from Hokkien and Hakka cooking traditions brought by Han settlers, absorbs fifty years of Japanese colonial influence (you can taste it in the clean broths, the pickled sides, the obsession with quality ingredients), and layers on waves of influence from Mainland China — the beef noodle soup that&apos;s now Taiwan&apos;s national dish arrived with soldiers from Sichuan in the late 1940s.
          </p>
          <p className="text-amber-800 leading-relaxed mb-3">
            The result is a cuisine that&apos;s simultaneously humble and technically demanding. A bowl of lu rou fan (braised pork rice) costs NT$50 at a street stall and has been perfected by the same vendor for three decades. Xiao long bao — soup dumplings — require a practised hand and years of training to make properly. Both exist in the same city, often on the same street.
          </p>
          <p className="text-amber-800 leading-relaxed">
            The flavour building blocks you&apos;ll encounter again and again: soy sauce (醬油), rice wine (米酒), sesame oil (麻油), five-spice powder (五香粉), and a heavy hand with fresh scallion. Learn to recognise those and you&apos;ll start to understand why Taiwanese food tastes the way it does.
          </p>
        </div>

        {/* Dish grid */}
        <h2 className="font-serif text-2xl font-bold mb-4">All dish guides</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {dishes.map((d) => <ArticleCard key={d.href} {...d} />)}
        </div>

        {/* Quick reference section */}
        <div className="border-t border-gray-200 pt-8 mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">Where to start</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">First-time visitors</h3>
              <p className="text-gray-600 leading-relaxed">
                Start with beef noodle soup — it&apos;s the dish most visitors eat first and the one most likely to permanently ruin restaurant noodles back home. Follow with lu rou fan and a scallion pancake breakfast. Three dishes that cover the full range of what Taiwanese cooking does best.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Street food explorers</h3>
              <p className="text-gray-600 leading-relaxed">
                Oyster omelette and scallion pancakes are quintessential night market eating — messy, cheap, and impossible to replicate outside Taiwan. The oyster omelette guide covers exactly which texture to expect and how to tell a good one from a soggy disappointment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Longer stays</h3>
              <p className="text-gray-600 leading-relaxed">
                If you&apos;re spending more than a week, the bubble tea guide teaches you to customise your order the way locals do — sweetness level, ice level, which tea base to choose, and which chains are actually worth visiting versus the ones tourists queue for by mistake.
              </p>
            </div>
          </div>
        </div>

        {/* How we write section */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-4">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">How we write these guides</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Every guide on TaiwanEats is researched in person. We eat at the places we recommend — multiple visits, different days, different times of day. We include Traditional Chinese characters throughout so you can point at menus or show your phone to vendors. We note price ranges in New Taiwan Dollars (NT$) and flag when hours or locations are subject to change.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We don&apos;t accept payment for recommendations. The rankings and picks are based on flavour, consistency, and value — nothing else. When a restaurant declines in quality, we update the guide.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
