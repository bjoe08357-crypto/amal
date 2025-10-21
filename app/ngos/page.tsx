import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Building2 } from 'lucide-react'

export const metadata = { title: 'NGOs — AMAL', description: 'Benefits and how to get started' }

export default function Page() {
  return (
    <>
      <PageHeader title="For NGOs & Recipients" kicker="Partners" icon={<Building2 className="w-3.5 h-3.5" />} description={<>AMAL simplifies fundraising for verified organizations by eliminating banking friction and reducing fees to 1.5%.</>} />
      <Section>
        <h2 className="h2">NGO Workflow</h2>
        <ol className="mt-4 grid gap-3 max-w-5xl mx-auto">
          <li className="card p-5">1) Create Campaign: define milestones and timeline</li>
          <li className="card p-5">2) Receive Funds: donations arrive instantly as AMAL</li>
          <li className="card p-5">3) Unlock by Progress: releases per verified milestone</li>
          <li className="card p-5">4) Track & Report: impact metrics logged on‑chain</li>
        </ol>
      </Section>
      <Section>
        <h2 className="h2">Benefits</h2>
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="card p-5">Instant access to global donors.</div>
          <div className="card p-5">Reduced admin costs vs traditional platforms.</div>
          <div className="card p-5">Financial and operational transparency.</div>
          <div className="card p-5">Passive yield on idle funds.</div>
        </div>
      </Section>
      <Section>
        <h2 className="h2">Long‑Term Vision</h2>
        <p className="mt-3 text-[#0F172A]/80 max-w-3xl mx-auto">As NGOs adopt AMAL, it evolves into the default stablecoin for global giving, combining transparent reserves, DAO governance, and mission‑aligned finance.</p>
      </Section>
    </>
  )
}


