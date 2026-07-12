import { ShaderHero } from '@/components/ui/shader-hero'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/primitives'
import { HERO_STATS } from '@/lib/content'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* shader backdrop */}
      <ShaderHero />
      {/* legibility + blend overlays */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, rgba(4,9,15,0.35), rgba(4,9,15,0.72) 55%, rgba(4,9,15,0.9) 100%)',
        }}
      />

      <div className="container relative z-10 flex min-h-[92svh] flex-col items-center justify-center pb-16 pt-28 text-center sm:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.8125rem] font-medium text-white/90 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
          </span>
          Autonomous AI agents for your whole business
        </div>

        <h1 className="mt-7 max-w-4xl text-[clamp(2.6rem,6.2vw,4.8rem)] font-extrabold leading-[1.03] tracking-tight text-white">
          One AI workforce for your{' '}
          <span className="bg-gradient-to-r from-sky-300 via-brand-300 to-indigo-300 bg-clip-text text-transparent">
            entire business
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-[1.075rem] leading-relaxed text-slate-300 sm:text-lg">
          xTrac deploys autonomous agents across sales, support, operations and finance — live on
          WhatsApp, web and voice. Set up in five minutes, no code.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="shine-cta w-full sm:w-auto">
            <a href="https://business.xtrac.app">
              Start free
              <Icon name="ArrowRight" size={18} strokeWidth={2.4} />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white sm:w-auto"
          >
            <a href="/contact">
              <Icon name="PlayCircle" size={18} strokeWidth={2} />
              Book a demo
            </a>
          </Button>
        </div>

        <p className="mt-5 text-sm text-white/60">No credit card required · Live in 5 minutes</p>

        {/* stats */}
        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="bg-white/[0.02] p-5 text-center">
              <div className="text-2xl font-extrabold tracking-tight text-white tnum sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-[0.8rem] leading-snug text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
