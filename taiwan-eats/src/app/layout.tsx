import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Plus_Jakarta_Sans } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

// Display headings, logotype, pull quotes — calligraphic quality, editorial elegance
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Article body text — warm, humanist serif ideal for long-form reading
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

// UI, labels, captions, nav — clean humanist sans with warm personality
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taiwan-eats.pages.dev"),
  title: {
    default: "Taiwan Trip Advice — Your Complete Guide to Taiwan",
    template: "%s | Taiwan Trip Advice",
  },
  description:
    "Honest, detailed travel guides for Taiwan — food, cities, transport and everything in between. Plan your perfect Taiwan trip.",
  keywords: ["Taiwan travel", "Taiwan trip", "Taiwan guide", "Taipei travel guide", "what to do in Taiwan"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Taiwan Trip Advice — Your Guide to Extraordinary Travel in Taiwan",
    description:
      "Honest, detailed travel guides for Taiwan — food, cities, transport and everything in between.",
    type: "website",
    url: "https://taiwan-eats.pages.dev",
    siteName: "Taiwan Trip Advice",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Taiwan Trip Advice — your complete guide to Taiwan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiwan Trip Advice — Your Guide to Extraordinary Travel in Taiwan",
    description:
      "Honest, detailed travel guides for Taiwan — food, cities, transport and everything in between.",
    images: ["/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${cormorant.variable} ${lora.variable} ${jakarta.variable} font-sans bg-parchment text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
