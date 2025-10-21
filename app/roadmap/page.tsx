import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Map } from 'lucide-react'
import Timeline from '@/components/Timeline'
import kpis from '@/data/kpis.json'

export const metadata = { title: 'Roadmap — AMAL', description: 'Phases to launch and scale' }

export default function Page() {
  return (
    <>
      <PageHeader title="Roadmap" kicker="Plan" icon={<Map className="w-3.5 h-3.5" />} description={<>Phases to launch and scale with measurable KPIs.</>} />
      <Section>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl mx-auto">
          <div className="card p-5">
            <h2 className="h2">Phases</h2>
            <Timeline
              items={[
                { title: 'Phase 1 — Indonesia Pilot', description: 'Leverage the world’s #1 giving culture; partner with mosques and schools for high‑impact campaigns (50 pilots, 5–10K donors).' },
                { title: 'Phase 2 — Crypto & Mobile Outreach', description: 'List AMAL on select DEX/CEX, add fiat on‑ramps (Stripe, local wallets), and expand through Web3 communities.' },
                { title: 'Phase 3 — Regional & Global Scale', description: 'Localize for Southeast Asia, onboard global NGOs, and launch matching programs that boost donations by ≈ 50%.' },
              ]}
            />
          </div>
          <div className="card p-5">
            <h2 className="h2">KPIs</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#0F172A]/80">
              <li>≥ {kpis.mobileDonationShare}% mobile donation share</li>
              <li>≥ {kpis.repeatDonorRetention}% repeat donor retention</li>
              <li>{kpis.tokenUtilityVolume}% of volume via AMAL token utility</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}


