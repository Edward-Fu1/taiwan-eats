import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "About — TaiwanEats",
};

export default function AboutPage() {
  return (
    <main>
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
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">Work with us</h2>
          <p>
            We partner with food tour operators, restaurants, and travel brands who are a genuine fit for our
            audience. If that&apos;s you, reach out at <a href="mailto:hello@taiwaneats.com" className="text-coral-400 underline">hello@taiwaneats.com</a>.
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
