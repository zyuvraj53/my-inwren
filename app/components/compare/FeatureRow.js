// components/compare/FeatureRow.js
'use client';

import { Info } from 'lucide-react';
import { useState } from 'react';
import StatusBadge from './StatusBadge';
import { COMPETITORS } from '../../data/comparisonData';

export default function FeatureRow({ feature }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <tr className="hover:bg-[#161616] transition-colors group">
      {/* Feature Name Cell with Tooltip */}
      <td className="py-5 px-6 border-b border-[#222] bg-[#0A0A0A] border-r border-[#222] sticky left-0 z-30">
        <div className="flex items-center gap-2">
          <span className="block font-bold text-[#E1E1E1] text-sm">
            {feature.name}
          </span>
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Info className="w-3.5 h-3.5 cursor-help text-[#444] hover:text-[#888] transition-colors" />
            
            {showTooltip && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 p-3 bg-[#1A1A1A] border border-[#333] rounded-lg shadow-xl text-[11px] text-[#ccc] leading-snug z-50 whitespace-normal">
                {feature.desc}
                <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1A1A1A] border-l border-t border-[#333] -rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </td>

      {/* INWREN Cell - Highlighted */}
      <td className="py-5 px-4 border-b border-[#222] bg-[#161616] group-hover:bg-[#1a1a1a] text-center border-r border-[#222]">
        <StatusBadge status={feature.inwren} />
      </td>

      {/* Competitor Cells */}
      {COMPETITORS.map((comp) => (
        <td
          key={comp}
          className="py-5 px-4 border-b border-[#222] text-center border-r border-[#222]"
        >
          <StatusBadge status={feature[comp]} />
        </td>
      ))}
    </tr>
  );
}