import React from 'react'

interface TimelineItem {
  title: string
  time?: string
  description: string
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-[var(--border)] max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <li key={idx} className="mb-6 ml-4">
          <div className="absolute w-2 h-2 bg-[var(--ink)] rounded-full -left-1 mt-2" />
          <h3 className="font-semibold text-[var(--ink)]">{item.title}</h3>
          {item.time && <div className="text-xs text-[var(--ink)]/60">{item.time}</div>}
          <p className="mt-1 text-[var(--ink)]/80 text-sm">{item.description}</p>
        </li>
      ))}
    </ol>
  )
}





