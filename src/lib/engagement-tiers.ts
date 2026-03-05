import { booking } from "./site-config";

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

export const engagementTiers: EngagementTier[] = [
  {
    id: "tech-rescue-audit",
    name: "30-dagars teknisk revision",
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
    ctaLabel: booking.ctaLabel,
    ctaHref: booking.baseUrl,
  },
  {
    id: "fractional-retainer",
    name: "Teknisk ledning vid behov",
    tagline: "En inbäddad arkitekt som driver beslut och stannar tills ert team är stabilt",
    scope:
      "Senior arkitekt som integreras i ert team 1–2 dagar per vecka. Driver arkitekturbeslut, handleder teamet och stabiliserar er tekniska grund. Hjälper er hitta en permanent ersättare när ni är redo.",
    timeline: "Löpande · 1–2 dagar/vecka",
    startingPrice: "Från 45 000 kr/mån",
    deliverables: [
      "Kontinuerligt arkitekturstöd och teknisk mentorship",
      "Dokumenterad arkitekturvision och beslutsdagbok",
      "Strukturerad kunskapsöverföring till ert team",
      "Stöd vid rekrytering av permanent teknisk ledare",
    ],
    ctaLabel: booking.ctaLabel,
    ctaHref: booking.baseUrl,
  },
  {
    id: "enterprise-rescue",
    name: "Enterprise Rescue (arkitekt som resurs)",
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
    ctaLabel: booking.ctaLabel,
    ctaHref: booking.baseUrl,
  },
  {
    id: "advisory-quick-review",
    name: "Snabbgranskning",
    tagline: "Oberoende second opinion innan ni skriver på",
    scope:
      "En erfaren arkitekt granskar leverantörens förslag, avtal och tekniska lösning under 1–2 veckor. Ni får en ärlig bedömning av risker, dolda kostnader och alternativ — innan ni binder er.",
    timeline: "1–2 veckor",
    startingPrice: "Från 45 000 kr",
    deliverables: [
      "Oberoende granskning av leverantörens tekniska förslag",
      "Riskanalys med identifierade dolda kostnader",
      "Konkret rekommendation: signera, omförhandla eller avbryt",
    ],
    ctaLabel: "Boka ett kostnadsfritt orienteringssamtal",
    ctaHref: booking.baseUrl,
  },
  {
    id: "advisory-procurement",
    name: "Upphandlingsstöd",
    tagline: "Teknisk expertis genom hela upphandlingsprocessen",
    scope:
      "Komplett tekniskt stöd från kravspecifikation till avtalsskrivning. Ni får en oberoende expert som säkerställer att ni ställer rätt krav, utvärderar rätt och förhandlar från en styrkeposition.",
    timeline: "2–4 månader",
    startingPrice: "Från 120 000 kr",
    deliverables: [
      "Teknisk kravspecifikation anpassad för upphandling",
      "Oberoende utvärdering av leverantörsförslag",
      "Förhandlingsstöd med teknisk argumentation",
      "Avtalsgenomgång med fokus på leveransvillkor och lock-in",
    ],
    ctaLabel: "Boka ett kostnadsfritt orienteringssamtal",
    ctaHref: booking.baseUrl,
  },
  {
    id: "advisory-retainer",
    name: "Oberoende IT-rådgivning",
    tagline: "En oberoende teknisk rådgivare ni kan lita på",
    scope:
      "Löpande tillgång till en senior arkitekt som hjälper er fatta bättre IT-beslut. Från systemval och leverantörsbedömningar till tekniska vägval — utan att sälja er något.",
    timeline: "Löpande · 2–4 dagar/månad",
    startingPrice: "Från 35 000 kr/mån",
    deliverables: [
      "Löpande teknisk rådgivning vid IT-beslut",
      "Oberoende leverantörsbedömningar",
      "Strategiskt IT-stöd inför lednings- och styrelsemöten",
    ],
    ctaLabel: "Boka ett kostnadsfritt orienteringssamtal",
    ctaHref: booking.baseUrl,
  },
];
