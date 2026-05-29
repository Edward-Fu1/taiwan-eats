const BASE_URL = "https://taiwan-eats.pages.dev";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Renders a BreadcrumbList JSON-LD schema for SEO rich results.
 * Usage: <BreadcrumbSchema items={[{ name: "Dishes", href: "/dishes" }, { name: "Beef Noodle", href: "/dishes/beef-noodle-soup-taipei" }]} />
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
