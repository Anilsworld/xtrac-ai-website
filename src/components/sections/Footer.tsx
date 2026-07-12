import { Reveal, Icon, BrandMark } from '@/components/primitives'
import { FOOTER } from '@/lib/content'

const SOCIALS = [
  { name: 'Linkedin', label: 'LinkedIn' },
  { name: 'Twitter', label: 'Twitter' },
  { name: 'Github', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-16">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
            {/* brand */}
            <div>
              <div className="flex items-center gap-2.5">
                <BrandMark size={32} />
                <span className="text-lg font-extrabold">xTrac <span className="text-primary">AI</span></span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Autonomous AI agents that run your business across WhatsApp, web and voice.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon name={s.name} size={19} strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            {/* link columns */}
            {FOOTER.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
            <span>© 2026 iEllipse Technologies</span>
            <span className="inline-flex items-center gap-1.5">
              Made with
              <Icon name="Heart" size={13} className="text-primary" />
              in Mysuru, India
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
