import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Map } from 'lucide-react'
import Timeline from '@/components/Timeline'

export const metadata = { title: 'Roadmap — AMAL', description: 'From launch to global scale — our journey mapped.' }

export default function Page() {
  const items = [
    { title: 'Phase 1 — Foundation', time: 'Q4 2025', description: 'Complete platform beta: swap interface, donation portal, escrow smart contracts. Pilot campaigns with NGOs in Indonesia. First audit and reserve attestation.' },
    { title: 'Phase 2 — Expansion & Governance', time: 'Q1 2026', description: 'Integrate fiat on/off‑ramps. Launch governance token and initial DAO. Partner with major NGOs and fintechs.' },
    { title: 'Phase 3 — Global Rollout', time: 'Q2 2026', description: 'Multi‑regional launch (SEA & Africa). Listings and mobile wallet integration. Referral and matching campaigns.' },
    { title: 'Phase 4 — Ecosystem Growth', time: 'Q3 2026', description: 'Merchant and voucher payments. Cross‑chain expansion. Tokenised impact assets (community bonds, micro‑projects).' },
    { title: 'Phase 5 — Vision Realised', time: 'Q4 2026+', description: 'Fully decentralised DAO governs reserves and treasury. Global humanitarian network built on AMAL. New interoperable modules for social finance.' },
  ]

  return (
    <>
      <PageHeader
        title="From launch to global scale — our journey mapped."
        kicker="Roadmap"
        icon={<Map className="w-3.5 h-3.5" />}
        description={<>Here’s a detailed look at AMAL’s path ahead. Each milestone brings transparent, stable, and sustainable giving closer to reality.</>}
      />

      <Section narrow>
        <div className="card p-6">
          <h2 className="h2">Phases</h2>
          <div className="mt-4">
            <Timeline items={items} />
          </div>
        </div>
      </Section>

      <Section narrow>
        <div className="card p-6">
          <h2 className="h2">Why These Phases Matter</h2>
          <p className="mt-2 text-[#0F172A]/80">Each phase scales both capability and trust — moving from proof‑of‑concept in a domestic market to a globally accessible giving network governed by its users.</p>
        </div>
      </Section>
    </>
  )
}


