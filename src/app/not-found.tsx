"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center text-[#212121]">
      <div className="max-w-lg space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)]">
          Page Not Found
        </p>
        <h1 className="text-3xl font-semibold font-[var(--font-heading)] sm:text-4xl">We can&apos;t find that page.</h1>
        <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
          The page you&apos;re looking for might have been moved or no longer exists. Let&apos;s get you back to our trademark
          services.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/35 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
          >
            Go Home
          </Link>
          <Link
            href="/services/trademark-registration"
            className="inline-flex items-center justify-center rounded-full border border-[#6c4cb1] px-6 py-3 text-sm font-semibold text-[#6c4cb1] transition hover:bg-[#6c4cb1]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
          >
            Trademark Services
          </Link>
        </div>
      </div>
    </div>
  );
}
