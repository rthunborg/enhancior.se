import type { ReactNode } from "react";

type FormatStatus = "active" | "resolved";

interface FormatNodeProps {
  time: string;
  headline: string;
  description: string;
  metric?: string;
  status: FormatStatus;
  isLast?: boolean;
}

const DOT_COLORS: Record<FormatStatus, string> = {
  active: "bg-[#F59E0B]",
  resolved: "bg-[#22C55E]",
};

const METRIC_STYLES: Record<FormatStatus, string> = {
  active: "bg-[#2a1a05] text-[#FDE68A] border-[#F59E0B]/30",
  resolved: "bg-[#052a0a] text-[#86EFAC] border-[#22C55E]/30",
};

function FormatNode({
  time,
  headline,
  description,
  metric,
  status,
  isLast = false,
}: FormatNodeProps) {
  return (
    <li className="flex gap-4">
      <div className="flex flex-col items-center pt-1.5">
        <div
          className={`w-3 h-3 rounded-full shrink-0 ${DOT_COLORS[status]}`}
          aria-hidden="true"
        />
        {!isLast && (
          <div
            className="w-px flex-1 bg-[rgba(255,255,255,0.08)]"
            aria-hidden="true"
          />
        )}
      </div>
      <div className={isLast ? "pb-0" : "pb-8"}>
        <p className="font-mono text-xs text-[#919191] mb-1">{time}</p>
        <p className="text-sm font-semibold text-[#EDEDED] mb-1">{headline}</p>
        <p className="text-sm text-[#A1A1A1] leading-relaxed">{description}</p>
        {metric && (
          <span
            className={`inline-block mt-2 font-mono text-xs px-3 py-1 rounded-full border ${METRIC_STYLES[status]}`}
          >
            {metric}
          </span>
        )}
      </div>
    </li>
  );
}

function FormatWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-2 sm:px-4">
      <ol className="list-none space-y-0">{children}</ol>
    </div>
  );
}

// ── Föreläsning ─────────────────────────────────────────────────────
export const AIEducationLecture = (
  <FormatWrapper>
    <FormatNode
      time="Introduktion"
      headline="Vad AI kan och inte kan idag"
      description="Avmystifiering av AI för beslutsfattare. Vad är hype och vad är verklig affärsnytta? Konkreta exempel från er bransch."
      metric="Halvdag eller heldag"
      status="active"
    />
    <FormatNode
      time="Demonstration"
      headline="AI-verktyg i praktiken"
      description="Live-demonstrationer av hur AI-verktyg används i verkliga affärsscenarier. Deltagarna ser konkret vad som är möjligt redan idag."
      status="active"
    />
    <FormatNode
      time="Strategi"
      headline="Identifiera AI-möjligheter i er organisation"
      description="Strukturerad genomgång av var AI skapar mest värde i just er verksamhet. Ni lämnar med en prioriterad lista på möjligheter."
      status="active"
      isLast
    />
  </FormatWrapper>
);

// ── Workshop ────────────────────────────────────────────────────────
export const AIEducationWorkshop = (
  <FormatWrapper>
    <FormatNode
      time="Teori"
      headline="Kort introduktion, sedan direkt till praktik"
      description="En komprimerad genomgång av de viktigaste koncepten, anpassad efter om gruppen är ledning eller utvecklare."
      status="active"
    />
    <FormatNode
      time="Praktik"
      headline="Deltagarna arbetar med AI-verktyg på egna uppgifter"
      description="Hands-on-övningar där varje deltagare använder AI-verktyg på riktiga arbetsuppgifter från sin egen vardag. Utvecklare lär sig koda effektivare med AI, ledning lär sig använda AI i beslutsprocesser."
      metric="Egna uppgifter, inte övningsexempel"
      status="active"
    />
    <FormatNode
      time="Reflektion"
      headline="Utvärdering och nästa steg"
      description="Gemensam genomgång av resultat. Vad fungerade? Vad kan användas direkt imorgon? Deltagarna formulerar sin egen handlingsplan."
      status="active"
      isLast
    />
  </FormatWrapper>
);

// ── Lärandemål ──────────────────────────────────────────────────────
export const AIEducationOutcomes = (
  <FormatWrapper>
    <FormatNode
      time="Förståelse"
      headline="Vet när AI skapar värde — och när det inte gör det"
      description="Deltagarna kan bedöma vilka arbetsuppgifter och processer som faktiskt gynnas av AI, utan att falla för hype."
      metric="Strategisk AI-kompetens"
      status="resolved"
    />
    <FormatNode
      time="Praktisk förmåga"
      headline="Kan använda AI-verktyg effektivt i det dagliga arbetet"
      description="Varje deltagare har provat AI-verktyg på sina egna uppgifter och vet hur de kan använda dem från och med nästa arbetsdag."
      metric="Direkt tillämpbar kunskap"
      status="resolved"
    />
    <FormatNode
      time="Handlingsplan"
      headline="Konkret plan för AI-användning i teamet"
      description="Organisationen lämnar med en prioriterad handlingsplan för hur AI kan införas stegvis, utan stora investeringar eller omorganisationer."
      metric="Redo att agera"
      status="resolved"
      isLast
    />
  </FormatWrapper>
);
