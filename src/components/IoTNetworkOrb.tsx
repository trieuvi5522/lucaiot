const IoTNetworkOrb = () => {
  // Node positions (cx, cy) within a 300x300 viewBox, centered at 150,150
  const nodes = [
    { cx: 150, cy: 60 },
    { cx: 210, cy: 80 },
    { cx: 245, cy: 130 },
    { cx: 240, cy: 190 },
    { cx: 205, cy: 235 },
    { cx: 150, cy: 250 },
    { cx: 95, cy: 235 },
    { cx: 60, cy: 190 },
    { cx: 55, cy: 130 },
    { cx: 90, cy: 80 },
    // Inner ring
    { cx: 150, cy: 110 },
    { cx: 185, cy: 135 },
    { cx: 180, cy: 180 },
    { cx: 150, cy: 200 },
    { cx: 120, cy: 180 },
    { cx: 115, cy: 135 },
  ];

  // Connections between node indices
  const lines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0],
    [0, 10], [1, 11], [3, 12], [5, 13], [7, 14], [9, 15],
    [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 10],
    [10, 13], [11, 14], [12, 15],
  ];

  return (
    <div className="hidden md:flex items-center justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-auto animate-orb-float motion-reduce:animate-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="orb-grad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.18" />
            <stop offset="60%" stopColor="hsl(185 70% 42%)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="hsl(220 55% 15%)" stopOpacity="0.04" />
          </radialGradient>
          <radialGradient id="orb-stroke-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(185 70% 42%)" stopOpacity="0.12" />
          </radialGradient>
          <linearGradient id="line-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 70% 50%)" stopOpacity="0">
              <animate attributeName="stopOpacity" values="0;0.4;0" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="hsl(185 70% 55%)" stopOpacity="0.3">
              <animate attributeName="stopOpacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(185 70% 50%)" stopOpacity="0">
              <animate attributeName="stopOpacity" values="0;0.4;0" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Main orb */}
        <circle cx="150" cy="150" r="120" fill="url(#orb-grad)" stroke="url(#orb-stroke-grad)" strokeWidth="1" />
        <circle cx="150" cy="150" r="80" fill="none" stroke="hsl(185 70% 50%)" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="4 6" />

        {/* Connecting lines */}
        {lines.map(([a, b], i) => (
          <line
            key={`l${i}`}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="url(#line-shimmer)"
            strokeWidth="0.7"
            className="motion-reduce:[&_animate]:hidden"
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.cx} cy={n.cy}
            r={i < 10 ? 3.5 : 2.5}
            fill="hsl(185 70% 55%)"
            fillOpacity="0.7"
            className="animate-node-pulse motion-reduce:animate-none"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}

        {/* Micro-icons at low opacity */}
        {/* Chip icon */}
        <g transform="translate(140, 140)" opacity="0.12">
          <rect x="0" y="0" width="20" height="20" rx="3" fill="none" stroke="hsl(185 70% 60%)" strokeWidth="1" />
          <line x1="5" y1="0" x2="5" y2="-4" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
          <line x1="10" y1="0" x2="10" y2="-4" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
          <line x1="15" y1="0" x2="15" y2="-4" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
          <line x1="5" y1="20" x2="5" y2="24" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
          <line x1="10" y1="20" x2="10" y2="24" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
          <line x1="15" y1="20" x2="15" y2="24" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
        </g>
        {/* Wifi icon */}
        <g transform="translate(85, 120)" opacity="0.09">
          <path d="M0 6 Q8 -4 16 6" fill="none" stroke="hsl(185 70% 60%)" strokeWidth="1" />
          <path d="M3 4 Q8 -1 13 4" fill="none" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
          <circle cx="8" cy="7" r="1.2" fill="hsl(185 70% 60%)" />
        </g>
        {/* Cloud icon */}
        <g transform="translate(195, 160)" opacity="0.09">
          <path d="M4 12 Q0 12 0 9 Q0 6 3 5 Q4 2 8 2 Q12 2 13 5 Q16 5 16 8 Q16 12 12 12 Z" fill="none" stroke="hsl(185 70% 60%)" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
};

export default IoTNetworkOrb;
