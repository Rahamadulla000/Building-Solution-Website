import React, { useState } from 'react';
import { Star, CheckCircle, Upload } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';

export function WriteReviewModal({ isOpen, onClose, onAddReview }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Homeowner');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('terrace');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      name: name || 'Valued Client',
      role: role || 'Property Owner',
      location: location || 'Bangalore',
      category,
      serviceTag: category === 'terrace' ? 'Terrace Waterproofing' :
                  category === 'basement' ? 'Basement Pressure Grouting' :
                  category === 'wall_bathroom' ? 'Wall & Bathroom Seepage Treatment' : 'Commercial Waterproofing',
      verified: true,
      date: 'Just Now',
      rating,
      helpfulCount: 0,
      comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      projectPhoto: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    };

    if (onAddReview) {
      onAddReview(newReview);
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setLocation('');
      setComment('');
      onClose();
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Your Waterproofing Experience">
      {isSubmitted ? (
        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
          <CheckCircle size={56} color="var(--color-secondary)" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>
            Thank You for Your Feedback!
          </h3>
          <p style={{ fontSize: '14px', color: '#64748B' }}>
            Your review has been submitted and verified. We appreciate your trust in Hi-One-Tech!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Star Selection */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
              Your Rating *
            </label>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    transition: 'transform 0.15s ease'
                  }}
                >
                  <Star
                    size={32}
                    fill={(hoverRating || rating) >= star ? 'var(--color-accent-warning)' : 'none'}
                    color={(hoverRating || rating) >= star ? 'var(--color-accent-warning)' : '#CBD5E1'}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  fontSize: '14px'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Location / Layout
              </label>
              <input
                type="text"
                placeholder="e.g. HSR Layout, Bangalore"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Role / Property Type
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  fontSize: '14px',
                  backgroundColor: '#FFF'
                }}
              >
                <option value="Homeowner">Homeowner</option>
                <option value="Villa Owner">Villa Owner</option>
                <option value="Property Manager">Property Manager</option>
                <option value="Architect / Engineer">Architect / Engineer</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Service Received
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  fontSize: '14px',
                  backgroundColor: '#FFF'
                }}
              >
                <option value="terrace">Terrace Waterproofing</option>
                <option value="basement">Basement & Foundation</option>
                <option value="wall_bathroom">Wall & Bathroom Seepage</option>
                <option value="commercial">Commercial / Industrial Roof</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
              Your Review *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about the issue you faced and how our team solved it..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Optional Image Upload Mock */}
          <div style={{
            border: '2px dashed var(--color-border)',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            marginBottom: '24px',
            backgroundColor: '#F8FAFC',
            cursor: 'pointer'
          }}>
            <Upload size={24} color="var(--color-secondary)" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Attach Project Photo (Optional)
            </div>
            <div style={{ fontSize: '12px', color: '#94A3B8' }}>PNG, JPG up to 5MB</div>
          </div>

          <Button type="submit" variant="primary" size="md" style={{ width: '100%', justifyContent: 'center' }}>
            Submit Verified Review
          </Button>
        </form>
      )}
    </Modal>
  );
}
