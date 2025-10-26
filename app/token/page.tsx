import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Coins } from 'lucide-react'
import CopyableAddress from '@/components/CopyableAddress'

export const metadata = { title: 'Token — AMAL', description: 'ERC‑20 utility, governance, and allocation' }

export default function Page() {
  const allocation = [
    { category: 'Pre‑Sale (Non‑Locked)', allocation: '15 %', purpose: 'Early access, liquidity seeding' },
    { category: 'Team', allocation: '5 %', purpose: 'Founders and key contributors' },
    { category: 'Community', allocation: '15 %', purpose: 'Airdrops, engagement rewards' },
    { category: 'CEX Listings', allocation: '15 %', purpose: 'Centralized exchange liquidity' },
    { category: 'DEX Liquidity', allocation: '5 %', purpose: 'Decentralized trading pairs' },
    { category: 'Marketing', allocation: '17 %', purpose: 'Global campaigns & awareness' },
    { category: 'Business Development', allocation: '20 %', purpose: 'NGO & corporate partnerships' },
    { category: 'Technology', allocation: '8 %', purpose: 'Platform development & audits' },
  ]

  const details = [
    { label: 'Name', value: 'AMAL Token' },
    { label: 'Symbol', value: '$AMAL' },
    { label: 'Contract', value: '0x9B132c3f9fcAbf71B83e795e6730D1d8595555EE' },
    { label: 'Network', value: 'Ethereum (ERC‑20)' },
    { label: 'Total Supply', value: '200,000,000' },
    { label: 'Initial Price', value: 'TBD' },
  ]

  const utility = [
    'Donate directly to verified causes',
    'Stake to earn rewards and governance rights',
    'Participate in DAO decisions',
    'Access exclusive campaigns and recognition tiers',
  ]

  return (
    <>
      <PageHeader
        title="$AMAL Token — The Currency of Transparent Impact"
        kicker="Token"
        icon={<Coins className="w-3.5 h-3.5" />}
        description={<>$AMAL is an ERC‑20 utility and governance token that powers the AMAL Giving Ecosystem — driving donations, rewards, staking and DAO governance.</>}
      />

      <Section>
        <h2 className="h2">Overview</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {details.map(d => (
            <div key={d.label} className="card p-5">
              <div className="text-xs text-[#0F172A]/60">{d.label}</div>
              {d.label === 'Contract' ? (
                <CopyableAddress address={d.value} />
              ) : (
                <div className="font-semibold">{d.value}</div>
              )}
            </div>
          ))}
        </div>
      </Section>

        <Section>
          <h2 className="h2">Allocation</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {allocation.map(a => (
              <div key={a.category} className="card p-5">
                <div className="font-semibold">{a.category} — {a.allocation}</div>
                <div className="text-[#0F172A]/80 text-sm mt-1">{a.purpose}</div>
              </div>
            ))}
          </div>
        </Section>

      <Section>
        <h2 className="h2">Utility</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {utility.map(u => (<div key={u} className="card p-5">{u}</div>))}
        </div>
      </Section>
    </>
  )
}


