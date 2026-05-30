export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Taiwan Dish Guides — Beef Noodle, Bubble Tea & More",
  description:
    "Detailed guides to Taiwan's most iconic dishes — beef noodle soup, bubble tea, scallion pancakes, oyster omelette, lu rou fan, and xiao long bao. Find your next obsession.",
  alternates: { canonical: "/dishes" },
};

export default async function DishesPage() {
  const t = await getTranslations("dishesHub");

  const dishes = [
    { tag: t("noodlesTag"), title: t("beefNoodleTitle"), readTime: `8 ${t("minRead")}`, location: "Taipei", emoji: "🍜", href: "/dishes/beef-noodle-soup-taipei", bgColor: "bg-coral-50", image: "https://images.unsplash.com/photo-1770216990625-ccd378cf7a33?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("drinksTag"), title: t("bubbleTeaTitle"), readTime: `5 ${t("minRead")}`, emoji: "🧋", href: "/dishes/bubble-tea-guide", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("streetFoodTag"), title: t("scallionPancakeTitle"), readTime: `4 ${t("minRead")}`, emoji: "🥞", href: "/dishes/scallion-pancake", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1734333107773-aa204e40738a?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("riceTag"), title: t("luRouFanTitle"), readTime: `6 ${t("minRead")}`, emoji: "🍱", href: "/dishes/lu-rou-fan", bgColor: "bg-coral-50", image: "https://images.unsplash.com/photo-1679279726937-122c49626802?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("dumplingsTag"), title: t("xiaoLongBaoTitle"), readTime: `7 ${t("minRead")}`, location: "Taipei", emoji: "🥟", href: "/dishes/xiao-long-bao", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1694834589398-27b369c6f7a6?w=800&h=400&auto=format&fit=crop&q=80" },
    { tag: t("seafoodTag"), title: t("oysterOmeletteTitle"), readTime: `5 ${t("minRead")}`, emoji: "🦪", href: "/dishes/oyster-omelette", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1617692855081-cfd0a4062f2a?w=800&h=400&auto=format&fit=crop&q=80" },
  ];

  return (
    <main>
      <BreadcrumbSchema items={[{ name: "Dish Guides", href: "/dishes" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Header */}
        <h1 className="font-serif text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          {t("intro")}
        </p>

        {/* Editorial intro */}
        <div className="bg-amber-50 rounded-2xl p-6 mb-10">
          <h2 className="font-serif text-xl font-bold text-amber-900 mb-3">{t("whatMakesDiffTitle")}</h2>
          <p className="text-amber-800 leading-relaxed mb-3">{t("whatMakesDiffP1")}</p>
          <p className="text-amber-800 leading-relaxed mb-3">{t("whatMakesDiffP2")}</p>
          <p className="text-amber-800 leading-relaxed">{t("whatMakesDiffP3")}</p>
        </div>

        {/* Dish grid */}
        <h2 className="font-serif text-2xl font-bold mb-4">{t("allDishesTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {dishes.map((d) => <ArticleCard key={d.href} {...d} />)}
        </div>

        {/* Quick reference section */}
        <div className="border-t border-gray-200 pt-8 mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">{t("whereToStartTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("firstTimeTitle")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("firstTimeBody")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("streetFoodTitle")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("streetFoodBody")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("longerStaysTitle")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("longerStaysBody")}</p>
            </div>
          </div>
        </div>

        {/* How we write section */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-4">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">{t("howWeWriteTitle")}</h2>
          <p className="text-gray-700 leading-relaxed mb-3">{t("howWeWriteP1")}</p>
          <p className="text-gray-700 leading-relaxed">{t("howWeWriteP2")}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
