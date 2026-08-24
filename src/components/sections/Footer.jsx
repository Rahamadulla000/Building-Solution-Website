import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0A1A28',
      color: 'var(--color-white)',
      paddingTop: '60px',
      paddingBottom: '30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Link to="/" aria-label="Home">
                <Logo size={64} variant="badge" />
              </Link>
            </div>
            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>
              Premier waterproofing company providing guaranteed 100% leak-free solutions for residential, commercial, and industrial structures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '16px' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <Link to="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
              <a href="/#services" style={{ color: '#94A3B8', textDecoration: 'none' }}>Waterproofing Services</a>
              <a href="/#why-us" style={{ color: '#94A3B8', textDecoration: 'none' }}>Why Choose Us</a>
              <a href="/#projects" style={{ color: '#94A3B8', textDecoration: 'none' }}>Project Gallery</a>
              <a href="/#reviews" style={{ color: '#94A3B8', textDecoration: 'none' }}>Customer Reviews</a>
              <Link to="/contact" style={{ color: '#94A3B8', textDecoration: 'none' }}>Get Free Quote / Contact</Link>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '16px' }}>
              Specialist Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94A3B8' }}>
              <div>Terrace Waterproofing</div>
              <div>Bathroom Waterproofing</div>
              <div>Roof Waterproofing</div>
              <div>Basement Waterproofing</div>
              <div>Wall Leakage Treatment</div>
              <div>Industrial Waterproofing</div>
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '16px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--color-secondary)" />
                <span>{siteConfig.phoneDisplay}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--color-secondary)" />
                <span>{siteConfig.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--color-secondary)" style={{ marginTop: '3px' }} />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Divider */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          fontSize: '13px',
          color: '#64748B'
        }}>
          © {new Date().getFullYear()} Hi-One-Tech Waterproofing. All rights reserved. Built with precision and care.
        </div>
      </div>
    </footer>
  );
}
