import type { Metadata } from "next";
import { PathwayShell } from "@/components/pathway/pathway-shell";
import { TeknikbehovSelector } from "@/components/triage/teknikbehov-selector";

export const metadata: Metadata = {
  title: "Teknikbehov — Bygg eller Köp? | Enhancior",
  description:
    "Ni vet att ni behöver teknisk hjälp. Bygger ni egen teknik eller köper ni in IT-system? Vi hjälper er oavsett väg.",
};

export default function TeknikbehovPage() {
  return (
    <PathwayShell breadcrumbSegments={[{ label: "teknikbehov" }]}>
      <div className="mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
        Ni vet att ni behöver förstärkning. Låt oss reda ut exakt vilken typ.
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed mb-12">
          Er situation avgör vilken typ av stöd som gör mest nytta. Välj det som
          bäst beskriver er.
        </p>

        <TeknikbehovSelector />
      </div>
    </PathwayShell>
  );
}
