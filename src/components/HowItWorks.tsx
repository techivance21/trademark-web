"use client";

import { MessageCircle, Search, ThumbsUp } from "lucide-react";

type Step = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const STEPS: Step[] = [
  {
    title: "Answer a Few Questions",
    description:
      "Complete a quick online questionnaire so our trademark team can tailor the filing process to your brand goals.",
    Icon: Search,
  },
  {
    title: "Compile Application and Search",
    description:
      "Legal experts review your details, run comprehensive searches, and prepare your application for a smooth submission.",
    Icon: MessageCircle,
  },
  {
    title: "Application Filing",
    description:
      "We submit your application to the USPTO and keep you updated until your brand protection is secured.",
    Icon: ThumbsUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#eef2ff] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-[#1b1b3a] sm:text-4xl font-[var(--font-heading)]">
            How It Works
          </h2>
          <p className="mt-3 text-base text-[#4b4b63] sm:text-lg font-[var(--font-body)]">
            Register your trademark in three easy steps with our guided online experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className="group relative flex h-full flex-col rounded-3xl border border-[#f7a142]/40 bg-white p-8 shadow-[0_18px_35px_-20px_rgba(108,76,177,0.4)] transition hover:-translate-y-1 hover:border-[#f7a142]/70 hover:shadow-[0_30px_45px_-25px_rgba(108,76,177,0.45)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7a142] text-white shadow-lg shadow-[#f7a142]/40">
                <Icon className="h-7 w-7" />
              </div>
              <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">
                Step {index + 1}
              </div>
              <h3 className="mt-2 text-xl text-[#1b1b3a] font-[var(--font-heading)]">
                {title}
              </h3>
              <p className="mt-4 text-sm text-[#4b4b63] leading-relaxed font-[var(--font-body)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
