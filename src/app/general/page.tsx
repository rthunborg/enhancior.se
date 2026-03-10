import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";

import { ContactCTA } from "./contact-cta";

export const metadata: Metadata = {
  title: "IT-konsulting & Teknisk Rådgivning | Enhancior",
  description:
    "Osäker på vad ni behöver? Enhancior hjälper er identifiera rätt teknisk insats, oavsett om det gäller arkitektur, teamförstärkning eller teknisk rådgivning.",
  keywords: [
    "IT-konsulting",
    "teknisk rådgivning",
    "IT-hjälp företag",
    "teknisk konsult Göteborg",
    "IT-rådgivare",
  ],
  openGraph: {
    url: "https://enhancior.se/general",
  },
  alternates: {
    canonical: "https://enhancior.se/general",
  },
};

export default function GenerelltPage() {
  return (
    <PathwayShell breadcrumbSegments={[{ label: "general" }]}>
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          Inte alla problem passar i en färdig låda
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
          Ibland vet man att något inte fungerar, utan att kunna peka på exakt
          vad. Det är helt okej. Jag hjälper er ta reda på det.
        </p>
      </div>

      {/* What a first conversation looks like */}
      <section aria-label="Hur ett första samtal ser ut" className="mb-16 md:mb-24 lg:mb-32">
        <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
          HUR DET FUNGERAR
        </p>
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Informellt samtal, inga förpliktelser
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Jag lyssnar på er situation och ställer de rätta frågorna. Inget
              säljsnack, bara ett ärligt samtal om vad som kan göra skillnad.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Jag identifierar kärnan
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Ofta visar sig problemet vara tydligare än man tror. Jag hjälper er
              formulera det så att ni kan fatta informerade beslut.
            </p>
          </div>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
            <p className="text-base font-semibold text-[#EDEDED] mb-1">
              Konkret rekommendation
            </p>
            <p className="text-sm text-[#A1A1A1]">
              Ni får en rak bedömning, oavsett om lösningen är något jag kan
              hjälpa med eller inte.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-label="Kontakt" className="mb-16 md:mb-24 lg:mb-32 text-center">
        <p className="text-lg text-[#A1A1A1] mb-8">
          Redo att ta ett första steg? Hör av er så tar vi ett snack!
        </p>
        <ContactCTA />
      </section>
    </PathwayShell>
  );
}
