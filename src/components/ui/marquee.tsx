import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Seamless infinite marquee. Renders the SAME children in two identical tracks;
 * each track translates -100% of its own width, so as one track exits left the
 * other has already tiled in behind it — no reset/jump.
 *
 * Requirement for a gap-free loop: one track must be at least as wide as the
 * container. If you have only a few items, repeat them (e.g. `[...items,
 * ...items]`) before passing them in.
 */
export function Marquee({
  children,
  className,
  trackClassName,
  durationSec = 40,
  pauseOnHover = false,
}: {
  children: ReactNode
  className?: string
  /** classes for each track (e.g. spacing: "items-center gap-14 pr-14") */
  trackClassName?: string
  durationSec?: number
  pauseOnHover?: boolean
}) {
  return (
    <div className={cn('mask-fade-x group flex overflow-hidden', className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            'flex shrink-0 animate-marquee',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
            trackClassName,
          )}
          style={{ animationDuration: `${durationSec}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
