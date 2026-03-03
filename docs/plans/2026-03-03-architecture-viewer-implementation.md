# Architecture Viewer Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace bland placeholder SVG rectangles with animated architectural diagrams that tell the Diagnose & Cure story, and upgrade the viewer component with state-colored glow, step indicators, and staggered animations.

**Architecture:** Build a shared primitives layer of reusable animated SVG components (ServiceBox, PipelineArrow, StatusDot, etc.), then compose two diagram sets from those primitives (generic for /cto-crisis, LogTech-specific for /case-study/logtech). Upgrade the ArchitectureViewer shell with border glow and step dots. Finally, wire pages to new diagram components and delete the old placeholders.

**Tech Stack:** Next.js, TypeScript, Framer Motion (motion.g for SVG animation), Tailwind CSS. All inline SVG, no external assets.

**Design doc:** `docs/plans/2026-03-03-architecture-viewer-upgrade-design.md`

---

## Task 0: Upgrade ArchitectureViewer component

**Files:**
- Modify: `src/components/architecture/architecture-viewer.tsx`

**Step 1:** Add state-colored glow and step progress indicator to the viewer. The component already works well — we're adding visual polish without changing its API.

Replace the entire content of `src/components/architecture/architecture-viewer.tsx` with:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type ViewerState = "before" | "intervention" | "after";

interface ArchitectureViewerProps {
  beforeContent: React.ReactNode;
  interventionContent: React.ReactNode;
  afterContent: React.ReactNode;
  labels?: {
    before?: string;
    intervention?: string;
    after?: string;
  };
}

const STATES: ViewerState[] = ["before", "intervention", "after"];

const DEFAULT_LABELS: Record<ViewerState, string> = {
  before: "Före",
  intervention: "Åtgärd",
  after: "Efter",
};

const STATE_GLOW: Record<ViewerState, string> = {
  before: "shadow-[0_0_40px_rgba(220,38,38,0.08)]",
  intervention: "shadow-[0_0_40px_rgba(245,158,11,0.08)]",
  after: "shadow-[0_0_40px_rgba(34,197,94,0.08)]",
};

const STATE_BORDER: Record<ViewerState, string> = {
  before: "border-red-900/30",
  intervention: "border-amber-900/30",
  after: "border-green-900/30",
};

