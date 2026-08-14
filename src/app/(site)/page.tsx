import Image from "next/image";
import { Fragment } from "react";
import { Button, Footer, QuestionBanner } from "../_components/SiteChrome";

const workflowSteps = [
  {
    title: "Sign Up",
    copy: "Choose your membership level and securely add your phone number.",
    image: "/figma-assets/image1_8359_18243.png",
    tint: "bg-[#f4fbf7]",
  },
  {
    title: "Get Your Member ID",
    copy: "Receive a unique ID for your NephroReach account.",
    image: "/figma-assets/image2_8359_18243.png",
    tint: "bg-[#f6faeb]",
  },
  {
    title: "Learn & Journal",
    copy: "Use your journal, prompts, and 04-week education library.",
    image: "/figma-assets/image3_8359_18243.png",
    tint: "bg-[#fff9eb]",
  },
  {
    title: "Receive SMS Check-Ins",
    copy: "Receive automated weekly SMS check-ins and class reminders.",
    image: "/figma-assets/image4_8359_18243.png",
    tint: "bg-[#fff6f0]",
  },
];

const includeItems = [
  {
    eyebrow: "Start with ease",
    color: "text-[#d99518]",
    title: "Create your account in minutes",
    copy: "Sign up with your email and phone number, choose your membership level, and receive your unique NephroReach member ID.",
  },
  {
    eyebrow: "Build consistency",
    color: "text-[#719fa0]",
    title: "Stay connected through weekly texts",
    copy: "Receive automated educational SMS check-ins, reminders, and follow-up messages that help you stay engaged without needing real-time human support.",
  },
  {
    eyebrow: "Learn at your pace",
    color: "text-[#f15f56]",
    title: "Follow a guided 8-week education path",
    copy: "Full members can access structured educational content designed to support steady learning, reflection, and continued engagement.",
  },
  {
    eyebrow: "Reflect and participate",
    color: "text-[#719665]",
    title: "Journal, learn, and join live classes",
    copy: "Use your digital journal, respond to guided prompts, and register for monthly live educational classes based on your membership access.",
  },
];

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

