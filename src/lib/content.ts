// Content model for the xTrac AI professional site. Grounded in the real
// xtrac.app product (iEllipse Technologies). No invented customer metrics.

/** The real product app — all sign-in / get-started CTAs land here.
 *  The on-site /login page is a UI demo with no auth backend. */
export const APP_URL = 'https://business.xtrac.app'

export const NAV_LINKS = [
  { label: 'Product', href: '#product', icon: 'LayoutGrid' },
  { label: 'Solutions', href: '#industries', icon: 'Sparkles' },
  { label: 'Integrations', href: '#integrations', icon: 'Blocks' },
  { label: 'Pricing', href: '#pricing', icon: 'Tag' },
]

export interface Stat {
  value: string
  label: string
}
export const HERO_STATS: Stat[] = [
  { value: '5 min', label: 'to launch your AI workforce' },
  { value: '24/7', label: 'across every channel' },
  { value: '8', label: 'departments, working together' },
  { value: '10+', label: 'channels, one brain' },
]

export interface Logo {
  name: string
  label: string
}
// Channels + tools the product works with (real SVGs pulled via 21st search_logo)
export const TRUST_LOGOS: Logo[] = [
  { name: 'whatsapp', label: 'WhatsApp' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'slack', label: 'Slack' },
  { name: 'gmail', label: 'Gmail' },
  { name: 'salesforce', label: 'Salesforce' },
  { name: 'telegram', label: 'Telegram' },
  { name: 'shopify', label: 'Shopify' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'meta', label: 'Meta' },
  { name: 'microsoftteams', label: 'Microsoft Teams' },
  { name: 'google', label: 'Google' },
  { name: 'twilio', label: 'Twilio' },
  { name: 'discord', label: 'Discord' },
  { name: 'azure', label: 'Microsoft Azure' },
  { name: 'apple', label: 'iMessage' },
  { name: 'googleanalytics', label: 'Google Analytics' },
  { name: 'linear', label: 'Linear' },
  { name: 'posthog', label: 'PostHog' },
]

export interface Pillar {
  icon: string
  title: string
  detail: string
}
export const PILLARS: Pillar[] = [
  {
    icon: 'MessagesSquare',
    title: 'Meet customers where they are',
    detail:
      'Agents go live on WhatsApp, web and voice in minutes — no new app for your customers to learn.',
  },
  {
    icon: 'Workflow',
    title: 'One workforce, not 200 apps',
    detail:
      'Sales, support, billing and ops agents share context and hand work between each other automatically.',
  },
  {
    icon: 'Sparkles',
    title: 'Learns without training',
    detail:
      'Describe your business once. Agents improve from every conversation — no prompts, no maintenance.',
  },
]

export interface Department {
  id: string
  name: string
  role: string
  icon: string
  accent: string
  tasks: string[]
}
export const DEPARTMENTS: Department[] = [
  { id: 'sales', name: 'Sales', role: 'Pipeline closer', icon: 'TrendingUp', accent: '#0284c7', tasks: ['Qualifies leads', 'Manages pipeline', 'Follows up 24/7'] },
  { id: 'support', name: 'Customer Support', role: 'Always-on desk', icon: 'Headset', accent: '#2563eb', tasks: ['Answers 24/7', 'Resolves tickets', 'Escalates smartly'] },
  { id: 'marketing', name: 'Marketing', role: 'Campaign co-pilot', icon: 'Megaphone', accent: '#7c3aed', tasks: ['Drafts campaigns', 'Tracks engagement', 'Schedules posts'] },
  { id: 'reception', name: 'Reception', role: 'Front desk', icon: 'CalendarClock', accent: '#0d9488', tasks: ['Books appointments', 'Routes callers', 'Sends reminders'] },
  { id: 'billing', name: 'Billing', role: 'Money flow', icon: 'ReceiptText', accent: '#ca8a04', tasks: ['Automates invoices', 'Tracks payments', 'Chases dues'] },
  { id: 'hr', name: 'HR', role: 'People ops', icon: 'Users', accent: '#db2777', tasks: ['Onboards hires', 'Answers policy', 'Manages leave'] },
  { id: 'it', name: 'IT Support', role: 'Help desk', icon: 'Wrench', accent: '#4f46e5', tasks: ['Troubleshoots', 'Resets access', 'Files requests'] },
  { id: 'ops', name: 'Operations', role: 'Command center', icon: 'Activity', accent: '#0891b2', tasks: ['Monitors KPIs', 'Builds reports', 'Flags anomalies'] },
]

