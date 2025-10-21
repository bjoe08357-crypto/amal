import Section from '@/components/Section'
import { Shield, Heart, Scale } from 'lucide-react'

const cards = [
  { icon: Shield, title: 'Transparent Reserves', body: 'Hybrid reserves with clear visibility and regular audits.' },
  { icon: Heart, title: 'Humanitarian Focus', body: 'Built for real-world impact with verified NGOs.' },
  { icon: Scale, title: 'Fair Economics', body: 'A nominal 1.5% platform fee; donor principal remains intact.' },
]

export default function WhyAmal() {
  return (
    <Section narrow className="bg-[var(--surface)]">
      <h2 className="h2 text-center">Why Amal?</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {cards.map((c) => (
          <div key={c.title} className="card p-5 text-center hover:shadow-[0_12px_40px_rgba(2,8,23,0.10)] transition-shadow">
            <c.icon className="mx-auto size-5 text-[#0F172A]/70" />
            <div className="mt-3 font-semibold">{c.title}</div>
            <p className="mt-1 text-[13.5px] text-[#0F172A]/70">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}


