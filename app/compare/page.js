// app/compare/page.js
'use client';

import { useState } from 'react';
import CompareHero from '../components/compare/CompareHero';
import TierSelector from '../components/compare/TierSelector';
import ComparisonTable from '../components/compare/ComparisonTable';
import CompareCTA from '../components/compare/CompareCTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TIERS, MARKET_DATA } from '../data/comparisonData';

export default function ComparePage() {
  const [selectedTier, setSelectedTier] = useState('50k');

  const currentData = MARKET_DATA[selectedTier];
  const tierLabel = TIERS.find((t) => t.value === selectedTier)?.label || '50,000';

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen">
        <CompareHero />
        
        <TierSelector
          tiers={TIERS}
          selectedTier={selectedTier}
          onTierChange={setSelectedTier}
        />

        <ComparisonTable
          currentData={currentData}
          selectedTier={selectedTier}
          tierLabel={tierLabel}
        />

        <CompareCTA />
      </div>

      <Footer />
    </>
  );
}