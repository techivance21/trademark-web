"use client";

import { useEffect, useState } from "react";

export default function Statement() {
  const [active, setActive] = useState<1 | 2 | 3>(1);

  // rotate every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev === 3 ? 1 : ((prev + 1) as 1 | 2 | 3)));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // click -> set active and restart cycle
  const handleClick = (n: 1 | 2 | 3) => setActive(n);

  return (
    <section className="bg-white px-6 md:px-20 py-16">
      {/* Heading */}
      <h2 className="text-center font-[var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight mb-14">
        <span className="text-[#6c4cb1]">How to file</span>{" "}
        <span className="text-[#212121]">USPTO Statement of Use ?</span>
      </h2>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-10 items-start">
        {/* Step 1 */}
        <div
          className="relative cursor-pointer"
          onClick={() => handleClick(1)}
          aria-label="Step 1"
        >
          {/* number tag */}
          <div className="absolute -top-4 left-0">
            <div className="relative">
              <span
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold shadow-sm transition-colors",
                  active === 1
                    ? "bg-[#6c4cb1] text-white"
                    : "bg-gray-200 text-gray-600",
                ].join(" ")}
              >
                1
              </span>
              <span className="absolute -bottom-1 left-1 h-3 w-3 rounded-full bg-black/10 blur-[2px] opacity-30" />
            </div>
          </div>

          <h3
            className={[
              "mt-8 font-[var(--font-heading)] text-xl font-semibold transition-colors",
              active === 1 ? "text-[#6c4cb1]" : "text-[#212121]",
            ].join(" ")}
          >
            Provide Evidence of Use
          </h3>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-[#333333]">
            Upload an image showing evidence of your mark being used for your
            goods or services.
          </p>
        </div>

        {/* divider */}
        <div className="hidden md:block h-full w-px bg-gray-200 mx-auto" />

        {/* Step 2 */}
        <div
          className="relative cursor-pointer"
          onClick={() => handleClick(2)}
          aria-label="Step 2"
        >
          <div className="absolute -top-4 left-0">
            <div className="relative">
              <span
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold shadow-sm transition-colors",
                  active === 2
                    ? "bg-[#6c4cb1] text-white"
                    : "bg-gray-200 text-gray-600",
                ].join(" ")}
              >
                2
              </span>
              <span className="absolute -bottom-1 left-1 h-3 w-3 rounded-full bg-black/10 blur-[2px] opacity-30" />
            </div>
          </div>

          <h3
            className={[
              "mt-8 font-[var(--font-heading)] text-xl font-semibold transition-colors",
              active === 2 ? "text-[#6c4cb1]" : "text-[#212121]",
            ].join(" ")}
          >
            Complete Declaration
          </h3>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-[#333333]">
            Confirm that the mark is in use by the owner or an authorized person
            acting on their behalf.
          </p>
        </div>

        {/* divider */}
        <div className="hidden md:block h-full w-px bg-gray-200 mx-auto" />

        {/* Step 3 */}
        <div
          className="relative cursor-pointer"
          onClick={() => handleClick(3)}
          aria-label="Step 3"
        >
          <div className="absolute -top-4 left-0">
            <div className="relative">
              <span
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold shadow-sm transition-colors",
                  active === 3
                    ? "bg-[#6c4cb1] text-white"
                    : "bg-gray-200 text-gray-600",
                ].join(" ")}
              >
                3
              </span>
              <span className="absolute -bottom-1 left-1 h-3 w-3 rounded-full bg-black/10 blur-[2px] opacity-30" />
            </div>
          </div>

          <h3
            className={[
              "mt-8 font-[var(--font-heading)] text-xl font-semibold transition-colors",
              active === 3 ? "text-[#6c4cb1]" : "text-[#212121]",
            ].join(" ")}
          >
            Provide Dates of First Use
          </h3>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-[#333333]">
            Provide the first use date anywhere and the first use date in
            commerce.
          </p>
        </div>
      </div>
    </section>
  );
}
