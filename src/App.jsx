import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Header } from './components/sections/Header';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Terrace Waterproofing');
  const navigate = useNavigate();

  const activeSection = useScrollSpy(['home', 'services', 'why-us', 'projects', 'reviews', 'contact'], 120);

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    navigate('/contact');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Global Header Navigation */}
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        activeSection={activeSection}
      />

      {/* 2. Main Page Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onSelectService={handleSelectService}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              preselectedService={selectedService}
            />
          }
        />
      </Routes>

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

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
