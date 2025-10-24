import type { Metadata } from "next";
import TrademarkMonitoringHero from "@/components/TrademarkMonitoringHero";
import TrademarkMonitoringHighlight from "@/components/TrademarkMonitoringHighlight";
import TrademarkMonitoringBenefits from "@/components/TrademarkMonitoringBenefits";
import TrademarkMonitoringFeatures from "@/components/TrademarkMonitoringFeatures";
import TrademarkMonitoringSteps from "@/components/TrademarkMonitoringSteps";
import TrademarkMonitoringPlans from "@/components/TrademarkMonitoringPlans";
import TrademarkMonitoringCTA from "@/components/TrademarkMonitoringCTA";

export const metadata: Metadata = {
  title: "Trademark Monitoring Services | Legal Mark Experts",
  description:
    "Stay ahead of brand risks with attorney-led trademark monitoring. Receive alerts, analysis, and guidance to protect your marks worldwide.",
};

export default function TrademarkMonitoringPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <TrademarkMonitoringHero />
      <TrademarkMonitoringHighlight />
      <TrademarkMonitoringBenefits />
      <TrademarkMonitoringFeatures />
      <TrademarkMonitoringSteps />
      <TrademarkMonitoringPlans />
      <TrademarkMonitoringCTA />
    </main>
  );
}
