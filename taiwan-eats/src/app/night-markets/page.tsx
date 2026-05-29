import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const markets = [
  { tag: "Taipei", title: "Shilin Night Market: the complete guide", readTime: "10 min read", location: "Taipei", emoji: "🌙", href: "/night-markets/shilin", bgColor: "bg-blue-50", image: "https://picsum.photos/seed/shilin-night/800/400" },
  { tag: "Taipei", title: "Raohe Night Market: smaller, better, less crowded", readTime: "7 min read", location: "Taipei", emoji: "🏮", href: "/night-markets/raohe", bgColor: "bg-coral-50", image: "https://picsum.photos/seed/raohe-market/800/400" },
  { tag: "Tainan", title: "Huayuan Night Market: Tainan's best kept secret", readTime: "6 min read", location: "Tainan", emoji: "🌟", href: "/night-markets/huayuan", bgColor: "bg-amber-50", image: "https://picsum.photos/seed/huayuan-tainan/800/400" },
  { tag: "Kaohsiung", title: "Liuhe Night Market: seafood heaven in Kaohsiung", readTime: "8 min read", location: "Kaohsiung", emoji: "🦐", href: "/night-markets/liuhe", bgColor: "bg-green-50", image: "https://picsum.photos/seed/liuhe-seafood/800/400" },
];

export const metadata = {
  title: "Taiwan Night Market Guide — Shilin, Raohe & Beyond",
  description:
    "Complete guides to Taiwan's best night markets — Shilin, Raohe, Huayuan, and Liuhe. What to eat, when to go, and how to navigate like a local.",
  alternates: { canonical: "/night-markets" },
};

export default function NightMarketsPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: "Night Markets", href: "/night-markets" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-2">Night markets</h1>
        <p className="text-gray-500 mb-10">Schedules, maps, and what to eat — for every major night market in Taiwan.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {markets.map((m) => <ArticleCard key={m.href} {...m} large />)}
        </div>
      </div>
      <Footer />
    </main>
  );
}
