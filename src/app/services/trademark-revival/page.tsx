import type { Metadata } from "next";
import TrademarkRevivalHero from "@/components/TrademarkRevivalHero";
import TrademarkRevivalServices from '../../../components/TrademarkRevivalServices';
import TrademarkRevivalTimeline from '../../../components/TrademarkRevivalTimeline';
import TrademarkRevivalWhyChoose from '../../../components/TrademarkRevivalWhyChoose';
import TrademarkRevivalMissedDate from '../../../components/TrademarkRevivalMissedDate';
import TrademarkRevivalCTA from '../../../components/TrademarkRevivalCTA';

export const metadata: Metadata = {
  title: "Trademark Revival Services | Legal Mark Experts",
  description:
    "Revive abandoned or dead USPTO trademark applications with attorney support. Check eligibility and file the paperwork needed to bring your mark back to life.",
};

export default function TrademarkRevivalPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <TrademarkRevivalHero />
      <TrademarkRevivalServices />
      <TrademarkRevivalTimeline />
      <TrademarkRevivalWhyChoose />
      <TrademarkRevivalMissedDate />
      <TrademarkRevivalCTA />
    </main>
  );
}
