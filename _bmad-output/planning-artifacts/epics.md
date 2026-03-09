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

### Epic 7: Site Feedback & Lead Conversion Overhaul
**User Outcome:** Visitors who don't fit the three primary personas have a clear path forward. All lead capture happens on-site via a contact modal with email notification. The site is linguistically polished, pricing is removed, and the footer is pixel-perfect.
**FRs covered:** FR1 (expanded), FR16 (replaced), FR17 (replaced), FR13 (modified — pricing removed), FR15 (modified — pricing hidden)
*Note: This epic modifies existing FR implementations — replacing Calendly/Calendar booking with an on-site contact modal, removing visible pricing, and expanding triage options.*

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


## Epic 7: Site Feedback & Lead Conversion Overhaul

The site evolves from a static showcase with external booking links into an integrated lead-capture platform. Visitor friction is reduced by adding an inclusive fourth triage option, removing premature pricing, and replacing all external Calendar CTAs with an on-site contact modal that sends lead emails via SMTP. Footer polish and a Swedish copy audit round out the quality improvements.

**User Outcome:** Visitors who don't fit the three primary personas still have a clear path forward. All prospects can express interest directly on-site without being sent to external tools. The site feels polished, linguistically correct, and conversion-optimized.

**Depends on:** Epics 1-6 (all complete or in-progress)

### Story 7.1: Fourth Triage Option & General Discovery Page

As a visitor who doesn't identify with the three specific pain-point journeys,
I want a fourth "escape hatch" option on the triage homepage that acknowledges my uncertainty,
So that I still feel welcome and can easily reach out for help figuring out what I need.

**Acceptance Criteria:**

**Given** I am on the ER Triage homepage
**When** the page loads
**Then** I see a fourth option below the three main triage cards, styled as a softer secondary element (not competing visually with the primary three)
**And** the option text communicates uncertainty acceptance (e.g., "Vi vet inte riktigt vad vi behover — hjolp oss ta reda pa det")
**And** clicking it routes me to `/generellt`

**Given** I arrive at `/generellt`
**When** the page loads
**Then** I see a brief, warm introductory section acknowledging that not every problem fits a box
**And** the contact modal auto-opens after the page renders
**And** the page has Swedish SEO metadata targeting general IT consulting terms
**And** the page meets all DoD NFRs (100/100 Lighthouse, WCAG 2.1 AA, <1s LCP, 0 CLS)

### Story 7.2: Landing Page CTAs & CV Download

As a visitor exploring the site,
I want quick-access buttons below the triage options to learn more about the consultant or download a CV,
So that I can evaluate the person behind the services without committing to a specific journey.

**Acceptance Criteria:**

**Given** I am on the ER Triage homepage
**When** I scroll past the triage options
**Then** I see two orange/amber CTA buttons matching the site's existing button color scheme
**And** the first button says "Mer om mig" and links to `/om`
**And** the second button says "Ladda ner CV" and triggers a download of the CV PDF file

**Given** the CV download button is clicked (on homepage or Om page)
**When** the browser initiates the download
**Then** the file served is `/cv/rasmus-thunborg-cv.pdf` from the public directory
**And** the site owner can replace this single file to update the CV without code changes

**Given** I am on the `/om` page
**When** I view the background/credentials section
**Then** I see a "Ladda ner CV" button placed contextually near certifications/specializations
**And** the button matches the amber/orange CTA style used elsewhere on the site

### Story 7.3: Remove Pricing From Engagement Tiers

As a site owner,
I want all pricing information removed from engagement tier displays,
So that pricing discussions happen during personal contact rather than creating premature anchoring or sticker shock.

**Acceptance Criteria:**

**Given** I am viewing any page with engagement tiers
**When** the tier cards render
**Then** no pricing information (startingPrice) is displayed
**And** the tier card layout adjusts cleanly to the absence of the price field (no empty gaps or broken layout)
**And** the data model retains the price field internally for future use but it is not rendered in any component

