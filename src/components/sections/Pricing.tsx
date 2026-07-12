import { Section, Reveal, Icon } from '@/components/primitives'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { PRICING } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <Section
      id="pricing"
      className="bg-muted/40"
      eyebrow="Pricing"
      title={
        <>
          One flat price for a <span className="text-gradient">whole AI team.</span>
        </>
      }
      subtitle="A single hire for support, ops or ads starts at $1,200/mo. xTrac runs the whole org — 24/7, live in under an hour."
    >
      <div className="mx-auto grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        {PRICING.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.08}>
            <Card
              className={cn(
                'flex h-full flex-col p-7',
                tier.featured &&
                  'relative border-primary/40 shadow-card-hover ring-1 ring-primary/20',
              )}
            >
              {tier.featured && (
                <Badge variant="brand" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most popular
                </Badge>
              )}

              {tier.eyebrow && (
                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {tier.eyebrow}
                </span>
              )}
              <h3 className="text-lg font-bold">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                {tier.cadence && (
                  <span className="text-sm font-medium text-muted-foreground">{tier.cadence}</span>
                )}
              </div>
              {tier.priceNote && (
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
                  {tier.priceNote}
                </p>
              )}
              {tier.valueLine && (
                <p className="mt-3 rounded-lg bg-accent px-3 py-2 text-[0.8rem] leading-relaxed text-accent-foreground">
                  {tier.valueLine}
                </p>
              )}

              <Button
                asChild
                variant={tier.featured ? 'default' : 'outline'}
                size="lg"
                className={cn('mt-6 w-full', tier.featured && 'shine-cta')}
              >
                <a href={tier.ctaHref ?? '/login'}>{tier.cta}</a>
              </Button>
              {tier.ctaNote && (
                <p className="mt-2 text-center text-[0.75rem] text-muted-foreground">{tier.ctaNote}</p>
              )}

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="Check"
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                      strokeWidth={2.5}
                    />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
        One hire does one job. xTrac runs the whole org — a 24/7 AI team across every function,
        working in under an hour.
      </p>
    </Section>
  )
}
