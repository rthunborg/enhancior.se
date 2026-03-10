import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enhancior.se";
  const lastModified = new Date("2026-03-06");

  const pages = [
    "",
    "/about",
    "/services",
    "/methodology",
    "/case-studies",
    "/case-study/global-furniture-group",
    "/case-study/nordic-hr-group",
    "/case-study/global-ev-manufacturer",
    "/case-study/nordic-fashion-chain",
    "/case-study/nordic-shipping",
    "/cto-crisis",
    "/cto-proactive",
    "/founder-rescue",
    "/it-advisory",
    "/tech-needs",
    "/vendor-packet",
    "/general",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/case-study/") ? 0.7 : 0.8,
  }));
}
