import { PageShell } from '@/components/layout/PageShell'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/primitives'
import { FAQS } from '@/lib/content'

const CATEGORIES = [
  { icon: 'Rocket', title: 'Getting started', desc: 'Set up your workspace and go live in five minutes.' },
  { icon: 'PlugZap', title: 'Integrations', desc: 'Connect WhatsApp, Shopify, Gmail, Instagram and more.' },
  { icon: 'CreditCard', title: 'Billing & plans', desc: 'Subscriptions, invoices and changing your plan.' },
  { icon: 'ShieldCheck', title: 'Security & privacy', desc: 'Encryption, compliance and data controls.' },
]

export function HelpCenter() {
  return (
    <PageShell
      eyebrow="Support"
      eyebrowIcon="LifeBuoy"
      title="Help Center"
      subtitle="Guides, answers and a direct line to our team — everything you need to get the most out of xTrac AI."
    >
      {/* categories */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((c) => (
          <Card key={c.title} className="card-glow p-6 transition hover:shadow-card-hover hover:-translate-y-0.5">
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary ring-1 ring-primary/15">
              <Icon name={c.icon} size={20} strokeWidth={2} />
            </span>
            <h3 className="text-base font-bold">{c.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-xl font-bold">Frequently asked</h2>
        <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[0.975rem] font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <Icon name="ChevronDown" size={18} className="text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* contact CTA */}
      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-muted/40 p-8 text-center">
        <h3 className="text-lg font-bold">Still need a hand?</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Our team in Mysuru usually replies within a couple of hours on business days.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="shine-cta">
            <a href="/contact">
              <Icon name="MessageSquare" size={17} strokeWidth={2.2} />
              Contact support
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:support@xtrac.app">support@xtrac.app</a>
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
