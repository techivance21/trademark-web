import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  href: string;
  accent: {
    border: string;
    button: string;
    buttonHover: string;
  };
  includes: string[];
};

const PLANS: Plan[] = [
  {
    name: "Basic Package",
    tagline: "I only need what it takes to file",
    price: "$49",
    href: "/pricing/basic",
    accent: {
      border: "border-[#cfd6ff]",
      button: "bg-[#1b1b3a] text-white",
      buttonHover: "hover:brightness-110",
    },
    includes: [
      "Direct-Hit Search of the USPTO database to ensure your mark is unique.",
      "Customer Trademark Classification crafted by trademark specialists.",
    ],
  },
  {
    name: "Standard Package",
    tagline: "I want legal care to protect my trademark",
    price: "$299",
    href: "/pricing/standard",
    accent: {
      border: "border-[#b8c6ff]",
      button: "bg-[#5468ff] text-white",
      buttonHover: "hover:brightness-110",
    },
    includes: [
      "Everything in the Basic package.",
      "One-on-one consultation with a trademark attorney.",
      "Cease and desist letter drafted for potential infringements.",
    ],
  },
  {
    name: "Premium Package",
    tagline: "I want premium legal support for best success",
    price: "$539",
    href: "/pricing/premium",
    accent: {
      border: "border-[#ffbd94]",
      button: "bg-[#f59a45] text-white",
      buttonHover: "hover:brightness-110",
    },
    includes: [
      "Everything in the Standard package plus extended attorney access.",
      "Rush filing with priority 48-hour processing.",
      "Trademark monitoring alerts with complimentary trial period.",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-[#23234a] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)]">
            Start protecting your business today
          </h2>
          <p className="mt-4 text-base text-[#d5dbff] sm:text-lg font-[var(--font-body)]">
            Choose the package that fits your goals and let our legal experts guide you through trademark registration with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {PLANS.map(
            ({ name, tagline, price, href, accent, includes }) => (
              <div
                key={name}
                className={`flex h-full flex-col rounded-3xl border bg-white p-8 text-left text-[#1b1b3a] ${accent.border}`}
              >
                <div>
                  <h3 className="text-xl text-[#1b1b3a] font-[var(--font-heading)]">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm text-[#4b4b63] font-[var(--font-body)]">
                    {tagline}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl text-[#1b1b3a] font-[var(--font-heading)]">
                    {price}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-[#6c6c85]">
                    + applicable fees
                  </div>
                </div>
                <Link
                  href={href}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${accent.button} ${accent.buttonHover}`}
                >
                  Choose {name.split(" ")[0]}
                </Link>
                <div className="mt-8 border-t border-[#e0e3ff]" />
                <p className="mt-5 text-sm font-semibold text-[#1b1b3a]">
                  Includes:
                </p>
                <ul className="mt-3 space-y-3 text-sm text-[#4b4b63] font-[var(--font-body)]">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6c4cb1]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
