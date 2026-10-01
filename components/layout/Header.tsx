import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-lantern text-rice shadow-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-display text-2xl tracking-wide">
          Wok <span className="text-gold">&amp;</span> Roll
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-medium hover:text-gold">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/cart" aria-label="Cart" className="rounded-full p-2 hover:bg-lantern-dark">
          <ShoppingBag className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
