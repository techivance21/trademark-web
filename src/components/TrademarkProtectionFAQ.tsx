"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock3, ShieldCheck, Undo2, TrendingUp, Plus, Minus } from "lucide-react";

type FaqItem = {
  title: string;
  description: string;
  Icon: typeof ShieldCheck;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    title: "Limited Availability",
    description:
      "USPTO filings are processed daily. Reserving your mark now prevents competitors from claiming your brand name or logo.",
    Icon: Clock3,
  },
  {
    title: "Protect Your Future",
    description:
      "Registration locks in exclusive rights so you can scale into new markets, license your mark, and attract investors with confidence.",
    Icon: ShieldCheck,
  },
  {
    title: "Avoid Costly Rebranding",
    description:
      "Securing protection early saves you from expensive redesigns, remarketing campaigns, and the loss of established goodwill.",
    Icon: Undo2,
  },
  {
    title: "Stay Ahead of the Competition",
    description:
      "A registered trademark reinforces your credibility and deters copycats, keeping you visible while others are stuck in disputes.",
    Icon: TrendingUp,
  },
];

export default function TrademarkProtectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#e0e0e0] bg-white p-6 shadow-[0_46px_110px_-82px_rgba(33,33,33,0.55)] sm:rounded-[32px] sm:p-10 lg:rounded-[36px] lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
            <div className="space-y-6">
              <header className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
                  Why You Should
                </p>
                <h2 className="text-2xl font-semibold text-[#212121] sm:text-[2.3rem] font-[var(--font-heading)]">
                  Protect Your Trademark?
                </h2>
                <span className="inline-flex h-[3px] w-20 rounded-full bg-[#6c4cb1]/35 sm:w-24" />
              </header>

              <p className="max-w-md text-sm leading-relaxed text-[#333333] sm:text-base sm:leading-7 font-[var(--font-body)]">
                Competitors apply for trademarks every day. Legal Mark Experts pairs proactive searches with attorney advisement so you can file first and keep your brand identity secure.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:translate-y-[-1px] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-7 sm:py-3.5"
              >
                Get Started
              </Link>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map(({ title, description, Icon }, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={title}
                    className="rounded-[20px] border border-[#ededed] bg-[#f5f5f5] backdrop-blur-sm transition hover:border-[#dcd6f4]/90 sm:rounded-[22px]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 rounded-[20px] px-4 py-4 text-left sm:rounded-[22px] sm:px-6 sm:py-5"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#6c4cb1] shadow-inner shadow-[#dcd6f4]/70 sm:h-11 sm:w-11">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                        </span>
                        <span className="text-sm font-semibold text-[#212121] sm:text-base font-[var(--font-heading)]">
                          {title}
                        </span>
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-inner shadow-[#dcd6f4]/70 sm:h-9 sm:w-9">
                        {isOpen ? <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} /> : <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />}
                      </span>
                    </button>
                    {isOpen ? (
                      <div className="px-4 pb-5 text-sm leading-relaxed text-[#4b4b63] font-[var(--font-body)] sm:px-6 sm:pb-6">
                        {description}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
