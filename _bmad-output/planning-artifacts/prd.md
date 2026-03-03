---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments: [brainstorming-session-2026-02-20.md]
workflowType: 'prd'
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 1
  projectDocs: 0
classification:
  projectType: web_app
  domain: professional_services_consultancy_marketing
  complexity: low-medium
  projectContext: greenfield
---

# Product Requirements Document - enhancior.se

**Author:** Rasmus
**Date:** 2026-02-20

## Executive Summary

Enhancior.se is the company website for Enhancior AB — a solo software engineering and architecture consultancy that helps SaaS companies and scale-ups close the Trust Gap between business ambition and engineering execution. The site targets three distinct audiences — CTOs under scaling pressure, non-technical founders facing technical bankruptcy, and enterprise procurement leads — and routes each through a tailored conversion path designed to pre-sell authority and filter out unqualified leads before any human interaction occurs.

The site replaces a word-of-mouth business model (which sells hours) with a digital asset that sells productized authority: a 30-dagars Teknisk Revision, Teknisk ledning på deltid, and Enterprise Rescue engagements. Built on Next.js and deployed on Vercel, enhancior.se functions as a 24/7 autonomous sales engineer — building Michelin-star exclusivity, diagnosing visitor pain in real time, and converting qualified prospects into pre-sold discovery calls.

### What Makes This Special

The site inverts the standard consultancy website paradigm. Instead of proving credentials to visitors, it immediately diagnoses their pain through an ER Triage homepage — a stark, dark-mode screen asking "Var är ert tekniska slukål?" Visitors self-select their symptom, triggering a persona-routed flow that delivers targeted proof of competence (war-story architecture diagrams, before→after case studies, verifiable impact metrics) directly relevant to their specific crisis. Radical pricing transparency and scarcity mechanics (real-time availability, cohort-based scheduling) further filter and pre-qualify prospects, ensuring every discovery call begins with "When can we start?" rather than "What do you do?"

The brand DNA fuses four analogies into a cohesive identity: ER Triage UX (immediate diagnostic routing), Michelin-Star Aesthetic (dark mode, blueprint motifs, negative space), Real Estate Authority (quarterly Nordic SaaS Architecture Reports), and Special Forces Identity ("drop in, neutralize, train, extract" — explicitly anti-forever-consultant).

## Project Classification

| Dimension | Value |
|-----------|-------|
| **Project Type** | Web Application (Next.js SPA with persona-routing, interactive elements) |
| **Domain** | Professional Services / Consultancy Marketing |
| **Complexity** | Low-Medium (no regulated industry constraints; UX and conversion design add complexity) |
| **Project Context** | Greenfield |
| **Tech Stack** | Next.js on Vercel |

## Success Criteria

### User Success

Success is measured by a qualitative shift in discovery call quality, not conversion speed. The site succeeds when:

- **Prospects reference specific site content on calls** — they cite a Diagnose & Cure case study, quote their Scaling Friction score, or name the exact engagement tier they want. The site has done the selling before any human conversation.
- **Absence of generic questions** — "What do you do?" and "Can you send a portfolio?" disappear entirely. Prospects arrive pre-educated on the methodology, the engagement models, and the outcomes.
- **The "private Slack channel" effect** — visitors feel the site articulates their exact, specific pain with an intimacy that generic consultancy sites cannot match. Each persona pathway delivers content so targeted it feels bespoke.

### Business Success

This V1 is a premium positioning asset, not a volume funnel. Business success is defined by lead quality transformation, not revenue quotas:

- **100% pre-qualification** — every inbound inquiry arrives with budget awareness and a specific engagement in mind. "When are you available for the 30-Day Audit?" replaces "What's your hourly rate?"
- **Model shift validated** — the pipeline moves from selling hours (word-of-mouth) to selling productized engagements (audits, deltidsuppdrag). The site is the mechanism that makes this possible.
- **Enterprise self-service** — procurement leads download vendor packets, verify F-skatt/compliance credentials, and complete their internal vetting without requiring custom proposals.

### Technical Success

Non-negotiable. The site itself is a proof artifact of elite technical architecture:

