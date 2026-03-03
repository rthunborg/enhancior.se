"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  ServiceBox,
  PipelineArrow,
  StatusDot,
  QualityGate,
  MetricBadge,
  DiagramLabel,
} from "./diagram-primitives";

export const GenericCrisisBefore = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Före: Monolitisk pipeline med kopplade beroenden och manuella deploys"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Monolith */}
    <ServiceBox
      x={30}
      y={80}
      width={160}
      height={160}
      label="Monolit"
      sublabel="all kod i en deploy"
      color="red"
    />

    {/* Single pipeline */}
    <PipelineArrow x1={190} y1={160} x2={260} y2={160} color="red" dashed />

    {/* Build stage */}
    <ServiceBox
      x={260}
      y={120}
      width={100}
      height={80}
      label="Build"
      sublabel="manuell"
      color="red"
    />
    <StatusDot cx={310} cy={112} color="red" />

    {/* Single arrow to prod */}
    <PipelineArrow x1={360} y1={160} x2={430} y2={160} color="red" dashed />

    {/* Production */}
    <ServiceBox
      x={430}
      y={120}
      width={140}
      height={80}
      label="Produktion"
      sublabel="single target"
      color="red"
    />
    <StatusDot cx={500} cy={112} color="red" />

    {/* Tangled dependency lines */}
    <PipelineArrow
      x1={80}
      y1={240}
      x2={280}
      y2={200}
      color="neutral"
      dashed
    />
    <PipelineArrow
      x1={140}
      y1={240}
      x2={310}
      y2={200}
      color="neutral"
      dashed
    />
    <PipelineArrow
      x1={110}
      y1={80}
      x2={280}
      y2={120}
      color="neutral"
      dashed
    />

    {/* Labels */}
    <MetricBadge x={500} y={220} label="14d lead time" color="red" />
    <MetricBadge x={310} y={230} label="60% fail rate" color="red" />
    <DiagramLabel
      x={110}
      y={270}
      text="Kopplade beroenden"
      color="#FCA5A5"
      size={9}
    />
    <DiagramLabel
      x={500}
      y={250}
      text="Manuell övervakning"
      color="#FCA5A5"
      size={9}
    />
  </motion.svg>
);

export const GenericCrisisIntervention = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Åtgärd: Pipeline bryts upp i isolerade steg med quality gates"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Monolith splitting */}
    <ServiceBox x={30} y={60} width={120} height={70} label="Domän A" color="amber" />
    <ServiceBox x={30} y={150} width={120} height={70} label="Domän B" color="amber" />
    <ServiceBox x={30} y={240} width={120} height={70} label="Domän C" color="neutral" />

    {/* Splitting indicator */}
    <DiagramLabel
      x={90}
      y={42}
      text="Monolit bryts upp"
      color="#FDE68A"
      size={9}
    />

    {/* Pipeline stages */}
    <PipelineArrow x1={150} y1={95} x2={210} y2={160} color="amber" />
    <PipelineArrow x1={150} y1={185} x2={210} y2={160} color="amber" />

    <ServiceBox
      x={210}
      y={132}
      width={90}
      height={56}
      label="Build"
      sublabel="isolerat"
      color="amber"
    />

    {/* Quality gate */}
    <PipelineArrow x1={300} y1={160} x2={340} y2={160} color="amber" />
    <QualityGate x={360} y={160} color="amber" />

    {/* Test stage */}
    <PipelineArrow x1={370} y1={160} x2={400} y2={160} color="amber" />
    <ServiceBox
      x={400}
      y={132}
      width={90}
      height={56}
      label="Test"
      sublabel="automatisk"
      color="amber"
    />

    {/* Deploy stage */}
    <PipelineArrow x1={490} y1={160} x2={520} y2={160} color="neutral" />
    <ServiceBox x={520} y={132} width={60} height={56} label="Deploy" color="neutral" />

    {/* Timeline label */}
    <MetricBadge x={300} y={40} label="30 dagars insats" color="amber" />
    <DiagramLabel
      x={360}
      y={200}
      text="Quality gates"
      color="#FDE68A"
      size={9}
    />
    <DiagramLabel
      x={450}
      y={210}
      text="Automatiserade tester"
      color="#FDE68A"
      size={9}
    />
  </motion.svg>
);

export const GenericCrisisAfter = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Efter: Isolerade tjänster med oberoende pipelines och blue-green deployment"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Independent services */}
    <ServiceBox x={30} y={40} width={110} height={50} label="Tjänst A" color="green" />
    <ServiceBox x={30} y={130} width={110} height={50} label="Tjänst B" color="green" />
    <ServiceBox x={30} y={220} width={110} height={50} label="Tjänst C" color="green" />

    {/* Independent pipelines */}
    <PipelineArrow x1={140} y1={65} x2={180} y2={65} color="green" />
    <PipelineArrow x1={140} y1={155} x2={180} y2={155} color="green" />
    <PipelineArrow x1={140} y1={245} x2={180} y2={245} color="green" />

    {/* Quality gates per pipeline */}
    <QualityGate x={200} y={65} color="green" />
    <QualityGate x={200} y={155} color="green" />
    <QualityGate x={200} y={245} color="green" />

    {/* Converge to deploy */}
    <PipelineArrow x1={210} y1={65} x2={300} y2={155} color="green" />
    <PipelineArrow x1={210} y1={155} x2={300} y2={155} color="green" />
    <PipelineArrow x1={210} y1={245} x2={300} y2={155} color="green" />

    {/* Blue-green deploy */}
    <ServiceBox x={300} y={110} width={100} height={40} label="Blue" color="green" />
    <ServiceBox x={300} y={170} width={100} height={40} label="Green" color="neutral" />
    <DiagramLabel
      x={350}
      y={100}
      text="Blue-green deploy"
      color="#86EFAC"
      size={9}
    />

    {/* Arrow to prod */}
    <PipelineArrow x1={400} y1={130} x2={460} y2={155} color="green" />

    {/* Production with monitoring */}
    <ServiceBox
      x={460}
      y={120}
      width={120}
      height={70}
      label="Produktion"
      sublabel="zero-downtime"
      color="green"
    />
    <StatusDot cx={520} cy={112} color="green" />

    {/* Metrics */}
    <MetricBadge x={520} y={220} label="4 deploys/dag" color="green" />
    <MetricBadge x={520} y={250} label="98% success" color="green" />
    <MetricBadge x={520} y={280} label="2d lead time" color="green" />
  </motion.svg>
);
