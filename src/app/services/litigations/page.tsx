import Litigation from "@/components/Litigation";
import Image from "next/image";
import {
  Scale,
  BarChart3,
  Gavel,
} from "lucide-react"; // ✅ professional icons


const WHY_CARDS = [
  { icon: "/icon1.png", title: "Led by Trademark Attorneys", text: "All services are reviewed and supported by licensed trademark attorneys with real-world legal experience." },
  { icon: "/icon2.png", title: "Clear, Step-by-Step Process", text: "We guide you from eligibility assessment through filing with a clear, structured approach tailored to your case." },
  { icon: "/icon3.png", title: "Fast, Personalized Support", text: "Get direct guidance from our experts—no generic answers, just support focused on your needs." },
  { icon: "/icon4.png", title: "All-in-One Platform", text: "Search, file, monitor, and enforce—all from a single streamlined system built for entrepreneurs." },
  { icon: "/icon5.png", title: "Transparent, No Hidden Fees", text: "No surprises—our pricing is fixed, clear, and fully disclosed upfront." },
  { icon: "/icon6.png", title: "Trusted by Thousands", text: "Join thousands of U.S. business owners who rely on Legal Mark Expert to protect and enforce their trademarks." },
];

const PLANS = [
  { step: "1", title: "Initial Legal Review", price: "$499 Flat Fee", text: "Speak with a licensed trademark attorney to evaluate your case and explore your options." },
  { step: "2", title: "Response & Negotiation", price: "$1,599 Flat Fee", text: "We prepare your legal response and pursue a fair settlement or negotiated resolution if appropriate." },
  { step: "3", title: "Litigation Support", price: "$2,500 – $7,500 (Estimated Range)", text: "If the dispute proceeds to court, we provide complete representation and defend your rights." },
];

const FAQS = [
  { q: "What is trademark infringement?", a: "It’s unauthorized use of a trademark (or a confusingly similar mark) on related goods/services that is likely to cause consumer confusion about source or sponsorship." },
  { q: "Can I stop someone from using a similar trademark?", a: "Yes. Options include a cease & desist letter, negotiation/settlement, an opposition or cancellation proceeding, or a federal lawsuit—depending on facts and timing." },
  { q: "What if I’m accused of trademark infringement?", a: "Don’t ignore it. Speak with an attorney quickly to review your use, defenses (like fair use or priority), and options to resolve or defend the claim." },
  { q: "What should I do if someone is using my trademark?", a: "Collect evidence (screenshots, sales pages, dates), confirm priority/registration status, and have an attorney assess and act—often starting with a targeted demand letter." },
];

export default function LitigationPage() {
  return (
    <main className="bg-white text-[#212121]">
      {/* HERO */}
      <Litigation />

      {/* WHAT IS LITIGATION */}
      <section className="px-6 md:px-20 py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold leading-tight mb-4">
              What Is <span className="text-[#6c4cb1]">Trademark Litigation?</span>
            </h2>
            <p className="text-[#333] text-base md:text-lg leading-relaxed">
              Trademark litigation is the process of enforcing your rights when another
              party infringes or challenges your mark. Our attorneys help you take decisive
              action to protect your brand’s identity and reputation.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Confusingly Similar Trademarks",
                desc: "When another brand uses a name, logo, or slogan too close to yours—causing consumer confusion—we step in with a clear strategy.",
              },
              {
                title: "Priority of Use Disputes",
                desc: "If another applicant claims first use, we help establish your priority through evidence, declarations, and filings.",
              },
              {
                title: "Ownership & Registration Challenges",
                desc: "We respond to oppositions, cancellations, and ownership disputes before the USPTO or in federal court.",
              },
              {
                title: "Enforcement After Registration",
                desc: "We monitor, investigate, and move quickly against unauthorized use once your mark is registered.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#212121]">
                  {item.title}
                  <span className="text-[#6c4cb1] text-xl font-bold transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[#333] leading-relaxed">{item.desc}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-20 py-20 text-center">
        <p className="text-sm font-semibold text-[#6c4cb1] mb-2 uppercase tracking-widest">
          Our Process
        </p>
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold mb-14">
          How it Works
        </h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10">
          {[
            {
              icon: <BarChart3 className="h-8 w-8 text-[#6c4cb1]" />,
              title: "Get Legal Opinion",
              text: "Consult a U.S. attorney to assess your case and understand your position clearly.",
            },
            {
              icon: <Scale className="h-8 w-8 text-[#6c4cb1]" />,
              title: "File or Negotiate",
              text: "We prepare your response and pursue a fair settlement or opposition where appropriate.",
            },
            {
              icon: <Gavel className="h-8 w-8 text-[#6c4cb1]" />,
              title: "Decide on Litigation",
              text: "Proceed to court only when needed—our attorneys support you every step of the way.",
            },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="bg-[#f4f1fa] rounded-2xl h-16 w-16 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-[#333] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#6c4cb1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#5b3d9d] transition-all shadow-md">
          Get Started
        </button>
      </section>

      {/* PRICING */}
      <section className="px-6 md:px-20 py-20 bg-[#fafafa]">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-4">
          Affordable Legal Support with{" "}
          <span className="text-[#6c4cb1]">No Hidden Fees</span>
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PLANS.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:bg-[#6c4cb1] hover:text-white transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-5">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#f0ebfa] group-hover:bg-[#7e61c8] text-[#6c4cb1] group-hover:text-white font-bold text-sm transition">
                  {p.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm font-semibold mb-2">{p.price}</p>
              <p className="text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-center mb-14">
          Why Choose <span className="text-[#6c4cb1]">Legal Mark Expert?</span>
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CARDS.map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-[#fafafa] rounded-2xl border border-gray-100 hover:bg-[#6c4cb1] hover:text-white transition-all duration-300"
            >
              <Image src={card.icon} alt={card.title} width={48} height={48} className="object-contain flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-base">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#6c4cb1] uppercase tracking-widest">
              Got Questions?
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold">
              We have Got Answers
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
                <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#212121]">
                  {f.q}
                  <span className="text-[#6c4cb1] text-xl font-bold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#333] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-20 py-20 text-center bg-[#f5f5f5]">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold mb-4">
          Protect What You have Built
        </h2>
        <p className="max-w-3xl mx-auto text-[#333] text-base md:text-lg leading-relaxed">
          Your trademark represents your hard work, reputation, and growth. If it’s being challenged or misused, now is the time to act. With the right legal support, you can defend your brand and move forward with confidence.
        </p>
        <button className="mt-8 bg-[#6c4cb1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#5b3d9d] transition-all shadow-md">
          Start Now
        </button>
      </section>
    </main>
  );
}
