const BASE_URL = "https://taiwan-eats.pages.dev";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  /** ISO 8601 date string, e.g. "2026-05-29" */
  datePublished: string;
  /** ISO 8601 date string — defaults to datePublished if omitted */
  dateModified?: string;
  /** Relative path to hero image, e.g. "/images/beef-noodle.jpg" */
  image?: string;
  authorName?: string;
}

/**
 * Renders an Article JSON-LD schema for SEO rich results and AI Overviews.
 * Place at the top of every dish, city, and night-market page.
 */
export default function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
  authorName = "Mei-Lin Chen",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${BASE_URL}${url}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}${url}` },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      "@id": "https://taiwan-eats.pages.dev/about#author",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://taiwan-eats.pages.dev/#organization",
      name: "TaiwanEats",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-default.jpg`,
      },
    },
    ...(image
      ? {
          image: {
            "@type": "ImageObject",
            url: image.startsWith("http") ? image : `${BASE_URL}${image}`,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
