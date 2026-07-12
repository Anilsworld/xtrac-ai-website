import { cn } from '@/lib/utils'

/**
 * xTrac AI logo mark — the mini-me robot mascot, framed to its head for use at
 * small sizes (nav, footer, login).
 */
export function BrandMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <span
      role="img"
      aria-label="xTrac AI"
      className={cn('inline-block shrink-0 rounded-xl bg-white bg-no-repeat ring-1 ring-black/5', className)}
      style={{
        width: size,
        height: size,
        backgroundImage: 'url(/mini-me.png)',
        backgroundSize: '185%',
        backgroundPosition: '48% 13%',
      }}
    />
  )
}
