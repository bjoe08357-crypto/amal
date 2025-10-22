import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Workflow, Coins, Eye, Sparkles, BadgeCheck, ShieldCheck, Globe } from 'lucide-react'

export const metadata = { title: 'How It Works — AMAL', description: 'From donation to impact — stable, transparent, sustainable.' }

export default function Page() {
  const pillars = [
    { title: 'Stable Value', text: 'Your contribution is converted into our stable unit the moment it’s made, preserving real‑world purchasing power.', icon: <Coins className="w-5 h-5" /> },
    { title: 'Transparent Process', text: 'Every transaction is on‑chain; donation flows, escrow vaults and milestone releases are visible in real time.', icon: <Eye className="w-5 h-5" /> },
    { title: 'Sustainable Growth', text: 'Unused funds generate yield for future projects — your donation multiplies impact.', icon: <Sparkles className="w-5 h-5" /> },
  ]

  const steps = [
    { title: 'Donate', text: 'Choose your campaign, contribute via card, bank transfer or crypto.', icon: <Globe className="w-5 h-5" /> },
    { title: 'Convert', text: 'Funds automatically convert into AMAL at a 1:1 rate.', icon: <Coins className="w-5 h-5" /> },
    { title: 'Hold in Vault', text: 'Smart contracts escrow stablecoins while collateral earns yield.', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: 'Release', text: 'Milestones verified via oracles or partner audits trigger releases.', icon: <BadgeCheck className="w-5 h-5" /> },
    { title: 'Impact', text: 'Projects execute; vaults may continue earning until fully disbursed.', icon: <Sparkles className="w-5 h-5" /> },
    { title: 'Track', text: 'Monitor the entire lifecycle from donation to impact.', icon: <Eye className="w-5 h-5" /> },
  ]

  const better = [
    'No hidden fees — minimal protocol cost vs traditional overheads.',
    'Instant global access — donations convert immediately; faster access for recipients.',
    'Fraud‑resistant architecture — immutable ledgers and milestone‑locked releases.',
    'Value preservation — protected from currency swings across borders.',
    'Impact maximised — idle capital is mobilised to serve future giving.',
  ]

  const forWhom = [
    'Donors who demand visibility and value for their generosity.',
    'NGOs and charities needing reliable, transparent channels for funds and operations.',
    'Recipients and communities benefiting from faster, traceable, secure funding.',
    'Partners and sponsors seeking measurable impact and accountability.',
  ]

  return (
    <>
      <PageHeader
        title="Every donation. Every dollar. Visible and working for impact."
        kicker="How It Works"
        icon={<Workflow className="w-3.5 h-3.5" />}
        description={<>At AMAL, we don’t just move money — we make giving smarter. Discover how our end‑to‑end process turns generosity into trust, stability and long‑term change.</>}
      />

      {/* Section 1: One Platform, Three Pillars */}
      <Section narrow>
        <h2 className="h2">One Platform, Three Pillars</h2>
        <p className="mt-2 text-[#0F172A]/70">Stable Value. Transparent Process. Sustainable Growth.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="card p-5">
              <div className="flex items-center gap-2 font-semibold text-[#0F172A]">{p.icon}{p.title}</div>
              <p className="mt-2 text-[#0F172A]/80">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 2: Step-by-Step Flow */}
      <Section narrow>
        <h2 className="h2">Step‑by‑Step Flow</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="card p-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-[#0F172A] font-semibold"><span className="w-6 h-6 rounded-full bg-[#E8EFEA] text-center text-xs leading-6">{i + 1}</span>{s.title}</div>
                {s.icon}
              </div>
              <p className="mt-2 text-[#0F172A]/80">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3: Why It’s Better */}
      <Section narrow>
        <h2 className="h2">Why It’s Better</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {better.map((b) => (
            <div key={b} className="card p-5 text-[#0F172A]/80">{b}</div>
          ))}
        </div>
      </Section>

      {/* Section 4: For Whom? */}
      <Section narrow>
        <h2 className="h2">For Whom?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {forWhom.map((t) => (
            <div key={t} className="card p-5 text-[#0F172A]/80">{t}</div>
          ))}
        </div>
      </Section>

      {/* Section 5: Get Involved */}
      <Section narrow>
        <div className="card p-6 md:p-8 text-center">
          <h3 className="h3">Get Involved</h3>
          <p className="mt-2 text-[#0F172A]/80 max-w-2xl mx-auto">Ready to see how your giving can evolve? Visit our campaigns, select a cause, and watch your donation travel end‑to‑end in real time.</p>
          <div className="mt-4 inline-flex gap-3">
            <a href="/donors" className="btn-primary">Explore Campaigns</a>
            <a href="/contact" className="btn-outline">Join AMAL</a>
          </div>
        </div>
      </Section>
    </>
  )
}


