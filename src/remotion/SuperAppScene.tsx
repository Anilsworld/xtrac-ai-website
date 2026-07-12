import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import { Icon } from '@/components/primitives/Icon'

interface App {
  name: string
  color: string
  icon: string
  logo?: string
}
const APPS: App[] = [
  { name: 'Swiggy', color: '#FC8019', icon: 'UtensilsCrossed' },
  { name: 'Uber', color: '#111827', icon: 'Car', logo: 'uber' },
  { name: 'Amazon', color: '#FF9900', icon: 'ShoppingCart' },
  { name: 'Shopify', color: '#5E8E3E', icon: 'ShoppingBag', logo: 'shopify' },
  { name: 'WhatsApp', color: '#25D366', icon: 'MessageCircle', logo: 'whatsapp' },
  { name: 'Zomato', color: '#E23744', icon: 'UtensilsCrossed' },
  { name: 'Instagram', color: '#E1306C', icon: 'Instagram', logo: 'instagram' },
  { name: 'Gmail', color: '#EA4335', icon: 'Mail', logo: 'gmail' },
]

interface Activity {
  app: number
  title: string
  meta: string
}
const ACTIVITY: Activity[] = [
  { app: 0, title: 'Dinner ordered on Swiggy', meta: 'Arriving in 25 min' },
  { app: 1, title: 'Uber booked home', meta: 'Cab 4 min away' },
  { app: 2, title: 'Amazon essentials reordered', meta: '3 items · tomorrow' },
  { app: 3, title: 'Shopify store replies sent', meta: '3 customers · done' },
]

const LOOP = 440
const PROMPT = 'Order dinner & book my ride home'
const actStart = (idx: number) => 108 + idx * 62

function fadeWindow(frame: number, start: number, end: number, fade = 16) {
  const up = interpolate(frame, [start, start + fade], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const down = interpolate(frame, [end - fade, end], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  return Math.min(up, down)
}

function Tile({ app, active }: { app: App; active: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          display: 'grid',
          placeItems: 'center',
          background: `linear-gradient(160deg, ${app.color}26, ${app.color}12)`,
          border: `1px solid ${app.color}3a`,
          boxShadow: active > 0.02 ? `0 0 0 ${2 + active * 2}px ${app.color}22, 0 10px 22px -10px ${app.color}` : '0 6px 16px -10px rgba(15,23,42,0.4)',
          transform: `translateY(${active * -3}px) scale(${1 + active * 0.05})`,
        }}
      >
        {app.logo ? (
          <img src={`/logos/${app.logo}.svg`} alt="" style={{ width: 30, height: 30, objectFit: 'contain' }} />
        ) : (
          <Icon name={app.icon} size={26} strokeWidth={2} style={{ color: app.color }} />
        )}
      </div>
      <span style={{ fontSize: 11, fontWeight: 600, color: '#334155', fontFamily: 'Plus Jakarta Sans Variable, sans-serif' }}>
        {app.name}
      </span>
    </div>
  )
}

