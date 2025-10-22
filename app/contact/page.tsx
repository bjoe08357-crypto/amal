export const metadata = { title: 'Contact — AMAL', description: 'Reach the team' }
import PageHeader from '@/components/PageHeader'
import { Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function Page() {
  return (
    <main>
      <PageHeader title="Contact" kicker="Talk to us" icon={<Mail className="w-3.5 h-3.5" />} description={<>Reach the AMAL team.</>} />
      <div className="section max-w-5xl mx-auto px-4">
        <ContactForm />
        <p className="mt-4 text-sm text-[#0F172A]/70">Or email contact@amalcoin.io</p>
      </div>
    </main>
  )
}


