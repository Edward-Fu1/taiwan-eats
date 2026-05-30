import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { cities } from "@/lib/data";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Taiwan City Food Guides — Taipei, Tainan, Kaohsiung & More",
  description:
    "In-depth food guides for every major Taiwanese city — where to eat in Taipei, Tainan, Kaohsiung, and Taichung, from street stalls to famous restaurants.",
  alternates: { canonical: "/cities" },
};

export default async function CitiesPage() {
  const t = await getTranslations("citiesHub");
  const tCities = await getTranslations("cities");
  const tCommon = await getTranslations("common");

  const cityTaglines: Record<string, string> = {
    Taipei: tCities("taipeiTagline"),
    Tainan: tCities("tainanTagline"),
    Taichung: tCities("taichungTagline"),
    Kaohsiung: tCities("kaohsiungTagline"),
  };

  const cityDetails = [
    {
      name: "Taipei",
      href: "/cities/taipei",
      mustEat: [t("taipeiMustEat1"), t("taipeiMustEat2"), t("taipeiMustEat3")],
      description: t("taipeiDesc"),
    },
    {
      name: "Tainan",
      href: "/cities/tainan",
      mustEat: [t("tainanMustEat1"), t("tainanMustEat2"), t("tainanMustEat3")],
      description: t("tainanDesc"),
    },
    {
      name: "Taichung",
      href: "/cities/taichung",
      mustEat: [t("taichungMustEat1"), t("taichungMustEat2"), t("taichungMustEat3")],
      description: t("taichungDesc"),
    },
    {
      name: "Kaohsiung",
      href: "/cities/kaohsiung",
      mustEat: [t("kaohsiungMustEat1"), t("kaohsiungMustEat2"), t("kaohsiungMustEat3")],
      description: t("kaohsiungDesc"),
    },
  ];

  return (
    <main>
      <BreadcrumbSchema items={[{ name: "City Guides", href: "/cities" }]} />
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* Header */}
        <h1 className="font-serif text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
          {t("intro")}
        </p>

        {/* Regional differences callout */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-10">
          <h2 className="font-serif text-xl font-bold text-blue-900 mb-3">{t("regionalDiffTitle")}</h2>
          <p className="text-blue-800 leading-relaxed mb-3">{t("regionalDiffP1")}</p>
          <p className="text-blue-800 leading-relaxed">{t("regionalDiffP2")}</p>
        </div>

        {/* City cards */}
        <h2 className="font-serif text-2xl font-bold mb-4">{t("chooseCityTitle")}</h2>
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
              <p className={`text-sm ${city.text} opacity-70`}>
                {cityTaglines[city.name] ?? city.tagline}
              </p>
            </Link>
          ))}
        </div>

        {/* City snapshots */}
        <div className="border-t border-gray-200 pt-8 mb-10">
          <h2 className="font-serif text-2xl font-bold mb-6">{t("citySnapshotsTitle")}</h2>
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
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {tCommon("dontMiss")}
                  </p>
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
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">{t("whichCityTitle")}</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <span className="font-semibold">{t("whichCityFirstTime")}</span>{" "}
            {t("whichCityFirstTimeBody")}
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            <span className="font-semibold">{t("whichCityDoneTaipei")}</span>{" "}
            {t("whichCityDoneTaipeiBody")}
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">{t("whichCitySeafood")}</span>{" "}
            {t("whichCitySeafoodBody")}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
