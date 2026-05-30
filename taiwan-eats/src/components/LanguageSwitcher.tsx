"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import Link from "next/link";

const locales = [
  { code: "en", label: "EN" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "es", label: "ES" },
] as const;

// Build the locale-prefixed URL directly so we never generate /en (default has no prefix)
function localePath(pathname: string, code: string): string {
  if (code === "en") return pathname || "/";
  const base = pathname === "/" ? "" : pathname;
  return `/${code}${base}`;
}

type Props = {
  variant?: "navbar" | "mobile";
};

export default function LanguageSwitcher({ variant = "navbar" }: Props) {
  const locale = useLocale();
  const pathname = usePathname(); // locale-stripped, e.g. "/" or "/dishes"
  const t = useTranslations("language");

  if (variant === "mobile") {
    return (
      <div className="flex flex-wrap gap-2" aria-label={t("switchTo")}>
        {locales.map((l) => {
          const isActive = locale === l.code;
          const href = localePath(pathname, l.code);
          return (
            <Link
              key={l.code}
              href={href}
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
        const href = localePath(pathname, l.code);
        return (
          <Link
            key={l.code}
            href={href}
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
