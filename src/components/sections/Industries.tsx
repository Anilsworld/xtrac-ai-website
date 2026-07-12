import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section, Icon } from '@/components/primitives'
import { USE_CASES, type UseCase } from '@/lib/content'
import { cn } from '@/lib/utils'

const CARD_W = 340
const SPACING = 152
const ANGLE = 8
const MAX_SIDE = 2

/** shortest signed ring distance from active to i (for a looping fan) */
function signedOffset(i: number, active: number, len: number) {
  const raw = i - active
  const alt = raw > 0 ? raw - len : raw + len
  return Math.abs(alt) < Math.abs(raw) ? alt : raw
}

function ScenarioCard({ uc }: { uc: UseCase }) {
  return (
    <div className="relative flex h-[344px] w-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-25 blur-3xl"
        style={{ background: uc.accent }}
      />
      {/* header: industry + client */}
      <div className="relative flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(150deg, ${uc.accent}, ${uc.accent}bb)` }}>
          <Icon name={uc.icon} size={20} strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <div className="truncate font-bold leading-tight">{uc.name}</div>
          <div className="truncate text-xs font-semibold" style={{ color: uc.accent }}>{uc.company}</div>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      {/* the problem */}
      <p className="relative mt-3.5 text-[0.85rem] leading-snug text-muted-foreground">{uc.headline}</p>

      {/* what the agents do */}
      <div className="relative mt-4 space-y-2.5">
        {uc.steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2.5">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white" style={{ background: uc.accent }}>
              {i + 1}
            </span>
            <span className="text-[0.83rem] font-medium text-foreground">{s}</span>
          </div>
        ))}
        {uc.humanApproval && (
          <div className="flex items-center gap-2 pl-[30px] text-[0.75rem] text-muted-foreground">
            <Icon name="UserCheck" size={13} strokeWidth={2} style={{ color: uc.accent }} />
            with human approval in the loop
          </div>
        )}
      </div>

      {/* result */}
      <div className="relative mt-auto flex items-end gap-2 border-t border-border pt-4">
        <span className="tnum text-2xl font-extrabold leading-none" style={{ color: uc.accent }}>{uc.metric.value}</span>
        <span className="pb-0.5 text-xs text-muted-foreground">{uc.metric.label}</span>
      </div>
    </div>
  )
}

/** Use cases as a fanned, draggable, auto-advancing card stack. */
export function Industries() {
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(false)
  const reduce = useReducedMotion()
  const N = USE_CASES.length

  const next = () => setActive((a) => (a + 1) % N)
  const prev = () => setActive((a) => (a - 1 + N) % N)

  useEffect(() => {
    if (reduce || hover) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % N), 4200)
    return () => clearInterval(id)
  }, [reduce, hover, N])

  const transition = reduce ? { duration: 0 } : { type: 'spring' as const, stiffness: 260, damping: 28 }

  return (
    <Section
      id="industries"
      className="overflow-hidden bg-muted/40"
      eyebrow="Use cases"
      title={
        <>
          Built for <span className="text-gradient">your industry.</span>
        </>
      }
      subtitle="Real xTrac projects — from ERP and SOP automation to logistics and D2C growth. Swipe through the deck."
    >
      <div
        className="relative mx-auto h-[372px] w-full max-w-3xl"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {USE_CASES.map((uc, i) => {
          const off = signedOffset(i, active, N)
          const abs = Math.abs(off)
          if (abs > MAX_SIDE) return null
          const isTop = off === 0
          return (
            <motion.div
              key={uc.id}
              className={cn('absolute left-1/2 top-0', isTop ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer')}
              style={{ width: CARD_W, marginLeft: -CARD_W / 2, zIndex: 100 - abs }}
              initial={false}
              animate={{ x: off * SPACING, y: abs * 20, rotate: off * ANGLE, scale: 1 - abs * 0.08, opacity: 1 - abs * 0.18 }}
              transition={transition}
              drag={isTop && !reduce ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={
                isTop
                  ? (_e, info) => {
                      if (info.offset.x < -70 || info.velocity.x < -450) next()
                      else if (info.offset.x > 70 || info.velocity.x > 450) prev()
                    }
                  : undefined
              }
              onClick={isTop ? undefined : () => setActive(i)}
            >
              <ScenarioCard uc={uc} />
            </motion.div>
          )
        })}
      </div>

      {/* dot navigation */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {USE_CASES.map((u, i) => (
          <button
            key={u.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${u.name}`}
            className={cn(
              'h-2 rounded-full transition-all duration-200',
              i === active ? 'w-6 bg-primary' : 'w-2 bg-foreground/20 hover:bg-foreground/40',
            )}
          />
        ))}
      </div>
    </Section>
  )
}
