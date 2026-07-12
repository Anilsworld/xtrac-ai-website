import { Section, Reveal, Icon } from '@/components/primitives'
import { Card } from '@/components/ui/card'
import { PILLARS } from '@/lib/content'

export function Pillars() {
  return (
    <Section
      id="product"
      eyebrow="Why xTrac"
      title={
        <>
          Built to <span className="text-gradient">run your business</span>, not just chat.
        </>
      }
      subtitle="Most AI tools answer questions. xTrac takes action — across every team and every channel."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Card className="h-full p-7 transition hover:shadow-card-hover hover:-translate-y-0.5">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary ring-1 ring-primary/15">
                <Icon name={p.icon} size={22} strokeWidth={2} />
              </span>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{p.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
