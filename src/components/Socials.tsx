import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Instagram, Mail, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ChangeEvent, FormEvent } from 'react'
import { Section, Reveal, SectionTitle } from './Section'
import { socials } from '../data/socials'

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  x: Twitter,
  telegram: Send,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
}

const contactEmail = socials.find((s) => s.id === 'email')?.url.replace('mailto:', '') ?? ''

export default function Socials() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const set =
    (k: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Nama dan pesan wajib diisi.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Alamat email tidak valid.')
      return
    }
    setError('')
    const subject = encodeURIComponent(`Pesan dari ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    // Fallback: buka aplikasi email. Untuk Formspree/EmailJS, ganti baris ini dengan fetch().
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section id="kontak">
      <SectionTitle eyebrow="terhubung" title="Sosial Media & Kontak" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal>
          <p className="mb-6 leading-relaxed text-ink-2">
            Punya ide project, peluang kerja, atau sekadar ingin menyapa? Kirim pesan lewat
            formulir atau temukan saya di platform berikut.
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => {
              const Icon = iconMap[s.id] ?? Mail
              return (
                <motion.a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="grid h-12 w-12 place-items-center rounded-xl border border-line text-ink-2 transition hover:text-cyan"
                  style={{ boxShadow: '0 0 0 rgba(34,211,238,0)' }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.boxShadow = '0 0 20px rgba(34,211,238,0.35)')}
                  onMouseLeave={(ev) => (ev.currentTarget.style.boxShadow = '0 0 0 rgba(34,211,238,0)')}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass flex flex-col gap-4 rounded-2xl p-6">
            <div>
              <label className="mb-1 block text-sm text-ink-2">Nama</label>
              <input
                value={form.name}
                onChange={set('name')}
                className="w-full rounded-lg border border-line bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-cyan"
                placeholder="Nama kamu"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-ink-2">Email</label>
              <input
                value={form.email}
                onChange={set('email')}
                type="email"
                className="w-full rounded-lg border border-line bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-cyan"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-ink-2">Pesan</label>
              <textarea
                value={form.message}
                onChange={set('message')}
                rows={4}
                className="w-full resize-none rounded-lg border border-line bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-cyan"
                placeholder="Tulis pesanmu..."
              />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            {sent && <p className="text-sm text-cyan">Membuka aplikasi email… silakan kirim dari sana.</p>}
            <button
              type="submit"
              className="rounded-xl py-3 font-medium text-black transition hover:opacity-90"
              style={{ background: 'linear-gradient(120deg,#22d3ee,#8b5cf6)' }}
            >
              Kirim Pesan
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}