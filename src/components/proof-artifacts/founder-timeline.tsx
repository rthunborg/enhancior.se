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
      {/* Left: dot + connector line */}
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

      {/* Right: content */}
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

// ── Situation: The chaos ───────────────────────────────────────────────
export const FounderTimelineSituation = (
  <TimelineWrapper>
    <TimelineNode
      time="Dag 0"
      headline="CTO lämnar utan förvarning"
      description="NordicCart, en e-handelsplattform med 12 utvecklare och Series A-finansiering, förlorar sin tekniske ledare mitt i en kritisk skalningsfas."
      status="crisis"
    />
    <TimelineNode
      time="Vecka 1"
      headline="Velocity sjunker 40%"
      description="Utan teknisk riktning tappar teamet fart. Prioriteringar blir oklara och leveranser försenas."
      metric="-40% velocity"
      status="crisis"
    />
    <TimelineNode
      time="Vecka 2"
      headline="Styrelsemöte om 4 veckor"
      description="Investerarna vill ha svar om teknisk roadmap, leveranskapacitet och risker. Ingen kan svara."
      status="crisis"
    />
    <TimelineNode
      time="Vecka 3"
      headline="Panikrekrytering hotar"
      description="Pressen att snabbt tillsätta rollen riskerar en felrekrytering som kostar mer än vakansen."
      status="crisis"
      isLast
    />
  </TimelineWrapper>
);

// ── Intervention: Week-by-week stabilization ───────────────────────────
export const FounderTimelineIntervention = (
  <TimelineWrapper>
    <TimelineNode
      time="Vecka 1-2"
      headline="Stabilisering"
      description="Dagliga standups återinförs. Pågående leveranser prioriteras och blockeringar löses. Teamet får en tydlig kontaktpunkt."
      status="active"
    />
    <TimelineNode
      time="Vecka 3-4"
      headline="Teknisk genomlysning"
      description="Arkitektur, tech debt och teamkapacitet kartläggs. En ärlig nulägesbild som ger styrelsen underlag."
      status="active"
    />
    <TimelineNode
      time="Vecka 5-6"
      headline="Roadmap för styrelsen"
      description="En trovärdig teknisk roadmap med milstolpar, risker och resursbehov. Styrelsen kan fatta informerade beslut."
      status="active"
    />
    <TimelineNode
      time="Vecka 8+"
      headline="CTO-rekrytering"
      description="Rollbeskrivning definierad utifrån faktiska behov. Rekryteringsprocessen startar med rätt kravbild."
      status="active"
      isLast
    />
  </TimelineWrapper>
);

// ── Result: Outcomes ───────────────────────────────────────────────────
export const FounderTimelineResult = (
  <TimelineWrapper>
    <TimelineNode
      time="Månad 2"
      headline="Teamet levererar igen"
      description="Velocity återställd. Sprintmål nås konsekvent."
      metric="+60% velocity"
      status="resolved"
    />
    <TimelineNode
      time="Månad 3"
      headline="Styrelsen har kontroll"
      description="Kvartalsrapport levererad med teknisk roadmap, risker och KPIs. Investerarnas förtroende återställt."
      metric="godkänd due diligence"
      status="resolved"
    />
    <TimelineNode
      time="Månad 4"
      headline="Permanent CTO på plats"
      description="Rekrytering slutförd med rätt kandidat. Strukturerad överlämning genomförd på 2 veckor."
      metric="4 mån till CTO"
      status="resolved"
    />
    <TimelineNode
      time="Månad 6"
      headline="Handover complete"
      description="Fraktionellt uppdrag avslutat. Ny CTO har full kontext, dokumentation och teamets förtroende."
      status="resolved"
      isLast
    />
  </TimelineWrapper>
);
