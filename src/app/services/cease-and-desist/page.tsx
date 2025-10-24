import type { Metadata } from "next";
import CeaseAndDesistHero from "@/components/CeaseAndDesistHero";
import CeaseAndDesistProcess from "@/components/CeaseAndDesistProcess";
import CeaseAndDesistProtection from "@/components/CeaseAndDesistProtection";
import CeaseAndDesistImportance from "@/components/CeaseAndDesistImportance";
import CeaseAndDesistCTA from "@/components/CeaseAndDesistCTA";

export const metadata: Metadata = {
  title: "Cease and Desist Letters | Legal Mark Experts",
  description:
    "Stop infringement fast with attorney-drafted cease and desist letters. Protect your brand with strategic legal guidance tailored to your situation.",
};

export default function CeaseAndDesistPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <CeaseAndDesistHero />
      <CeaseAndDesistProcess />
      <CeaseAndDesistProtection />
      <CeaseAndDesistImportance />
      <CeaseAndDesistCTA />
    </main>
  );
}
