import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Arbetsmetodik | Hur en IT-konsult driver förändring – Enhancior",
  description:
    "Fyra faser: Diagnos, Insats, Överföring och Avslut. Ingen vag rådgivning — en senior IT-konsult och mjukvaruarkitekt som driver konkret förändring från dag ett.",
  keywords: [
    "IT-konsult metodik",
    "teknisk revision process",
    "mjukvaruarkitekt arbetssätt",
    "legacy modernisering metod",
  ],
  openGraph: {
    url: "https://enhancior.se/metodik",
  },
  alternates: {
    canonical: "https://enhancior.se/metodik",
  },
};

const phases = [
  {
    number: "01",
    name: "Diagnos",
    tagline: "Förstå problemet innan något annat",
    description:
      "Djupanalys av kodbas, arkitektur och leveransprocesser. Jag kartlägger flaskhalsar, teknisk skuld och organisatoriska mönster. Ni får en tydlig bild av var ni står och vad som behöver prioriteras.",
    deliverable: "Åtgärdsplan rankad efter affärsnytta och teknisk risk",
  },
  {
    number: "02",
    name: "Insats",
    tagline: "Händerna i koden, inte bara PowerPoint",
    description:
      "Hands-on implementation sida vid sida med ert team. Jag driver arkitekturbeslut, implementerar lösningar och ser till att förändringar levereras. Ingen teori utan resultat, bara konkret genomförande.",
    deliverable: "Implementerade förbättringar med mätbara resultat",
  },
  {
    number: "03",
    name: "Överföring",
    tagline: "Ert team äger resultatet",
    description:
      "Strukturerad kunskapsöverföring så att ert team kan förvalta och vidareutveckla lösningen. Dokumentation, mentoring och pair programming tills teamet är självständigt.",
    deliverable: "Dokumenterad arkitektur och ett team som äger den",
  },
  {
    number: "04",
    name: "Avslut",
    tagline: "Ren exit, inga konstlade beroenden",
    description:
      "När ert team är stabilt och lösningen är överlämnad tar jag ett steg tillbaka. Inget kvardröj, inga artificiella beroenden. Ni är starkare än innan jag kom in.",
    deliverable: "En organisation som inte längre behöver mig",
  },
] as const;

export default function MetodikPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "metodik" }]}>
        <div className="mb-12 md:mb-16">
          <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            Varje uppdrag följer samma struktur: identifiera problemet, lös det,
            överför kompetensen, lämna. Ingen forever-consulting, bara konkret
            förändring.
          </p>
        </div>

        <div className="space-y-0">
          {phases.map((phase, index) => (
            <section
              key={phase.number}
              className={`py-12 md:py-16 ${index < phases.length - 1 ? "border-b border-[rgba(255,255,255,0.08)]" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12">
                <div>
                  <span className="font-mono text-4xl font-bold text-[rgba(245,158,11,0.2)]">
                    {phase.number}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#EDEDED] mb-1">
                    {phase.name}
                  </h2>
                  <p className="font-mono text-sm text-[#F59E0B] mb-4">
                    {phase.tagline}
                  </p>
                  <p className="text-base text-[#A1A1A1] leading-relaxed mb-6 max-w-[540px]">
                    {phase.description}
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#919191] uppercase tracking-widest whitespace-nowrap pt-0.5">
                      Leverabel
                    </span>
                    <p className="text-sm text-[#EDEDED]">
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
    </PageShell>
  );
}
