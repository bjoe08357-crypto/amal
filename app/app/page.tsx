import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Smartphone } from 'lucide-react'

export const metadata = { title: 'App — AMAL', description: 'Donor and NGO experience' }

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-[#0F172A]/70 mt-1 text-sm">{label}</div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <PageHeader title="The AMAL App" kicker="Product" icon={<Smartphone className="w-3.5 h-3.5" />} description={<>The AMAL App bridges donors and recipients through a transparent, milestone‑based system. Every donation becomes traceable, accountable, and efficient.</>} />

      <Section>
        <h2 className="h2">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4 max-w-5xl mx-auto">
          <div className="card p-5">On‑Chain Transparency: each transaction is verifiable in real time.</div>
          <div className="card p-5">Smart Milestones: funds unlock only after campaign goals are achieved.</div>
          <div className="card p-5">Low Fees: 1.5% platform fee vs 5–30% traditional costs.</div>
          <div className="card p-5">Fiat + Crypto Support: accept bank, card, or wallet payments.</div>
          <div className="card p-5">Mobile‑First UX: optimized for the way donors give today.</div>
          <div className="card p-5">Fraud Resistance: immutable records prevent scams and misuse.</div>
        </div>
      </Section>

      <Section>
        <h2 className="h2">Donor Experience</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4 max-w-5xl mx-auto">
          <div className="card p-5">Choose verified causes with clear milestones and budgets.</div>
          <div className="card p-5">Contribute and receive real-time updates and receipts.</div>
          <div className="card p-5">Track unlocks as milestones are verified, not just end reports.</div>
        </div>
      </Section>

      <Section>
        <h2 className="h2">NGO / Recipient Experience</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4 max-w-5xl mx-auto">
          <div className="card p-5">Propose milestones with deliverables, timelines, and budgets.</div>
          <div className="card p-5">Unlock funds as reviewers verify milestone completion.</div>
          <div className="card p-5">Hold, spend with partners, or redeem where available. Idle balances continue to earn protocol yield until used.</div>
        </div>
      </Section>

      <Section>
        <h2 className="h2">Dashboard (Mock)</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4 max-w-5xl mx-auto">
          <Stat label="Raised" value="$125,400" />
          <Stat label="Milestones Completed" value="12/18" />
          <Stat label="Active Donors" value="1,024" />
        </div>
      </Section>
    </>
  )
}


