import { PageShell } from '@/components/layout/PageShell'
import { CircularTestimonials } from '@/components/ui/circular-testimonials'
import { Icon } from '@/components/primitives'

/** Founders shown in the 21st.dev coverflow carousel: photo + name + role
 *  (designation) + bio (quote). LinkedIn / email live in the row below. */
const FOUNDERS = [
  {
    name: 'Anil Kumar',
    designation: 'Co-founder & CEO',
    quote:
      'Sets the vision and leads product and engineering — turning a website URL into a working AI organization. Data Protection Officer for xTrac AI.',
    src: '/founders/anil.png',
    email: 'akumar@xtrac.app',
    linkedin: 'https://www.linkedin.com/in/anilkumarhm/',
  },
  {
    name: 'Manoj Shetty',
    designation: 'COO',
    quote:
      'Runs operations and go-to-market — building partnerships and bringing xTrac to businesses across India and beyond.',
    src: '/founders/manoj.jpg',
    email: 'manojshetty@iellipse.com',
    linkedin: 'https://www.linkedin.com/in/manoj-m-c/',
  },
]

export function Founders() {
  return (
    <PageShell
      eyebrow="Company"
      eyebrowIcon="Users"
      title="The people behind xTrac"
      subtitle="A small, senior team building an AI organization anyone can run — from Mysuru, India."
    >
      <div className="flex justify-center">
        <CircularTestimonials
          testimonials={FOUNDERS}
          autoplay
          colors={{
            name: 'hsl(var(--foreground))',
            designation: 'hsl(var(--primary))',
            testimony: 'hsl(var(--muted-foreground))',
            arrowBackground: 'hsl(var(--primary))',
            arrowForeground: 'hsl(var(--primary-foreground))',
            arrowHoverBackground: '#1d4ed8',
          }}
          fontSizes={{ name: '28px', designation: '18px', quote: '19px' }}
        />
      </div>

      {/* LinkedIn / email for both founders */}
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3">
        {FOUNDERS.map((f) => (
          <div
            key={f.name}
            className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-soft"
          >
            <span className="text-sm font-semibold">{f.name}</span>
            <a
              href={f.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${f.name} on LinkedIn`}
              className="inline-grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white"
            >
              <Icon name="Linkedin" size={16} strokeWidth={2} />
            </a>
            <a
              href={`mailto:${f.email}`}
              aria-label={`Email ${f.name}`}
              className="inline-grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="Mail" size={16} strokeWidth={2} />
            </a>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-muted/40 p-8 text-center">
        <h3 className="text-lg font-bold">Backed by iEllipse Technologies</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          xTrac AI is built and operated by iEllipse Technologies, a partnership firm registered in
          Mysuru, Karnataka, India.
        </p>
      </div>
    </PageShell>
  )
}
