import type { Metadata } from "next";
import { getYoastMeta } from "@/lib/yoast";
import HomeHero from "@/components/ui/HomeHero";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import HomePillars from "@/components/ui/HomePillars";
import FeatureSplit from "@/components/ui/FeatureSplit";
import HomeNews from "@/components/ui/HomeNews";
import BadgesStrip from "@/components/ui/BadgesStrip";
import CtaBanner from "@/components/ui/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const yoast = await getYoastMeta(12827);
  if (!yoast) return { title: "The Seven Hills School" };

  return {
    title: yoast.title,
    description: yoast.description,
    robots: yoast.robots,
    openGraph: {
      type: yoast.og_type === "article" ? "article" : "website",
      locale: yoast.og_locale,
      url: yoast.og_url,
      siteName: yoast.og_site_name,
      title: yoast.og_title,
      description: yoast.og_description,
      images: yoast.og_image?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        type: img.type,
      })),
      ...(yoast.og_type === "article" && {
        modifiedTime: yoast.article_modified_time,
      }),
    },
    twitter: {
      card: yoast.twitter_card as "summary_large_image",
      site: yoast.twitter_site,
      title: yoast.og_title,
      description: yoast.og_description,
      images: yoast.og_image?.[0]?.url,
    },
  };
}

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
