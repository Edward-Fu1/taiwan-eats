import Link from "next/link";

const exploreLinks = [
  { href: "/dishes",        label: "Dish Guides" },
  { href: "/night-markets", label: "Night Markets" },
  { href: "/cities",        label: "City Guides" },
  { href: "/experiences",   label: "Experiences" },
];

const infoLinks = [
  { href: "/about",         label: "About us" },
  { href: "/write-for-us",  label: "Write for us" },
  { href: "/advertise",     label: "Advertise" },
  { href: "/contact",       label: "Contact" },
  { href: "/privacy",       label: "Privacy" },
];

const latestLinks = [
  { href: "/dishes/beef-noodle-soup-taipei", label: "Best beef noodle soup in Taipei — ranked" },
  { href: "/night-markets/shilin",           label: "Shilin Night Market: the complete guide" },
  { href: "/dishes/bubble-tea-guide",        label: "How to order bubble tea like a local" },
];

export default function Footer() {
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
              The definitive English-language food guide for Taiwan — bilingual, honest, and obsessively detailed.
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
              Explore
            </p>
            <ul className="space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.8125rem] font-sans text-ink-light/70 hover:text-parchment transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Info */}
          <div>
            <p className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.08em] text-jade-500 mb-4">
              Info
            </p>
            <ul className="space-y-2.5">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.8125rem] font-sans text-ink-light/70 hover:text-parchment transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Latest */}
          <div>
            <p className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.08em] text-jade-500 mb-4">
              Latest
            </p>
            <ul className="space-y-3">
              {latestLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.8125rem] font-sans text-ink-light/70 hover:text-parchment transition-colors leading-snug block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-parchment/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.75rem] font-sans text-ink-light/40">
            © {new Date().getFullYear()} TaiwanEats
          </p>
          <p className="text-[0.75rem] font-sans text-ink-light/30 italic font-display">
            Written by people who eat in Taiwan
          </p>
        </div>
      </div>
    </footer>
  );
}
