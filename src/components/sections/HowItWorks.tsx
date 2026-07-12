import { Section, Reveal, Icon } from '@/components/primitives'
import { STEPS } from '@/lib/content'

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title={
        <>
          Live in <span className="text-gradient">three steps.</span>
        </>
      }
      subtitle="Describe your business. Watch your AI workforce come alive."
    >
      <div className="relative mx-auto max-w-5xl">
        {/* connector line behind the nodes (desktop) */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-0.5 md:block"
          style={{
            background:
              'linear-gradient(90deg, transparent, hsl(var(--primary)/0.35) 14%, hsl(var(--primary)/0.35) 86%, transparent)',
          }}
        />
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div
                  className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_12px_26px_-8px_rgba(43,123,255,0.6)]"
                  style={{ background: 'linear-gradient(150deg,#38bdf8,#2563eb)' }}
                >
                  <Icon name={step.icon} size={23} strokeWidth={2} />
                </div>
                <span className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-primary tnum">
                  Step {step.n}
                </span>
                <h3 className="mt-1.5 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-muted-foreground">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
