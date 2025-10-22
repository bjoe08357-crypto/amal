import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import { Building2 } from 'lucide-react'

export const metadata = { title: 'NGOs — AMAL', description: 'From funding delay to funding done.' }

export default function Page() {
  const builtFor = [
    'On‑chain verification: Every donation, vault and release is visible — boosting donor confidence.',
    'Rapid deployment: Launch campaigns quickly with standardised smart‑contract templates.',
    'Milestone‑based funding: Secure ongoing support while meeting performance goals.',
    'Yield on reserves: Idle funds earn income to reinvest into operations.',
  ]

  const features = [
    'Campaign creation interface, KYC/AML verification, milestone setup.',
    'Escrow vault system with automated release logic.',
    'Real‑time dashboard for funds flow, campaign status and impact reporting.',
    'Donor portal: communicate updates, share media, build trust.',
  ]

  const whyChoose = [
    'Greater transparency = more donor trust = higher retention.',
    'Lower cost = more of each donation reaches beneficiaries.',
    'Global reach = accept fiat or crypto, from donors anywhere.',
    'Sustainable funding = yield supports operations, reducing dependence on fresh contributions.',
  ]

  const getStarted = [
    'Register your organisation and complete verification.',
    'Design your campaign: define goal, milestones, timeline.',
    'Link your wallet or fiat endpoint; set release conditions.',
    'Launch publicly; donors contribute and funds enter escrow.',
    'Provide updates, hit milestones, release funds, and deliver impact.',
  ]

  return (
    <>
      <PageHeader
        title="From funding delay to funding done — a new era for nonprofits."
        kicker="NGOs"
        icon={<Building2 className="w-3.5 h-3.5" />}
        description={<>AMAL offers NGOs a reliable, transparent platform to raise, allocate and report funds — building trust while improving operational efficiency.</>}
      />

      <Section narrow>
        <h2 className="h2">Built for NGOs</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {builtFor.map((t) => (
            <div key={t} className="card p-5 text-[#0F172A]/80">{t}</div>
          ))}
        </div>
      </Section>

      <Section narrow>
        <h2 className="h2">Platform Features</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {features.map((t) => (
            <div key={t} className="card p-5 text-[#0F172A]/80">{t}</div>
          ))}
        </div>
      </Section>

      <Section narrow>
        <h2 className="h2">Why NGOs Choose AMAL</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {whyChoose.map((t) => (
            <div key={t} className="card p-5 text-[#0F172A]/80">{t}</div>
          ))}
        </div>
      </Section>

      <Section narrow>
        <h2 className="h2">How to Get Started</h2>
        <ol className="mt-4 grid gap-3 max-w-5xl mx-auto">
          {getStarted.map((t, i) => (
            <li key={t} className="card p-5">{i + 1}. {t}</li>
          ))}
        </ol>
      </Section>

      <Section narrow>
        <div className="card p-6 md:p-8 text-center">
          <h3 className="h3">Let’s Raise the Standard</h3>
          <p className="mt-2 text-[#0F172A]/80 max-w-2xl mx-auto">Join AMAL’s global network of mission‑driven organisations transforming how giving works. Together we can build a world where every donation is visible, every dollar works, and every NGO can scale responsibly.</p>
          <div className="mt-4 inline-flex gap-3">
            <a href="/contact" className="btn-primary">Partner With Us</a>
            <a href="/how-it-works" className="btn-outline">See How It Works</a>
          </div>
        </div>
      </Section>
    </>
  )
}


