import { ReactNode } from 'react'

export default function Section({ children, className = '', narrow = false }: { children: ReactNode, className?: string, narrow?: boolean }) {
  return (
    <section className={`section ${className}`}>
      <div className={`container mx-auto px-4 ${narrow ? 'max-w-5xl' : ''}`}>{children}</div>
    </section>
  )
}


