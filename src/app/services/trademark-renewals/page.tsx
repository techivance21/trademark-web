import type { Metadata } from "next";
import RenewalHero from "../../../components/RenewalHero";
import RenewalTimeline from "../../../components/RenewalTimeline";
import RenewalGraceSupport from "../../../components/RenewalGraceSupport";
import RenewalIncontestabilityCTA from "../../../components/RenewalIncontestabilityCTA";
import RenewalPackagesShowcase from "../../../components/RenewalPackagesShowcase";
import RenewalPromptCTA from "../../../components/RenewalPromptCTA";
import RenewalServicesShowcase from "../../../components/RenewalServicesShowcase";

export const metadata: Metadata = {
  title: "Trademark Renewal Services | Legal Mark Experts",
  description:
    "Protect your trademark with proactive renewal management. We handle every filing deadline and proof of use so your mark stays active.",
};

export default function RenewalPage() {
  return (
    <main className="min-h-screen bg-white text-[#1b1b3a]">
      <RenewalHero />
      <RenewalServicesShowcase />
      <RenewalTimeline />
      <RenewalGraceSupport />
      <RenewalIncontestabilityCTA />
      <RenewalPackagesShowcase />
      <RenewalPromptCTA />
    </main>
  );
}
