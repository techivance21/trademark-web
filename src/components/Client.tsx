"use client";

import Image from "next/image";

export default function Client() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-3 text-[#212121]">
        See what <span className="text-[#6c4cb1]">our customers</span> think about us
      </h2>
      <p className="text-gray-600 mb-10">
        Don’t Just Take Our Word for It!
      </p>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#F5F5F5] p-6 rounded-xl shadow hover:shadow-md transition-all text-left">
          <h4 className="font-semibold text-lg mb-2 text-[#212121]">
            Could not be more happy
          </h4>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            I have been working with attorney Michael Markos and his team for
            several years on multiple items. They just helped me again acquire
            a new trademark. They are punctual and keep your business needs
            organized with effective follow-up. Couldn’t be more happy.
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/extension2.png"
              alt="Brent Agin"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-medium text-sm">Brent Agin MD</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F5F5F5] p-6 rounded-xl shadow hover:shadow-md transition-all text-left">
          <h4 className="font-semibold text-lg mb-2 text-[#212121]">
            Consistently good
          </h4>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            I have used Trademarkia for six or seven TM applications. We have been
            successful with all of them, even getting registrations on ones
            that started out somewhat doubtful. I have been very happy with my
            experience and highly recommend them for your TM needs.
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/extension2.png"
              alt="Jeff Moreau"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-medium text-sm">Jeff Moreau</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F5F5F5] p-6 rounded-xl shadow hover:shadow-md transition-all text-left">
          <h4 className="font-semibold text-lg mb-2 text-[#212121]">
            They simplify the process
          </h4>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            I have been using Trademarkia for three years now. They have helped me
            navigate the typically confusing TM process with solid guidance and
            expert advice for protecting my businesses. You can use Trademarkia
            and get expert, efficient guidance from veteran Trademark lawyers.
            Highly recommend!
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/extension2.png"
              alt="Jimmy"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-medium text-sm">Jimmy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
