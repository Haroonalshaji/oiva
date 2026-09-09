import type { Metadata } from "next";
import { ReturnPolicyContent } from "@/components/legal/ReturnPolicyContent";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.returns;

export default function ReturnsPage() {
  return <ReturnPolicyContent />;
}
