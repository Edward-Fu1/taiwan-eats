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
  title: "TaiwanEats — Your Guide to Eating Extraordinary in Taiwan",
  description:
    "Bilingual, honest, and obsessively detailed food guides for Taiwan. From night market staples to regional dishes most tourists never find.",
  keywords: ["Taiwan food", "Taiwan restaurants", "night markets", "Taipei food guide", "what to eat in Taiwan"],
  openGraph: {
    title: "TaiwanEats",
    description: "Your guide to eating extraordinary in Taiwan.",
    type: "website",
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
