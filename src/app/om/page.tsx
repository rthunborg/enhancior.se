import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om Rasmus Thunborg | Enhancior",
  description:
    "Senior mjukvaruarkitekt med 10+ års erfarenhet från IKEA, Polestar, Lindex och Visma. Specialiserad på arkitektur, backend-utveckling och teknisk ledning.",
};

const clients = [
  { name: "Polestar", years: "4 år", role: "Interim Tech Lead" },
  { name: "Lindex", years: "2.5 år", role: "Senior Software Engineer" },
  { name: "IKEA", years: "6 mån", role: "Senior Solution Architect" },
  { name: "Visma", years: "4 mån", role: "Platform Engineer" },
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
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        <div className="mb-16 md:mb-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
            Rasmus Thunborg
          </h1>
          <p className="text-lg text-[#A1A1A1] max-w-[600px] leading-relaxed">
            Senior mjukvaruarkitekt. 10+ års erfarenhet från enterprise-system
            till startup-skalning. Göteborg.
          </p>
        </div>

        {/* Intro */}
        <section className="mb-16 md:mb-24">
          <div className="max-w-[600px] space-y-4 text-base text-[#A1A1A1] leading-relaxed">
            <p>
              Jag hjälper bolag som har växtvärk i sin teknik. Systemen som
              fungerade för två år sedan börjar krackelera, teamet växer
              snabbare än arkitekturen, och beslut som borde ta en dag tar tre
              veckor.
            </p>
            <p>
              Min bakgrund är nästan tio år i enterprise-backends — från Volvo
              och Ericsson till IKEA, Polestar och Lindex. Jag har byggt
              microservices, lett team och moderniserat legacy-system i både
              AWS- och Azure-miljöer.
            </p>
            <p>
              När ni anlitar Enhancior får ni mig. Inte en account manager, inte
              en junior som lånar sig in, utan arkitekten som gör jobbet. Det
              är hela poängen med att driva eget.
            </p>
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
              <a
                href="mailto:rasmus.thunborg@enhancior.se"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
              >
                rasmus.thunborg@enhancior.se
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 border border-[rgba(255,255,255,0.15)] hover:border-[#F59E0B] text-[#EDEDED] hover:text-[#F59E0B] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
              >
                Se case studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
