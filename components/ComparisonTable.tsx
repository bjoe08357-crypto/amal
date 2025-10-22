type Row = {
  name: string
  transparency: string
  intendedUse: string
  stabilization: string
  audits: string
}

const rows: Row[] = [
  { name: 'AMAL', transparency: 'Hybrid reserves, public breakdown, audits (planned cadence)', intendedUse: 'Donations / program value', stabilization: 'Soft $1 peg, diversified reserves + algorithmic buffer', audits: 'Periodic, third-party (reports)' },
  { name: 'USDC', transparency: 'Attestations of fiat reserves', intendedUse: 'Payments / settlement', stabilization: 'Fiat reserve', audits: 'Monthly attestations' },
  { name: 'DAI', transparency: 'On-chain + collateralized', intendedUse: 'DeFi collateral / payments', stabilization: 'Over-collateralized crypto + modules', audits: 'Protocol transparency' },
  { name: 'FRAX', transparency: 'On-chain + modules', intendedUse: 'DeFi / stable payments', stabilization: 'Algorithmic + collateral', audits: 'Protocol transparency' },
  { name: 'UST (historic)', transparency: 'Low', intendedUse: 'DeFi', stabilization: 'Algorithmic', audits: 'N/A' },
]

export default function ComparisonTable() {
  return (
    <div className="card p-5 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="py-2">Asset</th>
            <th>Transparency</th>
            <th>Intended Use</th>
            <th>Stabilization</th>
            <th>Audits</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-[var(--border)] align-top">
              <td className="py-2 font-semibold">{r.name}</td>
              <td className="pr-4">{r.transparency}</td>
              <td className="pr-4">{r.intendedUse}</td>
              <td className="pr-4">{r.stabilization}</td>
              <td>{r.audits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}





