import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Icon, ThemeToggle, BrandMark } from '@/components/primitives'
import { Footer } from '@/components/sections/Footer'
import { cn } from '@/lib/utils'

/** Solid top bar for sub-pages (the marketing Nav is coupled to the dark
 *  hero's scroll state, so sub-pages use this always-solid variant).
 *  Marketing anchors route back to the home page (/#anchor). */
function PageNav() {
  const links = [
    { label: 'Product', href: '/#product', icon: 'LayoutGrid' },
    { label: 'Solutions', href: '/#industries', icon: 'Sparkles' },
    { label: 'Integrations', href: '/#integrations', icon: 'Blocks' },
    { label: 'Pricing', href: '/#pricing', icon: 'Tag' },
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/" aria-label="xTrac AI home" className="flex items-center gap-2.5">
          <BrandMark size={34} />
          <span className="text-[1.15rem] font-extrabold tracking-tight text-foreground">
            xTrac <span className="text-primary">AI</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon name={l.icon} size={16} strokeWidth={2} className="text-primary" />
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href="/login">Sign in</a>
          </Button>
          <Button asChild size="sm">
            <a href="/login">
              Get started
              <Icon name="ArrowRight" size={16} strokeWidth={2.4} />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}

interface PageShellProps {
  eyebrow?: string
  eyebrowIcon?: string
  title: ReactNode
  subtitle?: ReactNode
  /** Optional trailing meta line under the subtitle (e.g. "Last updated…"). */
  meta?: ReactNode
  children: ReactNode
}

/** Standard sub-page: solid nav → aurora header band → content → footer.
 *  Scrolls to top on mount so navigating between pages always starts at top. */
export function PageShell({ eyebrow, eyebrowIcon, title, subtitle, meta, children }: PageShellProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <PageNav />

      {/* Stripe-style header band: saturated diagonal gradient + angled
          ribbon stripes + slanted bottom edge. Shared by every sub-page
          (login and the home hero keep their own headers). */}
      <div className="relative isolate overflow-hidden">
        {/* gradient canvas */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            background:
              'linear-gradient(112deg, #0b2350 0%, #1d4ed8 34%, #2b7bff 58%, #6366f1 80%, #7c3aed 100%)',
          }}
        />
        {/* angled ribbon stripes (the Stripe signature) */}
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-24 top-4 h-11 w-[58%] -skew-y-6 bg-white/[0.09]" />
          <div className="absolute -right-44 top-[4.6rem] h-11 w-[44%] -skew-y-6 bg-cyan-300/20" />
          <div className="absolute -left-28 bottom-10 h-11 w-[42%] -skew-y-6 bg-indigo-300/15" />
          <div className="absolute -left-10 bottom-[5.4rem] h-11 w-[26%] -skew-y-6 bg-white/[0.06]" />
        </div>
        {/* slanted bottom edge cutting into the band */}
        <div aria-hidden className="absolute -bottom-12 left-0 right-0 -z-0 h-20 -skew-y-2 bg-background" />

        <div className="container pb-24 pt-14 sm:pb-28 sm:pt-16">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <Icon name="ArrowLeft" size={15} strokeWidth={2.2} />
              Back to home
            </Link>
          </div>
          {eyebrow && (
            <p
              className={cn(
                'mb-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-cyan-200',
              )}
            >
              {eyebrowIcon && <Icon name={eyebrowIcon} size={15} strokeWidth={2.2} />}
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.06] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-[1.075rem] leading-relaxed text-white/80">
              {subtitle}
            </p>
          )}
          {meta && <p className="mt-4 text-sm text-white/65">{meta}</p>}
        </div>
      </div>

      <main className="flex-1">
        <div className="container py-14 sm:py-16">{children}</div>
      </main>

      <Footer />
    </div>
  )
}
