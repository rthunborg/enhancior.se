---
stepsCompleted: [step-01-init, step-02-context, step-03-starter, step-04-decisions, step-05-patterns, step-06-structure, step-07-validation, step-08-complete]
inputDocuments: [prd.md, ux-design-specification.md]
workflowType: 'architecture'
project_name: 'enhancior.se'
user_name: 'Rasmus'
date: '2026-02-23T14:55:26+01:00'
lastStep: 8
status: 'complete'
completedAt: '2026-02-23'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
- **Navigation & Routing:** Instant-feeling transitions with pre-fetched paths for triage, CTO pathway, founder pathway, and enterprise bypass.
- **Content:** Case studies, DORA metrics presentation, methodology toggles, and engagement tier details.
- **Integrations:** Calendly booking mechanics and secure static asset (PDF) delivery for enterprise credentials.

**Non-Functional Requirements:**
- **Performance:** 90+ Lighthouse scores. Zero runtime database latency.
- **Accessibility:** WCAG 2.1 AA compliance (keyboard nav, ARIA, focus rings).
- **Compliance:** GDPR compliant by default (No cookies, no consent banner needed).
- **Visuals:** Dark mode only, Geist font ecosystem, smooth reduced-motion aware animations.

**Scale & Complexity:**
Project complexity is Low-Medium regarding backend architecture, but High regarding frontend polish and interaction design.
- Primary domain: Web Frontend (SSG)
- Complexity level: Low Data / High UI
- Estimated architectural components: ~10 core custom components (Triage Selector, Architecture Viewer, Badge, etc.)

### Technical Constraints & Dependencies

- **Design System Constraint:** Must use shadcn/ui and Tailwind CSS as the foundation.
- **Animation Dependency:** Framer Motion required for the animated SVG architecture viewer with diagram primitives.
- **Hosting:** Must support robust Static Site Generation (SSG) and edge routing.
- **Zero-DB Constraint:** All content must be statically defined or pulled at build time (CMS/Markdown). No runtime data fetching allowed for V1 content.

### Cross-Cutting Concerns Identified

- **Accessibility (a11y):** Keyboard routing through custom triage selector; high-contrast dark mode requirements.
- **Animation System:** Respecting `prefers-reduced-motion` globally across Framer Motion and CSS transitions.
- **Routing Strategy:** Pre-fetching crucial paths (especially the CTO/Founder pathways) to achieve to 0ms perceived latency.

## Starter Template Evaluation

### Primary Technology Domain

Web Frontend (SSG) based on project requirements analysis focusing on instant load times, rich interactive components, and zero runtime database dependency.

### Starter Options Considered

1. **Vite + React (SPA):** Great development performance, but lacks built-in SSG and robust file-system routing pushing complexity onto the implementation.
2. **Astro:** Excellent for content-heavy SSG sites, but handling complex, deeply intertwined React state (like our 3-state SVG architecture viewer) can be more cumbersome compared to a pure React framework.
3. **Next.js (App Router):** Industry standard. Supports robust SSG (`output: 'export'`), provides excellent pre-fetching native to its `<Link>` component for that "0ms perceived latency", and has first-class support from shadcn/ui.
4. **shadcn/ui New "Create" CLI:** A unified scaffolding tool that elegantly sets up Next.js and the design system simultaneously.

### Selected Starter: Next.js (App Router) via shadcn CLI

**Rationale for Selection:**
Next.js provides the exact routing architecture needed (pre-fetching for instant transitions) while smoothly compiling down to static HTML/CSS/JS (`output: 'export'`). Furthermore, the new unified `npx shadcn@latest create` command sets up the entire foundation—Next.js 15, Tailwind, TypeScript, styling variables, and ESLint—in one go, perfectly aligned with the visual foundation.

**Initialization Command:**

