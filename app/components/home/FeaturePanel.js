// components/home/FeaturePanel.js
import { ShieldCheck, Shield, Workflow, Check } from 'lucide-react';

const ICONS = {
  'shield-check': ShieldCheck,
  'shield': Shield,
  'workflow': Workflow,
  // Removed 'code-2': Code2,
};

export default function FeaturePanel({
  icon,
  title,
  description,
  features,
  visual,
  order = 'text-first',
  gradient,
  zIndex,
}) {
  const Icon = ICONS[icon];

  return (
    <div className={`feature-panel ${gradient} ${zIndex}`}>
      <div className="noise-overlay"></div>
      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center h-full">
        {/* Text Content */}
        <div className={`space-y-8 ${order === 'text-first' ? 'order-2 md:order-1' : 'order-2'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center border border-brand-orange/20">
              <Icon className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          <p className="text-xl text-brand-textMuted leading-relaxed max-w-lg">
            {description}
          </p>

          <ul className="space-y-3 text-sm text-brand-textMain">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Content */}
        <div className={`flex justify-center ${order === 'text-first' ? 'order-1 md:order-2' : 'order-1'}`}>
          {visual}
        </div>
      </div>
    </div>
  );
}