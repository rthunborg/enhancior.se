import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import {
  ArchitectureViewer,
  GenericCrisisBefore,
  GenericCrisisIntervention,
  GenericCrisisAfter,
} from "@/components/architecture";
import { PathwayCaseStudies } from "@/components/pathway/pathway-case-studies";
import { EngagementTiers } from "@/components/engagement-tiers";

export const metadata: Metadata = {
  title: "Leveranskris | Enhancior",
  description:
    "Er tekniska skuld bromsar leveransen. En 30-dagars teknisk revision som identifierar exakt var problemen sitter och ger er en konkret åtgärdsplan.",
};

export default function CtooCrisisPage() {
  return (
    <PathwayShell breadcrumbLabel="delivery-crisis">
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Ni vet redan att teknisk skuld kostar er.
        </h1>
        <p className="items-center text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed">
          Er pipeline är fragil och varje release är en risk. Teamet
          tappar fart. En 30-dagars teknisk revision identifierar exakt var
          problemen sitter och ger er en konkret åtgärdsplan som ert team kan
          börja implementera dag 31.
        </p>
      </div>

      {/* Problem Amplification Section */}
      <section aria-label="Symptom" className="mb-16 md:mb-24 lg:mb-32">
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          SYMPTOM
        </p>
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Deploys som spårar ur varje sprint
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Er CI/CD-pipeline misslyckas oftare än den lyckas. Hotfixes
              genererar nya buggar och rollback-planen är &quot;blunda och hoppas allt går bra&quot;.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Arkitektur som blockerar tillväxt
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Monoliten har blivit en flaskhals. Varje nytt feature-team krockar
              med samma kodområden och ingen vågar ta ansvaret refaktorera spagetti-koden.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Teamvelocity i fritt fall
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Utvecklarna spenderar mer tid på att släcka bränder än att bygga
              features. Teknisk skuld äter sprint-kapacitet och de seniora utvecklarna börjar titta mot dörren.
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
            Case Study: Diagnose &amp; Cure
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Deploy-frekvens
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                1/vecka →{" "}
                <span className="text-[#22C55E]">4/dag</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Incidenter
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
              −60% →{" "}
                <span className="text-[#22C55E]">−2%</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Tid till produktion
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                14d →{" "}
                <span className="text-[#22C55E]">2d</span>
              </p>
            </div>
          </div>
          <ArchitectureViewer
            beforeContent={GenericCrisisBefore}
            interventionContent={GenericCrisisIntervention}
            afterContent={GenericCrisisAfter}
          />
        </div>
      </section>

      {/* Case Studies */}
      <PathwayCaseStudies persona="cto-crisis" />

      {/* Engagement Tiers */}
      <EngagementTiers emphasizedTierId="tech-rescue-audit" />
    </PathwayShell>
  );
}
