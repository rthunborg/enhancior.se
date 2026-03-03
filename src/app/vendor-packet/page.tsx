import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import { EngagementTiers } from "@/components/engagement-tiers";

export const metadata: Metadata = {
  title: "Enterprise Compliance & Leverantörsinfo | Enhancior",
  description:
    "LOU-compliance, F-skatt, organisationsnummer och leverantörspaket för Enhancior AB. Allt du behöver för intern leverantörsgodkännande.",
};

export default function VendorPacketPage() {
  return (
    <PathwayShell breadcrumbLabel="enterprise">
      {/* Hero */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Enterprise Compliance &amp; Leverantörsinfo
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed">
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
                559XXX-XXXX
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
                Verksamhetstyp
              </span>
              <p className="font-mono text-base text-[#EDEDED]">
                Enskild konsult: Mjukvaruarkitektur och teknisk ledning
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
              15+ år inom mjukvaruarkitektur, SaaS-plattformar och teknisk
              ledning
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
                30-dagars Teknisk Revision
              </p>
              <p className="text-sm text-[#A1A1A1]">
                Teknisk ledning på deltid
              </p>
              <p className="text-sm text-[#A1A1A1]">Enterprise Rescue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <EngagementTiers emphasizedTierId="enterprise-rescue" />

      {/* Vendor Packet Download */}
      <section aria-label="Leverantörspaket">
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          LEVERANTÖRSPAKET
        </p>
        <p className="text-base text-[#A1A1A1] leading-relaxed mb-6 max-w-[600px]">
          Leverantörspaketet innehåller CV, certifieringar, referensuppdrag och
          prisintervall, allt samlat i ett dokument för intern kvalificering.
        </p>
        <div className="flex flex-col items-start">
          <a
            href="/Enhancior_AB_Vendor_Packet.pdf"
            download
            aria-label="Ladda ner leverantörspaket som PDF-fil"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none w-full sm:w-auto"
          >
            Ladda ner leverantörspaket (PDF)
          </a>
          <p className="font-mono text-xs text-[#919191] mt-3">
            Innehåller CV, certifieringar, referensuppdrag och prisintervall
          </p>
        </div>
      </section>
    </PathwayShell>
  );
}
