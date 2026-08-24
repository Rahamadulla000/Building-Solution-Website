import React from 'react';
import { ShieldCheck, Award, Wrench, Leaf, DollarSign, Clock, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export function WhyChooseUs({ onOpenQuoteModal }) {
  const reasons = [
    {
      id: '01',
      tag: 'PROVEN TRACK RECORD',
      title: "10+ Years Experience",
      desc: "Deep engineering expertise with over 500+ successful leakproofing projects across South India.",
      highlight: "500+ Buildings Fortified",
      icon: Award,
      theme: {
        iconColor: '#0F4C81',
        iconBg: 'linear-gradient(135deg, rgba(15, 76, 129, 0.12), rgba(15, 76, 129, 0.04))',
        badgeBg: 'rgba(15, 76, 129, 0.1)',
        badgeColor: '#0F4C81',
        gradient: 'linear-gradient(90deg, #0F4C81, #2563EB)',
        hoverShadow: '0 20px 40px -12px rgba(15, 76, 129, 0.22)',
        borderColor: 'rgba(15, 76, 129, 0.35)',
        chipBg: 'rgba(15, 76, 129, 0.06)',
        chipColor: '#0F4C81'
      }
    },
    {
      id: '02',
      tag: 'LEGAL GUARANTEE',
      title: "100% Leak-Proof Warranty",
      desc: "Comprehensive written 10-year warranty document backed by strict quality and structural guarantees.",
      highlight: "10-Year Written Assurance",
      icon: ShieldCheck,
      theme: {
        iconColor: '#00A8CC',
        iconBg: 'linear-gradient(135deg, rgba(0, 168, 204, 0.14), rgba(0, 168, 204, 0.04))',
        badgeBg: 'rgba(0, 168, 204, 0.12)',
        badgeColor: '#008BAA',
        gradient: 'linear-gradient(90deg, #00A8CC, #0EA5E9)',
        hoverShadow: '0 20px 40px -12px rgba(0, 168, 204, 0.25)',
        borderColor: 'rgba(0, 168, 204, 0.4)',
        chipBg: 'rgba(0, 168, 204, 0.08)',
        chipColor: '#007C98'
      }
    },
    {
      id: '03',
      tag: 'NANO-POLYMER TECH',
      title: "Advanced Nano-Coating",
      desc: "Micro-molecular crystalline polymers penetrate deep into concrete pores for unbreakable seal.",
      highlight: "Deep Concrete Pore Sealing",
      icon: Wrench,
      theme: {
        iconColor: '#6366F1',
        iconBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(99, 102, 241, 0.04))',
        badgeBg: 'rgba(99, 102, 241, 0.1)',
        badgeColor: '#4F46E5',
        gradient: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
        hoverShadow: '0 20px 40px -12px rgba(99, 102, 241, 0.22)',
        borderColor: 'rgba(99, 102, 241, 0.4)',
        chipBg: 'rgba(99, 102, 241, 0.06)',
        chipColor: '#4F46E5'
      }
    },
    {
      id: '04',
      tag: 'RAPID MOBILIZATION',
      title: "Fast 24-Hour Execution",
      desc: "Prompt digital site assessment and rapid crew dispatch with minimal disruption to your daily routine.",
      highlight: "Same-Day Site Inspection",
      icon: Clock,
      theme: {
        iconColor: '#D97706',
        iconBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.04))',
        badgeBg: 'rgba(245, 158, 11, 0.12)',
        badgeColor: '#B45309',
        gradient: 'linear-gradient(90deg, #F59E0B, #EA580C)',
        hoverShadow: '0 20px 40px -12px rgba(245, 158, 11, 0.25)',
        borderColor: 'rgba(245, 158, 11, 0.4)',
        chipBg: 'rgba(245, 158, 11, 0.08)',
        chipColor: '#B45309'
      }
    },
    {
      id: '05',
      tag: 'SAFETY FIRST',
      title: "Eco-Friendly & Non-Toxic",
      desc: "100% non-hazardous, low-VOC formulations safe for overhead water tanks and residential living spaces.",
      highlight: "Potable Water Tank Certified",
      icon: Leaf,
      theme: {
        iconColor: '#059669',
        iconBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.04))',
        badgeBg: 'rgba(16, 185, 129, 0.12)',
        badgeColor: '#047857',
        gradient: 'linear-gradient(90deg, #10B981, #059669)',
        hoverShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.25)',
        borderColor: 'rgba(16, 185, 129, 0.4)',
        chipBg: 'rgba(16, 185, 129, 0.08)',
        chipColor: '#047857'
      }
    },
    {
      id: '06',
      tag: 'HONEST ESTIMATES',
      title: "Transparent & Fair Pricing",
      desc: "Zero hidden surcharges. Clear itemized quotes provided upfront after comprehensive diagnostic testing.",
      highlight: "Fixed-Cost Written Quotes",
      icon: DollarSign,
      theme: {
        iconColor: '#0D9488',
        iconBg: 'linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(13, 148, 136, 0.04))',
        badgeBg: 'rgba(13, 148, 136, 0.12)',
        badgeColor: '#0F766E',
        gradient: 'linear-gradient(90deg, #0D9488, #00A8CC)',
        hoverShadow: '0 20px 40px -12px rgba(13, 148, 136, 0.25)',
        borderColor: 'rgba(13, 148, 136, 0.4)',
        chipBg: 'rgba(13, 148, 136, 0.08)',
        chipColor: '#0F766E'
      }
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 168, 204, 0.05) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          badge="The Hi-One-Tech Advantage"
          title="Engineered For Permanent Protection"
          subtitle="We combine scientific polymer chemistry, certified site engineers, and strict quality protocols to ensure zero leakage for decades."
        />

        {/* 6 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginBottom: '56px'
        }}>
          {reasons.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="why-choose-card"
                style={{
                  '--card-accent-grad': item.theme.gradient,
                  '--card-hover-shadow': item.theme.hoverShadow,
                  '--card-accent-border': item.theme.borderColor,
                  '--card-chip-bg': item.theme.chipBg,
                  '--card-chip-color': item.theme.chipColor
                }}
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      className="why-choose-icon-box"
                      style={{
                        background: item.theme.iconBg,
                        color: item.theme.iconColor,
                        border: `1px solid ${item.theme.borderColor}`
                      }}
                    >
                      <IconComp size={28} strokeWidth={2.2} />
                    </div>

                    <span
                      className="why-choose-badge"
                      style={{
                        backgroundColor: item.theme.badgeBg,
                        color: item.theme.badgeColor
                      }}
                    >
                      {item.id} • {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{
                    fontSize: '19px',
                    color: 'var(--color-neutral-dark)',
                    marginBottom: '10px',
                    fontWeight: 700,
                    letterSpacing: '-0.2px'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: '#64748B',
                    lineHeight: '1.65',
                    marginBottom: '8px'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Key Highlight Metric Tag */}
                <div>
                  <div className="why-choose-chip">
                    <Sparkles size={13} style={{ flexShrink: 0 }} />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0F4C81 0%, #082F52 100%)',
          borderRadius: 'var(--radius-card)',
          padding: '36px 40px',
          color: 'var(--color-white)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle water-wave glow */}
          <div style={{
            position: 'absolute',
            right: '-60px',
            top: '-60px',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 168, 204, 0.35) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <CheckCircle2 size={20} color="var(--color-secondary)" />
              <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
                Guaranteed Satisfaction
              </span>
            </div>
            <h4 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '6px', color: 'var(--color-white)' }}>
              Need an Expert Site Inspection for Your Property?
            </h4>
            <p style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: '1.5' }}>
              Our waterproofing specialists inspect your terrace, basement, or walls with moisture meters and provide a detailed diagnostic report — 100% free of charge.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', position: 'relative', zIndex: 1 }}>
            <Button
              variant="secondary"
              size="md"
              icon={PhoneCall}
              onClick={() => {
                if (onOpenQuoteModal) onOpenQuoteModal();
                else {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Free Inspection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

