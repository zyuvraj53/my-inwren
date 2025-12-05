// components/features/PricingCard.js
'use client';

import { Rocket, Sparkles, Zap, Server } from 'lucide-react';
import {
  calculatePlanPrice,
  formatCurrency,
  getCurrencySymbol,
  isPlanAvailable,
} from '../../utils/featurePricing';

const ICONS = {
  Rocket: Rocket,
  Sparkles: Sparkles,
  Zap: Zap,
  Server: Server,
};

export default function PricingCard({
  plan,
  selectedContacts,
  currency,
  billingCycle,
  isSticky,
}) {
  const Icon = ICONS[plan.icon];
  const isAvailable = isPlanAvailable(plan, selectedContacts);

  const price = calculatePlanPrice(plan, selectedContacts, currency, billingCycle);
  const displayPrice = formatCurrency(price, currency);
  const symbol = getCurrencySymbol(currency);

  return (
    <div
      className={`
        col-span-1 px-6 flex flex-col border-r border-[#1E1E1E] last:border-0 relative transition-all duration-300
        ${
          plan.highlight
            ? 'bg-[#121212] border-[#FF9F1C] border-l border-r z-10 -my-4 py-4 rounded-lg pricing-card-growth'
            : 'py-2'
        }
        ${!isAvailable ? 'opacity-30 grayscale pointer-events-none' : ''}
      `}
    >
      {/* Popular Badge */}
      {plan.highlight && !isSticky && isAvailable && (
        <div className="absolute top-0 right-0 bg-[#FF9F1C] text-black text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="mb-4 pt-2">
        <div className="flex items-center gap-2 mb-2">
          <Icon
            className={`w-5 h-5 ${
              plan.highlight ? 'text-[#FF9F1C]' : 'text-[#888888]'
            }`}
          />
          <h3
            className={`text-lg font-bold ${
              plan.highlight ? 'text-white' : 'text-[#E1E1E1]'
            }`}
          >
            {plan.name}
          </h3>
        </div>
        {!isSticky && (
          <p className="text-xs font-mono text-[#888888] min-h-[32px] leading-tight">
            {plan.description}
          </p>
        )}
      </div>

      {/* Pricing */}
      <div className="mb-4 mt-auto">
        {isAvailable ? (
          <>
            {displayPrice !== null ? (
              <div className="flex items-baseline mb-4">
                <span
                  className={`text-3xl font-bold tracking-tight ${
                    plan.highlight ? 'text-[#FF9F1C]' : 'text-white'
                  }`}
                >
                  {symbol}
                  {displayPrice}
                </span>
                <span className="text-[#888888] text-xs font-mono ml-1">/mo</span>
              </div>
            ) : (
              <div className="flex items-center h-[52px] mb-4">
                <span className="text-2xl font-bold text-white">Let's Talk</span>
              </div>
            )}

            {plan.highlight ? (
              <button className="btn-shine w-full py-3 rounded bg-[#FF9F1C] text-black font-bold text-sm hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,159,28,0.3)]">
                {displayPrice !== null ? 'Start Growth' : 'Contact Sales'}
              </button>
            ) : (
              <button className="btn-shine w-full py-3 rounded border border-[#1E1E1E] text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                {displayPrice !== null
                  ? price < 1000
                    ? 'Start Basic'
                    : 'Get Ultra'
                  : 'Contact Sales'}
              </button>
            )}
          </>
        ) : (
          <div className="pt-2">
            <div className="text-lg font-bold text-[#333] mb-3">Unavailable</div>
            <button
              disabled
              className="w-full py-3 rounded border border-[#1E1E1E] bg-transparent text-[#333] font-mono text-xs cursor-not-allowed"
            >
              Limit Exceeded
            </button>
            {!isSticky && (
              <p className="text-[10px] text-red-900/50 mt-2 font-mono">
                Max: {plan.maxContacts.toLocaleString()}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Add CSS for pricing card growth hover effect
export const pricingCardStyles = `
  .pricing-card-growth {
    box-shadow: 0 0 30px rgba(255, 159, 28, 0.05);
  }
  
  .pricing-card-growth:hover {
    box-shadow: 0 0 40px rgba(255, 159, 28, 0.15);
    border-color: #FF9F1C;
  }
`;