import type { Metadata } from "next";
import { EngagementTiers } from "@/components/engagement-tiers";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Tjänster | Enhancior",
  description:
    "Tre uppdragsformer med tydlig omfattning, tidslinje och leverabler: 30-dagars teknisk revision, Teknisk ledning vid behov och Enterprise Rescue (arkitekt som resurs).",
};

export default function TjansterPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "tjänster" }]}>
      <div className="mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Tjänster
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
          Tre uppdragsformer. Varje engagemang har tydlig omfattning, tidslinje
          och leverabler. Ingen vag konsultrådgivning, bara konkret förändring.
        </p>
      </div>

      <EngagementTiers tierIds={["tech-rescue-audit", "fractional-retainer", "enterprise-rescue"]} />
    </PageShell>
  );
}
