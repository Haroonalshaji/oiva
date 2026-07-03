import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { LookbookStrip } from "@/components/home/LookbookStrip";
import { Pillars } from "@/components/home/Pillars";
import { NewsletterBand } from "@/components/home/NewsletterBand";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.home;

export default function HomePage() {
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
