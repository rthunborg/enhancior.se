import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodik | Enhancior",
  description:
    "Så arbetar Enhancior: en strukturerad metodik i fyra faser — Diagnos, Insats, Överföring och Avslut. Ingen vag rådgivning, bara konkret förändring.",
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
      "Hands-on implementation sida vid sida med ert team. Jag driver arkitekturbeslut, implementerar lösningar och ser till att förändringar levereras. Ingen teori utan resultat, bara konkret execution.",
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
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        <div className="mb-16 md:mb-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
            Så arbetar jag
          </h1>
          <p className="text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed">
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
      </div>
    </div>
  );
}
