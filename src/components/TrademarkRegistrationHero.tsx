"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star, Smile, BadgeCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    Icon: ShieldCheck,
    title: "100% Satisfaction",
    description: "Guaranteed",
  },
  {
    Icon: Star,
    title: "Trustpilot",
    description: "Rated 4.8/5 by 1000+ users",
  },
];

export default function TrademarkRegistrationHero() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-10 px-4 sm:px-6 md:gap-16 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="flex-1 space-y-6 text-center md:max-w-2xl md:self-center lg:text-left">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
              U.S. Trademark Registration with
            </p>
            <h1 className="text-3xl font-semibold text-[#212121] sm:text-4xl lg:text-[3rem] lg:leading-[1.1] font-[var(--font-heading)]">
              Attorney-Assisted Filing
            </h1>
            <p className="mx-auto max-w-xl text-sm text-[#333333] sm:text-base sm:leading-relaxed font-[var(--font-body)] lg:mx-0 lg:text-lg">
              Secure your trademark with video consultations from U.S. and international attorneys. We prepare your application end-to-end for maximum approval success.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-7 sm:py-3.5"
            >
              Start My Application
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {HIGHLIGHTS.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-[#e0e0e0] bg-[#f8f8fc] px-4 py-3 text-left shadow-[0_18px_36px_-34px_rgba(108,76,177,0.65)] sm:px-5 sm:py-4"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-sm shadow-black/10 sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                    {title}
                  </p>
                  <p className="text-xs text-[#4b4b63] font-[var(--font-body)]">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#4b4b63] font-[var(--font-body)] sm:text-sm">
            Get consultation with a U.S. licensed attorney on every application. Government fees start at $350 per class.
          </p>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="relative w-full max-w-[320px] rounded-[32px] bg-white p-4 shadow-[0_28px_58px_-42px_rgba(32,22,56,0.45)] sm:max-w-[380px] sm:p-5 lg:max-w-[420px] lg:rounded-[40px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]">
              <Image
                src="/trademarkreg1.jpg"
                alt="Attorney assisting a client with trademark registration"
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 420px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-10 left-1/2 flex w-[200px] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl shadow-black/10 sm:w-[220px] sm:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef1ff] text-[#6c4cb1] sm:h-11 sm:w-11">
                <Smile className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  120,000+
                </p>
                <p className="text-xs text-[#4b4b63] font-[var(--font-body)]">Happy Customers</p>
              </div>
            </div>

            <div className="absolute -right-6 top-1/2 hidden w-[200px] translate-y-1/2 items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl shadow-black/10 lg:flex lg:w-[220px] lg:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3f0ff] text-[#6c4cb1] lg:h-11 lg:w-11">
                <BadgeCheck className="h-4 w-4 lg:h-5 lg:w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  200,000+
                </p>
                <p className="text-xs text-[#4b4b63] font-[var(--font-body)]">Trademarks since 2009</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
