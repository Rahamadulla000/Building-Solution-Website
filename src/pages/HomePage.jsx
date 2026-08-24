import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStats } from '../components/sections/TrustStats';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Gallery } from '../components/sections/Gallery';
import { Testimonials } from '../components/sections/Testimonials';

export function HomePage({ onOpenQuoteModal, onSelectService }) {
  return (
    <main style={{ flex: 1 }}>
      <Hero onOpenQuoteModal={onOpenQuoteModal} />
      <TrustStats />
      <Services onSelectService={onSelectService} />
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />
      <Gallery />
      <Testimonials />
    </main>
  );
}

export default HomePage;
