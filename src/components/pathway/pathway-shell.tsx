import Link from "next/link";

interface PathwayShellProps {
  breadcrumbLabel: string;
  children: React.ReactNode;
}

export function PathwayShell({ breadcrumbLabel, children }: PathwayShellProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        <nav
          aria-label="Brödsmulor"
          className="border-b border-[rgba(255,255,255,0.08)] pb-4 mb-6"
        >
          <p className="font-mono text-[13px]">
            <Link
              href="/"
              className="text-[#666666] hover:text-[#A1A1A1] outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none min-h-[44px] inline-flex items-center"
            >
              triage
            </Link>
            <span className="text-[#666666]"> / </span>
            <span className="text-[#A1A1A1]">{breadcrumbLabel}</span>
          </p>
        </nav>

        <Link
          href="/"
          className="inline-flex items-center min-h-[44px] text-sm text-[#A1A1A1] hover:text-[#F59E0B] outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none mb-12 md:mb-16 lg:mb-20"
        >
          ← Tillbaka till diagnos
        </Link>

        {children}
      </div>
    </div>
  );
}
