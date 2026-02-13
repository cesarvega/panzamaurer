import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  boldPrefix?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({
  title,
  subtitle,
  boldPrefix,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section
      className="relative w-full rounded-br-[30px]"
      style={{
        background:
          "linear-gradient(-57.8deg, rgba(100,116,139,0) 57.5%, rgba(0,105,255,0.1) 103.2%), linear-gradient(90deg, rgba(255,255,255,0) 20.3%, rgba(255,255,255,0.7) 85.8%), linear-gradient(90deg, rgba(229,233,241,0.8) 0%, rgba(229,233,241,0.8) 100%), linear-gradient(90deg, #f3f4f6 0%, #f3f4f6 100%)",
      }}
    >
      {/* Hero content: 460px total, title at 164px from top */}
      <div className="mx-auto h-[398px] max-w-[1440px]">
        <div className="flex h-full flex-col items-center justify-center pt-[55px]">
          <div className="flex w-[800px] max-w-full flex-col items-center gap-[15px] px-8 text-center">
            <h1 className="font-[family-name:var(--font-hanken)] text-[52px] font-semibold leading-[1.6] tracking-[-0.52px] text-slate-600">
              {title}
            </h1>
            <div className="h-[2px] w-[293px] bg-primary-red" />
            {subtitle && (
              <p className="text-[20px] leading-[1.6] text-primary-dark">
                {boldPrefix && (
                  <span className="font-semibold">{boldPrefix}</span>
                )}{" "}
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumbs: h=62px, px=112px, py=20px, rounded-br-24px */}
      <div
        className="h-[62px] rounded-br-[24px] border-t border-[#e7e9ed] py-[20px] backdrop-blur-[7px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 58.8%, rgba(255,255,255,0.8) 100%), linear-gradient(-90deg, rgba(255,255,255,0) 38.1%, rgba(255,255,255,0.6) 100%), linear-gradient(90deg, rgba(227,237,253,0.6) 0%, rgba(227,237,253,0.6) 100%)",
        }}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center gap-3 px-[112px] text-[14px]">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <svg
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="font-[family-name:var(--font-inter)] font-medium leading-[20px] text-slate-600 transition-colors hover:text-blue-700"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-[family-name:var(--font-inter)] font-semibold leading-[20px] text-blue-700">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
