import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { LogosStrip } from '@/components/sections/LogosStrip'
import { Pillars } from '@/components/sections/Pillars'
import { Departments } from '@/components/sections/Departments'
import { SuperApp } from '@/components/sections/SuperApp'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Industries } from '@/components/sections/Industries'
import { Integrations } from '@/components/sections/Integrations'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { Security } from '@/components/sections/Security'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export function Marketing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogosStrip />
        <Pillars />
        <Departments />
        <SuperApp />
        <HowItWorks />
        <Industries />
        <Integrations />
        <CaseStudy />
        <Security />
        <Pricing />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
