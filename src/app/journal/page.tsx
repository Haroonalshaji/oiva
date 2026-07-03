import type { Metadata } from "next";
import { JournalList } from "@/components/journal/JournalList";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.journal;

export default function JournalPage() {
  return <JournalList />;
}
