"use client";

import { motion, useReducedMotion } from "framer-motion";
import { availability, type AvailabilityConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const statusDotColor: Record<AvailabilityConfig["status"], string> = {
  available: "bg-emerald-500",
  limited: "bg-amber-500",
  booked: "bg-red-500",
};

export function AvailabilityBadge() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex justify-center mb-8"
      role="status"
      aria-label={`Tillgänglighet: ${availability.text}`}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2.5 px-4 py-2",
          "rounded-full border border-white/10",
          "bg-white/[0.04] backdrop-blur-sm"
        )}
      >
        <span
          className={cn(
            "size-2.5 rounded-full shrink-0",
            statusDotColor[availability.status]
          )}
          aria-hidden="true"
        />
        <span className="sr-only">Tillgänglighet: </span>
        <span className="text-sm font-medium text-[#EDEDED] tracking-wide">
          {availability.text}
        </span>
      </div>
    </motion.div>
  );
}
