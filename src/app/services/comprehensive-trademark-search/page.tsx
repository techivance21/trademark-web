import ComprehensiveTrademarkHero from "@/components/ComprehensiveTrademarkHero";
import ComprehensiveTrademarkOverview from "@/components/ComprehensiveTrademarkOverview";
import ComprehensiveTrademarkAdvantages from "@/components/ComprehensiveTrademarkAdvantages";
import ComprehensiveTrademarkProcess from "@/components/ComprehensiveTrademarkProcess";
import ComprehensiveTrademarkPackages from "@/components/ComprehensiveTrademarkPackages";

export default function ComprehensiveTrademarkSearchPage() {
  return (
    <main className="flex flex-col">
      <ComprehensiveTrademarkHero />
      <ComprehensiveTrademarkOverview />
      <ComprehensiveTrademarkAdvantages />
      <ComprehensiveTrademarkProcess />
      <ComprehensiveTrademarkPackages />
    </main>
  );
}
