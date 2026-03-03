import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllSlugs,
  getCaseStudyBySlug,
  loadSvg,
} from "@/lib/case-studies";
import { ArchitectureViewer } from "@/components/architecture";
import { mdxComponents } from "@/components/mdx/mdx-components";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCaseStudyBySlug(slug);
  if (!entry) return {};
  const { frontmatter: fm } = entry;
  return {
    title: `${fm.title} — Fallstudie | Enhancior`,
    description: fm.description,
  };
}

/**
 * Renders an inline SVG read from the content directory at build time.
 * These SVGs are authored by the project owner and committed to the
 * repository — they are NOT user-submitted content.
 */
function SvgDiagram({ svg, label }: { svg: string; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getCaseStudyBySlug(slug);
  if (!entry) notFound();

  const { frontmatter: fm, content } = entry;

  const svgBefore = loadSvg(fm.svgBefore);
  const svgIntervention = loadSvg(fm.svgIntervention);
  const svgAfter = loadSvg(fm.svgAfter);

  return (
    <div className="bg-[#0A0A0A]">
      <article>
        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#919191] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1 inline-block">
              {fm.client}
            </span>
            <span className="font-mono text-sm text-[#F59E0B]">
              {fm.timeline ?? fm.engagement}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] font-sans tracking-tight">
            {fm.title}
          </h1>
        </header>

        {/* MDX Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[rgba(255,255,255,0.08)]">
          <MDXRemote source={content} components={mdxComponents} />
        </section>

        {/* Architecture Viewer */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <ArchitectureViewer
            beforeContent={
              <SvgDiagram svg={svgBefore} label="Före: Systemarkitektur innan insats" />
            }
            interventionContent={
              <SvgDiagram svg={svgIntervention} label="Åtgärd: Pågående insats" />
            }
            afterContent={
              <SvgDiagram svg={svgAfter} label="Efter: Systemarkitektur efter insats" />
            }
          />
        </section>

        {/* Impact Metrics */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[rgba(255,255,255,0.08)]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-6">
            Resultat: Mätbar påverkan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {fm.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-6"
                aria-label={`${metric.label}: ${metric.value}`}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-3">
                  {metric.label}
                </p>
                <p className="text-[#EDEDED] text-lg font-semibold">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
