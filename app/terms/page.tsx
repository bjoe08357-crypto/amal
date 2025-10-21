export const metadata = { title: 'Terms — AMAL', description: 'Terms of service' }
import PageHeader from '@/components/PageHeader'
import { FileText } from 'lucide-react'

export default function Page() {
  return (
    <main>
      <PageHeader title="Terms of Service" kicker="Policy" icon={<FileText className="w-3.5 h-3.5" />} description={<>Short placeholder. Replace with finalized legal language and compliance notices.</>} />
      <div className="section max-w-5xl mx-auto px-4" />
    </main>
  )
}