/** Superapp screen: user types a request, Tracy fans it out across many apps. */
export const SuperAppScene: React.FC = () => {
  const frame = useCurrentFrame()

  // typewriter prompt
  const typedLen = Math.floor(interpolate(frame, [12, 82], [0, PROMPT.length], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }))
  const typed = PROMPT.slice(0, typedLen)
  const typing = frame < 88
  const cursorOn = Math.floor(frame / 9) % 2 === 0
  const sendPulse = 1 + fadeWindow(frame, 84, 102, 8) * 0.16
  const working = fadeWindow(frame, 96, LOOP - 4, 12)

  const activeByApp = APPS.map((_, i) => {
    let v = 0
    ACTIVITY.forEach((a, idx) => {
      if (a.app === i) v = Math.max(v, fadeWindow(frame, actStart(idx) - 8, actStart(idx) + 150, 20))
    })
    return v
  })

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(180deg, #ffffff, #f1f5f9)', fontFamily: 'Plus Jakarta Sans Variable, sans-serif' }}>
      {/* status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 22px 4px' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>9:41</span>
        <div style={{ display: 'flex', gap: 6, color: '#0f172a' }}>
          <Icon name="Signal" size={14} strokeWidth={2.4} />
          <Icon name="Wifi" size={14} strokeWidth={2.4} />
          <Icon name="BatteryFull" size={16} strokeWidth={2.2} />
        </div>
      </div>

      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 22px 0' }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(160deg,#38bdf8,#0369a1)', display: 'grid', placeItems: 'center', boxShadow: '0 8px 18px -8px rgba(2,132,199,0.7)' }}>
          <Icon name="Sparkles" size={19} color="#fff" strokeWidth={2.2} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>Tracy</div>
          <div style={{ fontSize: 11.5, color: '#64748b', marginTop: -1 }}>Your personal AI · online</div>
        </div>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#e2e8f0' }} />
      </div>

      {/* prompt bar with typewriter */}
      <div style={{ margin: '14px 22px 0', height: 46, borderRadius: 14, background: '#fff', border: `1px solid ${typing ? '#0284c7' : '#e2e8f0'}`, display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px', boxShadow: '0 6px 20px -14px rgba(15,23,42,0.4)' }}>
        <Icon name="Sparkles" size={16} strokeWidth={2} style={{ color: '#0284c7' }} />
        <span style={{ fontSize: 13.5, color: typedLen > 0 ? '#0f172a' : '#94a3b8', fontWeight: typedLen > 0 ? 500 : 400, flex: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {typedLen > 0 ? typed : 'Ask Tracy to do anything…'}
          {typing && cursorOn ? <span style={{ color: '#0284c7' }}>|</span> : ''}
        </span>
        <div style={{ width: 30, height: 30, borderRadius: 9, background: 'linear-gradient(160deg,#38bdf8,#0369a1)', display: 'grid', placeItems: 'center', transform: `scale(${sendPulse})` }}>
          <Icon name={frame > 88 ? 'Check' : 'ArrowUp'} size={15} color="#fff" strokeWidth={2.4} />
        </div>
      </div>

      {/* connected apps */}
      <div style={{ padding: '20px 22px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 12 }}>
          Connected apps
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', rowGap: 16, columnGap: 8 }}>
          {APPS.map((app, i) => (
            <Tile key={app.name} app={app} active={activeByApp[i]} />
          ))}
        </div>
      </div>

      {/* live activity feed */}
      <div style={{ padding: '20px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, opacity: working }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8' }}>
            Tracy is working
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {ACTIVITY.map((a, idx) => {
            const start = actStart(idx)
            const op = fadeWindow(frame, start, start + 175, 18)
            const rise = interpolate(op, [0, 1], [14, 0])
            const app = APPS[a.app]
            return (
              <div
                key={a.title}
                style={{
                  opacity: op,
                  transform: `translateY(${rise}px)`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 11,
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 13,
                  padding: '11px 13px',
                  boxShadow: '0 8px 22px -16px rgba(15,23,42,0.5)',
                }}
              >
                <div style={{ width: 34, height: 34, borderRadius: 10, display: 'grid', placeItems: 'center', background: `${app.color}18`, border: `1px solid ${app.color}33` }}>
                  {app.logo ? (
                    <img src={`/logos/${app.logo}.svg`} alt="" style={{ width: 18, height: 18, objectFit: 'contain' }} />
                  ) : (
                    <Icon name={app.icon} size={17} strokeWidth={2} style={{ color: app.color }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{a.title}</div>
                  <div style={{ fontSize: 11.5, color: '#64748b' }}>{a.meta}</div>
                </div>
                <Icon name="Check" size={17} strokeWidth={3} style={{ color: '#22c55e' }} />
              </div>
            )
          })}
        </div>
      </div>
    </AbsoluteFill>
  )
}

export const SUPERAPP_DURATION = LOOP