### Story 7.4: Footer Desktop Gap & Mobile Centering Fix

As a visitor on desktop or mobile,
I want the footer layout to feel polished and properly aligned,
So that the site maintains its premium enterprise aesthetic down to the last pixel.

**Acceptance Criteria:**

**Given** I am viewing the site on desktop (>=1024px)
**When** I scroll to the footer
**Then** the gap between the three footer columns (Enhancior AB, Tjanster, Bevis) is visually tighter than the current spacing
**And** the columns feel grouped together rather than spread across the full width

**Given** I am viewing the site on mobile (<768px)
**When** I scroll to the footer's "Bevis" section
**Then** all links including "Om" are correctly centered
**And** no link appears misaligned relative to the others in the same column

### Story 7.5: Swedish Text Content Audit & Corrections

As a Swedish-speaking visitor,
I want all site copy to use correct Swedish spelling and natural phrasing,
So that the site feels professionally written rather than machine-translated or anglicized.

**Acceptance Criteria:**

**Given** a full audit of all Swedish text across every page
**When** reviewed for correctness
**Then** all spelling errors are fixed (e.g., "arkitek" corrected to "arkitekt")
**And** anglicized words that sound unnatural in Swedish are replaced with proper Swedish equivalents (e.g., "fragil" replaced with "skort" or "brachklig", "skeppa" replaced with "leverera" or "shippa" if colloquially accepted)
**And** the audit covers: homepage, all pathway pages, Om page, case studies, footer, engagement tiers, metadata
**And** technical English terms that are industry-standard in Swedish IT contexts (e.g., "microservices", "CI/CD", "Kubernetes") are preserved as-is

### Story 7.6: Contact Form Modal Component

As a visitor who wants to reach out,
I want a smooth, on-site contact modal where I can submit my details and describe my needs,
So that I can express interest without being redirected to external tools.

**Acceptance Criteria:**

**Given** I trigger the contact modal from any CTA on the site
**When** the modal opens
**Then** I see a slide-up or fade-in modal with fields: Namn (required), Foretag (required), E-post (required, validated), Telefon (optional), Tjanst (dropdown pre-populated from engagement tier names, optional, pre-selected if I clicked from a specific tier), and a free-text "Beskriv er situation" textarea (required)
**And** the modal has a clear "Skicka" button and a close/cancel option
**And** the modal is fully accessible (focus trap, Escape to close, screen-reader announced)
**And** the modal works correctly on both mobile and desktop viewports

**Given** I successfully submit the form
**When** the API responds with success
**Then** I see a confirmation state inside the modal (e.g., "Tack! Vi hor av oss inom 24 timmar.")
**And** the modal auto-closes after a brief delay or on user action

**Given** the form submission fails
**When** the API returns an error
**Then** I see a user-friendly error message inside the modal
**And** my form data is preserved so I can retry

**Implementation Notes:**
- Create `ContactModalProvider` context wrapping root layout
- Expose `openContactModal({ service?: string })` function via context
- Use shadcn/ui Dialog component as the base
- Modal component at `src/components/contact/contact-modal.tsx`
- Provider at `src/components/contact/contact-modal-provider.tsx`

### Story 7.7: Contact API Route & Email Sending

As the site owner,
I want form submissions from the contact modal to be sent to my email as structured lead notifications,
So that I can follow up personally with every prospect.

**Acceptance Criteria:**

**Given** a visitor submits the contact form
**When** the API route `/api/contact` receives the POST request
**Then** an email is sent to `rasmus.thunborg@enhancior.se` via SMTP containing: visitor name, company, email, phone (if provided), selected service interest (if any), and their message
**And** the email is formatted in a readable, structured way (not raw JSON)
**And** the API returns appropriate success/error status codes

**Given** the SMTP configuration
**When** the API route initializes
**Then** it reads credentials from environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, SMTP_SECURE
**And** these are configured in Vercel environment variables (not committed to code)

