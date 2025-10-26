import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Smartphone } from 'lucide-react'

export const metadata = { title: 'App — AMAL', description: 'Donor and NGO experience' }

export default function Page() {
  return (
    <>
      <PageHeader title="The AMAL App — Giving Made Transparent" kicker="Product" icon={<Smartphone className="w-3.5 h-3.5" />} description={<>The AMAL app empowers donors and NGOs to interact seamlessly in a trustless environment.</>} />

      <Section>
        <h2 className="h2">Donor Experience</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4 max-w-5xl mx-auto">
          <div className="card p-5">Select campaigns, donate in ETH or $AMAL, and track progress in real time.</div>
          <div className="card p-5">Receive automatic updates and reward notifications.</div>
          <div className="card p-5">View escrow status and milestone releases on‑chain.</div>
        </div>
      </Section>

      <Section>
        <h2 className="h2">NGO Experience</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4 max-w-5xl mx-auto">
          <div className="card p-5">Create and manage campaigns with milestone definitions.</div>
          <div className="card p-5">Receive funds as milestones are verified.</div>
          <div className="card p-5">Communicate outcomes directly with donors.</div>
        </div>
      </Section>
    </>
  )
}