export function ArchitectureViewer({
  beforeContent,
  interventionContent,
  afterContent,
  labels,
}: ArchitectureViewerProps) {
  const [active, setActive] = useState<ViewerState>("before");
  const shouldReduceMotion = useReducedMotion();

  const resolvedLabels: Record<ViewerState, string> = {
    before: labels?.before ?? DEFAULT_LABELS.before,
    intervention: labels?.intervention ?? DEFAULT_LABELS.intervention,
    after: labels?.after ?? DEFAULT_LABELS.after,
  };

  const content: Record<ViewerState, React.ReactNode> = {
    before: beforeContent,
    intervention: interventionContent,
    after: afterContent,
  };

  const duration = shouldReduceMotion ? 0 : 0.3;

  return (
    <div
      className={`bg-[#111111] border rounded-xl overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none ${STATE_GLOW[active]} ${STATE_BORDER[active]}`}
    >
      {/* Toggle bar header */}
      <div className="p-4 sm:p-6 lg:p-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-4 sm:gap-6">
          <div
            role="tablist"
            aria-label="Arkitektur-visualisering: före, åtgärd och efter"
            className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.08)] rounded-lg p-1 inline-flex gap-1 flex-1 sm:flex-initial"
          >
            {STATES.map((state) => {
              const isActive = active === state;
              return (
                <button
                  key={state}
                  id={`arch-tab-${state}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(state)}
                  className={`
                    font-mono text-sm rounded-md px-4 py-2 min-h-[44px] flex-1 sm:flex-initial text-center
                    outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 ring-offset-[#0A0A0A]
                    ${
                      isActive
                        ? "bg-[#F59E0B] text-[#0A0A0A] font-semibold"
                        : "text-[#919191] hover:text-[#EDEDED] transition-colors duration-150 ease-out motion-reduce:transition-none"
                    }
                  `}
                >
                  {resolvedLabels[state]}
                </button>
              );
            })}
          </div>

          {/* Step progress indicator */}
          <div className="hidden sm:flex items-center gap-2" aria-hidden="true">
            {STATES.map((state, i) => (
              <div key={state} className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    active === state
                      ? "bg-[#F59E0B]"
                      : STATES.indexOf(active) > i
                        ? "bg-[#F59E0B]/40"
                        : "bg-[#333333]"
                  }`}
                />
                {i < STATES.length - 1 && (
                  <div
                    className={`w-6 h-px transition-colors duration-300 ${
                      STATES.indexOf(active) > i
                        ? "bg-[#F59E0B]/30"
                        : "bg-[#333333]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div
        role="tabpanel"
        aria-labelledby={`arch-tab-${active}`}
        tabIndex={0}
        className="p-4 sm:p-6 lg:p-8 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration, ease: "easeInOut" }}
            className="w-full"
          >
            {content[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
```

**Step 2:** Run `npm run build && npm run lint`

**Step 3:** Commit.

```bash
git add src/components/architecture/architecture-viewer.tsx
git commit -m "feat: upgrade architecture viewer with state glow and step indicators"
```

---

## Task 1: Create diagram primitives

**Files:**
- Create: `src/components/architecture/diagram-primitives.tsx`

**Step 1:** Create the shared SVG building blocks file. These are simple, composable SVG components that both diagram sets will use. All accept x/y positioning and color props. Text uses `fontFamily="var(--font-geist-mono), monospace"` to match the site's Geist Mono.

```tsx
"use client";

import { motion } from "framer-motion";

// Animation variants for staggered children
export const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const MONO = 'var(--font-geist-mono), ui-monospace, monospace';

interface ServiceBoxProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  label: string;
  sublabel?: string;
  color: "red" | "amber" | "green" | "neutral";
}

const BOX_COLORS = {
  red: { fill: "#1a0505", stroke: "#DC2626", text: "#FCA5A5" },
  amber: { fill: "#1a1005", stroke: "#F59E0B", text: "#FDE68A" },
  green: { fill: "#051a0a", stroke: "#22C55E", text: "#86EFAC" },
  neutral: { fill: "#141414", stroke: "#333333", text: "#919191" },
};

export function ServiceBox({ x, y, width = 120, height = 56, label, sublabel, color }: ServiceBoxProps) {
  const c = BOX_COLORS[color];
  return (
    <motion.g variants={itemVariants}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth={1}
        opacity={0.9}
      />
      <text
        x={x + width / 2}
        y={sublabel ? y + height / 2 - 6 : y + height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={c.text}
        fontFamily={MONO}
        fontSize={11}
        fontWeight={600}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 10}
          textAnchor="middle"
          dominantBaseline="central"
          fill={c.text}
          fontFamily={MONO}
          fontSize={9}
          opacity={0.7}
        >
          {sublabel}
        </text>
      )}
    </motion.g>
  );
}

interface PipelineArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: "red" | "amber" | "green" | "neutral";
  dashed?: boolean;
}

const LINE_COLORS = {
  red: "#DC2626",
  amber: "#F59E0B",
  green: "#22C55E",
  neutral: "#333333",
};

export function PipelineArrow({ x1, y1, x2, y2, color, dashed }: PipelineArrowProps) {
  return (
    <motion.g variants={itemVariants}>
      <defs>
        <marker
          id={`arrow-${color}`}
          viewBox="0 0 10 7"
          refX="9"
          refY="3.5"
          markerWidth="8"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 3.5 L 0 7 z" fill={LINE_COLORS[color]} opacity={0.6} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={LINE_COLORS[color]}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "6 4" : undefined}
        opacity={0.5}
        markerEnd={`url(#arrow-${color})`}
      />
    </motion.g>
  );
}

interface StatusDotProps {
  cx: number;
  cy: number;
  color: "red" | "amber" | "green";
}

const DOT_COLORS = {
  red: "#DC2626",
  amber: "#F59E0B",
  green: "#22C55E",
};

export function StatusDot({ cx, cy, color }: StatusDotProps) {
  return (
    <motion.g variants={itemVariants}>
      <circle cx={cx} cy={cy} r={6} fill={DOT_COLORS[color]} opacity={0.15} />
      <circle cx={cx} cy={cy} r={3} fill={DOT_COLORS[color]} opacity={0.9} />
    </motion.g>
  );
}

interface QualityGateProps {
  x: number;
  y: number;
  color: "amber" | "green";
}

export function QualityGate({ x, y, color }: QualityGateProps) {
  const c = color === "amber" ? "#F59E0B" : "#22C55E";
  return (
    <motion.g variants={itemVariants}>
      {/* Shield shape */}
      <path
        d={`M${x},${y - 10} L${x + 8},${y - 6} L${x + 8},${y + 2} L${x},${y + 8} L${x - 8},${y + 2} L${x - 8},${y - 6} Z`}
        fill="none"
        stroke={c}
        strokeWidth={1.5}
        opacity={0.7}
      />
      {/* Checkmark */}
      <path
        d={`M${x - 3},${y - 1} L${x},${y + 2} L${x + 4},${y - 3}`}
        fill="none"
        stroke={c}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.9}
      />
    </motion.g>
  );
}

interface MetricBadgeProps {
  x: number;
  y: number;
  label: string;
  color: "red" | "amber" | "green";
}

export function MetricBadge({ x, y, label, color }: MetricBadgeProps) {
  const bg = color === "red" ? "#2a0505" : color === "amber" ? "#2a1a05" : "#052a0a";
  const text = color === "red" ? "#FCA5A5" : color === "amber" ? "#FDE68A" : "#86EFAC";
  const stroke = LINE_COLORS[color];
  const width = label.length * 7 + 16;
  return (
    <motion.g variants={itemVariants}>
      <rect
        x={x - width / 2}
        y={y - 10}
        width={width}
        height={20}
        rx={10}
        fill={bg}
        stroke={stroke}
        strokeWidth={0.5}
        opacity={0.8}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={text}
        fontFamily={MONO}
        fontSize={10}
        fontWeight={600}
      >
        {label}
      </text>
    </motion.g>
  );
}

interface DiagramLabelProps {
  x: number;
  y: number;
  text: string;
  color?: string;
  size?: number;
  anchor?: "start" | "middle" | "end";
}

export function DiagramLabel({ x, y, text, color = "#919191", size = 10, anchor = "middle" }: DiagramLabelProps) {
  return (
    <motion.g variants={itemVariants}>
      <text
        x={x}
        y={y}
        textAnchor={anchor}
        dominantBaseline="central"
        fill={color}
        fontFamily={MONO}
        fontSize={size}
      >
        {text}
      </text>
    </motion.g>
  );
}
```

**Step 2:** Run `npm run build && npm run lint`

**Step 3:** Commit.

```bash
git add src/components/architecture/diagram-primitives.tsx
git commit -m "feat: add animated SVG diagram primitives"
```

---

## Task 2: Create generic crisis diagrams

**Files:**
- Create: `src/components/architecture/generic-crisis-diagrams.tsx`

**Step 1:** Create the generic before/intervention/after diagrams for `/cto-crisis`. These show a generalized CI/CD pipeline crisis and resolution. The viewBox is 600x320, responsive via width="100%".

Each diagram is a `motion.svg` with `variants={containerVariants}` and `initial="hidden" animate="visible"` so child primitives stagger in automatically.

```tsx
"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  ServiceBox,
  PipelineArrow,
  StatusDot,
  QualityGate,
  MetricBadge,
  DiagramLabel,
} from "./diagram-primitives";

export const GenericCrisisBefore = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Före: Monolitisk pipeline med kopplade beroenden och manuella deploys"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Monolith */}
    <ServiceBox x={30} y={80} width={160} height={160} label="Monolit" sublabel="all kod i en deploy" color="red" />

    {/* Single pipeline */}
    <PipelineArrow x1={190} y1={160} x2={260} y2={160} color="red" dashed />

    {/* Build stage */}
    <ServiceBox x={260} y={120} width={100} height={80} label="Build" sublabel="manuell" color="red" />
    <StatusDot cx={310} cy={112} color="red" />

    {/* Single arrow to prod */}
    <PipelineArrow x1={360} y1={160} x2={430} y2={160} color="red" dashed />

    {/* Production */}
    <ServiceBox x={430} y={120} width={140} height={80} label="Produktion" sublabel="single target" color="red" />
    <StatusDot cx={500} cy={112} color="red" />

    {/* Tangled dependency lines */}
    <PipelineArrow x1={80} y1={240} x2={280} y2={200} color="neutral" dashed />
    <PipelineArrow x1={140} y1={240} x2={310} y2={200} color="neutral" dashed />
    <PipelineArrow x1={110} y1={80} x2={280} y2={120} color="neutral" dashed />

    {/* Labels */}
    <MetricBadge x={500} y={220} label="14d lead time" color="red" />
    <MetricBadge x={310} y={230} label="60% fail rate" color="red" />
    <DiagramLabel x={110} y={270} text="Kopplade beroenden" color="#FCA5A5" size={9} />
    <DiagramLabel x={500} y={250} text="Manuell övervakning" color="#FCA5A5" size={9} />
  </motion.svg>
);

export const GenericCrisisIntervention = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Åtgärd: Pipeline bryts upp i isolerade steg med quality gates"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Monolith splitting */}
    <ServiceBox x={30} y={60} width={120} height={70} label="Domän A" color="amber" />
    <ServiceBox x={30} y={150} width={120} height={70} label="Domän B" color="amber" />
    <ServiceBox x={30} y={240} width={120} height={70} label="Domän C" color="neutral" />

    {/* Splitting indicator */}
    <DiagramLabel x={90} y={42} text="Monolit bryts upp" color="#FDE68A" size={9} />

    {/* Pipeline stages */}
    <PipelineArrow x1={150} y1={95} x2={210} y2={160} color="amber" />
    <PipelineArrow x1={150} y1={185} x2={210} y2={160} color="amber" />

    <ServiceBox x={210} y={132} width={90} height={56} label="Build" sublabel="isolerat" color="amber" />

    {/* Quality gate */}
    <PipelineArrow x1={300} y1={160} x2={340} y2={160} color="amber" />
    <QualityGate x={360} y={160} color="amber" />

    {/* Test stage */}
    <PipelineArrow x1={370} y1={160} x2={400} y2={160} color="amber" />
    <ServiceBox x={400} y={132} width={90} height={56} label="Test" sublabel="automatisk" color="amber" />

    {/* Deploy stage */}
    <PipelineArrow x1={490} y1={160} x2={520} y2={160} color="neutral" />
    <ServiceBox x={520} y={132} width={60} height={56} label="Deploy" color="neutral" />

    {/* Timeline label */}
    <MetricBadge x={300} y={40} label="30 dagars insats" color="amber" />
    <DiagramLabel x={360} y={200} text="Quality gates" color="#FDE68A" size={9} />
    <DiagramLabel x={450} y={210} text="Automatiserade tester" color="#FDE68A" size={9} />
  </motion.svg>
);

export const GenericCrisisAfter = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Efter: Isolerade tjänster med oberoende pipelines och blue-green deployment"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Independent services */}
    <ServiceBox x={30} y={40} width={110} height={50} label="Tjänst A" color="green" />
    <ServiceBox x={30} y={130} width={110} height={50} label="Tjänst B" color="green" />
    <ServiceBox x={30} y={220} width={110} height={50} label="Tjänst C" color="green" />

    {/* Independent pipelines */}
    <PipelineArrow x1={140} y1={65} x2={180} y2={65} color="green" />
    <PipelineArrow x1={140} y1={155} x2={180} y2={155} color="green" />
    <PipelineArrow x1={140} y1={245} x2={180} y2={245} color="green" />

    {/* Quality gates per pipeline */}
    <QualityGate x={200} y={65} color="green" />
    <QualityGate x={200} y={155} color="green" />
    <QualityGate x={200} y={245} color="green" />

    {/* Converge to deploy */}
    <PipelineArrow x1={210} y1={65} x2={300} y2={155} color="green" />
    <PipelineArrow x1={210} y1={155} x2={300} y2={155} color="green" />
    <PipelineArrow x1={210} y1={245} x2={300} y2={155} color="green" />

    {/* Blue-green deploy */}
    <ServiceBox x={300} y={110} width={100} height={40} label="Blue" color="green" />
    <ServiceBox x={300} y={170} width={100} height={40} label="Green" color="neutral" />
    <DiagramLabel x={350} y={100} text="Blue-green deploy" color="#86EFAC" size={9} />

    {/* Arrow to prod */}
    <PipelineArrow x1={400} y1={130} x2={460} y2={155} color="green" />

    {/* Production with monitoring */}
    <ServiceBox x={460} y={120} width={120} height={70} label="Produktion" sublabel="zero-downtime" color="green" />
    <StatusDot cx={520} cy={112} color="green" />

    {/* Metrics */}
    <MetricBadge x={520} y={220} label="4 deploys/dag" color="green" />
    <MetricBadge x={520} y={250} label="98% success" color="green" />
    <MetricBadge x={520} y={280} label="2d lead time" color="green" />
  </motion.svg>
);
```

**Step 2:** Run `npm run build && npm run lint`

**Step 3:** Commit.

```bash
git add src/components/architecture/generic-crisis-diagrams.tsx
git commit -m "feat: add generic crisis before/intervention/after diagrams"
```

---

## Task 3: Create LogTech-specific diagrams

**Files:**
- Create: `src/components/architecture/logtech-diagrams.tsx`

**Step 1:** Create LogTech-specific diagrams grounded in the case study narrative: logistics SaaS with CI/CD rescue. More detailed than generic, with specific labels.

```tsx
"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  ServiceBox,
  PipelineArrow,
  StatusDot,
  QualityGate,
  MetricBadge,
  DiagramLabel,
} from "./diagram-primitives";

export const LogTechBefore = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Före: LogTech monolitisk build-pipeline med 60% failure rate"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <DiagramLabel x={300} y={20} text="LogTech Pipeline" color="#FCA5A5" size={12} />

    {/* Monolithic build */}
    <ServiceBox x={30} y={70} width={160} height={80} label="Monolitisk build" sublabel="allt i ett steg" color="red" />
    <StatusDot cx={60} cy={62} color="red" />

    {/* Single fragile pipeline */}
    <PipelineArrow x1={190} y1={110} x2={240} y2={110} color="red" dashed />

    {/* Manual test */}
    <ServiceBox x={240} y={82} width={100} height={56} label="Manuell test" color="red" />
    <StatusDot cx={290} cy={74} color="red" />

    <PipelineArrow x1={340} y1={110} x2={390} y2={110} color="red" dashed />

    {/* Manual deploy */}
    <ServiceBox x={390} y={82} width={110} height={56} label="Manuell deploy" sublabel="1 senior bevakar" color="red" />
    <StatusDot cx={445} cy={74} color="red" />

    <PipelineArrow x1={500} y1={110} x2={540} y2={110} color="red" dashed />

    {/* Production */}
    <ServiceBox x={540} y={90} width={50} height={40} label="Prod" color="red" />

    {/* Failure indicators */}
    <MetricBadge x={110} y={180} label="60% fail rate" color="red" />
    <MetricBadge x={290} y={180} label="14d lead time" color="red" />
    <MetricBadge x={445} y={180} label="4 incidenter/mån" color="red" />

    {/* Cascade failure lines */}
    <PipelineArrow x1={110} y1={150} x2={290} y2={150} color="red" dashed />
    <PipelineArrow x1={290} y1={150} x2={445} y2={150} color="red" dashed />
    <DiagramLabel x={280} y={240} text="Kaskadfel: en bugg sprids genom hela kedjan" color="#FCA5A5" size={9} />

    {/* Team impact */}
    <DiagramLabel x={300} y={280} text="Teamet undviker att deploya" color="#919191" size={9} />
  </motion.svg>
);

