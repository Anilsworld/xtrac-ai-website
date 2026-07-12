import { Section, Reveal, BrandLogo, Icon } from '@/components/primitives'
import { IntegrationsCloud } from '@/components/ui/integrations-cloud'
import { INTEGRATIONS } from '@/lib/content'

export function Integrations() {
  return (
    <Section
      id="integrations"
      eyebrow="Integrations"
      title={<>Every app you use, <span className="text-gradient">connected.</span></>}
      subtitle="WhatsApp, Instagram, Google, Microsoft, Shopify and hundreds more — xTrac plugs into the tools you already run on."
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* category cards with real brand logos */}
        <Reveal className="order-2 space-y-4 lg:order-1">
          {INTEGRATIONS.map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary ring-1 ring-primary/15">
                  <Icon name={group.icon} size={17} strokeWidth={2} />
                </span>
                <h3 className="font-bold">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.logos.map((l) => (
                  <span
                    key={l.name}
                    className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-2.5 transition hover:border-primary/30 hover:shadow-soft"
                  >
                    <span className="flex h-4 w-4 items-center">
                      <BrandLogo name={l.name} label={l.label} />
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{l.label}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        {/* interactive rotating icon cloud */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card">
            <IntegrationsCloud />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
