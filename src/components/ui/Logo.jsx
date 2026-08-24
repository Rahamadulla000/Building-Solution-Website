import React from 'react';

export function Logo({ size = 44, className = '', showText = true, variant = 'badge' }) {
  if (variant === 'horizontal') {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }} className={className}>
        <img
          src="/images/hi-one-tech-logo.svg"
          alt="Hi-One-Tech Building Solutions"
          style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain' }}
        />
        {showText && (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              fontSize: `${Math.max(16, size * 0.42)}px`,
              fontWeight: 800,
              color: 'var(--color-primary, #0F3866)',
              lineHeight: 1.1,
              letterSpacing: '0.5px'
            }}>
              HI-ONE-TECH
            </span>
            <span style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: `${Math.max(10, size * 0.24)}px`,
              fontWeight: 700,
              color: '#DC2626',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginTop: '2px'
            }}>
              BUILDING SOLUTIONS
            </span>
          </div>
        )}
      </div>
    );
  }

  // Default 'badge' layout (full round logo SVG graphic)
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }} className={className}>
      <img
        src="/images/hi-one-tech-logo.svg"
        alt="Hi-One-Tech Building Solutions"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}