export const LogTechIntervention = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Åtgärd: Pipeline bryts upp i tre isolerade steg med quality gates"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <DiagramLabel x={300} y={20} text="Pipeline-omstrukturering" color="#FDE68A" size={12} />

    {/* Stage 1: Build */}
    <ServiceBox x={30} y={70} width={120} height={56} label="Steg 1: Build" sublabel="isolerat" color="amber" />
    <StatusDot cx={90} cy={62} color="amber" />

    {/* Quality gate 1 */}
    <PipelineArrow x1={150} y1={98} x2={190} y2={98} color="amber" />
    <QualityGate x={210} y={98} color="amber" />

    {/* Stage 2: Test */}
    <PipelineArrow x1={220} y1={98} x2={250} y2={98} color="amber" />
    <ServiceBox x={250} y={70} width={120} height={56} label="Steg 2: Test" sublabel="automatiserat" color="amber" />
    <StatusDot cx={310} cy={62} color="amber" />

    {/* Quality gate 2 */}
    <PipelineArrow x1={370} y1={98} x2={410} y2={98} color="amber" />
    <QualityGate x={430} y={98} color="amber" />

    {/* Stage 3: Deploy */}
    <PipelineArrow x1={440} y1={98} x2={470} y2={98} color="amber" />
    <ServiceBox x={470} y={70} width={110} height={56} label="Steg 3: Deploy" sublabel="blue-green" color="amber" />

    {/* Contract boundaries */}
    <DiagramLabel x={210} y={145} text="Kontraktsgräns" color="#FDE68A" size={9} />
    <DiagramLabel x={430} y={145} text="Kontraktsgräns" color="#FDE68A" size={9} />

    {/* Improvements being applied */}
    <ServiceBox x={100} y={190} width={160} height={40} label="Testtäckning: ↑" color="amber" />
    <ServiceBox x={320} y={190} width={180} height={40} label="Rollback: automatiserad" color="amber" />

    <MetricBadge x={300} y={270} label="30 dagars insats" color="amber" />
  </motion.svg>
);

