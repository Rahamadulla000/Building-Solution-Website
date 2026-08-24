import React from 'react';

export function SectionHeader({ badge, title, subtitle, centered = true }) {
  return (
    <div style={{
      textAlign: centered ? 'center' : 'left',
      maxWidth: '720px',
      margin: centered ? '0 auto 48px auto' : '0 0 48px 0'
    }}>
      {badge && (
        <span style={{
          display: 'inline-block',
          padding: '6px 14px',
          borderRadius: 'var(--radius-badge)',
          backgroundColor: 'rgba(0, 168, 204, 0.12)',
          color: 'var(--color-secondary)',
          fontWeight: 700,
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '12px'
        }}>
          {badge}
        </span>
      )}
      {title && (
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 38px)',
          color: 'var(--color-neutral-dark)',
          marginBottom: '16px',
          fontWeight: 700
        }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p style={{
          fontSize: '16px',
          color: '#64748B',
          lineHeight: '1.6'
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
