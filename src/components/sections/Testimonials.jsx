import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import { SectionHeader } from '../ui/SectionHeader';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="reviews" className="section-padding">
      <div className="container">
        <SectionHeader
          badge="Customer Reviews"
          title="What Our Clients Say"
          subtitle="Real reviews from verified property owners who trusted Hi-One-Tech for their waterproofing needs."
        />

        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          position: 'relative',
          backgroundColor: 'var(--color-white)',
          padding: '40px 32px',
          borderRadius: 'var(--radius-card)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--color-border)'
        }}>
          <Quote size={48} color="rgba(0, 168, 204, 0.2)" style={{ position: 'absolute', top: '24px', right: '32px' }} />

          {/* Star Rating */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} fill="var(--color-accent-warning)" color="var(--color-accent-warning)" />
            ))}
          </div>

          {/* Review Text */}
          <p style={{
            fontSize: '18px',
            color: 'var(--color-neutral-dark)',
            lineHeight: '1.7',
            marginBottom: '28px',
            fontStyle: 'italic'
          }}>
            "{current.comment}"
          </p>

          {/* Client Bio */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src={current.avatar}
              alt={current.name}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--color-secondary)'
              }}
            />
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-primary)' }}>
                {current.name}
              </div>
              <div style={{ fontSize: '13px', color: '#64748B' }}>
                {current.role} • {current.location}
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            marginTop: '20px'
          }}>
            <button
              onClick={prevSlide}
              aria-label="Previous Review"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-neutral-light)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Review"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-white)',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
