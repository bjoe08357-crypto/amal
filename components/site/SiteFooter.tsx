import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)]/60">
      <div className="glow-top" />
      <div className="container mx-auto px-4 py-10 text-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[#0F172A]/80">© {new Date().getFullYear()} AMAL Token. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:underline" href="https://x.com/Amalcoinx" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className="hover:underline" href="https://discord.gg/mqSBbTRf" target="_blank" rel="noopener noreferrer">Discord</a>
            <a className="hover:underline" href="https://amalcoin.gitbook.io/amal-coin/" target="_blank" rel="noopener noreferrer">Whitepaper</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


