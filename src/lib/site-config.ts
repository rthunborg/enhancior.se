export interface AvailabilityConfig {
  status: "available" | "limited" | "booked";
  text: string; // Swedish display text, e.g., "1 plats ledig Q3 2026"
}

export const availability: AvailabilityConfig = {
  status: "limited",
  text: "1 plats ledig Q3 2026",
};

export interface CalendlyConfig {
  baseUrl: string;
  ctaLabel: string;
}

export const calendly: CalendlyConfig = {
  baseUrl: "https://calendly.com/rasmus-enhancior/whiteboard-45",
  ctaLabel: "Boka gratis whiteboard-session",
};
