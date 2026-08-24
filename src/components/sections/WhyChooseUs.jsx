import React from 'react';
import { ShieldCheck, Award, Wrench, Leaf, DollarSign, Clock } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "10+ Years Experience",
      desc: "Proven track record protecting over 500+ residential and commercial properties."
    },
    {
      icon: ShieldCheck,
      title: "100% Leak-Proof Warranty",
      desc: "Written 10-year warranty coverage on all major waterproofing treatments."
    },
    {
      icon: Wrench,
      title: "Advanced Nano-Coating",
      desc: "Utilizing elastomeric & crystalline nano-polymers for deep concrete sealing."
    },
    {
      icon: Clock,
      title: "Fast 24-Hour Execution",
      desc: "Quick inspection and rapid application ensuring minimal disruption."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly & Non-Toxic",
      desc: "100% safe, odorless, and non-hazardous materials safe for water tanks and homes."
    },
    {
      icon: DollarSign,
      title: "Transparent & Fair Pricing",
      desc: "Zero hidden charges. Detailed breakdown provided after free site inspection."
    }
  ];

  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        <SectionHeader
          badge="Why Choose Hi-One-Tech"
          title="The Premier Choice for Leak Defense"
          subtitle="We combine advanced chemistry, trained engineers, and strict quality control to deliver permanent leak solutions."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} style={{
                backgroundColor: 'var(--color-white)',
                padding: '32px',
                borderRadius: 'var(--radius-card)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                transition: 'all var(--transition-normal)'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0, 168, 204, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-secondary)',
                  marginBottom: '20px'
                }}>
                  <IconComp size={28} />
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-primary)', marginBottom: '10px', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
