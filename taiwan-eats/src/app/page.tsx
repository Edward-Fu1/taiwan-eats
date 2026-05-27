import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories, featuredArticles, cities } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-coral-600 bg-coral-50 px-3 py-1 rounded-lg mb-4">
              The definitive Taiwan food guide
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Your guide to eating{" "}
              <em className="text-coral-400">extraordinary</em> in Taiwan
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-6 font-light">
              Bilingual, honest, and obsessively detailed. From night market staples
              to regional dishes most tourists never find.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/dishes"
                className="bg-coral-400 hover:bg-coral-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Explore dishes
              </Link>
              <Link
                href="/cities"
                className="border border-gray-200 hover:border-gray-400 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Browse by city
              </Link>
            </div>
          </div>

          {/* Dish grid visual */}
          <div className="bg-coral-50 rounded-2xl p-4 grid grid-cols-3 gap-2">
            {[
              { emoji: "🍜", label: "Beef Noodle" },
              { emoji: "🧋", label: "Bubble Tea" },
              { emoji: "🥟", label: "Xiao Long Bao" },
              { emoji: "🍱", label: "Lu Rou Fan" },
              { emoji: "🦪", label: "Oyster Omelette" },
              { emoji: "🥞", label: "Scallion Pancake" },
            ].map((dish) => (
              <div
                key={dish.label}
                className="bg-coral-100 rounded-xl py-5 flex flex-col items-center justify-center gap-1"
              >
                <span className="text-3xl">{dish.emoji}</span>
                <span className="text-xs font-medium text-coral-600 text-center leading-tight">{dish.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Browse by category</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`${cat.bg} rounded-xl p-5 hover:opacity-90 transition-opacity`}
              >
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <div className="text-sm font-medium mb-0.5">{cat.label}</div>
                <div className="text-xs text-gray-500">{cat.count}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured articles */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Featured reads</p>
          <h2 className="font-serif text-2xl font-bold mb-5">Where to eat right now</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredArticles.map((article, i) => (
              <ArticleCard
                key={article.href}
                {...article}
                large={i === 0}
              />
            ))}
          </div>
        </section>

        {/* City cards */}
        <section className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Explore by city</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className={`${city.bg} rounded-xl p-5 hover:opacity-90 transition-opacity`}
              >
                <h3 className={`font-serif text-lg font-bold ${city.text} mb-0.5`}>
                  {city.name} <span className="font-normal">{city.chinese}</span>
                </h3>
                <p className={`text-xs ${city.text} opacity-70`}>{city.tagline}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-10">
          <NewsletterSignup />
        </section>
      </div>

      <Footer />
    </main>
  );
}
