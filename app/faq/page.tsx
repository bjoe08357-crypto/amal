export const metadata = { title: 'FAQ — AMAL', description: 'Common questions about the token and the app' }
import PageHeader from '@/components/PageHeader'
import { HelpCircle } from 'lucide-react'

const items = [
  { q: 'What is AMAL?', a: 'A donations‑native stable representation targeting a soft $1 peg with hybrid reserves to keep program value predictable.' },
  { q: 'How does the soft peg work?', a: 'AMAL maintains stability via diversified reserves (fiat/T‑Bills, crypto, tokenized gold) and an algorithmic buffer.' },
  { q: 'Are reserves transparent?', a: 'Yes. Reserve mix is published and vault summaries are disclosed on the Transparency page. Third‑party audits are planned on a periodic cadence.' },
  { q: 'Can recipients redeem AMAL?', a: 'Redemption depends on region and partners. Recipients can hold, spend with partners, or redeem where available.' },
  { q: 'What are fees?', a: 'A nominal 1.5% platform fee funds operations; donor principal remains intact.' },
  { q: 'Who reviews milestones?', a: 'Designated reviewers validate evidence before unlocks are processed to increase accountability.' },
  { q: 'Do donors receive receipts/updates?', a: 'Yes. Donors see unlock events and receive updates as milestones progress.' },
  { q: 'Which chains/wallets?', a: 'Chain and wallet support will be announced as integrations are finalized; the experience works without crypto knowledge.' },
  { q: 'What are the risks?', a: 'Market/liquidity risk on reserve assets, operational risks around integrations, and jurisdictional compliance. See Disclosures.' },
  { q: 'How do NGOs get listed?', a: 'Submit interest via Contact. We verify partners and their programs before listing.' },
]

export default function Page() {
  return (
    <main>
      <PageHeader title="FAQ" kicker="Help" icon={<HelpCircle className="w-3.5 h-3.5" />} description={<>Answers to common questions about the token and the app.</>} />
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


