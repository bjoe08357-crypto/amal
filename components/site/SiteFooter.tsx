import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)]/60">
      <div className="glow-top" />
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-12 text-sm">
        <div className="md:col-span-5">
          <p className="h3 mb-2">AMAL</p>
          <p className="text-[#0F172A]/70 max-w-md">Transparent, stable and sustainable giving. Hybrid reserves, milestone-based releases, and clear reporting.</p>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Product</p>
            <ul className="space-y-1">
              {['Token','App','How It Works','Transparency'].map(l => (
                <li key={l}><Link href={`/${l.toLowerCase().replace(/ /g,'-')}`} className="hover:underline">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Company</p>
            <ul className="space-y-1">
              {['About','Economics','Roadmap','Contact'].map(l => (
                <li key={l}><Link href={`/${l.toLowerCase()}`} className="hover:underline">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-semibold mb-2">Newsletter</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email" className="w-full rounded-md border border-[var(--border)] px-3 py-2" />
            <button className="rounded-md px-3 py-2" style={{ background: '#B9D28E' }}>Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-[#0F172A]/60">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-xs text-[#0F172A]/60">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span>© {new Date().getFullYear()} AMAL</span>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclosures">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


