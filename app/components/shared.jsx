export function PawPrint({ size = 32, color, rotate = 0, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      fill={color || "currentColor"}
    >
      <ellipse cx="9" cy="11" rx="2.6" ry="3.4" />
      <ellipse cx="23" cy="11" rx="2.6" ry="3.4" />
      <ellipse cx="4" cy="17" rx="2.2" ry="2.8" />
      <ellipse cx="28" cy="17" rx="2.2" ry="2.8" />
      <path d="M16 14c-5 0-8 4-8 8 0 3 2.5 5 5 5 1.5 0 2.2-1 3-1s1.5 1 3 1c2.5 0 5-2 5-5 0-4-3-8-8-8z" />
    </svg>
  );
}

export function PH({ label, src, style = {}, alt }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || label || ""}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }}
      />
    );
  }
  return (
    <div className="dc-ph" style={style}>
      <div className="dc-ph-label">{label}</div>
    </div>
  );
}

const PAW_POSITIONS = [
  { top: "8%", left: "4%", rot: 12, size: 36 },
  { top: "22%", right: "8%", rot: -18, size: 28 },
  { top: "44%", left: "10%", rot: 24, size: 32 },
  { top: "62%", right: "5%", rot: -8, size: 40 },
  { top: "78%", left: "6%", rot: 18, size: 26 },
  { top: "30%", left: "48%", rot: -22, size: 22 },
  { top: "80%", right: "16%", rot: 14, size: 30 },
  { top: "12%", right: "22%", rot: -30, size: 24 },
];

export function PawScatter({ count = 8, color = "rgba(26, 24, 20, 0.08)" }) {
  return (
    <div className="dc-paws" aria-hidden="true">
      {PAW_POSITIONS.slice(0, count).map((p, i) => (
        <div key={i} className="dc-paw" style={{ ...p, color }}>
          <PawPrint size={p.size} rotate={p.rot} />
        </div>
      ))}
    </div>
  );
}

export function SectionHead({ eyebrow, title, subtitle, align = "row" }) {
  return (
    <div
      className="dc-section-head"
      style={align === "center" ? { flexDirection: "column", alignItems: "center", textAlign: "center" } : {}}
    >
      <div>
        <div className="dc-eyebrow-text">{eyebrow}</div>
        <h2 className="dc-h2">{title}</h2>
      </div>
      {subtitle && <p className="dc-section-sub">{subtitle}</p>}
    </div>
  );
}

export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 14s-5.5-3.5-5.5-7.5C2.5 4 4 2.5 5.8 2.5c1.2 0 1.9.7 2.2 1.2.3-.5 1-1.2 2.2-1.2C12 2.5 13.5 4 13.5 6.5 13.5 10.5 8 14 8 14z" />
    </svg>
  );
}

export function Check({ stroke = "#1A1814" }) {
  return (
    <span className="dc-check">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2 6.5L5 9.5L10 3.5" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const WAVE_PATHS = {
  soft: "M0 0 L1440 0 L1440 40 C 1140 90, 780 -10, 420 40 C 240 65, 60 35, 0 50 Z",
  double:
    "M0 0 L1440 0 L1440 38 C 1320 70, 1200 18, 1080 38 S 840 70, 720 38 S 480 8, 360 38 S 120 70, 0 42 Z",
  arch: "M0 0 L1440 0 L1440 30 C 1200 30, 1080 95, 720 70 C 360 45, 240 30, 0 30 Z",
  pebble:
    "M0 0 L1440 0 L1440 36 C 1296 36, 1224 70, 1080 60 C 936 50, 864 22, 720 28 C 576 34, 504 70, 360 62 C 216 54, 144 30, 0 36 Z",
};

export function WaveDivider({ from, variant = "soft", height = 70, flip = false }) {
  return (
    <svg
      className="dc-wave-divider"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      style={{ height, transform: flip ? "scaleX(-1)" : "none" }}
      aria-hidden="true"
    >
      <path d={WAVE_PATHS[variant] || WAVE_PATHS.soft} fill={from} />
    </svg>
  );
}
