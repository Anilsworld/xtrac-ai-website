import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionProps {
  id?: string
  eyebrow?: string
  eyebrowIcon?: ReactNode
  title?: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  className?: string
  containerClassName?: string
  children?: ReactNode
}

/** Standard marketing section: consistent width, vertical rhythm and header block. */
export function Section({
  id,
  eyebrow,
  eyebrowIcon,
  title,
  subtitle,
  align = 'center',
  className,
  containerClassName,
  children,
}: SectionProps) {
  const hasHeader = eyebrow || title || subtitle
  return (
    <section id={id} className={cn('py-20 sm:py-24 lg:py-28', className)}>
      <div className={cn('container', containerClassName)}>
        {hasHeader && (
          <Reveal
            className={cn(
              'mb-12 max-w-2xl sm:mb-14',
              align === 'center' && 'mx-auto text-center',
            )}
          >
            {eyebrow && (
              <p className={cn('eyebrow mb-3', align === 'center' && 'justify-center')}>
                {eyebrowIcon}
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.08]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">{subtitle}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
