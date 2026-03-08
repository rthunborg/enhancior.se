"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { engagementTiers } from "@/lib/engagement-tiers";
import { EngagementTierCard } from "./engagement-tier-card";


interface EngagementTiersProps {
  emphasizedTierId?: string;
  tierIds?: string[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function EngagementTiers({ emphasizedTierId, tierIds }: EngagementTiersProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const tiers = tierIds
    ? engagementTiers.filter((t) => tierIds.includes(t.id))
    : engagementTiers;

  return (
    <section aria-label="Engagemang" className="mb-16 md:mb-24 lg:mb-32">
      <h2 className="text-2xl font-bold text-[#EDEDED] mb-8">
        Välj den modell som passar er situation
      </h2>

      <motion.div
        variants={containerVariants}
        initial={reducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tiers.map((tier) => (
          <EngagementTierCard
            key={tier.id}
            tier={tier}
            emphasized={tier.id === emphasizedTierId}
            reducedMotion={reducedMotion}
          />
        ))}
      </motion.div>
    </section>
  );
}
