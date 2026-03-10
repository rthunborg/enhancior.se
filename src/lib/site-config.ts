export interface AvailabilityConfig {
  status: "available" | "limited" | "booked";
  text: string; // Swedish display text, e.g., "1 plats ledig Q3 2026"
}

export const availability: AvailabilityConfig = {
  status: "limited",
  text: "1 plats ledig Q3 2026",
};

export interface BookingConfig {
  baseUrl: string;
  ctaLabel: string;
}

export const booking: BookingConfig = {
  baseUrl: "", // Deprecated — contact modal replaces external booking
  ctaLabel: "Ta kontakt",
};
