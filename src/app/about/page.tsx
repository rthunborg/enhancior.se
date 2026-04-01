import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ContactButton } from "./contact-button";

export const metadata: Metadata = {
  title: "Rasmus Thunborg | Senior Mjukvaruarkitekt & IT-konsult Göteborg",
  description:
    "Senior mjukvaruarkitekt och IT-konsult i Göteborg med 10+ års erfarenhet från ledande globala och nordiska bolag. Specialiserad på mjukvaruarkitektur, backend-utveckling och teknisk ledning.",
  keywords: [
    "Rasmus Thunborg",
    "mjukvaruarkitekt Göteborg",
    "senior IT-konsult Göteborg",
    "arkitekturkonsult Sverige",
    "teknisk ledning konsult",
  ],
  openGraph: {
    url: "https://enhancior.se/about",
  },
  alternates: {
    canonical: "https://enhancior.se/about",
  },
};

const clients = [
  { name: "Visma Enterprise", years: "4 mån", role: "Platform Engineer" },
  { name: "Lindex", years: "2.5 år", role: "Senior Software Engineer" },
  { name: "Polestar", years: "4 år", role: "Software Engineer / Interim Tech Lead" },
  { name: "Ikea", years: "6 mån", role: "Senior Solution Architect" },
  { name: "Ericsson", years: "1 år", role: "Backend Developer" },
  { name: "Volvo", years: "1 år", role: "Backend Developer" },
] as const;

const certifications = [
  "SnowPro Core Certification (Snowflake)",
  "Microsoft Certified: Azure Fundamentals",
  "Ledarskap 1 (Framfot AB)",
] as const;

export default function OmPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "about" }]}>
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-4">
            Rasmus Thunborg
          </h1>
          <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            Senior mjukvaruarkitekt | Göteborg
          </p>
        </div>

        {/* Intro */}
        <section className="mb-8 md:mb-12">
          <div className="max-w-2xl space-y-6 text-base text-[#A1A1A1] leading-relaxed">
            
            <div>
              <h2 className="text-lg text-[#EDEDED] font-semibold mb-2">
                Mötet mellan startup-fart och enterprise-stabilitet
              </h2>
              <p>
                Jag löser teknisk växtvärk. När era system krackelerar under tillväxten, eller när tekniska beslut tar tre veckor istället för en dag, kliver jag in och skapar struktur.
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[#EDEDED] font-semibold mb-2">
                Erfarenhet som gör skillnad
              </h2>
              <p>
                Jag tar med mig över tio års erfarenhet av tunga enterprise-backends från ledande globala och nordiska bolag in i företag som behöver skala upp utan att gå sönder på vägen. Mina verktyg är modernisering av legacy-system, microservices och molnarkitektur i AWS och Azure.
              </p>
            </div>

            <div>
              <h2 className="text-lg text-[#EDEDED] font-semibold mb-2">
                Det ni ser är det ni får
              </h2>
              <p>
                Med Enhancior är det enkelt. När ni anlitar mig får ni mig. Inga account managers och inga juniorer. Bara en erfaren mjukvaruarkitekt som gör jobbet.
              </p>
            </div>

          </div>
        </section>

        {/* Clients */}
        <section className="mb-16 md:mb-24">
          <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
            UTVALDA UPPDRAG
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-5"
              >
                <p className="font-mono text-sm text-[#F59E0B] mb-1">
                  {client.name}
                </p>
                <p className="text-sm text-[#EDEDED] mb-1">{client.role}</p>
                <p className="font-mono text-xs text-[#666666]">
                  {client.years}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Background */}
        <section className="mb-16 md:mb-24">
          <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
            BAKGRUND
          </p>
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6 sm:p-8 space-y-4">
            <div>
              <span className="font-mono text-sm text-[#919191]">
                Utbildning
              </span>
              <p className="text-base text-[#EDEDED]">
                Kandidatexamen i Software Engineering &amp; Management,
                Göteborgs universitet
              </p>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
              <span className="font-mono text-sm text-[#919191]">
                Certifieringar
              </span>
              <ul className="mt-1 space-y-1">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-[#A1A1A1]"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
              <span className="font-mono text-sm text-[#919191]">
                Specialområden
              </span>
              <p className="text-sm text-[#A1A1A1] mt-1">
                .NET / C# &middot; Azure &middot; AWS &middot;
                Microservices &middot; Event Sourcing &middot; DDD &middot;
                Kubernetes &middot; Terraform &middot; CI/CD &middot;
                Agentic AI
              </p>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
              <a
                href="/cv/rasmus-thunborg-cv.pdf"
                download
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
              >
                Ladda ner CV (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
            KONTAKT
          </p>
          <div className="space-y-3">
            <p className="text-base text-[#A1A1A1]">
              Vill ni prata om ert projekt?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton />
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 border border-[rgba(255,255,255,0.15)] hover:border-[#F59E0B] text-[#EDEDED] hover:text-[#F59E0B] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
              >
                Se case studies
              </Link>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
