import Section from '@/components/Section'

const steps = [
  { n: '1', title: 'Deposit & Mint', body: 'Donations enter the system and are represented as AMAL targeting a soft $1 peg, backed by a hybrid reserve.' },
  { n: '2', title: 'Allocate to Impact', body: 'Funds go to verified NGOs/recipients with milestone-based releases for accountability and transparency.' },
  { n: '3', title: 'Hold, Spend, or Redeem', body: 'Recipients can hold AMAL, spend with supported partners, or redeem where available (varies by region and regulation).' },
]

export default function AmalMechanism() {
  return (
    <Section>
      <h2 className="h2 text-center">The AMAL Mechanism</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {steps.map(s => (
          <div key={s.n} className="card p-5 relative overflow-hidden text-center hover:shadow-[0_12px_40px_rgba(2,8,23,0.10)] transition-shadow">
            <div className="absolute right-3 top-2 text-[#0F172A]/10 font-black text-6xl select-none">{s.n}</div>
            <div className="font-semibold">{s.title}</div>
            <p className="mt-2 text-[13.5px] text-[#0F172A]/70">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}


