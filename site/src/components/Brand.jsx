export function CrowMark({ size = 80, tilt = 0, style = {} }) {
  const ratio = 798 / 847;
  return (
    <img
      src="/assets/crow.png"
      alt="Белая ворона"
      width={size}
      height={size * ratio}
      style={{
        display: 'block',
        width: size,
        height: size * ratio,
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        userSelect: 'none',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

export function Wordmark({ size = 28, accent = 'var(--accent)', mono = false, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600, fontSize: size, lineHeight: 1,
      letterSpacing: '-0.035em',
      fontVariationSettings: '"wdth" 92',
      color: 'inherit',
      ...style,
    }}>
      <span>белая</span>
      <span style={{ color: mono ? 'inherit' : accent, padding: '0 0.06em' }}>/</span>
      <span>ворона</span>
    </span>
  );
}

export function Lockup({ size = 28, gap = 12, style = {} }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap, ...style }}>
      <CrowMark size={size * 1.4} />
      <Wordmark size={size} />
    </span>
  );
}
