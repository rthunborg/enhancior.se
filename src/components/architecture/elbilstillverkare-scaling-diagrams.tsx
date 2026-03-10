"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  ServiceBox,
  PipelineArrow,
  MetricBadge,
  DiagramLabel,
} from "./diagram-primitives";

// ── Before: Tangled integration landscape ──────────────────────────────
export const ElbilstillverkareScalingBefore = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Före: Trasslig integrations-topologi med delad databas, oklara ägare och manuell koordinering"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Central cluster of tangled services */}
    <ServiceBox x={180} y={30} width={110} height={50} label="Financing" sublabel="kund-flöde" color="red" />
    <ServiceBox x={320} y={30} width={110} height={50} label="Identity" sublabel="auth + profil" color="red" />
    <ServiceBox x={120} y={110} width={110} height={50} label="Orders" sublabel="checkout" color="red" />
    <ServiceBox x={260} y={120} width={120} height={50} label="Inventory" sublabel="lager + priser" color="red" />
    <ServiceBox x={400} y={110} width={110} height={50} label="Notifications" sublabel="e-post + SMS" color="red" />

    {/* Shared database at bottom */}
    <ServiceBox x={220} y={240} width={160} height={50} label="Delad PostgreSQL" sublabel="alla tabeller" color="red" />

    {/* Tangled dependency arrows — crossed and messy */}
    <PipelineArrow x1={235} y1={80} x2={320} y2={120} color="neutral" dashed />
    <PipelineArrow x1={375} y1={80} x2={260} y2={120} color="neutral" dashed />
    <PipelineArrow x1={175} y1={160} x2={260} y2={145} color="neutral" dashed />
    <PipelineArrow x1={380} y1={145} x2={430} y2={110} color="neutral" dashed />
    <PipelineArrow x1={230} y1={80} x2={175} y2={110} color="neutral" dashed />
    <PipelineArrow x1={430} y1={80} x2={380} y2={120} color="neutral" dashed />

    {/* All services pointing to shared DB */}
    <PipelineArrow x1={175} y1={160} x2={250} y2={240} color="red" dashed />
    <PipelineArrow x1={320} y1={170} x2={310} y2={240} color="red" dashed />
    <PipelineArrow x1={455} y1={160} x2={360} y2={240} color="red" dashed />
    <PipelineArrow x1={235} y1={80} x2={270} y2={240} color="red" dashed />
    <PipelineArrow x1={375} y1={80} x2={340} y2={240} color="red" dashed />

    {/* Pain metric badges */}
    <MetricBadge x={80} y={200} label="3 mån onboarding" color="red" />
    <MetricBadge x={510} y={200} label="ad hoc-beslut" color="red" />
    <MetricBadge x={510} y={30} label="veckor lead time" color="red" />

    {/* Labels */}
    <DiagramLabel x={300} y={305} text="delad DB, oklara ägare" color="#FCA5A5" size={9} />
    <DiagramLabel x={80} y={50} text="manuell koordinering" color="#FCA5A5" size={9} />
  </motion.svg>
);

// ── Intervention: Domain boundaries emerging ───────────────────────────
export const ElbilstillverkareScalingIntervention = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Åtgärd: Domängränser införs, API-gateway och observability-lager tillkommer"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Domain boundary: Financing (dashed grouping rect) */}
    <motion.rect
      x={20}
      y={60}
      width={170}
      height={120}
      rx={8}
      fill="rgba(245,158,11,0.03)"
      stroke="#F59E0B"
      strokeWidth={1}
      strokeDasharray="8 4"
      opacity={0.5}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 } }}
    />
    <DiagramLabel x={105} y={76} text="Domän: Financing" color="#FDE68A" size={9} />
    <ServiceBox x={35} y={90} width={140} height={40} label="Financing" sublabel="kund-flöde" color="amber" />
    <ServiceBox x={35} y={140} width={140} height={30} label="Orders" color="amber" />

    {/* Domain boundary: Identity */}
    <motion.rect
      x={210}
      y={60}
      width={170}
      height={120}
      rx={8}
      fill="rgba(245,158,11,0.03)"
      stroke="#F59E0B"
      strokeWidth={1}
      strokeDasharray="8 4"
      opacity={0.5}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 } }}
    />
    <DiagramLabel x={295} y={76} text="Domän: Identity" color="#FDE68A" size={9} />
    <ServiceBox x={225} y={90} width={140} height={40} label="Identity" sublabel="auth + profil" color="amber" />
    <ServiceBox x={225} y={140} width={140} height={30} label="Notifications" color="neutral" />

    {/* Domain boundary: Inventory */}
    <motion.rect
      x={400}
      y={60}
      width={180}
      height={120}
      rx={8}
      fill="rgba(245,158,11,0.03)"
      stroke="#F59E0B"
      strokeWidth={1}
      strokeDasharray="8 4"
      opacity={0.5}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 } }}
    />
    <DiagramLabel x={490} y={76} text="Domän: Inventory" color="#FDE68A" size={9} />
    <ServiceBox x={415} y={90} width={150} height={40} label="Inventory" sublabel="lager + priser" color="amber" />

    {/* API Gateway appearing at top */}
    <ServiceBox x={210} y={8} width={180} height={36} label="API Gateway" sublabel="centralt" color="amber" />

    {/* Arrows from gateway to domains becoming cleaner */}
    <PipelineArrow x1={260} y1={44} x2={105} y2={60} color="amber" />
    <PipelineArrow x1={300} y1={44} x2={295} y2={60} color="amber" />
    <PipelineArrow x1={340} y1={44} x2={490} y2={60} color="amber" />

    {/* Observability layer at bottom */}
    <motion.rect
      x={120}
      y={210}
      width={360}
      height={45}
      rx={6}
      fill="rgba(245,158,11,0.03)"
      stroke="#F59E0B"
      strokeWidth={0.5}
      strokeDasharray="6 3"
      opacity={0.4}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }}
    />
    <ServiceBox x={135} y={216} width={100} height={32} label="Monitoring" color="neutral" />
    <ServiceBox x={250} y={216} width={100} height={32} label="Logging" color="neutral" />
    <ServiceBox x={365} y={216} width={100} height={32} label="Tracing" color="neutral" />

    {/* Labels and metrics */}
    <MetricBadge x={300} y={290} label="6 månaders insats" color="amber" />
    <DiagramLabel x={300} y={198} text="observability" color="#FDE68A" size={9} />
    <DiagramLabel x={490} y={190} text="Terraform IaC" color="#FDE68A" size={9} />
  </motion.svg>
);

