import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/components/seo/structured-data";
import { EnterpriseFooter } from "@/components/layout/enterprise-footer";
import { ContactModalProvider } from "@/components/contact";
import { FloatingCta } from "@/components/contact/floating-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enhancior.se"),
  title: "Enhancior | Senior Mjukvaruarkitekt & Teknisk Ledning",
  description: "Identifiera och åtgärda teknisk skuld. Enhancior erbjuder teknisk revision, inbäddad arkitektkompetens och enterprise-modernisering för SaaS och enterprise.",
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
        alt: "Enhancior — Senior Mjukvaruarkitekt & Teknisk Ledning",
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
          <FloatingCta />
        </ContactModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
