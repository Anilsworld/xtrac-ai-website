import { Section, Reveal, BrandLogo, Icon } from '@/components/primitives'
import { Badge } from '@/components/ui/badge'
import { PhoneFrame } from '@/components/ui/phone-frame'
import { StoreButtons } from '@/components/ui/store-buttons'
import { InteractiveTracy } from '@/components/ui/interactive-tracy'

const BULLETS = [
  { icon: 'Zap', title: 'One prompt, many actions', detail: 'Ask once — Tracy fans the work out across every connected app.' },
  { icon: 'ShoppingBag', title: 'Order, book, pay, reply', detail: 'Food, rides, restocks, customer replies — handled end to end.' },
  { icon: 'Moon', title: 'Works around the clock', detail: 'Tracy keeps going 24/7, even while you sleep.' },
]

const CONNECTED = [
  { name: 'whatsapp', label: 'WhatsApp' },
  { name: 'shopify', label: 'Shopify' },
  { name: 'uber', label: 'Uber' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'gmail', label: 'Gmail' },
]

export function SuperApp() {
  return (
    <Section id="tracy" className="overflow-hidden bg-gradient-to-b from-accent/60 via-background to-background">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* copy */}
        <Reveal>
          <Badge variant="brand" className="mb-5">
            <Icon name="Sparkles" size={14} strokeWidth={2.2} />
            Meet Tracy
          </Badge>
          <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08]">
            Every app. <span className="text-gradient">One conversation.</span>
          </h2>
          <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
            Tracy is your personal AI agent. Ask once and she orders dinner on Swiggy, books your
            Uber, reorders on Amazon and runs your Shopify store — all your apps, one super app.
          </p>

          <ul className="mt-8 space-y-5">
            {BULLETS.map((b) => (
              <li key={b.title} className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-primary ring-1 ring-primary/15">
                  <Icon name={b.icon} size={19} strokeWidth={2} />
                </span>
                <div>
                  <div className="font-semibold">{b.title}</div>
                  <div className="text-sm text-muted-foreground">{b.detail}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connects with
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {CONNECTED.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-3 shadow-soft"
                >
                  <span className="h-5 w-5">
                    <BrandLogo name={l.name} label={l.label} />
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{l.label}</span>
                </span>
              ))}
              <span className="inline-flex h-10 items-center rounded-lg border border-dashed border-border px-3 text-sm font-medium text-muted-foreground">
                + 20 more
              </span>
            </div>
          </div>

          <div className="mt-9">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Get the Tracy app
            </div>
            <StoreButtons className="mt-3" />
          </div>
        </Reveal>

        {/* interactive Tracy phone */}
        <Reveal delay={0.1} className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(43,123,255,0.22), transparent 68%)' }}
          />
          <PhoneFrame>
            <InteractiveTracy />
          </PhoneFrame>
          <p className="mt-5 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Icon name="MousePointerClick" size={15} className="text-primary" strokeWidth={2} />
            Tap an action — watch Tracy work, live.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
