import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import { PathwayCaseStudies } from "@/components/pathway/pathway-case-studies";
import { EngagementTiers } from "@/components/engagement-tiers";
import {
  ArchitectureViewer,
  PolestarScalingBefore,
  PolestarScalingIntervention,
  PolestarScalingAfter,
} from "@/components/architecture";

export const metadata: Metadata = {
  title: "Skalbar Arkitektur | Enhancior",
  description:
    "Teamet växer snabbare än arkitekturen. En inbäddad arkitekt som integreras i ert team, driver besluten och hjälper er skala utan att tappa fart.",
};

export default function CtoProactivePage() {
  return (
    <PathwayShell breadcrumbLabel="skalning">
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Teamet växer. Arkitekturen måste hänga med.
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed">
          Ni skalas snabbt, men arkitekturen designades för ett mindre team. En
          inbäddad arkitekt integreras direkt i ert team, driver
          arkitekturbesluten och säkerställer att er tekniska grund håller för
          nästa tillväxtfas.
        </p>
      </div>

      {/* Problem Amplification Section */}
      <section
        aria-label="Skalningsutmaning"
        className="mb-16 md:mb-24 lg:mb-32"
      >
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          SKALNINGSUTMANING
        </p>
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Arkitekturen som fungerade vid 10 devs bryter samman vid 30+
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Monoliten som bar er hit blir en flaskhals. Feature-team krockar i
              samma kodområden, merge-konflikter eskalerar och varje release
              kräver orkestrering över hela organisationen.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Onboarding-flaskhalsar och kunskapssilos
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Nya utvecklare tar månader att bli produktiva. Kritisk
              domänkunskap sitter hos ett fåtal nyckelpersoner och det finns
              ingen dokumenterad arkitekturvision att navigera efter.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Avsaknad av senior teknisk ledning i tillväxtfasen
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Arkitekturbeslut fattas ad hoc utan långsiktig strategi. Ni
              behöver en erfaren teknisk ledare som kan guida
              arkitekturevolutionen. Men en heltidsrekrytering tar för lång
              tid.
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
            Case Study: Polestar
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Velocity
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                Baseline →{" "}
                <span className="text-[#22C55E]">+45%</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Uptime
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                98.5% →{" "}
                <span className="text-[#22C55E]">99.9%</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Onboarding
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                3 mån →{" "}
                <span className="text-[#22C55E]">3v</span>
              </p>
            </div>
          </div>
          <ArchitectureViewer
            beforeContent={PolestarScalingBefore}
            interventionContent={PolestarScalingIntervention}
            afterContent={PolestarScalingAfter}
          />
        </div>
      </section>

      {/* Case Studies */}
      <PathwayCaseStudies persona="cto-proactive" />

      {/* Engagement Tiers */}
      <EngagementTiers emphasizedTierId="fractional-retainer" tierIds={["tech-rescue-audit", "fractional-retainer", "enterprise-rescue"]} />
    </PathwayShell>
  );
}
