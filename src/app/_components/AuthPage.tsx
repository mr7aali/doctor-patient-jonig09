import Image from "next/image";
import Link from "next/link";

type AuthField = {
  label: string;
  placeholder: string;
  type?: string;
  icon?: "sms" | "lock";
  helper?: string;
};

type AuthPageProps = {
  variant: "signin" | "signup";
  title: string;
  subtitle?: string;
  fields: AuthField[];
  submitLabel: string;
  googleLabel: string;
  footerText: string;
  footerHref: string;
  footerLink: string;
  showCompliance?: boolean;
};

const artByVariant = {
  signin: {
    src: "/figma-assets/signin-art.png",
    backgroundSrc: "/figma-assets/signin-bg.png",
    height: 960,
    wrapperHeight: "lg:h-[960px]",
    containerHeight: "lg:min-h-[1024px]",
    formOffset: "lg:pt-[109.059px]",
    leftHeight: "lg:h-[960px]",
    leftWidth: "lg:w-[532px]",
    artLeft: "lg:left-[596px]",
    artWidth: "lg:w-[812px]",
    mainHeight: "lg:h-[1024px]",
  },
  signup: {
    src: "/figma-assets/signup-art.png",
    backgroundSrc: null,
    height: 1023,
    wrapperHeight: "lg:h-[1023px]",
    containerHeight: "lg:min-h-[1087px]",
    formOffset: "lg:pt-0",
    leftHeight: "lg:h-[1023px]",
    leftWidth: "lg:w-[528px]",
    artLeft: "lg:left-[592px]",
    artWidth: "lg:w-[816px]",
    mainHeight: "lg:h-[1087px]",
  },
} as const;

