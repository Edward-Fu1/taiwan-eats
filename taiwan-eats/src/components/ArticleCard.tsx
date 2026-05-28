import Link from "next/link";
import Image from "next/image";

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
  image?: string;
}

export default function ArticleCard({
  tag, title, excerpt, readTime, location, emoji, href, large, bgColor = "bg-coral-50", image,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group block border border-gray-100 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white cursor-pointer"
    >
      <div className={`relative ${large ? "h-52" : "h-40"} overflow-hidden`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ) : (
          <div className={`${bgColor} w-full h-full flex items-center justify-center ${large ? "text-6xl" : "text-4xl"}`}>
            {emoji}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-medium tracking-widest uppercase text-coral-600 mb-1">{tag}</p>
        <h3 className={`font-serif font-bold leading-snug mb-2 group-hover:text-coral-600 transition-colors line-clamp-2 ${large ? "text-lg" : "text-sm"}`}>
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{excerpt}</p>
        )}
        <p className="text-xs text-gray-400">
          {readTime}{location && ` · ${location}`}
        </p>
      </div>
    </Link>
  );
}
