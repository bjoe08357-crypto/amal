"use client"

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean, msg: string }>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send')
      }
      setStatus({ ok: true, msg: 'Thanks! Your message has been sent.' })
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      setStatus({ ok: false, msg })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-md">
      <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-md border border-[var(--border)] px-3 py-2" placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="rounded-md border border-[var(--border)] px-3 py-2" placeholder="Email" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-md border border-[var(--border)] px-3 py-2" placeholder="Message" rows={5} required />
      <button disabled={submitting} className={`btn-primary ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}>{submitting ? 'Sending…' : 'Send'}</button>
      {status && (
        <p aria-live="polite" className={`text-sm ${status.ok ? 'text-emerald-700' : 'text-red-600'}`}>{status.msg}</p>
      )}
    </form>
  )
}


