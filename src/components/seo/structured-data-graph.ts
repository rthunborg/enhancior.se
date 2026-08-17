export type StructuredDataEntity = Record<string, unknown> & {
  "@id": string;
  name?: string;
  alternateName?: string[];
  url?: string;
  worksFor?: { "@id": string };
};

export function buildStructuredDataGraph(): StructuredDataEntity[] {
  return [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://enhancior.se/#organization",
      name: "Enhancior AB",
      url: "https://enhancior.se",
      logo: "https://enhancior.se/images/enhancior_logo.png",
      description:
        "Senior IT-konsult och mjukvaruarkitekt i Göteborg. Teknisk revision, mjukvaruarkitekt som deltar regelbundet i ert team, och legacy-modernisering för SaaS och enterprise i Sverige.",
      founder: { "@id": "https://enhancior.se/#person" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Göteborg",
        addressCountry: "SE",
      },
      areaServed: ["Sverige", "Göteborg", "Stockholm", "Malmö"],
      serviceType: [
        "IT-konsulting",
        "Mjukvaruarkitektur",
        "Teknisk ledning",
        "Teknisk revision",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://enhancior.se/#service",
      name: "Teknisk revision",
      provider: { "@id": "https://enhancior.se/#organization" },
      description:
        "Identifiera och åtgärda teknisk skuld i kodbas, mjukvaruarkitektur och leveransprocesser.",
      areaServed: "Sverige",
    },
    {
      "@type": "Service",
      "@id": "https://enhancior.se/#service2",
      name: "Mjukvaruarkitekt i teamet & teknisk ledning",
      provider: { "@id": "https://enhancior.se/#organization" },
      description:
        "IT-konsult och mjukvaruarkitekt som arbetar nära ert team, driver tekniska beslut och stabiliserar er teknikgrund.",
      areaServed: "Sverige",
    },
    {
      "@type": "Service",
      "@id": "https://enhancior.se/#service3",
      name: "Interim CTO & teknisk ledning för startups",
      provider: { "@id": "https://enhancior.se/#organization" },
      description:
        "Interim teknisk ledare som stabiliserar verksamheten och hjälper er hitta rätt permanent CTO.",
      areaServed: "Sverige",
    },
    {
      "@type": "Person",
      "@id": "https://enhancior.se/#person",
      name: "Rasmus Alestig Thunborg",
      alternateName: ["Rasmus Thunborg", "Rasmus Alestig"],
      jobTitle: "Senior Mjukvaruarkitekt & IT-konsult",
      worksFor: { "@id": "https://enhancior.se/#organization" },
      url: "https://enhancior.se/about",
      mainEntityOfPage: "https://enhancior.se/about",
      description:
        "Rasmus Alestig Thunborg, även känd som Rasmus Thunborg och Rasmus Alestig, är senior mjukvaruarkitekt och IT-konsult baserad i Göteborg med 10+ års erfarenhet av enterprise-backend, molnarkitektur och teknisk ledning.",
      knowsAbout: [
        ".NET",
        "C#",
        "Azure",
        "AWS",
        "Kubernetes",
        "Terraform",
        "Microservices",
        "Event Sourcing",
        "Domain-Driven Design",
        "CI/CD",
        "legacy modernisering",
        "teknisk revision",
        "interim CTO",
        "fractional CTO",
      ],
      sameAs: ["https://www.linkedin.com/in/rasmusthunborg/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://enhancior.se/#website",
      url: "https://enhancior.se",
      name: "Enhancior",
      description:
        "Senior IT-konsult och mjukvaruarkitekt i Göteborg. Teknisk revision och legacy-modernisering för SaaS och enterprise.",
      inLanguage: "sv",
      author: { "@id": "https://enhancior.se/#person" },
    },
  ];
}
