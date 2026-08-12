import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "About us", href: "#" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[100px] max-w-[1228px] items-center justify-between px-6">
        <Link href="/" aria-label="NephroReach home">
          <Image
            src="/figma-assets/nephroreach-logo.png"
            alt="NephroReach"
            width={132}
            height={84}
            className="h-[64px] w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-9 text-[16px] font-medium text-[#25221e] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-[#2563eb]"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-6 w-px bg-[#25221e]/20" />
          <a href="#" className="hover:text-[#2563eb]">
            Log in
          </a>
          <Button href="#">Try it free</Button>
        </nav>
        <Button href="#" className="md:hidden">
          Try it free
        </Button>
      </div>
    </header>
  );
}

export function Button({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[52px] items-center justify-center rounded-[12px] bg-[#2563eb] px-6 text-[16px] font-semibold text-white shadow-[inset_0_-1px_0_#dbeafe] transition hover:bg-[#1d4ed8] ${className}`}
    >
      {children}
    </Link>
  );
}

export function QuestionBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden bg-[#d7efff]">
      <Image
        src="/figma-assets/image11_8359_18243.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1228px] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-[42px] font-normal leading-tight text-black md:text-[54px]">
          Still have questions?
        </h2>
        <Button href="#" className="mt-8 h-[52px] px-8">
          Contact Us
        </Button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#dbeaff] px-6 pb-[88px] pt-[92px] text-[#304158]">
      <div className="mx-auto grid max-w-[1228px] gap-14 md:grid-cols-[1.6fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/figma-assets/nephroreach-logo.png"
            alt="NephroReach"
            width={132}
            height={84}
            className="h-[72px] w-auto"
          />
          <p className="mt-8 max-w-[430px] text-[18px] font-medium leading-[1.45]">
            A non-clinical educational engagement platform for SMS check-ins,
            digital journaling, structured learning, and monthly live classes.
          </p>
          <div className="mt-7 flex gap-4">
            {["t", "◎", "in", "▶"].map((item) => (
              <a
                key={item}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#121722] text-sm font-bold text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <FooterColumn
          title="Platform"
          items={["How it Works", "Product", "Pricing", "Resources"]}
        />
        <FooterColumn
          title="Legal"
          items={["Privacy Policy", "Terms of Service", "Contact"]}
        />
      </div>
      <p className="mt-[100px] text-center text-[16px] font-semibold">
        © 2025 DropClicker. All rights reserved.
      </p>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="pt-3">
      <h3 className="text-[17px] font-bold text-[#1f2d46]">{title}</h3>
      <ul className="mt-8 space-y-7 text-[16px] font-medium">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-[#2563eb]">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
