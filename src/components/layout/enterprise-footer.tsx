import Link from "next/link";

const tjänsterLinks = [
  { label: "30-dagars Audit", href: "/cto-crisis" },
  { label: "Teknisk ledning", href: "/cto-proactive" },
  { label: "Enterprise Rescue", href: "/founder-rescue" },
  { label: "IT-rådgivning", href: "/it-radgivning" },
] as const;

const bevisLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Metodik", href: "/metodik" },
  { label: "Om", href: "/om" },
  { label: "LOU & Compliance", href: "/vendor-packet" },
] as const;

const linkClasses =
  "text-muted-foreground hover:text-amber-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm min-h-11 min-w-11 inline-flex items-center md:min-h-0 md:min-w-0 md:py-1 md:inline-block";

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
        <li key={link.label}>
          <Link href={link.href} className={linkClasses}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function EnterpriseFooter() {
  return (
    <footer aria-label="Sidfot" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav aria-label="Sidfotnavigation">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Column 1 — Brand */}
            <div>
              <p className={headingClasses}>Enhancior AB</p>
              <p className="text-muted-foreground text-sm">
                Senior arkitekt.
              </p>
              <p className="text-muted-foreground text-sm">
                Teknisk ledning.
              </p>
              <p className="text-muted-foreground text-sm">
                Deltid eller uppdrag.
              </p>
            </div>

            {/* Column 2 — Tjänster */}
            <div>
              <p className={headingClasses}>Tjänster</p>
              <FooterLinkList links={tjänsterLinks} />
            </div>

            {/* Column 3 — Bevis */}
            <div>
              <p className={headingClasses}>Bevis</p>
              <FooterLinkList links={bevisLinks} />
            </div>
          </div>
        </nav>

        {/* Credentials Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Enhancior AB{" "}
            <span aria-hidden="true">&middot;</span>{" "}
            <span className="font-mono">Org.nr: 559244-2775</span>{" "}
            <span aria-hidden="true">&middot;</span>{" "}
            <span className="font-mono">Godkänd för F-skatt</span>{" "}
            <span aria-hidden="true">&middot;</span>{" "}
            <a href="mailto:rasmus.thunborg@enhancior.se" className="font-mono">
              rasmus.thunborg@enhancior.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
