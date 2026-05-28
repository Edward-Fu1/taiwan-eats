import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Advertise — TaiwanEats",
  description: "Partner with TaiwanEats to reach English-speaking food lovers travelling to Taiwan.",
};

export default function AdvertisePage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-4">Partner with TaiwanEats</h1>
        <div className="prose text-gray-600 leading-relaxed space-y-4">
          <p>
            TaiwanEats reaches English-speaking travellers actively planning trips to Taiwan — people
            deciding where to eat, which tours to book, and what to do.
          </p>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">Who we work with</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Food tour operators and cooking class providers</li>
            <li>Restaurants and food businesses in Taiwan</li>
            <li>Travel brands with a genuine fit for our audience</li>
            <li>Hotel and accommodation partners</li>
          </ul>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">What we don&apos;t do</h2>
          <p>
            We don&apos;t run display ads or accept paid placements that look like editorial content.
            Every partnership is clearly disclosed.
          </p>
          <p>
            Get in touch at{" "}
            <a href="mailto:hello@taiwaneats.com" className="text-coral-400 underline">
              hello@taiwaneats.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
