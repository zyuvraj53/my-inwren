// components/home/AIIntelligenceSection.js

import AccordionSection from './AccordionSection';
import { AI_FEATURES } from '../../data/aiIntelligenceData';

export default function AIIntelligenceSection() {
  return (
    <AccordionSection
      id="ai-intelligence"
      title="AI Intelligence & Precision Automation"
      subtitle="Transform marketing strategy into executable campaigns using machine learning, predictive analytics, and generative intelligence."
      features={AI_FEATURES}
    />
  );
}