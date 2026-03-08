import type { Metadata } from "next";
import { EngagementTiers } from "@/components/engagement-tiers";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Tjänster | Enhancior",
  description:
    "Uppdragsformer med tydlig omfattning, tidslinje och leveranser.",
  openGraph: {
    url: "https://enhancior.se/tjanster",
  },
  alternates: {
    canonical: "https://enhancior.se/tjanster",
  },
};

export default function TjansterPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "tjänster" }]}>
      <EngagementTiers tierIds={["tech-rescue-audit", "fractional-retainer", "enterprise-rescue", "advisory-quick-review", "advisory-procurement", "advisory-retainer"]} />
    </PageShell>
  );
}
