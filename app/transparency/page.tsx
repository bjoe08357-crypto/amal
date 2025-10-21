import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Shield } from 'lucide-react'
import ReserveChart from '@/components/ReserveChart'
import PegSparkline from '@/components/PegSparkline'
import vaults from '@/data/vaults.json'

export const metadata = { title: 'Transparency — AMAL', description: 'Reserves, peg and vaults' }

export default function Page() {
  return (
    <>
      <PageHeader title="Transparency" kicker="Data" icon={<Shield className="w-3.5 h-3.5" />} description={<>We publish reserve composition, peg behavior, and vault summaries. External audits provide additional assurance as we scale.</>} />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-5"><ReserveChart /></div>
          <div className="card p-5"><PegSparkline /></div>
        </div>
      </Section>
      <Section>
        <div className="card p-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="py-2">Name</th>
                <th>Chain</th>
                <th>Address</th>
                <th className="text-right">Balance (USD)</th>
              </tr>
            </thead>
            <tbody>
              {vaults.map((v) => (
                <tr key={v.name} className="border-t border-[var(--border)]">
                  <td className="py-2">{v.name}</td>
                  <td>{v.chain}</td>
                  <td>{v.address}</td>
                  <td className="text-right">${v.balanceUSD.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}


