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
    slug: "lindex",
    title: "Från Legacy till Eventdriven Arkitektur",
    client: "Lindex",
    engagement: "Enterprise Rescue",
    metrics: [
      { label: "Deploy-frekvens", value: "1/mån → 3/vecka" },
      { label: "Incidenter", value: "↓ 88%" },
      { label: "Lead time", value: "3v → 4d" },
      { label: "Tillgänglighet", value: "97% → 99.8%" },
    ],
    personas: ["cto-crisis", "cto-proactive"],
  },
  {
    slug: "polestar",
    title: "Teknisk Ledning för Finansiella Integrationer",
    client: "Polestar",
    engagement: "Teknisk ledning",
    metrics: [
      { label: "Velocity", value: "↑ 45%" },
      { label: "Uptime", value: "98.5% → 99.9%" },
      { label: "Onboarding", value: "3 mån → 3v" },
      { label: "Säkerhetsincidenter", value: "0" },
    ],
    personas: ["cto-proactive", "cto-crisis"],
  },
  {
    slug: "ikea",
    title: "Backend-Arkitektur för 3D-Modellering",
    client: "IKEA",
    engagement: "Enterprise Rescue",
    metrics: [
      { label: "Design till MVP", value: "8 veckor" },
      { label: "API-endpoints", value: "24 st" },
      { label: "AD-compliance", value: "100%" },
    ],
    personas: ["cto-crisis", "cto-proactive"],
  },
  {
    slug: "visma",
    title: "Automatiserad Credential-Rotation",
    client: "Visma",
    engagement: "Teknisk Revision",
    metrics: [
      { label: "Rotation", value: "manuell → var 30:e dag" },
      { label: "Deploy", value: "manuell → automatiserad" },
      { label: "Miljöer", value: "1 → 3" },
    ],
    personas: ["cto-crisis"],
  },
];

export function getCardsByPersona(persona: string): CaseStudyCardMeta[] {
  return caseStudyRegistry.filter((s) => s.personas.includes(persona));
}
