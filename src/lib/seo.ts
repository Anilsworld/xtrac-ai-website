import { useEffect } from 'react'

/** Canonical origin for the deployed site. Update if the site ships on a
 *  different apex (sitemap.xml, robots.txt and llms.txt reference it too). */
export const SITE_URL = 'https://xtrac.app'

const DEFAULT_TITLE = 'xTrac AI — Autonomous AI agents that run your business'
const DEFAULT_DESCRIPTION =
  'xTrac deploys autonomous AI agents across sales, support, operations and finance — live on WhatsApp, web and voice. Set up fast, no code.'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Per-route SEO: title, description, canonical and Open Graph mirrors.
 * Search engines execute JS (Googlebot); non-JS AI crawlers get the static
 * index.html head + <noscript> + /llms.txt instead.
 */
export function useSeo({
  title,
  description,
  path,
}: {
  title?: string
  description?: string
  path: string
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} · xTrac AI` : DEFAULT_TITLE
    const desc = description ?? DEFAULT_DESCRIPTION
    const url = SITE_URL + (path === '/' ? '' : path)

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path])
}
