import type { Metadata } from "next";
import TrademarkConsultancyHero from "@/components/TrademarkConsultancyHero";
import TrademarkConsultancyOverview from "@/components/TrademarkConsultancyOverview";
import TrademarkConsultancyBenefits from "@/components/TrademarkConsultancyBenefits";
import TrademarkConsultancyCallToAction from "@/components/TrademarkConsultancyCallToAction";

export const metadata: Metadata = {
  title: "Trademark Consultancy Services | Legal Mark Experts",
  description:
    "Get pre-filing trademark guidance from experienced attorneys. Evaluate risks, plan your filing strategy, and secure your brand with confidence.",
};

export default function TrademarkConsultancyPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <TrademarkConsultancyHero />
      <TrademarkConsultancyOverview />
      <TrademarkConsultancyBenefits />
      <TrademarkConsultancyCallToAction />
    </main>
  );
}
