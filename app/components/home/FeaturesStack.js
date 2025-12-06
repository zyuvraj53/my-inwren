// components/home/FeaturesStack.js
'use client';

import { useEffect } from 'react';
import { useStackingCards } from '../../hooks/useScrollEffects';
import FeaturePanel from './FeaturePanel';

const featuresData = [
  {
    icon: 'shield-check',
    title: 'Deliverability Intelligence',
    description:
      'Stop guessing. Inwren runs every email through a full stack of AI guardrails that predict problems before they happen. You get clarity, confidence, and the highest chance of hitting the inbox.',
    features: [
      'Spam-trigger and content risk analysis',
      'Link + domain reputation scoring',
      'Layout and HTML structure validation',
      'Authentication alignment (SPF, DKIM, DMARC)',
      '<strong class="text-brand-orange">Inbox Score™</strong> — spam-folder probability with actionable fixes',
      'Readability, tone, and intent analysis',
    ],
    visual: (
      <div className="glass-card w-full max-w-lg aspect-square rounded-3xl p-8 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 blur-3xl"></div>
        <div className="text-6xl font-bold text-white mb-2">99.2%</div>
        <div className="text-brand-textMuted font-mono text-sm uppercase tracking-widest">
          Inbox Rate
        </div>
        <div className="flex items-end gap-2 h-32 mt-8">
          <div className="w-4 bg-brand-border h-[40%] rounded-t"></div>
          <div className="w-4 bg-brand-border h-[60%] rounded-t"></div>
          <div className="w-4 bg-brand-border h-[50%] rounded-t"></div>
          <div className="w-4 bg-brand-orange h-[90%] rounded-t shadow-[0_0_15px_#FF9F1C]"></div>
          <div className="w-4 bg-brand-border h-[70%] rounded-t"></div>
        </div>
      </div>
    ),
    order: 'text-first',
    gradient: 'bg-gradient-to-br from-[#111] to-[#050505]',
    zIndex: 'z-10',
  },
  {
    icon: 'shield',
    title: 'Reputation & Compliance Protection',
    description:
      'Your reputation is your power. Inwren protects it automatically, keeping your domain, IP, and compliance posture healthy at all times.',
    features: [
      'Automated IP warm-up and controlled ramping',
      'Smart throttling when risk spikes',
      'Blocklist + reputation monitoring across providers',
      'Complaint + bounce intelligence with real-time signals',
      'Built-in compliance guardrails for safer sending',
    ],
    visual: (
      <div className="glass-card w-full max-w-lg aspect-4/3 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full"></div>
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-brand-orange/30">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-mono text-sm">IP_WARMUP_STATUS</span>
            </div>
            <span className="text-brand-orange font-bold">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5">
            <span className="font-mono text-sm text-brand-textMuted">THROUGHPUT</span>
            <span className="text-white font-mono">4,200/min</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5">
            <span className="font-mono text-sm text-brand-textMuted">REPUTATION</span>
            <span className="text-green-400 font-mono">HIGH</span>
          </div>
        </div>
      </div>
    ),
    order: 'visual-first',
    gradient: 'bg-gradient-to-br from-[#1a0f00] to-[#050505]',
    zIndex: 'z-20',
  },
  {
    icon: 'workflow',
    title: 'Journey & Engagement Intelligence',
    description:
      'See how people actually flow through your emails — and let AI optimize every step. Inwren reveals behavior, predictively adjusts timing, and helps you build journeys that convert.',
    features: [
      'Drop-off and engagement pattern detection',
      'Intelligent journey improvement suggestions',
      'Behavior-triggered automation',
      'Dynamic send-time adjustments',
      'Engagement heatmaps and clickstream insights',
      'Real-time delivery + latency analytics',
    ],
    visual: (
      <div className="relative w-full max-w-lg">
        <div className="glass-card p-6 rounded-2xl mb-4 transform -rotate-2 translate-x-4 border-l-4 border-l-brand-orange">
          <div className="text-xs text-brand-textMuted uppercase mb-1">Click Rate</div>
          <div className="text-3xl font-bold text-white">
            4.8%<span className="text-sm text-green-500 ml-2">↑ 12%</span>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl transform rotate-2 -translate-x-4 z-10 relative bg-[#111]">
          <div className="text-xs text-brand-textMuted uppercase mb-1">Open Rate</div>
          <div className="text-3xl font-bold text-white">
            42.5%<span className="text-sm text-green-500 ml-2">↑ 5%</span>
          </div>
        </div>
      </div>
    ),
    order: 'text-first',
    gradient: 'bg-gradient-to-br from-[#050a14] to-[#020202]',
    zIndex: 'z-30',
  }
  // Removed the developer engine section entirely
];

export default function FeaturesStack() {
  useStackingCards();

  return (
    <section id="features" className="bg-brand-black">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-brand-orange/30 to-transparent"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center relative z-20">
        <p className="text-xs font-mono text-brand-orange uppercase tracking-widest mb-3">
          Platform Capabilities
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Everything You Need to Grow
        </h2>
        <p className="text-brand-textMuted max-w-2xl mx-auto text-lg">
          From inbox placement to real-time engagement and developer-grade delivery,
          Inwren gives you a complete growth engine — not just an email tool.
        </p>
      </div>

      {/* Stack Label */}
      <div
        id="features-stack-label"
        className="hidden md:block fixed top-[88px] left-1/2 -translate-x-1/2 z-40 pointer-events-none opacity-0 transition-opacity duration-300"
      >
        {/* <span className="px-4 py-2 rounded-full border border-brand-border bg-brand-black/70 backdrop-blur-md font-mono text-xs uppercase tracking-widest text-brand-textMuted">
          Everything You Need to Grow
        </span> */}
      </div>

      {/* Progress Dots */}
      <div
        id="feature-progress"
        className="hidden md:flex fixed top-24 left-1/2 -translate-x-1/2 z-40 gap-3 opacity-0 transition-opacity duration-300"
      >
        {[...Array(3)].map((_, i) => ( // Changed from 4 to 3
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-brand-border progress-dot"
          ></span>
        ))}
      </div>

      {/* Panels Container */}
      <div className="panels-container">
        {featuresData.map((feature, index) => (
          <FeaturePanel key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}