import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
      <body className={`${dmSans.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
