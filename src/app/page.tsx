import Image from "next/image";
import { Button, Footer, Header, QuestionBanner } from "./_components/SiteChrome";

const workflowSteps = [
  {
    title: "Sign Up",
    copy: "Choose your membership level and securely add your phone number.",
    image: "/figma-assets/image1_8359_18243.png",
    tint: "bg-[#f4faf7]",
  },
  {
    title: "Get Your Member ID",
    copy: "Receive a unique ID for your NephroReach account.",
    image: "/figma-assets/image2_8359_18243.png",
    tint: "bg-[#fbfff3]",
  },
  {
    title: "Learn & Journal",
    copy: "Use your journal, prompts, and 04-week education library.",
    image: "/figma-assets/image3_8359_18243.png",
    tint: "bg-[#fff8e8]",
  },
  {
    title: "Receive SMS Check-Ins",
    copy: "Receive automated weekly SMS check-ins and class reminders.",
    image: "/figma-assets/image4_8359_18243.png",
    tint: "bg-[#fff4ee]",
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
    icon: "▭",
  },
  {
    title: "Digital Journal",
    copy: "A beautiful, private space where all your SMS replies are automatically saved and organized by date.",
    icon: "▱",
  },
  {
    title: "Monthly Classes",
    copy: "Live, expert-led sessions focusing on personal growth, habit building, and intentional living.",
    icon: "▦",
  },
  {
    title: "Progress Tracking",
    copy: "Look back at your entries over time to see patterns, growth, and shifts in your perspective.",
    icon: "▰",
  },
  {
    title: "Community Access",
    copy: "Connect with other members in our moderated forum to share insights and discuss class topics.",
    icon: "○",
  },
  {
    title: "Private & Secure",
    copy: "Your reflections are yours alone. We use industry-standard encryption to keep your journal safe.",
    icon: "▢",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-[100px] text-[#0f172a]">
      <Header />
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
    <section className="px-5">
      <div className="relative mx-auto min-h-[570px] max-w-[1404px] overflow-hidden rounded-2xl">
        <Image
          src="/figma-assets/image0_8359_18243.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 ml-auto flex min-h-[570px] w-full max-w-[585px] flex-col justify-center px-8 py-16 md:mr-[72px]">
          <p className="mb-6 text-[20px] font-bold text-[#2563eb]">
            Clear your mind
          </p>
          <h1 className="text-[50px] font-semibold leading-[1.12] text-[#111827] md:text-[68px]">
            A space to reflect, learn, and grow.
          </h1>
          <p className="mt-8 max-w-[560px] text-[22px] leading-[1.55] text-[#2f3a4f]">
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
      <p className="mb-6 text-[18px] font-bold text-[#2563eb]">{eyebrow}</p>
      <h2 className="text-[34px] font-bold leading-tight md:text-[40px]">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-[20px] leading-[1.45] text-[#344258] md:text-[24px]">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Workflow() {
  return (
    <section className="mx-auto max-w-[1228px] px-6 pt-[150px]">
      <SectionHeading
        eyebrow="How we work"
        title="How NephroReach Works"
        copy="Choose the path that fits your goals. Simple, transparent pricing."
      />
      <div className="mt-[82px] grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-[72px]">
        {workflowSteps.map((step, index) => (
          <article key={step.title} className="relative">
            <div className="overflow-hidden rounded-[10px] border border-[#25221e]/20 bg-white shadow-sm">
              <div
                className={`flex h-[126px] items-center justify-center ${step.tint}`}
              >
                <Image src={step.image} alt="" width={88} height={88} />
              </div>
              <div className="min-h-[130px] border-t border-[#25221e]/20 px-[26px] pb-8 pt-[31px]">
                <h3 className="text-[18px] font-bold">{step.title}</h3>
                <p className="mt-5 text-[18px] leading-[1.45] text-[#1f2d46]/90">
                  {step.copy}
                </p>
              </div>
            </div>
            {index < workflowSteps.length - 1 ? (
              <div className="pointer-events-none absolute left-[calc(100%+6px)] top-[122px] hidden w-[70px] items-center xl:flex">
                <span className="h-px flex-1 border-t-2 border-dotted border-[#0f172a]" />
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#111827] text-3xl text-white">
                  ›
                </span>
                <span className="h-px flex-1 border-t-2 border-dotted border-[#0f172a]" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Included() {
  return (
    <section className="mx-auto max-w-[1190px] px-6 pt-[136px]">
      <SectionHeading
        eyebrow="What’s Include"
        title="Everything members need to stay engaged"
        copy="NephroReach combines automated SMS check-ins, digital journaling, guided education, and class access in one simple non-clinical membership platform."
      />
      <div className="mt-[92px] grid items-start gap-16 lg:grid-cols-[590px_1fr] lg:gap-[114px]">
        <ProductMockup />
        <div className="space-y-[126px]">
          {includeItems.map((item) => (
            <article key={item.title} className="max-w-[560px]">
              <p className={`mb-8 text-[18px] font-bold ${item.color}`}>
                {item.eyebrow}
              </p>
              <h3 className="text-[44px] font-normal leading-[1.07] text-[#464c5b] md:text-[54px]">
                {item.title}
              </h3>
              <p className="mt-9 text-[22px] leading-[1.55] text-[#868686]">
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
    <div className="relative h-[550px] overflow-hidden rounded-[13px] bg-[#f7e8bf]">
      <Image
        src="/figma-assets/image5_8359_18243.png"
        alt=""
        width={768}
        height={768}
        className="absolute inset-y-0 left-0 h-full w-[252px] object-cover"
      />
      <div className="absolute inset-y-[34px] left-[128px] w-[452px] rounded-lg bg-[#25221e]/85 backdrop-blur-sm" />
      <div className="absolute left-[56px] top-[195px] w-[510px] overflow-hidden rounded-[13px] border border-[#25221e]/20 bg-white shadow-sm">
        <div className="px-7 pb-8 pt-8">
          <p className="text-[32px] font-bold text-[#25221e]/50">check-in</p>
          <div className="mt-10 flex flex-wrap gap-3 text-[16px] text-[#25221e]/70">
            {["▭ Due date", "♙ Assignee", "⚑ Priority", "⋯"].map((item) => (
              <span
                key={item}
                className="rounded-md border border-[#25221e]/20 px-3 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#25221e]/20 px-7 py-5">
          <span className="text-[18px] text-[#25221e]/70">▱ Inbox⌄</span>
          <button className="rounded-[10px] bg-[#2563eb] px-5 py-3 text-[16px] font-medium text-white">
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1228px] px-6 pt-[128px]">
      <SectionHeading
        eyebrow="Pricing"
        title="Membership Options"
        copy="Choose the path that fits your goals. Simple, transparent pricing."
      />
      <div className="mt-[70px] grid items-end gap-8 lg:grid-cols-3 lg:gap-[29px]">
        {pricingPlans.map((plan) => (
          <article
            key={plan.title}
            className={
              plan.featured
                ? "relative overflow-hidden rounded-[48px] bg-[linear-gradient(135deg,#7df89e,#58b8c9_35%,#3f79bc_70%,#ffe35b)] p-[6px] pt-[68px] shadow-[0_4px_24px_rgba(15,23,42,0.16)]"
                : "rounded-[48px] border border-[#dce6f2] bg-[#f1f5fa] p-[42px] pb-[54px]"
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
                  ? "rounded-[42px] bg-white px-[42px] pb-[54px] pt-[48px]"
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
                <span className="text-[50px] font-bold leading-none">
                  {plan.price}
                </span>
                <span className="pb-2 text-[22px] text-[#344258]">/Month</span>
              </div>
              <p className="mt-7 text-[16px] text-[#344258]">
                Complete access to all platform features
              </p>
              <Button href="#" className={`mt-9 ${plan.featured ? "w-full" : ""}`}>
                Get Started
              </Button>
              <div className="my-10 border-t border-dashed border-[#dce6f2]" />
              <ul className="space-y-8">
                {features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-center gap-5 text-[21px] font-medium"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6e2ee] bg-white">
                      <span
                        className={
                          plan.included[index]
                            ? "text-[#00ba43]"
                            : "text-[#ff6363]"
                        }
                      >
                        {plan.included[index] ? "✓" : "×"}
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

function Testimonials() {
  return (
    <section className="mx-auto max-w-[1248px] px-6 pb-[96px] pt-[188px]">
      <div className="flex items-end justify-between gap-8">
        <div>
          <h2 className="text-[40px] font-bold leading-tight md:text-[48px]">
            What Our Customers Say
          </h2>
          <p className="mt-5 max-w-[475px] text-[20px] leading-[1.45] text-[#4a5870]">
            Real stories from people around the world using our platform to
            build, grow, and connect.
          </p>
        </div>
        <div className="hidden gap-6 md:flex">
          {["←", "→"].map((arrow) => (
            <button
              key={arrow}
              className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#14225a] text-3xl text-white"
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-[64px] grid gap-8 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <article
            key={item}
            className="rounded-3xl border border-[#e1e7ef] bg-white px-8 pb-8 pt-9 shadow-[0_8px_22px_rgba(15,23,42,0.12)]"
          >
            <span className="rounded-md bg-[#e9fbf3] px-3 py-2 text-[16px] text-[#3fbe72]">
              Student Moves
            </span>
            <p className="mt-8 text-[20px] leading-[1.38]">
              Applying for my visa was a breeze with 190evisa.com! I entered my
              details, uploaded my photo, and paid. My visa arrived in just
              three days. I&apos;ll use this service again!
            </p>
            <div className="mt-9 flex items-center gap-3 text-[18px] text-[#667085]">
              <span className="text-[27px] leading-none text-[#f7d12f]">
                ★★★★★
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
                <p className="text-[18px] font-semibold">Priya Sharma, India</p>
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
    <section className="bg-[#f1f5fa] px-6 pb-[134px] pt-[102px]">
      <SectionHeading
        eyebrow="What You Fet"
        title="What Members Get"
        copy="everything you need to grow"
      />
      <div className="mx-auto mt-[78px] grid max-w-[1228px] gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-[14px] border border-[#dde7f0] px-[34px] pb-10 pt-[35px]"
          >
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[#d8edff] text-[29px] font-bold text-[#3479ff]">
              {benefit.icon}
            </span>
            <h3 className="mt-[25px] text-[24px] font-bold">
              {benefit.title}
            </h3>
            <p className="mt-5 text-[22px] leading-[1.45] text-[#4a5870]">
              {benefit.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
