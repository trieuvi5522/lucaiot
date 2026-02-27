const CloudIoTVisual = () => {
  const arcCx = 160, arcCy = 160, arcR = 95;
  const angles = [210, 250, 290, 330];
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
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="hsl(185 70% 55%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="packet-dot">
            <stop offset="0%" stopColor="hsl(185 70% 65%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(185 70% 55%)" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="packet-dot-up">
            <stop offset="0%" stopColor="hsl(185 70% 75%)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="hsl(185 70% 65%)" stopOpacity="0.4" />
          </radialGradient>
          <linearGradient id="cloud-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.18" />
            <stop offset="50%" stopColor="hsl(200 60% 35%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(220 55% 15%)" stopOpacity="0.05" />
          </linearGradient>
          {/* Pipeline glow filter */}
          <filter id="pipe-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
          {/* Edge box glow */}
          <filter id="edge-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Cloud breathing glow */}
        <ellipse cx="160" cy="65" rx="72" ry="42" fill="url(#cloud-glow)">
          <animate attributeName="rx" values="72;78;72" dur="5s" repeatCount="indefinite" className="motion-reduce:hidden" />
          <animate attributeName="opacity" values="1;0.7;1" dur="5s" repeatCount="indefinite" className="motion-reduce:hidden" />
        </ellipse>

        {/* Cloud shape */}
        <path
          d="M110 85 Q90 85 90 68 Q90 50 108 45 Q115 28 135 28 Q150 28 158 38 Q162 25 180 25 Q200 25 205 42 Q225 42 228 58 Q232 75 215 85 Z"
          fill="url(#cloud-fill)"
          stroke="hsl(185 70% 55%)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />

        {/* === TWO SEPARATE PIPELINES === */}
        {/* Pipeline glow layers (behind) */}
        <path d="M153 85 L153 130" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="4" filter="url(#pipe-glow)" />
        <path d="M167 85 L167 130" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.1" strokeWidth="4" filter="url(#pipe-glow)" />

        {/* Downlink pipe (left, x=153): Cloud -> Edge */}
        <path d="M153 85 L153 130" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3" />
        {/* Downlink packet */}
        <circle r="2.5" fill="url(#packet-dot)">
          <animateMotion dur="3s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#pipe-down" />
          </animateMotion>
        </circle>
        <path id="pipe-down" d="M153 85 L153 130" fill="none" stroke="none" />

        {/* Uplink pipe (right, x=167): Edge -> Cloud */}
        <path d="M167 85 L167 130" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="2 4" />
        {/* Uplink packet */}
        <circle r="2.2" fill="url(#packet-dot-up)">
          <animateMotion dur="3.6s" begin="1.5s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#pipe-up" />
          </animateMotion>
        </circle>
        <path id="pipe-up" d="M167 130 L167 85" fill="none" stroke="none" />

        {/* Edge gateway box — glow behind */}
        <rect x="140" y="130" width="40" height="24" rx="4" fill="hsl(185 70% 55%)" fillOpacity="0.06" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="6" filter="url(#edge-glow)" />
        {/* Edge gateway box */}
        <rect x="140" y="130" width="40" height="24" rx="4" fill="hsl(220 55% 15%)" fillOpacity="0.15" stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="1.2" />
        <text x="160" y="145" textAnchor="middle" fontSize="6.5" fill="hsl(185 70% 55%)" fillOpacity="0.55" fontFamily="sans-serif" fontWeight="500">EDGE</text>
        {/* Chip pins */}
        <line x1="148" y1="130" x2="148" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.3" strokeWidth="0.8" />
        <line x1="155" y1="130" x2="155" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.3" strokeWidth="0.8" />
        <line x1="165" y1="130" x2="165" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.3" strokeWidth="0.8" />
        <line x1="172" y1="130" x2="172" y2="126" stroke="hsl(185 70% 55%)" strokeOpacity="0.3" strokeWidth="0.8" />

        {/* === CONNECTION LINES: Edge -> Nodes === */}
        {/* Sensor (node 0) */}
        <path id="path-sensor" d={`M150 154 Q${nodes[0].x + 20} ${nodes[0].y - 20} ${nodes[0].x} ${nodes[0].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.22" strokeWidth="1" />
        <circle r="2" fill="url(#packet-dot)">
          <animateMotion dur="4s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-sensor" />
          </animateMotion>
        </circle>

        {/* PLC (node 1) */}
        <path id="path-plc" d={`M155 154 Q${nodes[1].x + 10} ${nodes[1].y - 15} ${nodes[1].x} ${nodes[1].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.22" strokeWidth="1" />
        <circle r="2" fill="url(#packet-dot)">
          <animateMotion dur="4.5s" begin="0.8s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-plc" />
          </animateMotion>
        </circle>

        {/* Meter (node 2) */}
        <path id="path-meter" d={`M165 154 Q${nodes[2].x - 10} ${nodes[2].y - 15} ${nodes[2].x} ${nodes[2].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.22" strokeWidth="1" />
        <circle r="2" fill="url(#packet-dot)">
          <animateMotion dur="3.8s" begin="0.4s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-meter" />
          </animateMotion>
        </circle>

        {/* Camera (node 3) */}
        <path id="path-camera" d={`M170 154 Q${nodes[3].x - 20} ${nodes[3].y - 20} ${nodes[3].x} ${nodes[3].y}`} fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.22" strokeWidth="1" />
        <circle r="2" fill="url(#packet-dot)">
          <animateMotion dur="3.5s" begin="1.2s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-camera" />
          </animateMotion>
        </circle>

        {/* === DEVICE NODE ICONS (stationary) === */}

        {/* Node 0: Sensor */}
        <g>
          <rect x={nodes[0].x - 6} y={nodes[0].y - 5} width="12" height="10" rx="3" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.7" strokeWidth="1" />
          <circle cx={nodes[0].x - 2} cy={nodes[0].y} r="1.4" fill="hsl(185 70% 55%)" fillOpacity="0.65" />
          <line x1={nodes[0].x + 3} y1={nodes[0].y - 2} x2={nodes[0].x + 3} y2={nodes[0].y + 2} stroke="hsl(185 70% 55%)" strokeOpacity="0.55" strokeWidth="0.8" />
          <line x1={nodes[0].x} y1={nodes[0].y - 5} x2={nodes[0].x} y2={nodes[0].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.8" strokeLinecap="round" />
        </g>
        <text x={nodes[0].x} y={nodes[0].y + 15} textAnchor="middle" fontSize="7" fill="hsl(185 70% 55%)" fillOpacity="0.45" fontFamily="sans-serif">Sensor</text>

        {/* Node 1: PLC */}
        <g>
          <rect x={nodes[1].x - 6} y={nodes[1].y - 6} width="12" height="12" rx="1.5" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.7" strokeWidth="1" />
          <line x1={nodes[1].x - 3} y1={nodes[1].y - 6} x2={nodes[1].x - 3} y2={nodes[1].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.7" />
          <line x1={nodes[1].x} y1={nodes[1].y - 6} x2={nodes[1].x} y2={nodes[1].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.7" />
          <line x1={nodes[1].x + 3} y1={nodes[1].y - 6} x2={nodes[1].x + 3} y2={nodes[1].y - 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.7" />
          <line x1={nodes[1].x - 3} y1={nodes[1].y + 6} x2={nodes[1].x - 3} y2={nodes[1].y + 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.7" />
          <line x1={nodes[1].x} y1={nodes[1].y + 6} x2={nodes[1].x} y2={nodes[1].y + 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.7" />
          <line x1={nodes[1].x + 3} y1={nodes[1].y + 6} x2={nodes[1].x + 3} y2={nodes[1].y + 9} stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.7" />
          <rect x={nodes[1].x - 3} y={nodes[1].y - 2} width="6" height="4" rx="0.5" fill="hsl(185 70% 55%)" fillOpacity="0.3" />
        </g>
        <text x={nodes[1].x} y={nodes[1].y + 18} textAnchor="middle" fontSize="7" fill="hsl(185 70% 55%)" fillOpacity="0.45" fontFamily="sans-serif">PLC</text>

        {/* Node 2: Meter */}
        <g>
          <circle cx={nodes[2].x} cy={nodes[2].y} r="7" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.65" strokeWidth="1" />
          <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[2].x + 3} y2={nodes[2].y - 5} stroke="hsl(185 70% 55%)" strokeOpacity="0.75" strokeWidth="1" strokeLinecap="round" />
          <circle cx={nodes[2].x} cy={nodes[2].y} r="1.2" fill="hsl(185 70% 55%)" fillOpacity="0.6" />
        </g>
        <text x={nodes[2].x} y={nodes[2].y + 16} textAnchor="middle" fontSize="7" fill="hsl(185 70% 55%)" fillOpacity="0.45" fontFamily="sans-serif">Meter</text>

        {/* Node 3: Camera */}
        <g>
          <rect x={nodes[3].x - 7} y={nodes[3].y - 5} width="14" height="10" rx="1.5" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.7" strokeWidth="1" />
          <circle cx={nodes[3].x} cy={nodes[3].y} r="3" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.6" strokeWidth="0.8" />
          <circle cx={nodes[3].x} cy={nodes[3].y} r="1.4" fill="hsl(185 70% 55%)" fillOpacity="0.5" />
        </g>
        <text x={nodes[3].x} y={nodes[3].y + 14} textAnchor="middle" fontSize="7" fill="hsl(185 70% 55%)" fillOpacity="0.45" fontFamily="sans-serif">Camera</text>
      </svg>
    </div>
  );
};

export default CloudIoTVisual;
