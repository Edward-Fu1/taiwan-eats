"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/dishes", label: "Dishes" },
  { href: "/cities", label: "Cities" },
  { href: "/night-markets", label: "Night Markets" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Taiwan<span className="italic text-coral-400">Eats</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/subscribe"
          className="hidden md:inline-block text-xs font-medium bg-coral-600 hover:bg-coral-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Subscribe
        </Link>

        <button
          className="md:hidden text-gray-600 hover:text-gray-900 transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden border-t border-gray-100 overflow-hidden transition-all duration-200 ease-in-out ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-gray-900 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-coral-600 hover:text-coral-800 transition-colors"
          >
            Subscribe →
          </Link>
        </div>
      </div>
    </nav>
  );
}
