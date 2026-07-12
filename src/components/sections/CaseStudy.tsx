import { Section, Reveal, Icon } from '@/components/primitives'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CASE_STUDY } from '@/lib/content'

export function CaseStudy() {
  return (
    <Section id="customers" className="bg-muted/40">
      <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT: brand + headline metric */}
        <Reveal>
          <Card className="p-8">
            <Badge variant="brand">Case study</Badge>
            <h2 className="mt-4 text-2xl font-extrabold">{CASE_STUDY.brand}</h2>
            <p className="text-muted-foreground">{CASE_STUDY.kind}</p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-extrabold text-gradient tnum">{CASE_STUDY.volume}</span>
              <span className="pb-1 text-sm text-muted-foreground">{CASE_STUDY.volumeLabel}</span>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Connected stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {CASE_STUDY.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        {/* RIGHT: outcomes grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {CASE_STUDY.outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.05}>
              <Card className="h-full p-5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary ring-1 ring-primary/15">
                  <Icon name={o.icon} size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-3 font-bold text-[0.98rem]">{o.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
