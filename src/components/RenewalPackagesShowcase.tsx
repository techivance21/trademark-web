"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Globe2,
  TimerReset,
  Video,
  ShieldCheck,
  PenTool,
  BriefcaseBusiness,
} from "lucide-react";

const FEATURES = [
  {
    Icon: Globe2,
    text: "File in 180+ countries with experienced local partners.",
  },
  {
    Icon: TimerReset,
    text: "Finish the online application in under five minutes.",
  },
  {
    Icon: Video,
    text: "Get pre-filing video advisement with a U.S. attorney.",
  },
  {
    Icon: ShieldCheck,
    text: "Work with the world's most trusted trademark service.",
  },
];

export default function RenewalPackagesShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <PrimaryTile />
          <SecondaryTiles />
        </div>
      </div>
    </section>
  );
}

function PrimaryTile() {
  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#eef3ff] via-white to-[#dbe7ff] px-6 py-8 shadow-[0_40px_80px_-60px_rgba(27,45,110,0.55)] sm:px-10 sm:py-12">
      <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#f7a142]/35 blur-3xl" />
      <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#6c4cb1]/20 blur-3xl" />

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,260px)] md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)]">
            Trademark registration with watch subscription
          </p>
          <div className="space-y-1">
            <span className="text-4xl text-[#1b1b3a] font-[var(--font-heading)]">
              $499
            </span>
            <span className="text-sm text-[#4b4b63] font-[var(--font-body)]">
              + Govt Fee*
            </span>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full max-w-[180px] items-center justify-center rounded-full bg-[#f7a142] px-6 py-3 text-sm font-semibold text-[#1b1b3a] shadow-lg shadow-[#f7a142]/35 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7a142]"
          >
            Register now
          </Link>

          <ul className="space-y-4 pt-4">
            {FEATURES.map(({ Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 text-sm text-[#4b4b63] sm:text-base font-[var(--font-body)]"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-md shadow-[#6c4cb1]/10">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[260px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/90 p-3 shadow-[0_30px_60px_-40px_rgba(27,45,110,0.55)]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#dfe8ff] via-white to-[#ecf3ff]">
              <Image
                src="/trademarkrenewal-3.jpg"
                alt="Trademark expert assisting a client"
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className="object-contain object-bottom"
              />
            </div>

            <div className="absolute -right-6 top-6 flex w-36 -rotate-6 items-center justify-between rounded-2xl border border-[#dbe2ff] bg-white px-3 py-2 shadow-lg shadow-black/10">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6c4cb1]">
                Your Brand
              </span>
              <CheckCircle2 className="h-5 w-5 text-[#0bbf4f]" />
            </div>
          </div>

          <div className="absolute -left-6 bottom-4 hidden rounded-full bg-[#6c4cb1]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6c4cb1] shadow-sm shadow-black/10 lg:flex">
            Watch included
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryTiles() {
  return (
    <div className="grid gap-6">
      <div className="rounded-[28px] bg-gradient-to-br from-[#ddfbff] via-white to-[#c8f2f5] px-6 py-8 shadow-[0_30px_65px_-55px_rgba(13,94,108,0.55)] sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-[#1f9296] font-[var(--font-heading)]">
              Patent filing starts from
            </p>
            <div className="text-3xl text-[#1b1b3a] font-[var(--font-heading)]">
              $899
            </div>
            <span className="text-sm text-[#4b4b63] font-[var(--font-body)]">
              + Govt Fee*
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#17a8a4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#17a8a4]/35 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17a8a4]"
            >
              File a patent now
            </Link>
            <BrandBadge
              tone="teal"
              label="Trademarkia"
              sublabel="PatentExpress"
              icon={<PenTool className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>

      <div className="rounded-[28px] bg-gradient-to-br from-[#ffe2f2] via-white to-[#ffd8eb] px-6 py-8 shadow-[0_30px_65px_-55px_rgba(142,27,92,0.55)] sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a01f70] font-[var(--font-heading)]">
              Business incorporation starts from
            </p>
            <div className="text-3xl text-[#1b1b3a] font-[var(--font-heading)]">
              $399
            </div>
            <span className="text-sm text-[#4b4b63] font-[var(--font-body)]">
              + Govt Fee*
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d64f95] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d64f95]/35 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d64f95]"
            >
              Incorporate now
            </Link>
            <BrandBadge
              tone="magenta"
              label="Trademarkia"
              sublabel="IncDecentral"
              icon={<BriefcaseBusiness className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandBadge({
  label,
  sublabel,
  icon,
  tone,
}: {
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  tone: "teal" | "magenta";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]";
  const palette =
    tone === "teal"
      ? "bg-[#17a8a4]/15 text-[#1f9296]"
      : "bg-[#f4c9e5]/45 text-[#a01f70]";

  return (
    <span className={`${base} ${palette}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm shadow-black/10">
        {icon}
      </span>
      <span>
        {label} <span className="normal-case">{sublabel}</span>
      </span>
    </span>
  );
}
