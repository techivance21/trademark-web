import Image from "next/image";

export default function FreeTrademarkCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[32px] border border-[#e9e9f1] bg-white px-6 py-8 shadow-[0_38px_110px_-72px_rgba(33,33,33,0.35)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="space-y-4 text-center sm:text-left">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-[#212121] sm:text-2xl font-[var(--font-heading)]">
                Know your <span className="text-[#6c4cb1]">trademark</span> before you file
              </h2>
              <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
                Get an attorney-guided search and risk analysis from Legal Mark Experts starting at just <span className="text-[#6c4cb1] font-semibold">$199</span>.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/35 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-8">
              Get Search Report
            </button>
          </div>

          <div className="relative flex justify-center sm:justify-end">
            <div className="relative h-[120px] w-[260px] sm:h-[130px] sm:w-[320px]">
              <div className="absolute -right-2 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#e6eaff]" />
              <Image
                src="/trademarkreg1.jpg"
                alt="Attorney team offering trademark search support"
                fill
                className="rounded-[28px] object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
