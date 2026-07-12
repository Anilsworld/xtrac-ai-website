import { useTheme } from '@/components/theme-provider'
import { Icon } from './Icon'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
    >
      <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} strokeWidth={2} />
    </button>
  )
}
