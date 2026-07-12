import { cn } from '@/lib/utils'

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden focusable="false">
      <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.09-2.02-3.76-2.05-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.15-.46 7.82 1.3 10.38.86 1.25 1.88 2.66 3.22 2.61 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.28 3.12-2.54.98-1.46 1.39-2.87 1.41-2.94-.03-.01-2.71-1.04-2.74-4.12M14.6 4.5c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.14 1.14.09 2.3-.58 3.01-1.43" />
    </svg>
  )
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden focusable="false">
      <path d="M3.9 2.3c-.3.2-.5.55-.5.98v17.44c0 .43.2.78.5.98l9.35-9.7L3.9 2.3z" fill="#00d0ff" />
      <path d="M17.6 8.02 5.7 1.2l9.25 9.6 2.65-2.78z" fill="#00e676" />
      <path d="M20.4 10.4 17.6 8.02l-2.65 2.78 2.9 2.99 2.55-1.5c.73-.42.73-1.47 0-1.89z" fill="#ffd400" />
      <path d="M5.7 22.8 17.6 15.98l-2.65-2.98-9.25 9.8z" fill="#ff3d50" />
    </svg>
  )
}

/** App Store + Google Play download buttons (real brand glyphs, dark pill style). */
export function StoreButtons({ className }: { className?: string }) {
  const base =
    'group inline-flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2.5 text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:hover:bg-white/90'
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <a href="#" aria-label="Download Tracy on the App Store" className={base}>
        <AppleGlyph />
        <span className="leading-none">
          <span className="block text-[0.62rem] font-medium opacity-70">Download on the</span>
          <span className="mt-0.5 block text-[0.95rem] font-semibold tracking-tight">App Store</span>
        </span>
      </a>
      <a href="#" aria-label="Get Tracy on Google Play" className={base}>
        <PlayGlyph />
        <span className="leading-none">
          <span className="block text-[0.62rem] font-medium opacity-70">Get it on</span>
          <span className="mt-0.5 block text-[0.95rem] font-semibold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  )
}