```bash
npx shadcn@latest create enhancior-se
npm install framer-motion
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
TypeScript (strict mode enabled) running on Node.js (build time) / Browser (runtime).

**Styling Solution:**
Tailwind CSS configured with CSS variables for seamless theming (locked to dark mode per design specs).

**Build Tooling:**
Next.js compiler (Turbopack for fast dev, Webpack for production SSG export).

**Testing Framework:**
*(Will be configured separately, likely Jest/React Testing Library or Playwright depending on needs).*

**Code Organization:**
App Router (`src/app`) directory structure, promoting colocation of routes and components.

**Development Experience:**
Next.js hot module replacement, integrated ESLint, and instantly available shadcn/ui component CLI (`npx shadcn@latest add <component>`).

**Note:** Project initialization using this command should be the first implementation story.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Data Management: Local MDX vs Headless CMS vs Hardcoded
- Frontend State: Global Store vs Local/URL State
- Infrastructure: Hosting Platform

**Deferred Decisions (Post-MVP):**
- Authentication & User Management (Not needed for V1)
- Complex API/Backend design (Not needed for V1 SSG site)

### Data Architecture

**Decision: Local MDX (and Hardcoded structures)**
- **Version:** `@next/mdx` (latest stable integration, 15.x compatible)
- **Rationale:** Using MDX for case studies ("Diagnose & Cure") allows dropping interactive React components (like the 3-state SVG architecture viewer) directly into markdown content. The structural components (like the Triage cards) will be hardcoded in React to keep the homepage blazing fast. This completely satisfies the "Zero-DB" constraint and ensures sub-second LCP.
- **Provided by Starter:** No (Requires setting up `@next/mdx` or `next-mdx-remote`).

### Frontend Architecture

**Decision: URL State + Native React State (`useState`)**
- **Version:** React 19 (via Next.js 15 App Router)
- **Rationale:** No global state management (Redux/Zustand) is necessary. For macro-navigation (Triage), we will lean heavily on URL State via standard Next.js routing/search parameters to keep the app stateless across navigations. `useState` will be strictly reserved for localized micro-interactions like the SVG architecture viewer toggles.
- **Provided by Starter:** Yes (Next.js App Router `<Link>` and `useRouter`).

### Infrastructure & Deployment

**Decision: Vercel Hosting**
- **Version:** Vercel Platform (Current)
- **Rationale:** Vercel provides the absolute fastest path to production for Next.js App Router applications. The atomic deploys, edge caching, and perfect support for `output: 'export'` SSG builds guarantee we hit the NFR for 100/100 Lighthouse performance scores.
- **Provided by Starter:** Yes (Native integration).

### Decision Impact Analysis

**Implementation Sequence:**
1. Next.js + shadcn CLI initialization.
2. Vercel deployment scaffolding and CI/CD setup.
3. MDX configuration for the content pipeline.
4. Component implementation (Triage, Badges, etc.).

**Cross-Component Dependencies:**
The choice of MDX means any complex UI components built (like the DORA Metric Bar) must be exported cleanly so they can be imported and consumed directly within the `.mdx` files. URL State routing means components must be designed to reflect the URL predictably, enabling deep-linking from the get-go.

## Implementation Patterns & Consistency Rules

### Naming & File Conventions

**File Naming:**
All files (components, utils, hooks) MUST use `kebab-case.ts(x)`. No camelCase or PascalCase filenames allowed. (e.g., `custom-triage-card.tsx`).

**Component Exports:**
All React component exports MUST use `PascalCase`. (e.g., `export const CustomTriageCard`).

**Routing Naming:**
Next.js App Router folders MUST use `kebab-case`. (e.g., `/app/cto-pathway/page.tsx`).

### State Management & URL Routing

**URL State First:**
Any state that changes the macro-view (e.g., "Which triage card is selected?", or "Which methodology tab is active?") MUST be reflected in the URL (`href="/cto-crisis"`). This ensures the app remains stateless across navigations and is highly cacheable.

**Localized State (`useState`):**
`useState` is STRICTLY reserved for micro-interactions contained completely within a single component instance (e.g., "Which state of the 3-state SVG architecture viewer is currently active?").

### Component Hierarchy (Server vs. Client)

**Default to Server:**
Every `page.tsx` and layout MUST be a Server Component to ensure zero unnecessary JavaScript is shipped to the client, guaranteeing 100/100 Lighthouse performance scores.

**Isolated Interactivity:**
The `"use client"` directive MUST ONLY be added to specific, isolated leaf components that absolutely require it (i.e., components utilizing `useState`, Framer Motion, or DOM event listeners).

### Animation & Accessibility Enforcement

**Motion Framework:**
No raw CSS transitions for complex UI orchestrations. All complex animations MUST use Framer Motion.

**Reduced Motion Compliance:**
Every Framer Motion animation MUST respect reduced motion settings (e.g., bypassing the animation or checking `useReducedMotion()`). 

**Focus States:**
AI agents MUST NOT use `outline-none` to hide focus rings without immediately replacing them with a highly visible `ring-amber-500` outline that aligns with our locked-in aesthetic.

### Content Structure & Validation

**MDX Storage:**
MDX files MUST be kept in `/content` (or similar dedicated content directory) and NEVER within the `/app` router structure.

**Strict Frontmatter Validation (Zod):**
All MDX frontmatter MUST be strictly validated at build time using Zod (or an equivalent schema validation tool). If an `.mdx` file is missing a required field (e.g., `before_architecture` image path, specific DORA metrics, or a `title`), the Next.js build MUST explicitly fail. This prevents missing metadata from causing silent layout shifts or broken UI in production.

## Project Structure & Boundaries

### Complete Project Directory Structure

```text
enhancior-se/
├── package.json
├── next.config.mjs           # Configured for output: 'export' & MDX
├── tailwind.config.ts        # shadcn & typography configuration
├── tsconfig.json
├── content/                  # ALL Markdown/MDX lives here, out of /app
│   ├── case-studies/
│   │   └── logtech-ci-cd-rescue.mdx
│   └── methodology/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Global layout (Fonts, Enterprise Footer)
│   │   ├── page.tsx          # The ER Triage Homepage
│   │   ├── cto-crisis/       # Journey 1 Branch A
│   │   │   └── page.tsx
│   │   ├── cto-proactive/    # Journey 1 Branch B
│   │   │   └── page.tsx
│   │   ├── founder-rescue/   # Journey 2
│   │   │   └── page.tsx
│   │   ├── vendor-packet/    # Journey 3 (Enterprise Procurement)
│   │   │   └── page.tsx
│   │   └── not-found.tsx     # Custom 404
│   ├── components/
│   │   ├── ui/               # shadcn/ui components (auto-generated)
│   │   ├── triage/           # The specialized homepage triage cards
│   │   ├── architecture/     # Architecture viewer + animated SVG diagram components
│   │   ├── conversion/       # Pricing tiers and Calendly wrappers
│   │   └── layout/           # Header, Enterprise Footer
│   ├── lib/
│   │   ├── mdx.ts            # MDX parsing and Zod frontmatter validation
│   │   └── utils.ts          # shadcn cn() utility
│   └── types/
│       └── content.ts        # Zod schemas for MDX frontmatter
└── public/
    ├── vendor-packet.pdf     # Enterprise download
    └── images/
        └── architecture/     # SVGs for the Diagnose & Cure viewer
