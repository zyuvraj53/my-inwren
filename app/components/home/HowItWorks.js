// components/home/HowItWorks.js
import { Layers } from 'lucide-react';

const steps = [
  {
    number: '01',
    label: 'CONNECT',
    title: 'Connect Your Domain',
    description: 'Our setup assistant verifies your domain (SPF/DKIM) instantly.',
  },
  {
    number: '02',
    label: 'BUILD',
    title: 'Create Campaigns',
    description:
      'Drag, drop, and design. Use AI-suggested "Blueprints" to launch instantly.',
  },
  {
    number: '03',
    label: 'GROW',
    title: 'Analyze & Scale',
    description:
      'See who clicks what with visual heatmaps and turn raw data into insights.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:flex md:justify-between md:items-end border-b border-brand-border pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Streamlined Workflow
            </h2>
            <p className="text-brand-textMuted max-w-md">
              INWREN turns complex email operations into a simple 3-step system.
            </p>
          </div>
          <div className="hidden md:block">
            <Layers className="w-12 h-12 text-brand-border" />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-8 border border-brand-border bg-brand-surface rounded-2xl hover:border-brand-orange transition-colors duration-300 relative overflow-hidden"
            >
              <div className="noise-overlay"></div>
              <div className="font-mono text-brand-orange mb-6 text-xs border border-brand-orange/20 inline-block px-2 py-1 rounded bg-brand-orange/5">
                {step.number}_{step.label}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-brand-textMuted text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="h-0.5 w-full bg-brand-border mt-auto overflow-hidden absolute bottom-0 left-0">
                <div
                  className="h-full bg-brand-orange w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 100}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}