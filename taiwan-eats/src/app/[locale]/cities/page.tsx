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

const cityDetails = [
  {
    name: "Taipei",
    href: "/cities/taipei",
    mustEat: ["Beef noodle soup", "Xiao long bao", "Scallion pancake"],
    description:
      "Taiwan's capital is a city of contrasts: Michelin-starred restaurants two blocks from a NT$60 bowl of braised pork rice. The beef noodle soup scene alone justifies a trip. Start in Da'an District for cafés and Japanese-style izakayas, then head to Zhongshan for traditional breakfast shops that open at 5am.",
  },
  {
    name: "Tainan",
    href: "/cities/tainan",
    mustEat: ["Danzi noodles", "Coffin bread", "Milkfish congee"],
    description:
      "Taiwan's oldest city is where the food obsession goes deepest. Tainan has more traditional Hokkien dishes per square kilometre than anywhere else in Taiwan — and locals are fiercely proud of them. Breakfast culture here starts before 7am with 虱目魚粥 (milkfish congee) and the city is famous for sweets that appear nowhere else.",
  },
  {
    name: "Taichung",
    href: "/cities/taichung",
    mustEat: ["Sun cake", "Bubble tea (birthplace)", "Taichung-style lu rou fan"],
    description:
      "Taichung is where bubble tea was invented — the city takes that claim seriously, and the tea shop competition here is fierce. Beyond drinks, Taichung has developed Taiwan's most vibrant independent café culture, a strong Japanese-influenced bakery scene, and night markets that feel less touristy than Taipei's.",
  },
  {
    name: "Kaohsiung",
    href: "/cities/kaohsiung",
    mustEat: ["Grilled seafood", "Oyster omelette", "Liuhe market snacks"],
    description:
      "As a port city, Kaohsiung's food identity is built on the sea. The Liuhe Night Market is one of Taiwan's best for fresh seafood at reasonable prices — whole grilled fish, steamed clams, sea cucumber soup. Beyond seafood, Kaohsiung's Hakka communities have preserved cooking traditions that are harder to find in the north.",
  },
];

export default function CitiesPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: "City Guides", href: "/cities" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Header */}
        <h1 className="font-serif text-4xl font-bold mb-4">City guides</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          Taiwan is a small island with enormous regional food variation. What you eat in Tainan tastes nothing like what you eat in Taipei — different ingredients, different traditions, different obsessions. Each guide covers the city&apos;s defining dishes, the best neighbourhoods to eat in, and the restaurants worth making a reservation for.
        </p>

        {/* Regional differences callout */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-10">
          <h2 className="font-serif text-xl font-bold text-blue-900 mb-3">Taiwan&apos;s regional food differences</h2>
          <p className="text-blue-800 leading-relaxed mb-3">
            Taiwan&apos;s food culture divides roughly north–south, with the biggest distinction between Taipei and Tainan. Taipei absorbed Japanese influence heavily during the colonial period and later developed a cosmopolitan restaurant scene with strong Chinese regional diversity. Tainan preserved older Hokkien and Taiwanese Aboriginal food traditions; its dishes are often sweeter (more rock sugar), more labour-intensive, and deeply local.
          </p>
          <p className="text-blue-800 leading-relaxed">
            Kaohsiung&apos;s coastal identity means seafood dominates in a way it doesn&apos;t elsewhere. Taichung sits in the middle — geographically and culinarily — with a thriving modern food scene built on excellent local ingredients from the surrounding agricultural plains.
          </p>
        </div>

        {/* City cards */}
        <h2 className="font-serif text-2xl font-bold mb-4">Choose a city</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
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

        {/* City snapshots */}
        <div className="border-t border-gray-200 pt-8 mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">City snapshots</h2>
          <div className="space-y-8">
            {cityDetails.map((city) => (
              <div key={city.name} className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <Link href={city.href} className="group">
                    <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-2">
                      {city.name} →
                    </h3>
                  </Link>
                  <p className="text-gray-600 leading-relaxed text-sm">{city.description}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Don&apos;t miss</p>
                  <ul className="space-y-1">
                    {city.mustEat.map((item) => (
                      <li key={item} className="text-sm text-gray-700 flex items-start gap-1.5">
                        <span className="text-amber-500 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Which city first */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-4">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">Which city should you visit first?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <span className="font-semibold">If this is your first time in Taiwan:</span> Start with Taipei. The infrastructure for visitors is excellent, the food variety is unmatched, and it&apos;s the easiest entry point. Two or three days of eating seriously in Taipei will give you a strong foundation for understanding what Taiwanese cuisine actually is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            <span className="font-semibold">If you&apos;ve done Taipei before:</span> Go south. Tainan in particular is a revelation for anyone who assumes they&apos;ve &quot;done&quot; Taiwanese food — it&apos;s a completely different register. Take the high-speed rail (HSR) from Taipei; Tainan is under two hours away.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">If seafood is your priority:</span> Kaohsiung. The combination of Liuhe Night Market and the city&apos;s seafood restaurants makes it the best destination on the island for fresh fish, shellfish, and everything that comes from the surrounding waters.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
