// data/comparisonData.js

export const TIERS = [
  { label: '10,000', value: '10k' },
  { label: '25,000', value: '25k' },
  { label: '50,000', value: '50k' },
  { label: '100,000', value: '100k' },
];

export const COMPETITORS = ['mailmodo', 'brevo', 'mailchimp', 'sendgrid'];

export const COMPETITOR_NAMES = {
  mailmodo: 'Mailmodo',
  brevo: 'Brevo',
  mailchimp: 'Mailchimp',
  sendgrid: 'SendGrid'
};

export const MARKET_DATA = {
  "10k": { inwren: 29.99, mailmodo: 74, brevo: 69, mailchimp: 100, sendgrid: 89 },
  "25k": { inwren: 49.99, mailmodo: 149, brevo: 239, mailchimp: 260, sendgrid: 199 },
  "50k": { inwren: 89.99, mailmodo: 249, brevo: 359, mailchimp: 350, sendgrid: 300 },
  "100k": { inwren: 189.99, mailmodo: 499, brevo: 669, mailchimp: 700, sendgrid: 600 },
};

export const FEATURE_GROUPS = [
  {
    title: "Intelligence & AI",
    features: [
      {
        name: "AI Subject Lines",
        desc: "Generative AI to boost open rates.",
        inwren: true,
        mailmodo: true,
        brevo: "Paid Add-on",
        mailchimp: true,
        sendgrid: false
      },
      {
        name: "AI-Based Segmentation",
        desc: "Auto-groups users by behavior & intent.",
        inwren: true,
        mailmodo: "Premium",
        brevo: "Premium",
        mailchimp: "Premium",
        sendgrid: false
      },
      {
        name: "Complaint & Bounce Intel",
        desc: "Real-time signals to prevent blocklisting.",
        inwren: true,
        mailmodo: false,
        brevo: "Basic",
        mailchimp: "Basic",
        sendgrid: "Premium"
      },
      {
        name: "Engagement Heatmaps",
        desc: "Clickstream insights & visual heatmaps.",
        inwren: true,
        mailmodo: false,
        brevo: "Premium",
        mailchimp: "Premium",
        sendgrid: false
      }
    ]
  },
  {
    title: "Deliverability & Infrastructure",
    features: [
      {
        name: "Automated IP Warm-up",
        desc: "Controlled ramping to build reputation safely.",
        inwren: true,
        mailmodo: "Manual",
        brevo: "$$$ Add-on",
        mailchimp: "Manual",
        sendgrid: "Premium"
      },
      {
        name: "Smart Throttling",
        desc: "Auto-slows sending if ISP blocks detected.",
        inwren: true,
        mailmodo: false,
        brevo: false,
        mailchimp: false,
        sendgrid: "Premium"
      },
      {
        name: "Link + Domain Reputation",
        desc: "Scoring to predict inbox placement.",
        inwren: true,
        mailmodo: false,
        brevo: false,
        mailchimp: false,
        sendgrid: "Basic"
      },
      {
        name: "Auth Alignment (DMARC)",
        desc: "Auto-alignment for SPF/DKIM/DMARC.",
        inwren: "Automated",
        mailmodo: "Manual",
        brevo: "Manual",
        mailchimp: "Manual",
        sendgrid: "Manual"
      },
      {
        name: "Dedicated IP",
        desc: "Your own sending reputation.",
        inwren: "Included (Ultra)",
        mailmodo: "$$$ Add-on",
        brevo: "$$$ Add-on",
        mailchimp: "$29.95/mo",
        sendgrid: "$$$ Add-on"
      },
      {
        name: "Compliance Guardrails",
        desc: "Built-in checks for safer sending.",
        inwren: true,
        mailmodo: "Basic",
        brevo: "Basic",
        mailchimp: "Strict",
        sendgrid: "Basic"
      }
    ]
  },
  {
    title: "Support & Assurance",
    features: [
      {
        name: "24/7 Priority Support",
        desc: "Always-on help via Chat & Email.",
        inwren: true,
        mailmodo: "Email Only",
        brevo: "Premium",
        mailchimp: "Premium",
        sendgrid: "Ticket Based"
      },
      {
        name: "Dedicated Success Manager",
        desc: "Strategic partner for your growth.",
        inwren: "Included (Growth+)",
        mailmodo: "Enterprise",
        brevo: "Enterprise",
        mailchimp: "Enterprise",
        sendgrid: "Enterprise"
      },
      {
        name: "Migration Concierge",
        desc: "We move your templates & data for free.",
        inwren: "Free",
        mailmodo: "Paid",
        brevo: "Self-Service",
        mailchimp: "Self-Service",
        sendgrid: "Paid Services"
      },
      {
        name: "99.9% Uptime SLA",
        desc: "Guaranteed reliability with refund backing.",
        inwren: true,
        mailmodo: "Enterprise",
        brevo: "Enterprise",
        mailchimp: "Standard",
        sendgrid: "Pro Plan"
      },
      {
        name: "Role-Based Access (RBAC)",
        desc: "Granular permissions for team members.",
        inwren: true,
        mailmodo: "Basic",
        brevo: "Advanced",
        mailchimp: "Standard",
        sendgrid: "Basic"
      }
    ]
  },
  {
    title: "Data & Integrations",
    features: [
      {
        name: "Real-time Analytics",
        desc: "Delivery + Latency analytics stream.",
        inwren: true,
        mailmodo: "Basic",
        brevo: "Standard",
        mailchimp: "Standard",
        sendgrid: true
      },
      {
        name: "Raw Event API",
        desc: "Export full log data for your warehouse.",
        inwren: true,
        mailmodo: false,
        brevo: "Premium",
        mailchimp: "Premium",
        sendgrid: true
      },
      {
        name: "Pricing Model",
        desc: "How you are charged as you grow.",
        inwren: "Flat + Dynamic",
        mailmodo: "Contact Based",
        brevo: "Contact Based",
        mailchimp: "Contact Based",
        sendgrid: "Contact Based"
      }
    ]
  }
];