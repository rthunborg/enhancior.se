import { buildStructuredDataGraph } from "./structured-data-graph";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": buildStructuredDataGraph(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
