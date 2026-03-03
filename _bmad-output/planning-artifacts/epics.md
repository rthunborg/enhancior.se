---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
inputDocuments: [prd.md, architecture.md, ux-design-specification.md, ux-design-directions.html]
---

# enhancior.se - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for enhancior.se, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Visitors can self-select their primary pain point from the ER Triage homepage
FR2: The system routes visitors to a persona-specific content pathway based on their triage selection
FR3: Visitors can navigate the site without using triage (fallback navigation for non-triage users like procurement)
FR4: The triage flow adapts presentation for both mobile and desktop viewports
FR5: CTO visitors can view technical-depth content relevant to their selected pain point (crisis or scaling)
FR6: Founder visitors can view business-outcome content framed in non-technical language
FR7: Enterprise procurement visitors can access vendor compliance credentials directly
FR8: Each persona pathway delivers targeted proof-of-competence artifacts (case studies, metrics, diagrams)
FR9: Visitors can view an interactive before→after architecture case study
FR10: The case study component supports three distinct visual states (Before, Intervention, After) with smooth transitions
FR11: Case study content includes verifiable impact metrics (timelines, measurable outcomes)
FR12: Case studies are authored as MDX files and rendered statically at build time
FR13: Visitors can view productized engagement offerings with transparent pricing brackets
FR14: The system presents three engagement tiers: 30-dagars Teknisk Revision, Teknisk ledning på deltid, and Enterprise Rescue
FR15: Each engagement tier displays starting price, scope, and timeline information
FR16: Visitors can book a discovery call directly from within persona pathways via embedded Calendly
FR17: The booking CTA is framed as "Free 45-min Whiteboarding Session"
FR18: Procurement users can verify Swedish business credentials (Organisationsnummer, F-skatt status) from the site footer
FR19: Procurement users can identify Enhancior as a solo practitioner consultancy
FR20: The footer displays enterprise-relevant credentials persistently across all pages
FR21: The content owner can add new case studies by creating MDX files in the content directory
FR22: The content owner can update availability status by modifying a configuration value
FR23: Content changes trigger automatic static page rebuilds on Vercel via git push
FR24: New case studies are automatically integrated into the site structure without additional configuration
FR25: The system tracks visitor pathway selection (which triage option, which persona path)
FR26: The system tracks persona pathway drop-off rates at each step
FR27: The system tracks engagement tier interaction (views, CTA clicks)
FR28: Analytics implementation adds zero visible performance impact (async, lightweight)
FR29: The site presents a consistent dark-mode, blueprint-motif aesthetic across all pages
FR30: All interactive elements provide smooth, jank-free micro-animations and transitions
FR31: The site renders correctly and feels premium on mobile devices (thumb-friendly targets, no layout shift)
FR32: Architecture diagrams expand into full blueprint canvas treatment on desktop viewports
FR33: All site copy is presented in Swedish with technical terminology in English where industry-standard
FR34: All interactive elements are keyboard-navigable, including triage routing and persona pathways
FR35: All content is screen-reader accessible with proper semantic structure
FR36: All visual content includes appropriate alternative text descriptions
FR37: The site respects user motion preferences (prefers-reduced-motion)
FR38: Each page includes Swedish-language meta titles, descriptions, and structured data
FR39: The site generates clean, crawlable HTML with proper heading hierarchy
FR40: Organization, Service, and FAQ structured data schemas are present
FR41: Procurement visitors can download a static, pre-packaged vendor compliance PDF directly from their pathway

### NonFunctional Requirements

