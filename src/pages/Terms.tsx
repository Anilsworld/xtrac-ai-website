import { PageShell } from '@/components/layout/PageShell'
import { Prose } from '@/components/layout/Prose'
// Verbatim content, extracted from the live xtrac.app/terms page. Do not
// paraphrase — edit the source policy and re-sync src/content/legal/*.html.
import body from '@/content/legal/terms.html?raw'

export function Terms() {
  return (
    <PageShell eyebrow="Legal" eyebrowIcon="FileText" title="Terms of Service">
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Prose>
    </PageShell>
  )
}
