import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'project', label: 'Project' },
  { id: 'kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = ['home', ...links.map((l) => l.id)]
      let cur = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-6">
        <button onClick={() => go('home')} className="flex items-center gap-2 font-display text-lg font-bold">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg font-mono text-sm font-bold text-black"
            style={{ background: 'linear-gradient(120deg,#22d3ee,#8b5cf6)' }}
          >
            {profile.name.charAt(0)}
          </span>
          <span>
            {profile.name}
            <span className="text-cyan">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`rounded-lg px-3.5 py-2 text-sm transition ${
                active === l.id ? 'text-cyan' : 'text-ink-2 hover:text-ink'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen((o) => !o)} className="text-ink-2 md:hidden" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-line md:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`block w-full px-6 py-3 text-left text-sm ${
                active === l.id ? 'text-cyan' : 'text-ink-2'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}