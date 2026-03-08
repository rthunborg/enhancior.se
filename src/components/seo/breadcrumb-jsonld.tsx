interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface BreadcrumbJsonLdProps {
  segments: BreadcrumbSegment[];
}

export function BreadcrumbJsonLd({ segments }: BreadcrumbJsonLdProps) {
  const baseUrl = "https://enhancior.se";

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hem",
      item: baseUrl,
    },
    ...segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: segment.label,
      ...(segment.href ? { item: `${baseUrl}${segment.href}` } : {}),
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
