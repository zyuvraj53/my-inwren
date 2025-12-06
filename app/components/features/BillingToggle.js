// components/features/BillingToggle.js
'use client';

export default function BillingToggle({ billingCycle, onBillingChange }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`text-sm font-mono ${
          billingCycle === 'monthly' ? 'text-white' : 'text-brand-text-muted'
        }`}
      >
        Monthly
      </span>
      
      <button
        onClick={onBillingChange}
        className="w-12 h-6 bg-brand-border rounded-full relative transition-colors border border-[#333] flex items-center"
      >
        <div
          className={`absolute w-4 h-4 bg-brand-orange rounded-full transition-transform duration-300 ${
            billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
          }`}
        ></div>
      </button>
      
      <span
        className={`text-sm font-mono ${
          billingCycle === 'yearly' ? 'text-white' : 'text-brand-text-muted'
        }`}
      >
        Yearly <span className="text-brand-text text-xs ml-1">-20%</span>
      </span>
    </div>
  );
}