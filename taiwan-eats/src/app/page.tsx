import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories, featuredArticles, cities } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-14 mb-12">
          <div>
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-coral-600 bg-coral-50 px-3 py-1 rounded-lg mb-4">
              The definitive Taiwan food guide
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Your guide to eating{" "}
              <em className="text-coral-400">extraordinary</em> in Taiwan
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Bilingual, honest, and obsessively detailed. From night market staples
              to regional dishes most tourists never find.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/dishes"
                className="bg-coral-600 hover:bg-coral-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Explore dishes
              </Link>
              <Link
                href="/cities"
                className="border border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Browse by city
              </Link>
            </div>
          </div>

          {/* Food photo collage */}
          <div className="hidden md:flex gap-2 h-80">
            <div className="relative flex-1 rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/noodle-soup/600/600"
                alt="Taiwanese beef noodle soup"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-medium">Beef Noodle</span>
            </div>
            <div className="flex flex-col gap-2 w-36">
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/bubble-drink/400/300"
                  alt="Bubble tea"
                  fill
                  className="object-cover"
                  sizes="12vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">Bubble Tea</span>
              </div>
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/taiwan-dumplings/400/300"
                  alt="Xiao long bao"
                  fill
                  className="object-cover"
                  sizes="12vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">Xiaolongbao</span>
              </div>
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/shilin-night/400/300"
                  alt="Night market"
                  fill
                  className="object-cover"
                  sizes="12vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">Night Market</span>
              </div>
            </div>
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
                className={`${cat.bg} rounded-xl p-5 hover:shadow-md transition-all duration-200 group cursor-pointer`}
              >
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <div className="text-sm font-semibold mb-0.5">{cat.label}</div>
                <div className="text-xs text-gray-500">{cat.count}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured articles */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-1">Featured reads</p>
              <h2 className="font-serif text-2xl font-bold">Where to eat right now</h2>
            </div>
            <Link
              href="/dishes"
              className="text-xs font-medium text-coral-600 hover:text-coral-800 transition-colors"
            >
              See all →
            </Link>
          </div>
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
                className={`${city.bg} rounded-xl p-5 hover:shadow-md transition-all duration-200 group cursor-pointer`}
              >
                <h3 className={`font-serif text-lg font-bold ${city.text} mb-0.5`}>
                  {city.name} <span className="font-normal">{city.chinese}</span>
                </h3>
                <p className={`text-xs ${city.text} opacity-70`}>{city.tagline}</p>
                <p className={`text-xs ${city.text} opacity-50 mt-2 font-medium`}>Explore →</p>
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
