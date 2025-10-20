import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function RenewalHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f7ff]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f6f8ff] to-[#e8efff]" />
        <div className="absolute -top-24 left-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6c4cb1]/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[#f7a142]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl leading-tight text-[#1b1b3a] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-[var(--font-heading)]">
            Stay Protected with Our{" "}
            <span className="text-[#6c4cb1]">One-Stop Renewal Service</span>{" "}
            for All Your Needs
          </h1>
          <p className="mx-auto max-w-xl text-base text-[#4b4b63] sm:text-lg font-[var(--font-body)] lg:mx-0">
            Ensure your trademark stays active with our renewal experts tracking every deadline and filing on your behalf.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#f7a142] px-6 py-3 text-sm font-semibold text-[#1b1b3a] shadow-lg shadow-[#f7a142]/30 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7a142]"
            >
              Renew Now
            </Link>
            <span className="text-sm text-[#5c5c76] font-[var(--font-body)]">
              Talk with our specialists today.
            </span>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/70 bg-white/80 p-4 pb-12 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="aspect-[4/3] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#dae3ff] via-white to-[#ebe6ff]">
              <Image
                src="/hero-trademarkrenewal.png"
                alt="Trademark renewal team collaborating on a laptop"
                width={640}
                height={480}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>

            <div className="absolute -bottom-8 left-1/2 flex w-[180px] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/70 bg-white p-3 shadow-xl shadow-black/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf0ff] text-[#1b1b3a] font-[var(--font-heading)] text-lg">
                ®
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm text-[#1b1b3a] font-[var(--font-heading)]">
                  Renewal Approved
                  <CheckCircle2 className="h-4 w-4 text-[#0bbf4f]" />
                </div>
                <p className="text-xs text-[#5c5c76] font-[var(--font-body)]">USPTO status confirmed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
