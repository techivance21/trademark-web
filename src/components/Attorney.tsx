"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";

export default function Attorney() {
  return (
    <section className="relative px-6 md:px-20 pt-20 pb-10 bg-white">
      {/* Decorative gradient curve (top separator) */}
      <div className="pointer-events-none absolute left-0 right-0 -top-10 h-10 bg-gradient-to-b from-transparent to-[#F5F5F5]/60 rounded-b-[50%]" />

      {/* Heading */}
      <h2 className="text-center font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-8 text-[#212121]">
        Speak Directly to Our{" "}
        <span className="text-[#6c4cb1]">Trademark Attorney!</span>
      </h2>

      <div className="relative grid md:grid-cols-2 gap-6">
        {/* Floating calendar icon (desktop only) */}
        <div className="hidden md:block absolute -right-3 -top-6 h-10 w-10 rounded-full bg-white shadow-md grid place-items-center">
          <CalendarDays className="h-5 w-5 text-[#6c4cb1]" />
        </div>

        {/* Attorney Info Card */}
        <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative">
          <span className="absolute -right-0 top-0 h-10 w-6 bg-[#6c4cb1] rounded-tr-2xl rounded-bl-2xl" />
          <div className="flex items-center gap-4">
            <Image
              src="/extension3.png"
              alt="Michael Markos"
              width={64}
              height={64}
              className="rounded-full object-cover bg-[#F5F5F5]"
            />
            <div>
              <h3 className="font-semibold text-[#212121]">Michael Markos</h3>
              <p className="text-sm text-gray-500">U.S. Licensed Attorney</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Understanding your options can be hard. You can talk to one of our
            Attorneys to understand what can work best for you.
          </p>
        </article>

        {/* Consultation Card */}
        <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-2 text-[#212121]">
            Schedule a Free Consultation
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Our experienced attorneys provide personalized guidance to help
            protect your brand and make informed decisions. Book your
            consultation today and take the next step with confidence.
          </p>
          <button className="inline-flex rounded-lg bg-[#f59e0b] hover:bg-[#d98806] text-white font-semibold px-5 py-2 transition-all">
            Book Now
          </button>
        </article>
      </div>
    </section>
  );
}
