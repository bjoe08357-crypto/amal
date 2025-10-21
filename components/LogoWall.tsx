import Section from '@/components/Section'

export default function LogoWall() {
  return (
    <Section className="bg-white">
      <div className="text-center text-[#0F172A]/60 text-sm">Partners & supporters</div>
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-6 max-w-5xl mx-auto opacity-80">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-10 rounded-md bg-[var(--surface)] ring-1 ring-[var(--border)]" />
        ))}
      </div>
    </Section>
  )
}


