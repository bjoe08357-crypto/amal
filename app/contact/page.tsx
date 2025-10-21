export const metadata = { title: 'Contact — AMAL', description: 'Reach the team' }
import PageHeader from '@/components/PageHeader'
import { Mail } from 'lucide-react'

export default function Page() {
  return (
    <main>
      <PageHeader title="Contact" kicker="Talk to us" icon={<Mail className="w-3.5 h-3.5" />} description={<>Reach the AMAL team.</>} />
      <div className="section max-w-5xl mx-auto px-4">
      <form className="grid gap-3 max-w-md">
        <input className="rounded-md border border-[var(--border)] px-3 py-2" placeholder="Name" required />
        <input type="email" className="rounded-md border border-[var(--border)] px-3 py-2" placeholder="Email" required />
        <textarea className="rounded-md border border-[var(--border)] px-3 py-2" placeholder="Message" rows={5} required />
        <button className="rounded-md px-4 py-2" style={{ background: '#B9D28E' }}>Send</button>
      </form>
      <p className="mt-4 text-sm text-[#0F172A]/70">Or email support@amal.org</p>
      </div>
    </main>
  )
}


