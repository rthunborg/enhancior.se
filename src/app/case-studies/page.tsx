import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Kundcase | IT-konsult & Mjukvaruarkitekt – Enhancior",
  description:
    "Verkliga uppdrag med mätbara resultat. Se hur Enhancior har hjälpt ledande nordiska och globala företag med arkitektur, teknisk ledning och modernisering.",
  keywords: [
    "IT-konsult kundcase",
    "mjukvaruarkitekt uppdrag",
    "legacy modernisering case study",
    "teknisk revision resultat",
    "enterprise arkitektur",
  ],
  openGraph: {
    url: "https://enhancior.se/case-studies",
  },
  alternates: {
    canonical: "https://enhancior.se/case-studies",
  },
};

const caseStudies = [
  {
    slug: "nordiskt-rederi",
    company: "Nordiskt Rederi",
    title: "Från Excel-kaos till realtidsplattform för säsongsrekrytering",
    summary:
      "Ersatte manuella Excel-flöden med en modern realtidsplattform med rollbaserad åtkomst för sju externa parter, ändringslogg och GDPR-grund.",
    metric: { label: "Datadelning", delta: "↓ ~95%" },
    industry: "Maritim / HR-operations",
    timeline: "4 månader (2025–2026)",
  },
  {
    slug: "nordeuropeisk-hr-koncern",
    company: "Nordeuropeisk HR-Koncern",
    title: "Automatiserad Credential-Rotation",
    summary:
      "Från manuellt hanterade credentials till automatiserad rotation var 30:e dag med AWS Lambda och GitHub Actions.",
    metric: { label: "Säkerhetsrisk", delta: "Hög → Minimal" },
    industry: "HR-Tech / Enterprise SaaS",
    timeline: "4 månader (2026)",
  },
  {
    slug: "ledande-nordisk-modekedja",
    company: "Ledande Nordisk Modekedja",
    title: "Från Legacy till Eventdriven Arkitektur",
    summary:
      "Moderniserade legacy-system för order, lager och WMS med .NET microservices, event sourcing och Azure/Kubernetes.",
    metric: { label: "Incidenter", delta: "↓ 88%" },
    industry: "Retail / Global E-handel",
    timeline: "2.5 år (on demand)",
  },
  {
    slug: "varlsledande-mobelkoncern",
    company: "Världsledande Möbelkoncern",
    title: "Backend-Arkitektur för 3D-Modellering",
    summary:
      "Komplett .NET backend-arkitektur för intern 3D-modelleringsapp, inklusive IAM, CI/CD och legacy-migration.",
    metric: { label: "Design till MVP", delta: "8 veckor" },
    industry: "Detaljhandel / Enterprise",
    timeline: "6 månader (2021)",
  },
  {
    slug: "varlsledande-elbilstillverkare",
    company: "Världsledande Elbilstillverkare",
    title: "Teknisk Ledning för Finansiella Integrationer",
    summary:
      "Senior teknisk ledning som drev arkitekturbeslut, handledde teamet och stabiliserade komplexa finansiella integrationer.",
    metric: { label: "Team velocity", delta: "+45%" },
    industry: "Fordon / FinTech",
    timeline: "4 år (2021–2025)",
  }

] as const;

const cardClasses =
  "group block bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6 sm:p-8 hover:border-[rgba(245,158,11,0.3)] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

export default function CaseStudiesPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "case-studies" }]}>
        <div className="mb-12 md:mb-16">
          <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            Verkliga uppdrag med mätbara resultat. Varje case är ett riktigt
            projekt, med riktiga utmaningar och konkreta förbättringar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className={cardClasses}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#919191] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1">
                  {study.industry}
                </span>
                <span className="font-mono text-xs text-[#666666]">
                  {study.timeline}
                </span>
              </div>

              <p className="font-mono text-sm text-[#F59E0B] mb-2">
                {study.company}
              </p>
              <h2 className="text-xl font-bold text-[#EDEDED] mb-3 group-hover:text-[#F59E0B] transition-colors duration-200">
                {study.title}
              </h2>
              <p className="text-sm text-[#A1A1A1] leading-relaxed mb-4">
                {study.summary}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                <span className="font-mono text-xs text-[#919191]">
                  {study.metric.label}:
                </span>
                <span className="font-mono text-sm font-semibold text-[#F59E0B]">
                  {study.metric.delta}
                </span>
              </div>
            </Link>
          ))}
        </div>
    </PageShell>
  );
}
