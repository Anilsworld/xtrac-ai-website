import { Reveal, Icon, BrandLogo } from '@/components/primitives'
import { Marquee } from '@/components/ui/marquee'

/**
 * Trust / certification badges as a running marquee — placed high on the page
 * (right below the hero) so visitors see compliance signals before the fold.
 *  - `logo`: a real brand SVG in /public/logos/<name>.svg
 *  - `icon`: a lucide fallback for marks with no official logo (a law, a
 *            standard). Drop an official badge SVG in /public/logos and set
 *            `logo` (e.g. logo:'casa') to replace the icon.
 */
const COMPLIANCE: { label: string; logo?: string; icon?: string }[] = [
  { label: 'GDPR', logo: 'eu' }, // EU emblem (public domain)
  { label: 'DPDP Act 2023', icon: 'Scale' },
  { label: 'AES-256', icon: 'Lock' },
  { label: 'Meta Tech Partner', logo: 'meta' },
  { label: 'Amazon Solution Provider', logo: 'amazon' },
  { label: 'CASA Certified', icon: 'BadgeCheck' },
]

// Repeat so one track exceeds the container width → seamless, gap-free loop.
const LOOP = [...COMPLIANCE, ...COMPLIANCE]

function TrustBadge({ item }: { item: (typeof COMPLIANCE)[number] }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
      <span className="grid h-6 w-6 shrink-0 place-items-center">
        {item.logo ? (
          <span className="h-5 w-5">
            <BrandLogo name={item.logo} label={item.label} />
          </span>
        ) : (
          <Icon name={item.icon ?? 'ShieldCheck'} size={17} strokeWidth={2} className="text-primary" />
        )}
      </span>
      <span className="whitespace-nowrap text-sm font-semibold">{item.label}</span>
    </span>
  )
}

export function TrustMarquee() {
  return (
    <section className="border-b border-border bg-background py-9">
      <div className="container">
        <Reveal>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Enterprise-grade security &amp; compliance
          </p>
          <Marquee trackClassName="items-center gap-4 pr-4" durationSec={46}>
            {LOOP.map((item, i) => (
              <span key={`${item.label}-${i}`} className="flex items-center">
                <TrustBadge item={item} />
              </span>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  )
}
