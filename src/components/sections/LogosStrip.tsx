import { Reveal, BrandLogo } from '@/components/primitives'
import { Marquee } from '@/components/ui/marquee'
import { TRUST_LOGOS } from '@/lib/content'

// Repeat so one track is wider than the container → the loop never shows a gap.
const LOOP = [...TRUST_LOGOS, ...TRUST_LOGOS]

export function LogosStrip() {
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            Works with the tools your business already runs on
          </p>
          <Marquee trackClassName="items-center gap-14 pr-14" durationSec={44}>
            {LOOP.map((l, i) => (
              <span key={`${l.name}-${i}`} className="flex h-7 shrink-0 items-center">
                <span className="h-7 w-auto opacity-75 transition-opacity duration-300 hover:opacity-100">
                  <BrandLogo name={l.name} label={l.label} />
                </span>
              </span>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  )
}
