import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { NAV_LINKS } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Icon, ThemeToggle, BrandMark } from '@/components/primitives'
import { cn } from '@/lib/utils'

function Wordmark({ light }: { light?: boolean }) {
  return (
    <a href="#top" aria-label="xTrac AI home" className="flex items-center gap-2.5">
      <BrandMark size={34} />
      <span className={cn('text-[1.15rem] font-extrabold tracking-tight', light ? 'text-white' : 'text-foreground')}>
        xTrac <span className={light ? 'text-white/80' : 'text-primary'}>AI</span>
      </span>
    </a>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Stay transparent (white text) while over the always-dark hero; only go
      // to a solid themed bar once scrolled past it into the page body.
      const hero = document.getElementById('top')
      const trigger = hero ? hero.offsetHeight - 72 : window.innerHeight * 0.8
      setScrolled(window.scrollY > trigger)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = !scrolled // white text while over the dark hero

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <Wordmark light={light} />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
                light ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle
            className={cn(light && 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white')}
          />
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={cn('hidden sm:inline-flex', light && 'text-white/90 hover:bg-white/10 hover:text-white')}
          >
            <a href="/login">Sign in</a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="/login">
              Get started
              <Icon name="ArrowRight" size={16} strokeWidth={2.4} />
            </a>
          </Button>

          {/* mobile menu */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                aria-label="Open menu"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden',
                  light ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-accent',
                )}
              >
                <Icon name="Menu" size={22} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm data-[state=open]:animate-fade-up" />
              <Dialog.Content className="fixed inset-x-3 top-3 z-50 rounded-xl border border-border bg-card p-5 shadow-card focus:outline-none data-[state=open]:animate-fade-up">
                <div className="mb-4 flex items-center justify-between">
                  <Wordmark />
                  <Dialog.Close asChild>
                    <button aria-label="Close menu" className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent">
                      <Icon name="X" size={20} />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="flex flex-col">
                  {NAV_LINKS.map((l) => (
                    <Dialog.Close asChild key={l.href}>
                      <a href={l.href} className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-accent">
                        {l.label}
                      </a>
                    </Dialog.Close>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <a href="/login">Sign in</a>
                  </Button>
                  <Button asChild className="w-full">
                    <a href="/login">Get started</a>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  )
}
