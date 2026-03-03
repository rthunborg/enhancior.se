import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

export interface CaseStudyMetricMdx {
  label: string;
  value: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  description: string;
  client: string;
  engagement: string;
  metrics: CaseStudyMetricMdx[];
  personas: string[];
  svgBefore: string;
  svgIntervention: string;
  svgAfter: string;
  publishedAt: string;
  timeline?: string;
  featured?: boolean;
}

export interface CaseStudyEntry {
  frontmatter: CaseStudyFrontmatter;
  content: string;
  filePath: string;
}

const REQUIRED_FIELDS: (keyof CaseStudyFrontmatter)[] = [
  "title",
  "slug",
  "description",
  "client",
  "engagement",
  "metrics",
  "personas",
  "svgBefore",
  "svgIntervention",
  "svgAfter",
  "publishedAt",
];

function validateFrontmatter(
  data: Record<string, unknown>,
  filePath: string,
): CaseStudyFrontmatter {
  const missing = REQUIRED_FIELDS.filter(
    (field) => data[field] === undefined || data[field] === null,
  );
  if (missing.length > 0) {
    throw new Error(
      `Case study "${filePath}" is missing required frontmatter fields: ${missing.join(", ")}`,
    );
  }

  if (!Array.isArray(data.metrics) || data.metrics.length === 0) {
    throw new Error(
      `Case study "${filePath}": metrics must be a non-empty array of { label, value } objects`,
    );
  }
  for (const metric of data.metrics as Record<string, unknown>[]) {
    if (typeof metric.label !== "string" || typeof metric.value !== "string") {
      throw new Error(
        `Case study "${filePath}": each metric must have a "label" (string) and "value" (string)`,
      );
    }
  }

  if (!Array.isArray(data.personas) || data.personas.length === 0) {
    throw new Error(
      `Case study "${filePath}": personas must be a non-empty array of strings`,
    );
  }

  return data as unknown as CaseStudyFrontmatter;
}

function getMdxFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

export function getAllCaseStudies(): CaseStudyEntry[] {
  const files = getMdxFiles();
  return files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = validateFrontmatter(data, file);
    return { frontmatter, content, filePath };
  });
}

export function getCaseStudyBySlug(slug: string): CaseStudyEntry | undefined {
  return getAllCaseStudies().find((entry) => entry.frontmatter.slug === slug);
}

export function getCaseStudiesByPersona(persona: string): CaseStudyEntry[] {
  return getAllCaseStudies()
    .filter((entry) => entry.frontmatter.personas.includes(persona))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime(),
    );
}

export function getAllSlugs(): string[] {
  return getAllCaseStudies().map((entry) => entry.frontmatter.slug);
}

export function loadSvg(svgPath: string): string {
  const fullPath = path.join(CONTENT_DIR, svgPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`SVG file not found: ${fullPath}`);
  }
  return fs.readFileSync(fullPath, "utf-8");
}