**Given** the site currently uses `output: 'export'` in next.config
**When** this story is implemented
**Then** `output: 'export'` is removed from next.config.ts to enable the serverless API route
**And** all existing static pages continue to be statically generated (ISR/SSG behavior preserved)
**And** only `/api/contact` runs as a serverless function

**Given** a malicious actor attempts to abuse the contact form
**When** they send automated requests
**Then** basic server-side validation rejects malformed submissions (missing required fields, invalid email format)
**And** a simple rate-limiting mechanism is in place (e.g., IP-based cooldown or honeypot field)

**Implementation Notes:**
- Install `nodemailer` as dependency
- API route at `src/app/api/contact/route.ts`
- Remove `output: 'export'` from `next.config.ts`
- Add `images: { unoptimized: true }` to preserve current image behavior
- Honeypot field for basic bot protection

### Story 7.8: Replace All Booking CTAs With Contact Modal Trigger

As the site owner,
I want every "Boka ett kostnadsfritt samtal" button and email mailto link across the site to open the contact modal instead,
So that all lead capture flows through one consistent, on-site experience.

**Acceptance Criteria:**

**Given** any page with an engagement tier CTA button
**When** I click the CTA
**Then** the contact modal opens with the corresponding service pre-selected in the Tjanst dropdown
**And** no external Google Calendar link is opened

**Given** the footer email link
**When** I click the email address in the credentials bar
**Then** the contact modal opens (without a pre-selected service)
**And** the mailto link is replaced with a button/link that triggers the modal

**Given** the Om page contact section
**When** I click the primary contact button
**Then** the contact modal opens
**And** the button label is updated from the email address to something like "Kontakta mig"

**Given** the site config booking section
**When** this story is complete
**Then** the `booking.baseUrl` (Google Calendar link) is removed or deprecated from site-config.ts
**And** `booking.ctaLabel` is updated to reflect the new contact action (e.g., "Kontakta oss")
**And** all references to the old booking URL across the codebase are removed

**Implementation Notes:**
- Update `EngagementTierCard` to call `openContactModal({ service: tier.name })` on CTA click
- Update `EnterpriseFooter` email link to trigger modal
- Update `/om` page CTA to trigger modal
- Update `/generellt` page to auto-open modal
- Audit all pages for any remaining Google Calendar or mailto references
- The `EngagementTierCard` CTA becomes a `<button>` instead of an `<a>` tag


## Epic 9: SEO & LLM Discoverability

The site gains complete SEO infrastructure (sitemap, robots.txt, OpenGraph, Twitter cards, canonical URLs, expanded structured data) and LLM discoverability via llms.txt files. This closes the gap between having great content and actually being found — by both traditional search engines and AI assistants.

**User Outcome:** Search engines properly index all pages with rich snippets. Social shares display professional previews. AI assistants can discover and accurately recommend Enhancior when users ask for relevant consulting help.

**FRs covered:** FR38 (expanded), FR39 (expanded), FR40 (expanded)

**Depends on:** Epics 1-8 (all complete)

### Story 9.1: SEO Fundamentals — Sitemap, Robots, OpenGraph, Structured Data

As a site owner,
I want complete SEO infrastructure including sitemap, robots.txt, OpenGraph/Twitter cards, canonical URLs, and expanded structured data,
So that search engines can properly index the site, social shares look professional, and rich snippets appear in search results.

**Acceptance Criteria:**

**Given** the site is built
**When** a crawler requests `/sitemap.xml` or `/robots.txt`
**Then** valid, auto-generated files are served via Next.js Metadata API

**Given** any page on the site
**When** shared on social platforms
**Then** OpenGraph and Twitter card metadata produce professional link previews

**Given** the structured data component
**When** the site renders
**Then** Person, WebSite, and BreadcrumbList schemas are added to the existing JSON-LD graph

