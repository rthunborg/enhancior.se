import type { Metadata } from "next";
import { EngagementTiers } from "@/components/engagement-tiers";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "IT-konsulttjänster | Teknisk Revision, Arkitektur & Ledning – Enhancior",
  description:
    "IT-konsulttjänster inom teknisk revision, mjukvaruarkitekt som deltar regelbundet i ert team, och enterprise-modernisering. Senior mjukvaruarkitekt i Göteborg – tydlig omfattning, tidslinje och leveranser.",
  keywords: [
    "IT-konsulttjänster",
    "teknisk revision",
    "mjukvaruarkitekt uppdrag",
    "mjukvaruarkitekt team",
    "enterprise modernisering",
    "IT-konsult Göteborg",
  ],
  openGraph: {
    url: "https://enhancior.se/services",
  },
  alternates: {
    canonical: "https://enhancior.se/services",
  },
};

export default function TjansterPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "services" }]}>
      <EngagementTiers tierIds={["tech-rescue-audit", "fractional-retainer", "enterprise-rescue", "advisory-quick-review", "advisory-procurement", "advisory-retainer", "ai-education"]} />
    </PageShell>
  );
}