export const LogTechAfter = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Efter: Tre isolerade pipeline-steg med 98% success rate och blue-green deployment"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <DiagramLabel x={300} y={20} text="LogTech Pipeline" color="#86EFAC" size={12} />

    {/* Stage 1 */}
    <ServiceBox x={30} y={70} width={120} height={56} label="Build" sublabel="oberoende" color="green" />
    <StatusDot cx={90} cy={62} color="green" />

    {/* QG 1 */}
    <PipelineArrow x1={150} y1={98} x2={180} y2={98} color="green" />
    <QualityGate x={198} y={98} color="green" />

    {/* Stage 2 */}
    <PipelineArrow x1={210} y1={98} x2={230} y2={98} color="green" />
    <ServiceBox x={230} y={70} width={120} height={56} label="Test" sublabel="automatiskt" color="green" />
    <StatusDot cx={290} cy={62} color="green" />

    {/* QG 2 */}
    <PipelineArrow x1={350} y1={98} x2={380} y2={98} color="green" />
    <QualityGate x={398} y={98} color="green" />

    {/* Blue-green deploy */}
    <PipelineArrow x1={410} y1={98} x2={440} y2={80} color="green" />
    <PipelineArrow x1={410} y1={98} x2={440} y2={116} color="neutral" />
    <ServiceBox x={440} y={55} width={70} height={40} label="Blue" color="green" />
    <ServiceBox x={440} y={105} width={70} height={40} label="Green" color="neutral" />

    {/* Arrow to production */}
    <PipelineArrow x1={510} y1={75} x2={540} y2={75} color="green" />
    <ServiceBox x={540} y={55} width={50} height={40} label="Prod" color="green" />
    <StatusDot cx={565} cy={48} color="green" />

    {/* Rollback indicator */}
    <DiagramLabel x={475} y={160} text="Omedelbar rollback" color="#86EFAC" size={9} />
    <PipelineArrow x1={475} y1={145} x2={475} y2={130} color="green" />

    {/* Success metrics */}
    <MetricBadge x={100} y={190} label="4 deploys/dag" color="green" />
    <MetricBadge x={270} y={190} label="98% build success" color="green" />
    <MetricBadge x={440} y={190} label="2d lead time" color="green" />
    <MetricBadge x={270} y={230} label="−73% incidenter" color="green" />

    <DiagramLabel x={300} y={280} text="Teamet deployar med förtroende" color="#919191" size={9} />
  </motion.svg>
);
```

**Step 2:** Run `npm run build && npm run lint`

**Step 3:** Commit.

```bash
git add src/components/architecture/logtech-diagrams.tsx
git commit -m "feat: add LogTech-specific case study diagrams"
```

---

## Task 4: Update exports and wire pages

**Files:**
- Modify: `src/components/architecture/index.ts`
- Modify: `src/app/cto-crisis/page.tsx`
- Modify: `src/app/case-study/logtech/page.tsx`
- Delete: `src/components/architecture/placeholder-diagrams.tsx`

**Step 1:** Update `src/components/architecture/index.ts`:

```ts
export { ArchitectureViewer } from "./architecture-viewer";
export {
  GenericCrisisBefore,
  GenericCrisisIntervention,
  GenericCrisisAfter,
} from "./generic-crisis-diagrams";
export {
  LogTechBefore,
  LogTechIntervention,
  LogTechAfter,
} from "./logtech-diagrams";
```

**Step 2:** Update `src/app/cto-crisis/page.tsx` imports and usage. Change:

```tsx
import {
  ArchitectureViewer,
  PlaceholderBefore,
  PlaceholderIntervention,
  PlaceholderAfter,
} from "@/components/architecture";
```

To:

```tsx
import {
  ArchitectureViewer,
  GenericCrisisBefore,
  GenericCrisisIntervention,
  GenericCrisisAfter,
} from "@/components/architecture";
```

And change the viewer usage from:

```tsx
          <ArchitectureViewer
            beforeContent={PlaceholderBefore}
            interventionContent={PlaceholderIntervention}
            afterContent={PlaceholderAfter}
          />
