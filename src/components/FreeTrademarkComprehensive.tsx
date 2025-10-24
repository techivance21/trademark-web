import Image from "next/image";
import { Check } from "lucide-react";

const BENEFITS = [
  "It highlights marks that may not be identical but could still trigger conflicts because of close similarity.",
  "You gain insight into potential issues like similar names, logos, or phonetic matches before submitting to the USPTO.",
];

export default function FreeTrademarkComprehensive() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(108,76,177,0.12),_transparent_60%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="relative flex flex-1 justify-center">
          <div className="absolute inset-0 -z-10 hidden rounded-[48px] bg-gradient-to-br from-[#ebe6ff] via-white to-[#f2f9ff] blur-3xl lg:block" />
          <div className="relative w-full max-w-[420px]">
            <div className="relative overflow-hidden rounded-[36px] bg-white p-6 shadow-[0_48px_120px_-78px_rgba(33,33,33,0.45)] sm:p-8">
              <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                <Image
                  src="/trademarkreg1.jpg"
                  alt="Founder reviewing comprehensive trademark search results"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className="pointer-events-none absolute -top-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#e0e0e0] bg-white px-4 py-2 text-xs font-medium text-[#6c4cb1] shadow-[0_28px_90px_-64px_rgba(33,33,33,0.4)]">
                <span className="h-3 w-3 rounded-full bg-[#6c4cb1]" />
                Search: &quot;Pepsi&quot;
              </div>
              <div className="absolute -left-8 top-10 hidden w-28 rounded-2xl border border-white bg-white p-3 text-left shadow-xl shadow-[#6c4cb1]/25 sm:block">
                <p className="text-xs font-semibold text-[#212121] font-[var(--font-heading)]">Pepsi</p>
                <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-[#4c9c59]">
                  <span className="h-2 w-2 rounded-full bg-[#4c9c59]" />
                  Live
                </p>
              </div>
              <div className="absolute -right-6 bottom-12 hidden w-28 rounded-2xl border border-white bg-white p-3 text-left shadow-xl shadow-[#6c4cb1]/25 sm:block">
                <p className="text-xs font-semibold text-[#212121] font-[var(--font-heading)]">PepsiCo</p>
                <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-[#e05840]">
                  <span className="h-2 w-2 rounded-full bg-[#e05840]" />
                  Dead
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
              Deep USPTO Coverage
            </p>
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-[2.35rem] font-[var(--font-heading)]">
              Comprehensive USPTO trademark search
            </h2>
          </div>

          <ul className="space-y-3">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-left">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-[0_18px_44px_-26px_rgba(108,76,177,0.6)]">
                  <Check className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">{item}</p>
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/35 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-10 sm:py-3.5">
            Comprehensive Search
          </button>
        </div>
      </div>
    </section>
  );
}
