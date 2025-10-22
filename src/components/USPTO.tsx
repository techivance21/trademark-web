"use client";

import Image from "next/image";

export default function USPTO() {
  return (
    <section className="bg-[#F5F5F5] px-6 md:px-20 py-16 text-center rounded-lg">
      <div className="max-w-3xl mx-auto">
        {/* Question mark icon */}
        <div className="flex justify-center mb-3">
          <Image
            src="/logo3.png"
            alt="Question mark"
            width={44}
            height={44}
            className="h-11 w-11"
          />
        </div>

        {/* Heading */}
        <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-4 text-[#212121]">
          When to File{" "}
          <span className="text-[#6c4cb1]">USPTO Statement of Use</span> ?
        </h3>

        {/* Description */}
        <p className="text-[#333] text-base leading-relaxed">
          You need to file the Statement of Use (SOU) once you receive the
          <span className="font-semibold"> Notice of Allowance</span>. Make sure
          to submit it before your six-month deadline to keep your application
          active.
        </p>

        {/* Link */}
        <a
          href="#"
          className="text-[#6c4cb1] underline mt-4 inline-block font-medium hover:text-[#5b3d9d] transition-colors"
        >
          What’s Notice of Allowance?
        </a>
      </div>
    </section>
  );
}
