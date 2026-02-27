const CloudIoTVisual = () => {
  // Semicircle arc: 4 nodes evenly spaced below Edge (centered at 160, 147)
  // Arc center: (160, 155), radius ~90, from 210° to 330° (bottom semicircle)
  const arcCx = 160, arcCy = 160, arcR = 95;
  const angles = [210, 250, 290, 330]; // even spacing
  const nodes = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: arcCx + arcR * Math.cos(rad), y: arcCy - arcR * Math.sin(rad) };
  });

  return (
    <div className="hidden md:flex items-center justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl">
      <svg
        viewBox="0 0 320 280"
        className="w-full h-auto animate-orb-float motion-reduce:animate-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="cloud-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(185 70% 55%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="packet-dot">
            <stop offset="0%" stopColor="hsl(185 70% 60%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(185 70% 50%)" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="packet-dot-up">
            <stop offset="0%" stopColor="hsl(185 70% 70%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(185 70% 60%)" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="cloud-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(220 55% 15%)" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* Cloud breathing glow */}
        <ellipse cx="160" cy="65" rx="70" ry="40" fill="url(#cloud-glow)">
          <animate attributeName="rx" values="70;75;70" dur="5s" repeatCount="indefinite" className="motion-reduce:hidden" />
          <animate attributeName="opacity" values="1;0.7;1" dur="5s" repeatCount="indefinite" className="motion-reduce:hidden" />
        </ellipse>

        {/* Cloud shape */}
        <path
          d="M110 85 Q90 85 90 68 Q90 50 108 45 Q115 28 135 28 Q150 28 158 38 Q162 25 180 25 Q200 25 205 42 Q225 42 228 58 Q232 75 215 85 Z"
          fill="url(#cloud-fill)"
          stroke="hsl(185 70% 55%)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* === TWO SEPARATE PIPELINES === */}
        {/* Downlink pipe (left, x=153): Cloud -> Edge */}
        <path d="M153 85 L153 130" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="3 3" />
        {/* Downlink packet */}
        <circle r="2" fill="url(#packet-dot)">
          <animateMotion dur="3s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#pipe-down" />
          </animateMotion>
        </circle>
        <path id="pipe-down" d="M153 85 L153 130" fill="none" stroke="none" />

        {/* Uplink pipe (right, x=167): Edge -> Cloud */}
        <path d="M167 85 L167 130" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.13" strokeWidth="0.8" strokeDasharray="2 4" />
        {/* Uplink packet */}
        <circle r="1.8" fill="url(#packet-dot-up)">
          <animateMotion dur="3.6s" begin="1.5s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#pipe-up" />
          </animateMotion>
        </circle>
        <path id="pipe-up" d="M167 130 L167 85" fill="none" stroke="none" />

        {/* Edge gateway box */}
        <rect x="140" y="130" width="40" height="24" rx="4" fill="hsl(220 55% 15%)" fillOpacity="0.08" stroke="hsl(185 70% 55%)" strokeOpacity="0.25" strokeWidth="0.8" />
        <text x="160" y="145" textAnchor="middle" fontSize="6" fill="hsl(185 70% 55%)" fillOpacity="0.3" fontFamily="sans-serif">EDGE</text>
        {/* Chip pins */}
        <line x1="148" y1="130" x2="148" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />
        <line x1="155" y1="130" x2="155" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />
        <line x1="165" y1="130" x2="165" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />
        <line x1="172" y1="130" x2="172" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />

        {/* === CONNECTION LINES: Edge -> Nodes === */}
        {/* Sensor (node 0) */}
        <path id="path-sensor" d={`M150 154 Q${nodes[0].x + 20} ${nodes[0].y - 20} ${nodes[0].x} ${nodes[0].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="4s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-sensor" />
          </animateMotion>
        </circle>

        {/* PLC (node 1) */}
        <path id="path-plc" d={`M155 154 Q${nodes[1].x + 10} ${nodes[1].y - 15} ${nodes[1].x} ${nodes[1].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="4.5s" begin="0.8s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-plc" />
          </animateMotion>
        </circle>

        {/* Meter (node 2) */}
        <path id="path-meter" d={`M165 154 Q${nodes[2].x - 10} ${nodes[2].y - 15} ${nodes[2].x} ${nodes[2].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="3.8s" begin="0.4s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-meter" />
          </animateMotion>
        </circle>

        {/* Camera (node 3) */}
        <path id="path-camera" d={`M170 154 Q${nodes[3].x - 20} ${nodes[3].y - 20} ${nodes[3].x} ${nodes[3].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="3.5s" begin="1.2s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-camera" />
          </animateMotion>
        </circle>

        {/* === DEVICE NODE ICONS (stationary) === */}

        {/* Node 0: Sensor — capsule body + LED dot + probe tip */}
        <g>
          <rect x={nodes[0].x - 6} y={nodes[0].y - 5} width="12" height="10" rx="3" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.8" />
          <circle cx={nodes[0].x - 2} cy={nodes[0].y} r="1.2" fill="hsl(185 70% 55%)" fillOpacity="0.5" />
          <line x1={nodes[0].x + 3} y1={nodes[0].y - 2} x2={nodes[0].x + 3} y2={nodes[0].y + 2} stroke="hsl(185 70% 55%)" strokeOpacity="0.4" strokeWidth="0.7" />
          <line x1={nodes[0].x} y1={nodes[0].y - 5} x2={nodes[0].x} y2={nodes[0].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.7" strokeLinecap="round" />
        </g>
        <text x={nodes[0].x} y={nodes[0].y + 14} textAnchor="middle" fontSize="5.5" fill="hsl(185 70% 55%)" fillOpacity="0.25" fontFamily="sans-serif">Sensor</text>

        {/* Node 1: PLC — chip box with pins */}
        <g>
          <rect x={nodes[1].x - 6} y={nodes[1].y - 6} width="12" height="12" rx="1.5" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.8" />
          <line x1={nodes[1].x - 3} y1={nodes[1].y - 6} x2={nodes[1].x - 3} y2={nodes[1].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1={nodes[1].x} y1={nodes[1].y - 6} x2={nodes[1].x} y2={nodes[1].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1={nodes[1].x + 3} y1={nodes[1].y - 6} x2={nodes[1].x + 3} y2={nodes[1].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1={nodes[1].x - 3} y1={nodes[1].y + 6} x2={nodes[1].x - 3} y2={nodes[1].y + 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1={nodes[1].x} y1={nodes[1].y + 6} x2={nodes[1].x} y2={nodes[1].y + 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1={nodes[1].x + 3} y1={nodes[1].y + 6} x2={nodes[1].x + 3} y2={nodes[1].y + 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <rect x={nodes[1].x - 3} y={nodes[1].y - 2} width="6" height="4" rx="0.5" fill="hsl(185 70% 55%)" fillOpacity="0.2" />
        </g>
        <text x={nodes[1].x} y={nodes[1].y + 18} textAnchor="middle" fontSize="5.5" fill="hsl(185 70% 55%)" fillOpacity="0.25" fontFamily="sans-serif">PLC</text>

        {/* Node 2: Meter — gauge circle with needle */}
        <g>
          <circle cx={nodes[2].x} cy={nodes[2].y} r="7" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.45" strokeWidth="0.8" />
          <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[2].x + 3} y2={nodes[2].y - 5} stroke="hsl(185 70% 55%)" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx={nodes[2].x} cy={nodes[2].y} r="1" fill="hsl(185 70% 55%)" fillOpacity="0.5" />
        </g>
        <text x={nodes[2].x} y={nodes[2].y + 16} textAnchor="middle" fontSize="5.5" fill="hsl(185 70% 55%)" fillOpacity="0.25" fontFamily="sans-serif">Meter</text>

        {/* Node 3: Camera — body + lens */}
        <g>
          <rect x={nodes[3].x - 7} y={nodes[3].y - 5} width="14" height="10" rx="1.5" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.8" />
          <circle cx={nodes[3].x} cy={nodes[3].y} r="3" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.45" strokeWidth="0.7" />
          <circle cx={nodes[3].x} cy={nodes[3].y} r="1.2" fill="hsl(185 70% 55%)" fillOpacity="0.35" />
        </g>
        <text x={nodes[3].x} y={nodes[3].y + 14} textAnchor="middle" fontSize="5.5" fill="hsl(185 70% 55%)" fillOpacity="0.25" fontFamily="sans-serif">Camera</text>
      </svg>
    </div>
  );
};

export default CloudIoTVisual;
