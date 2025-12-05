// components/compare/PricingRow.js
'use client';

import React from 'react';

import { useEffect, useState } from 'react';
import { COMPETITORS, COMPETITOR_NAMES } from '../../data/comparisonData';
import { getMaxPrice, calculatePricePercentage } from '../../utils/pricing';

export default function PricingRow({ currentData, selectedTier, tierLabel }) {
  const [animate, setAnimate] = useState(false);
  const maxPrice = getMaxPrice(currentData);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [selectedTier]);

  return (
    <tr className="bg-[#0A0A0A] border-b border-[#333]">
      {/* Feature Name Cell */}
      <td className="p-6 border-r border-[#222] bg-[#0A0A0A] align-middle">
        <span className="text-white font-bold text-lg block">Monthly Cost</span>
        <span className="text-[#666] text-xs">
          Estimated based on {tierLabel} contacts
        </span>
      </td>

      {/* INWREN Price Cell */}
      <td className="p-6 border-r border-[#222] bg-[#161616] align-bottom relative">
        <span className="text-3xl font-bold text-white block mb-2">
          ${currentData.inwren.toFixed(2)}
        </span>
        <div className="h-1.5 w-full bg-[#333] rounded-full overflow-hidden mb-1">
          <div
            className={`h-full bg-[#FF9F1C] transition-all duration-1000 ease-out ${
              animate ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: animate
                ? `${calculatePricePercentage(currentData.inwren, maxPrice)}%`
                : '0%',
            }}
          ></div>
        </div>
        <span className="text-[#FF9F1C] text-[10px] font-bold uppercase">
          Best Value
        </span>
      </td>

      {/* Competitor Price Cells */}
      {COMPETITORS.map((comp) => (
        <td
          key={comp}
          className="p-6 border-r border-[#222] align-bottom text-center"
        >
          <span className="text-2xl font-bold text-[#888] block mb-2">
            ${currentData[comp]}
          </span>
          <div className="h-1.5 w-full bg-[#222] rounded-full overflow-hidden mx-auto">
            <div
              className={`h-full bg-[#444] transition-all duration-1000 ease-out ${
                animate ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                width: animate
                  ? `${calculatePricePercentage(currentData[comp], maxPrice)}%`
                  : '0%',
              }}
            ></div>
          </div>
        </td>
      ))}
    </tr>
  );
}