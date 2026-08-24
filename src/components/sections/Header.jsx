import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Header({ onOpenQuoteModal, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'var(--glass-bg)' : 'var(--color-white)',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      borderBottom: '1px solid var(--color-border)',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} aria-label="Hi-One-Tech Building Solutions Home">
          <Logo size={56} variant="badge" />
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              style={{
                fontSize: '15px',
                fontWeight: activeSection === item.id ? 700 : 500,
                color: activeSection === item.id ? 'var(--color-secondary)' : 'var(--color-neutral-dark)',
                transition: 'color var(--transition-fast)'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-cta">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-primary)'
            }}
          >
            <Phone size={16} color="var(--color-secondary)" />
            {siteConfig.phoneDisplay}
          </a>
          <Button variant="primary" size="sm" onClick={onOpenQuoteModal}>
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-primary)',
            padding: '8px'
          }}
          className="mobile-hamburger-btn"
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: '24px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-neutral-dark)',
                padding: '8px 0'
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Button variant="secondary" size="md" href={`tel:${siteConfig.phoneRaw}`} icon={Phone}>
              Call {siteConfig.phoneDisplay}
            </Button>
            <Button variant="primary" size="md" onClick={() => { setIsMobileOpen(false); onOpenQuoteModal(); }}>
              Get Free Quote
            </Button>
          </div>
        </div>
      )}

      {/* Inline Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
