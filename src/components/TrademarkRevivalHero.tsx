import Image from "next/image";

export default function TrademarkRevivalHero() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full space-y-6 lg:max-w-xl">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-snug text-[#212121] sm:text-4xl font-[var(--font-heading)]">
              Don&apos;t Lose Your Brand{" "}
              <span className="text-[#6c4cb1]">Restore Your Trademark</span>{" "}
              Today!
            </h1>
            <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              Has your trademark application been marked as abandoned or dead?
              We can help you bring your valuable trademark back to life. Check
              if your mark can be revived and get attorney support to file the
              right paperwork.
            </p>
          </div>
          <form className="flex flex-col gap-3 rounded-[24px] border border-[#E0E0E0] bg-white p-3 shadow-[0_24px_90px_-70px_rgba(33,33,33,0.55)] sm:flex-row sm:items-center">
            <label htmlFor="revival-serial" className="sr-only">
              Enter 8-digit serial number
            </label>
            <input
              id="revival-serial"
              type="text"
              placeholder="Enter 8-digit serial number"
              className="h-12 w-full flex-1 rounded-[20px] border border-transparent bg-[#F5F5F5] px-4 text-sm text-[#212121] placeholder:text-[#9e9e9e] transition focus:border-[#6c4cb1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]/20 sm:h-14 sm:px-6 sm:text-base font-[var(--font-body)]"
            />
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-[20px] bg-[#6c4cb1] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:h-14 sm:px-7 sm:text-base font-[var(--font-heading)]"
            >
              Revive My Trademark
            </button>
          </form>
        </div>
        <div className="relative w-full lg:max-w-lg">
          <div className="overflow-hidden rounded-[32px] border border-[#E0E0E0] bg-[#F5F5F5] p-4 shadow-[0_32px_100px_-70px_rgba(33,33,33,0.55)]">
            <div className="overflow-hidden rounded-[24px] bg-white">
              <Image
                src="/trademarkrevival.png"
                alt="Team discussing trademark revival strategy"
                width={560}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
