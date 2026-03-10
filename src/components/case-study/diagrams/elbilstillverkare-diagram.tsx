export function ElbilstillverkareDiagram() {
  // Layout constants
  const svgW = 520;
  const svgH = 460;
  const centerX = svgW / 2;
  const centerY = 200;

  // Box dimensions
  const boxW = 130;
  const boxH = 44;
  const extBoxW = 120;
  const extBoxH = 38;

  // Hub (Lambda) position
  const hubX = centerX - boxW / 2;
  const hubY = centerY - boxH / 2;

  // Internal node positions (relative to center)
  const nodes = {
    frontend: { x: centerX - boxW / 2, y: 24, label: "React Frontend", sub: "SPA" },
    apiGw: { x: centerX - boxW / 2, y: 96, label: "API Gateway", sub: "AWS API Gateway" },
    dynamo: { x: centerX - boxW / 2, y: 296, label: "DynamoDB", sub: "NoSQL Data Store" },
    terraform: { x: 16, y: 370, label: "Terraform", sub: "Infrastructure as Code" },
    monitoring: { x: svgW - 16 - 160, y: 370, label: "Datadog / Kibana", sub: "Observability" },
  };

  // External provider positions (spokes on the right and left)
  const providers = [
    { x: 16, y: 148, label: "Leverantör A", sub: "Finans-API" },
    { x: 16, y: 228, label: "Leverantör B", sub: "Finans-API" },
    { x: svgW - 16 - extBoxW, y: 188, label: "Leverantör C", sub: "Finans-API" },
  ];

  // Helper: draw arrow line
  function ConnectionLine({
    x1,
    y1,
    x2,
    y2,
    dashed = false,
    label,
  }: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    dashed?: boolean;
    label?: string;
  }) {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    return (
      <g>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#F59E0B"
          strokeWidth={1}
          strokeOpacity={0.5}
          strokeDasharray={dashed ? "4 3" : "none"}
        />
        {label && (
          <text
            x={midX}
            y={midY - 5}
            textAnchor="middle"
            fill="#F59E0B"
            fontSize="7"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            {label}
          </text>
        )}
      </g>
    );
  }

  // Internal box renderer
  function InternalBox({
    x,
    y,
    w,
    h,
    label,
    sub,
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    label: string;
    sub: string;
  }) {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          rx={4}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />
        <text
          x={x + w / 2}
          y={y + h / 2 - 5}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#EDEDED"
          fontSize="10"
          fontWeight="600"
        >
          {label}
        </text>
        <text
          x={x + w / 2}
          y={y + h / 2 + 8}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="8"
        >
          {sub}
        </text>
      </g>
    );
  }

  // External box renderer (visually distinct)
  function ExternalBox({
    x,
    y,
    label,
    sub,
  }: {
    x: number;
    y: number;
    label: string;
    sub: string;
  }) {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={extBoxW}
          height={extBoxH}
          rx={4}
          fill="rgba(245,158,11,0.04)"
          stroke="#F59E0B"
          strokeWidth={1}
          strokeDasharray="5 3"
        />
        <text
          x={x + extBoxW / 2}
          y={y + extBoxH / 2 - 5}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#F59E0B"
          fontSize="9"
          fontWeight="600"
        >
          {label}
        </text>
        <text
          x={x + extBoxW / 2}
          y={y + extBoxH / 2 + 7}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="7.5"
        >
          {sub}
        </text>
      </g>
    );
  }

  return (
    <div className="w-full">
      <svg
        role="img"
        aria-label="Arkitekturdiagram: Serverlös hub-and-spoke-arkitektur med AWS Lambda som centralt nav, kopplat till externa finansiella leverantörer via OAuth2/TLS"
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        `}</style>

        {/* === Section label: Frontend === */}
        <text
          x={centerX}
          y={14}
          textAnchor="middle"
          fill="#919191"
          fontSize="8"
          letterSpacing="0.08em"
        >
          KLIENT
        </text>

        {/* Frontend box */}
        <InternalBox
          x={nodes.frontend.x}
          y={nodes.frontend.y}
          w={boxW}
          h={boxH}
          label={nodes.frontend.label}
          sub={nodes.frontend.sub}
        />

        {/* Frontend → API Gateway */}
        <ConnectionLine
          x1={centerX}
          y1={nodes.frontend.y + boxH}
          x2={centerX}
          y2={nodes.apiGw.y}
        />

        {/* API Gateway box */}
        <InternalBox
          x={nodes.apiGw.x}
          y={nodes.apiGw.y}
          w={boxW}
          h={boxH}
          label={nodes.apiGw.label}
          sub={nodes.apiGw.sub}
        />

        {/* API Gateway → Lambda */}
        <ConnectionLine
          x1={centerX}
          y1={nodes.apiGw.y + boxH}
          x2={centerX}
          y2={hubY}
        />

        {/* === HUB: Lambda (center, emphasized) === */}
        <rect
          x={hubX - 8}
          y={hubY - 4}
          width={boxW + 16}
          height={boxH + 8}
          rx={6}
          fill="rgba(245,158,11,0.06)"
          stroke="#F59E0B"
          strokeWidth={1.5}
        />
        <text
          x={centerX}
          y={centerY - 6}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#EDEDED"
          fontSize="11"
          fontWeight="700"
        >
          AWS Lambda
        </text>
        <text
          x={centerX}
          y={centerY + 9}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#919191"
          fontSize="8"
        >
          .NET / TypeScript
        </text>

        {/* === Section label: External === */}
        <text
          x={76}
          y={140}
          textAnchor="middle"
          fill="#F59E0B"
          fontSize="7.5"
          letterSpacing="0.06em"
          fontWeight="600"
        >
          EXTERNA
        </text>
        <text
          x={svgW - 76}
          y={180}
          textAnchor="middle"
          fill="#F59E0B"
          fontSize="7.5"
          letterSpacing="0.06em"
          fontWeight="600"
        >
          EXTERNA
        </text>

        {/* External provider boxes (spokes) */}
        {providers.map((p) => (
          <ExternalBox key={p.label} x={p.x} y={p.y} label={p.label} sub={p.sub} />
        ))}

        {/* Spoke connections: Lambda ↔ Providers */}
        {/* Provider A (left top) */}
        <ConnectionLine
          x1={hubX}
          y1={centerY - 10}
          x2={16 + extBoxW}
          y2={providers[0].y + extBoxH / 2}
          dashed
          label="OAuth2 / TLS"
        />
        {/* Provider B (left bottom) */}
        <ConnectionLine
          x1={hubX}
          y1={centerY + 10}
          x2={16 + extBoxW}
          y2={providers[1].y + extBoxH / 2}
          dashed
          label="OAuth2 / TLS"
        />
        {/* Provider C (right) */}
        <ConnectionLine
          x1={hubX + boxW + 16}
          y1={centerY}
          x2={svgW - 16 - extBoxW}
          y2={providers[2].y + extBoxH / 2}
          dashed
          label="OAuth2 / TLS"
        />

        {/* Lambda → DynamoDB */}
        <ConnectionLine
          x1={centerX}
          y1={hubY + boxH + 4}
          x2={centerX}
          y2={nodes.dynamo.y}
        />

        {/* === Section label: Data === */}
        <text
          x={centerX}
          y={nodes.dynamo.y - 8}
          textAnchor="middle"
          fill="#919191"
          fontSize="8"
          letterSpacing="0.08em"
        >
          DATALAGER
        </text>

        {/* DynamoDB box */}
        <InternalBox
          x={nodes.dynamo.x}
          y={nodes.dynamo.y}
          w={boxW}
          h={boxH}
          label={nodes.dynamo.label}
          sub={nodes.dynamo.sub}
        />

        {/* === Bottom layer: Terraform + Monitoring === */}
        <text
          x={centerX}
          y={nodes.terraform.y - 10}
          textAnchor="middle"
          fill="#919191"
          fontSize="8"
          letterSpacing="0.08em"
        >
          PLATTFORM
        </text>

        {/* Terraform box */}
        <InternalBox
          x={nodes.terraform.x}
          y={nodes.terraform.y}
          w={160}
          h={boxH}
          label={nodes.terraform.label}
          sub={nodes.terraform.sub}
        />

        {/* Monitoring box */}
        <InternalBox
          x={nodes.monitoring.x}
          y={nodes.monitoring.y}
          w={160}
          h={boxH}
          label={nodes.monitoring.label}
          sub={nodes.monitoring.sub}
        />

        {/* Dashed lines from DynamoDB down to platform layer */}
        <ConnectionLine
          x1={centerX - 60}
          y1={nodes.dynamo.y + boxH}
          x2={nodes.terraform.x + 80}
          y2={nodes.terraform.y}
          dashed
        />
        <ConnectionLine
          x1={centerX + 60}
          y1={nodes.dynamo.y + boxH}
          x2={nodes.monitoring.x + 80}
          y2={nodes.monitoring.y}
          dashed
        />

        {/* Encompassing dashed border for internal system */}
        <rect
          x={nodes.frontend.x - 20}
          y={18}
          width={boxW + 40}
          height={nodes.dynamo.y + boxH - 12}
          rx={8}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={1}
          strokeDasharray="6 4"
        />
      </svg>
    </div>
  );
}
