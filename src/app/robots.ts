import type { MetadataRoute } from "next";
import { MAINTENANCE_MODE } from "@/config/maintenance";

export default function robots(): MetadataRoute.Robots {
  if (MAINTENANCE_MODE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    host: "https://enhancior.se",
    sitemap: "https://enhancior.se/sitemap.xml",
  };
}
