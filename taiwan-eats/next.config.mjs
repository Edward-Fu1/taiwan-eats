import { fileURLToPath } from "url";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the tracing root to the project dir so Next.js doesn't crawl up to
  // a wrong workspace root (happens locally when ~/package-lock.json exists)
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        // Free Unsplash photos CDN
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Unsplash+ premium photos CDN
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
