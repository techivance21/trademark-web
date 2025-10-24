import Image from "next/image";

const advantages = [
  "Get legal advice from licensed attorneys about how to assess your risks and move forward with your mark.",
  "Includes conflicts with all registered, unregistered, and dead marks across trademark databases.",
  "Includes results from Google, Yahoo, Facebook, Wikipedia, Instagram, and more common-law sources.",
  "Instant report delivery in PDF, RTF, Word, HTML, and Excel formats sent directly to your email.",
  "We provide the highest data quality with special opinions from our supervising attorneys.",
];

export default function ComprehensiveTrademarkAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-y-0 right-[-220px] hidden w-[36rem] rounded-full bg-[#6c4cb1]/10 blur-[140px] lg:block" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20">
        <div className="w-full space-y-8 lg:flex-1">
          <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Key <span className="text-[#6c4cb1]">Advantages</span>
          </h2>
          <ul className="space-y-4">
            {advantages.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F5E9] text-[#43A047] sm:h-6 sm:w-6">
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8.293 13.293a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L9 10.586 6.707 8.293A1 1 0 0 0 5.293 9.707l3 3Z" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex w-full items-center justify-center lg:flex-1">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-8 -right-6 h-20 w-20 rounded-full bg-[#6c4cb1]/10 blur-xl" />
            <div className="absolute bottom-[-24px] left-[-18px] h-16 w-16 rounded-full bg-[#6c4cb1]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] bg-[#F5F5F5] p-6 shadow-[0_32px_90px_-60px_rgba(33,33,33,0.55)]">
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#333333] shadow-[0_12px_30px_-26px_rgba(33,33,33,0.7)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f44336]" />
                Dead
                <span className="h-2.5 w-2.5 rounded-full bg-[#F9A825]" />
                Pending
                <span className="h-2.5 w-2.5 rounded-full bg-[#66BB6A]" />
                Registered
              </div>
              <div className="relative mt-16 overflow-hidden rounded-[26px] bg-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6c4cb1]/10">
                      <svg
                        className="h-6 w-6 text-[#6c4cb1]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                        Search Report
                      </p>
                      <p className="text-xs text-[#333333] font-[var(--font-body)]">
                        Trademark clearance summary
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF3E0] px-3 py-1 text-xs font-semibold text-[#FB8C00]">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5 2h10l6 6v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm9 1.5V8h4.5L14 3.5Zm2.5 13.75L12 12.75l-3.5 3.5-1.5-1.5L12 9.75l5.5 5.5-1.5 1.5Z" />
                    </svg>
                    PDF
                  </span>
                </div>
                <div className="mt-6 space-y-3 text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                  <p>• Attorney analysis of conflicts</p>
                  <p>• Marketplace usage snapshots</p>
                  <p>• Filing recommendations</p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {["/hero-placeholder.svg", "/hero-placeholder.svg", "/hero-placeholder.svg"].map(
                    (src, index) => (
                      <Image
                        key={src + index}
                        src={src}
                        alt="Common law search source logo"
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full bg-[#F5F5F5] object-cover"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
