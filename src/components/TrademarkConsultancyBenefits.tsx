const benefits = [
  {
    title: "Safeguard yourself from infringement",
    description:
      "Identify identical or confusingly similar marks before you file so you can avoid costly disputes and delays.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M24 8 12 12v10c0 7.732 5.373 14.5 12 16 6.627-1.5 12-8.268 12-16V12Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="m19 25 3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Uncover potential conflicts",
    description:
      "Spot roadblocks during the registration process and develop a proactive plan to move forward with confidence.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="8"
          width="28"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 16h16M16 22h16M16 28h10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Make a long-term investment in your business",
    description:
      "Protect future growth by preventing rebranding costs and maintaining the brand equity you build from day one.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M18 32c0 3.314 2.686 6 6 6s6-2.686 6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M18 32h-6V16l12-6 12 6v16h-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M18 22h12M18 27h12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Assess the eligibility of your registration",
    description:
      "Evaluate how distinctive your mark is and understand whether it qualifies for protection in the classes you need.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M14 20h20l-4 18H18l-4-18Zm4-6a6 6 0 0 1 12 0v6H18v-6Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Establish the scope of your rights",
    description:
      "Determine how far your protection extends and which goods or services should be included in your filing strategy.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="m19 30 9-6-9-6v12Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Identify competitors",
    description:
      "Map your competitive landscape and adjust branding or marketing strategies before investing in a trademark application.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M18 18a6 6 0 1 1 12 0 6 6 0 0 1-12 0ZM12 38a12 12 0 0 1 24 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M35 22h5l2 3-2 3h-5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TrademarkConsultancyBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-20">
      <div className="pointer-events-none absolute -left-10 top-16 h-32 w-32 bg-[radial-gradient(circle,_rgba(108,76,177,0.18),_transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[-60px] right-[-40px] h-40 w-40 rounded-full bg-[#6c4cb1]/10 blur-[120px]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
            Why do I need a trademark search?
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            The service we offer is specifically designed to meet your needs.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_28px_80px_-70px_rgba(33,33,33,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_120px_-76px_rgba(33,33,33,0.65)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6c4cb1]/10 text-[#6c4cb1]">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-auto h-0.5 w-16 origin-left scale-x-0 rounded-full bg-[#6c4cb1] transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
