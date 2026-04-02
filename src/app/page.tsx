import type { Metadata } from "next";
import { TriageSelector } from "@/components/triage/triage-selector";
import { TeaserCard } from "@/components/homepage/teaser-card";
import { HomepageCTAs } from "./homepage-ctas";

export const metadata: Metadata = {
  title: "IT-konsult Göteborg | Senior Mjukvaruarkitekt – Enhancior",
  description:
    "Senior IT-konsult och mjukvaruarkitekt i Göteborg. Teknisk revision, mjukvaruarkitekt som deltar regelbundet i ert team, och legacy-modernisering för SaaS och enterprise i Sverige.",
  openGraph: {
    url: "https://enhancior.se",
  },
  alternates: {
    canonical: "https://enhancior.se",
  },
};

const teasers = [
  {
    heading: "Arbetsmetodik",
    hook: "En strukturerad metodik i fyra faser - från diagnos till leverans.",
    href: "/methodology",
  },
  {
    heading: "Tjänster",
    hook: "Olika uppdragsformer med tydlig omfattningar och tidslinjer.",
    href: "/services",
  },
  {
    heading: "Kundcase",
    hook: "Verkliga uppdrag med mätbara resultat.",
    href: "/case-studies",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#0A0A0A] px-4">
      <div className="w-full max-w-2xl py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="mb-6 space-y-1 text-center text-sm leading-relaxed text-[#A1A1A1]">
          <p>Senior mjukvaruarkitekt.</p>
          <p>Teknisk ledning.</p>
          <p>Deltid eller uppdrag.</p>
        </div>
        <div
          className="mx-auto mb-10 flex max-w-sm items-center gap-4 px-4"
          aria-hidden="true"
        >
          <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-transparent via-[rgba(245,158,11,0.35)] to-[rgba(245,158,11,0.08)]" />
          <div className="size-1.5 shrink-0 rotate-45 border border-[#F59E0B]/45 bg-[#F59E0B]/15 shadow-[0_0_12px_rgba(245,158,11,0.2)]" />
          <div className="h-px min-w-0 flex-1 bg-gradient-to-l from-transparent via-[rgba(245,158,11,0.35)] to-[rgba(245,158,11,0.08)]" />
        </div>
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Vad är det som bromsar er?
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-[#A1A1A1]">
          Om du känner igen situationen i frågan: välj det alternativ som ligger
          närmast er verklighet nedan för att gå vidare.
        </p>
        <TriageSelector />
      </div>

      <div className="w-full max-w-4xl pb-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {teasers.map((teaser) => (
            <TeaserCard key={teaser.href} {...teaser} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl pb-16">
        <HomepageCTAs />
      </div>
    </div>
  );
}
