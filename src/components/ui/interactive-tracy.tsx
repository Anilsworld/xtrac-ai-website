import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@/components/primitives'
import { cn } from '@/lib/utils'

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
  { name: 'Zara', color: '#111827', icon: 'Shirt' },
  { name: 'Shopify', color: '#5E8E3E', icon: 'ShoppingBag', logo: 'shopify' },
  { name: 'Zomato', color: '#E23744', icon: 'UtensilsCrossed' },
  { name: 'Instagram', color: '#E1306C', icon: 'Instagram', logo: 'instagram' },
  { name: 'Gmail', color: '#EA4335', icon: 'Mail', logo: 'gmail' },
]

interface Opt {
  name: string
  meta: string
  icon: string
  color: string
  logo?: string
}
interface Suggestion {
  label: string
  chip: string
  app: number
  user: string
  intro: string
  options: Opt[]
  chosen: number // index, or -1 = all
  done: { title: string; meta: string }
}

const SUGGESTIONS: Suggestion[] = [
  {
    label: 'Order food',
    chip: 'UtensilsCrossed',
    app: 0,
    user: 'I want to order food',
    intro: 'On it — top picks near you:',
    options: [
      { name: 'Truffle Pasta · Olio', meta: '₹420 · 25 min', icon: 'UtensilsCrossed', color: '#FC8019' },
      { name: 'Margherita · Pizza Co', meta: '₹350 · 30 min', icon: 'Pizza', color: '#E23744' },
      { name: 'Butter Chicken · Spice', meta: '₹480 · 35 min', icon: 'UtensilsCrossed', color: '#FC8019' },
    ],
    chosen: 0,
    done: { title: 'Ordered from Olio', meta: 'Swiggy · 25 min' },
  },
  {
    label: 'Book a ride',
    chip: 'Car',
    app: 1,
    user: 'Book me a ride home',
    intro: 'Here are your rides home:',
    options: [
      { name: 'Uber Go', meta: '₹180 · 4 min away', icon: 'Car', color: '#111827', logo: 'uber' },
      { name: 'Ola Mini', meta: '₹165 · 6 min away', icon: 'Car', color: '#1e293b' },
      { name: 'Uber Premier', meta: '₹260 · 3 min away', icon: 'Car', color: '#111827', logo: 'uber' },
    ],
    chosen: 0,
    done: { title: 'Uber Go booked', meta: '4 min away' },
  },
  {
    label: 'Buy clothes',
    chip: 'Shirt',
    app: 3,
    user: 'I need a white shirt',
    intro: 'Found these in your size:',
    options: [
      { name: 'Linen Shirt · Zara', meta: '₹1,999', icon: 'Shirt', color: '#111827' },
      { name: 'Oxford Shirt · H&M', meta: '₹1,299', icon: 'Shirt', color: '#dc2626' },
      { name: 'Cotton Shirt · Uniqlo', meta: '₹1,490', icon: 'Shirt', color: '#e11d48' },
    ],
    chosen: 1,
    done: { title: 'Ordered from H&M', meta: 'Arrives tomorrow' },
  },
  {
    label: 'Reorder',
    chip: 'ShoppingCart',
    app: 2,
    user: 'Reorder my essentials',
    intro: 'Your usual essentials:',
    options: [
      { name: 'Coffee beans · 1kg', meta: '₹650', icon: 'Coffee', color: '#a16207' },
      { name: 'Dish soap ×2', meta: '₹180', icon: 'Droplets', color: '#0891b2' },
      { name: 'Paper towels', meta: '₹240', icon: 'ScrollText', color: '#65a30d' },
    ],
    chosen: -1,
    done: { title: '3 items reordered', meta: 'Amazon · tomorrow' },
  },
  {
    label: 'Sort inbox',
    chip: 'Mail',
    app: 7,
    user: 'Sort my inbox',
    intro: 'Triaged 45 emails — these need you:',
    options: [
      { name: 'Proposal · Acme Corp', meta: 'Reply drafted for you', icon: 'Mail', color: '#EA4335' },
      { name: 'Invoice #2041 · paid', meta: 'Receipt filed', icon: 'ReceiptText', color: '#16a34a' },
      { name: 'Newsletters ×30', meta: 'Archived', icon: 'Archive', color: '#64748b' },
    ],
    chosen: 0,
    done: { title: 'Inbox cleared', meta: 'Gmail · 45 handled' },
  },
  {
    label: 'Send invoice',
    chip: 'ReceiptText',
    app: 4,
    user: 'Invoice my Shopify orders',
    intro: 'Ready to send for today:',
    options: [
      { name: 'Order #1180 · ₹4,200', meta: 'Aura Botanics', icon: 'ShoppingBag', color: '#5E8E3E', logo: 'shopify' },
      { name: 'Order #1181 · ₹2,650', meta: 'Meadow Co', icon: 'ShoppingBag', color: '#5E8E3E', logo: 'shopify' },
      { name: 'Order #1182 · ₹5,900', meta: 'Bloom & Co', icon: 'ShoppingBag', color: '#5E8E3E', logo: 'shopify' },
    ],
    chosen: -1,
    done: { title: '3 invoices sent', meta: 'Emailed + logged' },
  },
]

