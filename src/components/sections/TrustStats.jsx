import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export function TrustStats() {
  return (
    <section style={{
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)',
      padding: '40px 0'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
        textAlign: 'center'
      }}>
        {siteConfig.stats.map((stat, idx) => (
          <div key={idx} style={{ padding: '12px' }}>
            <div style={{
              fontSize: '36px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              color: 'var(--color-secondary)',
              marginBottom: '4px'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 500,
              opacity: 0.9,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
