import { PageShell } from '@/components/layout/PageShell'
import { Prose } from '@/components/layout/Prose'
// Verbatim content, extracted from the live xtrac.app/data-deletion page. Do
// not paraphrase — edit the source and re-sync src/content/legal/*.html.
import body from '@/content/legal/data-deletion.html?raw'

export function DataDeletion() {
  return (
    <PageShell eyebrow="Legal" eyebrowIcon="Trash2" title="Data Deletion">
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Prose>
    </PageShell>
  )
}
