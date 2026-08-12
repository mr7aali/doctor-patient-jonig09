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
    <main className="min-h-screen bg-white pt-[100px] text-[#0f172a]">
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
    <section className="relative overflow-hidden bg-[#d8ecfb]">
      <div className="absolute right-[34px] top-4 hidden h-[250px] w-[760px] rounded-t-2xl bg-[#d7d8eb]/75 md:block [clip-path:polygon(31%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative mx-auto flex h-[266px] max-w-[1310px] flex-col items-start justify-center px-6">
        <h1 className="text-[38px] font-semibold leading-tight text-[#25221e]">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 text-[22px] font-medium text-[#475569]">
          Simple answers about privacy, data, and how tracking works.
        </p>
        <Button href="#" className="mt-8">
          Start Tracking
        </Button>
      </div>
    </section>
  );
}

function FAQList() {
  return (
    <section className="bg-white px-6 py-[40px]">
      <div className="mx-auto max-w-[1320px] space-y-4">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-lg bg-[#d7edff] px-7 py-8"
          >
            <div className="flex items-center justify-between gap-8">
              <div>
                <h2 className="text-[24px] font-bold leading-tight">
                  {faq.question}
                </h2>
                {faq.answer ? (
                  <p className="mt-6 text-[22px] leading-tight text-[#526174]">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
              <button
                aria-label={`${faq.open ? "Collapse" : "Open"} ${faq.question}`}
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[34px] ${
                  faq.open ? "bg-[#2563eb] text-white" : "bg-white text-[#2563eb]"
                }`}
              >
                {faq.open ? "⌄" : "›"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
