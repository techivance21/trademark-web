import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Registration Form | Legal Mark Experts",
  description:
    "Start your trademark registration with Legal Mark Experts. Share your brand details and our specialists will follow up with tailored guidance.",
};

const guidance = [
  {
    title: "Fast Intake",
    description: "Submit brand, owner, and goods or services details in minutes.",
  },
  {
    title: "Expert Review",
    description: "A senior case analyst verifies eligibility and confirms the filing strategy.",
  },
  {
    title: "Guided Filing",
    description: "We prepare USPTO forms, specimens, and submit on your behalf.",
  },
] as const;

export default function TrademarkRegistrationFormPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <section className="relative overflow-hidden border-b border-[#e0d9f7] bg-gradient-to-r from-[#6c4cb1] via-[#7d5ed4] to-[#9a7ef0] text-white">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_70%)]" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-5 py-20 sm:px-8 lg:px-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-white/70">Trademark Registration Form</p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Secure Your Brand with Legal Mark Experts
            </h1>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              Complete the intake form below and our trademark professionals will review your submission, confirm next
              steps, and send you a custom proposal with transparent pricing.
            </p>
          </div>
          <div className="grid flex-1 gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:grid-cols-2">
            {guidance.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5fb] py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl">Tell Us About Your Trademark</h2>
            <p className="text-sm leading-relaxed text-[#4b4b63] sm:text-base">
              Provide as much detail as you can. If anything is unclear, we will reach out before we file with the USPTO.
              After you submit, expect a confirmation email within one business day.
            </p>
          </div>

          <form className="grid gap-8 rounded-3xl border border-[#e4def8] bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <fieldset className="grid gap-4 sm:grid-cols-2">
              <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Contact Details</legend>
              <Input label="Full Name" name="fullName" placeholder="Jane Smith" required />
              <Input label="Company (optional)" name="company" placeholder="Legal Mark Holdings LLC" />
              <Input label="Email Address" name="email" type="email" placeholder="you@company.com" required />
              <Input label="Phone Number" name="phone" type="tel" placeholder="(555) 123-4567" required />
            </fieldset>

            <fieldset className="grid gap-4">
              <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Trademark Information</legend>
              <Input label="Trademark Name" name="markName" placeholder="Your brand name or slogan" required />
              <Input
                label="Goods & Services"
                name="goodsServices"
                placeholder="Describe the products or services sold under this mark"
                as="textarea"
                rows={4}
                required
              />
              <Input
                label="Current Use of the Mark"
                name="currentUse"
                placeholder="Describe how and where the mark is currently used in commerce"
                as="textarea"
                rows={4}
              />
            </fieldset>

            <fieldset className="grid gap-4 sm:grid-cols-2">
              <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">Filing Preferences</legend>
              <Input
                label="Trademark Basis"
                name="filingBasis"
                placeholder="Section 1(a) - In Use or Section 1(b) - Intent to Use"
              />
              <Input
                label="Target Filing Timeline"
                name="timeline"
                placeholder="Example: File within 30 days"
              />
              <Input
                label="Specimen URL (if any)"
                name="specimenUrl"
                placeholder="https://example.com/product-page"
                type="url"
              />
              <Input
                label="USPTO Serial Number (if continuing an application)"
                name="serialNumber"
                placeholder="Enter serial number if applicable"
              />
            </fieldset>

            <fieldset className="grid gap-4">
              <legend className="text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">
                Additional Notes
              </legend>
              <Input
                label="Tell Us More"
                name="notes"
                placeholder="Share any office actions, deadlines, or special instructions we should know about."
                as="textarea"
                rows={5}
              />
              <label className="flex items-start gap-3 text-sm text-[#4b4b63]">
                <input type="checkbox" name="subscribe" className="mt-1 h-4 w-4 rounded border-[#c5b8ef] text-[#6c4cb1]" />
                <span>
                  Keep me informed about trademark renewal deadlines, monitoring alerts, and Legal Mark Experts updates.
                  You can opt out anytime.
                </span>
              </label>
            </fieldset>

            <div className="flex flex-col gap-3 rounded-2xl bg-[#f8f6ff] p-5 text-sm text-[#4b4b63] sm:flex-row sm:items-center sm:justify-between">
              <p>
                By submitting this form you agree to our{" "}
                <a href="/company/terms" className="text-[#6c4cb1] underline-offset-2 hover:underline">
                  Engagement Agreement
                </a>{" "}
                and{" "}
                <a href="/company/privacy" className="text-[#6c4cb1] underline-offset-2 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Submit Registration Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rows?: number;
  as?: "input" | "textarea";
};

function Input({
  label,
  name,
  placeholder,
  type = "text",
  required,
  rows,
  as = "input",
}: InputProps) {
  const shared =
    "w-full rounded-2xl border border-[#d7cef6] bg-white px-4 py-3 text-sm text-[#212121] shadow-sm focus:border-[#6c4cb1] focus:outline-none focus:ring-2 focus:ring-[#d9d0f7]";

  return (
    <label className="grid gap-2 text-sm font-medium text-[#212121]">
      <span>{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows ?? 4}
          required={required}
          className={`${shared} resize-y`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={shared}
        />
      )}
    </label>
  );
}

