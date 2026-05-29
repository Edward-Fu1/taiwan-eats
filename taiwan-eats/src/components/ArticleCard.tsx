import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  tag: string;
  title: string;
  excerpt?: string;
  readTime: string;
  location?: string;
  emoji?: string;
  href: string;
  large?: boolean;
  textOnly?: boolean; // text-only variant — no image zone
  bgColor?: string;   // legacy — unused in new design
  image?: string;
}

// Maps content category → colored chip style
const categoryStyle: Record<string, { dot: string; text: string }> = {
  "Noodles":      { dot: "bg-terracotta-500", text: "text-terracotta-600" },
  "Drinks":       { dot: "bg-gold-500",       text: "text-gold-600" },
  "Street Food":  { dot: "bg-terracotta-500", text: "text-terracotta-600" },
  "Rice":         { dot: "bg-gold-500",       text: "text-gold-600" },
  "Dumplings":    { dot: "bg-terracotta-500", text: "text-terracotta-600" },
  "Seafood":      { dot: "bg-mist-500",       text: "text-mist-600" },
  "Taipei":       { dot: "bg-mist-500",       text: "text-mist-600" },
  "Tainan":       { dot: "bg-gold-500",       text: "text-gold-600" },
  "Kaohsiung":    { dot: "bg-mist-500",       text: "text-mist-600" },
  "Comparison":   { dot: "bg-tw-indigo-500",  text: "text-tw-indigo-500" },
  "Dish Guide":   { dot: "bg-terracotta-500", text: "text-terracotta-600" },
  "Drink Guide":  { dot: "bg-gold-500",       text: "text-gold-600" },
  "Night Market": { dot: "bg-lantern-500",    text: "text-lantern-600" },
};

const defaultStyle = { dot: "bg-ink-muted", text: "text-ink-secondary" };

export default function ArticleCard({
  tag, title, excerpt, readTime, location, href, large, textOnly, image,
}: ArticleCardProps) {
  const style = categoryStyle[tag] ?? defaultStyle;
  const imageHeight = large ? "h-52" : "h-40";

  return (
    <Link
      href={href}
      className="group block bg-white border border-parchment-border rounded-[10px] overflow-hidden hover:border-ink/20 hover:shadow-[0_4px_16px_rgba(26,23,20,0.08)] transition-all duration-200"
    >
      {/* Image zone — hidden in text-only variant */}
      {!textOnly && (
        <div className={`relative ${imageHeight} overflow-hidden bg-parchment-warm`}>
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              sizes={large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          ) : (
            // Fallback: subtle patterned background in category color
            <div className="w-full h-full opacity-30" aria-hidden="true">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`hex-${tag}`} x="0" y="0" width="24" height="28" patternUnits="userSpaceOnUse">
                    <polygon points="12,2 22,7 22,21 12,26 2,21 2,7" fill="none" stroke="#B56B45" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#hex-${tag})`} />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className={`p-4 ${textOnly ? "pt-5 pb-5" : ""}`}>
        {/* Category chip */}
        <div className={`cat-chip ${style.text} mb-2`}>
          <span className={`cat-dot ${style.dot}`} aria-hidden="true" />
          {tag}
        </div>

        {/* Title */}
        <h3
          className={`font-display font-semibold leading-snug text-ink group-hover:text-terracotta-500 transition-colors line-clamp-2 mb-2 ${
            large ? "text-[1.1875rem]" : "text-[1rem]"
          }`}
        >
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-[0.8125rem] text-ink-secondary font-sans leading-relaxed mb-3 line-clamp-2">
            {excerpt}
          </p>
        )}

        {/* Meta */}
        <p className="text-[0.75rem] font-sans text-ink-muted">
          {readTime}
          {location && <span className="before:content-['·'] before:mx-1.5">{location}</span>}
        </p>
      </div>
    </Link>
  );
}
