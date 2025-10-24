import Image from "next/image";
import { Search as SearchIcon, Sparkles } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Upload or link your logo",
    description:
      "Drop in a high-resolution file or paste a URL so our visual search can analyze the design elements and compare against existing marks.",
  },
  {
    number: "02",
    title: "Review intelligent matches",
    description:
      "Filter results by classes, status, and filing dates to spot conflicts before you invest in branding or USPTO fees.",
  },
];

export default function FreeTrademarkLogoGuide() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,76,177,0.12),_transparent_58%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
              Visual Search Workflow
            </p>
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-[2.35rem] font-[var(--font-heading)]">
              How to perform a <span className="text-[#6c4cb1]">Trademark Logo</span> search
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Searching for similar logos or stylized marks is simple with Legal Mark Experts. Use our image search to upload a logo or describe your design to verify originality before you file.
          </p>

          <ol className="space-y-5">
            {STEPS.map(({ number, title, description }) => (
              <li key={number} className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#6c4cb1] shadow-[0_20px_50px_-34px_rgba(108,76,177,0.65)]">
                  {number}
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#212121] sm:text-base font-[var(--font-heading)]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">{description}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
            This process ensures your logo stays unique and eligible for trademark protection when you proceed with registration.
          </p>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-br from-[#eae3ff] via-white to-[#f3f5ff]" />
          <div className="relative w-full max-w-[420px] rounded-[38px] bg-white p-6 shadow-[0_48px_120px_-78px_rgba(33,33,33,0.5)] sm:p-8">
            <div className="relative aspect-[5/7] overflow-hidden rounded-[28px]">
              <Image
                src="/trademarkreg1.jpg"
                alt="Designer reviewing trademark logo results on phone"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 400px, 420px"
                className="object-cover"
                priority
                unoptimized
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -right-10 top-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#6c4cb1] text-white shadow-[0_30px_60px_-40px_rgba(108,76,177,0.85)]">
              <SearchIcon className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <div className="absolute -left-8 bottom-12 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-[0_20px_50px_-34px_rgba(108,76,177,0.65)] sm:flex">
              <Sparkles className="h-5 w-5" strokeWidth={1.6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
