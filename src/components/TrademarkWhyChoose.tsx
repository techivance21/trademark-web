"use client";

import { ShieldCheck, Monitor, ClipboardCheck, ThumbsUp, BadgeCheck, Users } from "lucide-react";

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: "Attorney-Led Filing",
    description: "Work with licensed U.S. attorneys from the start of your trademark journey.",
  },
  {
    Icon: Monitor,
    title: "Comprehensive Monitoring",
    description: "Full-year monitoring keeps your brand protected from conflicting filings.",
  },
  {
    Icon: ClipboardCheck,
    title: "Application Confidence",
    description: "Each filing includes a thorough attorney review so you can submit with certainty.",
  },
  {
    Icon: ThumbsUp,
    title: "Trusted by Entrepreneurs",
    description: "120,000+ business owners rely on us to safeguard and grow their brands.",
  },
  {
    Icon: BadgeCheck,
    title: "Trusted Since 2009",
    description: "Over 15 years of experience guiding clients through USPTO registration.",
  },
  {
    Icon: Users,
    title: "150+ Global Attorneys",
    description: "A worldwide network of full-time trademark attorneys on your side.",
  },
];

export default function TrademarkWhyChoose() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
            Why Choose
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#212121] sm:mt-3 sm:text-4xl font-[var(--font-heading)]">
            Legal Mark Experts for Your U.S. Trademark Registration?
          </h2>
          <span className="mt-4 inline-flex h-[3px] w-20 rounded-full bg-[#6c4cb1]/40 sm:w-24" />
        </header>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-full flex-col gap-3 rounded-[22px] border border-[#e5e5e5] bg-[#f9f9f9] p-5 transition hover:border-[#6c4cb1]/60 hover:bg-white hover:shadow-[0_28px_60px_-46px_rgba(108,76,177,0.55)] sm:rounded-[26px] sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#6c4cb1] shadow-inner shadow-[#dcd6f4]/70 group-hover:text-[#5a3fa3] sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <h3 className="text-base font-semibold text-[#212121] sm:text-lg font-[var(--font-heading)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#4b4b63] font-[var(--font-body)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
