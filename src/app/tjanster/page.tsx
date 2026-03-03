import type { Metadata } from "next";
import { EngagementTiers } from "@/components/engagement-tiers";

export const metadata: Metadata = {
  title: "Tjänster | Enhancior",
  description:
    "Tre uppdragsformer med tydlig omfattning, tidslinje och leverabler: 30-dagars Teknisk Revision, Teknisk ledning på deltid och Enterprise Rescue.",
};

export default function TjansterPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
      <div className="mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Tjänster
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed">
          Tre uppdragsformer. Varje engagemang har tydlig omfattning, tidslinje
          och leverabler. Ingen vag konsultrådgivning, bara konkret förändring.
        </p>
      </div>

      <EngagementTiers />
    </div>
  );
}
