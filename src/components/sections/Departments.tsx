import { Section, Reveal, Icon } from '@/components/primitives'
import { DEPARTMENTS } from '@/lib/content'

/**
 * The roster is NOT fixed at eight — xTrac provisions departments from the
 * business's profile (industry, channels, size), so a clinic gets patient
 * intake, a manufacturer gets QA, a restaurant gets menu & orders. The eight
 * cards are the common core most businesses start with; the strip below
 * says the quiet part out loud so the section never reads as a hard limit.
 */
const SPECIALIST_EXAMPLES = [
  'Compliance & QA',
  'Patient intake',
  'Logistics & dispatch',
  'Menu & orders',
  'Inventory',
  'Field service',
  'Claims desk',
  'Admissions',
]

export function Departments() {
  return (
    <Section
      id="departments"
      className="bg-muted/40"
      eyebrow="The AI workforce"
      title={
        <>
          A co-pilot for <span className="text-gradient">every department.</span>
        </>
      }
      subtitle="xTrac reads your business and builds the team it needs. These are the core departments most businesses start with — yours may have more."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DEPARTMENTS.map((dept, i) => (
          <Reveal key={dept.id} delay={i * 0.05}>
            <div className="group relative h-full">
              {/* per-accent glow on hover */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-25"
                style={{ background: dept.accent }}
              />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 group-hover:-translate-y-1">
                {/* top accent line grows on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${dept.accent}, ${dept.accent}66)` }}
                />
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-sm"
                  style={{ background: `linear-gradient(150deg, ${dept.accent}, ${dept.accent}bb)` }}
                >
                  <Icon name={dept.icon} size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold">{dept.name}</h3>
                <p className="text-sm font-semibold" style={{ color: dept.accent }}>{dept.role}</p>
                <ul className="mt-4 space-y-2">
                  {dept.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={15} strokeWidth={2.5} className="shrink-0" style={{ color: dept.accent }} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* The extensibility strip: dashed border signals "slot, not limit" —
          the same visual grammar as the logo grid's "+ more" chip. */}
      <Reveal delay={0.35}>
        <div className="card-glow relative mt-5 overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-card p-6 shadow-soft sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-dashed border-primary/50 bg-accent text-primary">
                <Icon name="Plus" size={22} strokeWidth={2.2} />
              </span>
              <div className="max-w-md">
                <h3 className="text-[1.05rem] font-bold">
                  …plus the specialists <span className="text-gradient">your industry</span> needs
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your team is generated from your business profile — a clinic gets patient
                  intake, a manufacturer gets QA. Nothing here is fixed at eight.
                </p>
              </div>
            </div>
            <div className="flex max-w-md flex-wrap gap-2">
              {SPECIALIST_EXAMPLES.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-[0.8rem] font-medium text-muted-foreground"
                >
                  <Icon name="Sparkles" size={12} strokeWidth={2} className="text-primary" />
                  {label}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full border border-dashed border-primary/40 px-3 py-1 text-[0.8rem] font-semibold text-primary">
                + yours
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
