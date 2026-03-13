export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Organization", "ProfessionalService"],
                "@id": "https://enhancior.se/#organization",
                name: "Enhancior AB",
                url: "https://enhancior.se",
                logo: "https://enhancior.se/images/enhancior_logo.png",
                description: "Senior IT-konsult och mjukvaruarkitekt i Göteborg. Teknisk revision, inbäddad arkitektkompetens och legacy-modernisering för SaaS och enterprise i Sverige.",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Göteborg",
                    addressCountry: "SE"
                },
                areaServed: ["Sverige", "Göteborg", "Stockholm", "Malmö"],
                serviceType: ["IT-konsulting", "Mjukvaruarkitektur", "Teknisk ledning", "Teknisk revision"]
            },
            {
                "@type": "Service",
                "@id": "https://enhancior.se/#service",
                name: "Teknisk revision",
                provider: { "@id": "https://enhancior.se/#organization" },
                description: "Identifiera och åtgärda teknisk skuld i kodbas, arkitektur och leveransprocesser.",
                areaServed: "Sverige"
            },
            {
                "@type": "Service",
                "@id": "https://enhancior.se/#service2",
                name: "Inbäddad arkitekt & teknisk ledning",
                provider: { "@id": "https://enhancior.se/#organization" },
                description: "Inbäddad IT-konsult och arkitekt som driver tekniska beslut och stabiliserar er teknikgrund.",
                areaServed: "Sverige"
            },
            {
                "@type": "Service",
                "@id": "https://enhancior.se/#service3",
                name: "Interim CTO & teknisk ledning för startups",
                provider: { "@id": "https://enhancior.se/#organization" },
                description: "Interim teknisk ledare som stabiliserar verksamheten och hjälper er hitta rätt permanent CTO.",
                areaServed: "Sverige"
            },
            {
                "@type": "Person",
                "@id": "https://enhancior.se/#person",
                name: "Rasmus Thunborg",
                jobTitle: "Senior Mjukvaruarkitekt & IT-konsult",
                worksFor: { "@id": "https://enhancior.se/#organization" },
                url: "https://enhancior.se",
                description: "Senior mjukvaruarkitekt och IT-konsult baserad i Göteborg med 10+ års erfarenhet av enterprise-backend, molnarkitektur och teknisk ledning.",
                knowsAbout: [
                    ".NET", "C#", "Azure", "AWS", "Kubernetes", "Terraform",
                    "Microservices", "Event Sourcing", "Domain-Driven Design",
                    "CI/CD", "legacy modernisering", "teknisk revision",
                    "interim CTO", "fractional CTO"
                ],
                sameAs: ["https://www.linkedin.com/in/rasmusthunborg/"]
            },
            {
                "@type": "WebSite",
                "@id": "https://enhancior.se/#website",
                url: "https://enhancior.se",
                name: "Enhancior",
                description: "Senior IT-konsult och mjukvaruarkitekt i Göteborg. Teknisk revision och legacy-modernisering för SaaS och enterprise.",
                inLanguage: "sv"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
