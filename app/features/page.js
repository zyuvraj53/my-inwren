// app/features/page.js
'use client';

import { useState, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturesHero from '../components/features/FeaturesHero';
import ContactSlider from '../components/features/ContactSlider';
import CurrencyToggle from '../components/features/CurrencyToggle';
import BillingToggle from '../components/features/BillingToggle';
import PricingCards from '../components/features/PricingCards';
import FeaturesTable from '../components/features/FeaturesTable';
import FeaturesCTA from '../components/features/FeaturesCTA';
import { CONTACT_TIERS, PLANS, FEATURES_DATA } from '../data/featuresData';

export default function FeaturesPage() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [currency, setCurrency] = useState('INR');

  // Get user's location and auto-set currency
  const { country, currency: detectedCurrency, isLoading } = useGeolocation();

  // Auto-set currency based on detected location (only once on mount)
  useEffect(() => {
    if (detectedCurrency && !isLoading) {
      setCurrency(detectedCurrency);
    }
  }, [detectedCurrency, isLoading]);

  const selectedTier = CONTACT_TIERS[sliderIndex];

  return (
    <>
      <Navbar />

      <div className="min-h-screen">
        <FeaturesHero />

        {/* Controls Section */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-end gap-12 mt-10 mb-8">
            {/* Contact Slider */}
            <ContactSlider
              tiers={CONTACT_TIERS}
              sliderIndex={sliderIndex}
              onSliderChange={setSliderIndex}
            />

            {/* Toggles Container */}
            <div className="flex flex-col items-center md:items-end gap-4">
              {/* Currency Toggle */}
              <CurrencyToggle
                currency={currency}
                onCurrencyChange={setCurrency}
                detectedCountry={country}
                isLoading={isLoading}
              />

              {/* Billing Toggle */}
              <BillingToggle
                billingCycle={billingCycle}
                onBillingChange={() =>
                  setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')
                }
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Pricing Cards */}
          <PricingCards
            plans={PLANS}
            selectedContacts={selectedTier.value}
            currency={currency}
            billingCycle={billingCycle}
          />

          {/* Features Table */}
          <FeaturesTable featuresData={FEATURES_DATA} />

          {/* CTA */}
          <FeaturesCTA />
        </div>
      </div>

      <Footer />
    </>
  );
}