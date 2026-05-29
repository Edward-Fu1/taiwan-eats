import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import OrnamentDivider from "@/components/OrnamentDivider";
import TaiwanMascot from "@/components/TaiwanMascot";
import { featuredArticles } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://taiwan-eats.pages.dev/#organization",
      name: "TaiwanEats",
      url: "https://taiwan-eats.pages.dev",
      description: "Bilingual, honest, and obsessively detailed food guides for Taiwan.",
      inLanguage: "en",
      email: "hello@taiwaneats.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://taiwan-eats.pages.dev/#website",
      url: "https://taiwan-eats.pages.dev",
      name: "TaiwanEats",
      description: "Your guide to eating extraordinary in Taiwan — dishes, cities, and night markets.",
      publisher: { "@id": "https://taiwan-eats.pages.dev/#organization" },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://taiwan-eats.pages.dev/dishes?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// Category tiles — SVG icons referencing hexagonal temple window geometry
const categories = [
  {
    label: "Dish Guides",
    tagline: "From beef noodle to bubble tea",
    href: "/dishes",
    accent: "text-terracotta-500",
    border: "border-terracotta-100",
    bg: "bg-terracotta-50 hover:bg-terracotta-100/60",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11C3 7.134 6.686 4 11 4s8 3.134 8 7" />
        <line x1="1" y1="11" x2="21" y2="11" />
        <path d="M6 16h10" />
        <path d="M8 19h6" />
      </svg>
    ),
  },
  {
    label: "Night Markets",
    tagline: "Shilin, Raohe, and beyond",
    href: "/night-markets",
    accent: "text-lantern-500",
    border: "border-lantern-100",
    bg: "bg-lantern-50 hover:bg-lantern-100/60",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L11 5" />
        <path d="M7 4L9 6.5" />
        <path d="M15 4L13 6.5" />
        <path d="M6.5 7.5C6.5 7.5 5 9 5 11C5 14.314 7.686 17 11 17C14.314 17 17 14.314 17 11C17 9 15.5 7.5 15.5 7.5H6.5Z" />
        <line x1="8" y1="20" x2="14" y2="20" />
        <line x1="11" y1="17" x2="11" y2="20" />
      </svg>
    ),
  },
  {
    label: "City Guides",
    tagline: "Taipei, Tainan, Kaohsiung",
    href: "/cities",
    accent: "text-mist-600",
    border: "border-mist-100",
    bg: "bg-mist-50 hover:bg-mist-100/60",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="5" height="13" />
        <rect x="8" y="4" width="6" height="17" />
        <rect x="14" y="10" width="5" height="11" />
        <line x1="1" y1="21" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    label: "Experiences",
    tagline: "Food tours & cooking classes",
    href: "/experiences",
    accent: "text-gold-600",
    border: "border-gold-100",
    bg: "bg-gold-50 hover:bg-gold-100/60",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L14.4 8.8L21.5 9.3L16.2 13.8L17.9 21L12 17.3L6.1 21L7.8 13.8L2.5 9.3L9.6 8.8L12 2Z" />
      </svg>
    ),
  },
];

const cityList = [
  { name: "Taipei",    chinese: "台北",   tagline: "The capital of eating well",    href: "/cities/taipei" },
  { name: "Tainan",    chinese: "台南",   tagline: "Taiwan's true food capital",     href: "/cities/tainan" },
  { name: "Taichung",  chinese: "台中",   tagline: "Café culture and night life",    href: "/cities/taichung" },
  { name: "Kaohsiung", chinese: "高雄",   tagline: "Seafood and harbour eats",       href: "/cities/kaohsiung" },
];

