import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { ContactForm } from '../components/sections/ContactForm';

export function ContactPage({ preselectedService }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ flex: 1, paddingTop: '100px', backgroundColor: 'var(--color-neutral-light)' }}>
      {/* Top Breadcrumb / Back to Home bar */}
      <div className="container" style={{ marginBottom: '20px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--color-primary)',
            backgroundColor: 'var(--color-white)',
            padding: '8px 16px',
            borderRadius: '9999px',
            border: '1px solid var(--color-border)',
            textDecoration: 'none',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <ArrowLeft size={16} color="var(--color-secondary)" />
          <Home size={16} color="var(--color-primary)" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Standalone Contact Form Section */}
      <ContactForm preselectedService={preselectedService} />
    </main>
  );
}

export default ContactPage;
