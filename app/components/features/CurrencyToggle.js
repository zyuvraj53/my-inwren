// components/features/CurrencyToggle.js
'use client';

import { MapPin } from 'lucide-react';
import { useMemo } from 'react';

export default function CurrencyToggle({ currency, onCurrencyChange, detectedCountry, isLoading }) {
  const countryData = {
    IN: { name: 'India', currency: 'INR' },
    US: { name: 'United States', currency: 'USD' },
    GB: { name: 'United Kingdom', currency: 'GBP' },
    CA: { name: 'Canada', currency: 'CAD' },
    AU: { name: 'Australia', currency: 'AUD' },
    SG: { name: 'Singapore', currency: 'SGD' },
    AE: { name: 'UAE', currency: 'AED' },
    EU: { name: 'Europe', currency: 'EUR' },
    JP: { name: 'Japan', currency: 'JPY' },
    CN: { name: 'China', currency: 'CNY' },
    BR: { name: 'Brazil', currency: 'BRL' },
    MX: { name: 'Mexico', currency: 'MXN' },
  };

  // Build currency list dynamically
  const currencies = useMemo(() => {
    const baseCurrencies = ['USD'];
    
    if (detectedCountry && countryData[detectedCountry]) {
      const detectedCurrency = countryData[detectedCountry].currency;
      
      // Add detected currency if it's not already in the list
      if (!baseCurrencies.includes(detectedCurrency)) {
        return [...baseCurrencies, detectedCurrency];
      }
    }
    
    return baseCurrencies;
  }, [detectedCountry]);

  const getCountryName = (countryCode) => {
    return countryData[countryCode]?.name || countryCode;
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex bg-brand-border p-1 rounded-md border border-[#333] shadow-sm w-fit">
        {currencies.map((curr) => (
          <button
            key={curr}
            onClick={() => onCurrencyChange(curr)}
            className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all flex-shrink-0 ${
              currency === curr
                ? 'bg-[#333] text-white shadow'
                : 'text-[#666] hover:text-[#999]'
            }`}
          >
            {curr}
          </button>
        ))}
      </div>
      
      {/* Location Indicator */}
      {detectedCountry && !isLoading && (
        <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#666] w-full">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="text-center">
            Detected: {getCountryName(detectedCountry)}
          </span>
        </div>
      )}
      
      {isLoading && (
        <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#666] w-full">
          <div className="w-3 h-3 border-2 border-[#666] border-t-transparent rounded-full animate-spin flex-shrink-0" />
          <span>Detecting location...</span>
        </div>
      )}
    </div>
  );
}