import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Info } from 'lucide-react'

export const metadata = { title: 'About — AMAL', description: 'Our mission, story and milestones' }

export default function Page() {
  return (
    <>
      <PageHeader title="About AMAL" kicker="Company" icon={<Info className="w-3.5 h-3.5" />} description={<>We are making giving transparent, stable, and sustainable. Donations should be visible end‑to‑end, represented by a predictable unit of value, and released on milestones so recipients can plan with confidence and donors see what happens next.</>} />
      <Section>
        <h2 className="h2">Our Story</h2>
        <p className="mt-3 text-[#0F172A]/80 max-w-5xl">Traditional donation rails reward speed of fundraising, not quality of follow‑through. Reports come late, reserves are opaque, and projects struggle with lumpy cash flows. AMAL pairs contributions with a hybrid reserve, expresses them as a stable representation, and unlocks funds over time as milestones are verified.</p>
      </Section>
    </>
  )
}


