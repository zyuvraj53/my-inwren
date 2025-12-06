// components/home/AccordionSection.js
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

function AccordionItem({ feature, isOpen, onToggle }) {
  const IconComponent = LucideIcons[feature.icon] || LucideIcons.Circle;

  return (
    <div className="border-b border-brand-border last:border-b-0">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 flex-1 text-left">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-brand-orange" />
          </div>
          
          {/* Headline & Tag */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-lg font-semibold text-white">
                {feature.headline}
              </h3>
              <span className="px-2 py-0.5 text-xs font-mono bg-brand-orange/10 text-brand-orange rounded border border-brand-orange/20">
                {feature.tag}
              </span>
            </div>
            {!isOpen && (
              <p className="text-sm text-brand-textMuted line-clamp-1">
                {feature.body}
              </p>
            )}
          </div>
        </div>

        {/* Chevron */}
        <ChevronDown 
          className={`w-5 h-5 text-brand-textMuted transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pl-[88px]">
          {/* Body Text */}
          <p className="text-brand-textMuted leading-relaxed mb-4">
            {feature.body}
          </p>

          {/* Technical Proof Section */}
          <div className="bg-black/40 backdrop-blur-sm border border-brand-border rounded-lg p-4">
            <div className={
              feature.tag === 'AI_COMPOSER' || 
              feature.tag === 'AUTOMATION_MAP' || 
              feature.tag === 'BEHAVIOR_LOGIC' 
                ? 'flex items-center gap-3 flex-wrap' 
                : 'space-y-1.5'
            }>
              {feature.technicalProof.lines.map((line, idx) => (
                <div
                  key={idx}
                  className={`font-mono text-sm ${
                    line.type === 'arrow' 
                      ? 'text-brand-orange' + (
                          feature.tag === 'AI_COMPOSER' || 
                          feature.tag === 'AUTOMATION_MAP' || 
                          feature.tag === 'BEHAVIOR_LOGIC' 
                            ? '' 
                            : ' text-center py-1'
                        )
                      : line.type === 'output' || line.type === 'prediction' || line.type === 'tag'
                      ? 'text-[#86efac]'
                      : line.type === 'status' && line.text.includes('Green')
                      ? 'text-[#86efac]'
                      : line.type === 'analyzing'
                      ? 'text-brand-textMuted'
                      : 'text-brand-text'
                  } ${
                    feature.tag === 'AI_COMPOSER' || 
                    feature.tag === 'AUTOMATION_MAP' || 
                    feature.tag === 'BEHAVIOR_LOGIC' 
                      ? 'inline-block' 
                      : ''
                  }`}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccordionSection({ title, subtitle, features, id }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id={id} className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {title}
          </h2>
          <p className="text-brand-textMuted text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-white/[0.02] backdrop-blur-sm border border-brand-border rounded-xl overflow-hidden">
          {features.map((feature, index) => (
            <AccordionItem
              key={index}
              feature={feature}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}