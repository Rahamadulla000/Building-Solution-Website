import React, { useState, useEffect, useRef } from 'react';
import { galleryData, galleryCategories } from '../../data/galleryData';
import { useBeforeAfter } from '../../hooks/useBeforeAfter';
import { SectionHeader } from '../ui/SectionHeader';
import { SlidersHorizontal } from 'lucide-react';

function BeforeAfterCard({ item }) {
  const { sliderPosition, containerRef, bind } = useBeforeAfter(50);
  const [containerWidth, setContainerWidth] = useState(400);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [containerRef]);

  return (
    <div style={{
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Before/After Drag Slider Container */}
      <div
        ref={containerRef}
        {...bind}
        style={{
          position: 'relative',
          height: '260px',
          width: '100%',
          overflow: 'hidden',
          cursor: 'ew-resize',
          userSelect: 'none',
          touchAction: 'none'
        }}
      >
        {/* After Image (Background Layer) */}
        <img
          src={item.afterImage}
          alt={`After ${item.title}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-white)',
          fontSize: '11px',
          fontWeight: 700,
          padding: '4px 8px',
          borderRadius: '4px',
          pointerEvents: 'none',
          zIndex: 5
        }}>
          AFTER TREATMENT
        </span>

        {/* Before Image (Clipped Foreground Layer) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${sliderPosition}%`,
          overflow: 'hidden',
          borderRight: '3px solid var(--color-secondary)',
          zIndex: 2
        }}>
          <img
            src={item.beforeImage}
            alt={`Before ${item.title}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${containerWidth}px`,
              height: '100%',
              objectFit: 'cover',
              maxWidth: 'none'
            }}
          />
          <span style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'rgba(26, 37, 48, 0.9)',
            color: 'var(--color-white)',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 8px',
            borderRadius: '4px',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 5
          }}>
            BEFORE (DAMAGED)
          </span>
        </div>

        {/* Central Drag Handle */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: `${sliderPosition}%`,
          transform: 'translate(-50%, -50%)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)',
          pointerEvents: 'none',
          zIndex: 10
        }}>
          <SlidersHorizontal size={18} />
        </div>
      </div>

      {/* Item Details */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-secondary)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>
            {item.category} • {item.location}
          </div>
          <h3 style={{ fontSize: '17px', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>
            {item.title}
          </h3>
          <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5' }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <SectionHeader
          badge="Project Gallery"
          title="Real Before & After Transformations"
          subtitle="Drag the slider on any project photo to see how Hi-One-Tech permanently restores damaged surfaces."
        />

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '40px'
        }}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-btn)',
                fontSize: '14px',
                fontWeight: 600,
                backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-white)',
                color: activeCategory === cat ? 'var(--color-white)' : 'var(--color-neutral-dark)',
                border: activeCategory === cat ? 'none' : '1px solid var(--color-border)',
                boxShadow: activeCategory === cat ? 'var(--shadow-md)' : 'none',
                transition: 'all var(--transition-fast)',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {filteredItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
