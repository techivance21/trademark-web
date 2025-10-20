import type { Metadata } from "next";
import TrademarkRegistrationHero from "../../../components/TrademarkRegistrationHero";

export const metadata: Metadata = {
  title: "Trademark Registration Services | Legal Mark Experts",
  description:
    "File your U.S. trademark with attorney-assisted consultations, video guidance, and expert preparation to maximize approval success.",
};

export default function TrademarkRegistrationPage() {
  return (
    <main className="min-h-screen bg-white text-[#1b1b3a]">
      <TrademarkRegistrationHero />
    </main>
  );
}
