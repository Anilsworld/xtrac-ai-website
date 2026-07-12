import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LightRays } from '@/components/ui/light-rays'
import { LoginCards } from '@/components/ui/login-cards'
import { Icon, BrandLogo, ThemeToggle, BrandMark } from '@/components/primitives'
import { cn } from '@/lib/utils'

const TRUST = [
  { icon: 'ShieldCheck', label: 'GDPR' },
  { icon: 'ShieldCheck', label: 'DPDP 2023' },
  { icon: 'Lock', label: 'AES-256' },
]
const PANEL_LOGOS = [
  { name: 'whatsapp', label: 'WhatsApp' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'gmail', label: 'Gmail' },
  { name: 'meta', label: 'Meta' },
  { name: 'microsoftteams', label: 'Microsoft Teams' },
  { name: 'shopify', label: 'Shopify' },
  { name: 'slack', label: 'Slack' },
  { name: 'google', label: 'Google' },
  { name: 'salesforce', label: 'Salesforce' },
  { name: 'telegram', label: 'Telegram' },
  { name: 'notion', label: 'Notion' },
  { name: 'uber', label: 'Uber' },
]

function Wordmark({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5" aria-label="xTrac AI home">
      <BrandMark size={34} />
      <span className={cn('text-[1.15rem] font-extrabold tracking-tight', light ? 'text-white' : 'text-slate-900')}>
        xTrac <span className={light ? 'text-white/80' : 'text-primary'}>AI</span>
      </span>
    </Link>
  )
}

/** Live product preview — an xTrac agent resolving a customer ticket (light card). */
export function Login() {
  const [params] = useSearchParams()
  const isDemo = params.get('intent') === 'demo'
  const [mode, setMode] = useState<'signin' | 'signup'>(isDemo ? 'signup' : 'signin')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const signup = mode === 'signup'

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setDone(false)
    window.setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 900)
  }

  return (
    <div className="min-h-dvh bg-background lg:grid lg:grid-cols-[1.05fr_1fr]">
      {/* light-rays brand / product panel */}
      <aside className="relative hidden overflow-hidden p-10 text-slate-900 lg:flex lg:flex-col xl:p-14">
        <LightRays />
        <div className="relative z-10 flex h-full flex-col">
          <Wordmark />
          <div className="my-auto max-w-md py-10">
            <h1 className="text-[clamp(1.9rem,2.8vw,2.6rem)] font-extrabold leading-[1.12] text-slate-900">
              Put your business on autopilot.
            </h1>
            <p className="mt-3.5 text-[0.98rem] leading-relaxed text-slate-600">
              Join businesses running sales, support and operations on xTrac AI's autonomous
              workforce.
            </p>

            <div className="mt-7">
              <LoginCards />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {TRUST.map((t) => (
                <span key={t.label} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[0.75rem] font-medium text-slate-600">
                  <Icon name={t.icon} size={13} strokeWidth={2} className="text-primary" />
                  {t.label}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connects with</div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {PANEL_LOGOS.map((l) => (
                  <span key={l.name} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    <span className="h-5 w-5"><BrandLogo name={l.name} label={l.label} /></span>
                  </span>
                ))}
                <span className="grid h-10 min-w-10 place-items-center rounded-xl border border-slate-200 bg-white/60 px-2 text-[0.72rem] font-semibold text-slate-500 shadow-sm">
                  + more
                </span>
              </div>
            </div>
          </div>
          <p className="relative z-10 text-sm text-slate-500">© 2026 iEllipse Technologies · Mysuru, India</p>
        </div>
      </aside>

      {/* form panel */}
      <main className="flex min-h-dvh flex-col px-5 py-6 sm:px-8">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <Icon name="ArrowLeft" size={16} strokeWidth={2.2} />
              Back to site
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-10">
          <div className="mb-8 lg:hidden">
            <Wordmark />
          </div>

          {isDemo && (
            <div className="mb-5 flex items-center gap-2 rounded-lg border border-primary/20 bg-accent px-3.5 py-2.5 text-sm text-accent-foreground">
              <Icon name="CalendarClock" size={16} strokeWidth={2} />
              Create an account to book your demo.
            </div>
          )}

          <h2 className="text-2xl font-extrabold tracking-tight">
            {signup ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {signup ? 'Start your AI workforce free — no credit card.' : 'Sign in to your xTrac AI workspace.'}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Button variant="outline" className="w-full" type="button">
              <span className="h-4 w-4"><BrandLogo name="google" label="Google" /></span>
              Google
            </Button>
            <Button variant="outline" className="w-full" type="button">
              <span className="h-4 w-4"><BrandLogo name="microsoftteams" label="Microsoft" /></span>
              Microsoft
            </Button>
          </div>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium text-muted-foreground">or continue with email</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            {signup && (
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" autoComplete="name" placeholder="Priya Sharma" required />
              </div>
            )}
            <div>
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {!signup && (
                  <a href="#" className="mb-1.5 text-xs font-medium text-primary hover:underline">Forgot password?</a>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete={signup ? 'new-password' : 'current-password'}
                  placeholder="••••••••"
                  className="pr-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                  className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  <Icon name={showPw ? 'EyeOff' : 'Eye'} size={16} />
                </button>
              </div>
            </div>

            {!signup && (
              <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-input accent-[hsl(var(--primary))]" />
                Keep me signed in
              </label>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                <Icon name="LoaderCircle" size={18} className="animate-spin" />
              ) : (
                <>
                  {signup ? 'Create account' : 'Sign in'}
                  <Icon name="ArrowRight" size={18} strokeWidth={2.2} />
                </>
              )}
            </Button>

            {done && (
              <p className="flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2.5 text-sm text-accent-foreground">
                <Icon name="Info" size={15} strokeWidth={2} />
                Demo UI — connect your auth provider to make this live.
              </p>
            )}
          </form>

          {signup && (
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              By creating an account you agree to xTrac AI's{' '}
              <a href="#" className="text-primary hover:underline">Terms</a> and{' '}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          )}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {signup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => { setMode(signup ? 'signin' : 'signup'); setDone(false) }}
              className="font-semibold text-primary hover:underline"
            >
              {signup ? 'Sign in' : 'Create one free'}
            </button>
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Prefer a walkthrough?{' '}
          <Link to="/login?intent=demo" className="font-medium text-primary hover:underline">Book a demo</Link>
        </p>
      </main>
    </div>
  )
}
