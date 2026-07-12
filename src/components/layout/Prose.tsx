import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Long-form text wrapper for legal / help / policy pages. Styled headings,
 *  paragraphs, lists and links using the shared tokens (no @tailwind/typography
 *  dependency needed). */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl text-[0.975rem] leading-[1.75] text-muted-foreground',
        '[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground',
        '[&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground',
        '[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc',
        '[&_a]:font-medium [&_a]:text-primary hover:[&_a]:underline',
        '[&_strong]:font-semibold [&_strong]:text-foreground',
        '[&_h2:first-child]:mt-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
