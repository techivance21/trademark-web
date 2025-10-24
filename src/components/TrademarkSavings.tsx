"use client";

const SAVINGS_POINTS = [
  {
    number: "01",
    title: "Lower Monitoring Costs",
    description:
      "Our $59/month brand watch includes attorney escalation when conflicts appear, saving over $300 versus market plans that charge premium legal fees.",
  },
  {
    number: "02",
    title: "Confidence Before You File",
    description:
      "Each application receives a comprehensive search with attorney review, so you avoid costly USPTO refusals and delays when it matters most.",
  },
  {
    number: "03",
    title: "Attorney-Led Support",
    description:
      "Legal Mark Experts keeps licensed professionals on call from intake to final filing, ensuring expert guidance without surprise hourly invoices.",
  },
];

export default function TrademarkSavings() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
            Why Legal Mark Experts
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Saves You More
          </h2>
          <span className="mt-5 inline-flex h-[3px] w-16 rounded-full bg-[#6c4cb1]/50 sm:w-20" />
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAVINGS_POINTS.map(({ number, title, description }) => (
            <article
              key={title}
              className="flex h-full flex-col gap-4 rounded-[26px] border border-[#e0e0e0] bg-white p-6 text-left shadow-[0_32px_90px_-70px_rgba(108,76,177,0.55)] transition hover:-translate-y-1 hover:border-[#cfc6ef] hover:shadow-[0_38px_110px_-70px_rgba(108,76,177,0.55)] sm:p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1edff] text-[#6c4cb1] font-semibold font-[var(--font-heading)] sm:h-12 sm:w-12">
                {number}
              </span>
              <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
