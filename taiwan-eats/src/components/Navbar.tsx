"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // locale-stripped pathname
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/dishes",        label: t("dishes") },
    { href: "/night-markets", label: t("nightMarkets") },
    { href: "/cities",        label: t("cities") },
    { href: "/about",         label: t("about") },
  ];

  // Show border only after scrolling past the fold
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 bg-parchment/95 backdrop-blur-sm transition-shadow duration-200 ${
          scrolled ? "shadow-[0_1px_0_0_#E5DDD4]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logotype */}
          <Link
            href="/"
            className="font-display text-[1.25rem] tracking-[-0.01em] select-none"
            aria-label="TaiwanEats — home"
          >
            Taiwan<span className="text-terracotta-500">Eats</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-[0.8125rem] font-medium transition-colors pb-0.5 ${
                    active
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                  {/* Active indicator: 2px lantern underline */}
                  {active && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-lantern-500 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side: language switcher + search icon + hamburger */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <LanguageSwitcher variant="navbar" />

            {/* Search — decorative placeholder */}
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-ink-muted hover:text-ink hover:bg-parchment-warm transition-colors"
              aria-label="Search"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <circle cx="6.5" cy="6.5" r="4.5" />
                <line x1="10.5" y1="10.5" x2="14" y2="14" />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-ink-secondary hover:text-ink hover:bg-parchment-warm transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="3" y1="3" x2="15" y2="15" />
                    <line x1="15" y1="3" x2="3"  y2="15" />
                  </>
                ) : (
                  <>
                    <line x1="2" y1="5"  x2="16" y2="5"  />
                    <line x1="2" y1="9"  x2="16" y2="9"  />
                    <line x1="2" y1="13" x2="16" y2="13" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ────────────────────────── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed inset-0 z-50 flex flex-col
          bg-tw-indigo-600
          transition-transform duration-300 ease-in-out
          md:hidden
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Top bar inside overlay */}
        <div className="flex items-center justify-between px-6 h-16">
          <Link
            href="/"
            className="font-display text-[1.25rem] text-parchment"
            onClick={() => setMenuOpen(false)}
          >
            Taiwan<span className="text-jade-500">Eats</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-ink-light hover:text-parchment transition-colors"
            aria-label={t("closeMenu")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3"  y2="15" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col px-8 pt-10 gap-1 flex-1">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[2.75rem] font-light text-parchment/90 hover:text-parchment py-2 leading-tight transition-colors"
              style={{
                transitionDelay: menuOpen ? `${60 + i * 45}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 250ms ease ${60 + i * 45}ms, transform 250ms ease ${60 + i * 45}ms, color 150ms ease`,
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 opacity-30">
            <div className="flex-1 h-px bg-parchment" />
            <svg width="8" height="8" viewBox="0 0 10 10"><path d="M5 0L9.33 2.5V7.5L5 10L.67 7.5V2.5Z" fill="currentColor" className="text-parchment" /></svg>
            <div className="flex-1 h-px bg-parchment" />
          </div>

          {/* Language switcher in mobile menu */}
          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 250ms ease ${60 + navLinks.length * 45}ms`,
            }}
          >
            <p className="text-xs text-parchment/40 font-sans uppercase tracking-widest mb-3">Language</p>
            <LanguageSwitcher variant="mobile" />
          </div>

          <Link
            href="/subscribe"
            onClick={() => setMenuOpen(false)}
            className="mt-6 text-jade-500 hover:text-jade-200 font-sans text-sm font-medium transition-colors"
            style={{
              transitionDelay: menuOpen ? `${60 + navLinks.length * 45 + 60}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 250ms ease ${60 + navLinks.length * 45 + 60}ms`,
            }}
          >
            {t("subscribe")}
          </Link>
        </nav>

        {/* Footer note */}
        <p className="px-8 pb-10 text-xs text-ink-light/40 font-sans">
          {t("tagline")}
        </p>
      </div>
    </>
  );
}
