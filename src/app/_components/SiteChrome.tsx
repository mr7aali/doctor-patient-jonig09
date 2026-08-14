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
    <section className="relative min-h-[320px] overflow-hidden bg-[#d7efff] md:h-[421px]">
      <Image
        src="/figma-assets/image11_8359_18243.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1228px] flex-col items-center justify-center px-6 text-center md:absolute md:left-1/2 md:top-[147px] md:h-[128px] md:w-[618px] md:max-w-none md:-translate-x-1/2 md:justify-start md:px-0">
        <h2 className="text-[28px] font-semibold leading-tight text-black sm:text-[34px] md:text-[24px] md:leading-6">
          Want to stay informed about
          <br />
          new courses &amp; study?
        </h2>
        <Button href="#" className="mt-8 h-[52px] w-[116px] px-0 md:mt-7">
          Contact Us
        </Button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#dbe9fe] px-6 py-12 text-[#344056] xl:h-[417px] xl:px-0 xl:py-0">
      <div className="mx-auto grid max-w-[1298px] gap-12 md:grid-cols-[1fr_auto] xl:absolute xl:left-1/2 xl:top-[64px] xl:h-[187.882px] xl:w-[1298px] xl:-translate-x-1/2 xl:grid-cols-none xl:gap-0">
        <div className="relative max-w-[357px] xl:absolute xl:left-0 xl:top-0 xl:h-full xl:w-[357px]">
          <Image
            src="/figma-assets/nephroreach-logo.png"
            alt="NephroReach"
            width={86}
            height={68}
            className="h-[67.882px] w-[86px] object-contain"
          />
          <p className="mt-3 max-w-[357px] text-[14px] font-[510] leading-[20px] tracking-[0.07px] [font-family:var(--font-sf-pro)] xl:absolute xl:left-0 xl:top-[79.882px] xl:mt-0 xl:w-[357px]">
            A non-clinical educational engagement platform for SMS check-ins,
            digital journaling, structured learning, and monthly live classes.
          </p>
          <div className="mt-6 flex h-9 w-[180px] gap-3 xl:absolute xl:left-0 xl:top-[151.882px] xl:mt-0">
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
        <div className="grid grid-cols-2 gap-12 sm:gap-20 xl:absolute xl:left-[796px] xl:top-0 xl:flex xl:h-full xl:w-[502px] xl:gap-0">
          <FooterColumn
            title="Platform"
            items={["How it Works", "Product", "Pricing", "Resources"]}
          />
          <FooterColumn
            title="Legal"
            items={["Privacy Policy", "Terms of Service", "Contact"]}
            className="xl:ml-[164px]"
          />
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-[274px] text-center text-[14px] font-[510] leading-[20px] tracking-[0.07px] [font-family:var(--font-sf-pro)] xl:absolute xl:left-1/2 xl:top-[308.999px] xl:mt-0 xl:h-5 xl:w-[274px] xl:-translate-x-1/2">
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
