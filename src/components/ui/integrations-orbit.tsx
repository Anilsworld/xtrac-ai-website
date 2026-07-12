import { useReducedMotion } from 'framer-motion'
import { BrandLogo, Icon } from '@/components/primitives'

const INNER = ['whatsapp', 'shopify', 'gmail', 'slack', 'instagram', 'telegram']
const OUTER = ['discord', 'meta', 'google', 'microsoftteams', 'notion', 'uber', 'facebook', 'apple']

function Ring({
  logos,
  radius,
  duration,
  reverse,
  reduce,
}: {
  logos: string[]
  radius: number
  duration: number
  reverse?: boolean
  reduce: boolean | null
}) {
  const spin = reduce ? undefined : `orbit ${duration}s linear infinite${reverse ? ' reverse' : ''}`
  const counter = reduce ? undefined : `orbit ${duration}s linear infinite${reverse ? '' : ' reverse'}`
  return (
    <div className="absolute inset-0" style={{ animation: spin }}>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/70"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {logos.map((name, i) => {
        const a = (360 / logos.length) * i
        return (
          <div
            key={name}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${a}deg) translateY(-${radius}px) rotate(${-a}deg)` }}
          >
            <div className="absolute" style={{ transform: 'translate(-50%,-50%)' }}>
              <div style={{ animation: counter }}>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card shadow-card">
                  <span className="flex h-[22px] w-[22px] items-center justify-center">
                    <BrandLogo name={name} label={name} />
                  </span>
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** Self-contained orbiting integrations — real local brand logos, no external CDN. */
export function IntegrationsOrbit() {
  const reduce = useReducedMotion()
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-80 blur-3xl"
        style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.16), transparent 66%)' }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative" style={{ width: 300, height: 300 }}>
          <Ring logos={OUTER} radius={138} duration={52} reverse reduce={reduce} />
          <Ring logos={INNER} radius={78} duration={38} reduce={reduce} />
          <div className="absolute left-1/2 top-1/2 grid h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-[0_14px_32px_-10px_rgba(37,99,235,0.75)]">
            <Icon name="Sparkles" size={26} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  )
}
