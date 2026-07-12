import { cn } from '@/lib/utils'

interface BrandLogoProps {
  name: string
  label: string
  className?: string
  /** render desaturated until hovered (for trust rows) */
  mono?: boolean
}

/** Renders a real brand SVG (sourced via 21st search_logo → svgl) from /logos. */
export function BrandLogo({ name, label, className, mono }: BrandLogoProps) {
  return (
    <img
      src={`/logos/${name}.svg`}
      alt={`${label} logo`}
      loading="lazy"
      className={cn(
        'h-full w-auto object-contain',
        mono &&
          'opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:invert dark:hover:invert-0',
        className,
      )}
    />
  )
}
