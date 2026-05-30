export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Taiwan Night Market Guide — Shilin, Raohe, Huayuan & Liuhe",
  description:
    "Complete guides to Taiwan's best night markets — Shilin, Raohe, Huayuan, and Liuhe. What to eat, when to go, how to navigate, and what to skip.",
  alternates: { canonical: "/night-markets" },
};

export default async function NightMarketsPage() {
  const t = await getTranslations("nightMarketsHub");

  const markets = [
    { tag: t("taipeiTag"), title: t("shilinTitle"), readTime: "10 min read", location: "Taipei", emoji: "🌙", href: "/night-markets/shilin", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1535898331935-2d274aff0fbc?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("taipeiTag"), title: t("raoheTitle"), readTime: "7 min read", location: "Taipei", emoji: "🏮", href: "/night-markets/raohe", bgColor: "bg-coral-50", image: "https://images.unsplash.com/photo-1616658589225-aa7e64e59c13?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("comparisonTag"), title: t("comparisonTitle"), readTime: "4 min read", location: "Taipei", emoji: "⚖️", href: "/night-markets/shilin-vs-raohe", bgColor: "bg-purple-50", image: "https://images.unsplash.com/photo-1640698706443-80c6485f277d?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("tainanTag"), title: t("huayuanTitle"), readTime: "6 min read", location: "Tainan", emoji: "🌟", href: "/night-markets/huayuan", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1672172506036-637c69759a9e?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("kaohsiungTag"), title: t("liuheTitle"), readTime: "8 min read", location: "Kaohsiung", emoji: "🦐", href: "/night-markets/liuhe", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1545504573-edac76c6a487?w=800&h=400&auto=format&fit=crop&q=80" },
  ];

  const foods = [
    { name: t("stinkyTofuName"), desc: t("stinkyTofuDesc") },
    { name: t("scallionPancakeName"), desc: t("scallionPancakeDesc") },
    { name: t("oysterVermicelliName"), desc: t("oysterVermicelliDesc") },
    { name: t("bubbleMilkTeaName"), desc: t("bubbleMilkTeaDesc") },
    { name: t("grilledCornName"), desc: t("grilledCornDesc") },
    { name: t("pineappleCakeName"), desc: t("pineappleCakeDesc") },
  ];

  return (
    <main>
      <BreadcrumbSchema items={[{ name: "Night Markets", href: "/night-markets" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Header */}
        <h1 className="font-serif text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          {t("intro")}
        </p>

        {/* What to know */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-10">
          <h2 className="font-serif text-xl font-bold text-blue-900 mb-3">{t("whatToKnowTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">{t("cultureTitle")}</h3>
              <p className="text-blue-800 leading-relaxed text-sm">{t("cultureBody")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">{t("tipsTitle")}</h3>
              <ul className="text-blue-800 text-sm space-y-1.5 leading-relaxed">
                {([t("tip1"), t("tip2"), t("tip3"), t("tip4"), t("tip5"), t("tip6")] as string[]).map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Markets grid */}
        <h2 className="font-serif text-2xl font-bold mb-4">{t("allMarketsTitle")}</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {markets.map((m) => <ArticleCard key={m.href} {...m} large />)}
        </div>

        {/* Taipei vs South Taiwan */}
        <div className="border-t border-gray-200 pt-8 mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">{t("taipeiVsSouthTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-base">{t("taipeiMarketsTitle")}</h3>
              <p className="text-gray-600 leading-relaxed mb-3">{t("taipeiMarketsP1")}</p>
              <p className="text-gray-600 leading-relaxed">{t("taipeiMarketsP2")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-base">{t("southernMarketsTitle")}</h3>
              <p className="text-gray-600 leading-relaxed mb-3">{t("southernMarketsP1")}</p>
              <p className="text-gray-600 leading-relaxed">{t("southernMarketsP2")}</p>
            </div>
          </div>
        </div>

        {/* Foods not to miss */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-4">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">{t("foodsTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {foods.map((food) => (
              <div key={food.name}>
                <p className="font-semibold text-gray-900 mb-1">{food.name}</p>
                <p className="text-gray-600 leading-relaxed">{food.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
