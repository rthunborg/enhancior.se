# Architecture Viewer Upgrade Design

**Date:** 2026-03-03
**Status:** Approved
**Scope:** Upgrade ArchitectureViewer component + replace placeholder diagrams with real content

## Context

The `ArchitectureViewer` component has good bones (tabbed interface, Framer Motion crossfade) but renders flat-color SVG rectangles as placeholders. The UX spec calls these "Diagnose & Cure" artifacts where "transitions themselves tell the story of competence." Two pages use the viewer: `/cto-crisis` (generic) and `/case-study/logtech` (specific).

## Viewer Component Enhancements

### 1. State-colored border glow

Outer container gets a `box-shadow` that transitions with active state:
- Före: muted red `rgba(220, 38, 38, 0.08)`
- Åtgärd: amber `rgba(245, 158, 11, 0.08)`
- Efter: green `rgba(34, 197, 94, 0.08)`

Subtle, not neon. Reinforces the narrative arc visually.

### 2. Staggered content animation

Instead of a single opacity crossfade, SVG element groups animate in sequentially using Framer Motion `staggerChildren` (50-80ms per group). Main structural elements first, then labels, then status indicators.

### 3. Step progress indicator

Three connected dots below the toggle bar. Filled = active, dimmed = inactive. Shows position in the before → intervention → after narrative.

## Diagram Content: Generic (/cto-crisis)

Generalized CI/CD crisis-to-resolution flow.

**Före:** Monolith block connected to a single fragile pipeline. Red status dots on pipeline stages. Tangled dependency lines. Manual deploy icon. Message: everything coupled, pipeline is SPOF.

**Åtgärd:** Monolith splitting into isolated domain modules. Amber highlights on intervention points. Quality gates being inserted between stages. "30 dagar" timeline label.

**Efter:** Separated service boxes with independent pipelines. Green status dots. Blue-green deployment indicator. Monitoring icon. Message: independent deploys, automated gates, confidence.

## Diagram Content: LogTech-specific (/case-study/logtech)

Grounded in the actual case study narrative (CI/CD rescue of a logistics SaaS).

**Före:** "LogTech Pipeline" title. Monolithic build block, 60% fail rate badge, manual oversight icon, 14d lead time label. Red connection lines.

**Åtgärd:** Pipeline splitting into 3 isolated stages with contract boundaries. Quality gate shields at each boundary. Test coverage indicator growing.

**Efter:** 3 isolated green pipeline stages. Blue-green deployment switcher. "4/dag" deploy frequency, "98%" success badge. Zero-downtime rollback arrow. Monitoring dashboard.

## Visual Style

Sully-inspired hybrid: technical accuracy with atmospheric polish.

- Dark background (#0A0A0A inner), generous negative space
- Geist Mono labels on all boxes and metrics
- Thin glowing edges on service boxes (gradient borders, not flat fills)
- Connection lines: dashed when fragile, solid when stable
- Colors: muted red/amber/green, never fully saturated
- Every visual element represents something real, no decoration

## File Structure

```
src/components/architecture/
  architecture-viewer.tsx          # Enhanced (glow, stagger, step dots)
  placeholder-diagrams.tsx         # Deleted
  generic-crisis-diagrams.tsx      # New: generic before/intervention/after
  logtech-diagrams.tsx             # New: LogTech-specific diagrams
  diagram-primitives.tsx           # New: shared SVG building blocks
  index.ts                         # Updated exports
```

### diagram-primitives.tsx

Shared animated SVG components: `ServiceBox`, `PipelineArrow`, `StatusDot`, `QualityGate`, `MetricBadge`, `MonitorIcon`. Accept color/state props. Wrap SVG groups in `motion.g` for stagger animation.

## Pages Modified

- `src/app/cto-crisis/page.tsx` — imports generic diagrams instead of placeholders
- `src/app/case-study/logtech/page.tsx` — imports LogTech-specific diagrams
- `src/components/architecture/index.ts` — updated exports

## Constraints

- All inline SVG, no external assets (SSG-compatible)
- Framer Motion already in stack
- `useReducedMotion` respected (skip stagger, instant transitions)
- WCAG 2.1 AA: `aria-label` on all SVGs, sufficient contrast on labels
- Dark-mode only (matches site)
