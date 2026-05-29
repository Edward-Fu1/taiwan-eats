import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Cormorant Garamond — display headings, logotype, pull quotes
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        // Lora — article body text
        serif: ["var(--font-lora)", "Georgia", "serif"],
        // Plus Jakarta Sans — UI, labels, captions, non-article body
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        // Legacy coral kept for unredesigned pages
        coral: {
          50:  "#FBF0EA",
          100: "#F5D9C9",
          200: "#EBB396",
          400: "#CB8050",
          600: "#935537",
          800: "#6F3F28",
        },
        // ── Taiwan Mist Design System ──────────────────────────────
        lantern: {
          50:  "#FDF2F1",
          100: "#FBDBD8",
          200: "#F6B5AF",
          400: "#D85C50",
          500: "#C03A2B",
          600: "#9B2F23",
          700: "#7A241B",
        },
        terracotta: {
          50:  "#FBF0EA",
          100: "#F5D9C9",
          200: "#EBBA96",
          400: "#CB8050",
          500: "#B56B45",
          600: "#935537",
          700: "#6F3F28",
        },
        mist: {
          50:  "#EEF6F1",
          100: "#D4EAD9",
          200: "#A9D5B4",
          400: "#5EA07A",
          500: "#4A7860",
          600: "#3A6049",
          700: "#2A4835",
        },
        jade: {
          50:  "#F0F7F3",
          100: "#D8EDE0",
          200: "#B1DBBC",
          500: "#8CAE9A",
          600: "#6A9480",
        },
        "tw-indigo": {
          50:  "#EEF0F6",
          100: "#D1D6E8",
          200: "#A3ADCF",
          500: "#3A4F6E",
          600: "#2D3A5C",
          700: "#1F2942",
          900: "#131A2E",
        },
        gold: {
          50:  "#FBF5E9",
          100: "#F5E4C1",
          200: "#EBCA83",
          400: "#D4A853",
          500: "#C9963A",
          600: "#A97B2E",
          700: "#7C5A21",
        },
        parchment: {
          DEFAULT: "#FAFAF8",
          warm:    "#F5EFE6",
          border:  "#E5DDD4",
        },
        ink: {
          DEFAULT:   "#1A1714",
          secondary: "#5C5449",
          muted:     "#9B9086",
          light:     "#CDC4BA",
        },
      },
      maxWidth: {
        prose: "680px",
      },
    },
  },
  plugins: [],
};

export default config;
