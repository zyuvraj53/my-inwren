// components/compare/TierSelector.js

export default function TierSelector({ tiers, selectedTier, onTierChange }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-[#0A0A0A] p-1 rounded-lg border border-[#333]">
        {tiers.map((tier) => (
          <button
            key={tier.value}
            onClick={() => onTierChange(tier.value)}
            className={`px-3 md:px-6 py-2 rounded-md text-xs md:text-sm font-mono transition-all ${
              selectedTier === tier.value
                ? 'bg-[#333] text-white shadow-sm font-bold'
                : 'text-[#666] hover:text-[#aaa]'
            }`}
          >
            {tier.value} contacts
          </button>
        ))}
      </div>
    </div>
  );
}