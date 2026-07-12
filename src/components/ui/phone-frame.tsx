import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Realistic phone bezel with a centered notch. Children fill the screen. */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative mx-auto w-[290px] max-w-full', className)}>
      <div className="relative rounded-[46px] bg-slate-950 p-[9px] shadow-[0_50px_90px_-35px_rgba(15,23,42,0.55)] ring-1 ring-slate-900/10 dark:ring-white/10">
        {/* subtle bezel highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-[46px] ring-1 ring-inset ring-white/10" />
        <div className="relative aspect-[380/800] overflow-hidden rounded-[38px] bg-white">
          {/* notch */}
          <div className="absolute left-1/2 top-[9px] z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-slate-950" />
          {children}
        </div>
      </div>
      {/* side buttons */}
      <span className="absolute -left-[3px] top-[120px] h-9 w-[3px] rounded-l bg-slate-800" />
      <span className="absolute -left-[3px] top-[168px] h-9 w-[3px] rounded-l bg-slate-800" />
      <span className="absolute -right-[3px] top-[140px] h-14 w-[3px] rounded-r bg-slate-800" />
    </div>
  )
}
