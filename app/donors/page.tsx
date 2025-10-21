import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Heart } from 'lucide-react'

export const metadata = { title: 'Donors — AMAL', description: 'Benefits and how to get started' }

export default function Page() {
  return (
    <>
      <PageHeader title="For Donors" kicker="Community" icon={<Heart className="w-3.5 h-3.5" />} description={<>Traditional platforms hide costs and outcomes; AMAL makes every donation traceable, low‑fee, and impact verified.</>} />
      <Section>
        <h2 className="h2">Donor Journey</h2>
        <ol className="mt-4 grid gap-3 max-w-5xl mx-auto">
          <li className="card p-5">1) Choose a verified campaign</li>
          <li className="card p-5">2) Contribute via fiat or crypto — AMAL is minted instantly</li>
          <li className="card p-5">3) Watch funds unlock as milestones are achieved</li>
          <li className="card p-5">4) Receive real‑time impact updates and receipts</li>
        </ol>
      </Section>
      <Section>
        <h2 className="h2">Key Benefits</h2>
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="card p-5">Transparency: on‑chain ledger visible to all.</div>
          <div className="card p-5">Efficiency: minimal fees → maximum impact.</div>
          <div className="card p-5">Global Reach: borderless donations in seconds.</div>
          <div className="card p-5">Trust: audited protocol and verified recipients.</div>
        </div>
      </Section>
    </>
  )
}


