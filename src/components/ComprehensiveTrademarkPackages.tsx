import Image from "next/image";

type PackageFeature = {
  title: string;
  description: string;
};

type PackageItem = {
  id: string;
  name: string;
  headline: string;
  price: string;
  badge?: string;
  primaryFeature?: string;
  features: PackageFeature[];
  imageAlt: string;
};

const packages: PackageItem[] = [
  {
    id: "federal",
    name: "Federal Search",
    headline: "Federal Search",
    price: "$199",
    primaryFeature: undefined,
    features: [
      {
        title: "Federal Search",
        description:
          "We scan USPTO filings for identical and similar trademarks across classes using attorney-reviewed filters.",
      },
      {
        title: "Legal Expertise",
        description:
          "Our licensed practitioners interpret the results to flag real conflicts and likelihood-of-confusion issues.",
      },
    ],
    imageAlt: "USA flag placeholder",
  },
  {
    id: "recommended",
    name: "Federal and Common Law Search",
    headline: "Federal + Common Law Search",
    price: "$299",
    badge: "Recommended",
    primaryFeature: "Everything from Federal Search",
    features: [
      {
        title: "Common Law Search",
        description:
          "We extend coverage to marketplace usage, domain registrations, and social platforms to uncover unregistered conflicts.",
      },
      {
        title: "Domain Search",
        description:
          "We review matching and confusingly similar domains so you can secure brand assets before launch.",
      },
    ],
    imageAlt: "USA flag placeholder",
  },
  {
    id: "global",
    name: "Global Comprehensive Search",
    headline: "Global Comprehensive Search",
    price: "$1599",
    primaryFeature: "Everything from Federal and Common Law Search",
    features: [
      {
        title: "Global Coverage",
        description:
          "Attorneys review Canadian, UK, EUIPO, WIPO, and additional international registries for conflicts across borders.",
      },
    ],
    imageAlt: "Globe icon placeholder",
  },
];

export default function ComprehensiveTrademarkPackages() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(108,76,177,0.12),_transparent_65%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            We offer <span className="text-[#6c4cb1]">3 packages</span> for
            Comprehensive search
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Choose the right level of clearance for your brand. Every package
            includes attorney insight, transparent pricing, and fast turnaround.
          </p>
        </div>
        <div className="grid w-full gap-8 lg:grid-cols-3">
          {packages.map((pkg) => {
            const isFeatured = pkg.id === "recommended";
            return (
              <article
                key={pkg.id}
                className={`group relative flex h-full flex-col gap-6 rounded-[36px] border bg-white px-8 py-10 text-left shadow-[0_32px_90px_-70px_rgba(33,33,33,0.65)] transition duration-300 hover:border-[#6c4cb1] hover:shadow-[0_42px_120px_-70px_rgba(33,33,33,0.7)] ${
                  isFeatured
                    ? "border-[#6c4cb1] lg:-translate-y-4"
                    : "border-transparent"
                }`}
              >
                <span
                  className={`pointer-events-none absolute inset-x-10 bottom-8 h-1 origin-left rounded-full bg-[#6c4cb1] transition-transform duration-300 ${
                    isFeatured ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
                <div className="absolute inset-x-10 top-0 hidden h-2 rounded-b-full bg-[#6c4cb1]/10 group-hover:bg-[#6c4cb1]/15 lg:block" />
                {pkg.badge ? (
                  <span className="self-center rounded-full bg-[#FFF3E0] px-4 py-1 text-xs font-semibold text-[#FB8C00] font-[var(--font-heading)]">
                    {pkg.badge}
                  </span>
                ) : (
                  <span className="h-6" aria-hidden="true" />
                )}
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5]">
                    <Image
                      src="/hero-placeholder.svg"
                      alt={pkg.imageAlt}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#212121] sm:text-xl font-[var(--font-heading)]">
                    {pkg.headline}
                  </h3>
                  <p className="text-3xl font-semibold text-[#212121] font-[var(--font-heading)]">
                    {pkg.price}
                  </p>
                </div>
                {pkg.primaryFeature && (
                  <div className="rounded-2xl bg-[#F5F5F5] px-4 py-3 text-sm font-semibold text-[#333333] font-[var(--font-body)]">
                    <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F5E9] text-[#2E7D32]">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                        <path d="M8.293 13.293a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L9 10.586 6.707 8.293A1 1 0 0 0 5.293 9.707l3 3Z" />
                      </svg>
                    </span>
                    {pkg.primaryFeature}
                  </div>
                )}
                <div className="space-y-6">
                  {pkg.features.map((feature) => (
                    <div key={feature.title} className="space-y-2">
                      <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                        {feature.title}
                      </p>
                      <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
                  >
                    Get Started
                    <span className="absolute inset-x-6 bottom-2 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
