import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalDocs } from "@/data/legal";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.terms;

export default function TermsPage() {
  return <LegalDocument doc={legalDocs.terms} />;
}
