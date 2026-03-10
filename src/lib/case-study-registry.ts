export interface CaseStudyCardMeta {
  slug: string;
  title: string;
  client: string;
  engagement: string;
  metrics: { label: string; value: string }[];
  personas: string[];
}

export const caseStudyRegistry: CaseStudyCardMeta[] = [
  {
    slug: "nordic-hr-group",
    title: "Automatiserad Credential-Rotation",
    client: "Nordeuropeisk HR-Koncern",
    engagement: "Teknisk Revision",
    metrics: [
      { label: "Rotation", value: "manuell → var 30:e dag" },
      { label: "Deploy", value: "manuell → automatiserad" },
      { label: "Miljöer", value: "1 → 3" },
    ],
    personas: ["cto-crisis"],
  },
  {
    slug: "nordic-shipping",
    title: "Från Excel-kaos till realtidsplattform för säsongsrekrytering",
    client: "Nordiskt Rederi",
    engagement: "Arkitekt som resurs",
    metrics: [
      { label: "Datadelning", value: "↓ ~95%" },
      { label: "Versionskontroll", value: "Eliminerat kaos" },
      { label: "Spårbarhet", value: "Noll → revisionsklar" },
      { label: "Koncept → produktion", value: "4 mån, 1 resurs" },
    ],
    personas: ["founder-rescue", "cto-crisis", "cto-proactive"],
  },
  {
    slug: "global-furniture-group",
    title: "Backend-Arkitektur för 3D-Modellering",
    client: "Världsledande Möbelkoncern",
    engagement: "Arkitekt som resurs",
    metrics: [
      { label: "Design till MVP", value: "8 veckor" },
      { label: "API-endpoints", value: "24 st" },
      { label: "AD-compliance", value: "100%" },
    ],
    personas: ["cto-proactive", "founder-rescue"],
  },
  {
    slug: "nordic-fashion-chain",
    title: "Från Legacy till Eventdriven Arkitektur",
    client: "Ledande Nordisk Modekedja",
    engagement: "Arkitekt som resurs",
    metrics: [
      { label: "Deploy-frekvens", value: "1/mån → 3/vecka" },
      { label: "Incidenter", value: "↓ 88%" },
      { label: "Lead time", value: "3v → 4d" },
      { label: "Tillgänglighet", value: "97% → 99.8%" },
    ],
    personas: ["cto-crisis"],
  },
  {
    slug: "global-ev-manufacturer",
    title: "Teknisk Ledning för Finansiella Integrationer",
    client: "Världsledande Elbilstillverkare",
    engagement: "Teknisk ledning",
    metrics: [
      { label: "Velocity", value: "↑ 45%" },
      { label: "Uptime", value: "98.5% → 99.9%" },
      { label: "Onboarding", value: "3 mån → 3v" },
      { label: "Säkerhetsincidenter", value: "0" },
    ],
    personas: ["cto-proactive", "cto-crisis"],
  }
];

export function getCardsByPersona(persona: string): CaseStudyCardMeta[] {
  return caseStudyRegistry.filter((s) => s.personas.includes(persona));
}
