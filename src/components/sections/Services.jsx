import React from 'react';
import { Home, Droplet, Shield, Layers, Maximize, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import AccordionGallery from '../ui/AccordionGallery';

const iconMap = {
  Home,
  Droplet,
  Shield,
  Layers,
  Maximize,
  Building2
};

const accordionItems = [
  { image: '/images/hero-building.jpg', label: 'Terrace Waterproofing', link: '#contact' },
  { image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80', label: 'Bathroom Waterproofing', link: '#contact' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OfB5cMJrvbIuQ7u_-EgZOK6T9kS8BRYDQCHcX3-_QHOM86y8A3fzyYNe&s=10', label: 'Commercial Roof Sealing', link: '#contact' },
  { image: '/images/wall-paint.jpg', label: 'Wall Dampness & Painting', link: '#contact' },
  { image: 'https://media.istockphoto.com/id/857627420/photo/bitumen-waterproofing-of-the-foundation.jpg?s=612x612&w=0&k=20&c=s2hiohdvHTKK5jHcc8ZogVVeaZmVc-Ob4uf1x5IiEDU=', label: 'Industrial Waterproofing', link: '#contact' }
];

export function Services({ onSelectService }) {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <SectionHeader
          badge="Our Waterproofing Services"
          title="Comprehensive Waterproofing Solutions"
          subtitle="Engineered to eliminate leakage, seepage, and dampness across residential, commercial, and industrial properties."
        />

        {/* 6 Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Shield;

            return (
              <div
                key={service.id}
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                {/* Service Card Image Header */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-secondary)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <IconComponent size={24} />
                  </div>
                </div>

                {/* Service Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', marginBottom: '10px', fontWeight: 700 }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', marginBottom: '20px' }}>
                      {service.summary}
                    </p>

                    {/* Features List */}
                    <div style={{ marginBottom: '24px' }}>
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--color-neutral-dark)', marginBottom: '8px' }}>
                          <CheckCircle2 size={16} color="var(--color-secondary)" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onSelectService(service.title)}
                    icon={ArrowRight}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Inquire Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Accordion Gallery Showcase (React Bits Component) */}
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: '40px 32px',
          borderRadius: 'var(--radius-card)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
              marginBottom: '8px'
            }}>
              Interactive Service Explorer
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-primary)' }}>
              Hover to Explore Waterproofing Categories
            </h3>
          </div>

          <AccordionGallery
            items={accordionItems}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#00A8CC"
            overlayColor="#0F2530"
            height={460}
          />
        </div>
      </div>
    </section>
  );
}
