import { ReactNode } from 'react'

export default function PageHeader({ title, description, kicker, icon }: { title: string, description?: ReactNode, kicker?: string, icon?: ReactNode }) {
  return (
    <section className="section aurora-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        {kicker && (
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 backdrop-blur px-3 py-1 text-xs text-[#0F172A]/70 mb-2">
            {icon}
            <span className="uppercase tracking-wider">{kicker}</span>
          </div>
        )}
        <h1 className="h1 gradient-text">{title}</h1>
        {description && <p className="mt-3 text-[#0F172A]/80">{description}</p>}
      </div>
    </section>
  )
}


