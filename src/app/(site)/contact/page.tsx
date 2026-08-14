import Image from "next/image";
import type { CSSProperties } from "react";
import { Footer } from "../../_components/SiteChrome";

const referralOptions = [
  "How did you find us?",
  "Google Search",
  "A friend or colleague",
  "Social media",
  "NephroReach class",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-[100.962px] text-[#0f172a]">
      <ContactSection />
      <Footer />
    </main>
  );
}

function ContactSection() {
  return (
    <section className="relative mx-auto overflow-hidden border border-[#e9eef4] bg-white px-6 py-14 lg:min-h-[900px] lg:max-w-[1440px] lg:px-0 lg:py-0">
      <ContactBackgroundBars />
      <div className="pointer-events-none absolute right-0 top-[-1px] hidden h-[900px] w-[419px] bg-[#2fa4a9] lg:block" />

      <div className="relative z-10 grid gap-12 lg:block">
        <div className="lg:absolute lg:left-20 lg:top-[113px] lg:w-[614px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="w-fit origin-left whitespace-nowrap text-[44px] font-medium leading-none tracking-[0.3px] text-[#0f172a] [font-family:var(--font-sf-pro)] [transform:scaleX(0.88)] sm:text-[60px]">
                Get in <span className="text-[#2563eb]">Touch</span>
              </h1>
              <p className="max-w-[614px] text-[16px] leading-7 tracking-[0.09px] text-[#344056] [font-family:var(--font-poppins)] sm:text-[18px]">
                Have a question or need assistance? Reach out to us via email,
                phone, or the contact form below. We&apos;re eager to assist you.
              </p>
              <p className="text-[16px] font-medium leading-6 tracking-[0.08px] text-[#64748b] [font-family:var(--font-poppins)]">
                Nice hearing from you!
              </p>
            </div>

            <form className="flex w-full max-w-[545px] flex-col gap-5">
              <input
                aria-label="Name"
                name="name"
                placeholder="Name"
                className="h-[50px] rounded-[12px] border border-[#d6e6f2] bg-white px-5 text-[16px] font-[510] leading-6 tracking-[0.08px] text-[#0f172a] outline-none placeholder:text-[#9a948d] focus:border-[#2563eb] [font-family:var(--font-sf-pro)]"
              />
              <input
                aria-label="Email"
                name="email"
                type="email"
                placeholder="Email"
                className="h-[50px] rounded-[12px] border border-[#d6e6f2] bg-white px-5 text-[16px] font-[510] leading-6 tracking-[0.08px] text-[#0f172a] outline-none placeholder:text-[#9a948d] focus:border-[#2563eb] [font-family:var(--font-sf-pro)]"
              />
              <textarea
                aria-label="Message"
                name="message"
                placeholder="Label"
                className="h-[138px] resize-none rounded-lg border border-[#c4cdd5] bg-white px-4 py-3 text-[16px] font-[510] leading-6 tracking-[0.08px] text-[#0f172a] outline-none placeholder:text-[#9a948d] focus:border-[#2563eb] [font-family:var(--font-sf-pro)]"
              />
              <label className="relative block">
                <span className="sr-only">How did you find us?</span>
                <select
                  name="referral"
                  defaultValue={referralOptions[0]}
                  className="h-[50px] w-full appearance-none rounded-[12px] border border-[#d6e6f2] bg-white px-5 pr-12 text-[16px] font-[510] leading-6 tracking-[0.08px] text-[#9a948d] outline-none focus:border-[#2563eb] [font-family:var(--font-sf-pro)]"
                >
                  {referralOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <Image
                  src="/figma-assets/contact-arrow-down.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="pointer-events-none absolute right-5 top-1/2 size-6 -translate-y-1/2"
                />
              </label>
              <button
                type="button"
                className="flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#2563eb] px-[14px] py-3 text-[16px] font-medium leading-6 tracking-[0.08px] text-white shadow-[inset_0_-1px_0_#dbe9fe] transition hover:bg-[#1d4ed8] [font-family:var(--font-work-sans)]"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="relative mx-auto h-[480px] w-full max-w-[550px] overflow-hidden rounded-[32px] lg:absolute lg:left-[744px] lg:top-[92px] lg:h-[743px] lg:rounded-[40px]">
          <Image
            src="/figma-assets/contact-portrait.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 550px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/40" />
        </div>
      </div>
    </section>
  );
}

function ContactBackgroundBars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        data-node-id="8359:16608"
        style={{
          ...contactBarTransform,
          position: "absolute",
          left: "-302px",
          top: "174px",
          width: "703.094px",
          height: "167.424px",
          borderRadius: "105.53px",
          background: "#dbe9fe",
        }}
      />
      <div
        data-node-id="8359:16609"
        style={{
          ...contactBarTransform,
          position: "absolute",
          left: "-122px",
          top: "-3px",
          width: "652.439px",
          height: "155.361px",
          borderRadius: "105.53px",
          background: "#dbe9fe",
        }}
      />
    </div>
  );
}

const contactBarTransform = {
  transform: "rotate(42.14deg) skewX(2.07deg)",
  transformOrigin: "center",
  opacity: 0.47,
} satisfies CSSProperties;
