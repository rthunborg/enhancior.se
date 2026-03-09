import Link from "next/link";
import { getCardsByPersona } from "@/lib/case-study-registry";

export function PathwayCaseStudies({ persona }: { persona: string }) {
  const studies = getCardsByPersona(persona);
  if (studies.length === 0) return null;

  return (
    <section
      aria-label="Kundcase"
      className="mb-16 md:mb-24 lg:mb-32"
    >
      <p className="font-mono text-sm text-[#919191] uppercase tracking-widest mb-6">
        Kundcase
      </p>
      <div className="space-y-4">
        {studies.map((study) => (
          <Link
            key={study.slug}
            href={`/case-study/${study.slug}`}
            className="block bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6 hover:border-[#F59E0B]/40 transition-colors duration-200 ease-out motion-reduce:transition-none group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#919191] border border-[rgba(255,255,255,0.08)] rounded-full px-2.5 py-0.5">
                {study.client}
              </span>
              <span className="font-mono text-xs text-[#F59E0B]">
                {study.engagement}
              </span>
            </div>
            <p className="text-base font-semibold text-[#EDEDED] mb-2 group-hover:text-[#F59E0B] transition-colors duration-200 ease-out">
              {study.title}
            </p>
            <div className="flex flex-wrap gap-4 mt-3">
              {study.metrics.slice(0, 3).map((metric) => (
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
