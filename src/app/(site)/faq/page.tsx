import Image from "next/image";
import { Button, Footer, QuestionBanner } from "../../_components/SiteChrome";
import { FAQList } from "./FAQList";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white pt-[100.962px] text-[#0f172a]">
      <Hero />
      <FAQList />
      <QuestionBanner />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative h-[266px] overflow-hidden bg-[linear-gradient(191.28deg,#e5e7eb_15.931%,#d7edff_81.582%)]">
      <Image
        src="/figma-assets/faq-hero-shape.svg"
        alt=""
        width={1000}
        height={1000}
        className="pointer-events-none absolute right-8 top-[13.04px] hidden size-[1000px] opacity-10 md:block"
        priority
      />
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col items-start justify-center px-6 py-10 sm:px-[70px] md:justify-start md:py-14">
        <h1 className="max-w-[760px] text-[32px] font-[510] leading-normal text-[#2f2a26] [font-family:var(--font-sf-pro)]">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-[680px] text-[18px] font-[510] leading-7 tracking-[0.09px] text-[#344056] [font-family:var(--font-sf-pro)]">
          Simple answers about privacy, data, and how tracking works.
        </p>
        <Button href="#" className="mt-6 h-12 w-[139px] px-[14px]">
          Start Tracking
        </Button>
      </div>
    </section>
  );
}
