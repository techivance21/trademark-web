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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-12 px-4 sm:px-6 md:gap-16 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="flex-1 space-y-6 text-center md:max-w-2xl md:self-center lg:text-left">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f1912b] font-[var(--font-heading)]">
              U.S. Trademark Registration with
            </p>
            <h1 className="text-3xl font-semibold text-[#1b1b3a] sm:text-4xl lg:text-[3rem] lg:leading-[1.1] font-[var(--font-heading)]">
              Attorney-Assisted Filing
            </h1>
            <p className="mx-auto max-w-xl text-base text-[#4b4b63] sm:text-lg font-[var(--font-body)] lg:mx-0">
              Secure your trademark with video consultations from U.S. and international attorneys. We prepare your application end-to-end for maximum approval success.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#f1912b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f1912b]/35 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1912b]"
            >
              Start My Application
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-[#f3e0c9] bg-[#fff7ef] px-4 py-3 text-left shadow-[0_18px_40px_-38px_rgba(220,125,29,0.7)]"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#f1912b] shadow-sm shadow-black/10">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1b1b3a] font-[var(--font-heading)]">
                    {title}
                  </p>
                  <p className="text-xs text-[#4b4b63] font-[var(--font-body)]">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#5c6378] font-[var(--font-body)]">
            Get consultation with a U.S. licensed attorney on every application. Government fees start at $350 per class.
          </p>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="relative w-full max-w-[420px] rounded-[40px] bg-white p-5 shadow-[0_35px_70px_-45px_rgba(32,22,56,0.45)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
              <Image
                src="/trademarkreg1.jpg"
                alt="Attorney assisting a client with trademark registration"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 340px, 420px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-10 left-1/2 flex w-[220px] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl shadow-black/10 max-sm:w-[190px] max-sm:p-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf0ff] text-[#6c4cb1]">
                <Smile className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1b1b3a] font-[var(--font-heading)]">
                  120,000+
                </p>
                <p className="text-xs text-[#5c6378] font-[var(--font-body)]">Happy Customers</p>
              </div>
            </div>

            <div className="absolute -right-10 top-1/2 hidden w-[220px] translate-y-1/2 items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl shadow-black/10 lg:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff4e7] text-[#f1912b]">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1b1b3a] font-[var(--font-heading)]">
                  200,000+
                </p>
                <p className="text-xs text-[#5c6378] font-[var(--font-body)]">Trademarks since 2009</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
