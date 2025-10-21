import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Coins } from 'lucide-react'
import ReserveChart from '@/components/ReserveChart'
import PegSparkline from '@/components/PegSparkline'
import ComparisonTable from '@/components/ComparisonTable'

export const metadata = { title: 'Token — AMAL', description: 'What AMAL is and how it stays stable' }

export default function Page() {
  return (
    <>
      <PageHeader title="The AMAL Token" kicker="Token" icon={<Coins className="w-3.5 h-3.5" />} description={<>AMAL is the cornerstone of a new giving economy — a hybrid stablecoin designed for transparent, impact‑driven donations. Each AMAL targets a soft $1 peg, backed by a balanced reserve of fiat, crypto, tokenized commodities, and algorithmic buffers.</>} />
      <Section className="aurora-bg">
        <h2 className="h2">Reserve Composition</h2>
        <p className="mt-3 text-[#0F172A]/80">Reserves are visible on‑chain and audited regularly. Passive yield is generated without touching donor principal.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="card p-5">
            <ReserveChart />
            <ul className="mt-4 text-sm text-[#0F172A]/80 list-disc pl-5">
              <li>35% Fiat + T‑Bills: tokenized cash and Treasuries (e.g., Circle/Ondo).</li>
              <li>25% Crypto Assets: ETH, BTC, and staking derivatives (stETH/cbETH ~3–5% APY).</li>
              <li>15% Commodities: tokenized gold (PAXG/XAUT) as inflation‑resistant hedge.</li>
              <li>25% Algorithmic Buffer: protocol‑controlled reserves for stabilization.</li>
            </ul>
          </div>
          <div className="card p-5">
            <div className="font-semibold mb-2">Peg Stability</div>
            <PegSparkline />
            <p className="mt-3 text-sm text-[#0F172A]/80">Soft $1 peg via diversified reserves and algorithmic market operations.</p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="h2">Yield & Sustainability</h2>
        <p className="mt-3 text-[#0F172A]/80">Idle AMAL inside project vaults earns sustainable yield via staking, tokenized T‑Bills, and liquidity operations. That yield funds operations and development, ensuring longevity while protecting every donation’s principal.</p>
      </Section>
      <Section>
        <h2 className="h2">How AMAL Compares</h2>
        <p className="mt-3 text-[#0F172A]/80">AMAL is purpose‑built for humanitarian giving with full on‑chain transparency and a hybrid reserve model.</p>
        <div className="mt-4"><ComparisonTable /></div>
      </Section>
      <Section>
        <h2 className="h2">Governance & Transparency</h2>
        <p className="mt-3 text-[#0F172A]/80">A decentralized governance model will empower community votes on treasury allocation, reserve mix, and fee structures, aligning the protocol to AMAL’s humanitarian mission.</p>
      </Section>
    </>
  )
}


