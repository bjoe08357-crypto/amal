import Section from '@/components/Section'

export const metadata = { title: 'Economics — AMAL', description: 'Platform economics and sustainability' }

export default function Page() {
  return (
    <>
      <Section narrow>
        <h1 className="h1">Platform Economics</h1>
        <p className="mt-3 text-[#0F172A]/80">AMAL charges a nominal 1.5% platform fee—far below the 5–30% many platforms take. Conservative yield on reserves and related protocol fees fund operations so donor principal remains intact.</p>
      </Section>
      <Section>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="card p-5">Low fees lower friction for donors and increase program efficiency.</div>
          <div className="card p-5">Stable planning via milestone releases reduces waste and improves outcomes.</div>
          <div className="card p-5">Transparency builds trust and encourages repeat giving.</div>
        </div>
      </Section>
    </>
  )
}