export function AuthPage({
  variant,
  title,
  subtitle,
  fields,
  submitLabel,
  googleLabel,
  footerText,
  footerHref,
  footerLink,
  showCompliance = false,
}: AuthPageProps) {
  const art = artByVariant[variant];

  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-white text-[#0f172a] ${art.containerHeight}`}
    >
      {art.backgroundSrc ? (
        <Image
          src={art.backgroundSrc}
          alt=""
          width={1440}
          height={953}
          className="pointer-events-none absolute left-1/2 top-0 hidden h-[953px] w-[1440px] max-w-none -translate-x-1/2 object-fill lg:block"
          priority
        />
      ) : (
        <div className="pointer-events-none absolute left-[-244.4375px] top-[-181px] hidden h-[1134px] w-[2143.26px] lg:block">
          <div className="absolute right-[-141.75px] top-[-141.75px] size-[992.25px] rounded-[496.125px] bg-[#e7ff51] blur-[198.45px]" />
          <div className="absolute right-[640.71px] top-[-216.88px] size-[992.25px] rounded-[496.125px] bg-[#55f5a3] blur-[198.45px]" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-white/0 lg:hidden" />

      <div className={`relative mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-8 lg:block lg:px-0 lg:py-0 ${art.mainHeight}`}>
        <section
          className={`relative z-10 mx-auto w-full max-w-[532px] ${art.leftWidth} ${art.leftHeight} lg:absolute lg:left-8 lg:top-8`}
        >
          <Link href="/" aria-label="NephroReach home" className="block h-[67.882px] w-[86px]">
            <Image
              src="/figma-assets/nephroreach-logo.png"
              alt="NephroReach"
              width={86}
              height={68}
              className="h-full w-full object-contain"
              priority
            />
          </Link>

          <div className={variant === "signin" ? "lg:mt-10 lg:h-[852.118px]" : "lg:mt-6 lg:h-[874px]"}>
            <div className={`${art.formOffset} px-0 lg:h-full`}>
              <AuthForm
                title={title}
                subtitle={subtitle}
                fields={fields}
                submitLabel={submitLabel}
                googleLabel={googleLabel}
                footerText={footerText}
                footerHref={footerHref}
                footerLink={footerLink}
                compact={variant === "signup"}
              />
              {showCompliance ? <ComplianceNotice /> : null}
            </div>
          </div>
        </section>

        <AuthArt
          src={art.src}
          height={art.height}
          wrapperHeight={art.wrapperHeight}
          artLeft={art.artLeft}
          artWidth={art.artWidth}
        />
      </div>
    </main>
  );
}

function AuthForm({
  title,
  subtitle,
  fields,
  submitLabel,
  googleLabel,
  footerText,
  footerHref,
  footerLink,
  compact,
}: Omit<AuthPageProps, "variant" | "showCompliance"> & { compact: boolean }) {
  return (
    <div className={`flex flex-col px-0 sm:px-5 ${compact ? "gap-3" : "gap-10"}`}>
      <div className={`flex flex-col items-start ${subtitle ? "gap-7" : "gap-0"}`}>
        <h1 className="w-fit origin-left text-center text-[36px] font-medium leading-10 tracking-[0.18px] text-[#0f172a] [font-family:var(--font-sf-pro)] [transform:scaleX(0.92)]">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-[18px] font-[510] leading-7 tracking-[0.09px] text-[#0f172a] [font-family:var(--font-sf-pro)]">
            {subtitle}
          </p>
        ) : null}
      </div>

      <form className="flex flex-col items-end gap-6">
        <div className="flex w-full flex-col gap-[14px]">
          {fields.map((field) => (
            <AuthTextField key={`${field.label}-${field.placeholder}`} field={field} />
          ))}
        </div>
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center rounded-[12px] bg-[#2563eb] px-[14px] py-3 text-[16px] font-medium leading-6 tracking-[0.08px] text-white shadow-[inset_0_-1px_0_#dbe9fe] [font-family:var(--font-work-sans)]"
        >
          {submitLabel}
        </button>
      </form>

      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full items-center justify-center gap-4 py-2.5">
          <Image
            src="/figma-assets/auth-divider-line.svg"
            alt=""
            width={220}
            height={1}
            className="h-px min-w-0 flex-1"
          />
          <span className="text-center text-[16px] font-[510] leading-6 tracking-[0.08px] text-[#294957] [font-family:var(--font-sf-pro)]">
            Or
          </span>
          <Image
            src="/figma-assets/auth-divider-line.svg"
            alt=""
            width={220}
            height={1}
            className="h-px min-w-0 flex-1"
          />
        </div>

        <button
          type="button"
          className={`flex h-[52px] w-full items-center justify-center gap-4 rounded-[12px] px-[9px] py-3 ${
            compact ? "bg-[#f3f9fa]" : "border border-[#e2e8f0] bg-white"
          }`}
        >
          <Image src="/figma-assets/auth-google.svg" alt="" width={28} height={28} />
          <span className="w-[159px] text-left text-[16px] font-normal leading-none tracking-[0.16px] text-[#313957]">
            {googleLabel}
          </span>
        </button>
      </div>

      <p className="w-full text-center text-[16px] font-[510] leading-6 tracking-[0.08px] text-[#0f172a] [font-family:var(--font-sf-pro)]">
        {footerText}{" "}
        <Link href={footerHref} className="text-[#1d4ed8]">
          {footerLink}
        </Link>
      </p>
    </div>
  );
}

function AuthTextField({ field }: { field: AuthField }) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-[16px] font-[510] leading-6 tracking-[0.08px] text-[#0f172a] [font-family:var(--font-sf-pro)]">
        {field.label}
      </span>
      <span className="flex h-12 w-full items-center gap-3 rounded-lg border border-[#cbd5ed] bg-white px-4 py-3">
        {field.icon ? (
          <Image
            src={field.icon === "sms" ? "/figma-assets/auth-sms.svg" : "/figma-assets/auth-lock.svg"}
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0"
          />
        ) : null}
        <input
          type={field.type ?? "text"}
          placeholder={field.placeholder}
          className="min-w-0 flex-1 bg-transparent text-[16px] font-normal leading-6 tracking-[0.08px] text-[#0f172a] outline-none placeholder:text-[#64748b] [font-family:var(--font-sf-pro)]"
        />
      </span>
      {field.helper ? (
        <Link
          href="#"
          className="self-end text-[14px] font-[510] leading-5 tracking-[0.07px] text-[#1d4ed8] [font-family:var(--font-sf-pro)]"
        >
          {field.helper}
        </Link>
      ) : null}
    </label>
  );
}

function ComplianceNotice() {
  return (
    <div className="mt-[30px] flex gap-3 rounded-md bg-[#f1f5fa] p-3 text-[#344056]">
      <Image
        src="/figma-assets/auth-checkbox.svg"
        alt=""
        width={24}
        height={24}
        className="size-6 shrink-0"
      />
      <p className="text-[16px] font-[510] leading-6 tracking-[0.08px] [font-family:var(--font-sf-pro)]">
        I verify that I am an authorized healthcare professional and agree to the End{" "}
        <Link href="#" className="text-[#2563eb] underline">
          terms and conditions
        </Link>{" "}
        and acknowledge the{" "}
        <Link href="#" className="text-[#2563eb] underline">
          Privacy Policy
        </Link>{" "}
        regarding HIPAA compliance.
      </p>
    </div>
  );
}

function AuthArt({
  src,
  height,
  wrapperHeight,
  artLeft,
  artWidth,
}: {
  src: string;
  height: number;
  wrapperHeight: string;
  artLeft: string;
  artWidth: string;
}) {
  return (
    <section
      className={`relative mx-auto hidden w-full max-w-[825px] lg:absolute lg:top-8 lg:block ${artLeft} ${artWidth}`}
      aria-label="Decorative artwork"
    >
      <div className={`relative w-[825px] ${wrapperHeight}`}>
        <Image
          src={src}
          alt=""
          width={825}
          height={height}
          className="h-full w-full object-cover"
          priority
        />
        <Link
          href="/"
          aria-label="Close"
          className="absolute right-[-4px] top-[-12px] flex size-[90px] items-center justify-center rounded-[45px] border border-[#e2e8f0] bg-[#f1f5fa] p-[33px]"
        >
          <Image src="/figma-assets/auth-close.svg" alt="" width={30} height={30} />
        </Link>
      </div>
    </section>
  );
}
