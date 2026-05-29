import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { cities } from "@/lib/data";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Taiwan City Food Guides — Taipei, Tainan, Kaohsiung & More",
  description:
    "In-depth food guides for every major Taiwanese city — where to eat in Taipei, Tainan, Kaohsiung, and Taichung, from street stalls to famous restaurants.",
  alternates: { canonical: "/cities" },
};

export default function CitiesPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: "City Guides", href: "/cities" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />
        <h1 className="font-serif text-4xl font-bold mb-2">City guides</h1>
        <p className="text-gray-500 mb-10">Pick a city and start eating.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className={`${city.bg} rounded-2xl p-8 hover:opacity-90 transition-opacity`}
            >
              <h2 className={`font-serif text-3xl font-bold ${city.text} mb-1`}>
                {city.name} <span className="font-normal">{city.chinese}</span>
              </h2>
              <p className={`text-sm ${city.text} opacity-70`}>{city.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
