import Image from "next/image";
import { Fragment } from "react";
import { Footer } from "../../_components/SiteChrome";

const featureRows = [
  {
    title: "Our Vision",
    body: "To become a trusted digital education and engagement platform that helps members stay connected, accountable, and supported through simple automated tools.",
    imageFirst: true,
    imageHeight: "min-[1200px]:h-[241px]",
  },
  {
    title: "Our Mission",
    body: "To make learning, reflection, and personal growth easier by providing automated SMS support, digital journaling, structured education, and monthly live class access in one seamless platform.",
    imageFirst: false,
    imageHeight: "min-[1200px]:h-[300px]",
  },
  {
    title: "What We Are Not",
    body: "We are not a clinical, medical, or emergency response platform. The system does not provide diagnosis, treatment, therapy, or real-time human support.\nThis platform is designed for non-clinical education, engagement, journaling, and automated member support only.",
    imageFirst: true,
    imageHeight: "min-[1200px]:h-[300px]",
  },
] as const;

const values = [
  {
    title: "Simplicity",
    body: "We believe member support should be easy to access, easy to understand, and simple to use.",
    src: "/figma-assets/about-value-simplicity.png",
    bg: "#f4fbf7",
  },
  {
    title: "Accountability",
    body: "We help members stay engaged through consistent SMS check-ins, journaling, and structured learning.",
    src: "/figma-assets/about-value-accountability.png",
    bg: "#f6faeb",
  },
  {
    title: "Education",
    body: "We provide helpful educational resources, a 08-week curriculum, and monthly live classes to support personal growth.",
    src: "/figma-assets/about-value-education.png",
    bg: "#fff9eb",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-[100.962px] text-[#1a130d]">
      <AboutHero />
      <FounderSection />
      <CenteredTextSection
        title="Who We Are"
        body={[
          "We are a non-clinical educational engagement platform designed to support members through simple, automated, and meaningful digital interactions. Our platform helps users register by phone number, receive a unique member ID, access a private digital journal, follow a 12-week education library, and stay connected through automated SMS check-ins.",
          "Our goal is to make personal growth and learning easier through a system that works smoothly without requiring real-time human responses.",
        ]}
        className="min-[1200px]:h-[288px]"
        bodyAlign="left"
      />
      <CenteredTextSection
        title="Why Choose Us"
        body={[
          "We provide a simple and scalable platform that combines SMS automation, digital journaling, education, and live class access in one easy-to-use system. Members can choose the plan that fits them best, whether they want journal-only access, full membership, or a one-time class purchase. The system is designed to be user-friendly, automated, and ready for future expansion.",
        ]}
        className="min-[1200px]:h-[224px]"
      />
      <FeatureSection />
      <ValuesSection />
      <Footer />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-[14px] min-[1200px]:h-[609px]">
      <div className="relative h-[42.258vw] min-h-[260px] overflow-hidden rounded-2xl min-[1200px]:h-[595px]">
        <Image
          src="/figma-assets/about-us-page.png"
          alt="About NephroReach member education through smart SMS engagement"
          fill
          priority
          sizes="(min-width: 1200px) 1408px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_549.384px] lg:px-[108px] min-[1200px]:h-[670px] min-[1200px]:py-10">
      <div className="max-w-[643px] font-[Georgia,serif] text-[#0f1912]">
        <div className="relative w-fit max-w-full">
          <h1 className="text-[30px] font-normal leading-[36px] tracking-[0.18px] md:text-[36px] md:leading-10">
            Founded by Dr Jaime Jonsson
          </h1>
          <Image
            src="/figma-assets/about-founder-underline.svg"
            alt=""
            width={497}
            height={9}
            className="absolute left-0 top-[31px] h-[9px] w-full md:top-[38.66px]"
          />
        </div>
        <div className="mt-8 flex flex-col gap-[18px] text-[20px] font-normal leading-[28px] tracking-[0.12px] md:text-[24px] md:leading-8">
          <p>
            Eye Movement Desensitisation and Reprocessing (EMDR) is an evidence
            based therapy for all types of mental health problems.
          </p>
          <p>
            Our program combines professional guidance, AI-assisted tools, and
            personalised support to make EMDR therapy accessible in a safe and
            structured way.
          </p>
        </div>
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-[390px] lg:h-[590px] lg:max-w-none">
        <div className="absolute left-[3.5%] top-[-2.2%] h-[100.72%] w-[88.34%] rotate-[-5.68deg] rounded-[9px] bg-[rgba(201,154,144,0.5)]" />
        <div className="absolute left-[4.16%] top-[-1.67%] h-[100.72%] w-[88.34%] rotate-[4.81deg] rounded-[9px] bg-[rgba(201,154,144,0.5)]" />
        <div className="absolute left-[8.15%] top-[1.01%] h-[101.63%] w-[89.34%] overflow-hidden rounded-lg">
          <Image
            src="/figma-assets/about-founder.png"
            alt="Dr Jaime Jonsson"
            fill
            sizes="(min-width: 1024px) 491px, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

function CenteredTextSection({
  title,
  body,
  className = "",
  bodyAlign = "center",
}: {
  title: string;
  body: string[];
  className?: string;
  bodyAlign?: "left" | "center";
}) {
  return (
    <section
      className={`mx-auto flex max-w-[1440px] items-start justify-center px-6 py-8 md:px-20 ${className}`}
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-4 text-center font-[family-name:var(--font-dm-sans)] font-medium tracking-normal">
        <h2 className="text-[30px] leading-10 text-[#1a130d] md:text-[36px] md:leading-[48px]">
          {title}
        </h2>
        <div
          className={`text-[18px] leading-8 text-[#55402c] md:text-[20px] ${
            bodyAlign === "center" ? "text-center" : "text-left"
          }`}
        >
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-6 py-8 md:px-14 min-[1200px]:h-[1037px] min-[1200px]:py-7">
      <div className="mx-auto flex max-w-[1328px] flex-col gap-7">
        {featureRows.map((row) => (
          <FeatureRow key={row.title} row={row} />
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ row }: { row: (typeof featureRows)[number] }) {
  const image = (
    <div
      className={`relative h-[220px] min-w-0 flex-1 overflow-hidden rounded-xl ${row.imageHeight}`}
    >
      <Image
        src="/figma-assets/about-health-card.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 628px, 100vw"
        className="object-cover"
      />
    </div>
  );

  const copy = (
    <div className="flex min-w-0 flex-1 flex-col gap-5 font-[family-name:var(--font-dm-sans)] tracking-normal min-[1200px]:items-end">
      <h2 className="w-full text-[30px] font-medium leading-10 text-[#1a130d] md:text-[36px] md:leading-[48px]">
        {row.title}
      </h2>
      <div className="w-full whitespace-pre-line text-[18px] font-normal leading-8 text-[#55402c] md:text-[20px]">
        {row.body}
      </div>
    </div>
  );

  return (
    <article className="grid gap-6 bg-white min-[1200px]:grid-cols-2 min-[1200px]:items-start min-[1200px]:px-6 min-[1200px]:py-[14px]">
      {row.imageFirst ? (
        <>
          {image}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {image}
        </>
      )}
    </article>
  );
}

function ValuesSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-8 md:px-14 min-[1200px]:h-[508px]">
      <div className="font-[family-name:var(--font-dm-sans)] tracking-normal">
        <h2 className="text-center text-[30px] font-medium leading-10 text-[#1a130d] md:text-[36px] md:leading-[48px]">
          Our Core Values
        </h2>
        <p className="mx-auto mt-4 max-w-[1328px] text-center text-[18px] font-medium leading-8 text-[#55402c] md:text-[20px]">
          We are building a simple, supportive, and scalable platform based on
          trust, accessibility, automation, and meaningful member engagement.
        </p>
        <div className="mx-auto mt-4 grid max-w-[1298px] gap-6 lg:grid-cols-[1fr_32px_1fr_32px_1fr] lg:items-center">
          {values.map((value, index) => (
            <Fragment key={value.title}>
              <ValueCard key={value.title} value={value} />
              {index < values.length - 1 ? (
                <Image
                  src="/figma-assets/about-values-line.svg"
                  alt=""
                  width={32}
                  height={4}
                  className="hidden h-1 w-8 lg:block"
                />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }: { value: (typeof values)[number] }) {
  return (
    <article className="min-h-[332px] overflow-hidden rounded-[10px] border border-[#25221e]/[0.18] bg-white shadow-[0_1px_0_rgba(37,34,30,0.04)]">
      <div
        className="flex h-[125px] items-center justify-center"
        style={{ backgroundColor: value.bg }}
      >
        <Image src={value.src} alt="" width={81} height={80} className="h-20 w-[81px]" />
      </div>
      <div className="border-t border-[#25221e]/[0.18] px-4 pb-2 pt-4">
        <h3 className="text-[24px] font-medium leading-9 text-[#1a130d]">
          {value.title}
        </h3>
      </div>
      <p className="px-4 pb-4 text-[20px] font-normal leading-8 text-[#55402c]">
        {value.body}
      </p>
    </article>
  );
}