export interface Industry {
  name: string
  icon: string
  line: string
}
export const INDUSTRIES: Industry[] = [
  { name: 'Healthcare', icon: 'Stethoscope', line: 'Triage, booking, follow-ups' },
  { name: 'Restaurants', icon: 'UtensilsCrossed', line: 'Orders, reservations, reviews' },
  { name: 'Salons & Spas', icon: 'Scissors', line: 'Bookings, reminders, upsells' },
  { name: 'Legal', icon: 'Scale', line: 'Intake, scheduling, documents' },
  { name: 'Fitness', icon: 'Dumbbell', line: 'Memberships, classes, renewals' },
  { name: 'Education', icon: 'GraduationCap', line: 'Admissions, queries, fees' },
  { name: 'Home Services', icon: 'Wrench', line: 'Dispatch, quotes, follow-ups' },
  { name: 'Automotive', icon: 'Car', line: 'Service, reminders, parts' },
  { name: 'Consulting', icon: 'Briefcase', line: 'Leads, scheduling, invoicing' },
  { name: 'E-Commerce', icon: 'ShoppingBag', line: 'Support, returns, recovery' },
  { name: 'Real Estate', icon: 'Building2', line: 'Enquiries, tours, paperwork' },
]

export interface UseCase {
  id: string
  name: string // industry
  company: string // real client / example
  icon: string
  accent: string
  headline: string // the problem they had
  steps: string[] // what the xTrac agents do
  metric: { value: string; label: string }
  humanApproval?: boolean
}
export const USE_CASES: UseCase[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    company: 'Email-to-ERP automation',
    icon: 'Factory',
    accent: '#0891b2',
    headline: 'Hundreds of order emails, keyed into the ERP by hand every day.',
    steps: ['Reads every incoming email', 'Extracts and structures the data', 'Writes it straight into the ERP'],
    metric: { value: 'Zero', label: 'manual ERP data entry' },
    humanApproval: true,
  },
  {
    id: 'pharma',
    name: 'Pharma',
    company: 'SOP automation',
    icon: 'Pill',
    accent: '#4f46e5',
    headline: 'SOPs stuck in hard copy, rewritten from scratch each time.',
    steps: ['Learns from past SOPs', 'Drafts new SOPs on demand', 'Sends to QA for sign-off'],
    metric: { value: 'Minutes', label: 'to a compliant SOP' },
    humanApproval: true,
  },
  {
    id: 'logistics',
    name: 'Logistics',
    company: 'Fleet & dispatch',
    icon: 'Truck',
    accent: '#0d9488',
    headline: 'Delivery routes and dispatch for packaged oil, planned by hand.',
    steps: ['Plans optimal routes', 'Schedules every dispatch', 'Tracks fuel and delivery'],
    metric: { value: '20–30%', label: 'lower fuel cost' },
  },
  {
    id: 'd2c',
    name: 'D2C brands',
    company: 'Sales & social marketing',
    icon: 'Bike',
    accent: '#db2777',
    headline: 'Sales and social marketing scattered across tools.',
    steps: ['Runs social campaigns', 'Qualifies and nurtures leads', 'Recovers carts and closes sales'],
    metric: { value: '24/7', label: 'sales & marketing engine' },
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    company: 'Support & returns',
    icon: 'ShoppingCart',
    accent: '#2563eb',
    headline: 'Support, returns and cart recovery, around the clock.',
    steps: ['Answers every customer query', 'Auto-approves and labels returns', 'Recovers carts on WhatsApp'],
    metric: { value: '12k', label: 'orders / month, run by agents' },
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    company: 'Clinics & hospitals',
    icon: 'Stethoscope',
    accent: '#0284c7',
    headline: 'Triage, booking and follow-ups without a front desk.',
    steps: ['Triages patient queries', 'Books the right slot', 'Sends reminders and follow-ups'],
    metric: { value: '24/7', label: 'patient front desk' },
  },
  {
    id: 'restaurant',
    name: 'Restaurants',
    company: 'Multi-outlet chains',
    icon: 'UtensilsCrossed',
    accent: '#ea580c',
    headline: 'Orders, reservations and reviews across every channel.',
    steps: ['Takes orders and bookings', 'Confirms and reminds guests', 'Replies to every review'],
    metric: { value: 'Instant', label: 'replies on every channel' },
  },
  {
    id: 'education',
    name: 'Education',
    company: 'Institutes & academies',
    icon: 'GraduationCap',
    accent: '#ca8a04',
    headline: 'Admissions, fee queries and reminders, answered fast.',
    steps: ['Answers admission queries', 'Holds seats and sends fee links', 'Reminds and follows up'],
    metric: { value: 'Seconds', label: 'to answer any enquiry' },
  },
]

