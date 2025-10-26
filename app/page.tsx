import Link from "next/link";
import type { CSSProperties } from "react";

export default function Home() {
  type PartStyle = CSSProperties & { ['--d']?: string };
  const p1: PartStyle = { width: 8, height: 8, background: '#B9D28E', top: 18, left: '20%', ['--d']: '7s' };
  const p2: PartStyle = { width: 10, height: 10, background: '#6EA6B3', top: 42, left: '76%', ['--d']: '6s' };
  const p3: PartStyle = { width: 6, height: 6, background: '#B9D28E', top: 120, left: '10%', ['--d']: '8s' };
  return (
    <main>
      {/* Hero */}
      <section className="section aurora-bg">
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <div className="part" style={p1} />
          <div className="part" style={p2} />
          <div className="part" style={p3} />
          <h1 className="h1 gradient-text">AMAL Token — Powering Transparent Global Giving</h1>
          <p className="mt-4 text-[#0F172A]/70">
            Join a new era of philanthropic impact. With $AMAL on Ethereum, every donation is traceable, every contributor is rewarded, and every project delivers verified change.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/donors" className="btn-primary">Explore $AMAL</Link>
            <Link href="/how-it-works" className="btn-outline">Learn How It Works</Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-[var(--surface)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="h2 text-center">A Radical Shift in How We Give</h2>
          <p className="mt-4 text-[#0F172A]/80 text-center">Traditional charity models are often opaque, slow and disconnected from donor intent. With the $AMAL ecosystem, we’re rewriting that narrative:</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="card p-5">Donations go directly to verified campaigns on‑chain.</div>
            <div className="card p-5">Smart contracts hold funds and release them only when milestones are met.</div>
            <div className="card p-5">Donors earn recognition and rewards through staking and engagement.</div>
            <div className="card p-5">Transparent dashboards show exactly where funds flow and what impact is achieved.</div>
          </div>
          <p className="mt-4 text-[#0F172A]/70 text-center">Giving should be as modern and accountable as our finances — and AMAL makes that possible.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="h2 text-center">Why We Built AMAL</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="card p-5">Trust Gap: Donors rarely know how funds are allocated or when they’re used.</div>
            <div className="card p-5">High Costs: A large portion of donations vanishes in overhead before reaching beneficiaries.</div>
            <div className="card p-5">Slow & Cross‑Border Issues: Many aid systems struggle with delays and currency loss.</div>
            <div className="card p-5">Lack of Engagement: Without feedback loops, donors often disengage.</div>
          </div>
          <p className="mt-4 text-[#0F172A]/70 text-center">AMAL was designed to solve these problems by combining blockchain transparency with user‑centric giving. The result: a platform where generosity is visible, meaningful, and rewarding.</p>
        </div>
      </section>

      {/* Core Features */}
      <section className="section bg-[var(--surface)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="h2 text-center">Platform Features at a Glance</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="card p-5"><div className="font-semibold">1. Donor Empowerment</div><p className="mt-1 text-[#0F172A]/80">Browse verified campaigns, track funds on‑chain, and receive impact certificates backed by smart contracts.</p></div>
            <div className="card p-5"><div className="font-semibold">2. Smart Escrow Funding</div><p className="mt-1 text-[#0F172A]/80">Funds are locked and only released when campaign milestones are validated. This ensures accountability and impact.</p></div>
            <div className="card p-5"><div className="font-semibold">3. Token Rewards & Staking</div><p className="mt-1 text-[#0F172A]/80">Use $AMAL to contribute, stake for rewards, and gain governance rights. Your participation is recognised and rewarded.</p></div>
            <div className="card p-5"><div className="font-semibold">4. NGO Growth Platform</div><p className="mt-1 text-[#0F172A]/80">Verified NGOs gain access to instant, low‑friction funding, real‑time dashboards and donor networks.</p></div>
            <div className="card p-5"><div className="font-semibold">5. Transparent Impact Dashboard</div><p className="mt-1 text-[#0F172A]/80">Live visualisations show donation flows, campaign status, funds released and outcomes delivered.</p></div>
            <div className="card p-5"><div className="font-semibold">6. Global Reach, Minimal Barriers</div><p className="mt-1 text-[#0F172A]/80">Donate in ETH or $AMAL from anywhere, support projects across borders with speed and low cost.</p></div>
          </div>
        </div>
      </section>

      {/* How It Works (Preview) */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="h2">How Your Donation Travels</h2>
          <ol className="mt-4 grid gap-3 text-left max-w-3xl mx-auto">
            <li className="card p-5">1. Select a verified campaign and contribute.</li>
            <li className="card p-5">2. Your funds are converted into $AMAL (or sent directly) and locked in escrow.</li>
            <li className="card p-5">3. The campaign proceeds to deliver against milestones.</li>
            <li className="card p-5">4. Upon milestone verification, funds are released. Donors earn rewards and see impact.</li>
          </ol>
          <div className="mt-5"><Link href="/how-it-works" className="btn-primary">Read Full Process</Link></div>
        </div>
      </section>

      {/* Tokenomics Snapshot */}
      <section className="section bg-[var(--surface)]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="h2">$AMAL Token — Fueling Giving</h2>
          <p className="mt-3 text-[#0F172A]/80">Our token drives every part of the ecosystem: donations, rewards, staking and governance.</p>
          <div className="mt-4 grid gap-3 max-w-2xl mx-auto text-left">
            <div className="card p-5">Network: Ethereum (ERC‑20)</div>
            <div className="card p-5">Total Supply: 200 million tokens</div>
            <div className="card p-5">Utility: Donate, stake, vote, earn</div>
          </div>
          <div className="mt-5"><Link href="/token" className="btn-outline">Tokenomics Details</Link></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="h2">Ready to Make a Real Difference?</h2>
          <p className="mt-3 text-[#0F172A]/80">Join the AMAL community today. Whether you’re a donor, a partner NGO or a supporter of transparent impact — your contribution matters.</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="https://x.com/Amalcoinx" target="_blank" rel="noopener noreferrer" className="btn-outline">Twitter</a>
            <a href="https://discord.gg/mqSBbTRf" target="_blank" rel="noopener noreferrer" className="btn-outline">Discord</a>
          </div>
        </div>
      </section>
    </main>
  );
}
