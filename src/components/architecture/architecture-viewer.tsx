"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type ViewerState = "before" | "intervention" | "after";

interface ArchitectureViewerProps {
  beforeContent: React.ReactNode;
  interventionContent: React.ReactNode;
  afterContent: React.ReactNode;
  labels?: {
    before?: string;
    intervention?: string;
    after?: string;
  };
}

const STATES: ViewerState[] = ["before", "intervention", "after"];

const DEFAULT_LABELS: Record<ViewerState, string> = {
  before: "Före",
  intervention: "Åtgärd",
  after: "Efter",
};

const STATE_GLOW: Record<ViewerState, string> = {
  before: "shadow-[0_0_40px_rgba(220,38,38,0.08)]",
  intervention: "shadow-[0_0_40px_rgba(245,158,11,0.08)]",
  after: "shadow-[0_0_40px_rgba(34,197,94,0.08)]",
};

const STATE_BORDER: Record<ViewerState, string> = {
  before: "border-red-900/30",
  intervention: "border-amber-900/30",
  after: "border-green-900/30",
};

export function ArchitectureViewer({
  beforeContent,
  interventionContent,
  afterContent,
  labels,
}: ArchitectureViewerProps) {
  const [active, setActive] = useState<ViewerState>("before");
  const shouldReduceMotion = useReducedMotion();

  const resolvedLabels: Record<ViewerState, string> = {
    before: labels?.before ?? DEFAULT_LABELS.before,
    intervention: labels?.intervention ?? DEFAULT_LABELS.intervention,
    after: labels?.after ?? DEFAULT_LABELS.after,
  };

  const content: Record<ViewerState, React.ReactNode> = {
    before: beforeContent,
    intervention: interventionContent,
    after: afterContent,
  };

  const duration = shouldReduceMotion ? 0 : 0.3;

  return (
    <div
      className={`bg-[#111111] border rounded-xl overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none ${STATE_GLOW[active]} ${STATE_BORDER[active]}`}
    >
      {/* Toggle bar header */}
      <div className="p-4 sm:p-6 lg:p-8 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-4 sm:gap-6">
          <div
            role="tablist"
            aria-label="Arkitektur-visualisering: före, åtgärd och efter"
            className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.08)] rounded-lg p-1 inline-flex gap-1 flex-1 sm:flex-initial"
          >
            {STATES.map((state) => {
              const isActive = active === state;
              return (
                <button
                  key={state}
                  id={`arch-tab-${state}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(state)}
                  className={`
                    font-mono text-sm rounded-md px-4 py-2 min-h-[44px] flex-1 sm:flex-initial text-center
                    outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 ring-offset-[#0A0A0A]
                    ${
                      isActive
                        ? "bg-[#F59E0B] text-[#0A0A0A] font-semibold"
                        : "text-[#919191] hover:text-[#EDEDED] transition-colors duration-150 ease-out motion-reduce:transition-none"
                    }
                  `}
                >
                  {resolvedLabels[state]}
                </button>
              );
            })}
          </div>

          {/* Step progress indicator */}
          <div
            className="hidden sm:flex items-center gap-2"
            aria-hidden="true"
          >
            {STATES.map((state, i) => (
              <div key={state} className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    active === state
                      ? "bg-[#F59E0B]"
                      : STATES.indexOf(active) > i
                        ? "bg-[#F59E0B]/40"
                        : "bg-[#333333]"
                  }`}
                />
                {i < STATES.length - 1 && (
                  <div
                    className={`w-6 h-px transition-colors duration-300 ${
                      STATES.indexOf(active) > i
                        ? "bg-[#F59E0B]/30"
                        : "bg-[#333333]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div
        role="tabpanel"
        aria-labelledby={`arch-tab-${active}`}
        tabIndex={0}
        className="p-4 sm:p-6 lg:p-8 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration, ease: "easeInOut" }}
            className="w-full"
          >
            {content[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
