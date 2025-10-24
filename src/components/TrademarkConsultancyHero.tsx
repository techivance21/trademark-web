import Image from "next/image";

export default function TrademarkConsultancyHero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-[#0d0d0d]">
      <Image
        src="/backgroundconsultancy.jpg"
        alt="Professional reviewing trademark strategy on laptop"
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#0d0d0d]/70" />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center text-white sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d1c4ff] font-[var(--font-heading)] sm:text-sm">
          Trademark Consultancy
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1] font-[var(--font-heading)]">
          Before Filing Trademark
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-[#F5F5F5] sm:text-lg font-[var(--font-body)]">
          We offer a range of pre-filing trademark services to help you evaluate
          brand strength, understand potential conflicts, and prepare the most
          effective registration strategy.
        </p>
        <div className="mt-4">
          <a
            href="#consultation"
            className="group relative inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
          >
            Schedule Consultation
            <span className="absolute inset-x-6 bottom-2 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>
      </div>
    </section>
  );
}