NFR1: Lighthouse Performance Score: 100/100 on every page
NFR2: Largest Contentful Paint (LCP): < 1 second
NFR3: Cumulative Layout Shift (CLS): 0
NFR4: First Input Delay (FID): < 100ms
NFR5: Total page weight (HTML + CSS + JS): < 200KB compressed per page
NFR6: Time to Interactive (TTI): < 1.5 seconds on 4G mobile
NFR7: Diagnose & Cure SVG transitions: 60fps with no dropped frames
NFR8: WCAG 2.1 AA Compliance: Full conformance — zero violations
NFR9: Lighthouse Accessibility Score: 100/100
NFR10: Color contrast ratio (normal text): >= 4.5:1
NFR11: Color contrast ratio (large text): >= 3:1
NFR12: Tap target size (mobile): >= 44x44px
NFR13: Keyboard navigation coverage: 100% of interactive elements
NFR14: Site uptime: 99.9% (Vercel SLA)
NFR15: Build + deploy time (git push -> live): < 120 seconds
NFR16: Zero-downtime deploys: Atomic deployments via Vercel
NFR17: Graceful degradation: Site renders without JavaScript for core content
NFR18: Lighthouse SEO Score: 100/100
NFR19: Lighthouse Best Practices Score: 100/100
NFR20: Valid structured data: Zero errors in Google Rich Results Test
NFR21: Calendly embed load time: Must not block page LCP
NFR22: Analytics script impact: Zero impact on Lighthouse Performance score
NFR23: Third-party scripts: Maximum 2 (analytics + Calendly). No others.
NFR24: Cookie consent: No tracking cookies without consent (GDPR)
NFR25: Data collection: Analytics only — no PII stored server-side
NFR26: Third-party data sharing: Zero — no marketing pixels, no retargeting

### Additional Requirements

- Starter Template: Next.js (App Router) + shadcn/ui initialized via `npx shadcn@latest create enhancior-se` and `npm install framer-motion`. (Crucial for Epic 1 Story 1)
- Vercel deployment scaffolding and CI/CD setup required early
- MDX configuration for the content pipeline (`@next/mdx`) over external CMS
- Tailwind CSS configured for exclusively dark mode (no toggles)
- All pages must use `output: 'export'` for aggressive SSG (Static Site Generation), with no SSR or server-side database configuration
- State management strictly localized (useState) for micro-interactions (e.g. SVG toggle), while macro-state (routing) must be reflected in the URL
- Accessible UI patterns per WCAG 2.1 AA (Keyboard focus, Screen readers semantic HTML, Contrast, Reduced motion)
- Mobile-first approach scaling to full desktop "blueprint canvas" aesthetic
- Swedish exclusively as primary language, with standard English technical terms (No i18n required)

### FR Coverage Map

### FR Coverage Map

FR1: Epic 1 - ER Triage Homepage & Navigation
FR2: Epic 1 - ER Triage Homepage & Navigation
FR3: Epic 1 - ER Triage Homepage & Navigation
FR4: Epic 1 - ER Triage Homepage & Navigation
FR5: Epic 2 - Persona Content Pathways
FR6: Epic 2 - Persona Content Pathways
FR7: Epic 2 - Persona Content Pathways
FR8: Epic 2 - Persona Content Pathways
FR9: Epic 3 - Diagnose & Cure Case Studies
FR10: Epic 3 - Diagnose & Cure Case Studies
FR11: Epic 3 - Diagnose & Cure Case Studies
FR12: Epic 3 - Diagnose & Cure Case Studies
FR13: Epic 4 - Engagement Tiers & Conversion
FR14: Epic 4 - Engagement Tiers & Conversion
FR15: Epic 4 - Engagement Tiers & Conversion
FR16: Epic 4 - Engagement Tiers & Conversion
FR17: Epic 4 - Engagement Tiers & Conversion
FR18: Epic 4 - Engagement Tiers & Conversion  *(Note: also touches global footer)*
FR19: Epic 4 - Engagement Tiers & Conversion
FR20: Epic 1 - ER Triage Homepage & Navigation *(Note: global footer component)*
FR21: Epic 3 - Diagnose & Cure Case Studies
FR22: Epic 4 - Engagement Tiers & Conversion *(Note: availability status config)*
FR23: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR24: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR25: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR26: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR27: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR28: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR29: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR30: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR31: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR32: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR33: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR34: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR35: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR36: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR37: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR38: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR39: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR40: Epic 1 - Core Aesthetic, Analytics & Infrastructure
FR41: Epic 4 - Engagement Tiers & Conversion

## Epic List

