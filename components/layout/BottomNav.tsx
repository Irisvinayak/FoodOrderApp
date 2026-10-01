"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UtensilsCrossed, ShoppingBag, User } from "lucide-react";

const items = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/menu", label: "Menu", Icon: UtensilsCrossed },
  { href: "/cart", label: "Cart", Icon: ShoppingBag },
  { href: "/account", label: "Account", Icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-[var(--card)] md:hidden">
      <ul className="grid grid-cols-4">
        {items.map(({ href, label, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center gap-0.5 py-2 text-xs ${active ? "text-lantern font-semibold" : "text-[var(--muted)]"}`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
