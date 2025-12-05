// components/features/FeatureRow.js
'use client';

import { Check } from 'lucide-react';

const CheckMark = ({ highlight }) => (
  <div className="flex justify-center">
    <Check
      size={18}
      className={highlight ? 'text-black' : 'text-[#FF9F1C]'}
      strokeWidth={3}
    />
  </div>
);

const CrossMark = () => (
  <div className="flex justify-center">
    <div className="w-3 h-[2px] bg-[#333333]"></div>
  </div>
);

const TextValue = ({ text, highlight }) => (
  <span
    className={`text-xs font-mono font-medium text-center block ${
      highlight ? 'text-black' : 'text-[#E1E1E1]'
    }`}
  >
    {text}
  </span>
);

export default function FeatureRow({ name, launch, growth, ultra, enterprise }) {
  const renderCell = (value, isGrowthCol) => {
    if (value === true) return <CheckMark highlight={isGrowthCol && false} />;
    if (value === false) return <CrossMark />;
    return <TextValue text={value} highlight={isGrowthCol && false} />;
  };

  return (
    <div className="grid grid-cols-5 border-b border-[#1E1E1E] hover:bg-[#121212] transition-colors group">
      <div className="col-span-1 py-4 pr-4 pl-4 text-sm text-[#888888] font-medium flex items-center border-r border-[#1E1E1E] bg-[#050505] sticky left-0 z-10 group-hover:text-[#E1E1E1] transition-colors">
        {name}
      </div>
      <div className="col-span-1 py-4 px-2 flex items-center justify-center border-r border-[#1E1E1E]">
        {renderCell(launch, false)}
      </div>
      <div className="col-span-1 py-4 px-2 flex items-center justify-center border-r border-[#1E1E1E] bg-[#FF9F1C]/[0.03]">
        {renderCell(growth, true)}
      </div>
      <div className="col-span-1 py-4 px-2 flex items-center justify-center border-r border-[#1E1E1E]">
        {renderCell(ultra, false)}
      </div>
      <div className="col-span-1 py-4 px-2 flex items-center justify-center">
        {renderCell(enterprise, false)}
      </div>
    </div>
  );
}