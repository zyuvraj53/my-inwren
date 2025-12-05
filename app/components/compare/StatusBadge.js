// components/compare/StatusBadge.js
import { Check, X } from 'lucide-react';

export default function StatusBadge({ status }) {
  // Boolean true - included
  if (status === true) {
    return (
      <div className="inline-flex items-center gap-1.5 text-[#FF9F1C] bg-[#FF9F1C]/10 px-3 py-1 rounded-full text-xs font-bold border border-[#FF9F1C]/20">
        <Check className="w-4 h-4" />
        Included
      </div>
    );
  }

  // Boolean false - not available
  if (status === false) {
    return (
      <div className="inline-flex items-center gap-1.5 text-[#444] px-3 py-1 rounded-full text-xs font-medium">
        <X className="w-4 h-4" />
      </div>
    );
  }

  // String status - color-code based on keywords
  const negativeKeywords = [
    'Add-on',
    'Charge',
    'Based',
    'Premium',
    'Limited',
    '$',
    'Manual',
    'Ticket',
    'Self-Service',
    'Email Only',
  ];
  const positiveKeywords = ['Flat', 'Included', 'Automated', 'Strict', 'Free'];

  const isNegative = negativeKeywords.some((key) => status.includes(key));
  const isPositive = positiveKeywords.some((key) => status.includes(key));

  const colorClass = isNegative
    ? 'text-red-400 bg-red-500/5'
    : isPositive
    ? 'text-green-400 bg-green-500/10'
    : 'text-[#888]';

  return (
    <span className={`text-xs font-bold px-2 py-1 rounded whitespace-nowrap ${colorClass}`}>
      {status}
    </span>
  );
}