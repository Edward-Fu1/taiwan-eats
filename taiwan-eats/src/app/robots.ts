import { MetadataRoute } from "next";

const BASE_URL = "https://taiwan-eats.pages.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard crawlers
      {
        userAgent: "*",
        allow: "/",
      },
      // Allow AI search / citation bots
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      // Block mass training scrapers
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
