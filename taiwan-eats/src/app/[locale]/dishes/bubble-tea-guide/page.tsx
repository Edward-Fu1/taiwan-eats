export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "How to Order Bubble Tea Like a Local in Taiwan",
  description: "A complete guide to ordering bubble tea in Taiwan — sweetness levels, ice levels, and the brands worth the queue. Everything you need to know before you order.",
  alternates: { canonical: "/dishes/bubble-tea-guide" },
};

export default async function BubbleTeaGuidePage() {
  const t = await getTranslations("bubbleTea");
  const tCommon = await getTranslations("common");

  const types = [
    { emoji: "🧋", name: t("classicMilkTeaName"), chinese: "珍珠奶茶", desc: t("classicMilkTeaDesc") },
    { emoji: "🍵", name: t("tieguanyinName"), chinese: "鐵觀音奶茶", desc: t("tieguanyinDesc") },
    { emoji: "🥛", name: t("freshMilkTeaName"), chinese: "鮮奶茶", desc: t("freshMilkTeaDesc") },
    { emoji: "🍋", name: t("lemonGreenTeaName"), chinese: "檸檬綠茶", desc: t("lemonGreenTeaDesc") },
    { emoji: "🟤", name: t("brownSugarName"), chinese: "黑糖鮮奶茶", desc: t("brownSugarDesc") },
    { emoji: "🍑", name: t("passionFruitName"), chinese: "百香果綠茶", desc: t("passionFruitDesc") },
  ];

  const sweetnessLevels = [
    { level: "全糖 (100%)", label: t("sweet100Label") },
    { level: "少糖 (50%)", label: t("sweet50Label") },
    { level: "微糖 (25%)", label: t("sweet25Label") },
    { level: "無糖 (0%)", label: t("sweet0Label") },
  ];

  const iceLevels = [
    { level: "正常冰", label: t("iceNormalLabel") },
    { level: "少冰 (50%)", label: t("ice50Label") },
    { level: "微冰 (30%)", label: t("ice30Label") },
    { level: "去冰", label: t("iceNoneLabel") },
  ];

  const shops = [
    { name: "Chun Shui Tang", chinese: "春水堂", note: t("chunShuiTangNote") },
    { name: "Tiger Sugar", chinese: "老虎堂", note: t("tigerSugarNote") },
    { name: "Yifang Taiwan Fruit Tea", chinese: "一芳台灣水果茶", note: t("yifangNote") },
    { name: "50 Lan", chinese: "50嵐", note: t("fiftyLanNote") },
  ];

  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Dish Guides", href: "/dishes" },
          { name: "Bubble Tea Guide", href: "/dishes/bubble-tea-guide" },
        ]}
      />
      <ArticleSchema
        headline="How to Order Bubble Tea Like a Local in Taiwan"
        description="A complete guide to ordering bubble tea in Taiwan — sweetness levels, ice levels, and the brands worth the queue. Everything you need to know before you order."
        url="/dishes/bubble-tea-guide"
        datePublished="2026-05-29"
        image="https://images.unsplash.com/photo-1600340432752-a407bab94cc3?w=1200&h=630&auto=format&fit=crop&q=80"
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />

        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1600340432752-a407bab94cc3?w=1200&h=600&auto=format&fit=crop&q=80"
            alt="Bubble tea"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">
              {t("tag")}
            </span>
            <span className="text-xs text-gray-400">{t("readTime")}</span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Sweetness/Ice guide */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-5">{t("sweetnessIceTitle")}</h2>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">{t("sweetnessIceIntro")}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 rounded-xl p-5">
              <p className="text-xs font-medium tracking-widest uppercase text-amber-500 mb-3">
                {t("sweetnessLabel")}
              </p>
              <div className="space-y-2 text-sm">
                {sweetnessLevels.map((s) => (
                  <div key={s.level}>
                    <span className="font-medium text-gray-800">{s.level}</span>
                    <span className="text-gray-500 block text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <p className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-3">
                {t("iceLabel")}
              </p>
              <div className="space-y-2 text-sm">
                {iceLevels.map((s) => (
                  <div key={s.level}>
                    <span className="font-medium text-gray-800">{s.level}</span>
                    <span className="text-gray-500 block text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-l-4 border-amber-400 pl-5">
            <p className="text-sm text-gray-700">
              <span className="font-medium">{t("localDefault")}</span>{" "}
              {t("localDefaultText")}
            </p>
          </div>
        </section>

        {/* Types */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">{t("whatToOrderTitle")}</h2>
          <div className="space-y-4">
            {types.map((type) => (
              <div key={type.name} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mt-0.5">{type.emoji}</span>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-medium text-gray-900">{type.name}</span>
                    <span className="text-xs text-gray-400">{type.chinese}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where to go */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold mb-4">{t("whereToGoTitle")}</h2>
          <div className="space-y-3">
            {shops.map((shop) => (
              <div key={shop.name} className="py-3 border-b border-gray-50">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="font-medium text-gray-900">{shop.name}</span>
                  <span className="text-xs text-gray-400">{shop.chinese}</span>
                </div>
                <p className="text-sm text-gray-500">{shop.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
            {tCommon("keepExploring")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes" className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">
              🍜 {tCommon("allDishGuides")}
            </Link>
            <Link href="/cities/taipei" className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">
              🏙️ {tCommon("taipeiGuide")}
            </Link>
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
