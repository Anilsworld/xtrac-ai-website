import { useState } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icon } from '@/components/primitives'

const CHANNELS = [
  { icon: 'Mail', title: 'Email us', value: 'support@xtrac.app', href: 'mailto:support@xtrac.app' },
  { icon: 'Phone', title: 'Call us', value: '+91 6361823138', href: 'tel:+916361823138' },
  { icon: 'ShieldCheck', title: 'Data Protection Officer', value: 'akumar@xtrac.app', href: 'mailto:akumar@xtrac.app' },
  { icon: 'MapPin', title: 'Visit us', value: 'Hootagalli, Mysuru 570018, India' },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <PageShell
      eyebrow="Company"
      eyebrowIcon="MessageSquare"
      title="Talk to us"
      subtitle="Questions, demos, partnerships or support — reach the team behind xTrac AI in Mysuru, India."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* channels */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {CHANNELS.map((c) => {
            const inner = (
              <Card className="flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary ring-1 ring-primary/15">
                  <Icon name={c.icon} size={20} strokeWidth={2} />
                </span>
                <div>
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">{c.value}</div>
                </div>
              </Card>
            )
            return c.href ? (
              <a key={c.title} href={c.href} className="block transition hover:-translate-y-0.5">
                {inner}
              </a>
            ) : (
              <div key={c.title}>{inner}</div>
            )
          })}
        </div>

        {/* form (UI demo — wire to your inbox / CRM) */}
        <Card className="p-7">
          <h2 className="text-lg font-bold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We usually reply within a few hours on business days.</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Priya Sharma" required />
              </div>
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Acme Co." />
            </div>
            <div>
              <Label htmlFor="message">How can we help?</Label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us a bit about your business…"
                className="flex w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-soft outline-none transition placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" size="lg" className="shine-cta w-full">
              Send message
              <Icon name="Send" size={17} strokeWidth={2.2} />
            </Button>
            {sent && (
              <p className="flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2.5 text-sm text-accent-foreground">
                <Icon name="Info" size={15} strokeWidth={2} />
                Demo form — connect this to your inbox or CRM to make it live.
              </p>
            )}
          </form>
        </Card>
      </div>
    </PageShell>
  )
}
