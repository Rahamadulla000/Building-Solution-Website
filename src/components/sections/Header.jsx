import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Header({ onOpenQuoteModal, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', isRoute: true, path: '/', id: 'home' },
    { label: 'Services', isRoute: false, hash: '#services', id: 'services' },
    { label: 'Why Us', isRoute: false, hash: '#why-us', id: 'why-us' },
    { label: 'Projects', isRoute: false, hash: '#projects', id: 'projects' },
    { label: 'Reviews', isRoute: false, hash: '#reviews', id: 'reviews' },
    { label: 'Contact', isRoute: true, path: '/contact', id: 'contact' }
  ];

  const handleNavClick = (item, e) => {
    setIsMobileOpen(false);
    if (!item.isRoute) {
      e.preventDefault();
      if (isContactPage) {
        navigate('/');
        setTimeout(() => {
          const elem = document.querySelector(item.hash);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const elem = document.querySelector(item.hash);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isItemActive = (item) => {
    if (isContactPage) {
      return item.id === 'contact';
    }
    return activeSection === item.id;
  };

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
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} aria-label="Hi-One-Tech Building Solutions Home">
          <Logo size={56} variant="badge" />
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const style = {
              fontSize: '15px',
              fontWeight: active ? 700 : 500,
              color: active ? 'var(--color-secondary)' : 'var(--color-neutral-dark)',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)'
            };

            if (item.isRoute) {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  style={style}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.id}
                href={item.hash}
                onClick={(e) => handleNavClick(item, e)}
                style={style}
              >
                {item.label}
              </a>
            );
          })}
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
              color: 'var(--color-primary)',
              textDecoration: 'none'
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
          {navItems.map((item) => {
            const style = {
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-neutral-dark)',
              textDecoration: 'none',
              padding: '8px 0'
            };

            if (item.isRoute) {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  style={style}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.id}
                href={item.hash}
                onClick={(e) => handleNavClick(item, e)}
                style={style}
              >
                {item.label}
              </a>
            );
          })}
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
