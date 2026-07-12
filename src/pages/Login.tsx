import { useEffect } from 'react'
import { APP_URL } from '@/lib/content'
import { BrandMark } from '@/components/primitives'

/**
 * /login redirects to the real product app. The previous page here was a UI
 * demo with no auth backend (form submits went nowhere) — shipping it live
 * meant users could not actually sign in. Design reference preserved in git
 * history (feat/site-redesign-pages-pricing @ 79e131e and earlier).
 */
export function Login() {
  useEffect(() => {
    window.location.replace(APP_URL)
  }, [])

  return (
    <main className="grid min-h-dvh place-items-center bg-background px-6 text-center">
      <div>
        <div className="mx-auto mb-4 w-fit">
          <BrandMark size={44} />
        </div>
        <h1 className="text-lg font-bold">Taking you to xTrac&hellip;</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          If nothing happens,{' '}
          <a className="font-semibold text-primary underline-offset-2 hover:underline" href={APP_URL}>
            continue to business.xtrac.app
          </a>
          .
        </p>
      </div>
    </main>
  )
}
