// data/aiIntelligenceData.js

export const AI_FEATURES = [
  {
    tag: 'AI_COMPOSER',
    icon: 'Brain',
    headline: 'Generative Email Drafts',
    body: 'Leverage your knowledge base and design artifacts to compose entire, branded emails from a simple prompt.',
    technicalProof: {
      type: 'code',
      lines: [
        { type: 'prompt', text: "Prompt: 'Welcome email, focus on features X, Y'" },
        { type: 'arrow', text: '→' },
        { type: 'output', text: 'Output: Full HTML Email' },
      ],
    },
  },
  {
    tag: 'AUTOMATION_MAP',
    icon: 'Workflow',
    headline: 'Intelligent Flow Generation',
    body: 'Describe your campaign goal, and AI instantly drafts a complete, multi-step automation journey you can refine.',
    technicalProof: {
      type: 'code',
      lines: [
        { type: 'goal', text: 'Goal: Increase trial conversion' },
        { type: 'arrow', text: '→' },
        { type: 'output', text: 'Auto-generated 5-step funnel node map' },
      ],
    },
  },
  {
    tag: 'PREDICTIVE_ML',
    icon: 'Sparkles',
    headline: 'Predictive Subject Lines',
    body: 'Stop guessing. ML analyzes past performance and user profiles to predict the highest-converting subject lines instantly.',
    technicalProof: {
      type: 'status',
      lines: [
        { type: 'analyzing', text: '> Analyzing subject line...' },
        { type: 'prediction', text: 'Prediction: 91% Open Rate (High)' },
      ],
    },
  },
  {
    tag: 'BEHAVIOR_LOGIC',
    icon: 'Target',
    headline: 'Real-Time Intent Segmentation',
    body: 'Auto-group users based on engagement velocity and click intent, moving beyond static demographics.',
    technicalProof: {
      type: 'logic',
      lines: [
        { type: 'condition', text: 'IF (clicks > 2) AND (time_spent > 30s)' },
        { type: 'arrow', text: '→' },
        { type: 'tag', text: "TAG: 'High_Intent'" },
      ],
    },
  },
];