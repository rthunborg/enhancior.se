import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { IkeaDiagram } from "@/components/case-study/diagrams/ikea-diagram";

export const metadata: Metadata = {
  title:
    "IKEA Inreda: Backend-Arkitektur för 3D-Modellering | Enhancior",
  description:
    "Hur IKEA fick en komplett .NET backend-arkitektur för sin interna 3D-modelleringsapp, inklusive IAM, CI/CD och legacy-migration.",
  openGraph: {
    url: "https://enhancior.se/case-study/ikea",
  },
  alternates: {
    canonical: "https://enhancior.se/case-study/ikea",
  },
};

const metrics: CaseStudyMetric[] = [
  {
    label: "Design till MVP",
    before: "—",
    after: "8 veckor",
    delta: "Levererat",
    improvement: "positive",
  },
  {
    label: "API-endpoints",
    before: "0",
    after: "24 st",
    delta: "Ny backend",
    improvement: "positive",
  },
  {
    label: "AD-compliance",
    before: "Saknad",
    after: "100%",
    delta: "Full compliance",
    improvement: "positive",
  },
  {
    label: "Legacy-kartläggning",
    before: "Nada",
    after: "Fullständig",
    delta: "Komplett plan",
    improvement: "positive",
  },
];

export default function IkeaCaseStudyPage() {
  return (
      <CaseStudyLayout
        slug="ikea"
        title="Backend-Arkitektur för 3D-Modellering"
        industry="Detaljhandel / Enterprise"
        timeline="6 månader (2021)"
        problemNarrative={
          <>
            <p className="mb-4">
              IKEA utvecklade Inreda, en ny intern applikation för
              3D-modellering. Projektet behövde en komplett .NET
              backend-arkitektur från grunden: autentisering,
              auktorisering, API-design och datamodell.
            </p>
            <p className="mb-4">
              Parallellt fanns en äldre Python-backend som hanterade
              befintliga integrationer. Systemet var odokumenterat och ingen
              i teamet hade fullständig kunskap om dess funktionalitet.
              Migrationen krävde reverse engineering innan den kunde
              planeras.
            </p>
            <p>
              IKEA behövde en senior arkitekt som kunde designa hela
              backend-lagret, integrera med Active Directory och samtidigt
              kartlägga legacy-systemet för en ordnad övergång.
            </p>
          </>
        }
        architectureViewer={<IkeaDiagram />}
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                .NET backend-arkitektur från grunden:
              </strong>{" "}
              Designade och implementerade hela backend-lösningen med
              tydlig domänmodell, API-kontrakt och säkerhetsarkitektur.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                IAM med Active Directory och Microsoft Graph:
              </strong>{" "}
              Identitets- och åtkomsthantering baserad på IKEAs befintliga
              Active Directory. Integration med Microsoft Graph och Azure
              AD för robust autentisering och auktorisering.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                CI/CD i Azure DevOps:
              </strong>{" "}
              Automatiserade pipelines för bygge, testning och deployment.
              MongoDB-datamodell optimerad för 3D-modelldata.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Reverse engineering av Python-legacy:
              </strong>{" "}
              Kartlade befintliga integrationer och funktionalitet i den
              odokumenterade Python-backenden. Definierade en komplett
              migrationsstrategi till den nya plattformen.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Inom åtta veckor var MVP:n levererad med 24 API-endpoints,
              full AD-compliance och en komplett datamodell i MongoDB.
              Teamet hade en produktionsklar backend att bygga vidare på.
            </p>
            <p>
              Legacy-kartläggningen gav IKEA en tydlig bild av vad som
              behövde migreras och i vilken ordning. Migrationsplanen
              minimerade risken för avbrott och gav projektet en trygg väg
              framåt.
            </p>
          </>
        }
      />
  );
}
