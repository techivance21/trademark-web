const reasons = [
  {
    title: "Enforce Your Rights",
    description:
      "Send a decisive warning that proves you actively protect your trademark without immediately filing suit.",
    accent: "#ede7ff",
  },
  {
    title: "Stop It Early",
    description:
      "Shut down misuse before it damages your reputation or sets an unfavorable precedent in the market.",
    accent: "#e4f0ff",
  },
  {
    title: "Build Legal Record",
    description:
      "Establish proof that you consistently defend your brand if you need to escalate enforcement later.",
    accent: "#f7ecff",
  },
  {
    title: "Avoid Costly Lawsuits",
    description:
      "Resolve conflicts fast and affordably—most infringers comply once they receive a formal legal demand.",
    accent: "#f1f7ff",
  },
];

export default function CeaseAndDesistImportance() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-14">
        <div className="space-y-6 text-center lg:max-w-sm lg:text-left">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#6c4cb1]/30 text-[#6c4cb1]">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M12 6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
              <path
                d="M11.293 2.293 2.293 11.293a1 1 0 0 0-.293.707v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a1 1 0 0 0-.293-.707l-9-9a1 1 0 0 0-1.414 0Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
              Why a Cease &amp; Desist Letter Matters
            </h2>
            <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              Issuing a formal notice shows you take infringement seriously and encourages a resolution without
              court intervention. Use it to protect your reputation, maintain brand value, and keep leverage on your side.
            </p>
          </div>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex h-full flex-col gap-3 rounded-[28px] border border-[#E0E0E0] bg-white p-6 shadow-[0_24px_90px_-70px_rgba(33,33,33,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[#6c4cb1]/35 hover:shadow-[0_28px_110px_-70px_rgba(108,76,177,0.35)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-[#6c4cb1]"
                style={{ backgroundColor: reason.accent }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path
                    d="m20 7-8-4-8 4v10l8 4 8-4V7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11v3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="16" r="0.8" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
