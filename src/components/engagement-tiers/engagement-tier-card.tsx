"use client";

import { motion } from "framer-motion";
import type { EngagementTier } from "@/lib/engagement-tiers";
import { cn } from "@/lib/utils";

interface EngagementTierCardProps {
  tier: EngagementTier;
  emphasized?: boolean;
  reducedMotion: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function EngagementTierCard({
  tier,
  emphasized = false,
  reducedMotion,
}: EngagementTierCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
      }
      className={cn(
        "relative flex flex-col rounded-lg p-8 bg-[#111111]",
        "border",
        emphasized
          ? "border-[#F59E0B]/40 order-first md:order-none"
          : "border-[rgba(255,255,255,0.08)]"
      )}
    >
      {emphasized && (
        <span className="absolute -top-3 left-6 bg-[#F59E0B] text-[#0A0A0A] text-xs font-semibold px-3 py-1 rounded-full">
          Rekommenderad
        </span>
      )}

      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#EDEDED] mb-1">
          {tier.name}
        </h3>
        <p className="font-mono text-sm text-[#919191] mb-4">
          {tier.tagline}
        </p>

        <p className="text-sm text-[#A1A1A1] leading-relaxed mb-6">
          {tier.scope}
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
          <div>
            <span className="font-mono text-xs text-[#919191] uppercase tracking-wider">
              Tidslinje
            </span>
            <p className="font-mono text-sm text-[#EDEDED]">{tier.timeline}</p>
          </div>
          <div>
            <span className="font-mono text-xs text-[#919191] uppercase tracking-wider">
              Pris
            </span>
            <p className="font-mono text-sm text-[#EDEDED]">
              {tier.startingPrice}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mb-8" aria-label={`Leverabler: ${tier.name}`}>
          {tier.deliverables.map((deliverable) => (
            <li
              key={deliverable}
              className="flex items-start gap-2 text-sm text-[#A1A1A1]"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F59E0B] shrink-0"
                aria-hidden="true"
              />
              {deliverable}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={tier.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${tier.ctaLabel} (öppnas i ny flik)`}
        className={cn(
          "inline-flex items-center justify-center min-h-[44px] px-6 py-3 font-semibold rounded-lg text-sm",
          "outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2",
          "transition-colors duration-200 ease-out motion-reduce:transition-none",
          emphasized
            ? "bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A]"
            : "bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] text-[#EDEDED]"
        )}
      >
        {tier.ctaLabel}
      </a>
    </motion.article>
  );
}
