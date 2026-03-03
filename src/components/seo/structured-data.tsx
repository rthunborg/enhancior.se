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
                description: "Senior mjukvaruarkitekt och teknisk ledning för SaaS-bolag och enterprise."
            },
            {
                "@type": "Service",
                "@id": "https://enhancior.se/#service",
                name: "teknisk revision",
                provider: {
                    "@id": "https://enhancior.se/#organization"
                },
                description: "Identifiera och åtgärda teknisk skuld i kodbas, arkitektur och leveransprocesser."
            },
            {
                "@type": "Service",
                "@id": "https://enhancior.se/#service2",
                name: "Teknisk ledning vid behov",
                provider: {
                    "@id": "https://enhancior.se/#organization"
                },
                description: "Inbäddad arkitekt som driver tekniska beslut och stabiliserar er teknikgrund."
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
