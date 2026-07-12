import { PageShell } from '@/components/layout/PageShell'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/primitives'

const PERKS = [
  { icon: 'Rocket', title: 'Real ownership', desc: 'Small team, big surface area. What you build ships to real businesses within days.' },
  { icon: 'Brain', title: 'Frontier AI, daily', desc: 'Work at the edge of agentic AI — multi-agent systems, tool use and autonomy.' },
  { icon: 'Home', title: 'Mysuru + remote', desc: 'Based in Mysuru with flexibility for the right people, anywhere in India.' },
  { icon: 'TrendingUp', title: 'Grow fast', desc: 'Early-stage trajectory — your scope grows as quickly as the company does.' },
]

const TEAMS = [
  { icon: 'Code2', title: 'Engineering', desc: 'Full-stack, AI/agents, platform and infrastructure.' },
  { icon: 'PenTool', title: 'Design', desc: 'Product design, brand and design engineering.' },
  { icon: 'Megaphone', title: 'Go-to-market', desc: 'Sales, partnerships, customer success and growth.' },
]

export function Careers() {
  return (
    <PageShell
      eyebrow="Company"
      eyebrowIcon="Briefcase"
      title="Build the AI workforce with us"
      subtitle="We're a small, senior team giving every business an AI organization. If that excites you, we'd love to talk — even if you don't see a listed role."
    >
      {/* perks */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map((p) => (
          <Card key={p.title} className="card-glow p-6 transition hover:shadow-card-hover hover:-translate-y-0.5">
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary ring-1 ring-primary/15">
              <Icon name={p.icon} size={20} strokeWidth={2} />
            </span>
            <h3 className="text-base font-bold">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </Card>
        ))}
      </div>

      {/* teams */}
      <div className="mx-auto mt-16 max-w-4xl">
        <h2 className="text-center text-2xl font-extrabold">Where you might fit</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {TEAMS.map((t) => (
            <Card key={t.title} className="p-6">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary ring-1 ring-primary/15">
                <Icon name={t.icon} size={20} strokeWidth={2} />
              </span>
              <h3 className="text-base font-bold">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-muted/40 p-8 text-center">
        <h3 className="text-lg font-bold">No open role that fits?</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Send us what you're great at and why xTrac. We read every message.
        </p>
        <Button asChild size="lg" className="shine-cta mt-5">
          <a href="mailto:careers@xtrac.app?subject=Working%20at%20xTrac%20AI">
            <Icon name="Send" size={17} strokeWidth={2.2} />
            careers@xtrac.app
          </a>
        </Button>
      </div>
    </PageShell>
  )
}
