import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@/components/primitives'

interface Cap {
  dept: string
  icon: string
  accent: string
  trigger: string
  reply: string
  result: string
}

const CAPS: Cap[] = [
  {
    dept: 'Support',
    icon: 'Headset',
    accent: '#2563eb',
    trigger: "Where's my order? #A-2847",
    reply: 'Shipped — arriving tomorrow by 6pm. Tracking is on your WhatsApp.',
    result: 'Resolved in 4 seconds · no human needed',
  },
  {
    dept: 'Operations',
    icon: 'Factory',
    accent: '#0891b2',
    trigger: 'New supplier order email received',
    reply: 'Parsed and entered straight into the ERP.',
    result: 'Zero manual data entry',
  },
  {
    dept: 'Compliance',
    icon: 'Pill',
    accent: '#4f46e5',
    trigger: 'Draft the SOP for Batch QA',
    reply: 'Generated from your past SOPs — ready for sign-off.',
    result: 'Minutes, not days',
  },
  {
    dept: 'Logistics',
    icon: 'Truck',
    accent: '#0d9488',
    trigger: "Plan today's deliveries",
    reply: 'Optimized 42 stops across 6 vans.',
    result: '20–30% lower fuel cost',
  },
  {
    dept: 'Growth',
    icon: 'TrendingUp',
    accent: '#db2777',
    trigger: '3 carts abandoned this hour',
    reply: 'Nudged on WhatsApp — 2 already recovered.',
    result: 'Sales on autopilot',
  },
]

function CapCard({ cap }: { cap: Cap }) {
  return (
    <div className="h-[184px] rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="mb-2.5 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg text-white" style={{ background: cap.accent }}>
          <Icon name={cap.icon} size={15} strokeWidth={2} />
        </span>
        <span className="text-sm font-semibold text-slate-900">xTrac AI · {cap.dept}</span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.68rem] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>
      <div className="space-y-2">
        <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2 text-[0.82rem] text-slate-700">{cap.trigger}</div>
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm px-3.5 py-2 text-[0.82rem] font-medium text-white" style={{ background: cap.accent }}>
          {cap.reply}
        </div>
        <div className="flex items-center gap-1.5 pt-0.5 text-[0.72rem] text-slate-500">
          <Icon name="Check" size={12} strokeWidth={3} className="text-emerald-500" />
          {cap.result}
        </div>
      </div>
    </div>
  )
}

/** Auto-cycling stacked deck of "what xTrac does" cards for the login panel. */
export function LoginCards() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const N = CAPS.length

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % N), 3200)
    return () => clearInterval(id)
  }, [reduce, N])

  const transition = reduce ? { duration: 0 } : { type: 'spring' as const, stiffness: 260, damping: 26 }

  return (
    <div className="relative h-[214px]">
      {CAPS.map((cap, i) => {
        const depth = (i - active + N) % N
        const shown = depth <= 2
        return (
          <motion.div
            key={cap.dept}
            className="absolute inset-x-0 top-0"
            style={{ zIndex: 30 - depth }}
            initial={false}
            animate={{ y: depth * 14, scale: 1 - depth * 0.045, opacity: shown ? (depth === 0 ? 1 : 0.85) : 0 }}
            transition={transition}
          >
            <CapCard cap={cap} />
          </motion.div>
        )
      })}
    </div>
  )
}
