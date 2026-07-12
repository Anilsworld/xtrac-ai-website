import { Section, Reveal, Icon } from '@/components/primitives'
import { DEPARTMENTS } from '@/lib/content'

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
      subtitle="Eight AI teammates, live from day one — each owns its lane and hands work to the others."
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
    </Section>
  )
}
