"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";

// Uses next-intl's Link with `locale` prop — this is intentional.
// When switching to English (default locale), it navigates through /en/...
// which triggers the middleware to update the NEXT_LOCALE cookie to "en"
// before redirecting to the prefix-free URL. Without this, clicking EN while
// the cookie holds "ko" would cause the middleware to redirect back to /ko.

const locales = [
  { code: "en", label: "EN" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "es", label: "ES" },
] as const;

type Props = {
  variant?: "navbar" | "mobile";
};

export default function LanguageSwitcher({ variant = "navbar" }: Props) {
  const locale = useLocale();
  const pathname = usePathname(); // locale-stripped pathname, e.g. "/" or "/dishes"
  const t = useTranslations("language");

  if (variant === "mobile") {
    return (
      <div className="flex flex-wrap gap-2" aria-label={t("switchTo")}>
        {locales.map((l) => {
          const isActive = locale === l.code;
          return (
            <Link
              key={l.code}
              href={pathname}
              locale={l.code}
              className={`
                text-sm font-sans font-medium px-3 py-1.5 rounded-lg transition-colors
                ${isActive
                  ? "bg-terracotta-500 text-white"
                  : "bg-white/10 text-parchment/70 hover:text-parchment hover:bg-white/15"
                }
              `}
              aria-current={isActive ? "true" : undefined}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    );
  }

  // Navbar variant — compact pill row
  return (
    <div
      className="hidden md:flex items-center gap-0.5 border border-parchment-border rounded-lg px-1 py-0.5"
      aria-label={t("switchTo")}
    >
      {locales.map((l) => {
        const isActive = locale === l.code;
        return (
          <Link
            key={l.code}
            href={pathname}
            locale={l.code}
            className={`
              text-[0.6875rem] font-sans font-semibold px-2 py-1 rounded-md transition-colors
              ${isActive
                ? "bg-terracotta-500 text-white"
                : "text-ink-muted hover:text-ink"
              }
            `}
            aria-current={isActive ? "true" : undefined}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
