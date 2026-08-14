import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const socialItems = ["t", "o", "in", ">"];

const navItems = [
  { label: "Home", href: "/", left: 858, width: 45 },
  { label: "FAQ", href: "/faq", left: 936, width: 31 },
  { label: "About us", href: "#", left: 1000, width: 68 },
  { label: "Pricing", href: "/pricing", left: 1099, width: 53 },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[101px] bg-white">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <DesktopHeader className="hidden min-[1200px]:block" />
        <Link
          href="/"
          aria-label="NephroReach home"
          className="absolute left-6 top-[16.53px] block h-[67.882px] w-[86px] min-[1200px]:hidden"
        >
          <Image
            src="/figma-assets/nephroreach-logo.png"
            alt="NephroReach"
            width={86}
            height={68}
            className="h-full w-full object-contain"
            priority
          />
        </Link>
        <Button href="#" className="absolute right-6 top-6 min-[1200px]:hidden">
          Try it free
        </Button>
      </div>
    </header>
  );
}

function DesktopHeader({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-full w-full text-[#25221e] [--header-accent:#2563eb] ${className}`}
    >
      <Link
        href="/"
        aria-label="NephroReach home"
        className="absolute left-[70px] top-[16.53px] block h-[67.882px] w-[86px]"
      >
        <Image
          src="/figma-assets/nephroreach-logo.png"
          alt="NephroReach"
          width={86}
          height={68}
          className="h-full w-full object-contain"
          priority
        />
      </Link>

      <nav
        aria-label="Primary navigation"
        className="absolute inset-0 text-[15.5px] font-medium leading-[20.93px] tracking-[0.155px] [font-family:var(--font-inter)]"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="absolute top-[39px] flex h-[21px] items-center whitespace-nowrap transition-colors hover:text-[var(--header-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--header-accent)]"
            style={{ left: item.left, width: item.width }}
          >
            {item.label}
          </Link>
        ))}
        <span
          aria-hidden="true"
          className="absolute left-[1173px] top-[38.471px] h-6 w-px bg-[#25221e]/[0.18]"
        />
        <Link
          href="#"
          className="absolute left-[1197px] top-[39px] flex h-[21px] w-[52px] items-center whitespace-nowrap transition-colors hover:text-[var(--header-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--header-accent)]"
        >
          Log in
        </Link>
        <Link
          href="#"
          className="absolute left-[1264px] top-[24.471px] flex h-[52px] w-[106px] items-center justify-center rounded-[12px] bg-[var(--header-accent)] text-[16px] font-medium leading-6 tracking-[0.08px] text-white shadow-[inset_0_-1px_0_#dbe9fe] transition-colors hover:bg-[#1d4ed8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--header-accent)] [font-family:var(--font-work-sans)]"
        >
          Try it free
        </Link>
      </nav>
    </div>
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
      className={`inline-flex h-[52px] items-center justify-center rounded-[12px] bg-[#2563eb] px-[14px] text-[16px] font-[500] leading-[24px] tracking-[0.08px] text-white shadow-[inset_0_-1px_0_#dbe9fe] transition hover:bg-[#1d4ed8] [font-family:var(--font-work-sans)] ${className}`}
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
    <footer className="relative h-[417px] bg-[#dbe9fe] text-[#344056]">
      <div className="absolute left-1/2 top-[64px] h-[187.882px] w-[1298px] -translate-x-1/2">
        <div className="absolute left-0 top-0 h-full w-[357px]">
          <Image
            src="/figma-assets/nephroreach-logo.png"
            alt="NephroReach"
            width={86}
            height={68}
            className="h-[67.882px] w-[86px] object-contain"
          />
          <p className="absolute left-0 top-[79.882px] w-[357px] text-[14px] font-[510] leading-[20px] tracking-[0.07px] [font-family:var(--font-sf-pro)]">
            A non-clinical educational engagement platform for SMS check-ins,
            digital journaling, structured learning, and monthly live classes.
          </p>
          <div className="absolute left-0 top-[151.882px] flex h-9 w-[180px] gap-3">
            {socialItems.map((item) => (
              <a
                key={item}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#121722] text-[12px] font-bold leading-none text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute left-[796px] top-0 flex h-full w-[502px]">
          <FooterColumn
            title="Platform"
            items={["How it Works", "Product", "Pricing", "Resources"]}
          />
          <FooterColumn
            title="Legal"
            items={["Privacy Policy", "Terms of Service", "Contact"]}
            className="ml-[164px]"
          />
        </div>
      </div>
      <p className="absolute left-1/2 top-[308.999px] h-5 w-[274px] -translate-x-1/2 text-center text-[14px] font-[510] leading-[20px] tracking-[0.07px] [font-family:var(--font-sf-pro)]">
        &copy; 2025 DropClicker. All rights reserved.
      </p>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`w-[88px] text-[14px] font-[510] leading-[20px] tracking-[0.07px] [font-family:var(--font-sf-pro)] ${className}`}
    >
      <h3 className="text-[#0f172a]">{title}</h3>
      <ul className="mt-4 space-y-4">
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