### Epic 1: Project Setup, Infrastructure & ER Triage Homepage
**User Outcome:** Visitors can immediately self-diagnose their technical pain point, experiencing the core UX innovation of the site on a jank-free, lightning-fast, fully accessible "blueprint" application with built-in analytics.
**FRs covered:** FR1, FR2, FR3, FR4, FR20, FR23, FR24, FR25, FR26, FR27, FR28, FR29, FR30, FR31, FR32, FR33, FR34, FR35, FR36, FR37, FR38, FR39, FR40
*Note: This epic establishes the "front door", fundamental Next.js/Tailwind/shadcn setup, general component styling, tracking analytics, CI/CD pipeline, and routing engine.*

*Global Definition of Done (DoD): All subsequent stories in Epics 1-4 must meet the following Non-Functional Requirements (NFRs): 100/100 Lighthouse Performance, 100/100 Lighthouse Accessibility, <1s LCP, 0 CLS, WCAG 2.1 AA compliance (including keyboard navigation and screen-reader support), and proper Swedish technical SEO metadata.*

### Epic 2: Persona Content Pathways
**User Outcome:** CTOs, Founders, and Enterprise leads receive highly targeted, persona-specific messaging and proof artifacts (like metrics and diagrams) relevant to their selected pain point, rather than generic marketing copy.
**FRs covered:** FR5, FR6, FR7, FR8
*Note: This relies on the routing engine from Epic 1 being in place (or stubbed out), presenting the actual content variations.*

### Epic 3: Diagnose & Cure Case Studies
**User Outcome:** Technical visitors can interact with a 3-state SVG before-and-after architecture diagram demonstrating competence and verifiable impact metrics. Content owners can easily author these case studies using MDX.
**FRs covered:** FR9, FR10, FR11, FR12, FR21
*Note: This is a localized complex UI component mixed with content management basics.*

### Epic 4: Engagement Tiers & Conversion
**User Outcome:** Prospects can view clear, productized offerings (Revision, Deltid, Rescue) with transparent pricing and seamlessly book a discovery call via Calendly or download a vendor packet to proceed with hiring.
**FRs covered:** FR13, FR14, FR15, FR16, FR17, FR18, FR19, FR22, FR41
*Note: This epic is where the site converts.*


## Epic 1: Project Setup, Infrastructure & ER Triage Homepage

The project is initialized from the starter template with strict NFRs built-in via the Definition of Done. The core UI infrastructure (dark-mode aesthetic, tracking analytics, Next.js SSG exports, and CI/CD) is established so visitors can immediately self-diagnose their technical pain point and experience the core UX innovation of the site.

### Story 1.1: Initialize Next.js, Tailwind, & CI/CD Pipeline
As a developer/content owner (Rasmus),
I want to initialize the project using Next.js (App Router), shadcn/ui, and Tailwind CSS, and configure a git-push CI/CD pipeline,
So that development is built on a performant "blueprint" foundation and deploys automatically with zero downtime.

**Acceptance Criteria:**
**Given** the project repository is empty
**When** initialization commands are run (`npx shadcn@latest create enhancior-se`)
**Then** the project uses `output: 'export'` for aggressive SSG
**And** the theme is locked to the dark-mode Michelin-star aesthetic using Tailwind variables and `Geist`/`Inter` typography
**And** pushing to `main` triggers an automatic Vercel deployment with zero downtime completing in under 120 seconds.

### Story 1.2: Vercel Web Analytics & SEO Metadata Boilerplate
As a site owner (Rasmus),
I want analytics and Swedish technical SEO infrastructure configured from day one,
So that I can track early triage selections without impacting page speed or privacy, and ensure crawlers index the site correctly.

**Acceptance Criteria:**
**Given** the project is deployed
**When** a visitor accesses the site
**Then** Vercel Analytics (or PostHog) tracks pathway selections asynchronously with zero Lighthouse performance impact
**And** no PII is stored/no tracking cookies are set (GDPR compliant by default)
**And** global Swedish-language meta titles, descriptions, and structured data schemas (Organization, Service) are established.

### Story 1.3: Core Site Shell & Global Footer
As a site visitor,
I want a consistent site structure with a global footer containing enterprise credentials,
So that I can verify compliance information regardless of how I navigate the site.

