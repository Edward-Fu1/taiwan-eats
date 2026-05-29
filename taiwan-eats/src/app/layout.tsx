import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Plus_Jakarta_Sans } from "next/font/google";
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
    default: "Taiwan Food Guide — Restaurants, Dishes & Night Markets | TaiwanEats",
    template: "%s | TaiwanEats",
  },
  description:
    "Bilingual, honest, and obsessively detailed food guides for Taiwan. From night market staples to regional dishes most tourists never find.",
  keywords: ["Taiwan food", "Taiwan restaurants", "night markets", "Taipei food guide", "what to eat in Taiwan"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "TaiwanEats — Your Guide to Eating Extraordinary in Taiwan",
    description:
      "Bilingual, honest, and obsessively detailed food guides for Taiwan. From night market staples to regional dishes most tourists never find.",
    type: "website",
    url: "https://taiwan-eats.pages.dev",
    siteName: "TaiwanEats",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "TaiwanEats — Taiwan food guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaiwanEats — Your Guide to Eating Extraordinary in Taiwan",
    description:
      "Bilingual, honest, and obsessively detailed food guides for Taiwan.",
    images: ["/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lora.variable} ${jakarta.variable} font-sans bg-parchment text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
