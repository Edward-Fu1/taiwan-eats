export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Taiwan Food Tours & Cooking Classes",
  description:
    "Curated food tours, cooking classes, and market walks across Taiwan. Expert-led experiences in Taipei, Tainan, and beyond — all personally vetted by our team.",
  alternates: { canonical: "/experiences" },
};

export default function ExperiencesPage() {
  return (
    <main>
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-2">Experiences</h1>
        <p className="text-gray-500 mb-10">Food tours, cooking classes, and market walks across Taiwan.</p>

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-12 text-center mb-12">
          <div className="text-5xl mb-4">🧑‍🍳</div>
          <h2 className="font-serif text-2xl font-bold mb-2">Coming soon</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            We&apos;re vetting the best food tours and cooking classes in Taiwan. Subscribe to be the first to know when we launch.
          </p>
        </div>

        <NewsletterSignup />
      </div>
      <Footer />
    </main>
  );
}
