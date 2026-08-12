const linkTargets = [
  { label: "Home", href: "/", left: 858, top: 39, width: 50, height: 32 },
  { label: "FAQ", href: "/faq", left: 934, top: 39, width: 48, height: 32 },
  { label: "About us", href: "#", left: 997, top: 39, width: 78, height: 32 },
  { label: "Pricing", href: "#", left: 1094, top: 39, width: 70, height: 32 },
  { label: "Log in", href: "#", left: 1192, top: 39, width: 58, height: 32 },
  {
    label: "Try it free",
    href: "#",
    left: 1264,
    top: 24,
    width: 106,
    height: 52,
  },
  {
    label: "Start Tracking",
    href: "#",
    left: 70,
    top: 263,
    width: 139,
    height: 48,
  },
  {
    label: "Contact us",
    href: "#",
    left: 710,
    top: 1370,
    width: 116,
    height: 52,
  },
];

const headerLinks = linkTargets.filter((link) => link.top < 100);
const CANVAS_WIDTH = 1440;
const CANVAS_HEIGHT = 1976;
const HEADER_HEIGHT = 100;

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Frequently Asked Questions</h1>
      <FixedHeader />
      <div className="relative mx-auto w-full max-w-[1440px] bg-[url('/figma-assets/faq-page.svg')] bg-contain bg-top bg-no-repeat [aspect-ratio:1440/1976]">
        {linkTargets.map((link) => (
          <a
            key={`${link.label}-${link.left}-${link.top}`}
            href={link.href}
            aria-label={link.label}
            className="absolute block rounded-[10px] outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb]/40"
            style={{
              left: `${(link.left / CANVAS_WIDTH) * 100}%`,
              top: `${(link.top / CANVAS_HEIGHT) * 100}%`,
              width: `${(link.width / CANVAS_WIDTH) * 100}%`,
              height: `${(link.height / CANVAS_HEIGHT) * 100}%`,
            }}
          />
        ))}
      </div>
      <section className="sr-only">
        <h2>Frequently Asked Questions</h2>
        <p>Simple answers about privacy, data, and how tracking works.</p>
        <h2>FAQ items</h2>
        <ul>
          <li>Are all suppliers really based in the UK?</li>
          <li>How does VAT work with DropClicker?</li>
          <li>Average shipping time?</li>
          <li>Can I use this with my existing store?</li>
          <li>What payment methods are accepted?</li>
          <li>Is there a trial period available?</li>
          <li>How do I track my order status?</li>
        </ul>
      </section>
    </main>
  );
}

function FixedHeader() {
  return (
    <div className="fixed left-1/2 top-0 z-50 w-full max-w-[1440px] -translate-x-1/2 bg-white [aspect-ratio:1440/100]">
      <div className="absolute inset-0 bg-[url('/figma-assets/faq-page.svg')] bg-[length:100%_auto] bg-top bg-no-repeat" />
      {headerLinks.map((link) => (
        <a
          key={`fixed-${link.label}-${link.left}-${link.top}`}
          href={link.href}
          aria-label={link.label}
          className="absolute block rounded-[10px] outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb]/40"
          style={{
            left: `${(link.left / CANVAS_WIDTH) * 100}%`,
            top: `${(link.top / HEADER_HEIGHT) * 100}%`,
            width: `${(link.width / CANVAS_WIDTH) * 100}%`,
            height: `${(link.height / HEADER_HEIGHT) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
