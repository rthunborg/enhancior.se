import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import { EngagementTiers } from "@/components/engagement-tiers";
import { ArchitectureViewer } from "@/components/architecture";
import {
  AdvisoryTimelineSituation,
  AdvisoryTimelineIntervention,
  AdvisoryTimelineResult,
} from "@/components/proof-artifacts/advisory-timeline";

export const metadata: Metadata = {
  title: "Oberoende IT-rådgivning | Enhancior",
  description:
    "Oberoende teknisk granskning och IT-rådgivning för kommun, myndighet och organisationer. Säkerställ att ni fattar rätt IT-beslut utan leverantörens agenda.",
  keywords: [
    "oberoende IT-rådgivning",
    "teknisk granskning upphandling",
    "IT-rådgivare kommun",
    "oberoende teknisk rådgivare",
    "IT-upphandling stöd",
  ],
  openGraph: {
    url: "https://enhancior.se/it-radgivning",
  },
  alternates: {
    canonical: "https://enhancior.se/it-radgivning",
  },
};

export default function ITRadgivningPage() {
  return (
    <PathwayShell
      breadcrumbSegments={[
        { label: "teknikbehov", href: "/teknikbehov" },
        { label: "it-rådgivning" },
      ]}
    >
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Du ska fatta ett beslut värt miljoner. Säljaren har en agenda. Du
          behöver någon som bara har din.
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
          Innan ni skriver på ett IT-avtal behöver ni veta vad ni faktiskt
          köper, vad ni inte behöver och vad det egentligen kommer att kosta.
          En oberoende granskning ger er svar utan att sälja er något.
        </p>
      </div>

      {/* Problem Amplification Section */}
      <section aria-label="Utmaning" className="mb-16 md:mb-24 lg:mb-32">
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          UTMANING
        </p>
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Risken att välja fel system kostar mer än systemet självt
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Ett felaktigt systemval innebär inte bara förlorade
              investeringspengar. Det påverkar verksamheten i åratal: ineffektiva
              processer, frustrerade medarbetare och kostsamma omstarter.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Leverantören visar er vad de vill sälja, inte vad ni behöver
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Varje leverantör presenterar sin lösning som den perfekta.
              Moduler ni inte behöver, integrationer som ökar komplexiteten och
              licensmodeller som binder er i åratal. Utan oberoende expertis
              ser ni inte helheten.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Inlåsning märks inte förrän det är för sent
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Proprietära format, begränsade API:er och leverantörsspecifika
              anpassningar gör det dyrt och svårt att byta. Ju längre ni
              väntar, desto dyrare blir förändringen.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Artifact Section */}
      <section
        aria-label="Bevisartefakter"
        className="mb-16 md:mb-24 lg:mb-32"
      >
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-8">
          <p className="font-mono text-sm text-[#919191] mb-6">
            Typiskt uppdrag
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Avtalsvärde
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                30M SEK → <span className="text-[#22C55E]">18M SEK</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Besparing
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                <span className="text-[#22C55E]">12M SEK</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Granskningstid
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                <span className="text-[#22C55E]">3 veckor</span>
              </p>
            </div>
          </div>
          <ArchitectureViewer
            beforeContent={AdvisoryTimelineSituation}
            interventionContent={AdvisoryTimelineIntervention}
            afterContent={AdvisoryTimelineResult}
            labels={{
              before: "Situation",
              intervention: "Granskning",
              after: "Resultat",
            }}
          />
        </div>
      </section>

      {/* Engagement Tiers — advisory-specific */}
      <EngagementTiers
        emphasizedTierId="advisory-procurement"
        tierIds={[
          "advisory-quick-review",
          "advisory-procurement",
          "advisory-retainer",
        ]}
      />
    </PathwayShell>
  );
}
