# Design: Replace Fictional Case Studies with Real Project Case Studies

**Date:** 2026-03-04
**Status:** Approved

## Context

The site has one fictional case study ("LogTech CI/CD-Räddning"). We're replacing it with four real case studies based on Rasmus's actual project history, using real company names and extrapolated metrics.

## Decisions

- **Rendering:** Hardcoded page components (not MDX pipeline) for full layout control
- **Client naming:** Real company names (Lindex, Polestar, IKEA, Visma)
- **Metrics:** Extrapolated realistic before/after numbers based on CV descriptions
- **Diagrams:** Placeholder areas initially; animated SVG diagrams can be added later
- **Fictional content:** Delete LogTech page, MDX file, and LogTech-specific diagram components

## Architecture

Each case study is a hardcoded page at `/case-study/<slug>/page.tsx` using the existing `CaseStudyLayout` component. Pathway pages discover case studies via `PathwayCaseStudies` which reads from the MDX pipeline. To keep pathway discovery working, we also create MDX frontmatter-only files (no body content needed since the hardcoded pages render the full layout).

### Files to delete

- `src/app/case-study/logtech/page.tsx`
- `content/case-studies/logistik-saas-rescue.mdx`
- `src/components/architecture/logtech-diagrams.tsx` (and its export from index)

### Files to create

- `src/app/case-study/lindex/page.tsx`
- `src/app/case-study/polestar/page.tsx`
- `src/app/case-study/ikea/page.tsx`
- `src/app/case-study/visma/page.tsx`

### Files to modify

- `src/components/architecture/index.ts` (remove LogTech exports)
- `src/app/cto-crisis/page.tsx` (update inline proof artifact metrics to match real data)
- `src/app/cto-proactive/page.tsx` (update inline proof artifact section)

## Case Study Content

### 1. Lindex: Från Legacy till Eventdriven Arkitektur

- **Route:** `/case-study/lindex`
- **Industry:** Retail / Global E-handel
- **Timeline:** 2.5 år (on demand, 8-24h/vecka)
- **Personas:** cto-crisis, cto-proactive
- **Tier:** Teknisk Revision / Teknisk ledning

**Problem:** Legacy-system för order, lager och WMS-flöden tätt kopplade till Oracle-databaser och PostNord. Manuella integrationer, kaskadrisker vid varje förändring.

**Insats:** .NET microservices med DDD/event sourcing, Azure/Kubernetes med Terraform, Cosmos DB + Service Bus + Kafka, Grafana observability.

**Metrics:** Deploy 1/mån → 3/vecka, incidenter -88%, lead time 3v → 4d, tillgänglighet 97% → 99.8%.

### 2. Polestar: Teknisk Ledning för Finansiella Integrationer

- **Route:** `/case-study/polestar`
- **Industry:** Fordon / FinTech
- **Timeline:** 4 år (2021-2025)
- **Personas:** cto-proactive, cto-crisis
- **Tier:** Teknisk ledning på deltid

**Problem:** Komplexa finansiella integrationer, AWS serverless, saknade senior teknisk ledning. Ad hoc-beslut, långsam onboarding.

**Insats:** Interim Tech Lead, AWS Lambda/DynamoDB, teknisk analys, mentoring, Datadog/Kibana monitoring.

**Metrics:** Velocity +45%, uptime 98.5% → 99.9%, onboarding 3mån → 3v, 0 säkerhetsincidenter.

### 3. IKEA Inreda: Backend-Arkitektur för 3D-Modellering

- **Route:** `/case-study/ikea`
- **Industry:** Detaljhandel / Enterprise
- **Timeline:** 6 månader (2021)
- **Personas:** cto-crisis, cto-proactive
- **Tier:** Enterprise Rescue

**Problem:** Ny intern app behövde .NET backend, IAM med Active Directory, migration från odokumenterad Python-legacy.

**Insats:** Arkitektur från grunden, CI/CD i Azure DevOps, IAM + Microsoft Graph, MongoDB datamodell, reverse engineering + migrationsplan.

**Metrics:** Design till MVP 8v, 24 API-endpoints, 100% AD-compliance, fullständig legacy-kartläggning.

### 4. Visma: Automatiserad Credential-Rotation

- **Route:** `/case-study/visma`
- **Industry:** HR-Tech / Enterprise SaaS
- **Timeline:** 4 månader (2026)
- **Personas:** cto-crisis
- **Tier:** 30-dagars Teknisk Revision

**Problem:** Manuellt hanterade credentials för MSSQL/RabbitMQ, aldrig roterade. Säkerhetsrisk för känslig HR/lönedata.

**Insats:** Lambda (.NET 8 Native AOT) till prod, GitHub Actions CI/CD, CloudFormation + IAM least privilege, 3-miljöstrategi.

**Metrics:** Rotation manuell → var 30:e dag, deploy manuell → automated, 1 miljö → 3, säkerhetsrisk hög → minimal.

## Copy Guidelines

All content follows `docs/tonpalett.md`:
- No em-dash, use period/comma/colon/parenthesis
- "ni" not "du"
- Banned words: fraktionell, exekverbar, intervention (as noun), impakt, blöder
- Canonical tier names from tonpalett
