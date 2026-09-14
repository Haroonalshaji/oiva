import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalDocs } from "@/data/legal";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.cookies;

export default function CookiePolicyPage() {
  return <LegalDocument doc={legalDocs.cookies} />;
}
