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
    <section className="relative mx-auto h-auto max-w-[1440px] px-4 pb-16 pt-6 sm:px-6 xl:grid xl:grid-cols-[minmax(0,500px)_minmax(0,1fr)] xl:items-start xl:gap-[50px] xl:px-[70px] min-[1370px]:block min-[1370px]:h-[504.38px] min-[1370px]:px-0 min-[1370px]:pb-0 min-[1370px]:pt-0">
      <div className="min-[1370px]:absolute min-[1370px]:left-[91px] min-[1370px]:top-6 min-[1370px]:h-[410.38px] min-[1370px]:w-[500px]">
        <p className="text-[18px] font-[700] leading-[28px] tracking-[0.09px] text-[#2563eb] [font-family:var(--font-sf-pro)]">
          Clear your mind
        </p>
        <h1 className="mt-[18px] text-[40px] font-[500] leading-[1.05] tracking-[0.2px] text-[#0f172a] sm:text-[48px] md:text-[60px] md:leading-none md:tracking-[0.3px] [font-family:var(--font-sf-pro)]">
          A space to reflect,
          <br />
          learn, and grow.
        </h1>
        <p className="mt-6 max-w-[500px] text-[17px] font-[510] leading-[28px] tracking-[0.09px] text-[#344056] sm:text-[18px] [font-family:var(--font-sf-pro)]">
          Join Margin for daily SMS prompts, a private digital journal, and
          monthly classes designed to help you build a more intentional life.
        </p>
        <Button href="#" className="mt-[32.89px] w-[82px]">
          Button
        </Button>
      </div>

      <div className="relative mt-10 h-[56.37vw] max-h-[410.38px] min-h-[240px] overflow-hidden rounded-[15px] border border-[#25221e]/15 bg-[#ffefe5] sm:min-h-[300px] xl:mt-0 min-[1370px]:absolute min-[1370px]:left-[641px] min-[1370px]:top-6 min-[1370px]:mt-0 min-[1370px]:h-[410.38px] min-[1370px]:w-[728px]">
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
    <section className="relative mx-auto h-auto max-w-[1440px] px-4 pb-20 pt-12 sm:px-6 xl:min-h-[933px] min-[1370px]:h-[933px] min-[1370px]:px-0 min-[1370px]:pb-0 min-[1370px]:pt-0">
      <div className="text-center min-[1370px]:absolute min-[1370px]:left-[71px] min-[1370px]:top-20 min-[1370px]:h-[136px] min-[1370px]:w-[1298px]">
        <p className="text-[18px] font-[700] leading-[28px] tracking-[0.09px] text-[#2563eb] [font-family:var(--font-sf-pro)]">
          Pricing
        </p>
        <h2 className="mt-5 text-[32px] font-[600] leading-[38px] tracking-[0.18px] text-[#0f172a] sm:mt-6 sm:text-[36px] sm:leading-[40px] [font-family:var(--font-sf-pro)]">
          Membership Options
        </h2>
        <p className="mx-auto mt-3 max-w-[720px] text-[18px] font-[400] leading-[28px] tracking-[0.12px] text-[#344056] sm:text-[24px] sm:leading-[32px] min-[1370px]:max-w-none [font-family:var(--font-sf-pro)]">
          Choose the path that fits your goals. Simple, transparent pricing.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[720px] items-end gap-8 xl:max-w-[calc(100vw-120px)] xl:grid-cols-3 xl:gap-6 min-[1370px]:absolute min-[1370px]:left-[71px] min-[1370px]:top-64 min-[1370px]:mt-0 min-[1370px]:h-[597px] min-[1370px]:w-[1298px] min-[1370px]:max-w-none min-[1370px]:grid-cols-none min-[1370px]:gap-0">
        <PlanCard
          plan={pricingPlans[0]}
          className="min-[1370px]:absolute min-[1370px]:left-0 min-[1370px]:top-6 min-[1370px]:h-[549px] min-[1370px]:w-[412.667px]"
        />
        <FeaturedPlan />
        <PlanCard
          plan={pricingPlans[2]}
          className="min-[1370px]:absolute min-[1370px]:left-[885.333px] min-[1370px]:top-6 min-[1370px]:h-[549px] min-[1370px]:w-[412.667px]"
        />
      </div>
    </section>
  );
}

function FeaturedPlan() {
  return (
    <div className="relative min-h-[560px] rounded-[36px] bg-[linear-gradient(135deg,#89f69a,#58bec9_34%,#4a82bd_70%,#ffe266)] shadow-[0_4px_24px_rgba(15,23,42,0.16)] sm:min-h-[597px] sm:rounded-[54px] min-[1370px]:absolute min-[1370px]:left-[442.667px] min-[1370px]:top-0 min-[1370px]:h-[597px] min-[1370px]:w-[412.667px]">
      <p className="absolute left-0 right-0 top-2 h-7 text-center text-[18px] font-[600] leading-[28px] tracking-[0.09px] text-white [font-family:var(--font-poppins)]">
        Most Popular
      </p>
      <PlanCard
        plan={pricingPlans[1]}
        className="absolute left-1 top-11 min-h-[510px] w-[calc(100%-8px)] sm:h-[549px] min-[1370px]:w-[404.667px]"
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
      className={`flex min-h-[510px] flex-col gap-6 overflow-hidden rounded-[34px] border border-[#e2e8f0] p-6 sm:min-h-[549px] sm:rounded-[50px] sm:p-7 ${
        isFeatured
          ? "bg-gradient-to-b from-white to-[#f2f7ff]"
          : "bg-[#f1f5fa]"
      } ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h3
          className={`min-h-8 w-full text-[20px] font-[590] leading-[28px] tracking-[0.1px] [font-family:var(--font-sf-pro)] ${
            isFeatured ? "text-[#2563eb]" : "text-[#344056]"
          }`}
        >
          {plan.title}
        </h3>
        <div className="flex w-full flex-wrap items-baseline gap-1">
          <p className="whitespace-nowrap text-[36px] font-[700] leading-[52px] text-[#0f172a] [font-family:var(--font-inter)]">
            {plan.price}
          </p>
          <p className="min-h-7 min-w-[120px] flex-1 text-[18px] font-[510] leading-[28px] tracking-[0.09px] text-[#344056] [font-family:var(--font-sf-pro)]">
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
            <span className="min-w-0 flex-1 text-[17px] font-[510] leading-[26px] tracking-[0.09px] text-[#0f172a] sm:text-[18px] sm:leading-[28px] [font-family:var(--font-sf-pro)]">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
