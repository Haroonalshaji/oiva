import type { Metadata } from "next";
import { ComingSoon } from "@/components/home/ComingSoon";
import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { LookbookStrip } from "@/components/home/LookbookStrip";
import { Pillars } from "@/components/home/Pillars";
import { NewsletterBand } from "@/components/home/NewsletterBand";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = siteConfig.comingSoon
  ? {
      title: `${siteConfig.name} · Coming soon`,
      description:
        "the OIVA is preparing to open. Quiet-luxury womenswear — fewer pieces, made with intention. Arriving shortly.",
    }
  : seo.home;

export default function HomePage() {
  if (siteConfig.comingSoon) {
    return <ComingSoon />;
  }

  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedProducts />
      <LookbookStrip />
      <Pillars />
      <NewsletterBand />
    </>
  );
}
