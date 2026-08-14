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
    <section className="relative overflow-hidden bg-[#d8ecfb] min-[1370px]:h-[266px]">
      <div className="absolute right-[34px] top-4 hidden h-[250px] w-[760px] rounded-t-2xl bg-[#d7d8eb]/75 md:block [clip-path:polygon(31%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative mx-auto flex min-h-[300px] max-w-[1310px] flex-col items-start justify-center px-4 py-12 sm:px-6 md:h-[266px] md:min-h-0 md:py-0 min-[1370px]:max-w-[1300px] min-[1370px]:justify-start min-[1370px]:pt-14">
        <h1 className="max-w-[760px] text-[32px] font-semibold leading-tight text-[#25221e] sm:text-[38px] min-[1370px]:leading-[38px]">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 max-w-[680px] text-[18px] font-medium leading-[1.45] text-[#475569] sm:mt-6 sm:text-[22px] min-[1370px]:mt-4 min-[1370px]:text-[18px] min-[1370px]:leading-7">
          Simple answers about privacy, data, and how tracking works.
        </p>
        <Button href="#" className="mt-8 min-[1370px]:mt-6 min-[1370px]:h-12 min-[1370px]:w-[139px]">
          Start Tracking
        </Button>
      </div>
    </section>
  );
}

function FAQList() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 min-[1370px]:min-h-[771px] min-[1370px]:px-0">
      <div className="mx-auto max-w-[1320px] space-y-4">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className={`rounded-lg bg-[#d7edff] px-5 py-6 sm:px-7 sm:py-8 min-[1370px]:relative min-[1370px]:p-0 ${
              faq.open ? "min-[1370px]:h-[115px]" : "min-[1370px]:h-20"
            }`}
          >
            <div className="flex items-start justify-between gap-4 sm:items-center sm:gap-8 min-[1370px]:contents">
              <div className="min-w-0">
                <h2 className="text-[20px] font-bold leading-tight sm:text-[24px] min-[1370px]:absolute min-[1370px]:left-7 min-[1370px]:top-[26px] min-[1370px]:text-[24px] min-[1370px]:leading-7">
                  {faq.question}
                </h2>
                {faq.answer ? (
                  <p className="mt-4 text-[18px] leading-tight text-[#526174] sm:mt-6 sm:text-[22px] min-[1370px]:absolute min-[1370px]:left-7 min-[1370px]:top-[71px] min-[1370px]:mt-0 min-[1370px]:text-[22px] min-[1370px]:leading-7">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
              <button
                aria-label={`${faq.open ? "Collapse" : "Open"} ${faq.question}`}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[28px] sm:h-12 sm:w-12 sm:text-[34px] min-[1370px]:absolute min-[1370px]:right-7 min-[1370px]:top-4 min-[1370px]:h-12 min-[1370px]:w-12 ${
                  faq.open ? "bg-[#2563eb] text-white" : "bg-white text-[#2563eb]"
                }`}
              >
                {faq.open ? "-" : "+"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