**Given** any page on the site
**When** crawled by search engines
**Then** canonical URLs are present via `alternates.canonical`

### Story 9.2: LLM Discoverability — llms.txt

As a site owner,
I want `llms.txt` and `llms-full.txt` files at the site root describing Enhancior's services and expertise,
So that AI assistants can discover and accurately recommend Enhancior when users ask for relevant consulting help.

**Acceptance Criteria:**

**Given** the site is deployed
**When** an LLM agent requests `/llms.txt`
**Then** a structured plain-text summary of Enhancior is served following the llms.txt specification

**Given** the site is deployed
**When** an LLM agent requests `/llms-full.txt`
**Then** a detailed version with case studies, methodology, and technology expertise is served

**Given** the content of both files
**When** reviewed against the live site
**Then** all claims and descriptions are accurate and consistent


## Epic 10: Mobile Conversion Optimization

Mobile visitors currently must scroll through extensive homepage content before reaching services and contact CTAs. This epic introduces a persistent floating CTA for instant conversion access, then trims the homepage into a lean hub that routes to existing dedicated pages — eliminating scroll fatigue while improving conversion proximity.

**User Outcome:** Mobile visitors can always reach the contact action without scrolling, and the homepage quickly routes them to the content they care about rather than presenting everything inline. Desktop experience is preserved or improved.

**FRs covered:** FR31 (enhanced — mobile premium feel), FR16 (enhanced — conversion accessibility)

**Depends on:** Epics 1-9 (all complete)

**Epic-Level Acceptance Criteria:**
- Contact modal is always reachable on mobile without scrolling
- Homepage mobile scroll depth reduced by ~50%
- Desktop experience unchanged or improved
- All DoD NFRs maintained: 100/100 Lighthouse (Performance + Accessibility), <1s LCP, 0 CLS, WCAG 2.1 AA

### Story 10.1: Floating CTA Pill (Mobile)

As a mobile visitor on any page,
I want a persistent contact button always within thumb reach,
So that I can reach out the moment I'm ready without hunting for the CTA.

**Acceptance Criteria:**

**Given** I am browsing any page on a mobile device (<768px)
**When** I scroll past the first ~200px of content
**Then** a floating pill button labeled "Boka ett samtal" fades in with a subtle slide-up animation at the bottom center of the viewport

**Given** the floating CTA pill is visible
**When** I tap it
**Then** the existing `ContactModal` opens (without a pre-selected service)

**Given** I scroll to the contact section or footer area of any page
**When** that section enters the viewport
**Then** the floating CTA pill hides to avoid redundancy

**Given** I am on a desktop viewport (>=768px)
**When** browsing any page
**Then** the floating CTA pill is not rendered (`md:hidden`)

**Given** the floating CTA pill
**When** evaluated for accessibility
**Then** it has a minimum 48px tap target, proper ARIA label, and respects `prefers-reduced-motion`
**And** the page meets all DoD NFRs (100/100 Lighthouse, WCAG 2.1 AA, <1s LCP, 0 CLS)

**Implementation Notes:**
- New client component: `src/components/contact/floating-cta.tsx`
- Uses `IntersectionObserver` to watch two sentinels (top scroll threshold + contact/footer region)
- Renders `null` when either sentinel is intersecting — no scroll event listeners
- Accent color pill, `rounded-full`, Framer Motion fade+slide animation
- Triggers `openContactModal()` from existing `ContactModalProvider` context
- Add component to root layout (`src/app/layout.tsx`) inside the `ContactModalProvider`

### Story 10.2: Homepage Hub Consolidation

As a mobile visitor,
I want the homepage to be a lean routing hub with teaser cards linking to dedicated pages,
So that I reach the content I care about faster and encounter the contact section sooner.

**Acceptance Criteria:**

