import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/components/seo/structured-data";
import { EnterpriseFooter } from "@/components/layout/enterprise-footer";
import { ContactModalProvider } from "@/components/contact";
import { LazyOverlays } from "@/components/layout/lazy-overlays";
import { MAINTENANCE_MODE } from "@/config/maintenance";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

const sharedIcons: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
};

const maintenanceMetadata: Metadata = {
  metadataBase: new URL("https://enhancior.se"),
  title: "Enhancior | Webbplatsen är pausad",
  description: "Webbplatsen är pausad.",
  icons: sharedIcons,
  openGraph: {
    siteName: "Enhancior",
    title: "Enhancior | Webbplatsen är pausad",
  },
  robots: { index: false, follow: false },
  alternates: { canonical: "https://enhancior.se" },
};

const defaultMetadata: Metadata = {
  metadataBase: new URL("https://enhancior.se"),
  title: "IT-konsult Göteborg | Senior Mjukvaruarkitekt – Enhancior",
  description:
    "Senior IT-konsult och mjukvaruarkitekt i Göteborg. Teknisk revision, mjukvaruarkitekt som deltar regelbundet i ert team, och legacy-modernisering för SaaS och enterprise i Sverige.",
  keywords: [
    "Rasmus Thunborg",
    "Rasmus Alestig Thunborg",
    "Rasmus Alestig",
    "IT-konsult Göteborg",
    "mjukvaruarkitekt konsult",
    "senior mjukvaruarkitekt",
    "teknisk ledning",
    "IT-konsult Sverige",
    "arkitekturkonsult",
    "fractional CTO",
    "interim tech lead",
    "legacy modernisering",
    "teknisk revision",
  ],
  icons: sharedIcons,
  openGraph: {
    siteName: "Enhancior",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enhancior: Senior Mjukvaruarkitekt & Teknisk Ledning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://enhancior.se",
  },
};

export const metadata: Metadata = MAINTENANCE_MODE
  ? maintenanceMetadata
  : defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="dark">
      <head>
        {!MAINTENANCE_MODE ? <StructuredData /> : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen${MAINTENANCE_MODE ? " bg-[#0A0A0A]" : ""}`}
      >
        <ContactModalProvider>
          {!MAINTENANCE_MODE ? (
            <div
              id="scroll-sentinel"
              className="pointer-events-none absolute top-[200px] h-0 w-0"
              aria-hidden="true"
            />
          ) : null}
          <main className="flex-1">{children}</main>
          {!MAINTENANCE_MODE ? (
            <div
              id="footer-sentinel"
              className="pointer-events-none h-0 w-0"
              aria-hidden="true"
            />
          ) : null}
          {!MAINTENANCE_MODE ? <EnterpriseFooter /> : null}
          {!MAINTENANCE_MODE ? <LazyOverlays /> : null}
        </ContactModalProvider>
        {!MAINTENANCE_MODE ? <Analytics /> : null}
      </body>
    </html>
  );
}
