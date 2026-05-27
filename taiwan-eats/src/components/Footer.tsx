import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-serif text-lg">
          Taiwan<span className="italic text-coral-400">Eats</span>
        </Link>
        <div className="flex gap-6 text-xs text-gray-400">
          <Link href="/about" className="hover:text-gray-700">About</Link>
          <Link href="/write-for-us" className="hover:text-gray-700">Write for us</Link>
          <Link href="/advertise" className="hover:text-gray-700">Advertise</Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Instagram</a>
        </div>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} TaiwanEats</p>
      </div>
    </footer>
  );
}
