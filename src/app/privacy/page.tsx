import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalDocs } from "@/data/legal";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.privacy;

export default function PrivacyPage() {
  return <LegalDocument doc={legalDocs.privacy} />;
}
