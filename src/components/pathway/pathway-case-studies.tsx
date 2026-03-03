import Link from "next/link";
import { getCaseStudiesByPersona } from "@/lib/case-studies";

export function PathwayCaseStudies({ persona }: { persona: string }) {
  const studies = getCaseStudiesByPersona(persona);
  if (studies.length === 0) return null;

  return (
    <section
      aria-label="Fallstudier"
      className="mb-16 md:mb-24 lg:mb-32"
    >
      <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
        FALLSTUDIER
      </p>
      <div className="space-y-4">
        {studies.map(({ frontmatter: fm }) => (
          <Link
            key={fm.slug}
            href={`/case-study/${fm.slug}`}
            className="block bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6 hover:border-[#F59E0B]/40 transition-colors duration-200 ease-out motion-reduce:transition-none group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#919191] border border-[rgba(255,255,255,0.08)] rounded-full px-2.5 py-0.5">
                {fm.client}
              </span>
              <span className="font-mono text-xs text-[#F59E0B]">
                {fm.engagement}
              </span>
            </div>
            <p className="text-base font-semibold text-[#EDEDED] mb-2 group-hover:text-[#F59E0B] transition-colors duration-200 ease-out">
              {fm.title}
            </p>
            <div className="flex flex-wrap gap-4 mt-3">
              {fm.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label}>
                  <p className="font-mono text-xs text-[#919191]">
                    {metric.label}
                  </p>
                  <p className="font-mono text-sm text-[#EDEDED]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
