import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const exploreLinks = [
    { href: "/dishes",        key: "dishes" },
    { href: "/night-markets", key: "nightMarkets" },
    { href: "/cities",        key: "cities" },
    { href: "/experiences",   key: "experiences" },
  ] as const;

  const infoLinks = [
    { href: "/about",         key: "about" },
    { href: "/write-for-us",  key: "writeForUs" },
    { href: "/advertise",     key: "advertise" },
    { href: "/contact",       key: "contact" },
    { href: "/privacy",       key: "privacy" },
  ] as const;

  const latestLinks = [
    { href: "/dishes/beef-noodle-soup-taipei", key: "beefNoodle" },
    { href: "/night-markets/shilin",           key: "shilin" },
    { href: "/dishes/bubble-tea-guide",        key: "bubbleTea" },
  ] as const;

  return (
    <footer className="bg-tw-indigo-600 mt-24">
      {/* Ornamental top border */}
      <div className="flex items-center gap-0" aria-hidden="true">
        <div className="flex-1 h-[2px] bg-terracotta-500/40" />
        <div className="px-3 py-0">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 0L9.33 2.5V7.5L5 10L.67 7.5V2.5Z" fill="#B56B45" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="flex-1 h-[2px] bg-terracotta-500/40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display text-[1.3rem] text-parchment hover:text-white transition-colors mb-4 block"
            >
              Taiwan<span className="text-jade-500">Eats</span>
            </Link>
            <p className="text-xs text-ink-light/60 font-sans leading-relaxed mb-5">
              {t("brandTagline")}
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-ink-light/50 hover:text-ink-light font-sans transition-colors"
              aria-label="TaiwanEats on Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              Instagram
            </a>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <p className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.08em] text-jade-500 mb-4">
              {t("explore")}
            </p>
            <ul className="space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.8125rem] font-sans text-ink-light/70 hover:text-parchment transition-colors"
                  >
                    {t(`exploreLinks.${l.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Info */}
          <div>
            <p className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.08em] text-jade-500 mb-4">
              {t("info")}
            </p>
            <ul className="space-y-2.5">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.8125rem] font-sans text-ink-light/70 hover:text-parchment transition-colors"
                  >
                    {t(`infoLinks.${l.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Latest */}
          <div>
            <p className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.08em] text-jade-500 mb-4">
              {t("latest")}
            </p>
            <ul className="space-y-3">
              {latestLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.8125rem] font-sans text-ink-light/70 hover:text-parchment transition-colors leading-snug block"
                  >
                    {t(`latestLinks.${l.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-parchment/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.75rem] font-sans text-ink-light/40">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-[0.75rem] font-sans text-ink-light/30 italic font-display">
            {t("writtenBy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
