export const metadata = { title: 'FAQ — AMAL', description: 'Common questions about the AMAL utility token and platform' }
import PageHeader from '@/components/PageHeader'
import { HelpCircle } from 'lucide-react'

const items = [
  { q: 'What is AMAL Token?', a: 'AMAL is an ERC‑20 donation and governance token powering a transparent giving platform on Ethereum.' },
  { q: 'How can I donate?', a: 'Connect your wallet, select a verified campaign, and donate using ETH or $AMAL.' },
  { q: 'Is AMAL a stablecoin?', a: 'No. AMAL is a utility token — not pegged to any currency — designed to enable traceable donations and governance.' },
  { q: 'How do I earn rewards?', a: 'By donating, staking, or engaging in campaigns. The DAO distributes tokens to active contributors.' },
  { q: 'How are NGOs verified?', a: 'Every NGO completes KYC verification and ongoing audits through AMAL’s partner review network.' },
]

export default function Page() {
  return (
    <main>
      <PageHeader title="FAQ" kicker="Help" icon={<HelpCircle className="w-3.5 h-3.5" />} description={<>Answers to common questions about $AMAL and the platform.</>} />
      <div className="section max-w-5xl mx-auto px-4 grid gap-4">
        {items.map(({ q, a }) => (
          <details key={q} className="card p-5">
            <summary className="font-semibold cursor-pointer">{q}</summary>
            <p className="mt-2 text-[#0F172A]/80 text-sm">{a}</p>
          </details>
        ))}
      </div>
    </main>
  )
}


