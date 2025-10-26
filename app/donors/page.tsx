import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Heart } from 'lucide-react'

export const metadata = { title: 'Donors — AMAL', description: 'Empowering donors with transparency' }

export default function Page() {
  return (
    <>
      <PageHeader
        title="Empowering Donors with Transparency"
        kicker="Donors"
        icon={<Heart className="w-3.5 h-3.5" />}
        description={<>Track your donations, verify milestones, and receive instant updates — all from one dashboard.</>}
      />

      <Section narrow>
        <h2 className="h2">Rewarding Generosity</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5">Earn $AMAL rewards and digital badges for consistent contributions.</div>
          <div className="card p-5">Participate in governance and recognition tiers.</div>
        </div>
      </Section>

      <Section narrow>
        <h2 className="h2">Global Reach</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5">Support verified campaigns worldwide with fast, low‑cost transactions.</div>
          <div className="card p-5">Donate in ETH or $AMAL; see funds move in real time.</div>
        </div>
      </Section>
    </>
  )
}


