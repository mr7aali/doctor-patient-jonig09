import Image from "next/image";
import { Button, Footer, Header, QuestionBanner } from "../_components/SiteChrome";

const faqs = [
  {
    question: "Are all suppliers really based in the UK?",
    answer: "Can I use this with my existing store?",
    open: true,
  },
  { question: "How does VAT work with DropClicker?" },
  { question: "Average shipping time?" },
  { question: "Can I use this with my existing store?" },
  { question: "What payment methods are accepted?" },
  { question: "Is there a trial period available?" },
  { question: "How do I track my order status?" },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white pt-[100.962px] text-[#0f172a]">
      <Header />
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

function FAQList() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 xl:h-[771px] xl:px-0">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className={`rounded-lg border border-[#e2e8f0] bg-[#d7edff] px-5 py-4 sm:px-7 ${
              faq.open ? "min-h-[115px]" : "min-h-20"
            }`}
          >
            <div className="flex min-h-12 items-center justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-[20px] font-medium leading-7 tracking-[0.1px] text-[#0f172a] [font-family:var(--font-poppins)]">
                  {faq.question}
                </h2>
              </div>
              <button
                aria-label={`${faq.open ? "Collapse" : "Open"} ${faq.question}`}
                className="relative flex size-12 shrink-0 items-center justify-center rounded-[30px]"
              >
                {faq.open ? (
                  <>
                    <span className="absolute inset-0 rounded-[30px] bg-[#2563eb] shadow-[inset_0_-0.496px_0_#b8a4e3,inset_0_0.496px_0_rgba(255,255,255,0.12)]" />
                    <Image
                      src="/figma-assets/faq-open-icon.svg"
                      alt=""
                      width={17}
                      height={12}
                      className="relative z-10 h-[11.37px] w-[16.107px]"
                    />
                  </>
                ) : (
                  <Image
                    src="/figma-assets/faq-closed-icon.svg"
                    alt=""
                    width={51}
                    height={51}
                    className="size-[50.662px]"
                  />
                )}
              </button>
            </div>
            {faq.answer ? (
              <p className="mt-[7px] max-w-[754px] text-[18px] font-normal leading-7 tracking-[0.09px] text-[#344056] [font-family:var(--font-poppins)]">
                {faq.answer}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
