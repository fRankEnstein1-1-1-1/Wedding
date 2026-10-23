import React from 'react';

/* ── Decorative ornamental dividers ──────────────────────────── */
export function OrnamentDivider({ color = '#c5a059', width = 200 }) {
  return (
    <svg
      width={width}
      height="30"
      viewBox="0 0 200 30"
      fill="none"
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* Center diamond */}
      <rect x="95" y="10" width="10" height="10" rx="1" transform="rotate(45 100 15)" fill={color} />
      {/* Left line + flourish */}
      <line x1="10" y1="15" x2="88" y2="15" stroke={color} strokeWidth="1" />
      <circle cx="10" cy="15" r="2" fill={color} />
      <path d="M30 15 Q40 5 50 15" stroke={color} strokeWidth="0.8" fill="none" />
      {/* Right line + flourish */}
      <line x1="112" y1="15" x2="190" y2="15" stroke={color} strokeWidth="1" />
      <circle cx="190" cy="15" r="2" fill={color} />
      <path d="M150 15 Q160 25 170 15" stroke={color} strokeWidth="0.8" fill="none" />
    </svg>
  );
}

/* ── Decorative corner flourish ──────────────────────────────── */
export function CornerFlourish({ position = 'top-left', color = '#c5a059', size = 60 }) {
  const rotations = {
    'top-left': 0,
    'top-right': 90,
    'bottom-right': 180,
    'bottom-left': 270,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{
        transform: `rotate(${rotations[position]}deg)`,
        opacity: 0.5,
      }}
    >
      <path
        d="M5 55 Q5 30 15 20 Q25 10 55 5"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M5 45 Q5 25 20 15 Q30 8 50 5"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="55" cy="5" r="2" fill={color} />
    </svg>
  );
}

/* ── Section divider with hearts ─────────────────────────────── */
export function HeartDivider({ color = '#c5a059' }) {
  return (
    <div style={{ textAlign: 'center', margin: '30px 0', opacity: 0.6 }}>
      <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
        <line x1="0" y1="12" x2="70" y2="12" stroke={color} strokeWidth="0.8" />
        <path
          d="M90 20 C90 20 82 12 82 8 C82 4 86 2 90 6 C94 2 98 4 98 8 C98 12 90 20 90 20Z"
          fill={color}
        />
        <line x1="110" y1="12" x2="180" y2="12" stroke={color} strokeWidth="0.8" />
      </svg>
    </div>
  );
}
