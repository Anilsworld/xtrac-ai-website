import { Section, Reveal, Icon } from '@/components/primitives'
import { FAQS } from '@/lib/content'
import * as Accordion from '@radix-ui/react-accordion'

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <Accordion.Item
                key={i}
                value={'item-' + i}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[1.02rem] font-semibold hover:bg-accent/50">
                    {f.q}
                    <Icon
                      name="ChevronDown"
                      size={18}
                      className="shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="px-5 pb-5 text-[0.97rem] leading-relaxed text-muted-foreground">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Reveal>
    </Section>
  )
}