**Given** I am on the homepage on any device
**When** the page loads
**Then** the Hero section and triage pathway cards remain unchanged
**And** the methodology section is replaced with a concise teaser card linking to `/metodik`
**And** the services section is replaced with a concise teaser card linking to `/tjanster`
**And** the case studies section is replaced with a concise teaser card linking to `/case-studies`
**And** the contact/CTA section remains at the bottom, now much closer to the top of the page

**Given** each teaser card
**When** rendered
**Then** it displays a clear Swedish heading (e.g., "Så arbetar vi", "Våra tjänster", "Kundcase")
**And** one compelling hook sentence (not a summary)
**And** a "Läs mer →" action link to the dedicated page
**And** the card feels visually complete and intentional, not like stripped-down content

**Given** the homepage after consolidation
**When** measured on mobile
**Then** total scroll depth is reduced by approximately 50% compared to pre-consolidation
**And** the page meets all DoD NFRs (100/100 Lighthouse, WCAG 2.1 AA, <1s LCP, 0 CLS)

**Given** the existing dedicated pages (`/metodik`, `/tjanster`, `/case-studies`, `/om`)
**When** the homepage is consolidated
**Then** no new pages are created — only the homepage is modified
**And** all dedicated pages continue to function unchanged

**Prerequisite Task:** Capture baseline mobile scroll depth from Vercel Analytics before making changes.

**Implementation Notes:**
- Primary changes in `src/app/page.tsx` — replacing verbose inline sections with lean teaser `<Card>` components
- Teaser card component may be extracted to `src/components/homepage/teaser-card.tsx` if reuse warrants it
- This is primarily an editorial/deletion task — more code removed than added
- Desktop layout benefits equally from the consolidation


## Epic 12: Case Study Graphics & Nordiskt Rederi

A new case study for an anonymized client ("Nordiskt Rederi", obfuscated from a real maritime/HR engagement) is added to the site. All five case studies — including the four existing ones — receive bespoke SVG architecture diagrams replacing the current "Arkitekturdiagram kommer snart" placeholders. Diagrams are inline React/SVG components styled to match the dark-mode design system.

**User Outcome:** Every case study page features a meaningful architecture diagram that visually tells the technical story of the engagement. The site gains a fifth case study demonstrating HR-tech/maritime domain expertise, broadening the proof-of-competence portfolio.

**FRs covered:** FR8 (expanded — new proof artifact), FR9 (completed — architecture diagrams), FR10 (completed — visual states), FR11 (expanded — new metrics)

**Depends on:** Epics 1-11 (all complete)

**Epic-Level Acceptance Criteria:**
- 5 case study pages total, each with a bespoke SVG architecture diagram
- Nordiskt Rederi case fully anonymized (no real company or partner names)
- All diagrams are inline SVG React components, dark-mode styled, accessible
- Case study registry updated with the new entry
- Case studies listing page includes the new case
- All DoD NFRs maintained: 100/100 Lighthouse (Performance + Accessibility), <1s LCP, 0 CLS, WCAG 2.1 AA

### Story 12.1: Nordiskt Rederi Case Study Page

As a technical or non-technical prospect,
I want to read a case study about a maritime HR-operations engagement where Excel chaos was replaced with a real-time platform,
So that I can see Enhancior's ability to deliver full-stack solutions from concept to production as a solo resource.

**Acceptance Criteria:**

**Given** I navigate to `/case-study/nordiskt-rederi`
**When** the page loads
**Then** I see the full case study layout with: title, industry tag, timeline, problem narrative, architecture viewer (placeholder acceptable for this story — diagram added in Story 12.2), intervention narrative, 4 impact metrics, and outcome narrative
**And** the client is identified as "Nordiskt Rederi" throughout — no real company name appears anywhere
**And** all external partner names are genericized (see Anonymization Map below)
**And** SEO metadata uses the anonymized name

**Given** the case study registry
**When** the new case is added
**Then** the registry entry uses slug `nordiskt-rederi`, client `Nordiskt Rederi`, personas `["cto-crisis", "cto-proactive"]`
**And** the registry metrics array contains 4 summary metrics

