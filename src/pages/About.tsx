import { PageShell } from '@/components/layout/PageShell'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/primitives'

const STATS = [
  { value: '2026', label: 'Building in the open' },
  { value: 'Mysuru', label: 'Karnataka, India' },
  { value: '8', label: 'AI departments, one brain' },
  { value: '10+', label: 'Channels supported' },
]

const VALUES = [
  { icon: 'Zap', title: 'Action over answers', desc: 'A chatbot drafts text. xTrac executes the task — books, invoices, orders, files, reports.' },
  { icon: 'ShieldCheck', title: 'Trust by design', desc: 'Per-organisation isolation, audit trails and bounded autonomy. Compliance is architectural, not bolted on.' },
  { icon: 'Users', title: 'For every business', desc: 'Vertical-neutral by design — D2C, healthcare, manufacturing, education and more, from one platform.' },
  { icon: 'Sparkles', title: 'No-code, five minutes', desc: 'Describe your business in plain language and your AI workforce goes live. No prompt engineering.' },
]

export function About() {
  return (
    <PageShell
      eyebrow="Company"
      eyebrowIcon="Building2"
      title={<>An entire AI organization for your business.</>}
      subtitle="xTrac AI is built by iEllipse Technologies in Mysuru, India. We give any business a full team of AI agents — sales, support, operations, finance and more — that do real work, 24/7, across every channel."
    >
      {/* stats */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-card p-6 text-center">
            <div className="text-2xl font-extrabold tracking-tight tnum sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-[0.8rem] leading-snug text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* mission */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold">Why we're building xTrac</h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">
          Every business runs on the same repetitive work — answering customers, chasing orders,
          sending reminders, reconciling numbers. Big companies throw teams and expensive software at
          it. Everyone else does it by hand. xTrac closes that gap: enter your website, and in minutes
          you have an AI organization that runs the busywork so your people can do the work that
          matters.
        </p>
      </div>

      {/* values */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {VALUES.map((v) => (
          <Card key={v.title} className="card-glow p-7 transition hover:shadow-card-hover hover:-translate-y-0.5">
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary ring-1 ring-primary/15">
              <Icon name={v.icon} size={22} strokeWidth={2} />
            </span>
            <h3 className="text-lg font-bold">{v.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{v.desc}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
