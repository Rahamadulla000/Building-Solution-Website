import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/servicesData';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export function ContactForm({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    service: preselectedService || 'Terrace Waterproofing',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+ \-()]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          propertyType: 'Residential',
          service: 'Terrace Waterproofing',
          message: ''
        });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <SectionHeader
          badge="Get Free Quote"
          title="Schedule Your Free Site Inspection"
          subtitle="Fill out the form below or contact us directly. Our waterproofing expert will call you back within 15 minutes."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Left Column: Direct Contact Info Rail */}
          <div style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            padding: '40px 32px',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--color-secondary)' }}>
              Direct Contact
            </h3>
            <p style={{ fontSize: '15px', opacity: 0.9, lineHeight: '1.6', marginBottom: '32px' }}>
              Have an urgent roof or basement leakage emergency? Call our hotline for immediate technical dispatch.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Phone size={24} color="var(--color-secondary)" style={{ marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Phone Hotline</div>
                  <a href={`tel:${siteConfig.phoneRaw}`} style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-white)' }}>
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Mail size={24} color="var(--color-secondary)" style={{ marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Email Inquiry</div>
                  <a href={`mailto:${siteConfig.email}`} style={{ fontSize: '15px', color: 'var(--color-white)' }}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <MapPin size={24} color="var(--color-secondary)" style={{ marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Office Address</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.5', opacity: 0.9 }}>
                    {siteConfig.address}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Clock size={24} color="var(--color-secondary)" style={{ marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Working Hours</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>
                    {siteConfig.operatingHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            padding: '40px 32px',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={64} color="var(--color-success)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '24px', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '8px' }}>
                  Inquiry Received!
                </h3>
                <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.6' }}>
                  Thank you, {formData.name || 'Valued Customer'}! Our waterproofing expert will call you shortly on your provided phone number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--color-neutral-dark)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-input)',
                        border: errors.name ? '2px solid #EF4444' : '1px solid var(--color-border)',
                        outline: 'none',
                        fontSize: '15px'
                      }}
                    />
                    {errors.name && <span style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--color-neutral-dark)', marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-input)',
                        border: errors.phone ? '2px solid #EF4444' : '1px solid var(--color-border)',
                        outline: 'none',
                        fontSize: '15px'
                      }}
                    />
                    {errors.phone && <span style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--color-neutral-dark)', marginBottom: '6px' }}>
                    Waterproofing Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-input)',
                      border: '1px solid var(--color-border)',
                      outline: 'none',
                      fontSize: '15px',
                      backgroundColor: 'var(--color-white)'
                    }}
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--color-neutral-dark)', marginBottom: '6px' }}>
                    Property Type
                  </label>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    {['Residential', 'Commercial', 'Industrial'].map((type) => (
                      <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="propertyType"
                          checked={formData.propertyType === type}
                          onChange={() => setFormData({ ...formData, propertyType: type })}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--color-neutral-dark)', marginBottom: '6px' }}>
                    Inspection Notes / Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your leakage issue or property dimensions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-input)',
                      border: '1px solid var(--color-border)',
                      outline: 'none',
                      fontSize: '15px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" icon={Send} style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Inquiry for Free Inspection
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
