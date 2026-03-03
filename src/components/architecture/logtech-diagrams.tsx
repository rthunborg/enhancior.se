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

export const LogTechBefore = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Före: LogTech monolitisk build-pipeline med 60% failure rate"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <DiagramLabel
      x={300}
      y={20}
      text="LogTech Pipeline"
      color="#FCA5A5"
      size={12}
    />

    {/* Monolithic build */}
    <ServiceBox
      x={30}
      y={70}
      width={160}
      height={80}
      label="Monolitisk build"
      sublabel="allt i ett steg"
      color="red"
    />
    <StatusDot cx={60} cy={62} color="red" />

    {/* Single fragile pipeline */}
    <PipelineArrow x1={190} y1={110} x2={240} y2={110} color="red" dashed />

    {/* Manual test */}
    <ServiceBox
      x={240}
      y={82}
      width={100}
      height={56}
      label="Manuell test"
      color="red"
    />
    <StatusDot cx={290} cy={74} color="red" />

    <PipelineArrow x1={340} y1={110} x2={390} y2={110} color="red" dashed />

    {/* Manual deploy */}
    <ServiceBox
      x={390}
      y={82}
      width={110}
      height={56}
      label="Manuell deploy"
      sublabel="1 senior bevakar"
      color="red"
    />
    <StatusDot cx={445} cy={74} color="red" />

    <PipelineArrow x1={500} y1={110} x2={540} y2={110} color="red" dashed />

    {/* Production */}
    <ServiceBox x={540} y={90} width={50} height={40} label="Prod" color="red" />

    {/* Failure indicators */}
    <MetricBadge x={110} y={180} label="60% fail rate" color="red" />
    <MetricBadge x={290} y={180} label="14d lead time" color="red" />
    <MetricBadge x={445} y={180} label="4 incidenter/mån" color="red" />

    {/* Cascade failure lines */}
    <PipelineArrow x1={110} y1={195} x2={290} y2={195} color="red" dashed />
    <PipelineArrow x1={290} y1={195} x2={445} y2={195} color="red" dashed />
    <DiagramLabel
      x={280}
      y={240}
      text="Kaskadfel: en bugg sprids genom hela kedjan"
      color="#FCA5A5"
      size={9}
    />

    {/* Team impact */}
    <DiagramLabel
      x={300}
      y={280}
      text="Teamet undviker att deploya"
      color="#919191"
      size={9}
    />
  </motion.svg>
);

export const LogTechIntervention = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Åtgärd: Pipeline bryts upp i tre isolerade steg med quality gates"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <DiagramLabel
      x={300}
      y={20}
      text="Pipeline-omstrukturering"
      color="#FDE68A"
      size={12}
    />

    {/* Stage 1: Build */}
    <ServiceBox
      x={30}
      y={70}
      width={120}
      height={56}
      label="Steg 1: Build"
      sublabel="isolerat"
      color="amber"
    />
    <StatusDot cx={90} cy={62} color="amber" />

    {/* Quality gate 1 */}
    <PipelineArrow x1={150} y1={98} x2={190} y2={98} color="amber" />
    <QualityGate x={210} y={98} color="amber" />

    {/* Stage 2: Test */}
    <PipelineArrow x1={220} y1={98} x2={250} y2={98} color="amber" />
    <ServiceBox
      x={250}
      y={70}
      width={120}
      height={56}
      label="Steg 2: Test"
      sublabel="automatiserat"
      color="amber"
    />
    <StatusDot cx={310} cy={62} color="amber" />

    {/* Quality gate 2 */}
    <PipelineArrow x1={370} y1={98} x2={410} y2={98} color="amber" />
    <QualityGate x={430} y={98} color="amber" />

    {/* Stage 3: Deploy */}
    <PipelineArrow x1={440} y1={98} x2={470} y2={98} color="amber" />
    <ServiceBox
      x={470}
      y={70}
      width={110}
      height={56}
      label="Steg 3: Deploy"
      sublabel="blue-green"
      color="amber"
    />

    {/* Contract boundaries */}
    <DiagramLabel
      x={210}
      y={145}
      text="Kontraktsgräns"
      color="#FDE68A"
      size={9}
    />
    <DiagramLabel
      x={430}
      y={145}
      text="Kontraktsgräns"
      color="#FDE68A"
      size={9}
    />

    {/* Improvements being applied */}
    <ServiceBox
      x={100}
      y={190}
      width={160}
      height={40}
      label="Testtäckning: ↑"
      color="amber"
    />
    <ServiceBox
      x={320}
      y={190}
      width={180}
      height={40}
      label="Rollback: automatiserad"
      color="amber"
    />

    <MetricBadge x={300} y={270} label="30 dagars insats" color="amber" />
  </motion.svg>
);

export const LogTechAfter = (
  <motion.svg
    viewBox="0 0 600 320"
    width="100%"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Efter: Tre isolerade pipeline-steg med 98% success rate och blue-green deployment"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <DiagramLabel
      x={300}
      y={20}
      text="LogTech Pipeline"
      color="#86EFAC"
      size={12}
    />

    {/* Stage 1 */}
    <ServiceBox
      x={30}
      y={70}
      width={120}
      height={56}
      label="Build"
      sublabel="oberoende"
      color="green"
    />
    <StatusDot cx={90} cy={62} color="green" />

    {/* QG 1 */}
    <PipelineArrow x1={150} y1={98} x2={180} y2={98} color="green" />
    <QualityGate x={198} y={98} color="green" />

    {/* Stage 2 */}
    <PipelineArrow x1={210} y1={98} x2={230} y2={98} color="green" />
    <ServiceBox
      x={230}
      y={70}
      width={120}
      height={56}
      label="Test"
      sublabel="automatiskt"
      color="green"
    />
    <StatusDot cx={290} cy={62} color="green" />

    {/* QG 2 */}
    <PipelineArrow x1={350} y1={98} x2={380} y2={98} color="green" />
    <QualityGate x={398} y={98} color="green" />

    {/* Blue-green deploy */}
    <PipelineArrow x1={410} y1={98} x2={440} y2={80} color="green" />
    <PipelineArrow x1={410} y1={98} x2={440} y2={116} color="neutral" />
    <ServiceBox x={440} y={55} width={70} height={40} label="Blue" color="green" />
    <ServiceBox
      x={440}
      y={105}
      width={70}
      height={40}
      label="Green"
      color="neutral"
    />

    {/* Arrow to production */}
    <PipelineArrow x1={510} y1={75} x2={540} y2={75} color="green" />
    <ServiceBox x={540} y={55} width={50} height={40} label="Prod" color="green" />
    <StatusDot cx={565} cy={48} color="green" />

    {/* Rollback indicator */}
    <DiagramLabel
      x={475}
      y={160}
      text="Omedelbar rollback"
      color="#86EFAC"
      size={9}
    />
    <PipelineArrow x1={475} y1={148} x2={475} y2={132} color="green" />

    {/* Success metrics */}
    <MetricBadge x={100} y={190} label="4 deploys/dag" color="green" />
    <MetricBadge x={270} y={190} label="98% build success" color="green" />
    <MetricBadge x={440} y={190} label="2d lead time" color="green" />
    <MetricBadge x={270} y={230} label="−73% incidenter" color="green" />

    <DiagramLabel
      x={300}
      y={280}
      text="Teamet deployar med förtroende"
      color="#919191"
      size={9}
    />
  </motion.svg>
);
