import * as Lucide from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'

const registry = Lucide as unknown as Record<string, ComponentType<LucideProps>>

/** Renders a lucide-react icon by PascalCase name (never emoji). Falls back to a dot. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = registry[name] ?? Lucide.Circle
  return <Cmp aria-hidden focusable={false} {...props} />
}
