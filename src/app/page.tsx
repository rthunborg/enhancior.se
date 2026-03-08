import type { Metadata } from "next";
import { TriageSelector } from "@/components/triage/triage-selector";
import { TeaserCard } from "@/components/homepage/teaser-card";
import { HomepageCTAs } from "./homepage-ctas";

export const metadata: Metadata = {
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
    href: "/metodik",
  },
  {
    heading: "Tjänster",
    hook: "Olika uppdragsformer med tydlig omfattningar och tidslinjer.",
    href: "/tjanster",
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
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Vad är det som bromsar er?
        </h1>
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
