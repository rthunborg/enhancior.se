"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "@/components/contact";

const tjänsterLinks = [
  { label: "30-dagars Audit", href: "/cto-crisis" },
  { label: "Teknisk ledning", href: "/cto-proactive" },
  { label: "Mjukvaruarkitekt som resurs", href: "/founder-rescue" },
  { label: "IT-rådgivning", href: "/it-advisory" },
] as const;

const bevisLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Metodik", href: "/methodology" },
  { label: "Om", href: "/about" },
  { label: "LOU & Compliance", href: "/vendor-packet" },
] as const;

const linkClasses =
  "text-muted-foreground hover:text-amber-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm min-h-11 min-w-11 inline-flex items-center justify-center md:min-h-0 md:min-w-0 md:py-1 md:inline-block";

const headingClasses =
  "font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-4";

function FooterLinkList({
  links,
}: {
  links: ReadonlyArray<{ readonly label: string; readonly href: string }>;
}) {
  return (
    <ul className="space-y-3" role="list">
      {links.map((link) => (
        <li key={link.label} className="flex justify-center md:justify-start">
          <Link href={link.href} className={linkClasses}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function EnterpriseFooter() {
  const { openContactModal } = useContactModal();

  return (
    <footer aria-label="Sidfot" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <nav aria-label="Sidfotnavigation">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            {/* Column 1 — Brand */}
            <div className="text-center md:text-left">
              <p className={headingClasses}>Enhancior AB</p>
              <p className="text-muted-foreground text-sm">
                Senior mjukvaruarkitekt.
              </p>
              <p className="text-muted-foreground text-sm">
                Expert inom Agentic AI.
              </p>
              <p className="text-muted-foreground text-sm">
                Teknisk ledning.
              </p>
            </div>

            {/* Column 2 — Tjänster */}
            <div className="text-center md:text-left">
              <p className={headingClasses}>Tjänster</p>
              <FooterLinkList links={tjänsterLinks} />
            </div>

            {/* Column 3 — Bevis */}
            <div className="text-center md:text-left">
              <p className={headingClasses}>Bevis</p>
              <FooterLinkList links={bevisLinks} />
            </div>
          </div>
        </nav>

    {/* Credentials Bar */}
    <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 text-sm text-muted-foreground">
            
            <Link
              href="/"
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm flex-shrink-0"
              aria-label="Tillbaka till startsidan"
            >
              <Image
                src="/images/enhancior_logo.webp"
                alt="Enhancior logotyp"
                width={40}
                height={36}
                className="w-10 h-auto"
              />
            </Link>

            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:flex-wrap md:gap-3 text-center">
              <span>&copy; 2026 Enhancior AB</span>
              <span className="hidden md:block" aria-hidden="true">&middot;</span>
              <span className="font-mono">Org.nr: 559244-2775</span>
              <span className="hidden md:block" aria-hidden="true">&middot;</span>
              <span className="font-mono">Godkänd för F-skatt</span>
              <span className="hidden md:block" aria-hidden="true">&middot;</span>
              <button
                type="button"
                onClick={() => openContactModal()}
                aria-label="Öppna kontaktformulär"
                className="font-mono hover:underline cursor-pointer bg-transparent border-none p-0 text-inherit"
              >
                rasmus.thunborg@enhancior.se
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
