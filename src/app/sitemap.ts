import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enhancior.se";
  const lastModified = new Date("2026-03-06");

  const pages = [
    "",
    "/om",
    "/tjanster",
    "/metodik",
    "/case-studies",
    "/case-study/ikea",
    "/case-study/visma",
    "/case-study/polestar",
    "/case-study/lindex",
    "/cto-crisis",
    "/cto-proactive",
    "/founder-rescue",
    "/it-radgivning",
    "/teknikbehov",
    "/vendor-packet",
    "/generellt",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/case-study/") ? 0.7 : 0.8,
  }));
}
