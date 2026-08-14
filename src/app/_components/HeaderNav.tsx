"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", left: 858, width: 45 },
  { label: "FAQ", href: "/faq", left: 936, width: 31 },
  { label: "About us", href: "/about", left: 1000, width: 68 },
  { label: "Pricing", href: "/pricing", left: 1099, width: 53 },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`absolute top-[39px] flex h-[21px] items-center whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--header-accent)] ${
              isActive
                ? "text-[var(--header-accent)] after:absolute after:left-0 after:right-0 after:top-[28px] after:h-0.5 after:rounded-full after:bg-[var(--header-accent)]"
                : "hover:text-[var(--header-accent)]"
            }`}
            style={{ left: item.left, width: item.width }}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
