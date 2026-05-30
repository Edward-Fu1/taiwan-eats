import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About TaiwanEats — Bilingual Taiwan Food Experts",
  description:
    "Meet the team behind TaiwanEats — bilingual writers who live and eat in Taiwan. Learn our editorial methodology and why we obsess over the details most food guides skip.",
  alternates: { canonical: "/about" },
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://taiwan-eats.pages.dev/about#author",
  name: "Mei-Lin Chen",
  jobTitle: "Editor-in-Chief",
  description:
    "Mei-Lin has lived in Taipei for over a decade, writing about food for regional publications before founding TaiwanEats in 2023.",
  url: "https://taiwan-eats.pages.dev/about",
  worksFor: {
    "@type": "Organization",
    "@id": "https://taiwan-eats.pages.dev/#organization",
    name: "TaiwanEats",
  },
  knowsAbout: [
    "Taiwanese cuisine",
    "Night markets",
    "Taipei food culture",
    "Tainan street food",
  ],
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-4">About TaiwanEats</h1>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>
            TaiwanEats is the definitive English-language guide to eating in Taiwan. We&apos;re obsessively
            detailed, bilingual, and unapologetically opinionated.
          </p>
          <p>
            Most food content about Taiwan is either too shallow (listicles written by people who visited once)
            or only available in Chinese. We&apos;re here to fix that — with deep-dive guides written by
            people who actually live here and eat everything.
          </p>
          <p>
            We cover dish guides, city guides, night markets, and food experiences. Everything is written in
            English with Chinese names and characters included so you can actually point at things when ordering.
          </p>

          {/* Named author — E-E-A-T signal */}
          <div className="bg-coral-50 border border-coral-100 rounded-2xl p-6 mt-8 not-prose">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-coral-200 flex items-center justify-center text-2xl flex-shrink-0">
                🍜
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base">Mei-Lin Chen</p>
                <p className="text-xs font-medium tracking-widest uppercase text-coral-600 mb-2">Editor-in-Chief</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mei-Lin has lived in Taipei for over a decade, writing about food for regional publications
                  before founding TaiwanEats in 2023. She speaks Mandarin and Taiwanese Hokkien, and has eaten
                  at over 600 stalls and restaurants across the island. Her principle: if it&apos;s not worth
                  going back to, it&apos;s not worth recommending.
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">Our editorial standards</h2>
          <p>
            Every restaurant, stall, and dish we recommend has been visited and paid for by our team. We do not
            accept free meals in exchange for coverage. Sponsored content is always clearly labeled as such.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">Work with us</h2>
          <p>
            We partner with food tour operators, restaurants, and travel brands who are a genuine fit for our
            audience. If that&apos;s you, reach out at{" "}
            <a href="mailto:hello@taiwaneats.com" className="text-coral-600 underline">hello@taiwaneats.com</a>.
          </p>
        </div>
        <div className="mt-12">
          <NewsletterSignup />
        </div>
      </div>
      <Footer />
    </main>
  );
}
