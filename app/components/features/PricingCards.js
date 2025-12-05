// components/features/PricingCards.js
'use client';

import { useEffect, useState } from 'react';
import PricingCard from './PricingCard';

export default function PricingCards({ plans, selectedContacts, currency, billingCycle }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-5 pt-10 pb-2 transition-all duration-300 ${
        isSticky
          ? 'sticky top-0 z-30 bg-[#050505]/95 backdrop-blur-md border-b border-[#1E1E1E]'
          : ''
      }`}
    >
      {/* Intro / CTA Column */}
      <div className="hidden md:flex col-span-1 flex-col justify-end pr-6 pb-6 border-r border-transparent">
        {isSticky ? (
          <span className="font-bold text-xl text-white">Compare Plans</span>
        ) : (
          <div className="text-sm text-[#888888] italic">
            All plans include 24/7 access to our knowledge base and community.
          </div>
        )}
      </div>

      {/* Plan Columns */}
      {plans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          selectedContacts={selectedContacts}
          currency={currency}
          billingCycle={billingCycle}
          isSticky={isSticky}
        />
      ))}
    </div>
  );
}