import Section from '@/components/Section'
import ReserveChart from '@/components/ReserveChart'
import PegSparkline from '@/components/PegSparkline'
import Link from 'next/link'

export default function HomeCharts() {
  return (
    <Section narrow className="bg-[var(--surface)]">
      <h2 className="h2 text-center">Transparency Preview</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="card p-5">
          <div className="font-semibold mb-2">Reserve Mix</div>
          <ReserveChart />
        </div>
        <div className="card p-5">
          <div className="font-semibold mb-2">Peg Stability</div>
          <PegSparkline />
        </div>
      </div>
      <div className="text-center mt-4">
        <Link href="/transparency" className="underline">See full transparency →</Link>
      </div>
    </Section>
  )
}





