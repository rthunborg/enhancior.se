import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import { EngagementTiers } from "@/components/engagement-tiers";
import { ArchitectureViewer } from "@/components/architecture";
import {
  AIEducationLecture,
  AIEducationWorkshop,
  AIEducationOutcomes,
} from "@/components/proof-artifacts/ai-education-formats";

export const metadata: Metadata = {
  title: "AI-utbildning | Workshops & Föreläsningar – Enhancior",
  description:
    "AI-utbildning för ledning och utvecklare. Föreläsningar och praktiska workshops som ger ert team konkreta AI-kunskaper — från strategi till daglig användning.",
  keywords: [
    "AI-utbildning",
    "AI-workshop",
    "AI-föreläsning",
    "AI för företag",
    "AI-kurs ledning",
    "AI-utbildning utvecklare",
    "AI Göteborg",
  ],
  openGraph: {
    url: "https://enhancior.se/ai-utbildning",
  },
  alternates: {
    canonical: "https://enhancior.se/ai-utbildning",
  },
};

export default function AIUtbildningPage() {
  return (
    <PathwayShell breadcrumbSegments={[{ label: "ai-utbildning" }]}>
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Er organisation vill använda AI — men var börjar ni?
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
          Skillnaden mellan AI-hype och verklig affärsnytta är kunskap.
          Föreläsningar och workshops som ger ert team — ledning och utvecklare
          — konkreta verktyg och en tydlig plan för hur AI kan användas i just
          er verksamhet.
        </p>
      </div>

      {/* Challenge Section */}
      <section aria-label="Utmaning" className="mb-16 md:mb-24 lg:mb-32">
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          UTMANING
        </p>
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Kunskapsgapet: teamet vet inte vad AI faktiskt kan göra för er
            </p>
            <p className="text-sm text-[#A1A1A1]">
              AI diskuteras överallt, men få i organisationen förstår vad som är
              realistiskt och vad som är hype. Utan den förståelsen blir det
              omöjligt att fatta bra beslut om var AI skapar värde.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Verktygsdjungeln: för många alternativ, oklart vilka som fungerar
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Nya AI-verktyg lanseras varje vecka. Utan vägledning testar
              medarbetare slumpmässigt, blir besvikna på resultatet och ger upp.
              Potentialen förblir outnyttjad.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Strategi saknas: spridda experiment utan riktning
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Enskilda medarbetare testar AI på egen hand, men det finns ingen
              gemensam plan. Resultatet blir ojämn kunskapsnivå, dubbelarbete och
              ingen systematisk förbättring.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Artifact Section — Format Overview */}
      <section
        aria-label="Utbildningsformat"
        className="mb-16 md:mb-24 lg:mb-32"
      >
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-8">
          <p className="font-mono text-sm text-[#919191] mb-6">
            Utbildningsformat
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">Format</p>
              <p className="font-mono text-sm text-[#EDEDED]">
                Halvdag eller heldag
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">Målgrupp</p>
              <p className="font-mono text-sm text-[#EDEDED]">
                Ledning & utvecklare
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">Upplägg</p>
              <p className="font-mono text-sm text-[#EDEDED]">
                Teori + praktik
              </p>
            </div>
          </div>
          <ArchitectureViewer
            beforeContent={AIEducationLecture}
            interventionContent={AIEducationWorkshop}
            afterContent={AIEducationOutcomes}
            labels={{
              before: "Föreläsning",
              intervention: "Workshop",
              after: "Lärandemål",
            }}
          />
        </div>
      </section>

      {/* Engagement Tiers */}
      <EngagementTiers
        emphasizedTierId="ai-education"
        tierIds={["ai-education"]}
      />
    </PathwayShell>
  );
}
