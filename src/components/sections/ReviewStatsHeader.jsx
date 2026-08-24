import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Award, Edit3 } from 'lucide-react';
import { reviewStats } from '../../data/testimonialsData';
import { Button } from '../ui/Button';

export function ReviewStatsHeader({ onOpenWriteModal }) {
  return (
    <div style={{
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--radius-card)',
      padding: '32px 28px',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-lg)',
      marginBottom: '36px',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(244, 247, 250, 0.8) 100%)',
      backdropFilter: 'blur(12px)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        alignItems: 'center'
      }}>
        {/* Column 1: Big Score & Stars */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(0, 168, 204, 0.1)',
            color: 'var(--color-secondary)',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            padding: '4px 12px',
            borderRadius: '9999px',
            marginBottom: '12px'
          }}>
            <ShieldCheck size={14} /> Verified Client Ratings
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
            <span style={{
              fontSize: '48px',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary)',
              lineHeight: 1
            }}>
              {reviewStats.averageRating}
            </span>
            <span style={{ fontSize: '18px', color: '#64748B', fontWeight: 600 }}>out of 5</span>
          </div>

          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="var(--color-accent-warning)" color="var(--color-accent-warning)" />
            ))}
          </div>

          <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>
            Based on <strong>{reviewStats.totalReviews}+ Verified Waterproofing Projects</strong> in Bangalore
          </p>
        </div>

        {/* Column 2: Rating Progress Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {reviewStats.breakdown.map((row) => (
            <div key={row.stars} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px' }}>
              <div style={{ width: '40px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                {row.stars} <Star size={12} fill="var(--color-accent-warning)" color="var(--color-accent-warning)" />
              </div>
              <div style={{
                flex: 1,
                height: '8px',
                backgroundColor: '#E2E8F0',
                borderRadius: '9999px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${row.percentage}%`,
                  height: '100%',
                  backgroundColor: row.stars >= 4 ? 'var(--color-secondary)' : 'var(--color-accent-warning)',
                  borderRadius: '9999px',
                  transition: 'width 0.6s ease'
                }} />
              </div>
              <div style={{ width: '36px', textAlign: 'right', color: '#64748B', fontWeight: 600 }}>
                {row.percentage}%
              </div>
            </div>
          ))}
        </div>

        {/* Column 3: Trust Badges & Action CTA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          borderLeft: '1px solid rgba(226, 232, 240, 0.8)',
          paddingLeft: '24px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>
              <CheckCircle2 size={16} color="var(--color-secondary)" />
              <span>Google Verified Reviews: <strong>4.9 ★</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>
              <Award size={16} color="var(--color-secondary)" />
              <span>IndiaMART Certified: <strong>4.8 ★</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>
              <ShieldCheck size={16} color="var(--color-secondary)" />
              <span><strong>100% Verified</strong> Property Owners</span>
            </div>
          </div>

          <Button
            onClick={onOpenWriteModal}
            variant="primary"
            size="sm"
            style={{ marginTop: '4px', width: '100%', justifyContent: 'center' }}
          >
            <Edit3 size={16} style={{ marginRight: '6px' }} /> Share Your Experience
          </Button>
        </div>
      </div>
    </div>
  );
}
