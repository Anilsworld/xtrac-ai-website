import { PageShell } from '@/components/layout/PageShell'
import { Prose } from '@/components/layout/Prose'
// Verbatim content, extracted from the live xtrac.app/privacy page. Do not
// paraphrase — edit the source policy and re-sync src/content/legal/*.html.
import body from '@/content/legal/privacy.html?raw'

export function Privacy() {
  return (
    <PageShell eyebrow="Legal" eyebrowIcon="ShieldCheck" title="Privacy Policy">
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Prose>
    </PageShell>
  )
}
