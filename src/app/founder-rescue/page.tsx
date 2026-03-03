import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import { PathwayCaseStudies } from "@/components/pathway/pathway-case-studies";
import { EngagementTiers } from "@/components/engagement-tiers";

export const metadata: Metadata = {
  title: "Teknisk Ledning för Grundare | Enhancior",
  description:
    "Ni saknar rätt senior tech-kompetens. En erfaren arkitekt som håller skeppet stadigt medan ni hittar rätt CTO.",
};

export default function FounderRescuePage() {
  return (
    <PathwayShell breadcrumbLabel="grundare">
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Ni behöver inte en ny CTO. Ni behöver en bro.
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed">
          Er tekniska ledare är borta och teamet tappar fart. Ni behöver inte
          rusa in i en felrekrytering. Ni behöver någon som stabiliserar
          verksamheten, skapar en roadmap styrelsen kan lita på och hjälper er
          hitta rätt permanent CTO i lugn och ro.
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
              Teamet driver utan riktning. Hastigheten sjunker vecka för vecka
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Utan en senior ledare som sätter prioriteringar tappar teamet fart.
              Leveranser försenas, ingen vet vad som är viktigast och
              produktutvecklingen stannar av medan kostnaderna fortsätter ticka.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Styrelsen och investerarna ställer frågor ni inte kan besvara
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Due diligence-risken växer. Ni saknar trovärdiga underlag om
              teamets kapacitet, tekniska risker och leveransförmåga. Varje
              styrelsemöte blottlägger kunskapsluckan.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Ingen kan bedöma om teamet gör rätt saker, eller om ni bränner
              kapital på fel prioriteringar
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Utan teknisk ledning fattas beslut i blindo. Ni vet inte om teamet
              bygger rätt saker, om resurserna används effektivt eller om ni
              närmar er en leverans som faktiskt skapar affärsvärde.
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
            Kundberättelse
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Tid till stabil drift
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                8v → <span className="text-[#22C55E]">3v</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                CTO-rekrytering
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                <span className="text-[#22C55E]">lyckad inom 4 mån</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-[#919191] mb-1">
                Due diligence
              </p>
              <p className="font-mono text-sm text-[#EDEDED]">
                <span className="text-[#22C55E]">godkänd</span>
              </p>
            </div>
          </div>
          <div className="border border-dashed border-[rgba(255,255,255,0.15)] rounded p-12 flex items-center justify-center">
            <p className="font-mono text-sm text-[#919191]">
              Resultatberättelse (kommer i nästa fas)
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <PathwayCaseStudies persona="founder-rescue" />

      {/* Engagement Tiers */}
      <EngagementTiers emphasizedTierId="fractional-retainer" />
    </PathwayShell>
  );
}
