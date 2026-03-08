import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import { EngagementTiers } from "@/components/engagement-tiers";

export const metadata: Metadata = {
  title: "Enterprise Compliance & Leverantörsinfo | Enhancior",
  description:
    "LOU-compliance, F-skatt, organisationsnummer och leverantörspaket för Enhancior AB. Allt du behöver för intern leverantörsgodkännande.",
  openGraph: {
    url: "https://enhancior.se/vendor-packet",
  },
  alternates: {
    canonical: "https://enhancior.se/vendor-packet",
  },
};

export default function VendorPacketPage() {
  return (
    <PathwayShell breadcrumbLabel="enterprise">
      {/* Hero */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Enterprise Compliance &amp; Leverantörsinfo
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
          Här hittar du allt som krävs för intern leverantörsgodkännande av
          Enhancior AB: organisationsnummer, F-skattstatus, bolagsform,
          certifieringar och ett nedladdningsbart leverantörspaket.
        </p>
      </div>

      {/* Business Credentials */}
      <section
        aria-label="Företagsuppgifter"
        className="mb-16 md:mb-24 lg:mb-32"
      >
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          FÖRETAGSUPPGIFTER
        </p>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-8">
          <div className="space-y-4">
            <div>
              <span className="font-mono text-sm text-[#919191]">
                Företagsnamn
              </span>
              <p className="font-mono text-base text-[#EDEDED]">
                Enhancior AB
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-[#919191]">
                Organisationsnummer
              </span>
              <p className="font-mono text-base text-[#EDEDED]">
                559244-2775
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-[#919191]">
                Bolagsform
              </span>
              <p className="font-mono text-base text-[#EDEDED]">
                Aktiebolag (AB)
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-[#919191]">
                F-skatt
              </span>
              <p className="font-mono text-base text-[#EDEDED]">
                Godkänd för F-skatt
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-[#919191]">
                Kontakt
              </span>
              <p className="font-mono text-base text-[#EDEDED]">
                rasmus.thunborg@enhancior.se
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section
        aria-label="Kvalifikationer"
        className="mb-16 md:mb-24 lg:mb-32"
      >
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          KVALIFIKATIONER
        </p>
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-8">
          <div>
            <span className="font-mono text-sm text-[#919191]">
              Erfarenhet
            </span>
            <p className="text-base text-[#EDEDED]">
              10+ år inom mjukvaruarkitektur, backend-utveckling och teknisk ledning. Specialiserad på integrationer, cloud computing och agentic AI.
            </p>
          </div>
          <div className="border-t border-[rgba(255,255,255,0.08)] pt-4 mt-4">
            <span className="font-mono text-sm text-[#919191]">
              Certifieringar
            </span>
            <p className="font-mono text-sm text-[#EDEDED]">
              TOGAF &middot; AWS Solutions Architect &middot; Placeholder
            </p>
          </div>
          <div className="border-t border-[rgba(255,255,255,0.08)] pt-4 mt-4">
            <span className="font-mono text-sm text-[#919191]">
              Tillgängliga uppdragstyper
            </span>
            <div className="mt-1 space-y-1">
              <p className="text-sm text-[#A1A1A1]">
                30-dagars teknisk revision
              </p>
              <p className="text-sm text-[#A1A1A1]">
                Teknisk ledning vid behov
              </p>
              <p className="text-sm text-[#A1A1A1]">Enterprise Rescue (arkitekt som resurs)</p>
              <p className="text-sm text-[#A1A1A1]">
                Oberoende IT-rådgivning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <EngagementTiers tierIds={["tech-rescue-audit", "fractional-retainer", "enterprise-rescue", "advisory-retainer"]} />

    </PathwayShell>
  );
}
