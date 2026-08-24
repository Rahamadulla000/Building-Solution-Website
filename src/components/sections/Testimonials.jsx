import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ThumbsUp, Filter, Grid, LayoutList } from 'lucide-react';
import { testimonialsData as initialData } from '../../data/testimonialsData';
import { SectionHeader } from '../ui/SectionHeader';
import { ReviewStatsHeader } from './ReviewStatsHeader';
import { WriteReviewModal } from '../ui/WriteReviewModal';

export function Testimonials() {
  const [reviews, setReviews] = useState(initialData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [likedReviews, setLikedReviews] = useState({});

  // Filter logic
  const filteredReviews = activeCategory === 'all'
    ? reviews
    : reviews.filter(item => item.category === activeCategory);

  // Carousel handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  const toggleLike = (id) => {
    setLikedReviews(prev => {
      const isLiked = prev[id];
      const newLikedState = !isLiked;
      
      setReviews(currentList =>
        currentList.map(item =>
          item.id === id
            ? { ...item, helpfulCount: item.helpfulCount + (newLikedState ? 1 : -1) }
            : item
        )
      );
      
      return { ...prev, [id]: newLikedState };
    });
  };

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'terrace', label: 'Terrace Waterproofing' },
    { id: 'basement', label: 'Basement & Foundation' },
    { id: 'wall_bathroom', label: 'Wall & Bathroom' },
    { id: 'commercial', label: 'Commercial Roofs' },
  ];

  const currentCarouselItem = filteredReviews[currentIndex % (filteredReviews.length || 1)] || filteredReviews[0];

  return (
    <section id="reviews" className="section-padding" style={{ backgroundColor: 'var(--color-neutral-light)' }}>
      <div className="container">
        <SectionHeader
          badge="Customer Reviews & Proof"
          title="What Our Clients Say"
          subtitle="Real reviews and verified project experiences from property owners who trusted Hi-One-Tech for lasting waterproofing protection."
        />

        {/* 1. Aggregate Rating Stats Header */}
        <ReviewStatsHeader onOpenWriteModal={() => setIsWriteModalOpen(true)} />

        {/* 2. Category Filters & Layout Switcher */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCurrentIndex(0);
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: activeCategory === cat.id ? 'none' : '1px solid var(--color-border)',
                  backgroundColor: activeCategory === cat.id ? 'var(--color-primary)' : 'var(--color-white)',
                  color: activeCategory === cat.id ? 'var(--color-white)' : 'var(--color-neutral-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat.id ? '0 4px 14px rgba(15, 76, 129, 0.25)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid vs Carousel Switcher */}
          <div style={{
            display: 'flex',
            backgroundColor: 'var(--color-white)',
            borderRadius: '8px',
            padding: '4px',
            border: '1px solid var(--color-border)'
          }}>
            <button
              onClick={() => setViewMode('grid')}
              title="Grid View"
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'grid' ? 'rgba(0, 168, 204, 0.15)' : 'transparent',
                color: viewMode === 'grid' ? 'var(--color-primary)' : '#64748B',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              <Grid size={16} /> Grid
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              title="Carousel View"
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'carousel' ? 'rgba(0, 168, 204, 0.15)' : 'transparent',
                color: viewMode === 'carousel' ? 'var(--color-primary)' : '#64748B',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              <LayoutList size={16} /> Carousel
            </button>
          </div>
        </div>

        {/* 3. Review Display Container */}
        {filteredReviews.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
            backgroundColor: 'var(--color-white)',
            borderRadius: '16px',
            border: '1px solid var(--color-border)'
          }}>
            <p style={{ color: '#64748B', fontSize: '16px' }}>No reviews found for this category yet.</p>
          </div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px'
          }}>
            {filteredReviews.map((item) => (
              <ReviewCard
                key={item.id}
                item={item}
                isLiked={!!likedReviews[item.id]}
                onToggleLike={() => toggleLike(item.id)}
              />
            ))}
          </div>
        ) : (
          /* CAROUSEL VIEW */
          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            position: 'relative'
          }}>
            {currentCarouselItem && (
              <ReviewCard
                item={currentCarouselItem}
                isLiked={!!likedReviews[currentCarouselItem.id]}
                onToggleLike={() => toggleLike(currentCarouselItem.id)}
                isFeatured
              />
            )}

            {/* Slider Navigation Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              marginTop: '24px'
            }}>
              <button
                onClick={prevSlide}
                aria-label="Previous Review"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <ChevronLeft size={22} />
              </button>

              <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>
                {currentIndex + 1} of {filteredReviews.length}
              </span>

              <button
                onClick={nextSlide}
                aria-label="Next Review"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-white)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        )}

        {/* 4. Write Review Popup Modal */}
        <WriteReviewModal
          isOpen={isWriteModalOpen}
          onClose={() => setIsWriteModalOpen(false)}
          onAddReview={handleAddReview}
        />
      </div>
    </section>
  );
}

