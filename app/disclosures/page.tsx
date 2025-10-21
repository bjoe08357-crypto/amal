export const metadata = { title: 'Disclosures — AMAL', description: 'Risk and program disclosures' }
import PageHeader from '@/components/PageHeader'
import { AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <main>
      <PageHeader title="Disclosures" kicker="Policy" icon={<AlertTriangle className="w-3.5 h-3.5" />} description={<>Risks vary by region and partner integrations. Redemption availability depends on jurisdiction and compliance. AMAL is for donations and program value — not a general purpose money equivalent.</>} />
      <div className="section max-w-5xl mx-auto px-4" />
    </main>
  )
}


