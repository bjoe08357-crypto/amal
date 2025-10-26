import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Workflow, Eye, BadgeCheck, ShieldCheck, Globe } from 'lucide-react'

export const metadata = { title: 'How It Works — AMAL', description: 'From donation to verified impact' }

export default function Page() {
  const steps = [
    { title: 'Choose a Campaign', text: 'Select from verified NGOs or community projects.', icon: <Globe className="w-5 h-5" /> },
    { title: 'Donate in ETH or $AMAL', text: 'Your contribution is instantly recorded on‑chain.', icon: <Eye className="w-5 h-5" /> },
    { title: 'Smart Contract Escrow', text: 'Funds are securely held until the NGO meets a milestone.', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: 'Verification & Release', text: 'Independent verifiers confirm progress before funds are released.', icon: <BadgeCheck className="w-5 h-5" /> },
    { title: 'Earn Rewards & Track Impact', text: 'Donors receive recognition and see impact data instantly.', icon: <Eye className="w-5 h-5" /> },
  ]

  return (
    <>
      <PageHeader
        title="How AMAL Works"
        kicker="How It Works"
        icon={<Workflow className="w-3.5 h-3.5" />}
        description={<>A simple, transparent path from your donation to verified outcomes.</>}
      />

      <Section narrow>
        <h2 className="h2">Process</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.title} className="card p-5">
              <div className="inline-flex items-center gap-2 text-[#0F172A] font-semibold"><span className="w-6 h-6 rounded-full bg-[#E8EFEA] text-center text-xs leading-6">{i + 1}</span>{s.title}</div>
              <p className="mt-2 text-[#0F172A]/80">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}


