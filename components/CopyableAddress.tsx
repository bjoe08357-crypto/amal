"use client"
import { useState } from 'react'
import { Copy } from 'lucide-react'

export default function CopyableAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false)
  const short = address.length > 20 ? `${address.slice(0, 10)}…${address.slice(-6)}` : address
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {}
  }
  return (
    <button onClick={onCopy} className="w-full text-left">
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold break-all sm:break-normal">{short}</span>
        <span className="inline-flex items-center gap-1 text-xs text-[#0F172A]/60">
          <Copy className="w-3.5 h-3.5" /> {copied ? 'Copied' : 'Copy'}
        </span>
      </div>
    </button>
  )
}


