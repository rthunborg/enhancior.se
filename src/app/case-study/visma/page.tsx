import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Visma: Automatiserad Credential-Rotation | Enhancior",
  description:
    "Hur Visma Enterprise gick från manuellt hanterade credentials till automatiserad rotation var 30:e dag med AWS Lambda och GitHub Actions.",
};

const metrics: CaseStudyMetric[] = [
  {
    label: "Credential-rotation",
    before: "Manuell",
    after: "Var 30:e dag",
    delta: "Automatiserad",
    improvement: "positive",
  },
  {
    label: "Deploy-process",
    before: "Manuell",
    after: "CI/CD",
    delta: "Automatiserad",
    improvement: "positive",
  },
  {
    label: "Miljöer",
    before: "1",
    after: "3",
    delta: "Test/Staging/Prod",
    improvement: "positive",
  },
  {
    label: "Säkerhetsrisk",
    before: "Hög",
    after: "Minimal",
    delta: "↓ Signifikant",
    improvement: "positive",
  },
];

export default function VismaCaseStudyPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <CaseStudyLayout
        title="Automatiserad Credential-Rotation"
        industry="HR-Tech / Enterprise SaaS"
        timeline="4 månader (2026)"
        problemNarrative={
          <>
            <p className="mb-4">
              Vismas HR-plus-plattform hanterar känslig HR- och lönedata åt
              deras kunder. Tjänstekonton mot MSSQL-databaser och
              RabbitMQ-köer hade historiskt hanterats manuellt, med lösenord
              som sällan eller aldrig byttes ut.
            </p>
            <p className="mb-4">
              Varje credential som inte roteras är en säkerhetsrisk. Med
              regulatoriska krav på hantering av känslig personaldata var
              situationen inte acceptabel.
            </p>
            <p>
              Visma behövde en automatiserad lösning som roterar credentials
              via AWS Secrets Manager, utan driftstörningar för
              slutanvändarna, och en miljöstrategi som möjliggör trygg
              testning innan produktionsdeploy.
            </p>
          </>
        }
        architectureViewer={
          <div className="border border-dashed border-[rgba(255,255,255,0.15)] rounded p-12 flex items-center justify-center">
            <p className="font-mono text-sm text-[#919191]">
              Arkitekturdiagram kommer snart
            </p>
          </div>
        }
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                Lambda-funktion (.NET 8 Native AOT):
              </strong>{" "}
              Tog en färdigutvecklad Lambda-funktion från utvecklingsmiljö
              till produktionsklar driftsättning. Native AOT för minimal
              kallstarttid.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                CI/CD i GitHub Actions:
              </strong>{" "}
              Design och implementation av pipelines för bygge, testning och
              uppladdning av Lambda-artefakter till S3. Branch protection
              och kodgranskningsflöden.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                CloudFormation + IAM least privilege:
              </strong>{" "}
              Infrastruktur som kod med minimala behörigheter. Varje
              komponent har exakt de rättigheter den behöver, inget mer.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                3-miljöstrategi:
              </strong>{" "}
              Separata AWS-konton för test, staging och produktion med
              miljöspecifika parametrar. Förändringar valideras i varje steg
              innan de når produktion.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Credentials roteras nu automatiskt var 30:e dag utan
              driftstörningar. Deploy-processen gick från manuell till
              helautomatiserad med CI/CD, och plattformen har nu tre
              separata miljöer istället för en.
            </p>
            <p>
              Säkerhetsrisken minskade från hög till minimal.
              Plattformsteamet har en dokumenterad driftsättningsordning och
              kan hantera framtida förändringar med förtroende.
            </p>
          </>
        }
      />
    </div>
  );
}
