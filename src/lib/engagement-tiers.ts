import { calendly } from "./site-config";

export interface EngagementTier {
  id: string;
  name: string;
  tagline: string;
  scope: string;
  timeline: string;
  startingPrice: string;
  deliverables: string[];
  ctaLabel: string;
  ctaHref: string;
}

function getCalendlyUrl(tierSlug: string): string {
  const url = new URL(calendly.baseUrl);
  url.searchParams.set("utm_source", "enhancior.se");
  url.searchParams.set("utm_medium", "tier_cta");
  url.searchParams.set("utm_campaign", tierSlug);
  return url.toString();
}

export const engagementTiers: EngagementTier[] = [
  {
    id: "tech-rescue-audit",
    name: "30-dagars Teknisk Revision",
    tagline: "För system som dränerar sprint-kapacitet och bromsar leveransen",
    scope:
      "Djupanalys av kodbas, arkitektur och leveransprocesser under 30 dagar. Ni får en konkret åtgärdsplan rankad efter affärsnytta och teknisk risk, redo att implementera dag 31.",
    timeline: "30 dagar",
    startingPrice: "Från 180 000 kr",
    deliverables: [
      "Komplett arkitekturbedömning med identifierade flaskhalsar",
      "Prioriterad åtgärdsplan rankad efter affärsnytta",
      "Mätbara förbättringsmål med baseline-värden",
      "Konkret roadmap för de första 90 dagarna",
    ],
    ctaLabel: calendly.ctaLabel,
    ctaHref: getCalendlyUrl("rescue-audit"),
  },
  {
    id: "fractional-retainer",
    name: "Teknisk ledning på deltid",
    tagline: "En inbäddad arkitekt som driver beslut och stannar tills ert team är stabilt",
    scope:
      "Senior arkitekt som integreras i ert team 1–2 dagar per vecka. Driver arkitekturbeslut, mentorskapar teamet och stabiliserar er tekniska grund. Hjälper er hitta en permanent ersättare när ni är redo.",
    timeline: "Löpande · 1–2 dagar/vecka",
    startingPrice: "Från 45 000 kr/mån",
    deliverables: [
      "Kontinuerligt arkitekturstöd och teknisk mentorship",
      "Dokumenterad arkitekturvision och beslutsdagbok",
      "Strukturerad kunskapsöverföring till ert team",
      "Stöd vid rekrytering av permanent teknisk ledare",
    ],
    ctaLabel: calendly.ctaLabel,
    ctaHref: getCalendlyUrl("fractional-retainer"),
  },
  {
    id: "enterprise-rescue",
    name: "Enterprise Rescue",
    tagline: "Storskalig modernisering av legacysystem",
    scope:
      "Djupgående moderniseringsuppdrag för enterprise-system som kräver modernisering. Compliance-säkrad process med full transparens, från diagnostik till leverans.",
    timeline: "3–12 månader",
    startingPrice: "Offertbaserad",
    deliverables: [
      "Enterprise-anpassad moderniseringsplan med compliance-verifiering",
      "Fasad migration med minimerad affärsrisk",
      "Löpande statusrapportering och styrelseklar dokumentation",
    ],
    ctaLabel: calendly.ctaLabel,
    ctaHref: getCalendlyUrl("enterprise-rescue"),
  },
];
