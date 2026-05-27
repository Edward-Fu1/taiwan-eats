import Link from "next/link";

interface ArticleCardProps {
  tag: string;
  title: string;
  excerpt?: string;
  readTime: string;
  location?: string;
  emoji: string;
  href: string;
  large?: boolean;
  bgColor?: string;
}

export default function ArticleCard({
  tag, title, excerpt, readTime, location, emoji, href, large, bgColor = "bg-coral-50",
}: ArticleCardProps) {
  return (
    <Link href={href} className="group block border border-gray-100 rounded-xl overflow-hidden hover:border-gray-300 transition-colors bg-white">
      <div className={`${bgColor} flex items-center justify-center ${large ? "h-48" : "h-28"} text-${large ? "6xl" : "4xl"}`}>
        {emoji}
      </div>
      <div className="p-4">
        <p className="text-xs font-medium tracking-widest uppercase text-coral-600 mb-1">{tag}</p>
        <h3 className={`font-serif font-bold leading-snug mb-2 group-hover:text-coral-600 transition-colors ${large ? "text-lg" : "text-sm"}`}>
          {title}
        </h3>
        {excerpt && <p className="text-sm text-gray-500 leading-relaxed mb-3">{excerpt}</p>}
        <p className="text-xs text-gray-400">
          {readTime}{location && ` · ${location}`}
        </p>
      </div>
    </Link>
  );
}
