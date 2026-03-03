# enhancior.se

Company website for **Enhancior AB** — a solo software engineering and architecture consultancy helping SaaS companies and scale-ups close the gap between business ambition and engineering execution.

The site inverts the standard consultancy website paradigm. Instead of presenting credentials for visitors to evaluate, it immediately diagnoses visitor pain through an "ER Triage" homepage — routing each persona through a tailored conversion pathway.

Dark-mode only. Swedish copy. Zero runtime database.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| UI Components | shadcn/ui + Radix |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Content | MDX (local files, no CMS) |
| Deployment | Vercel (SSG via `output: 'export'`) |
| Analytics | Vercel Analytics |

## Development

```bash
npm run dev        # Start development server
npm run build      # Production SSG build
npm run lint       # Run ESLint
```

## Project Structure

```
src/app/             # Next.js App Router pages
src/components/      # UI and custom components
src/lib/             # Utilities, MDX parsing, config
content/             # MDX case studies and content
public/              # Static assets (SVGs, PDFs)
```

## Deployment

Pushing to `main` triggers an automatic Vercel build and deploy. All pages are statically generated at build time — no SSR, no runtime data fetching.