**Given** the case studies listing page (`/case-studies`)
**When** the page renders
**Then** the Nordiskt Rederi case appears as a 5th card in the grid
**And** the listing page metadata description is updated to include the new case

**Anonymization Map:**
| Real | Anonymized |
|------|-----------|
| Stena Line / Stena Lines | Nordiskt Rederi |
| Sodexo | cateringpartner |
| ÖMC | bemanningspartner |
| Toplux | logistikpartner |
| PE3 | personalcertifieringssystem |
| lönekontor | lönekontor (already generic) |
| besättningsplanering | besättningsplanering (already generic) |

**Metrics (4 selected for 2×2 grid):**

| Label | Before | After | Delta | Improvement |
|-------|--------|-------|-------|-------------|
| Tid för datadelning med extern part | Manuellt Excel-utskick via e-post, ~30–60 min per mottagare | Omedelbar tillgång via rollstyrd inloggning | ↓ ~95% | positive |
| Datakvalitet och versionskontroll | Flera parallella Excel-versioner, ingen single source of truth | En gemensam realtidsdatabas med RLS | Eliminerat versionskaos | positive |
| Spårbarhet vid revision/GDPR | Ingen loggning, okontrollerad spridning av känslig data | Fullständig ändringslogg, rollbaserad åtkomst, aktivitetsspårning | Från noll → revisionsklar | positive |
| Tid från koncept till produktion | — | MVP levererat på 4 månader av en resurs | 542 commits, 42 migrationer, 69 PR:s | positive |

