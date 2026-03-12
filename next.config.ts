import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: false,
  async redirects() {
    return [
      // Legacy Swedish slugs → English slugs (301 permanent)
      { source: "/om", destination: "/about", permanent: true },
      { source: "/tjanster", destination: "/services", permanent: true },
      { source: "/metodik", destination: "/methodology", permanent: true },
      { source: "/it-radgivning", destination: "/it-advisory", permanent: true },
      { source: "/generellt", destination: "/general", permanent: true },
      { source: "/teknikbehov", destination: "/tech-needs", permanent: true },
      // Legacy case study slugs (company names → anonymized)
      { source: "/case-study/ikea", destination: "/case-study/global-furniture-group", permanent: true },
      { source: "/case-study/polestar", destination: "/case-study/global-ev-manufacturer", permanent: true },
      { source: "/case-study/visma", destination: "/case-study/nordic-hr-group", permanent: true },
      { source: "/case-study/lindex", destination: "/case-study/nordic-fashion-chain", permanent: true },
    ];
  },
};

export default nextConfig;
