import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Building2 } from 'lucide-react'

export const metadata = { title: 'NGOs — AMAL', description: 'Trusted support for NGOs' }

export default function Page() {
  return (
    <>
      <PageHeader
        title="Trusted Support for NGOs"
        kicker="NGOs"
        icon={<Building2 className="w-3.5 h-3.5" />}
        description={<>List your campaigns, connect directly with contributors, and receive funds faster.</>}
      />

      <Section narrow>
        <h2 className="h2">Milestone‑Based Funding</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5">Secure disbursements as you achieve measurable results — ensuring accountability and trust.</div>
          <div className="card p-5">Independent verifiers confirm progress before release.</div>
        </div>
      </Section>

      <Section narrow>
        <h2 className="h2">Tools for Growth</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5">Analytics, donor engagement tools, and impact reporting.</div>
          <div className="card p-5">Access to DAO‑backed grants and global donor networks.</div>
        </div>
      </Section>
    </>
  )
}