export default function HomePage() {
  // Split featured articles for asymmetric grid
  const [lead, ...rest] = featuredArticles;

  return (
    <main className="bg-parchment min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="bg-parchment-warm"
        aria-label="Site introduction"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          {/* Eyebrow label */}
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-terracotta-500 mb-5">
            The definitive Taiwan food guide
          </p>

          {/* Headline */}
          <h1 className="font-display font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6 text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] max-w-3xl">
            Your guide to eating{" "}
            <em className="not-italic text-terracotta-500">extraordinary</em>
            {" "}in Taiwan
          </h1>

          {/* Deck */}
          <p className="font-sans text-[1.0625rem] md:text-[1.125rem] text-ink-secondary leading-relaxed mb-10 max-w-xl">
            Bilingual, honest, and obsessively detailed. From night market staples
            to regional dishes most visitors never find.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/dishes"
              className="font-sans text-[0.875rem] font-medium bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-2.5 rounded-md transition-colors duration-150"
            >
              Explore dishes
            </Link>
            <Link
              href="/cities"
              className="font-sans text-[0.875rem] font-medium border border-parchment-border hover:border-ink/30 hover:bg-white text-ink px-5 py-2.5 rounded-md transition-colors duration-150"
            >
              Browse by city
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Featured Articles ─────────────────────────────────── */}
        <section className="pt-16 pb-4" aria-label="Featured articles">
          <OrnamentDivider className="mb-10" />

          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">
                Featured reads
              </p>
              <h2 className="font-display text-[1.75rem] font-semibold text-ink leading-tight">
                Where to eat right now
              </h2>
            </div>
            <Link
              href="/dishes"
              className="font-sans text-[0.8125rem] font-medium text-terracotta-500 hover:text-terracotta-600 transition-colors hidden sm:block"
            >
              All guides →
            </Link>
          </div>

          {/* Asymmetric 3:2 grid — large card left, two stacked right */}
          <div className="grid md:grid-cols-5 gap-4">
            {lead && (
              <div className="md:col-span-3">
                <ArticleCard {...lead} large />
              </div>
            )}
            <div className="md:col-span-2 flex flex-col gap-4">
              {rest.map((article) => (
                <ArticleCard key={article.href} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Category Browse ───────────────────────────────────── */}
        <section className="py-14" aria-label="Browse by category">
          <OrnamentDivider className="mb-10" />

          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-6">
            Browse by category
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`
                  ${cat.bg} border ${cat.border}
                  rounded-[10px] p-5
                  transition-all duration-200
                  group cursor-pointer
                `}
              >
                <div className={`${cat.accent} mb-3`} aria-hidden="true">
                  {cat.icon}
                </div>
                <p className="font-sans text-[0.9375rem] font-semibold text-ink mb-0.5 group-hover:text-ink transition-colors">
                  {cat.label}
                </p>
                <p className="font-sans text-[0.75rem] text-ink-muted leading-snug">
                  {cat.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── City Guide List ────────────────────────────────────── */}
        <section className="py-4 pb-16" aria-label="City guides">
          <OrnamentDivider className="mb-10" />

          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-1">
                Explore by city
              </p>
              <h2 className="font-display text-[1.75rem] font-semibold text-ink leading-tight">
                Choose your next destination
              </h2>
            </div>
            <Link
              href="/cities"
              className="font-sans text-[0.8125rem] font-medium text-terracotta-500 hover:text-terracotta-600 transition-colors hidden sm:block"
            >
              All cities →
            </Link>
          </div>

          {/* Editorial list — more refined than coloured tiles */}
          <div className="divide-y divide-parchment-border">
            {cityList.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="flex items-center justify-between py-4 group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[1.375rem] font-semibold text-ink group-hover:text-terracotta-500 transition-colors">
                    {city.name}
                  </span>
                  <span className="font-display text-[1.125rem] font-light text-ink-muted">
                    {city.chinese}
                  </span>
                  <span className="font-sans text-[0.8125rem] text-ink-secondary hidden sm:block">
                    {city.tagline}
                  </span>
                </div>
                <span
                  className="font-sans text-[0.8125rem] text-ink-muted group-hover:text-terracotta-500 group-hover:translate-x-0.5 transition-all"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Newsletter ─────────────────────────────────────────── */}
        <section className="pb-20">
          <NewsletterSignup />
        </section>

      </div>

      <Footer />
      <TaiwanMascot />
    </main>
  );
}
