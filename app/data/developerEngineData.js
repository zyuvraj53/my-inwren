// data/developerEngineData.js

export const DEVELOPER_FEATURES = [
  {
    tag: 'SCALABLE_CLOUD',
    icon: 'Server',
    headline: 'Zero-Downtime Scaling',
    body: 'Our infrastructure dynamically scales to handle millions of sends per hour without missing a single webhook or log entry.',
    technicalProof: {
      type: 'status',
      lines: [
        { type: 'status', text: 'System Status: Green' },
        { type: 'metric', text: 'Throughput: 4.5M/hr' },
        { type: 'metric', text: 'Latency: <15ms (P95)' },
      ],
    },
  },
  {
    tag: 'DEDUP_API',
    icon: 'Zap',
    headline: 'Fast, Reliable API',
    body: 'Built-in retries, idempotent requests, and automatic deduplication ensure every send is executed instantly and precisely once. Sub-20ms response times guaranteed.',
    technicalProof: {
      type: 'response',
      lines: [
        { type: 'status', text: 'Response: 202 ACCEPTED' },
        { type: 'header', text: 'Headers: X-Request-ID: 1a9f3...' },
        { type: 'metric', text: 'Latency: 14ms' },
      ],
    },
  },
  {
    tag: 'TEMPLATE_VERSION',
    icon: 'FileCode',
    headline: 'Versioned Templates with Complete Control',
    body: 'Manage email templates like code. Version control, rollback capabilities, and A/B test variants without breaking production sends.',
    technicalProof: {
      type: 'version',
      lines: [
        { type: 'template', text: 'Template: welcome_v2.3.1' },
        { type: 'status', text: 'Status: ACTIVE | Previous: v2.3.0' },
        { type: 'action', text: 'Rollback Available' },
        { type: 'ab', text: 'A/B Split: 50/50 (v2.3.1 vs v2.2.0)' },
      ],
    },
  },
  {
    tag: 'REAL_TIME_OBS',
    icon: 'Activity',
    headline: 'Real-Time Event Streams & Observability',
    body: 'Webhooks for every lifecycle event. Stream delivery, click, and custom log data to your warehouse with full trace visibility and audit trails for operational awareness.',
    technicalProof: {
      type: 'webhook',
      lines: [
        { type: 'webhook', text: 'WEBHOOK: {"event": "delivered", "latency": "14ms"}' },
        { type: 'trace', text: 'TRACE_ID: 92k1-d0e3 / STATUS: delivered' },
        { type: 'audit', text: 'AUDIT: user@company.com modified template_v2' },
      ],
    },
  },
];