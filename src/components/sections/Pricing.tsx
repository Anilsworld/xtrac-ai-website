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
          Pricing that <span className="text-gradient">scales with you.</span>
        </>
      }
      subtitle="Start free. Upgrade when your AI workforce is paying for itself."
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
        {PRICING.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.08}>
            <Card
              className={cn(
                'p-7 h-full flex flex-col',
                tier.featured &&
                  'relative border-primary/40 shadow-card-hover ring-1 ring-primary/20',
              )}
            >
              {tier.featured && (
                <Badge
                  variant="brand"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  Most popular
                </Badge>
              )}

              <h3 className="text-lg font-bold">{tier.name}</h3>
              <p className="text-sm text-muted-foreground">{tier.description}</p>

              <div className="mt-5">
                <span className="text-4xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
              </div>

              <Button
                asChild
                variant={tier.featured ? 'default' : 'outline'}
                className="mt-6 w-full"
              >
                <a href="#">{tier.cta}</a>
              </Button>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
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
    </Section>
  )
}
