// data/featuresData.js

export const CONTACT_TIERS = [
  { label: '500', value: 500, display: '500' },
  { label: '2,500', value: 2500, display: '2.5k' },
  { label: '5,000', value: 5000, display: '5k' },
  { label: '10,000', value: 10000, display: '10k' },
  { label: '25,000', value: 25000, display: '25k' },
  { label: '50,000', value: 50000, display: '50k' },
  { label: '100,000', value: 100000, display: '100k' },
];

export const PLANS = [
  {
    id: 'launch',
    name: 'Launch',
    description: 'Perfect for testing & side projects.',
    basePrice: 4.99,
    basePriceINR: 399,
    basePriceINRYearly: 299,
    maxContacts: 500,
    highlight: false,
    icon: 'Rocket',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For professional marketers.',
    basePrice: 15.99,
    basePriceINR: 1299,
    basePriceINRYearly: 999,
    maxContacts: 2500,
    highlight: true,
    icon: 'Sparkles',
  },
  {
    id: 'ultra',
    name: 'Ultra',
    description: 'Maximum performance.',
    basePrice: 29.99,
    basePriceINR: 2499,
    basePriceINRYearly: 1999,
    maxContacts: Infinity,
    highlight: false,
    icon: 'Zap',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions.',
    basePrice: null,
    basePriceINR: null,
    basePriceINRYearly: null,
    maxContacts: Infinity,
    highlight: false,
    icon: 'Server',
  },
];

export const FEATURES_DATA = {
  "Plan Limits": [
    { name: "Contacts Included", launch: "500", growth: "2,500", ultra: "10,000+", enterprise: "Unlimited", essential: true },
    { name: "Monthly Email Sends", launch: "2,000", growth: "10,000", ultra: "100,000", enterprise: "Unlimited", essential: true },
  ],
  "Email Editor": [
    { name: "Drag & Drop Builder", launch: true, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Plain Text Mode", launch: true, growth: true, ultra: true, enterprise: true, essential: true },
  ],
  "Templates": [
    { name: "Basic Templates", launch: true, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "AI Subject Line Generator", launch: true, growth: "Smarter AI", ultra: "Smarter AI", enterprise: "Smarter AI", essential: false },
  ],
  "Automation": [
    { name: "Single Autoresponder", launch: true, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Multi-step Automation Flows", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Conditional Logic (If/Else)", launch: false, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Advanced Funnels", launch: false, growth: false, ultra: true, enterprise: true, essential: true },
    { name: "Email Engagement Tracking", launch: true, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "E-commerce Integration", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Website Behavioral Snippets", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
  ],
  "Segmentation": [
    { name: "Basic Segmentation", launch: true, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "AI Based Segmentation", launch: false, growth: false, ultra: true, enterprise: true, essential: true },
  ],
  "Reporting": [
    { name: "Basic Analytics", launch: true, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Heatmaps", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Link/Content Risk Scanner", launch: false, growth: false, ultra: true, enterprise: true, essential: true },
    { name: "Raw Event API Export", launch: false, growth: "Read-only", ultra: "Full Export", enterprise: "Unlimited", essential: false },
  ],
  "Deliverability & Reputation": [
    { name: "Dedicated IP", launch: false, growth: "Annual Only", ultra: "Included", enterprise: "Included", essential: true },
    { name: "Automated IP Warm-up", launch: false, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Smart throttling", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Blocklist monitoring", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Complaint intelligence", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Compliance guardrails", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
  ],
  "Journey Intelligence": [
    { name: "Drop-off detection", launch: false, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Journey suggestions", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Behavior-triggered automation", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Dynamic send-time adjustments", launch: false, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Engagement heatmaps", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Real-time delivery analytics", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
  ],
  "Deliverability Intelligence": [
    { name: "Spam-trigger risk analysis", launch: true, growth: true, ultra: true, enterprise: true, essential: true },
    { name: "Link + domain reputation", launch: true, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "HTML structure validation", launch: true, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Authentication (SPF, DKIM)", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Inbox Score™", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "Tone and intent analysis", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
  ],
  "Integrations": [
    { name: "Webhooks", launch: false, growth: true, ultra: true, enterprise: true, essential: false },
    { name: "API Access", launch: false, growth: "Read", ultra: "Full", enterprise: "Advanced", essential: true },
    { name: "CRM/Pipeline Features", launch: false, growth: false, ultra: true, enterprise: "Custom DB", essential: false },
  ],
  "Team & Support": [
    { name: "User Seats", launch: "1", growth: "3", ultra: "10", enterprise: "Unlimited", essential: true },
    { name: "Roles & Permissions", launch: false, growth: false, ultra: true, enterprise: "Multi-layer", essential: true },
    { name: "Support Level", launch: "Email", growth: "Priority Email", ultra: "Phone", enterprise: "Dedicated Mgr", essential: true },
  ]
};