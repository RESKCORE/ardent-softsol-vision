/** Inline SVG illustrations for each service page hero */

export function MobileIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background blobs */}
      <ellipse cx="210" cy="170" rx="180" ry="150" fill="currentColor" fillOpacity="0.04" />
      <ellipse cx="320" cy="80" rx="60" ry="60" fill="currentColor" fillOpacity="0.06" />

      {/* Left phone */}
      <rect x="60" y="60" width="110" height="200" rx="18" fill="white" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
      <rect x="60" y="60" width="110" height="200" rx="18" fill="url(#phoneGrad1)" />
      <rect x="75" y="80" width="80" height="12" rx="6" fill="currentColor" fillOpacity="0.08" />
      <rect x="75" y="100" width="55" height="8" rx="4" fill="currentColor" fillOpacity="0.06" />
      {/* App icons grid */}
      <rect x="75" y="120" width="22" height="22" rx="6" fill="#22c55e" fillOpacity="0.8" />
      <rect x="103" y="120" width="22" height="22" rx="6" fill="#3b82f6" fillOpacity="0.7" />
      <rect x="131" y="120" width="22" height="22" rx="6" fill="#f59e0b" fillOpacity="0.7" />
      <rect x="75" y="148" width="22" height="22" rx="6" fill="#8b5cf6" fillOpacity="0.7" />
      <rect x="103" y="148" width="22" height="22" rx="6" fill="#ec4899" fillOpacity="0.7" />
      <rect x="131" y="148" width="22" height="22" rx="6" fill="#14b8a6" fillOpacity="0.7" />
      {/* Bottom bar */}
      <rect x="75" y="220" width="80" height="8" rx="4" fill="currentColor" fillOpacity="0.06" />
      <rect x="75" y="234" width="55" height="6" rx="3" fill="currentColor" fillOpacity="0.04" />
      {/* Home indicator */}
      <rect x="100" y="248" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />

      {/* Right phone (foreground) */}
      <rect x="200" y="40" width="120" height="220" rx="20" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5" />
      <rect x="200" y="40" width="120" height="220" rx="20" fill="url(#phoneGrad2)" />
      {/* Status bar */}
      <rect x="215" y="58" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />
      <rect x="285" y="58" width="20" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />
      {/* Chart area */}
      <rect x="215" y="74" width="90" height="60" rx="10" fill="#22c55e" fillOpacity="0.08" />
      <polyline points="220,124 235,108 250,115 265,95 280,100 295,85 300,90" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="295" cy="85" r="4" fill="#22c55e" />
      {/* Stats row */}
      <rect x="215" y="144" width="40" height="30" rx="8" fill="currentColor" fillOpacity="0.05" />
      <rect x="261" y="144" width="40" height="30" rx="8" fill="#22c55e" fillOpacity="0.1" />
      <rect x="215" y="182" width="90" height="8" rx="4" fill="currentColor" fillOpacity="0.06" />
      <rect x="215" y="196" width="65" height="6" rx="3" fill="currentColor" fillOpacity="0.04" />
      {/* CTA button */}
      <rect x="215" y="212" width="90" height="28" rx="14" fill="#22c55e" fillOpacity="0.85" />
      <rect x="235" y="222" width="50" height="8" rx="4" fill="white" fillOpacity="0.7" />
      {/* Home indicator */}
      <rect x="245" y="248" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />

      {/* Floating badge */}
      <rect x="290" y="20" width="90" height="36" rx="12" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="308" cy="38" r="8" fill="#22c55e" fillOpacity="0.15" />
      <rect x="322" y="30" width="48" height="7" rx="3.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="322" y="41" width="32" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.4" />

      {/* Floating notification */}
      <rect x="30" y="200" width="100" height="44" rx="12" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="50" cy="222" r="10" fill="#22c55e" fillOpacity="0.12" />
      <rect x="66" y="214" width="52" height="7" rx="3.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="66" y="225" width="36" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />

      {/* Dots decoration */}
      <circle cx="360" cy="160" r="3" fill="currentColor" fillOpacity="0.12" />
      <circle cx="375" cy="175" r="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="355" cy="180" r="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="40" cy="100" r="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="28" cy="115" r="2" fill="currentColor" fillOpacity="0.07" />

      <defs>
        <linearGradient id="phoneGrad1" x1="60" y1="60" x2="170" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0fdf4" />
          <stop offset="1" stopColor="#dcfce7" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="phoneGrad2" x1="200" y1="40" x2="320" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0fdf4" />
          <stop offset="1" stopColor="#dcfce7" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FullStackIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <ellipse cx="210" cy="170" rx="185" ry="145" fill="currentColor" fillOpacity="0.04" />

      {/* Browser window */}
      <rect x="50" y="50" width="280" height="200" rx="14" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5" />
      <rect x="50" y="50" width="280" height="200" rx="14" fill="url(#browserGrad)" />
      {/* Browser chrome */}
      <rect x="50" y="50" width="280" height="36" rx="14" fill="currentColor" fillOpacity="0.04" />
      <rect x="50" y="72" width="280" height="1" fill="currentColor" fillOpacity="0.08" />
      {/* Traffic lights */}
      <circle cx="72" cy="68" r="5" fill="#ef4444" fillOpacity="0.6" />
      <circle cx="88" cy="68" r="5" fill="#f59e0b" fillOpacity="0.6" />
      <circle cx="104" cy="68" r="5" fill="#22c55e" fillOpacity="0.7" />
      {/* URL bar */}
      <rect x="120" y="60" width="160" height="16" rx="8" fill="currentColor" fillOpacity="0.06" />
      <rect x="128" y="65" width="80" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />

      {/* Sidebar */}
      <rect x="50" y="86" width="60" height="164" rx="0" fill="currentColor" fillOpacity="0.03" />
      <rect x="110" y="86" width="1" fill="currentColor" fillOpacity="0.06" height="164" />
      <rect x="60" y="100" width="40" height="8" rx="4" fill="#22c55e" fillOpacity="0.5" />
      <rect x="60" y="116" width="35" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />
      <rect x="60" y="130" width="38" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />
      <rect x="60" y="144" width="30" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />
      <rect x="60" y="158" width="36" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />

      {/* Main content area */}
      <rect x="120" y="96" width="195" height="30" rx="8" fill="currentColor" fillOpacity="0.04" />
      <rect x="130" y="104" width="100" height="10" rx="5" fill="currentColor" fillOpacity="0.1" />
      {/* Cards row */}
      <rect x="120" y="136" width="58" height="50" rx="8" fill="#22c55e" fillOpacity="0.08" />
      <rect x="186" y="136" width="58" height="50" rx="8" fill="currentColor" fillOpacity="0.04" />
      <rect x="252" y="136" width="58" height="50" rx="8" fill="currentColor" fillOpacity="0.04" />
      <rect x="128" y="148" width="40" height="6" rx="3" fill="#22c55e" fillOpacity="0.4" />
      <rect x="128" y="160" width="30" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="194" y="148" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
      <rect x="194" y="160" width="30" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="260" y="148" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
      <rect x="260" y="160" width="30" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      {/* Table */}
      <rect x="120" y="196" width="195" height="40" rx="8" fill="currentColor" fillOpacity="0.03" />
      <rect x="130" y="204" width="50" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />
      <rect x="190" y="204" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.06" />
      <rect x="240" y="204" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.06" />
      <rect x="120" y="216" width="195" height="1" fill="currentColor" fillOpacity="0.06" />
      <rect x="130" y="222" width="50" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="190" y="222" width="40" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="240" y="222" width="40" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />

      {/* Floating code snippet */}
      <rect x="300" y="200" width="100" height="80" rx="12" fill="#1e293b" />
      <rect x="310" y="212" width="30" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.8" />
      <rect x="346" y="212" width="44" height="5" rx="2.5" fill="#94a3b8" fillOpacity="0.5" />
      <rect x="310" y="224" width="20" height="5" rx="2.5" fill="#60a5fa" fillOpacity="0.7" />
      <rect x="336" y="224" width="50" height="5" rx="2.5" fill="#94a3b8" fillOpacity="0.4" />
      <rect x="316" y="236" width="60" height="5" rx="2.5" fill="#f59e0b" fillOpacity="0.6" />
      <rect x="310" y="248" width="40" height="5" rx="2.5" fill="#94a3b8" fillOpacity="0.4" />
      <rect x="310" y="260" width="25" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.6" />

      {/* Stack layers badge */}
      <rect x="340" y="50" width="70" height="28" rx="10" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="350" y="60" width="50" height="8" rx="4" fill="#22c55e" fillOpacity="0.3" />

      {/* Dots */}
      <circle cx="30" cy="140" r="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="20" cy="155" r="2" fill="currentColor" fillOpacity="0.07" />
      <circle cx="395" cy="120" r="3" fill="currentColor" fillOpacity="0.1" />

      <defs>
        <linearGradient id="browserGrad" x1="50" y1="50" x2="330" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="1" stopColor="#f0fdf4" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TestingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <ellipse cx="210" cy="170" rx="180" ry="145" fill="currentColor" fillOpacity="0.04" />

      {/* Main dashboard panel */}
      <rect x="55" y="55" width="270" height="200" rx="16" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5" />
      <rect x="55" y="55" width="270" height="200" rx="16" fill="url(#testGrad)" />
      {/* Header */}
      <rect x="55" y="55" width="270" height="40" rx="16" fill="currentColor" fillOpacity="0.03" />
      <rect x="55" y="83" width="270" height="1" fill="currentColor" fillOpacity="0.07" />
      <rect x="70" y="70" width="80" height="10" rx="5" fill="currentColor" fillOpacity="0.1" />
      {/* Status pills */}
      <rect x="240" y="67" width="36" height="16" rx="8" fill="#22c55e" fillOpacity="0.15" />
      <rect x="246" y="72" width="24" height="6" rx="3" fill="#22c55e" fillOpacity="0.6" />
      <rect x="282" y="67" width="32" height="16" rx="8" fill="#ef4444" fillOpacity="0.1" />
      <rect x="288" y="72" width="20" height="6" rx="3" fill="#ef4444" fillOpacity="0.5" />

      {/* Test results list */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="70" y={100 + i * 26} width="240" height="20" rx="6" fill="currentColor" fillOpacity={i % 3 === 2 ? "0.03" : "0.02"} />
          {/* Pass/fail icon */}
          <circle cx="84" cy={110 + i * 26} r="6" fill={i === 2 ? "#ef4444" : "#22c55e"} fillOpacity="0.15" />
          <rect x="96" y={106 + i * 26} width="100" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />
          <rect x="96" y={115 + i * 26} width="60" height="4" rx="2" fill="currentColor" fillOpacity="0.05" />
          <rect x="270" y={107 + i * 26} width="30" height="6" rx="3" fill={i === 2 ? "#ef4444" : "#22c55e"} fillOpacity={i === 2 ? "0.4" : "0.3"} />
        </g>
      ))}

      {/* Progress bar at bottom */}
      <rect x="70" y="238" width="240" height="8" rx="4" fill="currentColor" fillOpacity="0.06" />
      <rect x="70" y="238" width="192" height="8" rx="4" fill="#22c55e" fillOpacity="0.5" />

      {/* Floating coverage badge */}
      <rect x="300" y="55" width="100" height="70" rx="14" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="315" y="68" width="70" height="8" rx="4" fill="currentColor" fillOpacity="0.08" />
      {/* Donut chart */}
      <circle cx="350" cy="104" r="18" stroke="currentColor" strokeOpacity="0.08" strokeWidth="6" fill="none" />
      <circle cx="350" cy="104" r="18" stroke="#22c55e" strokeOpacity="0.7" strokeWidth="6" fill="none"
        strokeDasharray="96 113" strokeDashoffset="28" strokeLinecap="round" />
      <rect x="342" y="100" width="16" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />

      {/* Floating error card */}
      <rect x="30" y="200" width="110" height="55" rx="12" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="42" y="212" width="16" height="16" rx="4" fill="#ef4444" fillOpacity="0.12" />
      <rect x="64" y="213" width="60" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
      <rect x="64" y="223" width="44" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="42" y="234" width="86" height="12" rx="6" fill="#22c55e" fillOpacity="0.1" />
      <rect x="52" y="238" width="66" height="4" rx="2" fill="#22c55e" fillOpacity="0.4" />

      {/* Dots */}
      <circle cx="390" cy="200" r="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="400" cy="215" r="2" fill="currentColor" fillOpacity="0.07" />
      <circle cx="25" cy="120" r="3" fill="currentColor" fillOpacity="0.1" />

      <defs>
        <linearGradient id="testGrad" x1="55" y1="55" x2="325" y2="255" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="1" stopColor="#f0fdf4" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StaffingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <ellipse cx="210" cy="170" rx="180" ry="145" fill="currentColor" fillOpacity="0.04" />

      {/* Central team card */}
      <rect x="110" y="100" width="200" height="140" rx="16" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1.5" />
      <rect x="110" y="100" width="200" height="140" rx="16" fill="url(#staffGrad)" />
      <rect x="125" y="116" width="80" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />
      <rect x="125" y="130" width="55" height="6" rx="3" fill="currentColor" fillOpacity="0.06" />

      {/* Avatar row */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={140 + i * 36} cy="168" r="18" fill={["#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6"][i]} fillOpacity="0.15" />
          <circle cx={140 + i * 36} cy="162" r="8" fill={["#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6"][i]} fillOpacity="0.25" />
          <ellipse cx={140 + i * 36} cy="178" rx="10" ry="6" fill={["#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6"][i]} fillOpacity="0.15" />
        </g>
      ))}

      {/* Role labels */}
      <rect x="122" y="192" width="44" height="16" rx="8" fill="#22c55e" fillOpacity="0.12" />
      <rect x="127" y="197" width="34" height="6" rx="3" fill="#22c55e" fillOpacity="0.5" />
      <rect x="158" y="192" width="44" height="16" rx="8" fill="#3b82f6" fillOpacity="0.1" />
      <rect x="163" y="197" width="34" height="6" rx="3" fill="#3b82f6" fillOpacity="0.4" />
      <rect x="194" y="192" width="44" height="16" rx="8" fill="#f59e0b" fillOpacity="0.1" />
      <rect x="199" y="197" width="34" height="6" rx="3" fill="#f59e0b" fillOpacity="0.4" />
      <rect x="230" y="192" width="44" height="16" rx="8" fill="#8b5cf6" fillOpacity="0.1" />
      <rect x="235" y="197" width="34" height="6" rx="3" fill="#8b5cf6" fillOpacity="0.4" />

      {/* CTA */}
      <rect x="125" y="216" width="170" height="14" rx="7" fill="#22c55e" fillOpacity="0.12" />
      <rect x="155" y="220" width="110" height="6" rx="3" fill="#22c55e" fillOpacity="0.4" />

      {/* Left floating card — skill */}
      <rect x="20" y="90" width="100" height="80" rx="14" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="34" y="104" width="72" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />
      <rect x="34" y="118" width="50" height="6" rx="3" fill="currentColor" fillOpacity="0.06" />
      {/* Skill bars */}
      <rect x="34" y="132" width="72" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="34" y="132" width="58" height="5" rx="2.5" fill="#22c55e" fillOpacity="0.4" />
      <rect x="34" y="142" width="72" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="34" y="142" width="44" height="5" rx="2.5" fill="#3b82f6" fillOpacity="0.4" />
      <rect x="34" y="152" width="72" height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
      <rect x="34" y="152" width="64" height="5" rx="2.5" fill="#f59e0b" fillOpacity="0.4" />

      {/* Right floating card — match */}
      <rect x="300" y="90" width="100" height="80" rx="14" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="314" y="104" width="72" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />
      <circle cx="350" cy="140" r="20" stroke="currentColor" strokeOpacity="0.06" strokeWidth="5" fill="none" />
      <circle cx="350" cy="140" r="20" stroke="#22c55e" strokeOpacity="0.6" strokeWidth="5" fill="none"
        strokeDasharray="100 126" strokeDashoffset="32" strokeLinecap="round" />
      <rect x="342" y="136" width="16" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />

      {/* Bottom floating — timeline */}
      <rect x="100" y="265" width="220" height="44" rx="12" fill="white" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="116" y="278" width="188" height="6" rx="3" fill="currentColor" fillOpacity="0.06" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={130 + i * 52} cy="281" r="6" fill={i <= 2 ? "#22c55e" : "currentColor"} fillOpacity={i <= 2 ? "0.5" : "0.1"} />
          <rect x={118 + i * 52} y="292" width="24" height="5" rx="2.5" fill="currentColor" fillOpacity="0.07" />
        </g>
      ))}

      {/* Connector lines */}
      <line x1="120" y1="170" x2="110" y2="170" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="310" y1="170" x2="300" y2="170" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Dots */}
      <circle cx="390" cy="80" r="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="30" cy="260" r="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="400" cy="260" r="2" fill="currentColor" fillOpacity="0.07" />

      <defs>
        <linearGradient id="staffGrad" x1="110" y1="100" x2="310" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="1" stopColor="#f0fdf4" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