const benefits = [
  {
    title: "Daily SMS Prompts",
    copy: "Carefully crafted questions sent to your phone to spark reflection and mindfulness throughout your day.",
    icon: "S",
  },
  {
    title: "Digital Journal",
    copy: "A beautiful, private space where all your SMS replies are automatically saved and organized by date.",
    icon: "J",
  },
  {
    title: "Monthly Classes",
    copy: "Live, expert-led sessions focusing on personal growth, habit building, and intentional living.",
    icon: "C",
  },
  {
    title: "Progress Tracking",
    copy: "Look back at your entries over time to see patterns, growth, and shifts in your perspective.",
    icon: "P",
  },
  {
    title: "Community Access",
    copy: "Connect with other members in our moderated forum to share insights and discuss class topics.",
    icon: "G",
  },
  {
    title: "Private & Secure",
    copy: "Your reflections are yours alone. We use industry-standard encryption to keep your journal safe.",
    icon: "L",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-[100.962px] text-[#0f172a]">
      <Hero />
      <Workflow />
      <Included />
      <Pricing />
      <Testimonials />
      <Benefits />
      <QuestionBanner />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="px-4 sm:px-5">
      <div className="relative mx-auto min-h-[460px] max-w-[1404px] overflow-hidden rounded-2xl md:min-h-[570px]">
        <Image
          src="/figma-assets/image0_8359_18243.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 ml-auto flex min-h-[460px] w-full max-w-[585px] flex-col justify-center px-5 py-12 sm:px-8 md:mr-[72px] md:min-h-[570px] md:py-16">
          <p className="mb-4 text-[18px] font-bold text-[#2563eb] md:mb-6 md:text-[20px]">
            Clear your mind
          </p>
          <h1 className="text-[38px] font-semibold leading-[1.12] text-[#111827] sm:text-[50px] md:text-[68px]">
            A space to reflect, learn, and grow.
          </h1>
          <p className="mt-6 max-w-[560px] text-[18px] leading-[1.55] text-[#2f3a4f] md:mt-8 md:text-[22px]">
            Join Margin for daily SMS prompts, a private digital journal, and
            monthly classes designed to help you build a more intentional life.
          </p>
          <Button href="#" className="mt-10 w-fit">
            Try it free
          </Button>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-[920px] text-center">
      <p className="mb-4 text-[16px] font-bold text-[#2563eb] md:mb-6 md:text-[18px]">
        {eyebrow}
      </p>
      <h2 className="text-[30px] font-bold leading-tight md:text-[40px]">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-[18px] leading-[1.45] text-[#344258] md:text-[24px]">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Workflow() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 xl:h-[594px] xl:px-[71px] xl:py-20"
    >
      <div className="mx-auto flex max-w-[920px] flex-col items-center justify-center text-center xl:h-[136px] xl:max-w-none">
        <p className="text-[16px] font-bold leading-7 tracking-[0.09px] text-[#2563eb] md:text-[18px]">
          How we work
        </p>
        <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[0.18px] text-[#0f172a] md:mt-6 md:text-[36px] md:leading-10">
          How NephroReach Works
        </h2>
        <p className="mt-3 text-[18px] font-normal leading-7 tracking-[0.12px] text-[#344056] md:text-[24px] md:leading-8">
          Choose the path that fits your goals. Simple, transparent pricing.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:gap-12 md:grid-cols-2 xl:mt-10 xl:flex xl:h-[258px] xl:items-center xl:gap-[14px]">
        {workflowSteps.map((step, index) => (
          <Fragment key={step.title}>
            <article className="min-w-0 overflow-hidden rounded-[10px] border border-[rgba(37,34,30,0.18)] bg-white p-px shadow-[0_1px_0_rgba(37,34,30,0.04)] xl:h-full xl:flex-1">
              <div className={`flex h-[125px] items-center justify-center rounded-t-[9px] ${step.tint}`}>
                <Image src={step.image} alt="" width={88} height={88} />
              </div>
              <div className="h-px w-full bg-[rgba(37,34,30,0.18)]" />
              <div className="px-4 pb-2 pt-4">
                <h3 className="text-[16px] font-bold leading-6 tracking-[0.08px] text-[#0f172a]">
                  {step.title}
                </h3>
              </div>
              <div className="px-4 pb-4">
                <p className="text-[14px] font-medium leading-5 tracking-[0.07px] text-[#344056]">
                  {step.copy}
                </p>
              </div>
            </article>
            {index < workflowSteps.length - 1 ? <WorkflowArrow /> : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function WorkflowArrow() {
  return (
    <div className="relative hidden h-11 w-11 shrink-0 items-center justify-center xl:flex">
      <Image
        src="/figma-assets/workflow-line.svg"
        alt=""
        width={68}
        height={2}
        className="absolute left-1/2 top-[23px] z-0 h-0.5 w-[68px] -translate-x-1/2"
      />
      <span className="absolute inset-0 z-10 rounded-[30px] bg-[#111827]" />
      <Image
        src="/figma-assets/workflow-arrow-right.svg"
        alt=""
        width={24}
        height={24}
        className="relative z-20 h-6 w-6"
      />
    </div>
  );
}

function Included() {
  return (
    <section className="mx-auto max-w-[1298px] px-4 pt-20 sm:px-6 md:pt-[96px] xl:min-h-[1728.57px] min-[1370px]:pt-0">
      <SectionHeading
        eyebrow="What's Include"
        title="Everything members need to stay engaged"
        copy="NephroReach combines automated SMS check-ins, digital journaling, guided education, and class access in one simple non-clinical membership platform."
      />
      <div className="mx-auto mt-12 grid items-start gap-14 md:mt-[72px] lg:grid-cols-[minmax(0,590px)_1fr] lg:gap-[80px] min-[1370px]:mt-12 min-[1370px]:max-w-[1270px] min-[1370px]:grid-cols-[590px_632px] min-[1370px]:gap-12">
        <ProductMockup />
        <div className="space-y-16 md:space-y-[96px] min-[1370px]:pl-[66px] min-[1370px]:pt-20">
          {includeItems.map((item) => (
            <article key={item.title} className="max-w-[560px]">
              <p className={`mb-5 text-[16px] font-bold md:mb-8 md:text-[18px] ${item.color}`}>
                {item.eyebrow}
              </p>
              <h3 className="text-[32px] font-normal leading-[1.12] text-[#464c5b] sm:text-[40px] md:text-[54px] md:leading-[1.07]">
                {item.title}
              </h3>
              <p className="mt-5 text-[18px] leading-[1.55] text-[#868686] md:mt-9 md:text-[22px]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductMockup() {
  return (
    <div className="relative h-[390px] overflow-hidden rounded-[13px] bg-[#f7e8bf] sm:h-[470px] lg:h-[550px]">
      <Image
        src="/figma-assets/image5_8359_18243.png"
        alt=""
        width={768}
        height={768}
        className="absolute inset-y-0 left-0 h-full w-[42%] max-w-[252px] object-cover"
      />
      <div className="absolute inset-y-6 left-[22%] right-4 rounded-lg bg-[#25221e]/85 backdrop-blur-sm lg:inset-y-[34px] lg:left-[128px] lg:right-auto lg:w-[452px]" />
      <div className="absolute inset-x-4 top-[145px] overflow-hidden rounded-[13px] border border-[#25221e]/20 bg-white shadow-sm sm:left-10 sm:right-6 sm:top-[175px] lg:left-[56px] lg:right-auto lg:top-[195px] lg:w-[510px]">
        <div className="px-5 pb-6 pt-6 sm:px-7 sm:pb-8 sm:pt-8">
          <p className="text-[26px] font-bold text-[#25221e]/50 sm:text-[32px]">check-in</p>
          <div className="mt-6 flex flex-wrap gap-2 text-[14px] text-[#25221e]/70 sm:mt-10 sm:gap-3 sm:text-[16px]">
            {["Due date", "Assignee", "Priority", "More"].map((item) => (
              <span
                key={item}
                className="rounded-md border border-[#25221e]/20 px-3 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[#25221e]/20 px-5 py-4 sm:px-7 sm:py-5">
          <span className="text-[18px] text-[#25221e]/70">Inbox</span>
          <button className="shrink-0 rounded-[10px] bg-[#2563eb] px-4 py-3 text-[15px] font-medium text-white sm:px-5 sm:text-[16px]">
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1228px] px-4 pt-20 sm:px-6 md:pt-[96px] xl:min-h-[873px] min-[1370px]:max-w-[1298px] min-[1370px]:pt-[50px]">
      <SectionHeading
        eyebrow="Pricing"
        title="Membership Options"
        copy="Choose the path that fits your goals. Simple, transparent pricing."
      />
      <div className="mt-12 grid items-end gap-8 md:mt-12 lg:grid-cols-3 lg:gap-[29px] min-[1370px]:mt-10 min-[1370px]:grid-cols-[412.667px_412.667px_412.667px] min-[1370px]:gap-[30px]">
        {pricingPlans.map((plan) => (
          <article
            key={plan.title}
            className={
              plan.featured
                ? "relative overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#7df89e,#58b8c9_35%,#3f79bc_70%,#ffe35b)] p-[6px] pt-[68px] shadow-[0_4px_24px_rgba(15,23,42,0.16)] md:rounded-[48px]"
                : "rounded-[30px] border border-[#dce6f2] bg-[#f1f5fa] p-6 pb-8 md:rounded-[48px] md:p-[42px] md:pb-[54px]"
            }
          >
            {plan.featured ? (
              <div className="absolute inset-x-0 top-0 flex h-[68px] items-center justify-center text-[20px] font-bold text-white">
                Most Popular
              </div>
            ) : null}
            <div
              className={
                plan.featured
                  ? "rounded-[26px] bg-white px-6 pb-8 pt-8 md:rounded-[42px] md:px-[42px] md:pb-[54px] md:pt-[48px]"
                  : ""
              }
            >
              <h3
                className={`text-[22px] font-bold ${
                  plan.featured ? "text-[#2563eb]" : "text-[#344258]"
                }`}
              >
                {plan.title}
              </h3>
              <div className="mt-10 flex items-end gap-2">
                <span className="text-[42px] font-bold leading-none md:text-[50px]">
                  {plan.price}
                </span>
                <span className="pb-2 text-[18px] text-[#344258] md:text-[22px]">/Month</span>
              </div>
              <p className="mt-7 text-[16px] text-[#344258]">
                Complete access to all platform features
              </p>
              <Button href="#" className={`mt-9 ${plan.featured ? "w-full" : ""}`}>
                Get Started
              </Button>
              <div className="my-10 border-t border-dashed border-[#dce6f2]" />
              <ul className="space-y-6 md:space-y-8">
                {features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-[18px] font-medium md:gap-5 md:text-[21px]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6e2ee] bg-white">
                      <Image
                        src={
                          plan.included[index]
                            ? "/figma-assets/pricing-check.svg"
                            : "/figma-assets/pricing-close.svg"
                        }
                        alt=""
                        width={24}
                        height={24}
                      />
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

function Testimonials() {
  return (
    <section className="mx-auto max-w-[1248px] px-4 pb-20 pt-24 sm:px-6 md:pb-[80px] md:pt-[120px] xl:min-h-[596px] min-[1370px]:max-w-[1280px] min-[1370px]:px-0 min-[1370px]:py-[80px]">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-[34px] font-bold leading-tight md:text-[48px]">
            What Our Customers Say
          </h2>
          <p className="mt-5 max-w-[475px] text-[18px] leading-[1.45] text-[#4a5870] md:text-[20px]">
            Real stories from people around the world using our platform to
            build, grow, and connect.
          </p>
        </div>
        <div className="hidden gap-4 md:flex">
          {["<", ">"].map((arrow) => (
            <button
              key={arrow}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14225a] text-3xl text-white"
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-3 min-[1370px]:mt-8 min-[1370px]:grid-cols-[417.333px_417.333px_417.333px] min-[1370px]:gap-[14px]">
        {[1, 2, 3].map((item) => (
          <article
            key={item}
            className="rounded-3xl border border-[#e1e7ef] bg-white px-6 pb-8 pt-8 shadow-[0_8px_22px_rgba(15,23,42,0.12)] md:px-8 md:pt-9 min-[1370px]:min-h-[292px]"
          >
            <span className="rounded-md bg-[#e9fbf3] px-3 py-2 text-[16px] text-[#3fbe72]">
              Student Moves
            </span>
            <p className="mt-8 text-[18px] leading-[1.38] md:text-[20px]">
              Applying for my visa was a breeze with 190evisa.com! I entered my
              details, uploaded my photo, and paid. My visa arrived in just
              three days. I&apos;ll use this service again!
            </p>
            <div className="mt-9 flex items-center gap-3 text-[18px] text-[#667085]">
              <span className="text-[27px] leading-none text-[#f7d12f]">
                *****
              </span>
              <span>4.8</span>
            </div>
            <div className="mt-6 flex items-center gap-5">
              <Image
                src="/figma-assets/image9_8359_18243.png"
                alt=""
                width={52}
                height={52}
                className="rounded-full"
              />
              <div>
                <p className="text-[17px] font-semibold md:text-[18px]">Priya Sharma, India</p>
                <p className="mt-2 text-[15px] text-[#98a2b3]">
                  Freelance Writer
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-[#f1f5fa] px-4 pb-20 pt-20 sm:px-6 md:pb-[100px] md:pt-[90px] xl:min-h-[868px] min-[1370px]:px-0 min-[1370px]:pb-0 min-[1370px]:pt-20">
      <SectionHeading
        eyebrow="What You Get"
        title="What Members Get"
        copy="everything you need to grow"
      />
      <div className="mx-auto mt-12 grid max-w-[1228px] gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-3 min-[1370px]:mt-10 min-[1370px]:max-w-[1298px] min-[1370px]:grid-cols-[416.667px_416.667px_416.667px] min-[1370px]:gap-6">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-[14px] border border-[#dde7f0] px-6 pb-8 pt-7 md:px-[34px] md:pb-10 md:pt-[35px] min-[1370px]:min-h-[254px]"
          >
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[#d8edff] text-[29px] font-bold text-[#3479ff]">
              {benefit.icon}
            </span>
            <h3 className="mt-[25px] text-[24px] font-bold">
              {benefit.title}
            </h3>
            <p className="mt-5 text-[18px] leading-[1.45] text-[#4a5870] md:text-[22px]">
              {benefit.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
