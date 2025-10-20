"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function RenewalIncontestabilityCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[#2f2a27] px-6 py-10 text-white shadow-[0_35px_70px_-45px_rgba(30,20,12,0.65)] sm:px-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-[minmax(0,320px)_minmax(0,1fr)] sm:items-center">
            <div className="relative mx-auto w-full max-w-[320px] sm:mx-0">
              <div className="relative overflow-hidden rounded-[28px] border border-[#3d3834] bg-[#1f1c1a] p-3 shadow-[0_25px_40px_-32px_rgba(0,0,0,0.75)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src="/trademarkrenewal1.jpg"
                    alt="Trademark expert meeting with client"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f7a142] shadow-[0_18px_30px_-20px_rgba(247,161,66,0.8)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#f7a142]">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 rounded-[38px] blur-3xl" style={{ background: "radial-gradient(circle at 20% 20%, rgba(247,161,66,0.3), transparent 60%)" }} />
            </div>

            <div className="space-y-4 text-center sm:text-left">
              <h2 className="text-2xl text-white sm:text-[2rem] font-[var(--font-heading)]">
                Ensure the <span className="text-[#f7a142]">ultimate protection</span> for your trademark
              </h2>
              <p className="text-sm text-[#e2ddd7] sm:text-base font-[var(--font-body)]">
                Filing for incontestable status under Section 15 gives your trademark powerful legal standing, making it highly resistant to challenges and safeguarding long-term brand equity.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f7a142] px-6 py-3 text-sm font-semibold text-[#2f2a27] shadow-lg shadow-[#f7a142]/40 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7a142]"
                >
                  Secure Full Protection Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
