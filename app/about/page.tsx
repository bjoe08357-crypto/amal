import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Info } from 'lucide-react'

export const metadata = { title: 'About — AMAL', description: 'Vision, mission and the future of transparent giving' }

export default function Page() {
  return (
    <>
      <PageHeader
        title="Building the Future of Transparent Giving"
        kicker="About"
        icon={<Info className="w-3.5 h-3.5" />}
        description={<>AMAL exists to rebuild global trust in philanthropy through transparency, efficiency and shared accountability — powered by $AMAL on Ethereum.</>}
      />

      <Section narrow>
        <h2 className="h2">The Vision</h2>
        <p className="mt-3 text-[#0F172A]/80">We’re not reinventing generosity — we’re giving it the infrastructure it deserves: transparent rails, efficient flows, and aligned incentives for all participants.</p>
      </Section>

      <Section narrow>
        <h2 className="h2">The Mission</h2>
        <p className="mt-3 text-[#0F172A]/80">To create a decentralized donation platform where donors, NGOs, and recipients operate with full visibility — powered by $AMAL, an Ethereum‑based token that rewards honesty and impact.</p>
      </Section>

      <Section narrow>
        <h2 className="h2">The Problem</h2>
        <p className="mt-3 text-[#0F172A]/80">Traditional charities lose up to 40% of funds to admin and fees. Donors rarely see proof of where their money goes. AMAL eliminates these blind spots through blockchain verification and automated disbursement.</p>
      </Section>

      <Section narrow>
        <h2 className="h2">The Solution</h2>
        <ul className="mt-3 grid gap-3">
          <li className="card p-5">100% on‑chain tracking of all campaigns and releases</li>
          <li className="card p-5">Minimal operational fees</li>
          <li className="card p-5">Milestone‑based smart contract disbursements</li>
          <li className="card p-5">Reward incentives for recurring donors and verified NGOs</li>
        </ul>
      </Section>

      <Section narrow>
        <h2 className="h2">The Vision Ahead</h2>
        <p className="mt-3 text-[#0F172A]/80">AMAL aims to become the backbone of decentralized philanthropy — connecting NGOs, corporations, and individuals into one trusted, transparent ecosystem.</p>
      </Section>
    </>
  )
}