interface LogItem {
  id: number
  type: 'user' | 'agent' | 'options' | 'activity'
  text?: string
  app?: number
  title?: string
  meta?: string
  options?: Opt[]
  chosen?: number
}

function Tile({ app, active }: { app: App; active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        animate={{ scale: active ? 1.12 : 1, y: active ? -2 : 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className="grid h-11 w-11 place-items-center rounded-[13px]"
        style={{
          background: `linear-gradient(160deg, ${app.color}26, ${app.color}12)`,
          border: `1px solid ${app.color}3a`,
          boxShadow: active ? `0 0 0 3px ${app.color}2e, 0 10px 20px -8px ${app.color}` : '0 4px 12px -8px rgba(15,23,42,0.4)',
        }}
      >
        {app.logo ? (
          <img src={`/logos/${app.logo}.svg`} alt="" className="h-[22px] w-[22px] object-contain" />
        ) : (
          <Icon name={app.icon} size={20} strokeWidth={2} style={{ color: app.color }} />
        )}
      </motion.div>
      <span className="text-[9px] font-semibold text-slate-500">{app.name}</span>
    </div>
  )
}

function OptionRow({ opt, state }: { opt: Opt; state: 'idle' | 'chosen' | 'dimmed' }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-xl border px-2.5 py-1.5 transition-all duration-300',
        state === 'chosen' ? 'border-transparent bg-white shadow-sm' : 'border-slate-200 bg-white/70',
        state === 'dimmed' && 'opacity-45',
      )}
      style={state === 'chosen' ? { boxShadow: `0 0 0 1.5px ${opt.color}55, 0 8px 18px -12px ${opt.color}` } : undefined}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg" style={{ background: `${opt.color}18`, border: `1px solid ${opt.color}33` }}>
        {opt.logo ? (
          <img src={`/logos/${opt.logo}.svg`} alt="" className="h-3.5 w-3.5 object-contain" />
        ) : (
          <Icon name={opt.icon} size={14} strokeWidth={2} style={{ color: opt.color }} />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[10.5px] font-semibold text-slate-800">{opt.name}</div>
        <div className="truncate text-[9px] text-slate-500">{opt.meta}</div>
      </div>
      <span
        className="grid h-4 w-4 shrink-0 place-items-center rounded-full transition-colors"
        style={state === 'chosen' ? { background: opt.color } : { border: '1.5px solid #cbd5e1' }}
      >
        {state === 'chosen' && <Icon name="Check" size={10} strokeWidth={3.5} className="text-white" />}
      </span>
    </div>
  )
}

/** Live, clickable Tracy demo: tap a request, she shows options, then books it. */
export function InteractiveTracy() {
  const reduce = useReducedMotion()
  const [log, setLog] = useState<LogItem[]>(() => {
    // seed a completed "order food" conversation so the phone is never empty
    const s = SUGGESTIONS[0]
    return [
      { id: 1, type: 'user', text: s.user },
      { id: 2, type: 'agent', text: s.intro },
      { id: 3, type: 'options', app: s.app, options: s.options, chosen: s.chosen },
      { id: 4, type: 'activity', app: s.app, title: s.done.title, meta: s.done.meta },
    ]
  })
  const [busy, setBusy] = useState(false)
  const [typing, setTyping] = useState(false)
  const [activeApp, setActiveApp] = useState<number | null>(null)
  const idRef = useRef(4)
  const busyRef = useRef(false)
  const timers = useRef<number[]>([])
  const streamRef = useRef<HTMLDivElement>(null)

  const nid = () => ++idRef.current
  const add = (item: Omit<LogItem, 'id'>) => setLog((l) => [...l, { id: nid(), ...item }].slice(-8))

  const run = (s: Suggestion) => {
    if (busyRef.current) return
    add({ type: 'user', text: s.user })
    if (reduce) {
      add({ type: 'agent', text: s.intro })
      add({ type: 'options', app: s.app, options: s.options, chosen: s.chosen })
      add({ type: 'activity', app: s.app, title: s.done.title, meta: s.done.meta })
      return
    }
    busyRef.current = true
    setBusy(true)
    setActiveApp(s.app)
    setTyping(true)
    const optId = nid()
    timers.current.push(
      window.setTimeout(() => {
        setTyping(false)
        setLog((l) => [...l, { id: nid(), type: 'agent' as const, text: s.intro }].slice(-8))
        setLog((l) => [...l, { id: optId, type: 'options' as const, app: s.app, options: s.options, chosen: -2 }].slice(-8))
      }, 850),
    )
    timers.current.push(
      window.setTimeout(() => {
        setLog((l) => l.map((it) => (it.id === optId ? { ...it, chosen: s.chosen } : it)))
      }, 1800),
    )
    timers.current.push(
      window.setTimeout(() => {
        setLog((l) => [...l, { id: nid(), type: 'activity' as const, app: s.app, title: s.done.title, meta: s.done.meta }].slice(-8))
        setActiveApp(null)
        busyRef.current = false
        setBusy(false)
      }, 2650),
    )
  }

  useEffect(() => {
    const t = timers.current
    return () => t.forEach((id) => clearTimeout(id))
  }, [])

  // auto-play: cycle through the requests while idle (still fully clickable)
  useEffect(() => {
    if (reduce) return
    let idx = 1
    const iv = window.setInterval(() => {
      if (busyRef.current) return
      run(SUGGESTIONS[idx % SUGGESTIONS.length])
      idx += 1
    }, 4800)
    return () => clearInterval(iv)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce])

  useEffect(() => {
    if (streamRef.current) streamRef.current.scrollTop = streamRef.current.scrollHeight
  }, [log, typing])

  const anim = reduce
    ? {}
    : { initial: { opacity: 0, y: 8, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }

  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-white to-slate-100 font-sans">
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pb-1 pt-3">
        <span className="text-[11px] font-bold text-slate-900">9:41</span>
        <div className="flex gap-1.5 text-slate-900">
          <Icon name="Signal" size={12} strokeWidth={2.4} />
          <Icon name="Wifi" size={12} strokeWidth={2.4} />
          <Icon name="BatteryFull" size={14} strokeWidth={2.2} />
        </div>
      </div>

      {/* header */}
      <div className="flex items-center gap-2.5 px-5 pt-1.5">
        <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-gradient-to-br from-sky-400 to-blue-700 shadow-[0_8px_16px_-8px_rgba(2,132,199,0.7)]">
          <Icon name="Sparkles" size={17} className="text-white" strokeWidth={2.2} />
        </span>
        <div className="flex-1">
          <div className="text-[15px] font-extrabold leading-none text-slate-900">Tracy</div>
          <div className="mt-0.5 text-[10.5px] text-slate-500">Your personal AI · online</div>
        </div>
      </div>

      {/* connected apps */}
      <div className="px-4 pt-3">
        <div className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.08em] text-slate-400">Connected apps</div>
        <div className="grid grid-cols-4 gap-y-2">
          {APPS.map((app, i) => (
            <Tile key={app.name} app={app} active={activeApp === i} />
          ))}
        </div>
      </div>

      {/* conversation stream */}
      <div ref={streamRef} className="no-scrollbar mt-2.5 flex-1 space-y-2 overflow-y-auto px-4 pb-1">
        <AnimatePresence initial={false}>
          {log.map((item) => {
            if (item.type === 'user') {
              return (
                <motion.div key={item.id} {...anim} className="flex justify-end">
                  <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-blue-600 px-3 py-1.5 text-[11.5px] font-medium text-white">{item.text}</div>
                </motion.div>
              )
            }
            if (item.type === 'agent') {
              return (
                <motion.div key={item.id} {...anim} className="flex items-end gap-1.5">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-blue-700">
                    <Icon name="Sparkles" size={10} className="text-white" />
                  </span>
                  <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-white px-3 py-1.5 text-[11.5px] text-slate-700 shadow-sm ring-1 ring-slate-200">{item.text}</div>
                </motion.div>
              )
            }
            if (item.type === 'options') {
              return (
                <motion.div key={item.id} {...anim} className="ml-6 space-y-1.5">
                  {item.options!.map((opt, oi) => {
                    const state =
                      item.chosen === -2
                        ? 'idle'
                        : item.chosen === -1 || item.chosen === oi
                          ? 'chosen'
                          : 'dimmed'
                    return <OptionRow key={opt.name} opt={opt} state={state} />
                  })}
                </motion.div>
              )
            }
            const app = APPS[item.app!]
            return (
              <motion.div key={item.id} {...anim} className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/60 px-2.5 py-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg" style={{ background: `${app.color}18`, border: `1px solid ${app.color}33` }}>
                  {app.logo ? (
                    <img src={`/logos/${app.logo}.svg`} alt="" className="h-3.5 w-3.5 object-contain" />
                  ) : (
                    <Icon name={app.icon} size={14} strokeWidth={2} style={{ color: app.color }} />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[11px] font-bold text-slate-900">{item.title}</div>
                  <div className="truncate text-[9.5px] text-slate-500">{item.meta}</div>
                </div>
                <Icon name="CheckCheck" size={15} strokeWidth={2.5} className="text-emerald-500" />
              </motion.div>
            )
          })}
        </AnimatePresence>
        {typing && (
          <div className="flex items-center gap-1.5">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-blue-700">
              <Icon name="Sparkles" size={10} className="text-white" />
            </span>
            <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
              {[0, 1, 2].map((d) => (
                <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-slate-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* interactive suggestion chips */}
      <div className="border-t border-slate-200 bg-white/80 px-3 py-2.5 backdrop-blur">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-0.5">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => run(s)}
              disabled={busy}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm transition active:scale-95 disabled:opacity-50"
            >
              <Icon name={s.chip} size={12} strokeWidth={2.2} className="text-blue-600" />
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
