"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type NavItem = { href: string, label: string, children?: Array<{ href: string, label: string }> }

const nav: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/token', label: 'Token' },
  { href: '/app', label: 'App' },
  {
    href: '/how-it-works',
    label: 'How It Works',
    children: [
      { href: '/donors', label: 'Donors' },
      { href: '/ngos', label: 'NGOs' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  { href: '/roadmap', label: 'Roadmap' },
  { href: 'https://amalcoin.gitbook.io/amal-coin/', label: 'Whitepaper' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [elevated, setElevated] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const onScroll = () => setElevated(window.scrollY > 4); onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return (
    <header className={`sticky top-0 z-50 ${elevated ? 'bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(2,8,23,0.06)] ring-1 ring-[var(--border)]' : 'bg-white'}`}>
      <div className="relative">
        <div className="glow-bottom" />
      </div>
      <div className="container mx-auto h-14 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/amal-logo.png" alt="Amal" width={28} height={28} />
          <span className="font-semibold">AMAL</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {nav.map(i => {
            const isExternal = i.href.startsWith('http');
            if (i.children && i.children.length) {
              return (
                <div key={i.href} className="relative group">
                  <Link href={i.href} className="px-2 py-1 rounded-md hover:bg-[var(--surface)]">{i.label}</Link>
                  <div className="absolute left-0 top-full mt-1 hidden group-hover:block">
                    <div className="rounded-md border border-[var(--border)] bg-white shadow-[0_10px_30px_rgba(2,8,23,0.06)] min-w-[180px] py-2">
                      {i.children.map(c => (
                        <Link key={c.href} href={c.href} className="block px-3 py-2 hover:bg-[var(--surface)]">{c.label}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={i.href}
                href={i.href}
                className="px-2 py-1 rounded-md hover:bg-[var(--surface)]"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {i.label}
              </Link>
            )
          })}
        </nav>
        <button className="lg:hidden px-3 py-2" onClick={() => setOpen(v => !v)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-white">
          <div className="container mx-auto px-4 py-3 grid grid-cols-2 gap-2 text-sm">
            {nav.map(i => {
              const isExternal = i.href.startsWith('http');
              const Item = (
                <Link
                  key={i.href}
                  href={i.href}
                  className="px-3 py-2 rounded-md hover:bg-[var(--surface)]"
                  onClick={() => setOpen(false)}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {i.label}
                </Link>
              );
              if (i.children && i.children.length) {
                return (
                  <div key={i.href} className="col-span-2">
                    {Item}
                    <div className="mt-1 grid grid-cols-2 gap-2">
                      {i.children.map(c => (
                        <Link key={c.href} href={c.href} className="px-3 py-2 rounded-md hover:bg-[var(--surface)]" onClick={() => setOpen(false)}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              return Item;
            })}
          </div>
        </div>
      )}
    </header>
  )
}


