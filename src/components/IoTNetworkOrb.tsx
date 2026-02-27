const CloudIoTVisual = () => {
  return (
    <div className="hidden md:flex items-center justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl">
      <svg
        viewBox="0 0 320 280"
        className="w-full h-auto animate-orb-float motion-reduce:animate-none"
        aria-hidden="true"
      >
        <defs>
          {/* Cloud glow */}
          <radialGradient id="cloud-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(185 70% 55%)" stopOpacity="0" />
          </radialGradient>
          {/* Packet gradient */}
          <radialGradient id="packet-dot">
            <stop offset="0%" stopColor="hsl(185 70% 60%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(185 70% 50%)" stopOpacity="0.4" />
          </radialGradient>
          {/* Cloud body fill */}
          <linearGradient id="cloud-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(185 70% 55%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(220 55% 15%)" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* Cloud breathing glow */}
        <ellipse cx="160" cy="75" rx="70" ry="40" fill="url(#cloud-glow)">
          <animate
            attributeName="rx"
            values="70;75;70"
            dur="5s"
            repeatCount="indefinite"
            className="motion-reduce:hidden"
          />
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="5s"
            repeatCount="indefinite"
            className="motion-reduce:hidden"
          />
        </ellipse>

        {/* Cloud shape */}
        <path
          d="M110 95 Q90 95 90 78 Q90 60 108 55 Q115 38 135 38 Q150 38 158 48 Q162 35 180 35 Q200 35 205 52 Q225 52 228 68 Q232 85 215 95 Z"
          fill="url(#cloud-fill)"
          stroke="hsl(185 70% 55%)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Edge gateway box */}
        <rect x="140" y="135" width="40" height="24" rx="4" fill="hsl(220 55% 15%)" fillOpacity="0.08" stroke="hsl(185 70% 55%)" strokeOpacity="0.25" strokeWidth="0.8" />
        <text x="160" y="150" textAnchor="middle" fontSize="6" fill="hsl(185 70% 55%)" fillOpacity="0.3" fontFamily="sans-serif">EDGE</text>
        {/* Chip pins on gateway */}
        <line x1="148" y1="135" x2="148" y2="131" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />
        <line x1="155" y1="135" x2="155" y2="131" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />
        <line x1="165" y1="135" x2="165" y2="131" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />
        <line x1="172" y1="135" x2="172" y2="131" stroke="hsl(185 70% 55%)" strokeOpacity="0.15" strokeWidth="0.6" />

        {/* Connection: Cloud to Edge */}
        <path
          d="M160 95 L160 135"
          fill="none"
          stroke="hsl(185 70% 55%)"
          strokeOpacity="0.18"
          strokeWidth="0.8"
          strokeDasharray="3 3"
        />
        {/* Packet cloud→edge */}
        <circle r="2" fill="url(#packet-dot)">
          <animateMotion dur="3s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-cloud-edge" />
          </animateMotion>
        </circle>
        <path id="path-cloud-edge" d="M160 95 L160 135" fill="none" stroke="none" />

        {/* Device nodes positions & paths to edge */}
        {/* Device 1 - Sensor icon (signal waves + dot) */}
        <g className="animate-node-pulse motion-reduce:animate-none" style={{ animationDelay: "0s" }}>
          <circle cx="70" cy="195" r="2" fill="hsl(185 70% 55%)" fillOpacity="0.6" />
          <path d="M62 189 Q66 185 70 189" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.45" strokeWidth="0.8" />
          <path d="M59 186 Q66 180 73 186" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.3" strokeWidth="0.7" />
        </g>
        <text x="70" y="210" textAnchor="middle" fontSize="5" fill="hsl(185 70% 55%)" fillOpacity="0.2" fontFamily="sans-serif">Sensor</text>
        <path id="path-d1" d="M70 195 Q100 175 140 147" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="4s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-d1" />
          </animateMotion>
        </circle>

        {/* Device 2 - PLC icon (chip/controller box) */}
        <g className="animate-node-pulse motion-reduce:animate-none" style={{ animationDelay: "0.6s" }}>
          <rect x="89" y="234" width="12" height="12" rx="1.5" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.8" />
          <line x1="92" y1="234" x2="92" y2="231" stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1="95" y1="234" x2="95" y2="231" stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1="98" y1="234" x2="98" y2="231" stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1="92" y1="246" x2="92" y2="249" stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1="95" y1="246" x2="95" y2="249" stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <line x1="98" y1="246" x2="98" y2="249" stroke="hsl(185 70% 55%)" strokeOpacity="0.35" strokeWidth="0.6" />
          <rect x="92" y="238" width="6" height="4" rx="0.5" fill="hsl(185 70% 55%)" fillOpacity="0.2" />
        </g>
        <text x="95" y="260" textAnchor="middle" fontSize="5" fill="hsl(185 70% 55%)" fillOpacity="0.2" fontFamily="sans-serif">PLC</text>
        <path id="path-d2" d="M95 240 Q120 200 145 159" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="4.5s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-d2" />
          </animateMotion>
        </circle>

        {/* Device 3 - Meter/gauge icon */}
        <g className="animate-node-pulse motion-reduce:animate-none" style={{ animationDelay: "1.2s" }}>
          <circle cx="160" cy="250" r="7" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.45" strokeWidth="0.8" />
          <line x1="160" y1="250" x2="163" y2="245" stroke="hsl(185 70% 55%)" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="160" cy="250" r="1" fill="hsl(185 70% 55%)" fillOpacity="0.5" />
        </g>
        <text x="160" y="268" textAnchor="middle" fontSize="5" fill="hsl(185 70% 55%)" fillOpacity="0.2" fontFamily="sans-serif">Meter</text>
        <path id="path-d3" d="M160 250 L160 159" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="3.8s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-d3" />
          </animateMotion>
        </circle>


        {/* Device 5 - Camera icon */}
        <g className="animate-node-pulse motion-reduce:animate-none" style={{ animationDelay: "2.0s" }}>
          <rect x="243" y="190" width="14" height="10" rx="1.5" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.5" strokeWidth="0.8" />
          <circle cx="250" cy="195" r="3" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.45" strokeWidth="0.7" />
          <circle cx="250" cy="195" r="1.2" fill="hsl(185 70% 55%)" fillOpacity="0.35" />
        </g>
        <text x="250" y="210" textAnchor="middle" fontSize="5" fill="hsl(185 70% 55%)" fillOpacity="0.2" fontFamily="sans-serif">Camera</text>
        <path id="path-d5" d="M250 195 Q220 175 180 147" fill="none" stroke="hsl(185 70% 55%)" strokeOpacity="0.12" strokeWidth="0.7" />
        <circle r="1.5" fill="url(#packet-dot)">
          <animateMotion dur="3.5s" repeatCount="indefinite" className="motion-reduce:hidden">
            <mpath href="#path-d5" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

export default CloudIoTVisual;
