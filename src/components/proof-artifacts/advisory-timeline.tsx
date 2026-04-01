import type { ReactNode } from "react";

type TimelineStatus = "crisis" | "active" | "resolved";

interface TimelineNodeProps {
  time: string;
  headline: string;
  description: string;
  metric?: string;
  status: TimelineStatus;
  isLast?: boolean;
}

const DOT_COLORS: Record<TimelineStatus, string> = {
  crisis: "bg-[#DC2626]",
  active: "bg-[#F59E0B]",
  resolved: "bg-[#22C55E]",
};

const METRIC_STYLES: Record<TimelineStatus, string> = {
  crisis:
    "bg-[#2a0505] text-[#FCA5A5] border-[#DC2626]/30",
  active:
    "bg-[#2a1a05] text-[#FDE68A] border-[#F59E0B]/30",
  resolved:
    "bg-[#052a0a] text-[#86EFAC] border-[#22C55E]/30",
};

function TimelineNode({
  time,
  headline,
  description,
  metric,
  status,
  isLast = false,
}: TimelineNodeProps) {
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

function TimelineWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-2 sm:px-4">
      <ol className="list-none space-y-0">{children}</ol>
    </div>
  );
}

// ── Situation: About to sign ─────────────────────────────────────────
export const AdvisoryTimelineSituation = (
  <TimelineWrapper>
    <TimelineNode
      time="Utgångsläge"
      headline="Kommun Eksund planerar nytt skoladministrationssystem"
      description="Kommunen behöver ersätta ett föråldrat system för elevhantering, schemaläggning och frånvarorapportering. En leverantör har presenterat en lösning."
      status="crisis"
    />
    <TimelineNode
      time="Vecka 1"
      headline="Avtalsförslag på 30 miljoner SEK ligger på bordet"
      description="Leverantören har tagit fram ett omfattande förslag med moduler, integrationer och flerårig licenskostnad. Beslutet ska fattas inom en månad."
      metric="30M SEK avtal"
      status="crisis"
    />
    <TimelineNode
      time="Vecka 2"
      headline="Ingen intern kompetens att bedöma förslaget"
      description="IT-avdelningen saknar resurser att granska den tekniska lösningen. Risken att skriva på ett avtal med dolda kostnader och onödig komplexitet är påtaglig."
      status="crisis"
      isLast
    />
  </TimelineWrapper>
);

// ── Intervention: Independent review ─────────────────────────────────
export const AdvisoryTimelineIntervention = (
  <TimelineWrapper>
    <TimelineNode
      time="Vecka 1"
      headline="Oberoende teknisk granskning"
      description="En erfaren mjukvaruarkitekt analyserar leverantörens förslag: mjukvaruarkitektur, integrationer, licensmodell och dolda beroenden."
      status="active"
    />
    <TimelineNode
      time="Vecka 2"
      headline="Onödig komplexitet identifierad"
      description="Granskningen visar att 3 av 7 moduler inte behövs för kommunens faktiska krav. Lösningens integrationslager är överspecificerat."
      metric="3 onödiga moduler"
      status="active"
    />
    <TimelineNode
      time="Vecka 3"
      headline="Alternativ lösning presenterad"
      description="En reviderad kravspecifikation tas fram som möter kommunens verkliga behov utan överflödiga komponenter. Underlag för omförhandling levereras."
      status="active"
      isLast
    />
  </TimelineWrapper>
);

// ── Result: Savings ──────────────────────────────────────────────────
export const AdvisoryTimelineResult = (
  <TimelineWrapper>
    <TimelineNode
      time="Månad 2"
      headline="Omförhandlat avtal"
      description="Med den oberoende granskningen som underlag förhandlar kommunen om avtalet. Onödiga moduler stryks och licensvillkor förbättras."
      metric="-12M SEK"
      status="resolved"
    />
    <TimelineNode
      time="Månad 3"
      headline="System som matchar verkliga behov"
      description="Implementeringen startar med en lösning som är anpassad efter kommunens faktiska krav, inte leverantörens maxförslag."
      status="resolved"
    />
    <TimelineNode
      time="År 1"
      headline="Lägre löpande kostnader"
      description="Färre moduler innebär lägre licens- och underhållskostnader. Kommunen sparar ytterligare genom enklare förvaltning."
      metric="18M SEK total besparing"
      status="resolved"
      isLast
    />
  </TimelineWrapper>
);
