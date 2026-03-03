export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://enhancior.se/#organization",
                name: "Enhancior AB",
                url: "https://enhancior.se",
                logo: "https://enhancior.se/enhancior_logo.png",
                description: "Fraktionell CTO & Teknisk Skuld Konsult för SaaS och Enterprise."
            },
            {
                "@type": "Service",
                "@id": "https://enhancior.se/#service",
                name: "Teknisk Skuld Konsult",
                provider: {
                    "@id": "https://enhancior.se/#organization"
                },
                description: "Diagnostisera och åtgärda mjukvaruproblem, infrastruktur och arkitektur för SaaS-plattformar."
            },
            {
                "@type": "Service",
                "@id": "https://enhancior.se/#service2",
                name: "Fraktionell CTO",
                provider: {
                    "@id": "https://enhancior.se/#organization"
                },
                description: "Strategisk teknisk ledning och rådgivning för start-ups och scale-ups."
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
