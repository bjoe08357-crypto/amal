import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Map } from 'lucide-react'
import Timeline from '@/components/Timeline'

export const metadata = { title: 'Roadmap — AMAL', description: 'Phases from launch to DAO and beyond' }

export default function Page() {
  const items = [
    { title: 'Phase 1 – Launch', time: 'Q4 2025', description: 'Token launch, website upgrade, pilot NGO campaigns.' },
    { title: 'Phase 2 – Platform Growth', time: 'Q1 2026', description: 'Mobile app, staking dashboard, regional NGO onboarding.' },
    { title: 'Phase 3 – Global Outreach', time: 'Q2 2026', description: 'Corporate CSR partnerships, fiat on‑ramp integration.' },
    { title: 'Phase 4 – DAO Activation', time: 'Q3 2026', description: 'Full DAO governance and community voting.' },
    { title: 'Phase 5 – Ecosystem Expansion', time: '2027 +', description: 'API integrations, multi‑chain support, global charity alliances.' },
  ]

  return (
    <>
      <PageHeader
        title="Roadmap"
        kicker="Plan"
        icon={<Map className="w-3.5 h-3.5" />}
        description={<>Milestones for scaling transparent giving and community ownership.</>}
      />

      <Section narrow>
        <div className="card p-6">
          <h2 className="h2">Phases</h2>
          <div className="mt-4">
            <Timeline items={items} />
          </div>
        </div>
      </Section>
    </>
  )
}