export interface IntegrationGroup {
  title: string
  icon: string
  logos: Logo[]
}
export const INTEGRATIONS: IntegrationGroup[] = [
  {
    title: 'Channels',
    icon: 'MessageCircle',
    logos: [
      { name: 'whatsapp', label: 'WhatsApp' },
      { name: 'telegram', label: 'Telegram' },
      { name: 'slack', label: 'Slack' },
      { name: 'discord', label: 'Discord' },
      { name: 'microsoftteams', label: 'MS Teams' },
      { name: 'apple', label: 'iMessage' },
    ],
  },
  {
    title: 'Commerce & marketing',
    icon: 'ShoppingCart',
    logos: [
      { name: 'shopify', label: 'Shopify' },
      { name: 'meta', label: 'Meta' },
      { name: 'instagram', label: 'Instagram' },
      { name: 'facebook', label: 'Facebook' },
      { name: 'google', label: 'Google' },
    ],
  },
  {
    title: 'Productivity',
    icon: 'LayoutGrid',
    logos: [
      { name: 'gmail', label: 'Gmail' },
      { name: 'notion', label: 'Notion' },
      { name: 'microsoftteams', label: 'Teams' },
    ],
  },
]

export const CASE_STUDY = {
  brand: 'Aura Botanics',
  kind: 'D2C skincare brand',
  volume: '12k',
  volumeLabel: 'orders every month, run by agents',
  stack: ['Shopify', 'Amazon', 'Gmail', 'Meta'],
  outcomes: [
    { icon: 'MessageCircleQuestion', title: 'Every query answered', detail: 'Order status, ingredients and skin advice — instant, across channels.' },
    { icon: 'PackageOpen', title: 'Returns on autopilot', detail: 'Validated, approved and labeled with no human in the loop.' },
    { icon: 'ShoppingCart', title: 'Carts recovered', detail: 'Abandoned carts nudged on WhatsApp at exactly the right moment.' },
    { icon: 'Target', title: 'Ad spend optimized', detail: 'ROAS watched and budget reallocated across Meta campaigns.' },
  ],
}

export interface SecurityItem {
  icon: string
  title: string
  detail: string
}
export const SECURITY: SecurityItem[] = [
  { icon: 'ShieldCheck', title: 'GDPR & DPDP Act 2023', detail: 'Built for global and Indian data-protection compliance from day one.' },
  { icon: 'Lock', title: 'AES-256 encryption', detail: 'Every conversation and record encrypted in transit and at rest.' },
  { icon: 'BadgeCheck', title: 'Certified partner', detail: 'Meta Tech Partner, Amazon Solution Provider and CASA certified.' },
  { icon: 'UserCheck', title: 'Human in the loop', detail: 'Agents escalate to your team with full context whenever it matters.' },
]

