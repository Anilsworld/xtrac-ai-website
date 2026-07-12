import { Reveal, BrandLogo } from '@/components/primitives'
import { TRUST_LOGOS } from '@/lib/content'

export function LogosStrip() {
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            Works with the tools your business already runs on
          </p>
          {/* Two identical tracks each translate -100% → seamless, gap-matched loop */}
          <div className="mask-fade-x flex overflow-hidden">
            {[0, 1].map((track) => (
              <ul
                key={track}
                aria-hidden={track === 1}
                className="flex shrink-0 animate-marquee items-center gap-14 pr-14"
              >
                {TRUST_LOGOS.map((l) => (
                  <li key={l.name} className="flex h-7 shrink-0 items-center">
                    <span className="h-7 w-auto opacity-75 transition-opacity duration-300 hover:opacity-100">
                      <BrandLogo name={l.name} label={l.label} />
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
