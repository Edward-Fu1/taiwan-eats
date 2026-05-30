export const runtime = 'edge';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Subscribe — Taiwan Trip Advice",
  description: "Get the weekly Taiwan food brief — new restaurants, seasonal dishes, and tips every Thursday.",
};

export default function SubscribePage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">📬</div>
          <h1 className="font-serif text-4xl font-bold mb-3">The Taiwan food brief</h1>
          <p className="text-gray-500 leading-relaxed">
            Every Thursday: new restaurant openings, seasonal dishes, what&apos;s worth the queue,
            and one thing most tourists completely miss. Free, always.
          </p>
        </div>
        <NewsletterSignup />
      </div>
      <Footer />
    </main>
  );
}
