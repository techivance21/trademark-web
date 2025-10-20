"use client";

import Image from "next/image";
import Link from "next/link";

export default function RenewalPromptCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-[28px] border border-[#f4c08d] bg-gradient-to-br from-[#fff7ef] via-white to-[#ffeede] px-6 py-8 shadow-[0_28px_60px_-48px_rgba(255,136,0,0.35)] sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-10">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border border-[#f4c08d]/60 bg-white shadow-[0_20px_45px_-28px_rgba(0,0,0,0.55)] sm:h-44 sm:w-44">
            <Image
              src="/trademarkrenewal-2.png"
              alt="Professional reviewing trademark documents"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="rounded-full object-cover shadow-[0_18px_36px_-28px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="flex flex-1 flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <h2 className="text-xl text-[#1b1b3a] sm:text-2xl font-[var(--font-heading)]">
              Keep Your Trademark <span className="text-[#f1912b]">Active &amp; Protected</span>
            </h2>
            <p className="text-sm text-[#4b4b63] sm:text-base font-[var(--font-body)]">
              Stay ahead of deadlines and ensure your trademark remains active with our comprehensive renewal services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#f7a142] px-6 py-3 text-sm font-semibold text-[#1b1b3a] shadow-lg shadow-[#f7a142]/35 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7a142]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
