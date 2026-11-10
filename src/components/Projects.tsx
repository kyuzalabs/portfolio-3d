import { useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { X } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'
import { Section, Reveal, SectionTitle } from './Section'
import { projects } from '../data/projects'
import type { Project } from '../types'

const CAT_LABEL: Record<string, string> = {
  all: 'Semua',
  web: 'Web',
  mobile: 'Mobile',
  fullstack: 'Fullstack',
  other: 'Lainnya',
}

const GRADIENTS = [
  'linear-gradient(135deg,#0b1020,#312e81)',
  'linear-gradient(135deg,#083344,#155e75)',
  'linear-gradient(135deg,#1e1b4b,#701a75)',
  'linear-gradient(135deg,#0b1020,#3b0764)',
]

function TiltCard({ children }: { children: ReactNode }) {
  const rx = useSpring(0, { stiffness: 260, damping: 22 })
  const ry = useSpring(0, { stiffness: 260, damping: 22 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 12)
    rx.set(-py * 12)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const cats = ['all', ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="project">
      <SectionTitle eyebrow="karya" title="Project Pilihan" />

      <Reveal className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              filter === c
                ? 'border-cyan bg-cyan/10 text-cyan'
                : 'border-line text-ink-2 hover:border-cyan hover:text-cyan'
            }`}
          >
            {CAT_LABEL[c] ?? c}
          </button>
        ))}
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <TiltCard>
              <div className="glass overflow-hidden rounded-2xl border border-line transition hover:border-cyan/40">
                <div
                  className="grid h-40 place-items-center text-6xl"
                  style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                >
                  {p.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <button
                      onClick={() => setSelected(p)}
                      className="shrink-0 rounded-md border border-line px-2 py-1 text-xs text-ink-3 transition hover:border-cyan hover:text-cyan"
                    >
                      Detail
                    </button>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-ink-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-lg py-2 text-center text-sm font-medium text-black transition hover:opacity-90"
                      style={{ background: 'linear-gradient(120deg,#22d3ee,#8b5cf6)' }}
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-lg border border-line py-2 text-center text-sm font-medium text-ink transition hover:border-cyan hover:text-cyan"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl font-semibold">{selected.title}</h3>
              <button onClick={() => setSelected(null)} className="text-ink-3 hover:text-cyan">
                <X />
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">{selected.longDescription}</p>
            <div className="mt-4">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">Fitur utama</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-2">
                {selected.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">Peran saya</p>
              <p className="mt-1 text-sm text-ink-2">{selected.role}</p>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={selected.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg py-2.5 text-center text-sm font-medium text-black"
                style={{ background: 'linear-gradient(120deg,#22d3ee,#8b5cf6)' }}
              >
                Live Demo
              </a>
              <a
                href={selected.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg border border-line py-2.5 text-center text-sm font-medium text-ink hover:border-cyan"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}