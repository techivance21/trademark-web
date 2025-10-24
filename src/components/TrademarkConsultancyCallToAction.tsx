import Image from "next/image";

export default function TrademarkConsultancyCallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-20">
      <div className="pointer-events-none absolute -left-12 top-10 h-28 w-28 rounded-full bg-[#6c4cb1]/15 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-40px] h-40 w-40 rounded-full bg-[#6c4cb1]/10 blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-8 rounded-[32px] bg-white p-8 shadow-[0_36px_120px_-70px_rgba(33,33,33,0.65)]">
          <div className="relative overflow-hidden rounded-[24px]">
            <Image
              src="/consultany.jpg"
              alt="Consultant speaking with client over video call"
              width={720}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl font-[var(--font-heading)]">
              During your complimentary strategy call we will:
            </h2>
            <ul className="space-y-4 text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              {[
                "Identify the right protection path for your brand or invention.",
                "Explain each stage of the trademark process and estimated timelines.",
                "Review your documentation and answer specific legal questions.",
                "Provide a transparent, flat-fee proposal tailored to your goals.",
                "Outline next steps so you can move forward confidently after the call.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#333333] font-[var(--font-body)]">
              Calls typically last 20–40 minutes. Once you submit the form, we
              will email available times to connect with an experienced attorney.
            </p>
          </div>
        </div>
        <div className="space-y-6 rounded-[32px] bg-white p-8 shadow-[0_36px_120px_-70px_rgba(33,33,33,0.65)]">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)]">
              Book Your Free IP Strategy Call Online
            </p>
            <h3 className="text-3xl font-semibold text-[#212121] font-[var(--font-heading)]">
              Step 1 of 2
            </h3>
            <p className="text-sm text-[#333333] font-[var(--font-body)]">
              Complete the form below to request your consultation. After
              submitting, choose a time that works for you.
            </p>
          </div>
          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-first-name" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  First Name*
                </label>
                <input
                  id="consult-first-name"
                  type="text"
                  placeholder="Jane"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-last-name" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Last Name*
                </label>
                <input
                  id="consult-last-name"
                  type="text"
                  placeholder="Doe"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-phone" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Your Phone*
                </label>
                <input
                  id="consult-phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="consult-email" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Your Email*
                </label>
                <input
                  id="consult-email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-2xl border border-[#E0E0E0] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="consult-topic" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                What can we help you with?*
              </label>
              <select
                id="consult-topic"
                className="h-12 w-full rounded-2xl border border-[#E0E0E0] bg-white px-4 text-sm text-[#212121] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a topic
                </option>
                <option value="search">Trademark Search Guidance</option>
                <option value="filing">Trademark Filing Strategy</option>
                <option value="portfolio">Portfolio Management</option>
                <option value="dispute">Enforcement / Disputes</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="consult-message" className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                Message (Optional)
              </label>
              <textarea
                id="consult-message"
                rows={4}
                placeholder="Share any details to help us prepare for your call."
                className="w-full rounded-2xl border border-[#E0E0E0] px-4 py-3 text-sm text-[#212121] placeholder:text-[#9e9e9e] focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/30 font-[var(--font-body)]"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
            >
              Request My Call
              <span className="ml-2 h-0.5 w-6 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
