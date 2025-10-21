import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Workflow } from 'lucide-react'

export const metadata = { title: 'How It Works — AMAL', description: 'End-to-end flow and use cases' }

export default function Page() {
  return (
    <>
      <PageHeader title="End-to-End Flow" kicker="How It Works" icon={<Workflow className="w-3.5 h-3.5" />} description={<>1) Deposit & Mint → 2) Vault Storage → 3) Milestone Unlocks → 4) Yield Cycle (~3–6%) → 5) Hold/Spend/Redeem. Each transition is recorded so donors understand what happens next.</>} />
      <Section>
        <h2 className="h2">Use-Cases</h2>
        <div className="grid gap-4 max-w-5xl mx-auto">
          <div className="card p-5"><strong>NGO Campaign</strong> — $100K project → $10K unlocks monthly → remaining funds earn yield.</div>
          <div className="card p-5"><strong>Direct Aid</strong> — $200 donation → instant delivery → recipient chooses when to spend.</div>
          <div className="card p-5"><strong>Community Pool</strong> — shared vault where unused capital supports new initiatives.</div>
        </div>
      </Section>
      <Section>
        <h2 className="h2">Transparency & Audits</h2>
        <p className="mt-3 text-[#0F172A]/80">Reserve dashboards show peg history and vault balances; oracles (e.g., Chainlink) monitor prices and can trigger automated actions. Third‑party audits provide assurance as the protocol scales.</p>
      </Section>
    </>
  )
}


