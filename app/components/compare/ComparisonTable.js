// components/compare/ComparisonTable.js

import React from 'react';

import PricingRow from '../compare/PricingRow';
import FeatureRow from '../compare/FeatureRow';
import { FEATURE_GROUPS, COMPETITOR_NAMES } from '../../data/comparisonData';

export default function ComparisonTable({ currentData, selectedTier, tierLabel }) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-12">
      <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-[#333]">
        <div className="overflow-x-auto scrollbar-custom">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            
            {/* STICKY HEADER */}
            <thead className="sticky top-0 z-40 bg-[#050505] shadow-lg">
              <tr className="border-b border-[#333]">
                {/* Feature Column Header */}
                <th className="p-6 w-[250px] bg-[#0A0A0A] border-r border-[#222] align-bottom">
                  <span className="text-xs font-mono text-[#666] uppercase tracking-wider block">
                    Compare Features
                  </span>
                </th>

                {/* INWREN Header */}
                <th className="p-6 w-[200px] bg-[#161616] border-t-4 border-t-[#FF9F1C] border-r border-[#222] align-bottom">
                  <span className="text-[#FF9F1C] text-sm font-bold uppercase tracking-wider block mb-1">
                    INWREN
                  </span>
                </th>

                {/* Competitor Headers */}
                {Object.entries(COMPETITOR_NAMES).map(([key, name]) => (
                  <th
                    key={key}
                    className="p-6 w-[180px] bg-[#0A0A0A] border-r border-[#222] align-bottom text-center"
                  >
                    <span className="text-[#666] text-sm font-bold uppercase tracking-wider block">
                      {name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* PRICING ROW */}
              <PricingRow
                currentData={currentData}
                selectedTier={selectedTier}
                tierLabel={tierLabel}
              />

              {/* FEATURE GROUPS */}
              {FEATURE_GROUPS.map((group, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  {/* Group Header */}
                  <tr>
                    <td
                      colSpan="6"
                      className="py-3 px-6 bg-[#111] border-y border-[#222] sticky left-0 z-20"
                    >
                      <span className="text-[#FF9F1C] font-mono text-[10px] font-bold uppercase tracking-widest">
                        {group.title}
                      </span>
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {group.features.map((feature, rowIdx) => (
                    <FeatureRow key={rowIdx} feature={feature} />
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 12px;
          background: #0a0a0a;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 6px;
          border: 3px solid #0a0a0a;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #ff9f1c;
        }
      `}</style>
    </div>
  );
}