import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { ArchitectureViewer } from "@/components/architecture";
import {
  PlaceholderBefore,
  PlaceholderIntervention,
  PlaceholderAfter,
} from "@/components/architecture";

export const metadata: Metadata = {
  title: "LogTech CI/CD-Räddning — Fallstudie | Enhancior",
  description:
    "Hur en logistik SaaS-plattform gick från 40% build-success till 98% på 30 dagar.",
};

const metrics: CaseStudyMetric[] = [
  {
    label: "Deploy-frekvens",
    before: "1/vecka",
    after: "4/dag",
    delta: "↑ 2700%",
    improvement: "positive",
  },
  {
    label: "Incidenter",
    before: "4/månad",
    after: "1/månad",
    delta: "↓ 73%",
    improvement: "positive",
  },
  {
    label: "Lead time",
    before: "14 dagar",
    after: "2 dagar",
    delta: "↓ 86%",
    improvement: "positive",
  },
  {
    label: "Build-success",
    before: "40%",
    after: "98%",
    delta: "↑ 145%",
    improvement: "positive",
  },
];

export default function LogtechCaseStudyPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <CaseStudyLayout
        title="LogTech CI/CD-Räddning"
        industry="Logistik SaaS"
        timeline="30 dagar"
        problemNarrative={
          <>
            <p className="mb-4">
              LogTech hade byggt en lovande SaaS-plattform för logistikhantering
              — men deras CI/CD-pipeline hade blivit en flaskhals. Över 60% av
              alla builds misslyckades, och teamet spenderade mer tid på att
              felsöka deployments än på att bygga nya funktioner. Lead time från
              commit till produktion låg på 14 dagar.
            </p>
            <p className="mb-4">
              Produktionsincidenter inträffade varje vecka. Varje deploy var en
              manuell process som krävde att en senior utvecklare satt och
              övervakade hela kedjan. Teamet hade tappat förtroendet för sin
              egen release-process och undvek att deploya om det inte var
              absolut nödvändigt.
            </p>
            <p>
              Situationen hade börjat påverka affären. Säljteamet kunde inte
              lova snabba leveranser till nya kunder, och befintliga kunder
              rapporterade instabilitet i plattformen. Något behövde förändras
              — snabbt.
            </p>
          </>
        }
        architectureViewer={
          <ArchitectureViewer
            beforeContent={PlaceholderBefore}
            interventionContent={PlaceholderIntervention}
            afterContent={PlaceholderAfter}
          />
        }
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                Pipeline-omstrukturering:
              </strong>{" "}
              Bröt upp den monolitiska build-pipelinen i isolerade steg med
              tydliga kontraktsgränser. Varje steg kunde köras och valideras
              oberoende, vilket eliminerade kaskadfel.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Automatiserad testtäckning:
              </strong>{" "}
              Införde quality gates med minimikrav på testtäckning. Inga merges
              tilläts utan godkänd testsvit. Resultatet: defekter fångades
              innan de nådde produktion.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Blue-green deployment:
              </strong>{" "}
              Implementerade en blue-green deployment-strategi som möjliggjorde
              zero-downtime releases och omedelbar rollback vid problem. Teamet
              kunde deploya med förtroende.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Inom 30 dagar hade LogTechs team gått från att frukta varje
              deploy till att leverera fyra gånger om dagen — med förtroende.
              Build-success-raten steg från 40% till 98%, och
              produktionsincidenter minskade med 73%.
            </p>
            <p>
              Den nya leveransförmågan öppnade affärsmöjligheter som tidigare
              varit omöjliga. LogTech kunde erbjuda enterprise-kunder SLA:er
              med garanterad uptime och snabba feature-leveranser. Inom
              kvartalet efter insatsen hade de tecknat tre nya enterprise-avtal
              som de tidigare tvingats tacka nej till.
            </p>
          </>
        }
      />
    </div>
  );
}
