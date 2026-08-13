import Image from "next/image";
import { Button, Footer, Header } from "../_components/SiteChrome";

const features = [
  "Digital Journal",
  "8-week educational curriculum",
  "Monthly live classes",
  "Weekly SMS check-ins",
  "Community support",
];

const pricingPlans = [
  {
    title: "Class Purchase",
    price: "$10",
    included: [false, false, true, false, false],
  },
  {
    title: "Full Membership",
    price: "$10",
    featured: true,
    included: [true, true, true, true, true],
  },
  {
    title: "Journal Only",
    price: "$5",
    included: [true, false, false, false, false],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white pt-[100px] text-[#0f172a]">
      <Header />
      <Hero />
      <PricingSection />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="px-6 pb-[86px] pt-6">
      <div className="mx-auto grid max-w-[1278px] items-start gap-[58px] lg:grid-cols-[500px_1fr]">
        <div>
          <p className="mb-8 text-[20px] font-bold text-[#2563eb]">
            Clear your mind
          </p>
          <h1 className="text-[48px] font-semibold leading-[1.13] tracking-normal text-[#0f172a] md:text-[58px]">
            A space to reflect,
            <br />
            learn, and grow.
          </h1>
          <p className="mt-8 text-[22px] font-medium leading-[1.45] text-[#48566d]">
            Join Margin for daily SMS prompts, a private digital journal, and
            monthly classes designed to help you build a more intentional life.
          </p>
          <Button href="#" className="mt-9 px-7">
            Button
          </Button>
        </div>
        <div className="relative min-h-[410px] overflow-hidden rounded-[15px] border border-[#25221e]/15 bg-[#ffefe5]">
          <Image
            src="/figma-assets/pricing-image1_8359_20685.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 728px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading() {
  return (
    <div className="mx-auto max-w-[850px] text-center">
      <p className="mb-7 text-[18px] font-bold text-[#2563eb]">Pricing</p>
      <h2 className="text-[38px] font-bold leading-tight text-[#111827] md:text-[42px]">
        Membership Options
      </h2>
      <p className="mt-5 text-[22px] leading-[1.45] text-[#344258] md:text-[26px]">
        Choose the path that fits your goals. Simple, transparent pricing.
      </p>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="mx-auto max-w-[1310px] px-6 pb-[78px] pt-[8px]">
      <SectionHeading />
      <div className="mt-[50px] grid items-end gap-8 lg:grid-cols-3 lg:gap-[29px]">
        {pricingPlans.map((plan) => (
          <article
            key={plan.title}
            className={
              plan.featured
                ? "relative overflow-hidden rounded-[54px] bg-[linear-gradient(135deg,#89f69a,#58bec9_34%,#4a82bd_70%,#ffe266)] p-[6px] pt-[54px] shadow-[0_4px_24px_rgba(15,23,42,0.16)]"
                : "rounded-[54px] border border-[#dce6f2] bg-[#f1f5fa] px-[28px] pb-[34px] pt-[28px]"
            }
          >
            {plan.featured ? (
              <div className="absolute inset-x-0 top-0 flex h-[54px] items-center justify-center text-[20px] font-bold text-white">
                Most Popular
              </div>
            ) : null}
            <div
              className={
                plan.featured
                  ? "rounded-[48px] bg-white px-[28px] pb-[34px] pt-[28px]"
                  : ""
              }
            >
              <h3
                className={`text-[20px] font-bold ${
                  plan.featured ? "text-[#2563eb]" : "text-[#344258]"
                }`}
              >
                {plan.title}
              </h3>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-[42px] font-bold leading-none">
                  {plan.price}
                </span>
                <span className="pb-1 text-[19px] text-[#344258]">/Month</span>
              </div>
              <p className="mt-7 text-[15px] font-semibold text-[#4a5870]">
                Complete access to all platform features
              </p>
              <Button
                href="#"
                className={`mt-6 h-12 text-[16px] ${
                  plan.featured ? "w-full" : "px-7"
                }`}
              >
                Get Started
              </Button>
              <div className="my-7 border-t border-dashed border-[#dce6f2]" />
              <ul className="space-y-5">
                {features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-[18px] font-semibold"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d6e2ee] bg-white text-[18px]">
                      <span
                        className={
                          plan.included[index]
                            ? "text-[#00ba43]"
                            : "text-[#ff6363]"
                        }
                      >
                        {plan.included[index] ? "\u2713" : "\u00d7"}
                      </span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