**Implementation Notes:**
- Create `src/app/case-study/nordiskt-rederi/page.tsx` following the exact pattern of `src/app/case-study/lindex/page.tsx`
- Add entry to `src/lib/case-study-registry.ts`
- Add entry to `src/app/case-studies/page.tsx` (the listing page's local `caseStudies` array)
- Update listing page metadata description to mention the new case
- All narrative text must be anonymized per the map above before being placed in the component
- The `architectureViewer` prop can use the existing dashed-border placeholder for now — Story 12.2 will replace it
- Source data: `docs/case-study-onboarding-system.json`

### Story 12.2: Nordiskt Rederi Architecture Diagram

As a technical visitor viewing the Nordiskt Rederi case study,
I want to see a bespoke SVG architecture diagram illustrating the platform's layers,
So that I can visually understand the technical solution and assess the architectural quality.

**Acceptance Criteria:**

**Given** I am viewing the Nordiskt Rederi case study
**When** the architecture viewer section renders
**Then** I see an inline SVG diagram showing: 7 role-based views at the top, Row Level Security as the gatekeeper layer, shared PostgreSQL/Supabase database with JSONB custom_data, and infrastructure layer (Vercel Cron, CSV/Excel import/export, backup pipeline)
**And** the diagram uses the site's dark-mode palette (#0A0A0A background, #EDEDED text, #F59E0B accent, rgba borders)
**And** the diagram is responsive — readable on mobile, expanded on desktop
**And** the SVG includes `role="img"` and an appropriate `aria-label` for accessibility

**Technical Notes:**
- Create `src/components/case-study/diagrams/nordiskt-rederi-diagram.tsx` as a React component returning inline SVG
- The diagram should visually emphasize "one source of truth, many controlled windows" — the RLS layer as a horizontal barrier between the role views and the shared database
- Key visual elements: 7 labeled role boxes (HR-admin, Rekryterare, Cateringpartner, Bemanningspartner, Lönekontor, Logistikpartner, Besättning), RLS shield/barrier, single database cylinder, cron/automation indicators
- Use `currentColor` and Tailwind-compatible colors where possible
- No external image files — pure inline SVG

### Story 12.3: IKEA Architecture Diagram

As a technical visitor viewing the IKEA case study,
I want to see a bespoke SVG architecture diagram illustrating the backend architecture,
So that I can visually understand the .NET backend, AD integration, and legacy migration path.

**Acceptance Criteria:**

**Given** I am viewing the IKEA case study
**When** the architecture viewer section renders
**Then** I see an inline SVG diagram showing: React frontend → .NET API layer (24 endpoints) → MongoDB datastore, with Active Directory/Microsoft Graph integration for IAM, Azure DevOps CI/CD pipeline, and a separate legacy Python system with migration arrow
**And** the diagram uses the site's dark-mode palette
**And** the diagram is responsive and accessible (`role="img"`, `aria-label`)

**Technical Notes:**
- Create `src/components/case-study/diagrams/ikea-diagram.tsx`
- Replace the placeholder in `src/app/case-study/ikea/page.tsx` with the new diagram component
- Key visual elements: React app, .NET API gateway, MongoDB, AD/Graph auth flow, Azure DevOps pipeline, Python legacy box with dotted migration arrow

### Story 12.4: Lindex Architecture Diagram

As a technical visitor viewing the Lindex case study,
I want to see a bespoke SVG architecture diagram illustrating the event-driven modernization,
So that I can visually understand the transition from monolith to microservices.

**Acceptance Criteria:**

**Given** I am viewing the Lindex case study
**When** the architecture viewer section renders
**Then** I see an inline SVG diagram showing: domain-specific .NET microservices (Order, Lager, WMS), event bus (Service Bus + Event Grid + Kafka), Cosmos DB per service, Kubernetes/Azure hosting, Grafana monitoring layer, and a faded/crossed-out Oracle monolith representing the legacy state
**And** the diagram uses the site's dark-mode palette
**And** the diagram is responsive and accessible

**Technical Notes:**
- Create `src/components/case-study/diagrams/lindex-diagram.tsx`
- Replace the placeholder in `src/app/case-study/lindex/page.tsx`
- The visual story is "monolith → independent services with event backbone"

### Story 12.5: Polestar Architecture Diagram

As a technical visitor viewing the Polestar case study,
I want to see a bespoke SVG architecture diagram illustrating the serverless financial integration platform,
So that I can visually understand the AWS architecture and multi-vendor integration pattern.

**Acceptance Criteria:**

**Given** I am viewing the Polestar case study
**When** the architecture viewer section renders
**Then** I see an inline SVG diagram showing: React frontend → API Gateway → AWS Lambda (.NET/TypeScript) → DynamoDB, with multiple external financial provider integrations (OAuth2/TLS), Terraform IaC layer, and Datadog/Kibana monitoring
**And** the diagram uses the site's dark-mode palette
**And** the diagram is responsive and accessible

**Technical Notes:**
- Create `src/components/case-study/diagrams/polestar-diagram.tsx`
- Replace the placeholder in `src/app/case-study/polestar/page.tsx`
- Key visual: hub-and-spoke pattern with Lambda at center, financial providers as external nodes

### Story 12.6: Visma Architecture Diagram

As a technical visitor viewing the Visma case study,
I want to see a bespoke SVG architecture diagram illustrating the credential rotation pipeline,
So that I can visually understand the automated security infrastructure.

**Acceptance Criteria:**

**Given** I am viewing the Visma case study
**When** the architecture viewer section renders
**Then** I see an inline SVG diagram showing: AWS Secrets Manager at center, Lambda function (.NET 8 Native AOT) triggered on rotation schedule, target systems (MSSQL, RabbitMQ), GitHub Actions CI/CD pipeline, CloudFormation IaC, and the 3-environment strategy (Test → Staging → Prod)
**And** the diagram uses the site's dark-mode palette
**And** the diagram is responsive and accessible

**Technical Notes:**
- Create `src/components/case-study/diagrams/visma-diagram.tsx`
- Replace the placeholder in `src/app/case-study/visma/page.tsx`
- Key visual: circular rotation flow with Secrets Manager at center, environments as promotion pipeline
