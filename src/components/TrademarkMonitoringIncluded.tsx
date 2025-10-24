"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const MONITORING_FEATURES = [
  {
    title: "Trademark Conflict Alerts",
    description:
      "Receive curated alerts when new USPTO filings or marketplace listings appear similar to your brand. Our analysts review every hit to eliminate noise before it reaches you.",
  },
  {
    title: "Trademark Dispute Support",
    description:
      "When a threat is confirmed, our attorneys outline response options and draft cease-and-desist templates so you can act quickly without surprise legal fees.",
  },
  {
    title: "Application Status Updates",
    description:
      "Stay informed through every USPTO milestone. We track your docket, flag deadlines, and translate office actions into plain guidance tailored to your filing.",
  },
];

export default function TrademarkMonitoringIncluded() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="w-full max-w-xl space-y-6 text-left">
          <header className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-10 w-[6px] rounded-full bg-[#6c4cb1]" />
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
                  What&apos;s Included in
                </p>
                <h2 className="text-3xl font-semibold text-[#212121] sm:text-[2.7rem] font-[var(--font-heading)]">
                  Our Monitoring Service
                </h2>
              </div>
            </div>
          </header>

          <p className="text-sm leading-relaxed text-[#333333] sm:text-base sm:leading-7 font-[var(--font-body)]">
            Safeguard your trademark year-round. Legal Mark Experts combines proactive technology with attorney oversight so you never miss a critical alert.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:translate-y-[-1px] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-7 sm:py-3.5"
          >
            Get Started
          </Link>
        </div>

        <div className="w-full flex-1 space-y-4">
          {MONITORING_FEATURES.map(({ title, description }, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={title}
                className={`overflow-hidden rounded-[24px] border border-[#e0e0e0] bg-[#f9f9f9] shadow-[0_30px_90px_-72px_rgba(108,76,177,0.55)] transition hover:border-[#d2c8f0] ${isExpanded ? "border-[#c3b6ec] bg-white" : ""}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-6 sm:py-6"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  aria-controls={`monitoring-panel-${index}`}
                  id={`monitoring-trigger-${index}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-inner shadow-[#dcd6f4]/70 sm:h-10 sm:w-10">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-semibold text-[#212121] sm:text-base font-[var(--font-heading)]">
                      {title}
                    </span>
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-[#6c4cb1]" strokeWidth={1.8} />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#6c4cb1]" strokeWidth={1.8} />
                  )}
                </button>
                <div
                  id={`monitoring-panel-${index}`}
                  aria-labelledby={`monitoring-trigger-${index}`}
                  hidden={!isExpanded}
                  className="px-5 pb-5 text-sm leading-relaxed text-[#4b4b63] font-[var(--font-body)] sm:px-6 sm:pb-6"
                >
                  {description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