// ── After: Governed domain platform ────────────────────────────────────
export const ElbilstillverkareScalingAfter = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Efter: Styrda domäner med oberoende deploys, API-gateway och full observability"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Gateway at top */}
    <ServiceBox x={210} y={6} width={180} height={36} label="API Gateway" color="green" />

    {/* Domain: Financing (clean green boundary) */}
    <motion.rect
      x={20}
      y={60}
      width={170}
      height={140}
      rx={8}
      fill="rgba(34,197,94,0.03)"
      stroke="#22C55E"
      strokeWidth={1}
      opacity={0.5}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 } }}
    />
    <DiagramLabel x={105} y={74} text="Team Financing" color="#86EFAC" size={9} />
    <ServiceBox x={35} y={85} width={140} height={36} label="Financing" color="green" />
    <ServiceBox x={35} y={130} width={140} height={36} label="Orders" color="green" />

    {/* Domain: Identity */}
    <motion.rect
      x={210}
      y={60}
      width={170}
      height={140}
      rx={8}
      fill="rgba(34,197,94,0.03)"
      stroke="#22C55E"
      strokeWidth={1}
      opacity={0.5}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 } }}
    />
    <DiagramLabel x={295} y={74} text="Team Identity" color="#86EFAC" size={9} />
    <ServiceBox x={225} y={85} width={140} height={36} label="Identity" color="green" />
    <ServiceBox x={225} y={130} width={140} height={36} label="Notifications" color="green" />

    {/* Domain: Inventory */}
    <motion.rect
      x={400}
      y={60}
      width={180}
      height={140}
      rx={8}
      fill="rgba(34,197,94,0.03)"
      stroke="#22C55E"
      strokeWidth={1}
      opacity={0.5}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 } }}
    />
    <DiagramLabel x={490} y={74} text="Team Inventory" color="#86EFAC" size={9} />
    <ServiceBox x={415} y={85} width={150} height={36} label="Inventory" color="green" />

    {/* Gateway arrows to domains */}
    <PipelineArrow x1={260} y1={42} x2={105} y2={60} color="green" />
    <PipelineArrow x1={300} y1={42} x2={295} y2={60} color="green" />
    <PipelineArrow x1={340} y1={42} x2={490} y2={60} color="green" />

    {/* Independent deploy arrows per domain */}
    <PipelineArrow x1={105} y1={200} x2={105} y2={222} color="green" />
    <PipelineArrow x1={295} y1={200} x2={295} y2={222} color="green" />
    <PipelineArrow x1={490} y1={200} x2={490} y2={222} color="green" />
    <DiagramLabel x={105} y={215} text="deploy" color="#86EFAC" size={8} />
    <DiagramLabel x={295} y={215} text="deploy" color="#86EFAC" size={8} />
    <DiagramLabel x={490} y={215} text="deploy" color="#86EFAC" size={8} />

    {/* Observability layer at bottom */}
    <motion.rect
      x={60}
      y={230}
      width={480}
      height={40}
      rx={6}
      fill="rgba(34,197,94,0.03)"
      stroke="#22C55E"
      strokeWidth={0.5}
      opacity={0.4}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }}
    />
    <ServiceBox x={75} y={235} width={100} height={30} label="Monitoring" color="green" />
    <ServiceBox x={190} y={235} width={100} height={30} label="Logging" color="green" />
    <ServiceBox x={305} y={235} width={100} height={30} label="Tracing" color="green" />
    <ServiceBox x={420} y={235} width={100} height={30} label="Alerting" color="green" />

    {/* Metric badges */}
    <MetricBadge x={105} y={295} label="+45% velocity" color="green" />
    <MetricBadge x={300} y={295} label="3v onboarding" color="green" />
    <MetricBadge x={490} y={295} label="99.9% uptime" color="green" />
  </motion.svg>
);
