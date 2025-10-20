// app/about/page.tsx
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

type SideLink = { href: string; label: string; active?: boolean };

const SIDEBAR_LINKS: SideLink[] = [
  { href: "/about", label: "Who We Are", active: true },
  { href: "/faqs", label: "FAQ" },
  { href: "/contact", label: "Have a Question?" },
  { href: "/resources/trademark-search-guide", label: "Trademark Search Guide" },
  { href: "/services/trademark-registration", label: "Register a Trademark" },
  // Removed: Trademark Office Action (per request)
];

export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-white font-[var(--font-body)] text-[15px] leading-7 text-[#333333]">
      {/* Page Container */}
      <section className="mx-auto w-full max-w-[1200px] px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="space-y-6 md:sticky md:top-24">
              {/* In-page nav */}
              <nav aria-label="About navigation" className="rounded-2xl border border-[#E0E0E0] bg-white">
                <ul className="overflow-hidden rounded-2xl">
                  {SIDEBAR_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={l.active ? "page" : undefined}
                        className={[
                          "block px-5 py-4 text-sm transition-colors",
                          l.active
                            ? "border-l-4 border-[#6c4cb1] bg-[#6c4cb1]/10 font-semibold text-[#6c4cb1]"
                            : "text-[#333333] hover:bg-[#F5F5F5]",
                        ].join(" ")}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA card */}
              <div className="rounded-2xl border border-[#E0E0E0] bg-[#F5F5F5] p-6 text-center">
                <p className="font-[var(--font-heading)] text-[15px] text-[#212121]">
                  Free Trademark Search
                </p>
                <Link
                  href="/services/free-trademark-search"
                  className="mt-4 inline-block rounded-full bg-[#6c4cb1] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4cb1]"
                >
                  Search Now
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <article className="md:col-span-8 lg:col-span-9">
            <header className="mb-6">
              <h1 className="text-3xl font-[var(--font-heading)] tracking-tight text-[#212121] md:text-[34px]">
                About Legal Mark Experts
              </h1>
            </header>

            <div className="space-y-6">
              <p>
                <span className="font-semibold">Legal Mark Experts</span> is a modern trademark and
                brand-protection platform for founders, small businesses, and law firms. We combine
                intuitive tools with expert guidance so you can search, file, and protect trademarks
                with confidence—without slowing down your business.
              </p>
              <p>
                Our data coverage spans millions of global records. Whether you’re running a quick
                knockout search or preparing a comprehensive review, our workflows surface relevant
                results and reduce busywork from start to finish.
              </p>
              <p>
                Since 2009, our team and partner network have supported well over one hundred thousand
                brand owners across more than 170 countries.
              </p>
            </div>

            <SectionTitle>Our Mission</SectionTitle>
            <p className="mt-3">
              Empower brand owners with accessible legal technology that streamlines trademark search,
              filing, and post-filing management—delivering clarity, speed, and protection at every step.
            </p>

            <SectionTitle>Continuous Innovation</SectionTitle>
            <p className="mt-3">
              We iterate relentlessly. From smarter search and monitoring to guided filing flows,
              we’re focused on reducing friction and improving outcomes for both first-time filers
              and experienced counsel.
            </p>

            <SectionTitle>Headquarters</SectionTitle>
            <p className="mt-3">
              We’re headquartered in Tempe, Arizona. For directions and appointments, see our{" "}
              <Link href="/contact" className="text-[#6c4cb1] underline underline-offset-4">
                contact us
              </Link>{" "}
              page.
            </p>

            <address className="mt-6 not-italic leading-7">
              440 E. Southern Avenue
              <br />
              Tempe, Arizona 85282
              <br />
              <span className="font-semibold">Tel:</span>{" "}
              <Link href="tel:+18777949511" className="hover:underline">
                1-877-794-9511
              </Link>
              <br />
              <span className="font-semibold">Fax:</span>{" "}
              <Link href="fax:+16509892131" className="hover:underline">
                650-989-2131
              </Link>
              <br />
              <span className="font-semibold">Email:</span>{" "}
              <Link
                href="mailto:customer.service@legalmarkexperts.com"
                className="font-semibold text-[#6c4cb1] hover:underline"
              >
                customer.service@legalmarkexperts.com
              </Link>
            </address>
          </article>
        </div>
      </section>
    </main>
  );
}

/* ==== small sub-components (Tailwind-only) ==== */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-xl font-[var(--font-heading)] tracking-tight text-[#212121]">
      {children}
    </h2>
  );
}
