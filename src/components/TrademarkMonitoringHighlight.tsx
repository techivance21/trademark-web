export default function TrademarkMonitoringHighlight() {
  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="rounded-[28px] border border-[#E0E0E0] bg-white px-6 py-12 text-center shadow-[0_28px_90px_-70px_rgba(33,33,33,0.6)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#6c4cb1]/15 text-[#6c4cb1]">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <rect
                x="6"
                y="8"
                width="20"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M18 24h-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="24" cy="10" r="3" fill="#6c4cb1" stroke="#fff" strokeWidth="1.5" />
              <circle
                cx="16"
                cy="15"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="27.5" cy="6.5" r="1.5" fill="#6c4cb1" />
            </svg>
          </div>
          <div className="mt-6 space-y-3">
            <h2 className="text-xl font-semibold text-[#6c4cb1] sm:text-2xl font-[var(--font-heading)]">
              Your trademarks are protected!
            </h2>
            <p className="text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
              Through our trademark watch service.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-3 h-1 w-[82%] rounded-full bg-gradient-to-r from-[#E0E0E0] via-[#6c4cb1] to-[#6c4cb1]" />
      </div>
    </section>
  );
}
