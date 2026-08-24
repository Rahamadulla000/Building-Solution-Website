import React, { useState } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { TrustStats } from './components/sections/TrustStats';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Terrace Waterproofing');

  const activeSection = useScrollSpy(['home', 'services', 'why-us', 'projects', 'reviews', 'contact'], 120);

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header Navigation */}
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        activeSection={activeSection}
      />

      {/* 2. Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <TrustStats />
        <Services onSelectService={handleSelectService} />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ContactForm preselectedService={selectedService} />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Persistent Quick Actions */}
      <FloatingWhatsApp />

      {/* 5. Quick Quote Popup Modal */}
      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Request Free Site Inspection"
      >
        <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
          Leave your phone number below and an AquaShield waterproofing technician will call you within 15 minutes.
        </p>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! Our expert will call you shortly.");
          setIsQuoteModalOpen(false);
        }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="Full Name"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)'
              }}
            />
          </div>

          <Button type="submit" variant="primary" size="md" style={{ width: '100%', justifyContent: 'center' }}>
            Call Me Back
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
