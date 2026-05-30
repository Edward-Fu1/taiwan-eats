import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Taiwan Trip Advice",
  description:
    "Get in touch with the Taiwan Trip Advice team — for editorial questions, partnership enquiries, or to say hello.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-4">Contact us</h1>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>
            Have a question, tip, or just want to say hi? We&apos;d love to hear from you.
          </p>

          <div className="grid gap-4 not-prose mt-8">
            <div className="bg-coral-50 border border-coral-100 rounded-2xl p-6">
              <p className="text-xs font-medium tracking-widest uppercase text-coral-600 mb-1">General enquiries</p>
              <p className="font-semibold text-gray-900 mb-1">Editorial &amp; reader questions</p>
              <p className="text-sm text-gray-600 mb-3">
                Corrections, suggestions, or questions about our guides.
              </p>
              <a
                href="mailto:hello@taiwantripadvice.com"
                className="inline-block bg-coral-600 hover:bg-coral-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                hello@taiwantripadvice.com
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-1">Partnerships</p>
              <p className="font-semibold text-gray-900 mb-1">Work with Taiwan Trip Advice</p>
              <p className="text-sm text-gray-600 mb-3">
                Food tours, restaurant partnerships, travel brand collaborations, and advertising.
              </p>
              <a
                href="mailto:hello@taiwantripadvice.com?subject=Partnership%20enquiry"
                className="inline-block border border-gray-200 hover:border-gray-400 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Get in touch →
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-1">Write for us</p>
              <p className="font-semibold text-gray-900 mb-1">Contribute a guide</p>
              <p className="text-sm text-gray-600 mb-3">
                Based in Taiwan? Know a market, dish, or restaurant that deserves more attention?
              </p>
              <a
                href="/write-for-us"
                className="inline-block border border-gray-200 hover:border-gray-400 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Writer guidelines →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