export interface Step {
  n: string
  icon: string
  title: string
  detail: string
}
export const STEPS: Step[] = [
  { n: '01', icon: 'UserPlus', title: 'Sign up', detail: 'Create your workspace in 30 seconds. No credit card required.' },
  { n: '02', icon: 'MessageSquareText', title: 'Describe your business', detail: 'Tell xTrac what you do. It designs your AI org and connects your channels.' },
  { n: '03', icon: 'Rocket', title: 'Go live', detail: 'Your agents start working across WhatsApp, web and voice — instantly.' },
]

export interface PricingTier {
  name: string
  eyebrow?: string
  price: string
  cadence?: string
  priceNote?: string
  valueLine?: string
  description: string
  cta: string
  ctaHref?: string
  ctaNote?: string
  featured?: boolean
  features: string[]
}
export const PRICING: PricingTier[] = [
  {
    name: 'Startup',
    eyebrow: 'For startups',
    price: 'Free',
    cadence: 'for 30 days',
    priceNote: 'Bring your own AI key (BYOK) — no card to start. $250 / month after trial.',
    valueLine:
      'A human hire for even a slice of this starts at $1,200/mo. One flat price for the whole AI team.',
    description: 'Everything you need to run and grow — one flat price.',
    cta: 'Start free — 30 days',
    ctaHref: 'https://business.xtrac.app',
    ctaNote: 'Set up in under an hour · No developer needed',
    featured: true,
    features: [
      '1 org user (your login) — unlimited AI employees under it',
      'Unlimited 24/7 AI employees across every department',
      'Amazon (Seller + Ads), Shopify & Blinkit (India)',
      'WhatsApp, Instagram & any email provider — with auto-response',
      'Full agentic customer-care suite',
      'ERP integration (SAP, ERPNext & more)',
      'Microsoft 365 & Google Workspace',
      'Payment & shipping gateway integrations',
      'Website analytics, monitoring & agent-driven improvements',
      'Monthly AI token allowance included (fair-use)',
      'Live in under an hour — no developer, no agency',
    ],
  },
  {
    name: 'Enterprise',
    price: "Let's talk",
    priceNote: 'Custom pricing for your team size, channels, security and volume.',
    description: 'On-premise & private-cloud installation, scoped to your org.',
    cta: 'Contact sales',
    ctaHref: '/contact',
    ctaNote: 'Or email support@xtrac.app',
    features: [
      'Everything in Startup, unlimited scale',
      'On-premise or private-cloud deployment',
      'Data residency, SSO & advanced security',
      'Dedicated ERP / SAP integration support',
      'Custom agents & industry workflows',
      'Priority onboarding & a named success partner',
    ],
  },
]

export interface Faq {
  q: string
  a: string
}
export const FAQS: Faq[] = [
  { q: 'How long does setup take?', a: 'About five minutes. You describe your business in plain language, connect a channel like WhatsApp, and your agents go live. No code, no prompt engineering.' },
  { q: 'Do I need a technical team?', a: 'No. xTrac is fully no-code. If you can describe how your business works, you can build your AI workforce.' },
  { q: 'Which channels are supported?', a: 'WhatsApp, web chat, voice, Telegram, Slack, Discord, iMessage and Microsoft Teams — with one shared brain across all of them.' },
  { q: 'How do the agents work together?', a: 'Each department owns its lane and hands work to the others automatically. Sales closes a deal, Billing invoices it, Operations reports on it — no copy-paste.' },
  { q: 'Is my data secure?', a: 'Yes. xTrac is GDPR and DPDP Act 2023 compliant, uses AES-256 encryption, and is a certified Meta Tech Partner, Amazon Solution Provider and CASA-certified.' },
  { q: 'What happens when an agent cannot help?', a: 'It escalates to a human on your team with the full conversation and a recommended next step, so nothing falls through the cracks.' },
]

export const FOOTER = {
  columns: [
    { title: 'Product', links: ['Get started', 'Sign in', 'Integrations', 'Pricing', 'Changelog'] },
    { title: 'Solutions', links: ['Healthcare', 'E-commerce', 'Restaurants', 'Professional services'] },
    { title: 'Company', links: ['About us', 'Founders', 'Careers', 'Contact'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Data Deletion', 'Help Center'] },
  ],
}
