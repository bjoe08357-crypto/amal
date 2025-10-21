export const metadata = { title: 'Privacy — AMAL', description: 'Privacy policy' }
import PageHeader from '@/components/PageHeader'
import { Lock } from 'lucide-react'

export default function Page() {
  return (
    <main>
      <PageHeader title="Privacy Policy" kicker="Policy" icon={<Lock className="w-3.5 h-3.5" />} description={<>This is a short placeholder policy. Replace with counsel‑reviewed terms and notices.</>} />
      <div className="section max-w-5xl mx-auto px-4" />
    </main>
  )
}


