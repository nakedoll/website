import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'colored' | 'monochrome';
  height?: number | string;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-7 w-auto',
  variant = 'light',
}) => {
  // Brand colors matching the uploaded new_purplemoon.png
  // Authentic deep purple: #5a2c64 / #755fbe
  const textColor = variant === 'colored' ? '#5a2c64' : '#ffffff';
  const gridColor = variant === 'colored' ? '#5a2c64' : '#9d87e2';
  const gridAccent = variant === 'colored' ? '#755fbe' : '#00b8ff';

  return (
    <svg
      viewBox="0 0 320 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="퍼플문 (Purple Moon) 공식 로고"
    >
      {/* 
        "purplem" - bold geometric modern wordmark
        Matching the typography of new_purplemoon.png
      */}
      <text
        x="2"
        y="62"
        fill={textColor}
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: '66px',
          fontWeight: 800,
          letterSpacing: '-0.04em',
        }}
      >
        purplem
      </text>

      {/* 
        Iconic "oo" Globe / Crescent Moon Grid Emblem
        Center at x = 252, y = 44, radius = 26
      */}
      <g transform="translate(254, 43)">
        {/* Clip path for circular sphere bounds */}
        <defs>
          <clipPath id="sphere-clip">
            <circle cx="0" cy="0" r="26" />
          </clipPath>
          <mask id="crescent-mask">
            {/* White reveals, black hides */}
            <circle cx="0" cy="0" r="28" fill="#ffffff" />
            {/* Dynamic white crescent swoosh carved out */}
            <path
              d="M -3 -12 C 12 -22 22 -6 18 10 C 14 24 -2 26 -14 16 C -20 10 -20 2 -16 -4 C -12 -10 -4 -8 4 -4 C 12 0 10 12 2 14 C -6 16 -12 10 -8 4 C -6 0 -1 -2 2 -1"
              fill="#000000"
            />
            {/* Center swirl cutout */}
            <path
              d="M -12 -4 C -8 -22 14 -22 20 -8 C 24 6 12 24 -6 22 C -18 20 -22 6 -12 -4 Z"
              fill="#000000"
            />
          </mask>
        </defs>

        {/* Sphere group masked by crescent swoosh and clipped to circle */}
        <g clipPath="url(#sphere-clip)">
          {/* Mosaic Grid pattern on sphere */}
          {/* Row -3 */}
          <rect x="-24" y="-26" width="6" height="6" rx="1" fill={gridColor} opacity="0.65" />
          <rect x="-16" y="-26" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="-7" y="-26" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="2" y="-26" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="11" y="-26" width="6" height="6" rx="1" fill={gridColor} opacity="0.75" />

          {/* Row -2 */}
          <rect x="-26" y="-18" width="6" height="6" rx="1" fill={gridColor} opacity="0.8" />
          <rect x="-18" y="-18" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="-9" y="-18" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="0" y="-18" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="9" y="-18" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="18" y="-18" width="6" height="6" rx="1" fill={gridColor} opacity="0.75" />

          {/* Row -1 */}
          <rect x="-26" y="-10" width="6" height="6" rx="1" fill={gridColor} />
          <rect x="-18" y="-10" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="-9" y="-10" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="0" y="-10" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="9" y="-10" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="18" y="-10" width="6" height="6" rx="1" fill={gridColor} />

          {/* Row 0 (Middle) */}
          <rect x="-26" y="-2" width="6" height="6" rx="1" fill={gridColor} />
          <rect x="-18" y="-2" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="-9" y="-2" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="0" y="-2" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="9" y="-2" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="18" y="-2" width="6" height="6" rx="1" fill={gridColor} />

          {/* Row +1 */}
          <rect x="-26" y="6" width="6" height="6" rx="1" fill={gridColor} />
          <rect x="-18" y="6" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="-9" y="6" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="0" y="6" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="9" y="6" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="18" y="6" width="6" height="6" rx="1" fill={gridColor} />

          {/* Row +2 */}
          <rect x="-24" y="14" width="6" height="6" rx="1" fill={gridColor} opacity="0.9" />
          <rect x="-16" y="14" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="-7" y="14" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="2" y="14" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="11" y="14" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="20" y="14" width="5" height="6" rx="1" fill={gridColor} opacity="0.6" />

          {/* Row +3 */}
          <rect x="-18" y="22" width="6" height="6" rx="1" fill={gridColor} opacity="0.7" />
          <rect x="-10" y="22" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="-1" y="22" width="7" height="6" rx="1" fill={gridColor} />
          <rect x="8" y="22" width="7" height="6" rx="1" fill={gridColor} />

          {/* Dynamic Carved Crescent Moon Swoosh (Negative space / White curve) */}
          <path
            d="M -18 -8 C -14 -20 6 -24 16 -12 C 22 -4 20 12 12 18 C 4 24 -10 20 -16 12 C -22 4 -18 -4 -10 -8 C -4 -10 4 -8 8 -2 C 12 4 8 12 2 12 C -4 12 -8 6 -4 0 C -2 -4 4 -4 6 0"
            fill={variant === 'colored' ? '#ffffff' : '#0b0916'}
          />

          {/* Subtle cyan accent glow point in moon core */}
          <circle cx="2" cy="-4" r="2.5" fill={gridAccent} opacity="0.9" />
        </g>

        {/* Sleek orbital contour line */}
        <circle cx="0" cy="0" r="26" stroke={gridColor} strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>

      {/* 
        "n" - matching lowercase letter
      */}
      <text
        x="285"
        y="62"
        fill={textColor}
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: '66px',
          fontWeight: 800,
          letterSpacing: '-0.04em',
        }}
      >
        n
      </text>
    </svg>
  );
};
