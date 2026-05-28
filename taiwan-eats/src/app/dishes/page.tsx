import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

const dishes = [
  { tag: "Noodles", title: "The best beef noodle soup in Taipei — ranked and mapped", readTime: "8 min read", location: "Taipei", emoji: "🍜", href: "/dishes/beef-noodle-soup-taipei", bgColor: "bg-coral-50", image: "https://picsum.photos/seed/noodle-soup/800/400" },
  { tag: "Drinks", title: "Ordering bubble tea like a local", readTime: "5 min read", emoji: "🧋", href: "/dishes/bubble-tea-guide", bgColor: "bg-amber-50", image: "https://picsum.photos/seed/bubble-drink/800/400" },
  { tag: "Street Food", title: "Scallion pancakes: the ultimate breakfast guide", readTime: "4 min read", emoji: "🥞", href: "/dishes/scallion-pancake", bgColor: "bg-green-50", image: "https://picsum.photos/seed/breakfast-street/800/400" },
  { tag: "Rice", title: "Lu rou fan: Taiwan's most comforting bowl", readTime: "6 min read", emoji: "🍱", href: "/dishes/lu-rou-fan", bgColor: "bg-coral-50", image: "https://picsum.photos/seed/braised-pork/800/400" },
  { tag: "Dumplings", title: "Where to eat xiao long bao outside of Din Tai Fung", readTime: "7 min read", location: "Taipei", emoji: "🥟", href: "/dishes/xiao-long-bao", bgColor: "bg-blue-50", image: "https://picsum.photos/seed/dumpling-steam/800/400" },
  { tag: "Seafood", title: "Oyster omelette: what it is and where to eat it", readTime: "5 min read", emoji: "🦪", href: "/dishes/oyster-omelette", bgColor: "bg-amber-50", image: "https://picsum.photos/seed/oyster-egg/800/400" },
];

export const metadata = {
  title: "Dish Guides — TaiwanEats",
  description: "Deep-dive guides to Taiwan's most iconic dishes.",
};

export default function DishesPage() {
  return (
    <main>
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-2">Dish guides</h1>
        <p className="text-gray-500 mb-10">Everything you need to know about Taiwan&apos;s most iconic foods.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {dishes.map((d) => <ArticleCard key={d.href} {...d} />)}
        </div>
      </div>
      <Footer />
    </main>
  );
}