```

To:

```tsx
          <ArchitectureViewer
            beforeContent={GenericCrisisBefore}
            interventionContent={GenericCrisisIntervention}
            afterContent={GenericCrisisAfter}
          />
```

**Step 3:** Update `src/app/case-study/logtech/page.tsx` imports and usage. Change:

```tsx
import { ArchitectureViewer } from "@/components/architecture";
import {
  PlaceholderBefore,
  PlaceholderIntervention,
  PlaceholderAfter,
} from "@/components/architecture";
```

To:

```tsx
import {
  ArchitectureViewer,
  LogTechBefore,
  LogTechIntervention,
  LogTechAfter,
} from "@/components/architecture";
```

And change the viewer usage from:

```tsx
            beforeContent={PlaceholderBefore}
            interventionContent={PlaceholderIntervention}
            afterContent={PlaceholderAfter}
```

To:

```tsx
            beforeContent={LogTechBefore}
            interventionContent={LogTechIntervention}
            afterContent={LogTechAfter}
```

**Step 4:** Delete `src/components/architecture/placeholder-diagrams.tsx`.

**Step 5:** Check that no other file imports from `placeholder-diagrams`. Run:

```bash
grep -r "PlaceholderBefore\|PlaceholderIntervention\|PlaceholderAfter\|placeholder-diagrams" src/
```

Expected: zero hits.

**Step 6:** Run `npm run build && npm run lint`

**Step 7:** Commit.

```bash
git add -A src/components/architecture/ src/app/cto-crisis/page.tsx src/app/case-study/logtech/page.tsx
git commit -m "feat: wire real diagrams, delete placeholders"
```

---

## Task 5: Check for remaining placeholder references in dynamic route

**Files:**
- Check: `src/app/case-study/[slug]/page.tsx`

**Step 1:** Read `src/app/case-study/[slug]/page.tsx` and check if it imports `PlaceholderBefore`/etc. If it does, update to use either LogTech diagrams or generic diagrams depending on context.

**Step 2:** Run `npm run build && npm run lint`

**Step 3:** Commit if changes were needed.

```bash
git add src/app/case-study/[slug]/page.tsx
git commit -m "fix: update dynamic case study route to use new diagrams"
```

---

## Final Verification

After all tasks are complete:

1. Run `npm run build` (full SSG export must succeed)
2. Run `npm run lint` (zero errors)
3. Run `grep -r "PlaceholderBefore\|PlaceholderIntervention\|PlaceholderAfter\|placeholder-diagrams" src/` (zero hits)
4. Run `npm run dev` and visually check:
   - `/cto-crisis` — viewer should show generic diagrams with red/amber/green glow, step dots, staggered animation
   - `/case-study/logtech` — viewer should show LogTech-specific diagrams
   - Toggle between all three states on both pages
   - Check that reduced-motion preference disables animations
5. Verify SVG elements have proper `aria-label` attributes

## Files NOT changed

- `src/components/case-study/case-study-layout.tsx` — just renders the `architectureViewer` prop as-is
- `src/components/case-study/metric-card.tsx` — unrelated
- All pathway pages other than `/cto-crisis` — they don't use the architecture viewer
