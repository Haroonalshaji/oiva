import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.contact;

export default function ContactPage() {
  return <ContactContent />;
}
