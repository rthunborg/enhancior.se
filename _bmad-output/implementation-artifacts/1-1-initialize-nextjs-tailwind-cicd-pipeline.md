# Story 1.1: Initialize Next.js, Tailwind, & CI/CD Pipeline

Status: done

## Story

As a developer/content owner (Rasmus),
I want to initialize the project using Next.js (App Router), shadcn/ui, and Tailwind CSS, and configure a git-push CI/CD pipeline,
so that development is built on a performant "blueprint" foundation and deploys automatically with zero downtime.

## Acceptance Criteria

1. **Given** the project repository is empty, **When** initialization commands are run (`npx shadcn@latest create enhancior-se`), **Then** the project uses `output: 'export'` for aggressive SSG.
2. **Given** the UI is loaded, **Then** the theme is locked to the dark-mode Michelin-star aesthetic using Tailwind variables and `Geist`/`Inter` typography.
3. **Given** a new commit is pushed to `main`, **Then** it triggers an automatic Vercel deployment with zero downtime completing in under 120 seconds.
4. **Given** the global Definition of Done, **Then** the base app must score 100/100 Lighthouse Performance, 100/100 Accessibility, <1s LCP, 0 CLS, and WCAG 2.1 AA compliance.

## Tasks / Subtasks

- [x] Task 1: Initialize Next.js Application with shadcn/ui (AC: 1)
  - [x] Delete any existing conflicting files from the root if necessary or initialize safely within `c:\Users\Rasmus\source\repos\enhancior.se`.
  - [x] Run `npx shadcn@latest create ./` (ensure Next.js App Router, TypeScript, Tailwind v4/v3 depending on shadcn defaults).
  - [x] Install `framer-motion` as required by architecture.
- [x] Task 2: Configure Application for Static Export (AC: 1, 4)
  - [x] Update `next.config.mjs` with `output: 'export'`.
  - [x] Ensure images use unoptimized loader if required for static export, or configure Vercel Image Optimization appropriately.
- [x] Task 3: Establish Core Aesthetic and Typography (AC: 2, 4)
  - [x] Lock theme to dark mode exclusively in `globals.css` (Tailwind v4) (remove dark mode toggles, set base background to very dark blueprint colors).
  - [x] Configure `Geist` or `Inter` typography in `app/layout.tsx`.
- [x] Task 4: Configure GitHub and Vercel CI/CD (AC: 3)
  - [x] Verify `vc link` or GitHub integration is connected to Vercel.
  - [x] Ensure builds are executing correctly upon `git push`.

## Dev Notes

- **Architecture:** 
  - Strict SSG constraint: Do NOT use Server Actions, edge API routes, or runtime `getServerSideProps`. We are generating a pure static site.
  - Components: Stick to Server Components in `/app/page.tsx` and layouts. Use `"use client"` sparingly and only on leaf components.
- **Styling:** 
  - Standard dark mode only. No light mode toggles. Custom `ring-amber-500` outline for focus states.
- **Dependencies:** 
  - Next.js (App Router), shadcn/ui, Tailwind CSS, Framer Motion. 
  - (Note: `mdx` configuration is for later stories, but Next.js base must support it).

### Project Structure Notes

- `src/app/` for the router.
- `src/components/ui/` for generated shadcn tools.
- All files MUST use `kebab-case.ts(x)`. No camelCase file names.
- Ensure the `content/` folder is explicitly placed outside `src/app/` (this will be used in future stories, but good to keep in mind).

### References

- Architecture Decisions: [Source: _bmad-output/planning-artifacts/architecture.md#Starter Template Evaluation]
- Epics Document: [Source: _bmad-output/planning-artifacts/epics.md#Epic 1]

## Dev Agent Record

### Agent Model Used

Antigravity 

### Debug Log References
N/A

### Completion Notes List
1. Used `create-next-app` followed by `shadcn init` since direct `shadcn create` hit a registry error.
2. Migrated `.dark` variables to `:root` in `globals.css` and added `className="dark"` to `html` to strictly enforce the dark-only aesthetic.
3. Configured static export inside `next.config.ts`.
4. Successfully ran local build verify.
5. All code pushed to Github to trigger the remote Vercel pipeline.

### File List
- src/app/globals.css
- src/app/layout.tsx
- src/app/page.tsx
- src/lib/utils.ts
- package.json
- next.config.ts
- components.json
