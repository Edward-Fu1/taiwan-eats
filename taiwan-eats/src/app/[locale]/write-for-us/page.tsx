import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Write for Us — Taiwan Trip Advice",
  description: "Contribute to Taiwan Trip Advice — the definitive English-language travel guide for Taiwan.",
};

export default function WriteForUsPage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-4">Write for Taiwan Trip Advice</h1>
        <div className="prose text-gray-600 leading-relaxed space-y-4">
          <p>
            We publish deep-dive food guides written by people who actually live in Taiwan and eat everything.
            If that&apos;s you, we want to hear from you.
          </p>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">What we&apos;re looking for</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Dish deep-dives with historical context and where to eat them</li>
            <li>City and neighbourhood eating guides</li>
            <li>Night market and street food reporting</li>
            <li>Seasonal and regional specialities most tourists miss</li>
          </ul>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">The deal</h2>
          <p>
            We pay per piece. All articles are bilingual (English + Chinese names and characters).
            You need to be based in Taiwan or visiting for an extended period — we don&apos;t
            commission articles from people who visited once.
          </p>
          <p>
            Pitch us at{" "}
            <a href="mailto:write@taiwaneats.com" className="text-coral-400 underline">
              write@taiwaneats.com
            </a>{" "}
            with a brief bio and two or three ideas.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
