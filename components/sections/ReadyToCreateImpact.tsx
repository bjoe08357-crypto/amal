import Section from '@/components/Section'
import Link from 'next/link'

const ctas = [
  { href: '/app', title: 'Explore the App', body: 'See the donor and NGO experience, milestone releases, and impact tracking.' },
  { href: '/token', title: 'Learn the Token', body: 'Understand the soft $1 peg, hybrid reserves, and transparency model.' },
  { href: '/contact', title: 'Talk to Us', body: 'Partner, list a campaign, or request a briefing for your organization.' },
]

export default function ReadyToCreateImpact() {
  return (
    <Section>
      <h2 className="h2 text-center">Ready to Create Impact?</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {ctas.map((c) => (
          <Link key={c.href} href={c.href} className="card p-5 block hover:shadow-[0_12px_40px_rgba(2,8,23,0.10)] transition-shadow">
            <div className="font-semibold">{c.title}</div>
            <p className="mt-2 text-[13.5px] text-[#0F172A]/70">{c.body}</p>
          </Link>
        ))}
      </div>
    </Section>
  )}


