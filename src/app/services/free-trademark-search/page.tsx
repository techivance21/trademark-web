import FreeTrademarkSearchHero from "../../../components/FreeTrademarkSearchHero";
import FreeTrademarkSearchInsights from "../../../components/FreeTrademarkSearchInsights";
import FreeTrademarkSearchSimilar from "../../../components/FreeTrademarkSearchSimilar";
import FreeTrademarkLogoGuide from "../../../components/FreeTrademarkLogoGuide";
import FreeTrademarkComprehensive from "../../../components/FreeTrademarkComprehensive";
import FreeTrademarkCTA from "../../../components/FreeTrademarkCTA";

export default function FreeTrademarkSearchPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <FreeTrademarkSearchHero />
      <FreeTrademarkSearchInsights />
      <FreeTrademarkSearchSimilar />
      <FreeTrademarkLogoGuide />
      <FreeTrademarkComprehensive />
      <FreeTrademarkCTA />
    </main>
  );
}