**Acceptance Criteria:**
**Given** I am on any generated static page
**When** I scroll to the bottom
**Then** I should see a minimal global footer
**And** the footer must display the Organisationsnummer and "Godkänd för F-skatt" status persistently
**And** the footer must be fully WCAG 2.1 AA accessible (keyboard navigable, 4.5:1 contrast).

### Story 1.4: ER Triage Diagnostic UI
As a technical or non-technical prospect,
I want to be greeted by a stark "Where is the system bleeding?" diagnostic screen with multiple pain-point options,
So that I can immediately identify with a problem rather than reading generic marketing copy.

**Acceptance Criteria:**
**Given** I navigate to the root homepage (`/`)
**When** the page loads
**Then** I am presented with the "Where is the system bleeding?" diagnostic question
**And** I see selectable options representing different symptoms (e.g., "Releases are constantly breaking", "We lost our technical leader")
**And** the UI animations respect `prefers-reduced-motion`.

### Story 1.5: Triage Routing Engine & Responsive Aesthetic
As a mobile or desktop visitor,
I want my selected technical pain point to route me to a tailored experience on a premium, responsive layout,
So that I only see content relevant to my situation, and I trust the engineering competence of the site.

**Acceptance Criteria:**
**Given** I am on the ER Triage homepage
**When** I use a mobile device to select a symptom option
**Then** the system routes me to the corresponding persona pathway page (e.g., CTO Crisis)
**And** the macro-state (routing) is reflected in the URL
**And** tap targets are thumb-friendly (min 44x44px) with zero layout shift (CLS 0)
**And** when I use a desktop device, the layout expands into a full "blueprint canvas" aesthetic.

## Epic 2: Persona Content Pathways

CTOs, Founders, and Enterprise leads receive highly targeted, persona-specific messaging and proof artifacts (like metrics and diagrams) relevant to their selected pain point, rather than generic marketing copy.

### Story 2.1: CTO Crisis Pathway

As a CTO experiencing technical crisis (e.g., constant breaking releases),
I want to see technical-depth messaging and architecture-focused proof artifacts (like the Diagnose & Cure case study),
So that I understand this is an expert intervention, not just generic consulting.

**Acceptance Criteria:**

**Given** I select a "crisis" option on the ER Triage homepage
**When** the pathway page loads
**Then** the messaging is specifically tailored to a CTO in crisis
**And** at least one relevant proof artifact (e.g. an architecture diagram or specific metrics) is displayed
**And** the engagement CTA is focused on the "30-dagars Teknisk Revision".

### Story 2.2: CTO Proactive Pathway

As a CTO dealing with scaling issues,
I want to see messaging about stabilizing architecture and bridging leadership gaps,
So that I feel confident engaging a fractional architect to help me scale.

**Acceptance Criteria:**

**Given** I select a "scaling/growth" option on the ER Triage homepage
**When** the pathway page loads
**Then** the messaging is specifically tailored to proactive architectural scaling
**And** the engagement CTA is focused on the "Teknisk ledning på deltid".

### Story 2.3: Non-Technical Founder Pathway

As a non-technical founder who lost their technical leader,
I want to read content framed purely around business outcomes rather than technical jargon,
So that I understand how this service stabilizes my business and helps me hire a permanent replacement.

**Acceptance Criteria:**

**Given** I select a non-technical/leadership pain point on the ER Triage homepage
**When** the pathway page loads
**Then** the messaging avoids technical jargon and focuses on business outcomes (velocity, bridging the gap)
**And** the proof artifacts presented are framed around business impact.

### Story 2.4: Enterprise Procurement Pathway

As an enterprise procurement lead,
I want to immediately access vendor credentials and compliance information,
So that I can quickly verify F-skatt status and download a vendor packet without needing to evaluate technical content.

**Acceptance Criteria:**

**Given** I navigate to the Enterprise/Compliance section (e.g., via the footer)
**When** the page loads
**Then** I am presented with clear Swedish business credentials (Orgnr, F-skatt)
**And** I am provided a clear CTA to download the Vendor Packet PDF.

