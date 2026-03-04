import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Polestar: Teknisk Ledning för Finansiella Integrationer | Enhancior",
  description:
    "Hur Polestar fick senior teknisk ledning som drev arkitekturbeslut, mentorskapade teamet och stabiliserade komplexa finansiella integrationer.",
};

const metrics: CaseStudyMetric[] = [
  {
    label: "Team velocity",
    before: "Baseline",
    after: "+45%",
    delta: "↑ 45%",
    improvement: "positive",
  },
  {
    label: "Uptime",
    before: "98.5%",
    after: "99.9%",
    delta: "↑ 1.4pp",
    improvement: "positive",
  },
  {
    label: "Onboarding",
    before: "3 månader",
    after: "3 veckor",
    delta: "↓ 77%",
    improvement: "positive",
  },
  {
    label: "Säkerhetsincidenter",
    before: "Varierande",
    after: "0",
    delta: "↓ 100%",
    improvement: "positive",
  },
];

export default function PolestarCaseStudyPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <CaseStudyLayout
        title="Teknisk Ledning för Finansiella Integrationer"
        industry="Fordon / FinTech"
        timeline="4 år (2021–2025)"
        problemNarrative={
          <>
            <p className="mb-4">
              Polestars customer-financing journey krävde integrationer mot
              flera externa finansiella leverantörer. Systemet kördes på AWS
              serverless men saknade senior teknisk ledning.
              Arkitekturbeslut fattades ad hoc och onboarding av nya
              utvecklare tog tre månader.
            </p>
            <p className="mb-4">
              Varje ny leverantörsintegration innebar osäkerhet kring
              OAuth2-flöden, TLS-konfiguration och datamodellering. Utan en
              tydlig teknisk riktning växte komplexiteten snabbare än
              teamets förmåga att hantera den.
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
                Interim Tech Lead:
              </strong>{" "}
              Satte teknisk riktning tillsammans med solution architect,
              koordinerade genomförandet och jobbade tätt med Digital
              Lead/PO. Drev arkitekturbeslut från dag ett.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                AWS Lambda/DynamoDB serverless:
              </strong>{" "}
              Feature-implementation på serverless-stack med .NET,
              TypeScript och React. Automatiserade tester och
              Terraform-baserad infrastruktur.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Mentoring och kunskapsöverföring:
              </strong>{" "}
              Strukturerad mentoring av utvecklare. Dokumenterad
              arkitekturvision och beslutsdagbok som minskade
              onboarding-tiden från tre månader till tre veckor.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Datadog/Kibana monitoring:
              </strong>{" "}
              Post-production monitoring som gav teamet realtidsinsyn i
              systemhälsa och prestanda.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Under de fyra år jag samarbetade med Polestar ökade teamets velocity med
              45%. Uptime förbättrades från 98.5% till 99.9% och
              onboarding-tiden minskade från tre månader till tre veckor.
            </p>
            <p>
              Den strukturerade tekniska ledningen gav Polestar en stabil
              grund för sina finansiella integrationer. Teamet kunde hantera
              nya leverantörer med förtroende och noll säkerhetsincidenter
              under hela uppdragsperioden.
            </p>
          </>
        }
      />
    </div>
  );
}
