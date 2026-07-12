import { Section, Reveal, Icon } from '@/components/primitives'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { SECURITY } from '@/lib/content'

const COMPLIANCE = [
  'GDPR',
  'DPDP Act 2023',
  'AES-256',
  'Meta Tech Partner',
  'Amazon Solution Provider',
  'CASA Certified',
]

export function Security() {
  return (
    <Section
      id="security"
      eyebrow="Security & compliance"
      title={
        <>
          Enterprise-grade <span className="text-gradient">from day one.</span>
        </>
      }
      subtitle="Your data and your customers' trust, protected by design."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SECURITY.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <Card className="h-full p-6 transition hover:shadow-card-hover hover:-translate-y-0.5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary ring-1 ring-primary/15">
                <Icon name={s.icon} size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {COMPLIANCE.map((label) => (
          <Badge key={label} variant="outline">
            <Icon name="ShieldCheck" size={13} className="text-primary" />
            {label}
          </Badge>
        ))}
      </div>
    </Section>
  )
}
