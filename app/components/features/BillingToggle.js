// components/features/BillingToggle.js
'use client';

export default function BillingToggle({ billingCycle, onBillingChange }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`text-sm font-mono ${
          billingCycle === 'monthly' ? 'text-white' : 'text-[#888888]'
        }`}
      >
        Monthly
      </span>
      
      <button
        onClick={onBillingChange}
        className="w-12 h-6 bg-[#1E1E1E] rounded-full relative transition-colors border border-[#333]"
      >
        <div
          className={`absolute top-[2px] left-[2px] w-4 h-4 bg-[#FF9F1C] rounded-full transition-transform duration-300 ${
            billingCycle === 'yearly' ? 'translate-x-6' : ''
          }`}
        ></div>
      </button>
      
      <span
        className={`text-sm font-mono ${
          billingCycle === 'yearly' ? 'text-white' : 'text-[#888888]'
        }`}
      >
        Yearly <span className="text-[#FF9F1C] text-xs ml-1">-20%</span>
      </span>
    </div>
  );
}