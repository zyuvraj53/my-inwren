// app/page.js
'use client';

import { useState } from 'react';
import Loader from './components/home/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/home/LogoStrip';
import HowItWorks from './components/home/HowItWorks';
import FeaturesStack from './components/home/FeaturesStack';
import AIIntelligenceSection from './components/home/AIIntelligenceSection';
import DeveloperEngineSection from './components/home/DeveloperEngineSection';
import Pricing from './components/home/Pricing';
import Footer from './components/Footer';
import {
  useHeroAnimations,
  useSectionAnimations,
  useMagneticButtons,
  use3DTilt,
} from './hooks/useAnimations';
import { usePricingSpotlight } from './hooks/useScrollEffects';

export default function HomePage() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  // Initialize animations
  useHeroAnimations();
  useSectionAnimations();
  useMagneticButtons('.magnetic-btn', 0.15);
  use3DTilt('.dashboard-tilt', 8);
  usePricingSpotlight('.pricing-card');

  const handleLoaderComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <>
      {!loaderComplete && <Loader onComplete={handleLoaderComplete} />}
      <Navbar />

      <div id="page-blur-wrapper">
        <Hero isLoaderComplete={loaderComplete} />
        <LogoStrip />
        <HowItWorks />
      </div>

      <FeaturesStack />

      {/* New Accordion Sections */}
      <AIIntelligenceSection />
      <DeveloperEngineSection />

      <div id="page-blur-wrapper-2">
        <Pricing />
      </div>

      <Footer />
    </>
  );
}