- **Performance** — 100/100 Lighthouse across all categories, sub-second LCP (see NFR1-NFR7 for full targets)
- **Feel** — zero jank, silky-smooth micro-interactions, native-app tactile quality
- **Analytics** — lightweight persona-pathway tracking (see FR25-FR28), zero bloated marketing scripts (see NFR23)
- **Stack discipline** — Next.js on Vercel. Clean codebase that could itself be shown to a CTO prospect as proof of craft

### Measurable Outcomes

| Metric | Target | How Measured |
|--------|--------|--------------|
| Lighthouse score (all categories) | 100/100 | Automated CI checks |
| Page load time (LCP) | < 1 second | Vercel Analytics |
| Discovery call quality | Prospects reference specific site content | Qualitative — tracked manually |
| Hourly rate questions | Zero | Qualitative — tracked manually |
| Persona pathway completion | Track drop-off per pathway | Vercel Analytics / PostHog |
| Enterprise self-service | Vendor packet downloads without manual follow-up | Analytics event tracking |

## Product Scope

Scope philosophy: flawless execution of a tiny scope over mediocre breadth. Detailed feature breakdown, phased roadmap, and risk mitigation in the [Project Scoping & Phased Development](#project-scoping--phased-development) section.

| Phase | Summary |
|-------|--------|
| **MVP (Phase 1)** | ER Triage homepage, three persona pathways, one Diagnose & Cure case study, engagement tiers, Calendly CTA, enterprise footer, Michelin-Star dark-mode aesthetic, Swedish copy, MDX content pipeline |
| **Growth (Phase 2)** | Additional case studies, Scaling Friction self-assessment, availability badge, vendor packet PDF, gated lead magnets |
| **Vision (Phase 3)** | Nordic SaaS Architecture Reports, interactive architecture diagrams, dynamic persona sorting, cohort-based reservation |

## User Journeys

### Journey 1: The CTO Under Pressure (Branching)

**Erik, 38 — CTO at a Series B SaaS company (85 employees, Stockholm)**

Erik's deployment pipeline broke again last Friday. The third time this quarter. His VP of Engineering just quit, and the board is asking hard questions about why the platform can't handle their enterprise clients' SLA requirements. He's Googling at 11pm — not for "software consultant," but for "SaaS architecture rescue" and "fractional CTO Sweden."

He lands on enhancior.se. No hero banner. No smiling stock photo team. A dark screen asking: **"Var är ert tekniska slukål?"**

He exhales. Someone gets it.

**Branch A — Crisis:** Erik clicks *"Releases are constantly breaking."* The site responds with a Diagnose & Cure case study — a before→after architecture diagram of an eerily similar situation: a SaaS company whose CI/CD pipeline was a house of cards. He sees the intervention timeline (30 days), the specific decisions made, the measurable outcome (deployment frequency 1/week → 4/day). Below: the 30-dagars Teknisk Revision tier with a transparent starting price. He clicks "Book a Whiteboarding Session" and picks a Calendly slot. When he gets on the call, his first words are: *"I read the case study. Our situation is almost identical. When can we start the Audit?"*

**Branch B — Proactive:** Erik clicks *"The team is growing faster than our architecture."* He's routed to content about Teknisk ledning på deltid — 1-2 days/week of embedded technical leadership. The tone is explicit: *"I stabilize your tech and help you hire my replacement."* He sees the engagement model, the anti-forever-consultant guarantee, and the focus on knowledge transfer. He books a whiteboarding session to explore fit. On the call, he already knows the retainer structure and is asking about availability for Q2.

**Reveals:** ER Triage routing logic, Diagnose & Cure interactive case study, engagement tier presentation, Calendly integration, persona-specific copy and proof artifacts.

---

### Journey 2: The Non-Technical Founder

**Sara, 42 — CEO/Co-Founder of a pre-Series A health-tech startup (12 employees, Gothenburg)**

Sara's CTO left three months ago. She's been managing the dev team herself — badly. She doesn't speak "microservices" or "event-driven architecture." She speaks runway, burn rate, and board decks. Her product is stalling, and she's terrified her next investor meeting will expose that she has no technical strategy.

A fellow founder mentions Enhancior at a startup dinner. Sara visits enhancior.se on her phone the next morning.

The triage screen doesn't intimidate her. *"Where is the system bleeding?"* She scans the options — they're written in business language, not jargon. She picks *"We lost our technical leader and the team is drifting."* She's routed into content framed as business outcomes: stabilize velocity, create a technical roadmap the board can understand, bridge the gap until a permanent CTO hire. The messaging is clear: *"I'm not here to replace your CTO. I'm here to keep the ship steady while you find the right one."*

She sees the Teknisk ledning på deltid retainer, the transparent pricing bracket, and realizes the budget fits within her current burn. The case study she reads isn't about code — it's about a founder who went from "terrified of technical due diligence" to "closed their Series A with a clean architecture story." She books the whiteboarding session. On the call, she says: *"I need exactly what you described — the bridge. Can you start this month?"*

**Reveals:** Business-outcome messaging per persona, non-technical copy variants, mobile-first responsive design, founder-specific case study framing, Calendly CTA within persona flow.

---

### Journey 3: The Enterprise Procurement Lead

**Anna, 35 — IT Procurement Specialist at a large Swedish bank (5,000+ employees, Stockholm)**

Anna's Engineering Director has already decided he wants to engage Enhancior for a legacy modernization assessment. Anna's job isn't to evaluate technical fit — it's to check compliance boxes, verify vendor credentials, and produce a shortlist document for the procurement committee by Thursday.

She lands on enhancior.se from a forwarded link. She doesn't care about the triage screen. She scrolls past it — or uses the minimal footer navigation — looking for vendor documentation. Within 30 seconds she finds:

- **Organisationsnummer** and **"Godkänd för F-skatt"** in the footer
- Enterprise case study referencing a bank modernization project
- A "Download Vendor Packet" button that gives her a clean PDF: CV, certifications (TOGAF, AWS), engagement history, rate brackets, and compliance attestations

She downloads the PDF, pastes the Orgnr into her vendor management system, and adds Enhancior to the shortlist. She never books a call. She never needs to. The Engineering Director handles the technical conversation. Anna's entire interaction with the site took under 2 minutes and she checked every compliance box without a single email.

**Reveals:** Enterprise footer with Swedish business credentials, vendor packet PDF download, certification/compliance display, minimal footer navigation as safety net for non-triage users, rate bracket visibility, enterprise case study content.

---

### Journey 4: The Content Owner (Admin — Ultra-Lean)

**Rasmus — the sole operator of Enhancior AB**

A 30-Day Audit just wrapped. The results were dramatic — a 3x improvement in deployment frequency for a logistics SaaS company. Rasmus wants to turn this into his second Diagnose & Cure case study on the site.

He opens his IDE, creates a new MDX file in the `/content/case-studies/` directory. He writes the narrative in Markdown — the before-state architecture diagram (embedded as an SVG), the three key decisions, the after-state, and the impact metrics. He drops two optimized images into the assets folder. He pushes to `main`.

Vercel picks up the commit, rebuilds the static pages in under 60 seconds, and the new case study is live — automatically slotted into the Diagnose & Cure section with zero configuration. Sub-second load times preserved. No CMS login. No admin panel. No deploy scripts.

Later, he updates his availability status from "fully booked" to "1 slot opening Q3" by changing a single value in a config file and pushing again.

**Reveals:** MDX/Markdown content model, git-push deployment workflow, static site generation for performance, content directory structure, no-CMS architecture constraint, config-driven dynamic elements (availability status).

---

### Journey Requirements Summary

| Capability Area | Revealed By Journeys |
|----------------|---------------------|
| **ER Triage Routing** | CTO (branching), Founder (symptom selection) |
| **Persona-Specific Content** | CTO (tech depth), Founder (business outcomes), Procurement (compliance) |
| **Diagnose & Cure Case Studies** | CTO (interactive architecture narrative), Founder (business-framed), Content Owner (MDX authoring) |
| **Engagement Tier Presentation** | CTO (audit + retainer), Founder (retainer), Procurement (rate brackets) |
| **Calendly Integration** | CTO (booking), Founder (booking) |
| **Enterprise Credentials & Vendor Packet** | Procurement (F-skatt, PDF download, Orgnr) |
| **Mobile-First Responsive Design** | Founder (phone access) |
| **MDX Content Pipeline** | Content Owner (git-push workflow) |
| **Config-Driven Dynamic Elements** | Content Owner (availability status) |
| **Minimal Footer Navigation** | Procurement (bypass triage) |

## Domain-Specific Requirements

### Language & Localization

- **Primary site language: Swedish.** All narrative copy, CTAs, persona pathway content, case study text, and engagement tier descriptions are written in Swedish.
- **Technical terminology in English where industry-standard.** Terms like "CI/CD pipeline," "microservices," "event-driven architecture," and framework names remain in English — this mirrors how Swedish tech professionals actually communicate.
- **No language toggle.** The site is Swedish-only. No i18n infrastructure, no bilingual content management.
- **SEO in Swedish.** Meta titles, descriptions, and structured data target Swedish-language search queries (e.g., "teknisk revision SaaS", "teknisk ledning konsult" not "fractional architect SaaS").
- **Enterprise Vendor Packet** — the downloadable PDF may include English sections where required by international procurement processes, but the site itself remains Swedish.

## Innovation & Novel Patterns

### Detected Innovation Areas

**UX Paradigm Inversion — "Diagnostic Triage" for Professional Services Marketing**

The core innovation is not technological but experiential: the site inverts the standard consultancy website model. Instead of presenting credentials for the visitor to evaluate (the universal pattern), enhancior.se immediately diagnoses the visitor's pain. The "Where is the system bleeding?" triage screen forces self-selection, which simultaneously:

1. Communicates extreme authority (the site acts like a specialist, not a salesperson)
2. Eliminates irrelevant content (each persona sees only what matters to them)
3. Creates engagement through self-identification (visitors feel "seen")

This pattern has no direct precedent in professional services marketing. The closest analogues are medical symptom-checker UIs and e-commerce product recommendation engines — neither of which has been applied to solo consultancy positioning.

### Validation Approach

- **Persona pathway drop-off rates** — track whether visitors complete the triage flow or abandon. High completion = the model works; high abandonment = the triage options need refinement.
- **Discovery call quality** — qualitative validation that pre-sold prospects reference specific site content, confirming the triage→content→conversion pipeline functions.
- **Comparison baseline** — before the site launches, document current word-of-mouth conversion patterns. Post-launch, compare inbound quality to establish the site's independent contribution.

### Risk Mitigation

- **Risk: Triage options don't resonate** — visitors can't find their symptom → they bounce. *Mitigation:* Start with 3-4 broad symptom categories. Use pathway analytics to identify the most common drop-off points and iterate on copy.
- **Risk: Non-triage visitors feel blocked** — procurement leads (Anna) don't want triage, they want vendor docs. *Mitigation:* Minimal footer navigation provides a safety-net bypass, as designed in Journey 3.

## Web App Specific Requirements

### Project-Type Overview

A statically generated Next.js web application deployed on Vercel, optimized for aggressive performance and premium tactile feel. The stack prioritizes SSG over SSR, eliminates runtime complexity, and treats the site itself as a proof artifact of elite engineering craft.

### Browser Support

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | Latest 2 | Full |
| Firefox | Latest 2 | Full |
| Safari | Latest 2 (macOS + iOS) | Full |
| Edge | Latest 2 | Full |
| IE / Legacy | All | Not supported |

- **Modern evergreen only.** No polyfills, no legacy workarounds, no transpilation to ES5.
- Clean, modern JavaScript/TypeScript targeting ES2022+.

### Rendering & Performance Architecture

- **Aggressive SSG** — all pages statically generated at build time. No SSR, no client-side data fetching for core content.
- **Zero real-time features for V1** — no WebSockets, no client-side polling, no live-updating elements.
- **Dynamic elements via rebuild** — availability status and case study additions trigger Vercel rebuilds via git push. Static output, sub-second delivery.
- **Performance targets:** See NFR1-NFR7 for definitive thresholds (100/100 Lighthouse all categories, < 1s LCP, 0 CLS, < 100ms FID, < 200KB page weight).

### SEO Strategy

- **Primary language:** Swedish
- **Meta titles & descriptions:** Swedish-language, targeting queries like "teknisk revision SaaS", "teknisk ledning konsult," "arkitektur rescue Stockholm"
- **Structured data:** Organization, Service, FAQ schemas in Swedish
- **Static generation:** inherently SEO-friendly — fast load, clean HTML, zero client-rendered content for crawlers
- **No bloated marketing scripts** — Vercel Analytics or PostHog only, lightweight and async

### Accessibility (WCAG 2.1 AA — Non-Negotiable)

Full WCAG 2.1 AA compliance is a hard requirement, not a stretch goal:

- **Business driver:** Swedish public sector and enterprise procurement (LOU) actively verify accessibility compliance
- **Keyboard navigation:** full site navigable without mouse, including ER Triage routing and persona pathways
- **Screen reader support:** semantic HTML, ARIA labels, proper heading hierarchy, alt text on all images including architecture diagrams
- **Color contrast:** minimum 4.5:1 ratio for normal text, 3:1 for large text — aligns naturally with Michelin-Star dark-mode aesthetic
- **Motion:** respect `prefers-reduced-motion` for all micro-interactions and transitions
- **Focus management:** visible focus indicators on all interactive elements, proper focus trapping in modals/overlays

### Responsive Design (Mobile-First)

- **Mobile-first architecture** — the conversion engine starts on mobile
- **Triage UI on mobile:** premium, tactile native-app feel. Large thumb-friendly tap targets (minimum 44×44px), zero layout shift, silky-smooth transitions
- **Desktop expansion:** the blueprint canvas aesthetic opens up — expansive architecture diagrams, generous negative space, full Michelin-Star visual treatment
- **Breakpoints:**

| Breakpoint | Target | Design Priority |
|-----------|--------|----------------|
| < 768px | Mobile (phone) | Primary — triage + conversion engine |
| 768px–1024px | Tablet | Responsive adaptation |
| > 1024px | Desktop | Full blueprint canvas aesthetic |

### Implementation Considerations

- **Framework:** Next.js (App Router) with TypeScript
- **Deployment:** Vercel (automatic SSG rebuilds on git push)
- **Content model:** MDX files in repository — no external CMS
- **Styling:** CSS approach TBD in architecture phase — must support dark-mode Michelin-Star aesthetic with zero layout shift
- **Analytics:** Vercel Analytics or PostHog — lightweight, async, persona-pathway tracking only
- **No client-side JavaScript bloat** — interactive elements (triage routing, diagram hover states) must be minimal and purposeful

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — validating that the ER Triage paradigm inversion actually pre-sells prospects and transforms discovery call quality. The thesis is not "can we build a website" but "does diagnostic-first positioning eliminate tire-kicker calls?"

**Resource Model:** Solo architect/product owner (Rasmus) leveraging AI coding agents (Cursor, v0) for front-end execution. No external designers or developers.

**Timeline:** Quality-gated, no fixed deadline. "Ship when it's an undeniable masterpiece." Existing word-of-mouth pipeline eliminates urgency pressure — this is a positioning play, not a survival play.

**Aesthetic Feasibility:** The Michelin-Star aesthetic is achievable as a solo + AI build because it relies on radical minimalism — stark typography (Inter/Geist), monochromatic dark mode, vast negative space, flawless alignment — not complex 3D or custom illustrations. Execution via shadcn/ui + Tailwind CSS.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- CTO Under Pressure (branching: crisis → audit, proactive → retainer)
- Non-Technical Founder (business-outcome framing → retainer)
- Enterprise Procurement (bypass triage → vendor packet + credentials)
- Content Owner (MDX → git push → Vercel rebuild)

**Must-Have Capabilities:**

| Capability | Justification |
|-----------|---------------|
| ER Triage Homepage | Core UX innovation — the entire thesis depends on this |
| Three Persona Pathways | Without routing, the triage screen is a dead end |
| One Diagnose & Cure case study | Proof of competence artifact — validates the "pre-sell" thesis |
| Engagement Tiers (Revision / Deltid / Rescue) | Without productized offerings, there's nothing to convert to |
| Calendly CTA | Without frictionless booking, qualified leads drop off |
| Enterprise Footer (Orgnr, F-skatt) | Procurement self-service requires this from day one |
| Michelin-Star Dark-Mode Aesthetic | The aesthetic *is* the authority signal — can't launch without it |
| Swedish-language copy | Market requirement — .se domain, Swedish audience |
| MDX content pipeline | Admin needs to update case studies and availability without a CMS |

**Technical Specification — Diagnose & Cure Interactive Component:**

De-risked to a lightweight, three-state SVG toggle:

| State | Display | Transition |
|-------|---------|----------|
| 1: The Bleeding System | "Before" SVG — tangled monolith | Entry state |
| 2: The Intervention | Same SVG with bottleneck/decision nodes highlighted | Framer Motion opacity/highlight |
| 3: The Cure | "After" SVG — clean, decoupled architecture | Framer Motion crossfade |

Implementation: pure SVGs managed via React state + Framer Motion for smooth layout transitions. Minimal JavaScript, maximum storytelling. No canvas, no WebGL, no heavy libraries.

### Post-MVP Features

**Phase 2 (Growth):**
- 2-3 additional Diagnose & Cure case studies (same SVG toggle component, new content)
- Scaling Friction Self-Assessment (5-question form → score → engagement recommendation)
- Real-time availability badge (🟢 1 slot available)
- Downloadable Vendor Packet PDF (auto-generated from site data)
- Gated toolkit lead magnets

**Phase 3 (Expansion):**
- Quarterly Nordic SaaS Architecture Reports
- Interactive Architecture Diagrams (clickable decision-point exploration)
- Dynamic persona sorting (analytics-driven content reordering)
- Cohort-based reservation model

### Risk Mitigation Strategy

| Risk Type | Risk | Mitigation |
|-----------|------|----------|
| **Technical** | SVG Diagnose & Cure component scope creep | Boxed to three toggle states — no canvas/WebGL. SVGs authored as static assets, not generated at runtime |
| **Technical** | Lighthouse 100/100 difficult with micro-interactions | Framer Motion is tree-shakable; test Lighthouse on every PR. Cut animations before cutting performance |
| **Market** | Triage options don't resonate with visitors | Start with 3-4 broad symptom categories. Use persona pathway analytics to iterate copy post-launch |
| **Market** | Swedish-language limits international reach | Intentional constraint — the Swedish market is the beachhead. International expansion is a Phase 3+ decision |
| **Resource** | Solo developer bottleneck | AI agents de-risk velocity. Quality-gated timeline removes time pressure. MDX pipeline enables content updates independent of code changes |
| **Resource** | Aesthetic ambition exceeds solo capacity | Aesthetic relies on minimalism (typography + space + contrast), not illustration or animation complexity. shadcn/ui + Tailwind provide a solid foundation |

## Functional Requirements

### Diagnostic Triage & Persona Routing

- **FR1:** Visitors can self-select their primary pain point from the ER Triage homepage
- **FR2:** The system routes visitors to a persona-specific content pathway based on their triage selection
- **FR3:** Visitors can navigate the site without using triage (fallback navigation for non-triage users like procurement)
- **FR4:** The triage flow adapts presentation for both mobile and desktop viewports

### Persona Content Pathways

- **FR5:** CTO visitors can view technical-depth content relevant to their selected pain point (crisis or scaling)
- **FR6:** Founder visitors can view business-outcome content framed in non-technical language
- **FR7:** Enterprise procurement visitors can access vendor compliance credentials directly
- **FR8:** Each persona pathway delivers targeted proof-of-competence artifacts (case studies, metrics, diagrams)

### Diagnose & Cure Case Studies

- **FR9:** Visitors can view an interactive before→after architecture case study
- **FR10:** The case study component supports three distinct visual states (Before, Intervention, After) with smooth transitions
- **FR11:** Case study content includes verifiable impact metrics (timelines, measurable outcomes)
- **FR12:** Case studies are authored as MDX files and rendered statically at build time

### Engagement Tiers & Conversion

- **FR13:** Visitors can view productized engagement offerings with transparent pricing brackets
- **FR14:** The system presents three engagement tiers: 30-dagars Teknisk Revision, Teknisk ledning på deltid, and Enterprise Rescue
- **FR15:** Each engagement tier displays starting price, scope, and timeline information
- **FR16:** Visitors can book a discovery call directly from within persona pathways via embedded Calendly
- **FR17:** The booking CTA is framed as "Free 45-min Whiteboarding Session"

### Enterprise Self-Service

- **FR18:** Procurement users can verify Swedish business credentials (Organisationsnummer, F-skatt status) from the site footer
- **FR19:** Procurement users can identify Enhancior as a solo practitioner consultancy
- **FR20:** The footer displays enterprise-relevant credentials persistently across all pages
- **FR41:** Procurement visitors can download a static, pre-packaged vendor compliance PDF directly from their pathway

### Content Management (Admin)

- **FR21:** The content owner can add new case studies by creating MDX files in the content directory
- **FR22:** The content owner can update availability status by modifying a configuration value
- **FR23:** Content changes trigger automatic static page rebuilds on Vercel via git push
- **FR24:** New case studies are automatically integrated into the site structure without additional configuration

### Analytics & Tracking

- **FR25:** The system tracks visitor pathway selection (which triage option, which persona path)
- **FR26:** The system tracks persona pathway drop-off rates at each step
- **FR27:** The system tracks engagement tier interaction (views, CTA clicks)
- **FR28:** Analytics implementation adds zero visible performance impact (async, lightweight)

### Visual Identity & Presentation

- **FR29:** The site presents a consistent dark-mode, blueprint-motif aesthetic across all pages
- **FR30:** All interactive elements provide smooth, jank-free micro-animations and transitions
- **FR31:** The site renders correctly and feels premium on mobile devices (thumb-friendly targets, no layout shift)
- **FR32:** Architecture diagrams expand into full blueprint canvas treatment on desktop viewports
- **FR33:** All site copy is presented in Swedish with technical terminology in English where industry-standard

### Accessibility

- **FR34:** All interactive elements are keyboard-navigable, including triage routing and persona pathways
- **FR35:** All content is screen-reader accessible with proper semantic structure
- **FR36:** All visual content includes appropriate alternative text descriptions
- **FR37:** The site respects user motion preferences (`prefers-reduced-motion`)

### SEO & Discoverability

- **FR38:** Each page includes Swedish-language meta titles, descriptions, and structured data
- **FR39:** The site generates clean, crawlable HTML with proper heading hierarchy
- **FR40:** Organization, Service, and FAQ structured data schemas are present

## Non-Functional Requirements

### Performance

| NFR | Metric | Threshold |
|-----|--------|-----------|
| NFR1 | Lighthouse Performance Score | 100/100 on every page |
| NFR2 | Largest Contentful Paint (LCP) | < 1 second |
| NFR3 | Cumulative Layout Shift (CLS) | 0 |
| NFR4 | First Input Delay (FID) | < 100ms |
| NFR5 | Total page weight (HTML + CSS + JS) | < 200KB compressed per page |
| NFR6 | Time to Interactive (TTI) | < 1.5 seconds on 4G mobile |
| NFR7 | Diagnose & Cure SVG transitions | 60fps with no dropped frames |

### Accessibility

| NFR | Metric | Threshold |
|-----|--------|-----------|
| NFR8 | WCAG 2.1 AA Compliance | Full conformance — zero violations |
| NFR9 | Lighthouse Accessibility Score | 100/100 |
| NFR10 | Color contrast ratio (normal text) | ≥ 4.5:1 |
| NFR11 | Color contrast ratio (large text) | ≥ 3:1 |
| NFR12 | Tap target size (mobile) | ≥ 44×44px |
| NFR13 | Keyboard navigation coverage | 100% of interactive elements |

### Reliability & Availability

| NFR | Metric | Threshold |
|-----|--------|-----------|
| NFR14 | Site uptime | 99.9% (Vercel SLA) |
| NFR15 | Build + deploy time (git push → live) | < 120 seconds |
| NFR16 | Zero-downtime deploys | Atomic deployments via Vercel |
| NFR17 | Graceful degradation | Site renders without JavaScript for core content |

### SEO & Discoverability

| NFR | Metric | Threshold |
|-----|--------|-----------|
| NFR18 | Lighthouse SEO Score | 100/100 |
| NFR19 | Lighthouse Best Practices Score | 100/100 |
| NFR20 | Valid structured data | Zero errors in Google Rich Results Test |

### Integration

| NFR | Metric | Threshold |
|-----|--------|-----------|
| NFR21 | Calendly embed load time | Must not block page LCP |
| NFR22 | Analytics script impact | Zero impact on Lighthouse Performance score |
| NFR23 | Third-party scripts | Maximum 2 (analytics + Calendly). No others. |

### Privacy & Compliance

| NFR | Metric | Threshold |
|-----|--------|-----------|
| NFR24 | Cookie consent | No tracking cookies without consent (GDPR) |
| NFR25 | Data collection | Analytics only — no PII stored server-side |
| NFR26 | Third-party data sharing | Zero — no marketing pixels, no retargeting |