```

**Architecture Viewer Components (actual implementation):**
- `architecture-viewer.tsx` — Tabbed Före/Åtgärd/Efter viewer with state-colored border glow (red→amber→green), step progress dots, and Framer Motion content transitions
- `diagram-primitives.tsx` — Shared animated SVG building blocks: `ServiceBox`, `PipelineArrow`, `StatusDot`, `QualityGate`, `MetricBadge`, `DiagramLabel`
- `generic-crisis-diagrams.tsx` — Generic CI/CD crisis → resolution diagrams (used on `/cto-crisis`)
- `logtech-diagrams.tsx` — LogTech-specific pipeline diagrams (used on `/case-study/logtech`)

### Architectural Boundaries & Mapping

**1. Routing Boundaries (The Persona Pathways)**
*   `app/page.tsx`: Contains ONLY the `<TriageSelector />`. No heavy content. It routes the user.
*   `app/cto-crisis/`, `app/cto-proactive/`, `app/founder-rescue/`: These are static content aggregators. They import the MDX content and the Conversion (Pricing/Calendly) components.

**2. Component Boundaries**
*   **`components/ui/`**: Strictly reserved for generic shadcn primitives (`Button`, `Card`). No business logic.
*   **`components/architecture/`**: Isolated interactive zone. This is where `useState` and Framer Motion live. These components take pure data props and handle all SVG transitions.
*   **`components/conversion/`**: Handles the business end of the site. Displays the Engagement Tiers and wraps the Calendly embed.

**3. Content Boundaries (The MDX Pipeline)**
*   The `content/` folder is totally decoupled from React routing.
*   The `lib/mdx.ts` file acts as the explicit boundary. It reads the files, strictly validates them via Zod (enforcing Rule 5), and passes the validated data to the Next.js pages at build time. No React component should read the filesystem directly.

### Development Workflow Integration
The complete lack of a database or runtime API (`src/lib/db.ts` or `/api` does not exist) dictates the admin workflow. The sole content owner (Rasmus) adds `.mdx` files to `/content/case-studies` and commits to `main`. Vercel automatically rebuilds the static HTML, achieving the exact NFRs for sub-second delivery.

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
Next.js (App Router), shadcn/ui, Tailwind CSS v4, and Framer Motion are completely interoperable. Next.js natively supports the `output: 'export'` requirement for the SSG architecture.

**Pattern Consistency:**
The rule to strictly separate MDX content (in `/content`) from React routing (in `/src/app`) guarantees that content edits won't accidentally break routing logic. The "URL State First" rule prevents nasty back-button bugs common in heavily interactive React apps.

**Structure Alignment:**
The project tree perfectly supports the persona pathways defined in the PRD (CTO, Founder, Procurement).

### Requirements Coverage Validation ✅

**Epic/Feature Coverage:**
All three core user journeys have dedicated routing paths. The interactive SVG viewer is isolated in `components/architecture`, completely fulfilling FR9-FR11.

**Functional Requirements Coverage:**
The `lib/mdx.ts` boundary using Zod validates FR21-FR24 (Content Admin) safely.

**Non-Functional Requirements Coverage:**
The SSG `output: 'export'` constraint guarantees NFR1 (100/100 Lighthouse) and NFR2 (< 1s LCP). Forcing AI agents to default to Server Components guarantees NFR5 (< 200KB JS payload).

### Implementation Readiness Validation ✅

**Decision Completeness:**
All major decisions (Framework, Data, State, Styling, Infrastructure) are locked.

**Structure Completeness:**
Directory tree is explicitly defined down to the file naming conventions and component boundaries.

**Pattern Completeness:**
Strict rules established for components, URLs, file naming, accessibility, and content validation.

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**✅ Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key Strengths:**
* Zero database, zero runtime API complexity. Highly resilient.
* Perfect alignment between technical choices (SSG Next.js) and business goals (Lighthouse performance as a proof artifact).
* Enforceable rules (Zod validation, Server component defaults) protect the codebase from AI agent hallucinations during implementation.

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented
- Use implementation patterns consistently across all components
- Respect project structure and boundaries
- Refer to this document for all architectural questions

**First Implementation Priority:**
`npx shadcn@latest create enhancior-se` followed by project configuration.
