"use client";

import { type Variants, motion } from "framer-motion";

// Animation variants for staggered children
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const MONO = "var(--font-geist-mono), ui-monospace, monospace";

interface ServiceBoxProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  label: string;
  sublabel?: string;
  color: "red" | "amber" | "green" | "neutral";
}

const BOX_COLORS = {
  red: { fill: "#1a0505", stroke: "#DC2626", text: "#FCA5A5" },
  amber: { fill: "#1a1005", stroke: "#F59E0B", text: "#FDE68A" },
  green: { fill: "#051a0a", stroke: "#22C55E", text: "#86EFAC" },
  neutral: { fill: "#141414", stroke: "#333333", text: "#919191" },
};

export function ServiceBox({
  x,
  y,
  width = 120,
  height = 56,
  label,
  sublabel,
  color,
}: ServiceBoxProps) {
  const c = BOX_COLORS[color];
  return (
    <motion.g variants={itemVariants}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth={1}
        opacity={0.9}
      />
      <text
        x={x + width / 2}
        y={sublabel ? y + height / 2 - 6 : y + height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={c.text}
        fontFamily={MONO}
        fontSize={11}
        fontWeight={600}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 10}
          textAnchor="middle"
          dominantBaseline="central"
          fill={c.text}
          fontFamily={MONO}
          fontSize={9}
          opacity={0.7}
        >
          {sublabel}
        </text>
      )}
    </motion.g>
  );
}

interface PipelineArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: "red" | "amber" | "green" | "neutral";
  dashed?: boolean;
}

const LINE_COLORS = {
  red: "#DC2626",
  amber: "#F59E0B",
  green: "#22C55E",
  neutral: "#333333",
};

export function PipelineArrow({
  x1,
  y1,
  x2,
  y2,
  color,
  dashed,
}: PipelineArrowProps) {
  const markerId = `arrow-${color}-${x1}-${y1}`;
  return (
    <motion.g variants={itemVariants}>
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 10 7"
          refX="9"
          refY="3.5"
          markerWidth="8"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M 0 0 L 10 3.5 L 0 7 z"
            fill={LINE_COLORS[color]}
            opacity={0.6}
          />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={LINE_COLORS[color]}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "6 4" : undefined}
        opacity={0.5}
        markerEnd={`url(#${markerId})`}
      />
    </motion.g>
  );
}

interface StatusDotProps {
  cx: number;
  cy: number;
  color: "red" | "amber" | "green";
}

const DOT_COLORS = {
  red: "#DC2626",
  amber: "#F59E0B",
  green: "#22C55E",
};

export function StatusDot({ cx, cy, color }: StatusDotProps) {
  return (
    <motion.g variants={itemVariants}>
      <circle cx={cx} cy={cy} r={6} fill={DOT_COLORS[color]} opacity={0.15} />
      <circle cx={cx} cy={cy} r={3} fill={DOT_COLORS[color]} opacity={0.9} />
    </motion.g>
  );
}

interface QualityGateProps {
  x: number;
  y: number;
  color: "amber" | "green";
}

export function QualityGate({ x, y, color }: QualityGateProps) {
  const c = color === "amber" ? "#F59E0B" : "#22C55E";
  return (
    <motion.g variants={itemVariants}>
      {/* Shield shape */}
      <path
        d={`M${x},${y - 10} L${x + 8},${y - 6} L${x + 8},${y + 2} L${x},${y + 8} L${x - 8},${y + 2} L${x - 8},${y - 6} Z`}
        fill="none"
        stroke={c}
        strokeWidth={1.5}
        opacity={0.7}
      />
      {/* Checkmark */}
      <path
        d={`M${x - 3},${y - 1} L${x},${y + 2} L${x + 4},${y - 3}`}
        fill="none"
        stroke={c}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.9}
      />
    </motion.g>
  );
}

interface MetricBadgeProps {
  x: number;
  y: number;
  label: string;
  color: "red" | "amber" | "green";
}

export function MetricBadge({ x, y, label, color }: MetricBadgeProps) {
  const bg =
    color === "red" ? "#2a0505" : color === "amber" ? "#2a1a05" : "#052a0a";
  const text =
    color === "red" ? "#FCA5A5" : color === "amber" ? "#FDE68A" : "#86EFAC";
  const stroke = LINE_COLORS[color];
  const width = label.length * 7 + 16;
  return (
    <motion.g variants={itemVariants}>
      <rect
        x={x - width / 2}
        y={y - 10}
        width={width}
        height={20}
        rx={10}
        fill={bg}
        stroke={stroke}
        strokeWidth={0.5}
        opacity={0.8}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={text}
        fontFamily={MONO}
        fontSize={10}
        fontWeight={600}
      >
        {label}
      </text>
    </motion.g>
  );
}

interface DiagramLabelProps {
  x: number;
  y: number;
  text: string;
  color?: string;
  size?: number;
  anchor?: "start" | "middle" | "end";
}

export function DiagramLabel({
  x,
  y,
  text,
  color = "#919191",
  size = 10,
  anchor = "middle",
}: DiagramLabelProps) {
  return (
    <motion.g variants={itemVariants}>
      <text
        x={x}
        y={y}
        textAnchor={anchor}
        dominantBaseline="central"
        fill={color}
        fontFamily={MONO}
        fontSize={size}
      >
        {text}
      </text>
    </motion.g>
  );
}
