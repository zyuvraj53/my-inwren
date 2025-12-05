// components/home/FeatureCard.js
'use client';

import {
  Brain,
  Workflow,
  Sparkles,
  Target,
  Server,
  Zap,
  FileCode,
  Activity,
} from 'lucide-react';

const ICONS = {
  Brain,
  Workflow,
  Sparkles,
  Target,
  Server,
  Zap,
  FileCode,
  Activity,
};

const TechnicalProofLine = ({ line }) => {
  const getLineStyle = (type) => {
    switch (type) {
      case 'prompt':
      case 'goal':
      case 'condition':
        return 'text-[#E1E1E1]';
      case 'arrow':
        return 'text-brand-orange';
      case 'output':
      case 'tag':
        return 'text-[#86efac]';
      case 'analyzing':
        return 'text-[#888888]';
      case 'prediction':
        return 'text-[#86efac]';
      case 'status':
        return 'text-green-400';
      case 'metric':
      case 'header':
        return 'text-[#86efac]';
      case 'template':
      case 'action':
        return 'text-[#E1E1E1]';
      case 'ab':
        return 'text-brand-orange';
      case 'webhook':
      case 'trace':
      case 'audit':
        return 'text-[#86efac]';
      default:
        return 'text-[#E1E1E1]';
    }
  };

  return (
    <div className={`font-mono text-xs ${getLineStyle(line.type)}`}>
      {line.text}
    </div>
  );
};

export default function FeatureCard({ feature }) {
  const Icon = ICONS[feature.icon];

  return (
    <div className="group relative shrink-0 w-[85vw] md:w-[400px] lg:w-[360px] snap-center">
      <div className="h-full glass-card rounded-2xl p-6 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,159,28,0.15)] flex flex-col">
        <div className="noise-overlay"></div>

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center border border-brand-orange/20">
            <Icon className="w-4 h-4 text-brand-orange" />
          </div>
          <span className="font-mono text-[10px] text-brand-orange uppercase tracking-wider px-2 py-1 mt-2 bg-brand-orange/10 rounded border border-brand-orange/20">
            {feature.tag}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{feature.headline}</h3>
        <p className="text-sm text-brand-textMuted leading-relaxed mb-6 grow">
          {feature.body}
        </p>

        {/* Technical Proof */}
        <div className="border-t border-brand-border/50 pt-4 mt-auto">
          <div className="space-y-1 bg-black/40 rounded-lg p-3 border border-brand-border/30">
            {feature.technicalProof.lines.map((line, idx) => (
              <TechnicalProofLine key={idx} line={line} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}