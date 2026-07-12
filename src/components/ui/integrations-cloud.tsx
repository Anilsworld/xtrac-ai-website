import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { BrandLogo } from '@/components/primitives'

const LOGOS = [
  'whatsapp', 'instagram', 'gmail', 'slack', 'telegram', 'discord', 'microsoftteams', 'facebook',
  'twilio', 'shopify', 'salesforce', 'notion', 'linear', 'github', 'openai', 'claude',
  'gemini', 'ollama', 'posthog', 'googleanalytics', 'google', 'apple', 'azure', 'meta',
]

/** Evenly-distributed points on a unit sphere (Fibonacci sphere). */
function spherePoints(n: number): [number, number, number][] {
  const pts: [number, number, number][] = []
  const off = 2 / n
  const inc = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = i * off - 1 + off / 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const phi = i * inc
    pts.push([Math.cos(phi) * r, y, Math.sin(phi) * r])
  }
  return pts
}

/**
 * A rotating 3D sphere of brand logos — logos are billboarded (always face the
 * viewer) and scaled/faded by depth. Pure DOM + rAF projection using LOCAL logo
 * files, so there are zero external requests (never goes blank). Renders a
 * single static frame under prefers-reduced-motion.
 */
export function IntegrationsCloud() {
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const n = LOGOS.length
    const base = spherePoints(n)
    let ax = 0.32
    let ay = 0.0
    let raf = 0

    const render = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      const R = Math.min(w, h) * 0.42
      const ox = w / 2
      const oy = h / 2
      const sinX = Math.sin(ax)
      const cosX = Math.cos(ax)
      const sinY = Math.sin(ay)
      const cosY = Math.cos(ay)
      for (let i = 0; i < n; i++) {
        const el = itemRefs.current[i]
        if (!el) continue
        const [bx, by, bz] = base[i]
        // rotate around Y then X
        const x1 = bx * cosY - bz * sinY
        const z1 = bx * sinY + bz * cosY
        const y1 = by * cosX - z1 * sinX
        const z2 = by * sinX + z1 * cosX
        const depth = (z2 + 1) / 2 // 0 (back) .. 1 (front)
        const scale = 0.55 + depth * 0.6
        const px = ox + x1 * R
        const py = oy + y1 * R
        el.style.transform = `translate(-50%,-50%) translate(${px}px, ${py}px) scale(${scale})`
        el.style.opacity = String(0.35 + depth * 0.65)
        el.style.zIndex = String(Math.round(depth * 100))
      }
    }

    const loop = () => {
      ay += 0.003
      ax += 0.0011
      render()
      raf = requestAnimationFrame(loop)
    }

    if (reduce) {
      ay = 0.6
      render()
    } else {
      loop()
    }
    return () => cancelAnimationFrame(raf)
  }, [reduce])

  return (
    <div ref={containerRef} className="relative mx-auto aspect-square w-full max-w-[380px]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-80 blur-3xl"
        style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.16), transparent 66%)' }}
      />
      {LOGOS.map((name, i) => (
        <div
          key={name}
          ref={(el) => {
            itemRefs.current[i] = el
          }}
          className="absolute left-0 top-0 will-change-transform"
          style={{ opacity: 0 }}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white shadow-card">
            <span className="flex h-5 w-5 items-center justify-center">
              <BrandLogo name={name} label={name} />
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
