"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Props are optional so <FAQ /> works
interface FAQProps {
  faqs?: FAQItem[] | undefined;
}

// Safe defaults (used if no faqs passed)
const defaultFaqs: FAQItem[] = [
  {
    question: "What is an extension of time?",
    answer:
      "Extra time granted by the USPTO before filing your Statement of Use. Each extension adds six months so you can show use in commerce later.",
  },
  {
    question: "When should I file an extension?",
    answer:
      "You should file by your current six-month deadline after your Notice of Allowance if you’re not yet using the mark in commerce.",
  },
  {
    question: "How many extensions can I get?",
    answer:
      "You can request up to five extensions (a total of 30 additional months) as long as you file each request on time.",
  },
  {
    question: "What happens if I miss the extension deadline?",
    answer:
      "Your application will be abandoned and you would need to start over, potentially losing your original priority date.",
  },
];

export default function FAQ(props: FAQProps) {
  // handle undefined safely
  const data: FAQItem[] = Array.isArray(props?.faqs) ? props!.faqs! : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!data.length) return null;

  return (
    <section className="bg-white px-6 md:px-20 pb-16">
      {/* Heading */}
      <h2 className="text-center font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-8">
        <span className="text-black">Frequently Asked </span>
        <span className="text-[#6c4cb1]">Questions</span>
      </h2>

      {/* FAQ List */}
      <div className="mx-auto max-w-4xl space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-start gap-4 px-5 py-4 text-left"
            >
              {/* Left icon */}
              <span className="mt-1 grid place-items-center shrink-0">
                <Image
                  src="/tick.png"
                  alt="tick icon"
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </span>

              <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.question}</p>
                <div
                  className={`text-sm text-gray-600 transition-all overflow-hidden ${
                    openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>

              {/* Dropdown arrow */}
              <ChevronDown
                className={`ml-2 mt-1 h-5 w-5 text-[#6c4cb1] transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
