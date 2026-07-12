import { PageShell } from '@/components/layout/PageShell'
import { Icon } from '@/components/primitives'

/** Product changelog. Entries below are real milestones — extend as you ship. */
const ENTRIES = [
  {
    date: 'July 2026',
    tag: 'New',
    title: 'Website + onboarding refresh',
    points: [
      'Enterprise-grade marketing site with a live WebGL hero.',
      'One-step onboarding: describe your business, go live in minutes.',
    ],
  },
  {
    date: 'June 2026',
    tag: 'Security',
    title: 'CASA Tier 2 certification',
    points: [
      'Completed Google CASA Tier 2 assessment for Gmail scopes.',
      'DPDP Act 2023 + GDPR (SCCs) alignment with a named DPO.',
    ],
  },
  {
    date: 'May 2026',
    tag: 'Integrations',
    title: 'Channels + partner status',
    points: [
      'WhatsApp, Instagram, Telegram, Slack, Teams and voice — one shared brain.',
      'Certified Meta Tech Partner and Amazon Solution Provider.',
    ],
  },
  {
    date: 'Launch',
    tag: 'Milestone',
    title: 'The 8-department AI workforce',
    points: [
      'Sales, support, operations, finance and more — agents that take action.',
      'Bounded autonomy with audit trails and human escalation.',
    ],
  },
]

const TAG_STYLE: Record<string, string> = {
  New: 'bg-primary/10 text-primary ring-primary/20',
  Security: 'bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 dark:text-emerald-400',
  Integrations: 'bg-indigo-500/10 text-indigo-600 ring-indigo-500/20 dark:text-indigo-400',
  Milestone: 'bg-amber-500/10 text-amber-600 ring-amber-500/20 dark:text-amber-400',
}

export function Changelog() {
  return (
    <PageShell
      eyebrow="Product"
      eyebrowIcon="Sparkles"
      title="Changelog"
      subtitle="What's new in xTrac AI — features, integrations and improvements as we ship them."
    >
      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-border">
          {ENTRIES.map((e) => (
            <li key={e.title} className="mb-10 ml-6">
              <span className="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-muted-foreground">{e.date}</span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${TAG_STYLE[e.tag] ?? TAG_STYLE.New}`}
                >
                  {e.tag}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold">{e.title}</h3>
              <ul className="mt-2 space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                    <Icon name="Check" size={16} strokeWidth={2.5} className="mt-1 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  )
}
