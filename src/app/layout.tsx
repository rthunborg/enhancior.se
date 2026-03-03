import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/components/seo/structured-data";
import { EnterpriseFooter } from "@/components/layout/enterprise-footer";

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
  title: "Enhancior | Fraktionell CTO & Teknisk Skuld Konsult",
  description: "Diagnostisera och åtgärda mjukvaruproblem. Enhancior erbjuder fraktionell CTO-tjänster och lösningar för teknisk skuld för SaaS och Enterprise.",
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
        <main className="flex-1">{children}</main>
        <EnterpriseFooter />
        <Analytics />
      </body>
    </html>
  );
}