## Epic 3: Diagnose & Cure Case Studies

Technical visitors can interact with a 3-state SVG before-and-after architecture diagram demonstrating competence and verifiable impact metrics. Content owners can easily author these case studies using MDX.

### Story 3.1: 3-State SVG Architecture Viewer Component

As a technical visitor (CTO),
I want to interact with a 3-state (Before, Intervention, After) SVG architecture diagram component,
So that I can visually verify your ability to diagnose and cure complex system issues.

**Acceptance Criteria:**

**Given** I am viewing a Diagnose & Cure case study
**When** I interact with the state toggle (Before/Intervention/After)
**Then** the component smoothly transitions between the SVG states using Framer Motion
**And** there are no dropped frames (targets 60fps) and no layout shifts during the transition.

### Story 3.2: Case Study Metrics & Narrative Layout

As a technical or non-technical prospect,
I want to read the case study narrative alongside clear, verifiable impact metrics (like timeline and specific outcomes),
So that I understand the business value delivered by the architectural intervention.

**Acceptance Criteria:**

**Given** I am viewing a Diagnose & Cure case study 
**When** I scroll through the page
**Then** I see the 3-state SVG viewer accompanied by the problem narrative, the intervention decisions, and a clear "Impact Metrics" section
**And** the layout is fully responsive, adapting to mobile and expanding on desktop viewports.

### Story 3.3: MDX Case Study Authoring Pipeline

As the content owner (Rasmus),
I want to author new case studies as static MDX files that automatically integrate into the site,
So that I can publish new proof artifacts without needing a complex CMS or deployment headache.

**Acceptance Criteria:**

**Given** I have a new case study to publish
**When** I create a new `.mdx` file in the configured content directory with the required frontmatter and SVGs
**Then** the case study is statically generated during the Next.js build process
**And** it becomes automatically available in the relevant persona pathways without additional routing configuration.

## Epic 4: Engagement Tiers & Conversion

Prospects can view clear, productized offerings (Revision, Deltid, Rescue) with transparent pricing and seamlessly book a discovery call via Calendly or download a vendor packet to proceed with hiring.

### Story 4.1: Productized Engagement Tiers Display

As a prospective client,
I want to view clear, productized engagement offerings (30-dagars Teknisk Revision, Teknisk ledning på deltid, Enterprise Rescue),
So that I understand exactly what services you provide and can verify they match my needs.

**Acceptance Criteria:**

**Given** I navigate to an engagement section from a persona pathway
**When** the section loads
**Then** I see the three distinct service tiers clearly delineated
**And** each tier displays its scope, timeline information, and starting price transparently.

### Story 4.2: Config-Driven Availability Badge

As the content owner (Rasmus),
I want to update my availability status (e.g., "1 slot opening Q3" or "Fully booked") via a simple configuration update,
So that I can manage prospect expectations dynamically without changing complex UI code.

**Acceptance Criteria:**

**Given** I update the availability status string in the site configuration file
**When** the site rebuilds
**Then** the new availability status is displayed prominently near the engagement tiers
**And** the status badge visually aligns with the dark-mode aesthetic.

### Story 4.3: Calendly Booking Integration

As a qualified prospect,
I want to seamlessly book a "Free 45-min Whiteboarding Session" directly from the site,
So that I can initiate a discovery call without back-and-forth emails.

**Acceptance Criteria:**

**Given** I am reviewing an engagement tier
**When** I click the CTA to book a session
**Then** an embedded Calendly widget or a direct link to Calendly opens
**And** the widget loads asynchronously without blocking the page's Largest Contentful Paint (LCP).

### Story 4.4: Enterprise Vendor Packet Download

As a procurement lead,
I want to download a pre-packaged vendor compliance PDF (containing CV, certifications, rate brackets),
So that I can add Enhancior AB to our internal vendor system immediately.

**Acceptance Criteria:**

**Given** I am on the Enterprise/Compliance pathway
**When** I click the "Download Vendor Packet" CTA
**Then** a static PDF file is downloaded to my device
**And** the file name is clearly formatted (e.g., `Enhancior_AB_Vendor_Packet.pdf`).


