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
      <div className="mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Tjänster
        </h1>
      </div>

      <EngagementTiers tierIds={["tech-rescue-audit", "fractional-retainer", "enterprise-rescue", "advisory-quick-review"]} />
    </PageShell>
  );
}
