import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../ui/Button';
import heroVideo from '../../videos/Create_a_premium_cinematic_com (1).mp4';

export function Hero({ onOpenQuoteModal }) {
  return (
    <section id="home" style={{
      paddingTop: '140px',
      paddingBottom: '90px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Background Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-building.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for Text Legibility */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 37, 48, 0.88) 0%, rgba(10, 26, 40, 0.92) 100%)',
        backdropFilter: 'blur(2px)',
        zIndex: 1
      }} />

      {/* Hero Content Container */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '48px',
        alignItems: 'center'
      }}>
        {/* Left Column: Headline & Action */}
        <div>
          {/* Trust Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: 'var(--radius-badge)',
            backgroundColor: 'rgba(0, 168, 204, 0.25)',
            border: '1px solid rgba(0, 168, 204, 0.4)',
            color: 'var(--color-secondary)',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '24px',
            backdropFilter: 'blur(8px)'
          }}>
            <Award size={16} />
            Certified Waterproofing Experts
          </div>

          <h1 style={{
            fontSize: 'clamp(34px, 5vw, 54px)',
            color: 'var(--color-white)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '20px',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            {siteConfig.tagline}
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#E2E8F0',
            lineHeight: 1.6,
            marginBottom: '32px',
            maxWidth: '560px'
          }}>
            {siteConfig.subTagline}
          </p>

          {/* Key Benefit Highlights */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '36px'
          }}>
            {['10-Year Warranty', 'Free Site Inspection', '100% Leak-Proof Guarantee'].map((text, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-white)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '6px 14px',
                borderRadius: '20px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <CheckCircle2 size={18} color="var(--color-secondary)" />
                {text}
              </div>
            ))}
          </div>

          {/* Dual Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Button variant="secondary" size="lg" icon={Phone} href={`tel:${siteConfig.phoneRaw}`}>
              Call Now
            </Button>
            <Button variant="primary" size="lg" onClick={onOpenQuoteModal}>
              Get Free Quote
            </Button>
          </div>
        </div>

        {/* Right Column: Floating Glassmorphic Trust Card */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            backgroundColor: 'rgba(15, 37, 48, 0.85)',
            backdropFilter: 'blur(16px)',
            padding: '24px 32px',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            width: '100%',
            maxWidth: '360px'
          }}>
            <ShieldCheck size={40} color="var(--color-secondary)" />
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-white)' }}>500+ Projects Protected</div>
              <div style={{ fontSize: '13px', color: '#94A3B8' }}>100% Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
