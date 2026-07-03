import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.about;

export default function AboutPage() {
  return <AboutContent />;
}