{/* Individual Review Card Component */}
function ReviewCard({ item, isLiked, onToggleLike, isFeatured = false }) {
  return (
    <div style={{
      backgroundColor: 'var(--color-white)',
      padding: isFeatured ? '36px 32px' : '24px',
      borderRadius: 'var(--radius-card)',
      boxShadow: isFeatured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      height: '100%'
    }}>
      <Quote
        size={36}
        color="rgba(0, 168, 204, 0.15)"
        style={{ position: 'absolute', top: '20px', right: '24px', pointerEvents: 'none' }}
      />

      <div>
        {/* Top Header: Badge & Date */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(0, 168, 204, 0.1)',
            color: 'var(--color-primary)',
            fontSize: '12px',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '6px'
          }}>
            {item.serviceTag}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {item.verified && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                color: '#16A34A',
                fontSize: '11px',
                fontWeight: 700
              }}>
                <CheckCircle size={13} /> Verified
              </span>
            )}
            <span style={{ fontSize: '12px', color: '#94A3B8' }}>• {item.date}</span>
          </div>
        </div>

        {/* Star Rating */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} size={18} fill="var(--color-accent-warning)" color="var(--color-accent-warning)" />
          ))}
        </div>

        {/* Comment Text */}
        <p style={{
          fontSize: isFeatured ? '17px' : '15px',
          color: 'var(--color-neutral-dark)',
          lineHeight: '1.6',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>
          "{item.comment}"
        </p>

        {/* Project Thumbnail Image Preview */}
        {item.projectPhoto && (
          <div style={{
            marginBottom: '20px',
            borderRadius: '10px',
            overflow: 'hidden',
            height: isFeatured ? '180px' : '130px',
            position: 'relative'
          }}>
            <img
              src={item.projectPhoto}
              alt={`${item.serviceTag} project`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              backgroundColor: 'rgba(15, 76, 129, 0.85)',
              color: '#FFF',
              fontSize: '11px',
              fontWeight: 600,
              padding: '3px 8px',
              borderRadius: '4px',
              backdropFilter: 'blur(4px)'
            }}>
              Completed Site Photo
            </div>
          </div>
        )}
      </div>

      {/* Footer: User Bio & Helpful Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '16px',
        borderTop: '1px solid #F1F5F9',
        marginTop: 'auto'
      }}>
        {/* User Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={item.avatar}
            alt={item.name}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--color-secondary)'
            }}
          />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>
              {item.name}
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              {item.role} • {item.location}
            </div>
          </div>
        </div>

        {/* Helpful Upvote Button */}
        <button
          onClick={onToggleLike}
          title="Mark review as helpful"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '9999px',
            border: isLiked ? '1px solid var(--color-secondary)' : '1px solid var(--color-border)',
            backgroundColor: isLiked ? 'rgba(0, 168, 204, 0.1)' : 'var(--color-neutral-light)',
            color: isLiked ? 'var(--color-secondary)' : '#64748B',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <ThumbsUp size={14} fill={isLiked ? 'var(--color-secondary)' : 'none'} />
          <span>{item.helpfulCount}</span>
        </button>
      </div>
    </div>
  );
}
