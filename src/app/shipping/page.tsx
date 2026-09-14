import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalDocs } from "@/data/legal";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.shipping;

export default function ShippingPage() {
  return <LegalDocument doc={legalDocs.shipping} />;
}
