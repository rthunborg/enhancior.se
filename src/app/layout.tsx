import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/components/seo/structured-data";
import { EnterpriseFooter } from "@/components/layout/enterprise-footer";
import { ContactModalProvider } from "@/components/contact";
import { LazyOverlays } from "@/components/layout/lazy-overlays";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://enhancior.se"),
  title: "IT-konsult Göteborg | Senior Mjukvaruarkitekt – Enhancior",
  description:
    "Senior IT-konsult och mjukvaruarkitekt i Göteborg. Teknisk revision, mjukvaruarkitekt som deltar regelbundet i ert team, och legacy-modernisering för SaaS och enterprise i Sverige.",
  keywords: [
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ContactModalProvider>
          <div id="scroll-sentinel" className="pointer-events-none absolute top-[200px] h-0 w-0" aria-hidden="true" />
          <main className="flex-1">{children}</main>
          <div id="footer-sentinel" className="pointer-events-none h-0 w-0" aria-hidden="true" />
          <EnterpriseFooter />
          <LazyOverlays />
        </ContactModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
