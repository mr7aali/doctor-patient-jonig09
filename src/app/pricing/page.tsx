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
    variant: "surface",
  },
  {
    title: "Full Membership",
    price: "$10",
    included: [true, true, true, true, true],
    variant: "featured",
  },
  {
    title: "Journal Only",
    price: "$5",
    included: [true, false, false, false, false],
    variant: "surface",
  },
] as const;

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white pt-[100.962px] text-[#0f172a]">
      <Header />
      <Hero />
      <PricingSection />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto h-auto max-w-[1440px] px-6 pb-[70px] pt-6 lg:h-[504.38px] lg:px-0 lg:pb-0 lg:pt-0">
      <div className="lg:absolute lg:left-[91px] lg:top-6 lg:h-[410.38px] lg:w-[500px]">
        <p className="text-[18px] font-[700] leading-[28px] tracking-[0.09px] text-[#2563eb] [font-family:var(--font-sf-pro)]">
          Clear your mind
        </p>
        <h1 className="mt-[18px] text-[48px] font-[500] leading-none tracking-[0.24px] text-[#0f172a] md:text-[60px] md:tracking-[0.3px] [font-family:var(--font-sf-pro)]">
          A space to reflect,
          <br />
          learn, and grow.
        </h1>
        <p className="mt-6 max-w-[500px] text-[18px] font-[510] leading-[28px] tracking-[0.09px] text-[#344056] [font-family:var(--font-sf-pro)]">
          Join Margin for daily SMS prompts, a private digital journal, and
          monthly classes designed to help you build a more intentional life.
        </p>
        <Button href="#" className="mt-[32.89px] w-[82px]">
          Button
        </Button>
      </div>

      <div className="relative mt-10 h-[56.37vw] max-h-[410.38px] min-h-[260px] overflow-hidden rounded-[15px] border border-[#25221e]/15 bg-[#ffefe5] lg:absolute lg:left-[641px] lg:top-6 lg:mt-0 lg:h-[410.38px] lg:w-[728px]">
        <Image
          src="/figma-assets/pricing-image1_8359_20685.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 728px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="relative mx-auto h-auto max-w-[1440px] px-6 pb-20 pt-12 lg:h-[933px] lg:px-0 lg:pb-0 lg:pt-0">
      <div className="text-center lg:absolute lg:left-[71px] lg:top-20 lg:h-[136px] lg:w-[1298px]">
        <p className="text-[18px] font-[700] leading-[28px] tracking-[0.09px] text-[#2563eb] [font-family:var(--font-sf-pro)]">
          Pricing
        </p>
        <h2 className="mt-6 text-[36px] font-[600] leading-[40px] tracking-[0.18px] text-[#0f172a] [font-family:var(--font-sf-pro)]">
          Membership Options
        </h2>
        <p className="mt-3 text-[24px] font-[400] leading-[32px] tracking-[0.12px] text-[#344056] [font-family:var(--font-sf-pro)]">
          Choose the path that fits your goals. Simple, transparent pricing.
        </p>
      </div>

      <div className="mt-10 grid items-end gap-8 lg:absolute lg:left-[71px] lg:top-64 lg:mt-0 lg:h-[597px] lg:w-[1298px] lg:grid-cols-none lg:gap-0">
        <PlanCard
          plan={pricingPlans[0]}
          className="lg:absolute lg:left-0 lg:top-6 lg:h-[549px] lg:w-[412.667px]"
        />
        <FeaturedPlan />
        <PlanCard
          plan={pricingPlans[2]}
          className="lg:absolute lg:left-[885.333px] lg:top-6 lg:h-[549px] lg:w-[412.667px]"
        />
      </div>
    </section>
  );
}

function FeaturedPlan() {
  return (
    <div className="relative min-h-[597px] rounded-[54px] bg-[linear-gradient(135deg,#89f69a,#58bec9_34%,#4a82bd_70%,#ffe266)] shadow-[0_4px_24px_rgba(15,23,42,0.16)] lg:absolute lg:left-[442.667px] lg:top-0 lg:h-[597px] lg:w-[412.667px]">
      <p className="absolute left-0 right-0 top-2 h-7 text-center text-[18px] font-[600] leading-[28px] tracking-[0.09px] text-white [font-family:var(--font-poppins)]">
        Most Popular
      </p>
      <PlanCard
        plan={pricingPlans[1]}
        className="absolute left-1 top-11 h-[549px] w-[calc(100%-8px)] lg:w-[404.667px]"
      />
    </div>
  );
}

function PlanCard({
  plan,
  className = "",
}: {
  plan: (typeof pricingPlans)[number];
  className?: string;
}) {
  const isFeatured = plan.variant === "featured";

  return (
    <article
      className={`flex min-h-[549px] flex-col gap-6 overflow-hidden rounded-[50px] border border-[#e2e8f0] p-7 ${
        isFeatured
          ? "bg-gradient-to-b from-white to-[#f2f7ff]"
          : "bg-[#f1f5fa]"
      } ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h3
          className={`h-8 w-[360px] text-[20px] font-[590] leading-[28px] tracking-[0.1px] [font-family:var(--font-sf-pro)] ${
            isFeatured ? "text-[#2563eb]" : "text-[#344056]"
          }`}
        >
          {plan.title}
        </h3>
        <div className="flex w-full flex-wrap items-baseline gap-1">
          <p className="whitespace-nowrap text-[36px] font-[700] leading-[52px] text-[#0f172a] [font-family:var(--font-inter)]">
            {plan.price}
          </p>
          <p className="h-7 min-w-[120px] flex-1 text-[18px] font-[510] leading-[28px] tracking-[0.09px] text-[#344056] [font-family:var(--font-sf-pro)]">
            {" /Month"}
          </p>
        </div>
        <p className="w-full text-[16px] font-[510] leading-[24px] tracking-[0.08px] text-[#344056] [font-family:var(--font-sf-pro)]">
          Complete access to all platform features
        </p>
        <Button href="#" className="h-12 w-full">
          Get Started
        </Button>
      </div>

      <div className="h-px w-full border-t border-dashed border-[#e2e8f0]" />

      <ul className="flex flex-col gap-5">
        {features.map((feature, index) => (
          <li key={feature} className="flex w-full items-center gap-3">
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-[20px] border border-[#f4f4f5] bg-[#fcfcfc]">
              <Image
                src={
                  plan.included[index]
                    ? "/figma-assets/pricing-check.svg"
                    : "/figma-assets/pricing-close.svg"
                }
                alt=""
                width={24}
                height={24}
                className="absolute left-1 top-1 h-6 w-6"
              />
            </span>
            <span className="min-w-0 flex-1 text-[18px] font-[510] leading-[28px] tracking-[0.09px] text-[#0f172a] [font-family:var(--font-sf-pro)]">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
