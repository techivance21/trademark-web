"use client";

import { ClipboardCheck, Handshake, HelpCircle, ShieldCheck } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "primary" | "secondary";
};

const BENEFITS: Benefit[] = [
  {
    title: "Professional Guidance",
    description:
      "Every revival case is reviewed by trademark professionals with proven USPTO experience so you get the right strategy the first time.",
    icon: ShieldCheck,
    accent: "primary",
  },
  {
    title: "Clear, Step-by-Step Process",
    description:
      "We break complex USPTO revival rules into simple actions. No guesswork—just guided steps from intake through final approval.",
    icon: ClipboardCheck,
    accent: "secondary",
  },
  {
    title: "Fast, Personalized Support",
    description:
      "Get tailored answers aligned with your abandonment reason and priority deadlines. No bots—real specialists on your side.",
    icon: HelpCircle,
    accent: "primary",
  },
  {
    title: "All-in-One Platform",
    description:
      "Search, file, monitor, and revive using one secure dashboard. Track every USPTO status and document in a single place.",
    icon: Handshake,
    accent: "secondary",
  },
  {
    title: "Transparent, No Hidden Fees",
    description:
      "Know the cost before we file. Our pricing is upfront, with USPTO fees clearly outlined so you are never surprised.",
    icon: ShieldCheck,
    accent: "primary",
  },
  {
    title: "Trusted by Thousands",
    description:
      "Join founders and enterprises who depend on Legal Mark Experts to defend their brands and revive abandoned applications.",
    icon: Handshake,
    accent: "secondary",
  },
];

export default function TrademarkRevivalWhyChoose({
  benefits = BENEFITS,
}: {
  benefits?: Benefit[];
}) {
  if (!benefits.length) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Why Choose <span className="text-[#6c4cb1]">Legal Mark Experts?</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon, accent }, index) => (
            <article
              key={`${title}-${index}`}
              className="relative flex h-full flex-col rounded-2xl border border-[#eceff6] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(108,76,177,0.65)] transition hover:-translate-y-1 hover:border-[#d8ddf0] hover:shadow-[0_22px_50px_-28px_rgba(108,76,177,0.7)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    accent === "primary"
                      ? "bg-[#6c4cb1]/12 text-[#6c4cb1]"
                      : "bg-[#f0ecff] text-[#6c4cb1]"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">
                  {title}
                </h3>
              </div>
              <div className="mt-4 h-px w-full bg-[#f0f1f9]" />
              <p className="mt-4 text-sm leading-relaxed text-[#4b4b63] font-[var(--font-body)]">
                {description}
              </p>
              <span className="pointer-events-none absolute -right-4 top-6 hidden h-8 w-8 rounded-full border border-[#f0f1fd] text-[#d6dbf5] lg:grid place-items-center">
                ✦
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
