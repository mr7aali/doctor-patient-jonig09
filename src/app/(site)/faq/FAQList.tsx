"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const faqs = [
  {
    category: "Privacy",
    question: "Are all suppliers really based in the UK?",
    answer:
      "Yes. Every partner in this demo list is treated as UK-based and reviewed before appearing in the dashboard. In production, supplier status would be verified before activation.",
  },
  {
    category: "Billing",
    question: "How does VAT work with DropClicker?",
    answer:
      "VAT is calculated from the supplier profile, customer location, and the invoice details. This dummy FAQ uses sample rules only, so your real accounting setup can be connected later.",
  },
  {
    category: "Delivery",
    question: "Average shipping time?",
    answer:
      "Most demo orders show a delivery estimate of 2 to 5 business days. The exact window can change by supplier, product type, and destination.",
  },
  {
    category: "Integration",
    question: "Can I use this with my existing store?",
    answer:
      "Yes. The intended workflow supports connecting an existing store, importing products, and syncing order activity without rebuilding your storefront.",
  },
  {
    category: "Billing",
    question: "What payment methods are accepted?",
    answer:
      "The demo supports card payments, bank transfer labels, and invoice-based checkout states. A live version can be connected to Stripe or another payment provider.",
  },
  {
    category: "Account",
    question: "Is there a trial period available?",
    answer:
      "Yes. Dummy plans include a 14-day trial so users can test tracking, supplier review, and order workflows before choosing a paid plan.",
  },
  {
    category: "Delivery",
    question: "How do I track my order status?",
    answer:
      "Open the order dashboard and select an order. The dummy status timeline shows received, processing, shipped, out for delivery, and delivered states.",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

export function FAQList() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0].question);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        faq.question.toLowerCase().includes(normalizedQuery) ||
        faq.answer.toLowerCase().includes(normalizedQuery) ||
        faq.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="bg-white px-4 py-10 sm:px-6 xl:min-h-[771px] xl:px-0">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-lg border border-[#e2e8f0] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Search questions</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search FAQ"
              className="h-12 w-full rounded-lg border border-[#cbd5ed] bg-white px-4 text-[16px] leading-6 text-[#0f172a] outline-none placeholder:text-[#64748b] focus:border-[#2563eb] [font-family:var(--font-sf-pro)]"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`h-10 rounded-lg px-4 text-[14px] font-[510] leading-5 tracking-[0.07px] transition [font-family:var(--font-sf-pro)] ${
                    isActive
                      ? "bg-[#2563eb] text-white shadow-[inset_0_-1px_0_#dbe9fe]"
                      : "border border-[#e2e8f0] bg-[#f8fafc] text-[#344056] hover:border-[#2563eb]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openQuestion === faq.question;
            const answerId = `faq-answer-${faq.question.replaceAll(" ", "-").toLowerCase()}`;

            return (
              <article
                key={faq.question}
                className={`rounded-lg border border-[#e2e8f0] bg-[#d7edff] px-5 py-4 sm:px-7 ${
                  isOpen ? "min-h-[115px]" : "min-h-20"
                }`}
              >
                <div className="flex min-h-12 items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="mb-1 text-[13px] font-[510] leading-5 tracking-[0.07px] text-[#2563eb] [font-family:var(--font-sf-pro)]">
                      {faq.category}
                    </p>
                    <h2 className="text-[20px] font-medium leading-7 tracking-[0.1px] text-[#0f172a] [font-family:var(--font-poppins)]">
                      {faq.question}
                    </h2>
                  </div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    aria-label={`${isOpen ? "Collapse" : "Open"} ${faq.question}`}
                    onClick={() => setOpenQuestion(isOpen ? "" : faq.question)}
                    className="relative flex size-12 shrink-0 items-center justify-center rounded-[30px]"
                  >
                    {isOpen ? (
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
                {isOpen ? (
                  <p
                    id={answerId}
                    className="mt-[7px] max-w-[754px] text-[18px] font-normal leading-7 tracking-[0.09px] text-[#344056] [font-family:var(--font-poppins)]"
                  >
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            );
          })}

          {filteredFaqs.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[#cbd5ed] bg-[#f8fafc] px-6 py-10 text-center">
              <h2 className="text-[20px] font-medium leading-7 tracking-[0.1px] text-[#0f172a] [font-family:var(--font-poppins)]">
                No questions found
              </h2>
              <p className="mt-2 text-[16px] leading-6 text-[#344056] [font-family:var(--font-sf-pro)]">
                Try another keyword or choose a different category.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
