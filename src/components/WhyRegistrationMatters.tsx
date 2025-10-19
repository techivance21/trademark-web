"use client";

import {
  ShieldCheck,
  Search,
  Sparkles,
  BadgeCheck,
  Crown,
  ShieldAlert,
} from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const BENEFITS: Benefit[] = [
  {
    title: "Stop copycats",
    description: "Deter competitors from profiting off your reputation with lookalike branding.",
    Icon: ShieldAlert,
  },
  {
    title: "Stand out",
    description: "Create a brand as unique as you, knowing a registration preserves it.",
    Icon: Sparkles,
  },
  {
    title: "Own your brand",
    description: "Secure exclusive rights to your names, slogans, and logos in every market you serve.",
    Icon: Crown,
  },
  {
    title: "Make it legal",
    description: "Give your business the (R) badge of legitimacy and build trust with customers.",
    Icon: BadgeCheck,
  },
  {
    title: "Enforce your rights",
    description: "Gain the backing you need to legally claim your distinct brand identity.",
    Icon: ShieldCheck,
  },
  {
    title: "Defend what's yours",
    description: "Act quickly against infringers with ongoing alerts and clear documentation.",
    Icon: Search,
  },
];

export default function WhyRegistrationMatters() {
  return (
    <section className="bg-[#1b1b3a] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)]">
            Why trademark registration is important
          </h2>
          <p className="mt-4 text-base text-[#d9ddff] sm:text-lg font-[var(--font-body)]">
            Lock in your advantage with protections that help your brand thrive long term.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex h-full flex-col rounded-2xl border border-[#323366] bg-white/5 p-6 text-left backdrop-blur transition hover:border-[#6c4cb1] hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7a142]/20 text-[#f7a142]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg text-white font-[var(--font-heading)]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[#d9ddff] leading-relaxed font-[var(--font-body)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






