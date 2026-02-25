import HomeHero from "@/components/ui/HomeHero";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import HomePillars from "@/components/ui/HomePillars";
import FeatureSplit from "@/components/ui/FeatureSplit";
import HomeNews from "@/components/ui/HomeNews";
import BadgesStrip from "@/components/ui/BadgesStrip";
import CtaBanner from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full pt-4">
        <HomeHero />
        <MarqueeStrip />
        <HomePillars />
        <FeatureSplit />
        <HomeNews />
        <BadgesStrip />
        <CtaBanner />
      </main>
    </div>
  );
}
