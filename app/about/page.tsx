import Image from 'next/image'
import Section from '@/components/Section'
import PageHeader from '@/components/PageHeader'
import {
  Info,
  Eye,
  ShieldCheck,
  BadgeCheck,
  Globe,
  Coins,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from 'lucide-react'

export const metadata = { title: 'About — AMAL', description: 'Our mission, story and milestones' }

export default function Page() {
  const howSteps = [
    {
      title: 'Donate',
      text: 'You donate (via card, bank, or crypto) — funds convert into our stable unit.',
      icon: <Coins className="w-5 h-5" />,
    },
    {
      title: 'Escrow',
      text: 'Funds enter a secure escrow smart contract tied to a project plan.',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: 'Milestones',
      text: 'As recipients hit verified milestones, portions unlock for use.',
      icon: <BadgeCheck className="w-5 h-5" />,
    },
    {
      title: 'Sustainability',
      text: 'Idle balances earn yield so the system sustains itself — not from donor fees.',
      icon: <Sparkles className="w-5 h-5" />,
    },
  ]

  const ecosystem = [
    {
      title: 'Stable Unit',
      text: 'A hybrid‑reserve stablecoin that stays true to value across time and borders.',
      icon: <Coins className="w-5 h-5" />,
    },
    {
      title: 'Donation Platform',
      text: 'A friendly interface where donors and recipients meet — with full transparency.',
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: 'Sustainability Engine',
      text: 'Yield from reserves supports operations so principal can remain maximally impactful.',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ]

  const values = [
    { title: 'Visible', text: 'No hidden layers. End‑to‑end transparency on donations and disbursements.', icon: <Eye className="w-5 h-5" /> },
    { title: 'Valuable', text: 'Your dollar holds value; volatility and fees don’t quietly erode impact.', icon: <Coins className="w-5 h-5" /> },
    { title: 'Verifiable', text: 'Milestone proofs over promises — results you can actually check.', icon: <BadgeCheck className="w-5 h-5" /> },
    { title: 'Sustainable', text: 'A self‑supporting system that keeps giving alive long‑term.', icon: <ShieldCheck className="w-5 h-5" /> },
  ]

  return (
    <>
      {/* 1) Hero / Mission Statement */}
      <PageHeader
        title="Transparent. Stable. Sustainable Giving."
        kicker="About"
        icon={<Info className="w-3.5 h-3.5" />}
        description={
          <>At AMAL, we’re remaking how charity works — so that every donation is seen, every dollar keeps its value, and every project can plan for the future.</>
        }
      />

      {/* 2) Our Story */}
      <Section narrow>
        <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] items-center">
          <div>
            <h2 className="h2">Our Story</h2>
            <p className="mt-3 text-[#0F172A]/80">
              From generosity to real measurable impact. Traditional donation systems often reward how fast you raise funds — not how well the money gets put to use. Reports are delayed, funds disappear into overheads, and recipients struggle with unpredictable cash flow.
            </p>
            <p className="mt-3 text-[#0F172A]/80">
              That’s why AMAL was created: to give giving the infrastructure it deserves — a system where contributions are backed, visible, and released only when progress is proven.
            </p>
            <p className="mt-3 text-[#0F172A]/80">
              We believe generosity is not a moment, but a movement — and with AMAL, that movement is built on transparency, stability, and sustainability.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card flex items-center justify-center">
            <Image src="/amal-logo.png" alt="AMAL" width={240} height={240} className="opacity-90" />
          </div>
        </div>
      </Section>

      {/* 3) The Problem */}
      <Section narrow>
        <h2 className="h2">The Problem</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
              <p className="text-[#0F172A]/80">Too many donors never see how their money is used.</p>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
              <p className="text-[#0F172A]/80">Administrative and payment fees erode the impact of aid.</p>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
              <p className="text-[#0F172A]/80">Fraud and opaque operations undermine trust.</p>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
              <p className="text-[#0F172A]/80">Cross‑border giving is slow, expensive, and unpredictable.</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[#0F172A]/70">AMAL addresses all of these through blockchain‑powered visibility, minimal cost, and a global, open platform.</p>
      </Section>

      {/* 4) Our Solution */}
      <Section narrow>
        <h2 className="h2">Our Solution</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5 flex items-start gap-3">
            <Globe className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">Every donation and disbursement is on‑chain and available for verification.</p>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <Coins className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">Funds are converted into our stable unit, so value isn’t lost to currency swings.</p>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <BadgeCheck className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">Releases are milestone‑based — recipients access funds as they prove progress.</p>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">Idle funds earn yield, so the system supports itself without eating donor capital.</p>
          </div>
        </div>
        <p className="mt-4 text-[#0F172A]/70">It’s charity evolved: tech‑enabled, donor‑empowered, and recipient‑respecting.</p>
      </Section>

      {/* 5) How It Works */}
      <Section narrow>
        <h2 className="h2">How It Works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {howSteps.map((s, i) => (
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

      {/* 6) Our Ecosystem */}
      <Section narrow>
        <h2 className="h2">Our Ecosystem</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {ecosystem.map((e) => (
            <div key={e.title} className="card p-5">
              <div className="flex items-center gap-2 text-[#0F172A] font-semibold">{e.icon}{e.title}</div>
              <p className="mt-2 text-[#0F172A]/80">{e.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7) Impact & Values */}
      <Section narrow>
        <h2 className="h2">Impact & Values</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card p-5">
              <div className="flex items-center gap-2 text-[#0F172A] font-semibold">{v.icon}{v.title}</div>
              <p className="mt-2 text-[#0F172A]/80">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8) Our Team & Partners */}
      <Section narrow>
        <h2 className="h2">Our Team & Partners</h2>
        <div className="mt-4">
          <p className="text-[#0F172A]/80">
            We bring experience in blockchain, charity operations, finance, and global payments — so that giving is not just easier, but better.
          </p>
          <ul className="mt-3 grid gap-2">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6EA6B3]" /> Founders with deep fintech and web3 infrastructure background</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6EA6B3]" /> Advisors from non‑profits and payments</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#6EA6B3]" /> Early NGO and fintech partners</li>
          </ul>
        </div>
      </Section>

      {/* 9) Why Now? */}
      <Section narrow>
        <h2 className="h2">Why Now?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5 flex items-start gap-3">
            <Globe className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">Global generosity is huge — yet trust and efficiency remain low.</p>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <Eye className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">Mobile giving is soaring, especially across emerging markets.</p>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">Blockchain infrastructure has matured: trustless, global, and low‑cost.</p>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <BadgeCheck className="w-5 h-5 text-[#6EA6B3] mt-0.5" />
            <p className="text-[#0F172A]/80">AMAL sits at the intersection of technology, need, and momentum.</p>
          </div>
        </div>
      </Section>

      {/* 10) Join Us */}
      <Section narrow>
        <div className="card p-6 md:p-8 text-center">
          <h3 className="h3">Join Us</h3>
          <p className="mt-2 text-[#0F172A]/80 max-w-2xl mx-auto">
            Whether you’re a donor seeking transparency, a recipient needing reliable funds, or a partner ready to build the future of giving — we invite you to be part of the AMAL community. Because when giving works better, we all benefit.
          </p>
          <div className="mt-4 inline-flex gap-3">
            <a href="/contact" className="btn-primary">Contact Us</a>
            <a href="/how-it-works" className="btn-outline">How It Works</a>
          </div>
        </div>
      </Section>
    </>
  )
}


