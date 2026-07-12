import { motion, useReducedMotion } from 'framer-motion'
import { Section, Icon } from '@/components/primitives'
import { STEPS } from '@/lib/content'

/**
 * "How it works" as three MINI PRODUCT SCENES instead of three icons on a
 * line: signup completing, a business description being typed + understood,
 * and the generated agents popping live. The section acts out the pitch
 * ("describe your business, watch your AI workforce come alive") rather than
 * describing it. One shared dental-clinic example runs through all three
 * scenes so the roster-is-generated story stays concrete.
 *
 * All animation is framer-motion, whileInView-once; under
 * prefers-reduced-motion every scene renders in its final state.
 */

const TYPED = 'We run a dental clinic in Mysuru…'

/** Agents the demo business would get — ties into the Departments section's
 *  "generated from your business profile" story. */
const DEMO_AGENTS = [
  { name: 'Reception', icon: 'CalendarClock', accent: '#0d9488' },
  { name: 'Patient intake', icon: 'ClipboardList', accent: '#7c3aed' },
  { name: 'Billing', icon: 'ReceiptText', accent: '#ca8a04' },
  { name: 'Support', icon: 'Headset', accent: '#2563eb' },
]

/** Slim browser-chrome wrapper so each scene reads as "the product". */
function SceneWindow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="card-glow h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <i className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <i className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <i className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </span>
        <span className="ml-1 truncate text-[0.72rem] font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="flex min-h-[210px] flex-col justify-center p-5">{children}</div>
    </div>
  )
}

const pop = (reduce: boolean, delay: number) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.5 },
        transition: { delay, duration: 0.45 },
      }

function SignupScene({ reduce }: { reduce: boolean }) {
  return (
    <div className="space-y-3">
      <motion.div
        {...pop(reduce, 0.1)}
        className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-background py-2.5 text-sm font-medium"
      >
        <img src="/logos/google.svg" alt="" className="h-4 w-4" />
        Continue with Google
      </motion.div>
      <motion.div {...pop(reduce, 0.25)} className="flex items-center gap-3" aria-hidden>
        <span className="h-px flex-1 bg-border" />
        <span className="text-[0.68rem] text-muted-foreground">or</span>
        <span className="h-px flex-1 bg-border" />
      </motion.div>
      <motion.div
        {...pop(reduce, 0.4)}
        className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-muted-foreground"
      >
        you@yourclinic.com
      </motion.div>
      <motion.div
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, scale: 0.85 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true, amount: 0.5 },
              transition: { delay: 0.95, type: 'spring' as const, stiffness: 300, damping: 18 },
            })}
        className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-[0.8rem] font-medium text-emerald-600"
      >
        <Icon name="CircleCheck" size={15} strokeWidth={2.2} />
        Workspace created — 28 seconds
      </motion.div>
    </div>
  )
}

function DescribeScene({ reduce }: { reduce: boolean }) {
  const typeDone = 0.3 + TYPED.length * 0.035
  return (
    <div className="space-y-3">
      <div className="rounded-xl rounded-bl-sm border border-border bg-background px-3.5 py-2.5 text-sm">
        {reduce ? (
          <span>{TYPED}</span>
        ) : (
          <span aria-label={TYPED}>
            {TYPED.split('').map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 + i * 0.035, duration: 0.01 }}
                aria-hidden
              >
                {ch}
              </motion.span>
            ))}
            <motion.span
              aria-hidden
              className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: typeDone + 0.8 }}
            />
          </span>
        )}
      </div>
      <motion.div
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 8, scale: 0.95 },
              whileInView: { opacity: 1, y: 0, scale: 1 },
              viewport: { once: true, amount: 0.5 },
              transition: { delay: typeDone + 0.35, type: 'spring' as const, stiffness: 280, damping: 20 },
            })}
        className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent px-3 py-1.5 text-[0.8rem] font-semibold text-primary"
      >
        <Icon name="Sparkles" size={14} strokeWidth={2.2} />
        Dental clinic — designing your team
      </motion.div>
      <motion.div {...pop(reduce, typeDone + 0.7)} className="space-y-1.5" aria-hidden>
        <div className="h-2 w-4/5 rounded bg-muted" />
        <div className="h-2 w-3/5 rounded bg-muted" />
      </motion.div>
    </div>
  )
}

function GoLiveScene({ reduce }: { reduce: boolean }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {DEMO_AGENTS.map((a, i) => (
          <motion.span
            key={a.name}
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.7 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true, amount: 0.5 },
                  transition: {
                    delay: 0.15 + i * 0.18,
                    type: 'spring' as const,
                    stiffness: 320,
                    damping: 20,
                  },
                })}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[0.78rem] font-medium"
          >
            <span
              className="grid place-items-center rounded-full text-white"
              style={{ background: a.accent, width: 18, height: 18 }}
            >
              <Icon name={a.icon} size={10} strokeWidth={2.4} />
            </span>
            {a.name}
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          </motion.span>
        ))}
      </div>
      <motion.div
        {...pop(reduce, 1.0)}
        className="max-w-[85%] rounded-xl rounded-tl-sm bg-muted px-3.5 py-2 text-[0.82rem]"
      >
        Hi! Can I book a cleaning tomorrow at 10am?
      </motion.div>
      <motion.div
        {...pop(reduce, 1.45)}
        className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-primary px-3.5 py-2 text-[0.82rem] font-medium text-primary-foreground"
      >
        Booked for 10:00 ✓ — confirmation sent on WhatsApp.
      </motion.div>
    </div>
  )
}

export function HowItWorks() {
  const reduce = useReducedMotion() ?? false
  const scenes = [
    { label: 'business.xtrac.app — sign up', node: <SignupScene reduce={reduce} /> },
    { label: 'onboarding — about your business', node: <DescribeScene reduce={reduce} /> },
    { label: 'your workspace — agents live', node: <GoLiveScene reduce={reduce} /> },
  ]

  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title={
        <>
          Live in <span className="text-gradient">three steps.</span>
        </>
      }
      subtitle="Describe your business. Watch your AI workforce come alive — literally, below."
    >
      <div className="relative mx-auto max-w-6xl">
        {/* progress rail that draws itself as the section enters view */}
        <div aria-hidden className="absolute left-[8%] right-[8%] top-[-18px] hidden md:block">
          <div className="h-0.5 w-full rounded bg-border" />
          <motion.div
            className="absolute inset-y-0 left-0 rounded"
            style={{
              background: 'linear-gradient(90deg, #38bdf8, hsl(var(--primary)))',
              height: 2,
            }}
            initial={{ width: reduce ? '100%' : '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduce ? 0 : 2.2, ease: 'easeInOut' }}
          />
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="flex flex-col"
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.25 },
                    transition: { delay: i * 0.15, duration: 0.55 },
                  })}
            >
              <SceneWindow label={scenes[i].label}>{scenes[i].node}</SceneWindow>
              <div className="mt-5 flex items-baseline gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary tnum">
                  Step {step.n}
                </span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="mt-1.5 max-w-xs text-muted-foreground">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
