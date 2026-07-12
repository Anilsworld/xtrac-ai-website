import { Button } from '@/components/ui/button'
import { Icon, Reveal } from '@/components/primitives'

export function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-6 py-16 text-center sm:px-16"
            style={{ background: 'linear-gradient(120deg,#1d4ed8,#2b7bff 45%,#4f46e5)' }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.28), rgba(255,255,255,0) 70%)',
              }}
            />
            <div className="relative">
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-white">
                Put your business on autopilot.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Describe your business in plain words. In five minutes, your AI workforce is live
                across every channel.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-white/90">
                  <a href="https://business.xtrac.app">
                    Start free <Icon name="ArrowRight" size={18} />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="/contact">Book a demo</a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/70">
                No credit card required · Live in 5 minutes
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
