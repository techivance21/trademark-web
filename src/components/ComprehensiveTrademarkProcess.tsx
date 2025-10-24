const steps = [
  {
    title: "Tell us about your mark",
    description:
      "Fill the short intake form with the name, goods or services, and any existing usage details so we can tailor the search scope.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M24 17c-3.866 0-7 3.134-7 7 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.866-3.134-7-7-7Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="m30.5 30.5 4.5 4.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "We send you a detailed search report",
    description:
      "Attorneys review USPTO, international, state, and common-law sources plus web and social platforms to surface potential conflicts.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <rect
          x="11"
          y="8"
          width="26"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M18 16h12M18 22h12M18 28h8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M21 8V5h6v3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Attorney’s opinion of the results",
    description:
      "Schedule a video review to walk through findings, understand risk levels, and map the best path forward for your application.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M34 32c0-4.418-4.477-8-10-8s-10 3.582-10 8v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M36 24v6l4 2v-10l-4 2Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ComprehensiveTrademarkProcess() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            How Comprehensive Search works?
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Every comprehensive search includes expert review, multi-source data,
            and personalized guidance so you always know the next move for your
            trademark.
          </p>
        </div>
        <div className="grid w-full gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center gap-5 rounded-3xl bg-[#F5F5F5] px-6 py-10 text-center shadow-[0_28px_80px_-70px_rgba(33,33,33,0.6)]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_18px_40px_-30px_rgba(33,33,33,0.6)]">
                {step.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
